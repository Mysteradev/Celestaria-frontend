<template>
  <div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container" >
            <div class="columns" >
              <div class="column">
                <h1 class="title is-size-1">
                  Celestaria,<br>
                  Le film intéractif <br>où vous avez les clés du jeu.
                </h1>
                  <button class="button is-link is-light">Créer votre film ! →</button>
              </div>
              <div class="column has-text-centered">
                <figure class="is-inline-block">
                  <img :src="require('@/assets/img/3281755.jpg')" alt="Key" class="image anime-img">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="container is-fluid pl-6 pr-6 pt-6 pb-6 banderole">
          <div class="columns">
            <div class="column"></div>
          </div>
          <div class="columns has-text-centered" >
            <div class="column">
              <figure class="is-inline-block">
                <img :src="require('@/assets/img/video.svg')" alt="Key" class="image anime-img is-64x64">
              </figure>
              <p>3453 films déjà crées</p>
            </div>
            <div class="column">
              <figure class="is-inline-block">
                <img :src="require('@/assets/img/minute.svg')" alt="Key" class="image anime-img is-64x64">
              </figure>
              <p>8394930 minutes visionnées</p>
            </div>
            <div class="column">
              <figure class="is-inline-block">
                <img :src="require('@/assets/img/video-player.svg')" alt="Key" class="image anime-img is-64x64">
              </figure>
              <p>10938 films peuvent êtres crées</p>
            </div>
          </div>
        </div>
      </section>
    <div class="container">
      <div class="columns ml-3 mr-3 mt-6 mb-6">
        <div class="column bg-home">
          <h1 class="is-size-1 has-text-centered pb-3">Lorem Ipsum</h1>
          <h3 class="is-size-5 has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque aut commodi ea earum facere fuga, ipsum iste itaque necessitatibus officiis pariatur quo repellat repellendus repudiandae sint, unde, vitae..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque aut commodi ea earum facere fuga, ipsum iste itaque necessitatibus officiis pariatur quo repellat repellendus repudiandae sint, unde, vitae..</h3>
        </div>
        <div class="column">
          <img :src="require('@/assets/img/key-home.png')" alt="Image home page" class="image-home image">
        </div>
      </div>
    </div>
    <div class="container banderole is-fluid">
      <h3 class="is-size-3">Comment créer son film ? </h3>
      <div class="columns pl-6 pr-6 pt-6 pb-6">
        <div class="column has-text-centered pr-6 pl-6 ">
          <div class="fond-blanc">
            <b>Choisissez vos chapitres</b><br><br>
            <figure class="is-inline-block">
              <img :src="require('@/assets/img/minute.svg')" alt="Key" class="image anime-img is-64x64">
            </figure><br><br>
            <p class="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est eveniet magni optio vel. Animi debitis ducimus et ex exercitatio</p>
          </div>
        </div>
        <div class="column has-text-centered pr-6 pl-6">
          <div class="fond-blanc">
          <b>Donnez un titre a votre film</b><br><br>
          <figure class="is-inline-block">
            <img :src="require('@/assets/img/minute.svg')" alt="Key" class="image anime-img is-64x64">
          </figure><br><br>
          <p class="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est eveniet magni optio vel. Animi debitis ducimus et ex exercitatio</p>
          </div>
        </div>
        <div class="column has-text-centered pr-6 pl-6">
          <div class="fond-blanc">
          <b>Visionez et partagez le !</b><br><br>
          <figure class="is-inline-block">
            <img :src="require('@/assets/img/minute.svg')" alt="Key" class="image anime-img is-64x64">
          </figure><br><br>
          <p class="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est eveniet magni optio vel. Animi debitis ducimus et ex exercitatio</p>
          </div>
        </div>
      </div>
    </div>
    <listfilm/>
  </div>
</template>

<script>

import Listfilm from "../components/home/listfilm";

export default {
  components: {Listfilm},
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.div-test{
  border: deeppink solid 1px;
}
.banderole{
  background-color: #f7f7f7;
}
.fond-blanc{
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px ;
}
</style>


