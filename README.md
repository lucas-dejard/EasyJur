# EasyJur
Projeto de testes para o processo seletivo EasyJur

# Contexto
O projeto escolhido para automação é o GithuUser Profile Search
Um projeto simples de recuperar o o perfil de um usuário do github e suas infmorações adicionais
Link do projeto: https://gh-users-search.netlify.app/

## Esquema do projeto
![image](https://github.com/user-attachments/assets/a72b0d65-88ca-481e-999e-82b9ffd0612b)
O esquema em formato PDF se encontra disponivel na pasta *Utilidades* do projeto.

# Instalação  

## Pré-requisitos  

* Instalar o Node.js: https://nodejs.org/en/download/package-manager  

## Dependências  

Instalação das dependências:  

1.	Na pasta raiz executar o comando: `npm install`  


# Execução dos testes
Abrindo o browser
1. Abra o CMD
2. Execute o script de teste desejado: npx playwright test / npx playwright test especifico.spec.ts

# OBSERVAÇÂO
Em um projeto real não se deve commitar os arquivos .ENV e .yml, entretando para esse projeto sem a utilização dos arquivos .ENV e .yml commitados seria impossibilitada a execução correta do projeto
