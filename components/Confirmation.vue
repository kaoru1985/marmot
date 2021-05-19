<template>
  <section>
    <span>{{ name }}　</span>
    <span>{{ itemNumber }} 点：</span>
    <span>{{ itemTotal.toLocaleString() }} 円</span>
  </section>
</template>

<script>
  export default {
      props: ['name','itemNumber','price'],
      data() {
          return {
              itemTotal: this.itemNumber * this.price
          }
      }
  }
</script>