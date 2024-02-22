<template>
  <div class="container">
    <section class="mt-5">
      <h2 class="text-white mb-4">Watch Now</h2>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link to="/overlord" class="d-block mx-auto">
              <img src="../assets/overlord.jpg" class="img-thumbnail carousel-anime" style="width: 358px; height: 358px;" alt="slide 1" />
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/blackclover" class="d-block mx-auto">
              <img src="../assets/black clover.jpg" class="img-thumbnail carousel-anime" style="width: 358px; height: 358px;" alt="slide 2" />
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/onepunchman" class="d-block mx-auto">
              <img src="../assets/opm.jpg" class="img-thumbnail carousel-anime" style="width: 358px; height: 358px;" alt="slide 3" />
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/TenseishitaraSlimeDattKen" class="d-block mx-auto">
              <img src="../assets/slime.png" class="img-thumbnail carousel-anime" style="width: 358px; height: 358px;" alt="slide 4" />
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/ShuumatsunoValkyrie" class="d-block mx-auto">
              <img src="../assets/Shuumatsu_no_Valkyrie_Anime_Key_Visual_4.webp" class="img-thumbnail carousel-anime" style="width: 358px; height: 358px;" alt="slide 5" />
            </router-link>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="mt-5">
      <h2 class="text-white mb-4">New Release</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <router-link to="/overlord" class="d-block">
              <img src="../assets/overlord.jpg" class="card-img-top" alt="overlord" />
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <router-link to="/blackclover" class="d-block">
              <img src="../assets/black clover.jpg" class="card-img-top" alt="black clover" />
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <router-link to="/onepunchman" class="d-block">
              <img src="../assets/opm.jpg" class="card-img-top" alt="one punch man" />
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <router-link to="/TenseishitaraSlimeDattKen" class="d-block">
              <img src="../assets/slime.png" class="card-img-top" alt="slime" />
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <router-link to="/ShuumatsunoValkyrie" class="d-block">
              <img src="../assets/Shuumatsu_no_Valkyrie_Anime_Key_Visual_4.webp" class="card-img-top" alt="record of ragnarok" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import necessary components or define your Vue script here if needed
export default {
  // Component options
}
</script>

<style scoped>
.carousel-anime {
  cursor: pointer;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
