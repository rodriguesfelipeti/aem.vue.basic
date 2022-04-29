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

    // LOGIN PAGE
    const loginBgContainerNew = document.querySelector('[cqpath="/content/vue/vue/loginpage/jcr:content/root/responsivegrid/container"] div')
    if (loginBgContainerNew) {
      loginBgContainerNew.classList.add('bg-login-new__bg-background')

      const body = document.getElementsByTagName('body')[0]
      body.classList.add('bg--gray')
    }

    // login image container
    const loginImgContainerNew = document.querySelector('[cqpath="/content/vue/vue/loginpage/jcr:content/root/responsivegrid/container_1496778611"] div')
    if (loginImgContainerNew) {
      loginImgContainerNew.classList.add('bg-login-new__bg-background-image')
    }

    // home background image
    const homeBgImage = document.querySelector('[cqpath="/content/vue/vue/Home/jcr:content/root/responsivegrid/container_379183683"] div')
    if (homeBgImage) {
      homeBgImage.classList.add('bg-home__bg-background-image')
    }
  }
}

</script>

<style lang="scss">
  @import "./index.scss";
</style>
