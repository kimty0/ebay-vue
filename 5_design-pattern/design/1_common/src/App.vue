<template>
  <div>
    <app-header></app-header>
    <login-form></login-form>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  components: {
    AppHeader,
    LoginForm,
  },
}
</script>