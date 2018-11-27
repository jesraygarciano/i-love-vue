<template>
  <div id="app">
    <div class="card-row">
      <div 
      v-for="(card, index) in cards"
      :key="index"
      :ref="`card_${index}`"
      class="card"
      >
        <img :src="card.image" alt="" class="card-image">

        <div class="card-footer">
          <div class="card-title">{{card.title}}</div>
          <div class="card-text">by
            <span class="card-author">{{card.author}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import './assets/style.css';

export default {
  name: 'app',
  data() {
    return {
      cards: [
        {
         title: 'Gallery', 
         author: 'Walder Frey', 
         image: 'http://www.gstatic.com/webp/gallery/1.webp'
        },
        {
          title: 'Penguin', 
          author: 'Ramsey Bolton', 
          image: 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
        },
        {
          title: 'Flower', 
          author: 'Joffrey Baratheon', 
          image: 'https://www.gstatic.com/webp/gallery3/1.png'
        },
         {
          title: 'Flower Pot', 
          author: 'Cersie Lannister', 
          image: 'https://www.fiftyflowers.com/site_files/FiftyFlowers/Image/Product/Make_Your_Own_Centerpiece_Close_Up_350_a425aad8.jpg'
        },
         {
          title: 'Rose', 
          author: 'Roose Bolton', 
          image: 'https://res.cloudinary.com/prestige-gifting/image/fetch/fl_progressive,q_95,e_sharpen:50,w_480/e_saturation:05/https://www.prestigeflowers.co.uk/images/NF4016-130116.jpg'
        }
      ]
    }
  },
  components: {
    // HelloWorld
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
