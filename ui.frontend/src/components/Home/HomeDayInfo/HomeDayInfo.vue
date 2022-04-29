<template lang="">
    <div class="home-day-info">
        <h1 class="home-day-info__title"> {{ actualTime }} </h1>
        <p class="home-day-info__info">{{ completeDate }}</p>
    </div>
</template>
<script>
export default {
  name: 'HomeDayInfo',
  props: {},
  data () {
    return {
      actualTime: '',
      completeDate: ''
    }
  },
  methods: {
    getCompleteDate () {
      const params = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }

      const date = new Date()
      let seconds
      console.log(date.getSeconds())
      if (date.getSeconds() < 10) {
        seconds = `0${date.getSeconds()}`
      } else {
        seconds = date.getSeconds()
      }

      this.actualTime = `${date.getHours()}:${date.getMinutes()}:${seconds}`
      this.completeDate = date.toLocaleString('pt-BR', params)
    }
  },
  mounted () {
    setInterval(() => {
      this.getCompleteDate()
    }, '1000')
  }
}

</script>
<style lang="scss">
     @import "./homeDayInfo.scss";
</style>
