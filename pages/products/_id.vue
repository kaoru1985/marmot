<template>
  <div>
    しょうひんしょうさいページ
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <p>{{ price }}円</p>
  </div>
</template>
<script>
  const axios = require('axios')
  let url = 'https://script.google.com/macros/s/AKfycbzW1cP3D9pt-4yKCMCr-_ly5AlsvLDo0kX1DXzkSdBSFdEdEi7kW7rO-G97uumBuGkX/exec'
  export default {
      asyncData ({params}) {
          console.log(params.id);
          return axios.get(url + '?id=' + params.id)
              .then((res) => {
                  console.log(res.data);
                  return {
                      name: res.data.name,
                      description: res.data.description,
                      price: res.data.price
                  }
              })
      },
      
      data() {
          return {
              // confirms: [
                  // {
                  //     name: 'くつした',
                  //     itemNumber: 3,
                  //     price: 290,
                  // },
                  // {
                  //     name: 'Tシャツ',
                  //     itemNumber: 2,
                  //     price: 1490,
                  // },
                  // {
                  //     name: 'スカート',
                  //     itemNumber: 1,
                  //     price: 1990,
                  // }
              // ]
          }
      }
  }
</script>
