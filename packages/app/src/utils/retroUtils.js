import moment from 'moment'

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const prepareDate = (date) => {
  const weekDay = moment(date).day()
  return {
    date,
    weekDay: weekDays[weekDay - 1]
  }
}

export const convertTime = (time) => {
  const [hour, secondHour, minute, secondMinute] = time.split('')
  return `${hour}${secondHour}:${minute}${secondMinute}`
}
