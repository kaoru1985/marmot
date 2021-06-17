<template>
    <section>
        {{ result }}
        <div class="post-wrapper">
            <strong>記事を編集します</strong>
            <div style="margin-top: 20px;">
                表題：<input v-model="title" type="text" name="title">
            </div>
            <div>
                本文：<textarea v-model="body" name="body" id="body" rows="5"></textarea>
            </div>
            <div style="margin: 20px 0 20px">
                送信内容：
                <p>
                    {{ title }}
                </p>
                <p>
                    {{ body }}
                </p>
            </div>
            <button v-on:click="formSubmit()" type="submit" class="button--green">送信</button>
        </div>
    </section>
</template>
<script>
    const axios = require('axios')
    let url = 'https://jsonplaceholder.typicode.com/posts'

    export default {
        asyncData ({params}) {
            return axios.get(url + '/' + params.id)
                .then((res) => {
                    console.log(res.data.title);
                    return {
                        title: res.data.title,
                        body: res.data.body,
                    }
                })
        },
        data () {
            return {
                result: '',
            }
        },
        methods: {
            async formSubmit () {
                axios.put(url + '/' + this.$route.params.id,{ id:this.$route.params.id, title:this.title, body:this.body, userId:1 })
                    .then((res) => {
                        console.log(res);
                        this.result = '記事を更新しました';
                    })

                // 上記と同じ処理
                // const res = await axios.post(url, this.posts)
                // console.log(res);
                // this.result = '成功しました'

            }
        }
    }

</script>