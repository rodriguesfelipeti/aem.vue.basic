<template lang="">
    <div class="home-weather">
        <h1 v-show="cityState" class="home-weather__title"> {{ cityState }} </h1>
        <div v-show="iconWeather" class="home-weather__wrapper">
            <figure class="home-weather__wrapper--img">
                <img :src="iconWeather" alt="">
            </figure>
            <p v-show="temperature" class="home-weather__wrapper--p">
                {{ temperature }}
            </p>
        </div>
    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import { weatherService } from '../../../service/weatherService'
import getStateAbb from '../../../enum/statesBr'

export default {
  name: 'HomeWeather',
  props: {},
  data () {
    return {
      cityState: '',
      iconWeather: '',
      temperature: ''
    }
  },
  methods: {
    ...mapGetters('auth', {
      errorData: 'getErrorData',
      logged: 'getLogged'
    }),

    doCityStateStr (city, state) {
      return `${city} - ${getStateAbb(state).sigla}`
    },

    castTemperature (temperature) {
      console.log(temperature.toString())
      return temperature.toString().substr(0, 4)
    }

  },
  mounted () {
    console.log('Usuário Logado: ')
    console.log(this.logged.loggedUser)

    navigator.geolocation.getCurrentPosition(
      position => {
        weatherService.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
          .then(res => {
            this.cityState = this.doCityStateStr(res[0].name, res[0].state)

            weatherService.getWeather(res[0].name).then(res => {
              this.iconWeather = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
              this.temperature = `${this.castTemperature(res.main.temp)}°`
            })
          })
      },
      error => {
        console.log(error.message)
      }
    )
  }
}
</script>
<style lang="scss">
     @import "./homeWeather.scss";
</style>
