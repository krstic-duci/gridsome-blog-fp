import LayoutWrapper from '~/layouts/LayoutWrapper.vue';
import VueAnalytics from 'vue-analytics';
import { Plugin } from 'vue-fragment';

export default function (Vue, { head, router, isClient }) {

  Vue.use(Plugin)
  Vue.component('layout-wrapper', LayoutWrapper)
  Vue.use(VueAnalytics, {
    id: 'UA-151654148-1',
    disabled: function () {
      var isAnalyticLoaded;
      if (localStorage.getItem('isAnalyticLoaded') === 'true') {
        isAnalyticLoaded = false
      } else {
        isAnalyticLoaded = true
      }
      return isAnalyticLoaded
    },
    debug: {
      sendHitTask: true
    },
    ready () {
      console.log('yeah')
    },
    router
  })
}