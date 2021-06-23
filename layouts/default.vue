<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
  export default {
    middleware: 'button'
  }
</script>

<style>
html {
  font-family:
    '游ゴシック体',
    YuGothic,
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  color: #444;
  background-color: #F5F3EE;
}

a {
  color: initial;
  text-decoration: none;
}

h2 {
  font-size: 1.2rem;
}

ul {
  padding-left: 0;
}

ul li {
  list-style: none;
}

input, textarea {
  width: 100%;
}

section {
  width: 90%;
  max-width: 800px;
  margin: 15px auto;
  padding: 20px;
  background-color: #FFF;
  border: solid 1px #F1F1F1;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
}

.header-wrap {
  width: 100%;
  height: 50px;
  padding-top: 5px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  margin-bottom: 20px;
}

.header-content {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.toggle-wrap {
  margin: 12px auto;
}

.post-wrapper {
  margin-bottom: 10px;
}

.post-wrapper h2 {
  position: relative;
  margin-bottom: 14px;
}

.link-wrapper {
  text-align: right;
}

h2::after {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  background-color: #3b8070;
  position: absolute;
  bottom: -7px;
  left: 0;
}

.button--green {
  display: inline-flex;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  background-color: #fff;
  text-decoration: none;
  padding: 6px 10px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 6px 10px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
