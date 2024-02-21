<template>
  <body>
    <section>
      <h2 class="text-white">Season Now</h2>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link to="/overlord"
              ><img
                src="../assets/logo.png"
                class="img-thumbnail carousel-anime"
                alt="slide 1"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-danger">Overlord</h5>
              </div>
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/blackclover"
              ><img
                src="../assets/logo.png"
                class="img-thumbnail carousel-anime"
                alt="slide 2"
            /></router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/onepunchman"
              ><img
                src="../assets/logo.png"
                class="img-thumbnail carousel-anime"
                alt="slide 3"
            /></router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/TenseishitaraSlimeDattKen"
              ><img
                src="../assets/logo.png"
                class="img-thumbnail carousel-anime"
                alt="slide 4"
            /></router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/ShuumatsunoValkyrie"
              ><img
                src="../assets/logo.png"
                class="img-thumbnail carousel-anime"
                alt="slide 5"
            /></router-link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section>
      <h2 class="text-white">New Release</h2>
      <div class="card-group" style="width: 30rem">
        <div class="card">
          <router-link to="/overlord"
            ><img src="../assets/logo.png" class="card-img-top" alt="overlord"
          /></router-link>
        </div>
        <div class="card">
          <router-link to="/blackclover"
            ><img
              src="../assets/logo.png"
              class="card-img-top"
              alt="black clover"
          /></router-link>
        </div>
        <div class="card">
          <router-link to="/onepunchman"
            ><img
              src="../assets/logo.png"
              class="card-img-top"
              alt="one punch man"
          /></router-link>
        </div>
        <div class="card">
          <router-link to="/TenseishitaraSlimeDattKen"
            ><img src="../assets/logo.png" class="card-img-top" alt="slime"
          /></router-link>
        </div>
        <div class="card">
          <router-link to="/ShuumatsunoValkyrie"
            ><img
              src="../assets/logo.png"
              class="card-img-top"
              alt="record of ragnarok"
          /></router-link>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {};
</script>

<style></style>