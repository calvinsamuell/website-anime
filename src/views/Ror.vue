<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-white">Shuumatsu no Valkyrie Trailer</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_9HxsIYORyE?si=czx3eRaH8yIEYO2B"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="text-start mt-4">
          <p><strong>Type:</strong> TV</p>
          <p><strong>Status:</strong> Finished Airing</p>
          <p><strong>Studios:</strong> Graphinica</p>
          <p><strong>Duration:</strong> 24 min. per ep.</p>
          <p>
            The gods of the world—from Greek to Norse to Hindu mythology—gather
            every one thousand years to make one important decision: whether or
            not to wipe out mankind. Repulsed by humanity's selfishness, the
            council unanimously votes to destroy all humans. But before the
            decree is enacted, Brunhilde, one of the 13 Valkyries of Valhalla,
            interrupts the meeting to give mankind a chance at survival.
            Brunhilde proposes the idea of enacting Ragnarök, an event in which
            the strongest 13 mortal warriors fight against 13 gods in one-on-one
            matches. Although the trial is ridiculed by the gods, the demigod
            takes advantage of their pride and forces them into an agreement.
            However, Brunhilde herself must recruit the mightiest heroes
            throughout humanity's thousand-year history and guide them to
            victory before they meet their untimely demise.
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
              <router-link to="onepunchman">
                <img
                  src="../assets/opm.jpg"
                  class="card-img-top"
                  alt="One Punch Man"
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
