const getCompleteDate = () => {
  const params = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }

  const date = new Date()
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

  return {
    actualTime: `${hours}:${minutes}`,
    completeDate: date.toLocaleString('pt-BR', params)
  }
}

const doTimer = (param) => {
  param--
  return {
    status: (param === 0),
    timer: param
  }
}

export default {
  getCompleteDate,
  doTimer
}
