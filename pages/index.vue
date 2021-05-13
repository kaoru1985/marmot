<template>
  <div class="container">
    <div v-for="product in products">
      <Hoge1 :name="product.name" :price="product.price" :detail="product.detail" />
    </div>
    <p v-if="$store.state.hoge.number === 0"><strong>カートに何も入っていません</strong></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            products:[
                {
                    name: 'くつした',
                    price: 100,
                    detail: 'かわいいです'
                  
                },
                {
                    name: 'Tシャツ',
                    price: 500,
                    detail: 'かっこいいです'
                },
                {
                    name: 'スカート',
                    price: 900,
                    detail: 'ひらひらです'
                }
            ]
        }
    }
}
</script>
<style>
  .container {
    text-align: center;
  }
</style>
