<template>
  <div>
    <div>
      <router-link to="/user">/user</router-link>
      <router-link to="/todo">/todo</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  padding: 0 3px;
}
</style>
