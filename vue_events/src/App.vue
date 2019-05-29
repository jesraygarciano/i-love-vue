<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <p>{{count}}</p>
    <button v-on:click="goFast"> gotta go fast</button>
    <p @click.prevent="greet('Wait')">wati</p>
    <p @click="greet('Hi')">Hi</p>

    <br />
    <hr />
    <br />

    <a @click.stop="doThis"></a>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    goFast() {
        this.count++;   
    },
    greet(value) {
      alert(value);
    }
  }
}
</script>
<style lang="scss" scoped>

button {
  padding: 1rem;
  margin: 1rem;
  background: rgb(87, 155, 87);
  color: #FFF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
