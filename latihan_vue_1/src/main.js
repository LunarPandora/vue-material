import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App)
vm.mount('#app')

// setTimeout(() => vm.unmount('#app'), 11000)