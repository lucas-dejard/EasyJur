// @ts-check
const { test, expect } = require('@playwright/test');
const env = require('dotenv').config({ path: 'playwright.env' })
const { Utilidades } = require('../utilidades/utilidades')


test('Verificar funcionamento da barra de pesquisa', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);

  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO}`)
  // Asserção
  await expect(utilidades.userPanel.filter({ has: page.getByRole('heading', { name: `${process.env.NOME_USUARIO}` }) })).toBeVisible()

});

test('Verificar funcionamento do numero limite de pesquisas', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);
  await page.waitForTimeout(7000);
  var requests = await utilidades.textRequests.innerText()
  var match = await requests.match(/(?<=Requests: )\d+(?=\/)/)
  const requestsDisponiveis = await match ? match[0] : null
  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO}`)
  await expect(utilidades.userPanel.filter({ has: page.getByRole('heading', { name: `${process.env.NOME_USUARIO}` }) })).toBeVisible()
  // Asserção
  requests = await utilidades.textRequests.innerText()
  match = await requests.match(/(?<=Requests: )\d+(?=\/)/)
  match = await match ? match[0] : null
  await expect(match).toEqual(`${requestsDisponiveis - 3}`)
});