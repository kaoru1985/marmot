<template>
  <div class="container">
    <Header />
    <h1>テストです！</h1>
    <!--{{ posts }}-->
  </div>
</template>

<script>
  const axios = require('axios')
  let url = 'https://jsonplaceholder.typicode.com/posts'
  export default {
      asyncData({ params }) {
          return axios.get(url)
              .then((res) => {
                  console.log(res.data);
                  // return { posts: res.data }
              })
      }
  }
</script>
<style scoped>
  .container {
    text-align: center;
  }
  h1 {
    margin-top: 20px;
  }
</style>
