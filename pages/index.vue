<template>
  <div class="container">
    <div v-for="product in products" class="component-wrap">
      <Hoge1 :name="product.name" :price="product.price" :detail="product.description" :material="product.material" />
    </div>
    <p class="total">
      <span v-if="$store.state.hoge.number === 0">カートに何も入っていません</span>
      <span v-else>合計金額：{{ $store.state.hoge.price.toLocaleString() }} 円(税込)<br>
      <NuxtLink to='/confirm' class="button--green">注文内容を確認する</NuxtLink></span>
    </p>
  </div>
</template>

<script>
    const axios = require('axios')
    let url = 'https://script.google.com/macros/s/AKfycbzCenlXXVFhOGa0r8ly1tsjHr-Dv0qrcigGwJWE_kjGhRAimeqvLBQZMgBAjrIgRwwc1w/exec'

    export default {
        asyncData({params}) {
            return axios.get(url)
                .then((res) => {
                    console.log(res.data[0]);
                    return {
                        products: res.data
                    }
                })
        },
        
    // data() {
    //     return {
    //         products:[
    //             {
    //                 name: 'くつした',
    //                 price: 290,
    //                 material: '綿 100%',
    //                 detail: '丈夫でかわいいです'
    //
    //             },
    //             {
    //                 name: 'Tシャツ',
    //                 price: 1490,
    //                 material: '綿 90%、ポリエステル 10%',
    //                 detail: 'いい感じにかっこいいです'
    //             },
    //             {
    //                 name: 'スカート',
    //                 price: 1990,
    //                 material: 'ポリエステル 50%、レーヨン 50%',
    //                 detail: 'ひらひらですてきです'
    //             }
    //         ]
    //     }
    // }
}
</script>
<style>
  .container {
    text-align: center;
  }

  .container .component-wrap:last-of-type {
    margin-bottom: 30px;
  }
  
  .total {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
</style>
