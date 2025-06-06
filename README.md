> ⚠️ Este repositório é um fork do [cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app), mantido pela equipe oficial da Cypress.  
> Abaixo estão minhas contribuições para estudo e demonstração prática de testes automatizados como QA Engineer.

---

# Testes Automatizados com Cypress - Real World App

Este projeto é baseado em uma aplicação real simulada e demonstra minhas habilidades como QA Engineer utilizando testes End-to-End com Cypress.

## Objetivo

Testar fluxos reais como:

- Cadastro e autenticação de usuários
- Criação e gerenciamento de contas bancárias
- Transferência de valores
- Validações de campos e mensagens de erro

## Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript

## Como executar os testes

1. Clone o projeto:

```bash
git clone https://github.com/gouvea77/cypress-realworld-app.git
cd cypress-realworld-app
yarn
```

2. Instale as dependências:

- No windowa

```bash
yarn
```

- No Mac com chip M1/M2:

```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

3. Inicie a aplicação local:

```bash
yarn dev
```

Execute os testes com o Cypress:

```bash
yarn cypress:open
```

## O que aprendi com este projeto

Boas práticas de escrita de testes

Page Object Pattern com Cypress

Fluxos reais de uma aplicação financeira

# Estrutura do Projeto

A estrutura do projeto segue boas práticas recomendadas pelo **Cypress** e utiliza o padrão **Page Object Model (POM)** para maior organização e manutenibilidade.

## Estrutura de Pastas

cypress/<br>
├── downloads/<br>
├── fixtures/ # Dados mockados<br>
│ ├── data-transactions.json<br>
│ └── user-data.json<br>
├── support/ # Configurações globais e utilitários<br>
├── tests/ # Testes organizados por tipo<br>
│ ├── e2e/ # Testes E2E<br>
│ │ ├── checkHistoryTransaction.spec.js<br>
│ │ ├── createUser.spec.js<br>
│ │ ├── login.spec.js<br>
│ │ └── sendMoney.spec.js<br>
│ └── pages/ # Page Objects<br>
│ ├── homePage.js<br>
│ ├── loginPage.js<br>
│ └── signUpPage.js<br>

---

## Explicação da Estrutura

### `/fixtures`

Contém arquivos `.json` usados para simular dados reais, garantindo **consistência** nos testes:

- `data-transactions.json`: Dados mockados para transações financeiras.
- `user-data.json`: Dados de usuários para testes de cadastro e login.

### `/tests/e2e`

Arquivos de teste (`.spec.js`) organizados por funcionalidades da aplicação:

- `createUser.spec.js`: Testa o fluxo de cadastro (casos positivos e negativos).
- `login.spec.js`: Testa o fluxo de login com dados válidos.
- `sendMoney.spec.js`: Testa o envio de dinheiro entre contas.
- `checkHistoryTransaction.spec.js`: Testa a visualização do histórico de transações.

### `/tests/pages`

Implementa o **Page Object Pattern**, que separa a lógica de interação com a interface:

- `homePage.js`: Página inicial.
- `loginPage.js`: Página de login.
- `signUpPage.js`: Página de cadastro.

---

## Testes Implementados

Os testes cobrem cenários reais de uma aplicação financeira, focando tanto em **fluxos positivos** quanto em **validações de erro**.

### Autenticação

#### `createUser.spec.js`

- Cadastro com dados válidos.
- Validação de erros:
  - Ausência de **First Name**: "First Name is required".
  - Ausência de **Last Name**: "Last Name is required".
  - Ausência de **Password**: "Password is required".
  - **Senhas não correspondentes**: "Passwords do not match".

#### `login.spec.js`

- Teste de login com credenciais válidas e inválidas

### Transações

#### `sendMoney.spec.js`

- Testa o envio de dinheiro entre contas, verificando:
  - Exibição de mensagem de erro ao tentar enviar um valor com saldo insuficiente.
  - Validação de uma transferência bem-sucedida com valor disponível na conta.

#### `checkHistoryTransaction.spec.js`

- Visualização do histórico de transações.

---

### Cenário de Teste: Enviar dinheiro com saldo suficiente

![Cenário de transferência](images/captura-planilha-casos-de-testes.png)

🔗 [Planilha com os casos de teste](https://docs.google.com/spreadsheets/d/1jV7b_I7ku_e1gKTIXctP2S4-sKiL_5CY/edit?gid=838253256#gid=838253256)

🔗 [Documentação oficial do projeto](https://github.com/cypress-io/cypress-realworld-app)
