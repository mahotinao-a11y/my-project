import { test, expect } from '@playwright/test';

test('Get All products list', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/productsList');
  //Получаем список всех товаров
  const responseObject = await response.json();
  console.log(responseObject);
  // Ожидаем,что товар 8 имеет ID=11
  expect(responseObject.products[8].id).toBe(11);
  console.log('Товар 8;', responseObject.products[8]);
  // Ожидаем,что всего товаров 34
  expect(responseObject.products).toHaveLength(34);
  expect(response.status()).toBe(200);
});

test('Post To All Products', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/productsList');
  expect(response.status()).toBe(200); // вот тут должен быть 405 как в документации, 200 ставим для провкрки сообщения
  const Meassage = await response.text();
  console.log(Meassage);
  expect(Meassage).toContain('This request method is not supported.');
});

test('Get All Brands List', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/brandsList');
  //Получаем список всех товаров
  const responseObject = await response.json();
  console.log(responseObject);
  expect(response.status()).toBe(200);
  expect(responseObject.brands).toHaveLength(34);
  expect(responseObject.brands[12].brand).toBe('Babyhug');
  console.log(responseObject.brands[12]);
});
// по документации ответ 200 и массив с email пользоватклями
test('GET user account detail by email', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/getUserDetailByEmail');
  const responseObject = await response.json();
  console.log(responseObject);
  if (response.status() === 200){ 
console.log('true')};
else {console.log ('false')}
});
// придуманный тест
test('GET branda H&M', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/brand_products/H&M');
  const responseObject = await response.json();
  console.log(responseObject);
});
test('POST To Search Product without search_product parameter', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/searchProduct');
  expect(response.status()).toBe(200); 
  const Meassage = await response.text();
  console.log(Meassage);
  expect(Meassage).toContain('Bad request, search_product parameter is missing in POST request.')



