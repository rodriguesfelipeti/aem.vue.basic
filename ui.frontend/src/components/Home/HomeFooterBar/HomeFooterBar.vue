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
            <p class="home-footer-bar__refreshCount--number">{{ refreshCountNumberData }}</p>
            <p class="home-footer-bar__refreshCount--text">{{ refreshCountText }}</p>
        </div>
        <div class="home-footer-bar__continue">
            <p><a @click="doRefreshLogin"> {{ continueText }} </a></p>
        </div>
        <div class="home-footer-bar__logout">
            <p> <a @click="doLogout"> {{ logoutText }} </a></p>
        </div>
    </div>
</template>
<script>

import dateTimeHelper from '../../../utils/dateTimeHelper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeFooterBar',
  props: {
    urlRouter: {
      type: String,
      default: 'Login'
    },
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

  },
  data () {
    return {
      refreshCountNumberData: ''
    }
  },
  methods: {
    ...mapActions('auth', ['destroyLogged']),

    doRefreshLogin () {
      this.refreshCountNumberData = this.refreshCountNumber
    },

    doLogout () {
      this.destroyLogged()
      this.redirect()
    },

    redirect () {
      window.location.pathname = `${this.urlRouter}.html`
    }
  },
  computed: {
    ...mapGetters('auth', {
      logged: 'getLogged'
    })
  },
  mounted () {
    console.log('Usuário Logado: ')
    console.log(this.logged.loggedUser)

    if (!(this.logged.loggedUser)) {
      this.redirect()
    }

    setTimeout(() => {
      this.refreshCountNumberData = this.refreshCountNumber
    }, '1000')

    setInterval(() => {
      const { status, timer } = dateTimeHelper.doTimer(this.refreshCountNumberData)
      if (this.refreshCountNumberData > 0) {
        this.refreshCountNumberData = timer

        if (status) {
          this.doLogout()
        }
      }
    }, '1000')
  }
}
</script>
<style lang="scss">
    @import "./homeFooterBar.scss";
</style>
