<template lang="">
  <div>
    <input :class="className" type="text" :placeholder="text" />
  </div>
</template>
<script>
export default {
  name: 'TextInput2',
  props: {
    text: {
      type: String
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="scss">
@import "./TextInput2.scss";
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

    .btn-login__user {
        position: absolute;
        width: 379px;
        height: 60px;
        left: 285px;
        top: 547px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;

        ::placeholder {
            position: absolute;
            width: 60px;
            height: 20px;
            left: 305px;
            top: 567px;
            font-family: 'Questrial';
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 20px;
            color: #E0E0E0;
        }
    }

    .btn-login__password {
        position: absolute;
        width: 379px;
        height: 60px;
        left: 285px;
        top: 640px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;

        ::placeholder {
            position: absolute;
            width: 49px;
            height: 20px;
            left: 305px;
            top: 660px;
            font-family: 'Questrial';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #E0E0E0;
        }
    }

    @media only screen and (max-width: 600px) {
       .btn-login__user {
            position: absolute;
            width: 379px;
            height: 60px;
            left: 108px;
            top: 494px;
            background: #26292C;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 50px;

            ::placeholder {
                position: absolute;
                width: 60px;
                height: 20px;
                left: 128px;
                top: 514px;
                font-family: 'Questrial';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #E0E0E0;
            }
        }

        .btn-login__password {
            position: absolute;
            width: 379px;
            height: 60px;
            left: 108px;
            top: 587px;
            background: #26292C;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 50px;

            ::placeholder {
                position: absolute;
                width: 49px;
                height: 20px;
                left: 128px;
                top: 607px;
                font-family: 'Questrial';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #E0E0E0;
            }
        }
    }
</style>
