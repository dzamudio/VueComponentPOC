import { defineCustomElement } from 'vue'
import TestComponent from './components/my-test-component.ce.vue'

const element = defineCustomElement(TestComponent);

customElements.define("test-component", element);
