const { I } = inject()

const locators = {
    search: 'input[type=search]'
}

export = {
  visit() {
    I.amOnPage('/')
  },
  clickSearch() {
    I.click('Поиск')
  },
  fillSearch(searchSome:string) {
   I.fillField(locators.search,searchSome)
  },
  pushTheButton() {
    return I.pressKey('Enter')
  },
}