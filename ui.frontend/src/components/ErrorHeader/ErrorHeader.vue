<template lang="">
    <div class="errorHeader-container">
        <p class="errorHeader-title">{{ text }}</p>
    </div>
</template>
<script>

export default {
  name: 'ErrorHeader',
  props: {
    text: {
      type: String,
      default: '404 NOT FOUND'
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>

    /* vietnamese */
    @font-face {
      font-family: 'Inconsolata';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WRL2l2eY.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Inconsolata';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WRP2l2eY.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Inconsolata';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WR32lw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    .errorHeader-container {
        /* background-color: gold; */
        height: 100px;
        width: 100%;
    }

    .errorHeader-title {
       /* 404 not found */
        position: absolute;
        width: 160px;
        height: 25px;
        left: 77px;
        top: 40px;
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: -0.08em;
        text-transform: uppercase;

        color: #333333;
    }

   @media only screen and (max-width: 600px) {

        .errorHeader-title {
            /* 404 not found */
            position: absolute;
            width: 160px;
            height: 25px;
            left: 24px;
            top: 20px;
            font-family: 'Inconsolata';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 25px;
            letter-spacing: -0.08em;
            text-transform: uppercase;

            color: #333333;
        }
    }
</style>
