
Feature('Search')

Scenario('Поиск', ({ I, searchPage }) => {
  
 // I.amOnPage('/')
 // I.click('Поиск')
 // I.fillField('input[type=search]', 'Бакман')
//  I.pressKey('Enter')

   searchPage.visit()
   searchPage.clickSearch()
   searchPage.fillSearch('Бакман')
   searchPage.pushTheButton()
   I.seeInCurrentUrl('https://fanlife.ru/search?query=%D0%91%D0%B0%D0%BA%D0%BC%D0%B0%D0%BD')
})