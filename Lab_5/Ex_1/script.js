function getCurrentDay() {
  let day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  return `${day[( new Date().getDay() )]}`
}
function getCurrentTime() {
  if ( new Date().getHours() < 12 ) {
    return `Текущее время ${new Date().getHours()} AM : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
  }
  return `Текущее время ${new Date().getHours() % 12} PM : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
}
console.log(`Сегодня: ${getCurrentDay()}\n${getCurrentTime()}`);