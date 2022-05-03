<template lang="">
    <div class="home-day-info">
        <h1 class="home-day-info__title"> {{ actualTime }} </h1>
        <p class="home-day-info__info">{{ completeDate }}</p>
    </div>
</template>
<script>

import dateTimeHelper from '../../../utils/dateTimeHelper'

export default {
  name: 'HomeDayInfo',
  props: {},
  data () {
    return {
      actualTime: '',
      completeDate: ''
    }
  },
  methods: {},
  mounted () {
    setInterval(() => {
      const dateTime = dateTimeHelper.getCompleteDate()
      this.actualTime = dateTime.actualTime
      this.completeDate = dateTime.completeDate
    }, '1000')
  }
}

</script>
<style lang="scss">
     @import "./homeDayInfo.scss";
</style>
