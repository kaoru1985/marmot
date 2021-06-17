<template>
  <section>
    <div class="post-wrapper">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </div>
    <div class="link-wrapper">
      <Nuxt-link :to="'/posts/edit/'+ id" class="button--green">edit</Nuxt-link>
      <NuxtLink to="/posts" class="button--green">back</NuxtLink>
    </div>
  </section>
</template>
<script>
  const axios = require('axios')
  let url = 'https://jsonplaceholder.typicode.com/posts'
  export default {
      asyncData ({params}) {
          return axios.get(url + '/' + params.id)
              .then((res) => {
                  console.log(res.data.title);
                  return {
                      title: res.data.title,
                      body: res.data.body,
                      id: res.data.id,
                  }
              })
      }
  }
</script>