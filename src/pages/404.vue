<template>
  <fragment>
    <h1>oooops no page found :(</h1>
    <g-link to="/">Please try home page...</g-link>
  </fragment>
</template>

<script>
export default {
  metaInfo: {
    title: '404 - Not Found',
    meta: [
      {name: "robots", content: "noindex, nofollow"}
    ]
  }
}
</script>
