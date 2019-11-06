import LayoutWrapper from '~/layouts/LayoutWrapper.vue';
import VueAnalytics from 'vue-analytics';
import { Plugin } from 'vue-fragment';

export default function (Vue, { head, router, isClient }) {

  Vue.use(Plugin)
  Vue.component('layout-wrapper', LayoutWrapper)
  Vue.use(VueAnalytics, {
    id: 'UA-151654148-1',
    autoTracking: {
      screenview: true
    },
    disabled: function () {
      // var isAnalyticLoaded;
      // if (isClient) {
      //   console.log(isClient, 'ne ne')
      //   if (localStorage.getItem('isAnalyticLoaded') === 'true') {
      //     isAnalyticLoaded = false
      //   } else if (localStorage.getItem('isAnalyticLoaded') === 'false') {
      //     isAnalyticLoaded = true
      //   }
      // }
      return false
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