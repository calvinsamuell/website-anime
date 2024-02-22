<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-white">Shuumatsu no Valkyrie Trailer</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MfmV1iQlRFg?si=0DX_7yIMbQCnmUJI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="text-start mt-4">
          <p><strong>Type:</strong> TV</p>
          <p><strong>Status:</strong> Finished Airing</p>
          <p><strong>Studios:</strong> 8bit</p>
          <p><strong>Duration:</strong> 23 min. per ep.</p>
          <p>
            Thirty-seven-year-old Satoru Mikami is a typical corporate worker,
            who is perfectly content with his monotonous lifestyle in Tokyo,
            other than failing to nail down a girlfriend even once throughout
            his life. In the midst of a casual encounter with his colleague, he
            falls victim to a random assailant on the streets and is stabbed.
            However, while succumbing to his injuries, a peculiar voice echoes
            in his mind, and recites a bunch of commands which the dying man
            cannot make sense of. When Satoru regains consciousness, he
            discovers that he has reincarnated as a goop of slime in an
            unfamiliar realm. In doing so, he acquires newfound skills—notably,
            the power to devour anything and mimic its appearance and abilities.
            He then stumbles upon the sealed Catastrophe-level monster "Storm
            Dragon" Veldora who had been sealed away for the past 300 years for
            devastating a town to ashes. Sympathetic to his predicament, Satoru
            befriends him, promising to assist in destroying the seal. In
            return, Veldora bestows upon him the name Rimuru Tempest to grant
            him divine protection. Now, liberated from the mundanities of his
            past life, Rimuru embarks on a fresh journey with a distinct goal in
            mind. As he grows accustomed to his new physique, his gooey antics
            ripple throughout the world, gradually altering his fate.
          </p>
        </div>
      </div>
      <div class="col">
        <h2 class="text-white">Recommendation</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <router-link to="/overlord">
                <img
                  src="../assets/overlord.jpg"
                  class="card-img-top"
                  alt="Overlord"
              /></router-link>
            </div>
          </div>
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
