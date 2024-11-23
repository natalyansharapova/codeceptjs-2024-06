const { I } = inject()

export = {
  visit() {
    I.amOnPage('/afisha')
  },
  getTitle() {
    return I.grabValueFrom('h1')
  }
}