<template>
  <layout-wrapper>
    <!-- <ul v-if="$page.allBlogPost.edges.length">
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <g-link :to="node.path">
          <h2 v-html="node.title"></h2>
        </g-link>
        <span v-html="node.date"/>
        <div v-html="node.description"></div>
      </li>
    </ul> -->
  </layout-wrapper>
</template>

<script>
export default {
  metaInfo: {
    title: 'Gridsome Blog Home'
  }
}
</script>


// <page-query>
//   query Home ($page: Int) {
//     allBlogPost (page: $page) {
//       edges {
//         node {
//           _id
//           title
//           date (format: "D MMMM, YYYY")
//           description
//           path
//         }
//       }
//     }
//   }
// </page-query>

<style scoped>

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 2rem;
  }

  ul li a h2 {
    margin-bottom: 1rem;
  }

  span {
    font-size: 1rem;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: .3rem;
  }

  ul li p {
    margin: 0;
    line-height: inherit;
  }
</style>