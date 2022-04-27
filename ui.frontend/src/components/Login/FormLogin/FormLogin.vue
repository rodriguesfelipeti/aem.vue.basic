<template lang="">
    <form class="form-login">
      <legend class="form-login__legend">{{ formTitle }}</legend>
      <p class="form-login__p">
        <input type="text" id="txt-user" :placeholder="userText">
      </p>
      <p class="form-login__p">
        <input type="text" id="txt-pass" :placeholder="userPass">
      </p>
      <p class="form-login__button">
        <Button type="button" id="btn-login">{{ btnValue }}</Button>
      </p>
    </form>
</template>
<script>

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
    }
  }
}
</script>
<style lang="scss">
  @import "./FormLogin.scss";
</style>
