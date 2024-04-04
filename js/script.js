import {contacts} from './data.js';

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
    data(){
        return {
            contacts: contacts,
            time: "12:30",
            lastMessage: "Ultimo messaggio inviato",
            activeUserId: 1
        }
    },
    methods:{
        setActiveUser(id){
            this.activeUserId = id;
        }
        
       
    },
    mounted(){
        console.log(this.contacts);
    }

}).mount('#app');