<template>
  <nav class="nav">
    <h3 class="text-white">Anonime</h3>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link :to="{name: 'Manga'}" class="nav-link">Manga</router-link>
  </nav>
  <router-view />
</template>


<script>
import Home from './views/Home.vue'
export default{
  components: {Home}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav,
body {
  background: rgb(26 25 39);
}

nav a {
  color: white;
}

.card, .carousel-anime {
      transition: transform 0.3s ease;
    }

.card:hover, .carousel-anime:hover {
  transform: scale(1.1);
}

.carousel-item:hover .carousel-caption {
      display: block;
    }

</style>
