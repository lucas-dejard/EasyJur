// @ts-check
const { test, expect } = require('@playwright/test');
const env = require('dotenv').config({ path: 'playwright.env' })
const { Utilidades } = require('../utilidades/utilidades')

test('Verificar o funcionamento do painel de seguidores do usuário pesquisado', async ({ page }) => {
  const utilidades = new Utilidades(page)
  await page.goto(`${process.env.URL}`);

  // Pesquisa do Usuario
  await utilidades.pesquisar(page, `${process.env.GITUSER}`, `${process.env.NOME_USUARIO}`)
  // Asserção
  await expect(utilidades.followersPanel.filter({ has: page.getByRole('img', { name: 'AnneLivia' }) })).toBeVisible()
  await expect(utilidades.followersPanel.filter({ has: page.getByRole('heading', { name: 'AnneLivia' }) })).toBeVisible()
  await expect(utilidades.followersPanel.filter({ has: page.getByRole('link', { name: 'https://github.com/AnneLivia' }) })).toBeVisible()
});