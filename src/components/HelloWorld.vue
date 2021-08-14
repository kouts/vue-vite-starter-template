<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="msg">{{ msg }}</h1>
      <p>
        A project setup using <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>, created to easily scaffold
        new Vue.js projects.<br />
        Find out more at
        <a class="custom" href="https://vitejs.dev" target="_blank" rel="noopener">Vite documentation</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
