# Caju Front End Teste

## Instruções de como rodar o projeto ou [acesse aqui.](https://caju-mauve.vercel.app/#/dashboard)

### Faça o clone do projeto:

```shell
https://github.com/mayconbalves/caju
```

### Use nvm para usar a versão do nodejs

```shell
nvm use
Ou instale o nodejs na versão 20.15.0
```

### Adicione um arquivo .env na raiz do projeto

```shell
VITE_API_URL=http://localhost:3000
```

### Instale as dependências usando `yarn` ou `npm`

```shell
yarn ou npm i
```

### Rodando o json server

```shell
yarn init:db
```

### Rodando o projeto

```shell
yarn dev
```

### Rodando storybook

```shell
yarn storybook
```

### Rodando os testes

```shell
yarn test
```

### Rodando os testes em modo watch

```shell
yarn test:watch
```

### Vendo o coverage

```shell
yarn test:coverage
```

<img width="812" alt="Captura de Tela 2024-10-24 às 21 07 23" src="https://github.com/user-attachments/assets/064d482f-6c22-4c1b-a0a8-0042b4d20b08">
<br />

Se tudo ocorreu bem os seguintes serviços estarão disponiveis em:
<br/>

Aplicação http://localhost:3001/
<br/>
Json Web Server http://localhost:3000/

## Apresentanção do problema

O desafio é aprimorar o código existente e implementar as funcionalidades que estão incompletas, use a sua experiência para identificar e propor soluções para os problemas encontrados.
Sinta-se a vontade para refatorar, criar novas pastas, componentes, hooks, utils e o que mais achar necessário para garantir que o projeto esteja organizado e segue as boas práticas de desenvolvimento.

## Especificações

### Tela Dashboard

- ✅ Implementar `GET` ao carregar a pagina e ao fazer pequisa por `CPF`
- ✅ Filtrar os cards por coluna, usando o status.
- ✅ Implementar `PUT` ao clicar em Reprovar e alterar o status para `REPROVED`
- ✅ Implementar `PUT` ao clicar em Aprovar e alterar o status para `APPROVED`
- ✅ Implementar `PUT` ao clicar em Revisar novamente e alterar o status para `REVIEW`
- ✅ Implementar `DELETE` ao clicar no lixeira no card.
- ✅ O botão de `Reprovar` e `Aprovar` só deve aparecer em admissões com o status `REVIEW`
- ✅ O botão `Revisar novamente` só deve aparecer em admissões com o status `REPROVED` ou `APPROVED`
- ✅ Implementar um loading na tela ao realizar requisições.
- ✅ Todas as ações devem ter modal de confirmação e uma notificação de sucesso ou erro
- ✅ Na pesquisa por CPF realizar a requisição automaticamente ao preencher um CPF válido
- ✅ Adicionar máscara de CPF no campo de pesquisa.
- ✅ Atualizar os dados (refetch) ao clicar no ícone de atualizar

### Tela Cadastro

- ✅ Implementar validação no campo de `email` para que aceite apenas emails válidos
- ✅ Implementar validação no campo `nome completo` para que aceite pelo menos um espaço, no mínimo duas letras, e que a primeira letra não seja um número.
- ✅ Implementar validação no campo CPF para aceitar apenas CPFs válidos e adicionar uma máscara de CPF ao campo.
- ✅ Implementar `POST` ao preencher todos os campos corretamentes.
- ✅ Redirecionar ao `/dashboard` ao criar uma nova admissão.

## API

Você consumirá uma API mockada localmente, que será executada utilizando o json-server. Para mais informações consulte a [documentação](https://github.com/typicode/json-server/).

Exemplo de Requisição:

```
POST http://localhost:3000/registrations
Content-Type: application/json
{
  "admissionDate": "23/10/2023",
  "email": "maria@caju.com.br",
  "employeeName": "Maria Silva",
  "status": "REVIEW",
  "cpf": "12345678901"
}
```

Para realizar a pesquisa por CPF, utilize essa funcionalidade do json-web-server:
<br/>
https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#filter

Mas se quiser pode usar essa API criada com nodejs
https://caju-backend.vercel.app/api

## Extras (opcional)

- ✅ Testes Unitários e de Integração `(Obrigátorio para Senior e Tech Lead)`
- ✅ Storybook
- ✅ Configuração de CI/CD com deploy automatizado

## Tela de dashboard

https://github.com/user-attachments/assets/390f987a-ab9e-4e26-8b26-ee93bc685a26

## Busca por cpf

https://github.com/user-attachments/assets/322eea0c-e8a1-4d17-b1e8-f0d4708bf0e3

## Busca por cpf não encontrada

https://github.com/user-attachments/assets/bff47370-4604-4380-80a5-c2d40dbbb584

## Erro no formulário

https://github.com/user-attachments/assets/edb8aa6f-dc1e-4a93-93f7-13953cac59b9

## Sucesso do formulário

https://github.com/user-attachments/assets/66d849c9-9746-494b-b3f4-3ad1f93598b3
