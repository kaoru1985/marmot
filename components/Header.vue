<template>
  <div class="header-wrap">
    <div class="header-content">
      <NuxtLink to='/' class="header-title">maison marmot</NuxtLink>
      <NuxtLink :to=$store.state.fuga.buttonUrl class="button--green">{{ $store.state.fuga.buttonName }}</NuxtLink>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  .header-content {
    display: flex;
    justify-content: space-between;
  }
  .header-title {
    line-height: 40px;
  }
</style>