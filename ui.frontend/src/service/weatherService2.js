class WeatherService2 {
  constructor () {
    this.appkey = 'ecdee0dc2ea659ef1afdbfa0aa3e4a73'
    // 3904
  }

  // getWeather = async (param) => {
  //   return await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=dec0c84c', {
  //     mode: 'no-cors'
  //   })
  //     .then(res => console.log(res.json()))
  //     // .then(res => res)
  // }

  // getCity = async (param) => {
  //   return await fetch('http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=Limeira&state=SP&token=ecdee0dc2ea659ef1afdbfa0aa3e4a73', {
  //     mode: 'no-cors'
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // }
}

export const weatherService2 = new WeatherService2()
