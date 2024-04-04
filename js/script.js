import {contacts} from './data.js';

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
    data(){
        return {
            contacts: contacts,
            time: "12:30",
            lastMessage: "Ultimo messaggio",
            activeUserId: 1
        }
    },
    methods:{
        setActiveUser(id){
            this.activeUserId = id;
        }
        
       
    },
    computed: {
        activeContact(id){
            return this.contacts.find((el)=> el.id === this.activeUserId);
        }
    },

    mounted(){
        console.log(this.contacts);
    }

}).mount('#app');