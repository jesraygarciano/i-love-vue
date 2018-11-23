<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="coin in coins" :key="coin.id"></tr>
          <td> {{ coin.id }} </td>
          <td >{{ coin.name }} </td>
          <td> {{ coin.price }} </td>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'HelloWorld',
    mounted() {
      this.$store.dispatch('loadCoins')
    },
    computed: mapState([
      'coins'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
