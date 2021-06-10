<template>
  <section>
    <div class="post-wrapper">
      <form action="https://jsonplaceholder.typicode.com/posts" method="post" name="edit">
        <div>
          表題：<input type="text" name="title">
        </div>
        <div>
          本文：<textarea name="body" id="body" rows="5"></textarea>
        </div>
        <input type="submit" value="送信">
      </form>
    </div>
  </section>
</template>
<script>
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
          .then((response) => response.json())
          .then((json) => console.log(json));
</script>