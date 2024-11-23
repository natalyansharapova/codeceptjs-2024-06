Feature('Афиша')

Scenario('Проверка открытия ссылки Афиши', ({ I, afishaPage }) => {
  const title = 'Афиша'
  afishaPage.visit()
  I.see(title, 'h1')
})