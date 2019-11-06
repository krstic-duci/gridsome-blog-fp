import LayoutWrapper from '~/layouts/LayoutWrapper.vue';
import VueAnalytics from 'vue-analytics';
import { Plugin } from 'vue-fragment';

export default function (Vue, { head, router, isClient, isServer }) {
  const isAnalyticLoaded = () => {
    if (localStorage.getItem('isAnalyticLoaded') === 'true') {
      return false
    } else if (localStorage.getItem('isAnalyticLoaded') === 'false') {
      return true
    }
  }

  Vue.use(Plugin)
  Vue.component('layout-wrapper', LayoutWrapper)
  Vue.use(VueAnalytics, {
    id: 'UA-151654148-1',
    autoTracking: {
      screenview: true
    },
    disabled: function () {
      if (isClient) {
        console.log('brm brm');
        console.log(isAnalyticLoaded());
      }
      return isAnalyticLoaded()
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