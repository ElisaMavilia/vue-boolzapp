import {contacts} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return {
            contacts: contacts,
            time: "12:30",
            lastMessage: "Ultimo messaggio inviato"
        }
    },
    methods:{
        
       
    },
    mounted(){
        console.log(this.contacts);
    }

}).mount('#app');