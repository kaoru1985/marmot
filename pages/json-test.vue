<template>
  <div class="container">
    <h1>テストです！</h1>
    {{ posts }}
  </div>
</template>

<script>
  // axiosさんはapiを使うための人です、本当はnuxt/axiosという専門職の人がいます
  const axios = require('axios')
  let url = 'https://jsonplaceholder.typicode.com/posts'
  export default {
      // asyncDataのうんぬんの中ではthis使えない問題→contextさんをthisに置き換えて使うみたいな…
      // asyncData(context) { context.$store とかでstoreの中身を指定できる！
      // asyncData({ params }, $store) from context  ←本当はこんなイメージ、contextの中にあるparamsとかcontextの中にある$storeって意味
      asyncData({ params }) {
          return axios.get(url)
              // .thenは「if うまくいったとき」みたいな。うまくいかなかったときは.catchでエラー表示とかできる。ちなみに上の行のつづき。
              .then((res) => {
                  // resさんも既存の人、resさんの持っているdataを表示する
                  console.log(res.data);
                  return { posts: res.data }
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
