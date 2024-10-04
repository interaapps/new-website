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

declare global {
    interface Window {
        interaAppsExternalUserAccess: any;
    }
}

function checkUser(){
    const interaAppsExternalUserAccess = typeof window.interaAppsExternalUserAccess !== 'undefined' ? window.interaAppsExternalUserAccess : null
    if (interaAppsExternalUserAccess === null) return;
    interaAppsExternalUserAccess.setOnLoad(() => {
        console.log('loadde')
        if (interaAppsExternalUserAccess.loggedIn) {
            setUser(interaAppsExternalUserAccess.user)
        }
    })
    setTimeout(()=>{
        interaAppsExternalUserAccess.run()
    }, 250)
}
checkUser()