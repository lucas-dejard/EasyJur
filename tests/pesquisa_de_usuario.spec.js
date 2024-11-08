// @ts-check
const { test, expect } = require('@playwright/test');
const env = require('dotenv').config({ path: 'playwright.env' })
const { Utilidades } = require('../utilidades/utilidades')


test('Verificar funcionamento da barra de pesquisa', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);

  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO2}`)
  // Asserção
  await expect(utilidades.userPanel.filter({ has: page.getByRole('heading', { name: `${process.env.NOME_USUARIO2}` }) })).toBeVisible()

});

test('Verificar funcionamento do numero limite de pesquisas', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);

  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO2}`)
  // Asserção
  await expect(utilidades.userPanel.filter({ has: page.getByRole('heading', { name: `${process.env.NOME_USUARIO2}` }) })).toBeVisible()
});

