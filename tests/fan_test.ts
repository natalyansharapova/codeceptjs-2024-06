Feature('FAN')

Scenario('Переход на главную страницу',  ({ I, homePage}) => {
  homePage.visit()
  I.dontSee('Страница не найдена')
})