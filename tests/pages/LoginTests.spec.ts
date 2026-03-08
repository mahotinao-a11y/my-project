import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage.ts';
import users from './users.json';
import { MyPage } from './MyPage.ts';
import { CartPage } from './CartPage.ts';
import { ApiProducts } from './ApiProducts';

test('test', async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login(users.validUser.email, users.validUser.password);

  //MyPage
  const home = new MyPage(page);
  await home.addProductToCart('Stylish Dress');
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page);
  await cart.checkProductInCart('#product-4 > td.cart_description > h4 > a');
});
test('API test -Get ApiProducts', async ({ request }) => {
  const apiProducts = new ApiProducts(request);
  const response = await apiProducts.getAllProducts();
  console.log('Products count:', response.products.length);
  expect(response.status).toBe(200);
  expect(response.responseCode).toBe(200);
});

test('API test - POST ApiProducts', async ({ request }) => {
  const ApiProducts = new ApiProducts(request);
  const response = await ApiProducts.postAllProducts();
  expect(responseObject.responseCode).toBe(405);
  expect(Meassage).toContain('This request method is not supported.');
});
