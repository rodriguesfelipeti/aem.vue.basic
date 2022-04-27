<template lang="">
    <Section class="login-texts">
        <Article class="login-texts__article">
            <h1 class="login-texts__header">{{ headerTitle }}</h1>
            <p class="login_texts__text">{{ text }}</p>
        </Article>
    </Section>
</template>
<script>
export default {
  name: 'LoginTexts',
  props: {
    headerTitle: {
      type: String,
      default: 'Olá,'
    },
    text: {
      type: String,
      default: 'Para continuar navegando de forma segura, efetue o login na rede.'
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
