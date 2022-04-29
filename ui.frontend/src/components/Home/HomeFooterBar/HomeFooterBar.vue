<template lang="">
    <div class="home-footer-bar">
        <div class="home-footer-bar__info">
            <p>{{ info }}</p>
            <div></div>
        </div>
        <div class="home-footer-bar__search">
            <input id="txt-user" :placeholder="txtSearch">
            <div></div>
        </div>
        <div class="home-footer-bar__refreshText">
            <p>{{ refreshText }}</p>
        </div>
        <div class="home-footer-bar__refreshCount">
            <p class="home-footer-bar__refreshCount--number">{{ refreshCountNumber }}</p>
            <p class="home-footer-bar__refreshCount--text">{{ refreshCountText }}</p>
        </div>
        <div class="home-footer-bar__continue">
            <p>{{ continueText }}</p>
        </div>
        <div class="home-footer-bar__logout">
            <p>{{ logoutText }}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeFooterBar',
  props: {
    info: {
      type: String,
      default: 'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.'
    },
    txtSearch: {
      type: String,
      default: 'Buscar Usuários'
    },
    refreshText: {
      type: String,
      default: 'Application refresh in'
    },
    refreshCountNumber: {
      type: String,
      default: '180'
    },
    refreshCountText: {
      type: String,
      default: 'seconds'
    },
    continueText: {
      type: String,
      default: 'Continuar Navegando'
    },
    logoutText: {
      type: String,
      default: 'Logout'
    }

  }
}
</script>
<style lang="scss">
    @import "./homeFooterBar.scss";
</style>
