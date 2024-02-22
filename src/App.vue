<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Anonime</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Manga'}" class="nav-link">Manga</router-link>
          </li>
        </ul>
      </div>
    </div>
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

.navbar-brand {
  font-size: 24px;
}
.nav-link {
  font-size: 18px;
}

</style>
