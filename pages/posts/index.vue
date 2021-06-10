<template>
    <div class="container">
        <Header />
        <h1>news</h1>
        <div v-for="post in posts" class="component-wrap">
            <Posts :id="post.id" :title="post.title" :body="post.body" />
        </div>
    </div>
</template>
<script>
    const axios = require('axios')
    let url = 'https://jsonplaceholder.typicode.com/posts'

    export default {
        asyncData({params}) {
            return axios.get(url)
                .then((res) => {
                    return {
                        posts: res.data
                    }
                })
        },
    }
</script>
<style>
    .container {
        text-align: center;
    }
</style>
