const app = Vue.createApp({
    data() {
        return {
            activity: null,
            price: null,
            people: null,
            link: null,
            peopleIn: null
        }
    },
    methods: {
        getActivity(peopleIn){
            if(peopleIn == null) {
                axios
                .get("https://cors-anywhere.herokuapp.com/http://boredapi.com/api/activity/")
                .then(response => (this.activity = response.data.activity, this.price = "Cost: " + response.data.price, this.people = "Number of people required: " + response.data.participants, this.link = response.data.link, console.log(response), console.log(peopleIn)))
                .catch(e => (console.log(e)))
            }
            else {
            axios
            .get("https://cors-anywhere.herokuapp.com/http://boredapi.com/api/activity?participants=" + peopleIn)
            .then(response => (this.activity = response.data.activity, this.price = "Cost: " + response.data.price, this.people = "Number of people required: " + response.data.participants, this.link = response.data.link, console.log(response), console.log(peopleIn)))
            .catch(e => (console.log(e)))
            }
        }
    }
})

app.mount('#app')