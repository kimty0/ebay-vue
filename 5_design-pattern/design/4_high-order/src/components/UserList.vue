<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  
  // data() {
  //   return {
  //     items: [],
  //   }
  // },
  // created() {
  //   fetch('https://jsonplaceholder.typicode.com/users/')
  //     .then(res => res.json())
  //     .then(data => this.items = data)
  //     .catch(error => console.log(error));
  // },
}
</script>

<style>

</style>
