<template lang="">
    <div :class="className">
        {{ text }}
    </div>
</template>
<script>
export default {
  name: 'Text2',
  props: {
    text: {
      type: String
    },
    title: {
      type: String
    },
    className: {
      type: String
    }
  }
}
</script>
<style>

  /* latin */
  /* vietnamese */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dPIFZifjKcF5UAWdDRYE58RWq7.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dPIFZifjKcF5UAWdDRYE98RWq7.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dMIFZifjKcF5UAWdDRaPpZUFqaHjyV.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dMIFZifjKcF5UAWdDRaPpZUFuaHjyV.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dMIFZifjKcF5UAWdDRaPpZUFWaHg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  .inptTxt-title {
    position: absolute;
    width: 586px;
    height: 190px;
    left: 735px;
    top: 265px;

    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;

    /* Gray 1 */

    color: #333333;
  }

  .inptTxt-txt {
    position: absolute;
    width: 381px;
    height: 108px;
    left: 736px;
    top: 491px;

    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;

    /* Gray 2 */

    color: #4F4F4F;
  }

  @media only screen and (max-width: 600px) {

      .inptTxt-title {
        position: absolute;
        width: 350px;
        height: 142px;
        left: 24px;
        top: 407px;

        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 71px;
        letter-spacing: -0.035em;

        /* Gray 1 */

        color: #333333;
      }

      .inptTxt-txt {
        position: absolute;
        width: 328px;
        height: 81px;
        left: 23px;
        top: 579px;

        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.035em;

        /* Gray 2 */

        color: #4F4F4F;
      }
  }

</style>
