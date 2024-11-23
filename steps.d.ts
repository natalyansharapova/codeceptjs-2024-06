/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/HomePage')
type afishaPage = typeof import('./pages/AfishaPage')
type searhPage = typeof import('./pages/SearchPage')


declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage:homePage, afishaPage:afishaPage, searchPage:searhPage}
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
