<template>
    <section>
        {{ result }}
        <div class="post-wrapper">
            <strong>記事を編集します</strong>
            <div style="margin-top: 20px;">
                表題：<input v-model="posts.title" type="text" name="title">
            </div>
            <div>
                本文：<textarea v-model="posts.body" name="body" id="body" rows="5"></textarea>
            </div>
            <div style="margin: 20px 0 20px">
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
        data() {
            return {
                result: '',
                posts:
                    {
                        title: '',
                        body: '',
                        id: '',
                    }
            }
        },
        methods: {
            async formSubmit () {
                axios.post(url,this.posts)
                    .then((res) => {
                        console.log(res);
                        this.result = '記事を更新しました';
                        // ここでリダイレクト
                        this.$router.push(`/posts/edit/${res.data.id}`)
                    })

                // 上記と同じ処理
                // const res = await axios.post(url, this.posts)
                // console.log(res);
                // this.result = '成功しました'

            }
        }
    }

</script>