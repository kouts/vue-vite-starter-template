<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" class="text-center" />
    </div>
    <hello-world msg="Welcome to Vue.js Vite starter template" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
