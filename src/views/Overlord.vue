<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-white">Overlord Trailer</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uhlBqFj9kDw?si=bSffvDIQwceEPGny"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="text-start mt-4">
          <p><strong>Type:</strong> TV</p>
          <p><strong>Status:</strong> Finished Airing</p>
          <p><strong>Studios:</strong> Madhouse</p>
          <p><strong>Duration:</strong> 24 min. per ep.</p>
          <p>
            The final hour of the popular virtual reality game Yggdrasil has
            come. However, Momonga, a powerful wizard and master of the dark
            guild Ainz Ooal Gown, decides to spend his last few moments in the
            game as the servers begin to shut down. To his surprise, despite the
            clock having struck midnight, Momonga is still fully conscious as
            his character and, moreover, the non-player characters appear to
            have developed personalities of their own! Confronted with this
            abnormal situation, Momonga commands his loyal servants to help him
            investigate and take control of this new world, with the hopes of
            figuring out what has caused this development and if there may be
            others in the same predicament.
          </p>
        </div>
      </div>
      <div class="col">
        <h2 class="text-white">Recommendation</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <router-link to="/blackclover">
              <img
                src="../assets/black clover.jpg"
                class="card-img-top"
                alt="Black Clover"
              /></router-link>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <router-link to="/onepunchman">
              <img
                src="../assets/opm.jpg"
                class="card-img-top"
                alt="One Punch Man"
              /></router-link>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <router-link to="/ShuumatsunoValkyrie">
              <img
                src="../assets/Shuumatsu_no_Valkyrie_Anime_Key_Visual_4.webp"
                class="card-img-top"
                alt="Shuumatsu no Valkyrie"
              /></router-link>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <router-link to="/TenseishitaraSlimeDattKen">
              <img
                src="../assets/slime.png"
                class="card-img-top"
                alt="Tensei shitara Slime Datta Ken"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-start p {
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
}

.text-white {
  color: #fff;
  font-size: 24px;
}
</style>
