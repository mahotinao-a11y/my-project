import { loginPage } from '../pages/loginPage';

describe('Тест логина', () => {
  it('Успешный вход', () => {
    const login = new LoginPage();
    login.visit(); // вызываем метод, который открыть страницу
    login.fillUsername('standard_user');
    login.fillPassword('secret_sauce');
    login.submit();

    // проверка, что перешли куда нужно
    cy.url().should('include', '/inventory.html'); // пример, поменяйте по вашему сценарию
  });
});
