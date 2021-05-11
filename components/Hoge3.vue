<template>
  <section>
    <h1>Counter App</h1>
    個数: {{ $store.state.hoge.number }} 個
    <button v-on:click="$store.commit('hoge/plusCount3')">+1</button>
    <button v-on:click="$store.commit('hoge/resetCount')">reset</button>
    <br>
    お値段: {{ $store.state.hoge.price }} 円
    <hr>
  </section>
</template>
