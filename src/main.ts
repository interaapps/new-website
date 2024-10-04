import './assets/main.scss'
import '@tabler/icons-webfont/dist/tabler-icons-outline.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useUserStore} from "@/stores/userStore";

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')



const {setUser} = useUserStore()

function checkUser(){
    console.log('checking', window.interaAppsExternalUserAccess)
    window.interaAppsExternalUserAccess.setOnLoad(() => {
        console.log('loadde')
        if (window.interaAppsExternalUserAccess.loggedIn) {
            console.log(window.interaAppsExternalUserAccess.user)
            setUser(window.interaAppsExternalUserAccess.user)
        }
    })
    setTimeout(()=>{
        window.interaAppsExternalUserAccess.run()
    }, 250)
}
checkUser()