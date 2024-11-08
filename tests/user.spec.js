// @ts-check
const { test, expect } = require('@playwright/test');
const env = require('dotenv').config({ path: 'playwright.env' })
const { Utilidades } = require('../utilidades/utilidades')

test('Verificar o funcionamento do painel de usuário pesquisado', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);

  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO}`)
  // Asserção
  await expect(utilidades.userPanel.filter({ has: page.getByRole('img', { name: `${process.env.NOME_USUARIO}` }) })).toBeVisible()
  await expect(utilidades.userPanel.filter({ has: page.getByRole('heading', { name: `${process.env.NOME_USUARIO}` }) })).toBeVisible()
  await expect(page.getByText('@john doe')).toBeVisible()
  await expect(utilidades.userPanel.filter({ has: page.getByRole('link', { name: 'follow' }) })).toBeVisible()
  await expect(utilidades.textBio.filter({ hasText: 'Student of Computer engineering in UFPA - Universidade Federal do Pará.' })).toBeVisible()
  await expect(utilidades.iconeEmpresa).toBeVisible()
  await expect(utilidades.iconeLocalizacao).toBeVisible()
});