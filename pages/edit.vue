<template>
  <section>
    {{ result }}
    <div class="post-wrapper">
      <div>
        表題：<input v-model="posts.title" type="text" name="title">
      </div>
      <div>
        本文：<textarea v-model="posts.body" name="body" id="body" rows="5"></textarea>
      </div>
      <div style="margin: 5px 0 20px">
        送信内容：
        <p>
          {{ posts.title }}
        </p>
        <p>
          {{ posts.body }}
        </p>
      </div>
      <button v-on:click="formSubmit()" type="submit" class="button--green">送信</button>
    </div>
  </section>
</template>
<script>
  const axios = require('axios')
  let url = 'https://jsonplaceholder.typicode.com/posts/1'
  
  export default {
    // 多分使わなくなるページ
    data() {
      return {
        result: '',
        posts:
          {
            id: null,
            title: '',
            body: '',
          }
      }
    },
    methods: {
      async formSubmit () {

        axios.put(url,this.posts)
                .then((res) => {
                  console.log(res);
                  this.result = '成功しました'
                  this.posts.id = res.data.id
                })

        // 上記と同じ処理
        // const res = await axios.post(url, this.posts)
        // console.log(res);
        // this.result = '成功しました'


      }
    }
  }
  
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //         .then((response) => response.json())
  //         .then((json) => console.log(json));
</script>