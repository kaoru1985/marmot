<template>
  <section>
    <h1>{{ name }}</h1>
    <h2>{{ price.toLocaleString() }}円(税込)</h2>
    <div class="toggle-wrap">
      <button @click="toggleDetail()" class="detail-button">
        商品詳細を<span v-if="displayDetail">隠す</span><span v-else>表示</span>
      </button>
      <div v-if="displayDetail">
        <ul>
          <li>{{ material }}</li>
          <li>{{ detail }}</li>
        </ul>
      </div>
    </div>
    <button v-on:click="$store.commit('hoge/plusCount', price)" class="button--green">カートに入れる</button>
    <div class="cart">カート ({{ $store.state.hoge.number }})</div>
    <button v-on:click="$store.commit('hoge/resetCount')">削除</button>
  </section>
</template>
<script>
  export default {
      props: ['name','price','material','detail'],
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

<style scoped>
  .detail-button {
    color: #3b8070;
    background-color: #fff;
    border: none;
    text-decoration: underline;
  }
  .cart {
    display: inline-block;
    width: 90px;
  }
</style>