import {contacts} from './data.js';

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
    data(){
        return {
            contacts: contacts,
            time: "12:30",
            lastMessage: "Ultimo accesso ",
            activeUserId: 1,
            userMessage: ''
            
        }
    },
    methods:{
        setActiveUser(id){
            this.activeUserId = id;
        },

        sendMessage(e){
            const newMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss'),
                message: this.userMessage,
                status: 'sent'
            }
            this.activeContact.messages.push(newMessage);
            this.userMessage = "";
            setTimeout(()=>{
                const contactAnswer = {
                    date: dt.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss'),
                message: 'ok!',
                status: 'received'
                }
                this.activeContact.messages.push(contactAnswer);
            },1000);
        }
    },
    computed: {
        activeContact(id){
            return this.contacts.find((el)=> el.id === this.activeUserId);
        },
        lastAccess(){
            const index = this.activeContact.messages.length - 1;
            return this.activeContact.messages[index].date;
        }
    },

    mounted(){
        console.log(this.contacts);
    }

}).mount('#app');