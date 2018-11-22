<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home'}">
              Home
            </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Dashboard'}">
                Dashboard
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to=" { name: 'Post' }"></router-link>
              Post
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
