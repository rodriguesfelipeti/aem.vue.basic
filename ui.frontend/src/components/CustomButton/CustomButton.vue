<template lang="">
    <div>
        <div class="btn-custom-parent"></div>
        <div class="btn-custom-child">{{ text }}</div>
    </div>

</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String
    }
  }
}
</script>
<style>

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
    .btn-custom-parent {
        position: absolute;
        width: 216px;
        height: 68px;
        left: 740px;
        top: 663px;
        border: 2px solid #FFFFFF;

        /* Gray 1 */
        background: #333333;
    }

    .btn-custom-child{
        position: absolute;
        width: 130px;
        height: 21px;
        left: 783px;
        top: 687px;

        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        letter-spacing: -0.035em;
        text-transform: uppercase;

        color: #FFFFFF;
    }

    @media only screen and (max-width: 600px) {
        .btn-custom-parent {
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 216px;
            height: 68px;
            left: 24px;
            top: 726px;
            border: 2px solid #FFFFFF;
            /* Gray 1 */

            background: #333333;
        }

        .btn-custom-child {
            position: absolute;
            width: 130px;
            height: 21px;
            left: 67px;
            top: 750px;

            font-family: 'Space Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            letter-spacing: -0.035em;
            text-transform: uppercase;

            color: #FFFFFF;
        }
    }
</style>
