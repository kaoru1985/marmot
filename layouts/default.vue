<template>
  <div>
    <Nuxt />
  </div>
</template>

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

h2 {
  font-size: 1.2rem;
}

ul {
  padding-left: 0;
}

ul li {
  list-style: none;
}

.header-wrap {
  width: 100%;
  height: 50px;
  padding-top: 13px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
}

.header-content {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.toggle-wrap {
  margin: 12px auto;
}

.button--green {
  display: inline-block;
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
