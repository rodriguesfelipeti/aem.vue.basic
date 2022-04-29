<template lang="">
    <article class="home-description">
        <section class="home-description__section">
            <h1 class="home-description__section--h1"> {{ text1Title }}</h1>
            <p class="home-description-section--p"> {{ text1 }}</p>
        </section>
        <section class="home-description__section">
            <h1 class="home-description__section--h1"> {{ text2Title }}</h1>
            <p class="home-description__section--p"> {{ text2 }}</p>
        </section>
         <section class="home-description__section">
            <h1 class="home-description__section--h1"> {{ text3Title }}</h1>
            <p class="home-description__section--p"> {{ text3 }}</p>
        </section>
         <section class="home-description__section">
            <h1 class="home-description__section--h1"> {{ text4Title }}</h1>
            <p class="home-description__section--p"> {{ text4 }}</p>
        </section>
    </article>
</template>
<script>
export default {
  name: 'HomeDescription',
  props: {
    text1Title: {
      type: String,
      default: 'Our mission is'
    },
    text1: {
      type: String,
      default: 'Nossa missão é'
    },
    text2Title: {
      type: String,
      default: 'to transform the world'
    },
    text2: {
      type: String,
      default: 'transformar o mundo'
    },
    text3Title: {
      type: String,
      default: 'building digital experiences'
    },
    text3: {
      type: String,
      default: 'construindo experiências digitais'
    },
    text4Title: {
      type: String,
      default: 'that enable our client’s growth'
    },
    text4: {
      type: String,
      default: 'que permitam o crescimento dos nossos clientes'
    }
  }
}
</script>
<style lang="scss">
 @import "./homeDescription.scss";
</style>
