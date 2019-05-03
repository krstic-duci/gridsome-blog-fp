<template>
  <header class="header">
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/how-it-works">How it Works</g-link>
      <g-link class="nav__link" to="/features">Features</g-link>
      <g-link class="nav__link" to="/pricing">Pricing</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  height: 8rem;
}

.nav__link {
  margin-left: 2rem;
}
</style>

