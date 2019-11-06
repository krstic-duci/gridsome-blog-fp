import LayoutWrapper from '~/layouts/LayoutWrapper.vue';
import VueAnalytics from 'vue-analytics';
import { Plugin } from 'vue-fragment';

export default function (Vue, { head, router, isClient, isServer }) {
  var isAnalyticLoaded;
  if (process.isClient) {
    console.log(process.isClient, 'ne ne')
    if (localStorage.getItem('isAnalyticLoaded') === 'true') {
      return isAnalyticLoaded = false
    } else if (localStorage.getItem('isAnalyticLoaded') === 'false') {
      return isAnalyticLoaded = true
    }
  }
  if (isServer) {
    console.log(process.isServer, 'ovde')
    // if (localStorage.getItem('isAnalyticLoaded') === 'true') {
    //   return isAnalyticLoaded = false
    // } else if (localStorage.getItem('isAnalyticLoaded') === 'false') {
    //   return isAnalyticLoaded = true
    // }
  }

  Vue.use(Plugin)
  Vue.component('layout-wrapper', LayoutWrapper)
  Vue.use(VueAnalytics, {
    id: 'UA-151654148-1',
    autoTracking: {
      screenview: true
    },
    disabled: function () {
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