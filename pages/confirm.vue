<template>
  <div class="container">
    <Header/>
    <h1>ご注文内容の確認</h1>
    <div class="component-wrap">
      <p v-for="confirm in confirms">
        <Confirmation :name="confirm.name" :itemNumber="confirm.itemNumber" :price="confirm.price"/>
      </p>
    </div>
    <p class="total">
      合計金額：ほげほげ 円(税込)
    </p>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                confirms: [
                    {
                        name: 'くつした',
                        itemNumber: 3,
                        price: 290,
                    },
                    {
                        name: 'Tシャツ',
                        itemNumber: 2,
                        price: 1490,
                    },
                    {
                        name: 'スカート',
                        itemNumber: 1,
                        price: 1990,
                    }
                ]
            }
        }
    }
</script>
<style scoped>
  .container {
    text-align: center;
  }
  
  .component-wrap {
    width: 90%;
    max-width: 800px;
    margin: 15px auto;
    padding: 20px;
    background-color: #FFF;
    border: solid 1px #F1F1F1;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  .container .component-wrap:last-of-type {
    margin-bottom: 30px;
  }
  
  .total {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  h1 {
    font-size: 1.2rem;
    margin-top: 20px;
  }
</style>
