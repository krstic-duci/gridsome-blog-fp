<template>
  <footer>
    <p>
      this is a footer
    </p>
    <div class="test" v-if="isScriptLoaded">
      <button class="test-agree" @click="enableAnalytics">
        I Agree
      </button>
      <button class="test-dont" @click="disableAnalytics">
        I don't
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      isScriptLoaded: true
    }
  },
  mounted () {
    this.isEnabled()
  },
  methods: {
    isEnabled () {
      if (localStorage.getItem('isAnalyticLoaded') === 'true') {
        localStorage.setItem('isAnalyticLoaded', 'true')
        return
      } else {
        localStorage.setItem('isAnalyticLoaded', 'false')
      }
    },
    enableAnalytics () {
      this.$ga.enable()
      localStorage.setItem('isAnalyticLoaded', 'true')
    },
    disableAnalytics () {
      this.$ga.disable()
      localStorage.setItem('isAnalyticLoaded', 'false')
    }
  }
}
</script>

<style scoped>
footer {
  font-size: 30px;
}
.test {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
