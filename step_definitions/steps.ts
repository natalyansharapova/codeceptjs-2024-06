import { table } from "console";

const { I} = inject();
// Add in your custom step files


Given('Пользователь открывает главную страницу', () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.amOnPage('/')
});

When('На странице присутствует раздел Обзоры', () => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.see('Обзоры')
 });
