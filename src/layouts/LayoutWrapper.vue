<template>
  <main class="layout">

    <the-header />

    <section>
      <slot/>
    </section>

    <the-footer />

  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
  *, :after, :before {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: #4dba87;
    text-decoration: none;
  }

  h1 {
    font-size: 4.8rem;
  }

  h6 {
    font-size: 2rem;
  }

  .heading-link {
    color: black;
    text-decoration: none;
  }

  .layout {
    max-width: 60rem;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>
