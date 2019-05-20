<template>
  <div>
    <label for="me">remember me</label>
    <input id="me" type="checkbox" @click="checkRemember" @value="value">
  </div>  
</template>

<script>
export default {
  props: ['value'],
  methods: {
    checkRemember() {
      this.$emit('input', !this.value);
    }
  }
}
</script>