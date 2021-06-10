<template>
  <section>
    <div class="container">
      <div class="post-wrapper">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </div>
      <div class="link-wrapper">
        <NuxtLink :to="{ name:'posts-id',params:{id:id} }" class="button--green">more →</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['id','title','body'],
  }
</script>
<style scoped>
  .container {
    text-align: left;
  }
  .post-wrapper {
    overflow: hidden;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>