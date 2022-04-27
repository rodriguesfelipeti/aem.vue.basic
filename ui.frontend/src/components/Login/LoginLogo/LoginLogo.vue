<template lang="">
    <figure :class="`login-figure ${className}`">
        <img class="login-figure__img" :src="src" alt="logo compass.uol">
    </figure>
</template>
<script>
export default {
  name: 'LoginLogo',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/logo_compasso_branco.png'
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="scss">
 @import "./loginLogo.scss";
</style>
