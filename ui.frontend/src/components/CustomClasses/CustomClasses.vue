<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const scareCrowContainer = document.querySelector('[cqpath="/content/vue/vue/404page/jcr:content/root/responsivegrid/container"] div')
    scareCrowContainer.classList.add('img-custom')

    // const containerRight = document.querySelector('[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/container"] div')
    // containerRight.classList.add('bg-green')
  }
}
</script>

<style lang="scss">
  .img-custom {
    position: absolute;
    height: 447.4263916015625px;
    width: 539.2236938476562px;
    left: 77px;
    top: 265px;
    border-radius: 0px;
  }

  .img-custom img {
    max-width: 100% !important;
    height: auto;
  }

  @media only screen and (max-width: 600px) {

        .img-custom {
          position: absolute;
          height: 238.00001525878906px;
          width: 286.829833984375px;
          left: 44px;
          top: 109px;
          border-radius: 0px;
        }

        .img-custom img {
          max-width: 100% !important;
          height: auto;
        }

  }

</style>
