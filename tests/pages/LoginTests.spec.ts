import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage.ts';
import { MyPage } from './MyPage.ts';
import { CartPage } from './CartPage.ts';
import { ApiProducts } from './ApiProducts';

test('test', async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('mahotina.o@mail.ru', '123456');

  //MyPage
  const home = new MyPage(page);
  await home.addProductToCart('Stylish Dress');
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page);
  await cart.checkProductInCart('#product-4 > td.cart_description > h4 > a');
});
test('API test - ApiProducts', async ({ request }) => {
  const apiProducts = new ApiProducts(request);
  const response = await apiProducts.getAllProducts();
  console.log('Products count:', response.products.length);
  expect(response).toBe(200);
  expect(response.responseCode).toBe(200);
});
