<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-white">One Punch Man Trailer</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Poo5lqoWSGw?si=NmKA3ZJ8CPCoalNb"
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
            The seemingly unimpressive Saitama has a rather unique hobby: being
            a hero. In order to pursue his childhood dream, Saitama relentlessly
            trained for three years, losing all of his hair in the process. Now,
            Saitama is so powerful, he can defeat any enemy with just one punch.
            However, having no one capable of matching his strength has led
            Saitama to an unexpected problem—he is no longer able to enjoy the
            thrill of battling and has become quite bored. One day, Saitama
            catches the attention of 19-year-old cyborg Genos, who witnesses his
            power and wishes to become Saitama's disciple. Genos proposes that
            the two join the Hero Association in order to become certified
            heroes that will be recognized for their positive contributions to
            society. Saitama, who is shocked that no one knows who he is,
            quickly agrees. Meeting new allies and taking on new foes, Saitama
            embarks on a new journey as a member of the Hero Association to
            experience the excitement of battle he once felt.
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
