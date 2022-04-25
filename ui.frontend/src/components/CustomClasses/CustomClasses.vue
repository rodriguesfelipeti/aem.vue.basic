<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    // 404 image container
    const scareCrowContainer = document.querySelector('[cqpath="/content/vue/vue/404page/jcr:content/root/responsivegrid/container"] div')
    if (scareCrowContainer) {
      scareCrowContainer.classList.add('img-custom')
    }
    // login background color container
    const loginBgContainer = document.querySelector('[cqpath="/content/vue/vue/loginpage/jcr:content/root/responsivegrid/container"] div')
    if (loginBgContainer) {
      loginBgContainer.classList.add('background-gradient')
    }

    // login image container
    const loginImgContainer = document.querySelector('[cqpath="/content/vue/vue/loginpage/jcr:content/root/responsivegrid/container_1496778611"] div')
    if (loginImgContainer) {
      loginImgContainer.classList.add('bg-login__img')

      const element = document.createElement('div')
      loginImgContainer.appendChild(element)
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
