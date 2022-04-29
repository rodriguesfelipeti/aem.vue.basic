class WeatherService {
  constructor () {
    this.appkey = '22077a9606dc4caf6305b618c12e07cf'
  }

    getWeather = async (param) => {
      return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&APPID=${this.appkey}`)
        .then(res => res.json())
        .then(res => res)
    }

    getStreetAddressFrom = async (lat, long) => {
      return await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${this.appkey}`)
        .then(res => res.json())
        .then(res => res)
    }
}

export const weatherService = new WeatherService()
