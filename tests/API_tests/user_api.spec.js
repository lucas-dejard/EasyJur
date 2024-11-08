const { test, expect, request } = require('@playwright/test');
const env = require('dotenv').config({ path: 'playwright.env' })

test('Deve retornar o valor máximo de requests', async ({ request }) => {
  const requestvalor = await request.get(`${process.env.APIURL}`, {
  });
  expect(requestvalor.ok()).toBeTruthy();
  // Asserção
  expect(await (requestvalor.headers())).toHaveProperty('x-ratelimit-limit', "60",);
});