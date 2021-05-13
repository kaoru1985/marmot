<template>
  <section>
    <h1>{{ name }}</h1>
    個数: {{ $store.state.hoge.number }} 個
    <button v-on:click="$store.commit('hoge/plusCount', price)">+1</button>
    <button v-on:click="$store.commit('hoge/resetCount')">reset</button>
    <br>
    お値段: {{ $store.state.hoge.price }} 円
    <button @click="toggleDetail()">
      詳細を<span v-if="displayDetail">隠す</span><span v-else>表示</span>
    </button>
    <p v-if="displayDetail">商品詳細：{{ detail }}</p>
  </section>
</template>
<script>
  export default {
      props: ['name','price','detail'],
      data() {
          return {
              displayDetail: false
          }
      },
      
      methods: {
          toggleDetail: function () {
              this.displayDetail = !this.displayDetail
              //
              // if(!this.displayDetail) {
              //     this.displayDetail = true
              // }else{
              //     this.displayDetail = false
              // }
          }
      }
      
  }
</script>

<style>
section {
  width: 80%;
  max-width: 800px;
  margin: 15px auto;
  padding: 20px;
  border: solid 2px #3b8070;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
}

</style>