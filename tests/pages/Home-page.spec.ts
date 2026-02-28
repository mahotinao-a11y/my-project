import { test, expect } from '@playwright/test';
import { Layout } from './Layout.ts';

//группировка тестов
test.describe('Тесты Главной страницы', () => {
  test.describe.configure({ timeout: 60000 });
  // запуск повторяющейся строчки кода для всех тестов в группе
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/');
  });
  test('Проверка навигационного меню', async ({ page }) => {
    const layout = new Layout(page);
    await layout.navigationMenu();
  });

  test('Проверка названий элемента заголовка статьи Automation', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Full-Fledged practice website for Automation Engineers' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Full-Fledged practice website for Automation Engineers' }),
    ).toContainText('Full-Fledged practice website for Automation Engineers');
  });

  test('Проверка переключений кнопок < >', async ({ page }) => {
    await page.locator('a.right.control-carousel.hidden-xs').click();
    await page.locator('a.left.control-carousel.hidden-xs').click();
  });
  test('Проверка наличия  основных разделов на главной странице ', async ({ page }) => {
    await expect(page.locator('div.brands-name')).toBeVisible();
    console.log(' Блок брендов отображается');
    await expect(page.locator('div#accordian.panel-group.category-products')).toBeVisible();
    console.log('Блок категорий отображается');
    await expect(page.locator('div.features_items')).toBeVisible();
    console.log('Блок будущих вещей отображается');
  });
  test('Проверка наличия подразделов в Category ', async ({ page }) => {
    await expect(page.locator('a[href="#Women"]')).toBeVisible();
    console.log('Женщины');
    await expect(page.locator('a[href="#Men"]')).toBeVisible();
    console.log('Мужчины');
    await expect(page.locator('a[href="#Kids"]')).toBeVisible();
    console.log('Дети');
  });
  test('Проверка наличия кнопок "+" и их раскрытия в поразделе Categoty  < >', async ({ page }) => {
    const buttons = page.locator('.fa.fa-plus');
    await expect(buttons).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const btn = buttons.nth(i);
      await expect(btn).toBeVisible();
      await expect(btn).toBeEnabled();
      await btn.click();
    }
  });

  test('Проверка наличия в разделе Category 3 подразделов', async ({ page }) => {
    const buttons = page.locator('a[data-parent="#accordian"]');
    await expect(buttons).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const btn = buttons.nth(i);
      await expect(btn).toBeVisible();
      await expect(btn).toBeEnabled();
      await btn.click();
      await page.waitForTimeout(500);
      await btn.click();
      await page.waitForTimeout(500);
    }
  });

  test('Проверка наличия в  Women 3 разделов', async ({ page }) => {
    await page.locator('[href="#Women"]').click();
    await page.waitForTimeout(500);
    const categories = page.locator('div#Women.panel-collapse.in a');
    await expect(categories).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const category = categories.nth(i);
      await expect(category).toBeVisible();
      await expect(category).toBeEnabled();
    }
  });
  test('Проверка наличия в  Men 2 разделов', async ({ page }) => {
    await page.locator('[href="#Men"]').click();
    await page.waitForTimeout(500);
    const categories = page.locator('div#Men.panel-collapse.in a');
    await expect(categories).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      const category = categories.nth(i);
      await expect(category).toBeVisible();
      await expect(category).toBeEnabled();
    }
  });
  test('Проверка наличия в  Kids 2 разделов', async ({ page }) => {
    await page.locator('[href="#Kids"]').click();
    await page.waitForTimeout(1000);
    const categories = page.locator('div#Kids.panel-collapse.in a');
    await expect(categories).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      const category = categories.nth(i);
      await expect(category).toBeVisible();
      await expect(category).toBeEnabled();
    }
  });

  test('Проверка наличия подразделов в раздели Brands ', async ({ page }) => {
    await expect(page.locator('a[href="/brand_products/Polo"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Polo"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/H&M"]')).toBeVisible();
    await page.locator('a[href="/brand_products/H&M"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Madame"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Madame"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Mast & Harbour"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Mast & Harbour"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Babyhug"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Babyhug"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Allen Solly Junior"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Allen Solly Junior"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Kookie Kids"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Kookie Kids"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('a[href="/brand_products/Biba"]')).toBeVisible();
    await page.locator('a[href="/brand_products/Biba"]').click();
    await page.waitForTimeout(500);
  });
  test('Проверка перехода на вкладку Products  и наличия картинки распродажи ', async ({
    page,
  }) => {
    console.log('Логотип выведен');
    const productsLink = page.getByRole('link', { name: 'Products' });
    await expect(productsLink).toBeVisible();
    await productsLink.click();
    await expect(page).toHaveURL(/products/);
    console.log('Переход "Products" осуществлен');
    const img = page.locator('img[src="/static/images/shop/sale.jpg"]');
    await expect(img).toBeVisible();
    console.log('Картинка загружена и видна');
  });
});

//Анотации (skip-пропуск теста,fixme-тест для фикса,fail-провальный тест, only -запускает только один тест,)
/*test.skip('Проверка перехода на вкладку Products  и наличия картинки распродажи ', async ({
    page,
  }) => {
    console.log('Логотип выведен');
    const productsLink = page.getByRole('link', { name: 'Products' });
    await expect(productsLink).toBeVisible();
    await productsLink.click();
    await expect(page).toHaveURL(/products/);
    console.log('Переход "Products" осуществлен');
    const img = page.locator('img[src="/static/images/shop/sale.jpg"]');
    await expect(img).toBeVisible();
    console.log('Картинка загружена и видна');
  });*/
