<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const scareCrowContainer = document.querySelector('[cqpath="/content/vue/vue/404page/jcr:content/root/responsivegrid/container"] div')
    scareCrowContainer.classList.add('img-custom')
    const body = document.body
    console.log(body)
    document.body.classList.add('background-gradient')

    // const containerRight = document.querySelector('[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/container"] div')
    // containerRight.classList.add('bg-green')
  }
}
</script>

<style lang="scss">

  /* vietnamese */
  @font-face {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/questrial/v17/QdVUSTchPBm7nuUeVf70sSFlq20.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/questrial/v17/QdVUSTchPBm7nuUeVf70sCFlq20.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/questrial/v17/QdVUSTchPBm7nuUeVf70viFl.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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

  .f-mark-pro-regular {
    font-family: 'Questrial';
    font-weight: 400;
  }

  .input-text__login-title {
    position: absolute;
    width: 118px;
    height: 76px;
    left: 287px;
    top: 197px;
    font-style: normal;
    font-size: 60px;
    line-height: 76px;
    color: #E0E0E0;
  }

  .input-text__login-text {
    position: absolute;
    width: 301px;
    height: 52px;
    left: 287px;
    top: 290px;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #E0E0E0;
  }

  .background-gradient {
    background-image: linear-gradient(#33383D, #1C1D20);
    background-repeat: no-repeat;
    height: 100%;
    margin: 0;
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

        .input-text__login-title {
          position: absolute;
          width: 118px;
          height: 76px;
          left: 287px;
          top: 197px;
          font-style: normal;
          font-size: 60px;
          line-height: 76px;
          color: #E0E0E0;
        }

        .input-text__login-text {
          position: absolute;
          width: 301px;
          height: 90px;
          left: 287px;
          top: 290px;
          font-style: normal;
          font-size: 16px;
          line-height: 20px;
          color: #E0E0E0;
        }

  }

</style>
