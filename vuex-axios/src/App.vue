<template>
  <div class="app">
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from './components/Helloworld.vue'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  

export default {
  name:'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

</style>