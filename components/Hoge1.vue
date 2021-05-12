<template>
  <section>
    <h1>Counter App</h1>
    個数: {{ $store.state.hoge.number }} 個
    <button v-on:click="$store.commit('hoge/plusCount1')">+1</button>
    <button v-on:click="$store.commit('hoge/resetCount')">reset</button>
    <br>
    お値段: {{ $store.state.hoge.price }} 円
  </section>
</template>

<style module>
section {
  width: 50%;
  margin: 15px auto;
  padding: 20px;
  border: solid 2px #3b8070;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
}

</style>