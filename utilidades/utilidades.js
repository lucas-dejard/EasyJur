const { expect } = require('@playwright/test')

exports.Utilidades = class Utilidades {

    constructor(page) {
        this.page = page

        // -- Seletores -- //

        // -- TextBox -- //
        this.barraPesquisa = page.getByTestId('search-bar')

        // -- Botões -- //
        this.botaoPesquisa = page.getByRole('button', { name: 'search' })

        // -- Icones -- //
        this.iconeEmpresa = page.locator('p').filter({ hasText: 'Argo Solutions' }).locator('path').nth(1)
        this.iconeLocalizacao = page.locator('p').filter({ hasText: 'Brazil' }).getByRole('img')

        // -- Diversos -- //
        this.imagemPerfil = page.getByRole('img', { name: 'LucasDejard' })
        this.userPanel = page.locator('xpath=/html/body/div/main/section[3]/div/article[1]/header')
        this.followersPanel = page.locator('div[class="followers"]')
        this.textBio = page.locator('p[class="bio"]')
        this.textRequests = page.getByTestId('rate-limit')
    }

    // -- funções -- //
    async pesquisar(page, usuario, nomeusuario) {
        await this.barraPesquisa.fill(`${usuario}`)
        await this.botaoPesquisa.click()
        await expect(this.userPanel.filter({ has: page.getByRole('heading', { name: `${nomeusuario}` }) })).toBeVisible()
    }
}