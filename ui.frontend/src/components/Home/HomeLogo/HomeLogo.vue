<template lang="">
    <figure :class="`home-figure ${className}`">
        <img class="home-figure__img" :src="src" alt="logo compass.uol">
    </figure>
</template>
<script>
export default {
  name: 'HomeLogo',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/home/LogoCompasso-preto.png'
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="scss">
 @import "./HomeLogo.scss";
</style>
