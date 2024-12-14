import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { createApp } from 'vue'
import Dialog from 'primevue/dialog';
import Lara from '@primevue/themes/lara'


import App from './App.vue'
import { router } from './router'

import './assets/index.postcss'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
})
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Dialog', Dialog)

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
