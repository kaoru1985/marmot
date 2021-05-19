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

<style>
  .component-wrap {
    width: 90%;
    max-width: 800px;
    margin: 15px auto;
    padding: 20px;
    background-color: #FFF;
    border: solid 1px #F1F1F1;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  }
</style>