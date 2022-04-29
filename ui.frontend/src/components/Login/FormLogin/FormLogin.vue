<template lang="">
    <form class="form-login">
      <legend class="form-login__legend">{{ formTitle }}</legend>
      <div class="form-login__p">
        <input v-model.trim="userData.user"
               type="text" id="txt-user"
               :placeholder="userText"
               :class="errorData && errorData.errorUser ? '--error' : ''">

      </div>
      <div class="form-login__p">
        <input v-model.number="userData.userPass"
               type="password" id="txt-pass"
               :placeholder="userPass"
               :class="errorData && errorData.errorPass ? '--error' : ''">
      </div>
      <div class="form-login__p">
        <p v-show="errorData && errorData.errorMsg" > {{ errorData.errorMsg }} </p>
      </div>
      <div class="form-login__button">
        <Button type="button" id="btn-login" @click="doLogin">{{ btnValue }}</Button>
      </div>
    </form>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import { authService } from '../../../service/authService'
import { weatherService } from '../../../service/weatherService'

export default {
  name: 'FormLogin',
  props: {
    formTitle: {
      type: String,
      default: 'Login'
    },
    userText: {
      type: String,
      default: 'Usuário'
    },
    userPass: {
      type: String,
      default: 'Senha'
    },
    btnValue: {
      type: String,
      default: 'Continuar'
    },
    srcUser: {
      type: String,
      default: '/content/dam/vue/user-logo.png'
    },
    srcLogo: {
      type: String,
      default: '/content/dam/vue/pass-logo.png'
    }
  },
  data () {
    return {
      userData: {
        user: '',
        userPass: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', {
      errorData: 'getErrorData',
      logged: 'getLogged'
    })
  },
  methods: {
    ...mapActions('auth', ['setErrorDataAction', 'setLogged']),

    errorDataObj (errorUser, errorPass, errorMsg) {
      return {
        errorUser: errorUser,
        errorPass: errorPass,
        errorMsg: errorMsg
      }
    },

    doLogin () {
      const isValid = this.validateInputs()
      if (isValid) {
        this.setErrorDataAction(false, false, '')
        const authUser = authService.doLogin(this.userData)

        if (authUser.type === 'Error') {
          this.setErrorDataAction(this.errorDataObj(true, true, authUser.msg))
        } else {
          this.setLogged(this.userData)
          console.log(this.logged)
        }
      }
    },

    validateInputs () {
      const checkRulesUser = /^[a-z.]+$/.test(this.userData.user)
      const checkRulesPass = /^[6-8]+$/.test(this.userData.userPass)

      if ((this.userData.user) && (!checkRulesUser)) {
        this.setErrorDataAction(this.errorDataObj(true, false, 'Usuário não é permitido caracteres especiais além de “ . ” nem letras com acentos. !'))
        return false
      }

      if ((this.userData.userPass) && (!checkRulesPass)) {
        this.setErrorDataAction(this.errorDataObj(false, true, 'Senha apenas números, maior ou igual a 6 e menor de 9!'))
        return false
      }

      if (!(this.userData.user) && !(this.userData.userPass)) {
        this.setErrorDataAction(this.errorDataObj(true, true, 'Usuário e Senha não pode ser vazio. Tente Novamente!'))
        return false
      } else if (!this.userData.user) {
        this.setErrorDataAction(this.errorDataObj(true, false, 'Usuário não pode ser vazio. Tente Novamente!'))
        return false
      } else if (!this.userData.userPass) {
        this.setErrorDataAction(this.errorDataObj(false, true, 'Senha não pode ser vazio. Tente Novamente!'))
        return false
      }
      return true
    }
  },
  mounted () {
    console.log('Status de acesso: ')
    console.log(this.logged)

    weatherService.getWeather('Limeira').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss">
  @import "./FormLogin.scss";
</style>
