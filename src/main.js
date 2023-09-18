import { createApp } from 'vue'
import FormContainer from './FormContainer.vue'
import FooterContainer from './FooterContainer.vue'

createApp(FormContainer).mount('#form-container')
createApp(FooterContainer).mount('#footer-container')