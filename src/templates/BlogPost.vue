<template>
  <article class="article">
    <g-link to="/blog">Blog</g-link>
    <h1>{{ $page.blogPost.title }}</h1>
    <span>{{ $page.blogPost.date }}</span>
    <g-image :src="$page.blogPost.image" :alt="$page.blogPost.title"/>
    <div class="content" v-html="$page.blogPost.content"></div>
  </article>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>

<style scoped>

  .article {
    max-width: 60rem;
    margin: 5rem auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .article h1 {
    font-size: 4rem;
  }

  .article img, .article .content p img {
    border-radius: .5rem;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 2rem;
  }

  .article .content p:first-child {
    margin-top: 1.5rem;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: inherit;
  }
</style>
