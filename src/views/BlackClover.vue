<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-white">Black Clover Trailer</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QwNWY6z93O4?si=CpTDV8TSSpmV5Lz9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="text-start mt-4">
          <p><strong>Type:</strong> TV</p>
          <p><strong>Status:</strong> Finished Airing</p>
          <p><strong>Studios:</strong> Pierrot</p>
          <p><strong>Duration:</strong> 23 min. per ep.</p>
          <p>
            Asta and Yuno were abandoned at the same church on the same day.
            Raised together as children, they came to know of the "Wizard
            King"—a title given to the strongest mage in the kingdom—and
            promised that they would compete against each other for the position
            of the next Wizard King. However, as they grew up, the stark
            difference between them became evident. While Yuno is able to wield
            magic with amazing power and control, Asta cannot use magic at all
            and desperately tries to awaken his powers by training physically.
            When they reach the age of 15, Yuno is bestowed a spectacular
            Grimoire with a four-leaf clover, while Asta receives nothing.
            However, soon after, Yuno is attacked by a person named Lebuty,
            whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight
            Lebuty, but he is outmatched. Though without hope and on the brink
            of defeat, he finds the strength to continue when he hears Yuno's
            voice. Unleashing his inner emotions in a rage, Asta receives a
            five-leaf clover Grimoire, a "Black Clover" giving him enough power
            to defeat Lebuty. A few days later, the two friends head out into
            the world, both seeking the same goal—to become the Wizard King!
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
