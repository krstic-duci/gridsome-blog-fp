import LayoutWrapper from '~/layouts/LayoutWrapper.vue';
import { Plugin } from 'vue-fragment';

export default function (Vue, { head }) {
  Vue.use(Plugin)
  Vue.component('layout-wrapper', LayoutWrapper)
}