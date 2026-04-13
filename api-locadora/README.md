# API Locadora

Projeto simples feito com `Next.js` para simular uma API de locadora de filmes.

## O que o projeto faz

- lista filmes
- cadastra filmes
- atualiza filmes
- remove filmes
- mostra a documentacao da API no navegador

Atualmente o CRUD funciona em memoria, entao os dados voltam ao estado inicial quando o servidor reinicia.

## Tecnologias usadas

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Swagger UI`
- `mysql2` instalado para futura integracao com banco

## Rotas principais

- `GET /api/filmes`
- `POST /api/filmes`
- `PUT /api/filmes`
- `DELETE /api/filmes`
- `GET /api/openapi`
- `GET /docs`

## Como rodar o projeto

```bash
npm install
npm run dev -- --webpack
```

Depois abra:

- `http://localhost:3000`
- `http://localhost:3000/docs`

## Exemplos no PowerShell

Listar filmes:

```powershell
Invoke-RestMethod http://localhost:3000/api/filmes
```

Cadastrar filme:

```powershell
Invoke-RestMethod `
  -Method Post `
  -Uri http://localhost:3000/api/filmes `
  -ContentType "application/json" `
  -Body '{"titulo":"Matrix","genero":"Ficcao","ano":1999,"disponivel":true}'
```

Atualizar filme:

```powershell
Invoke-RestMethod `
  -Method Put `
  -Uri http://localhost:3000/api/filmes `
  -ContentType "application/json" `
  -Body '{"id":1,"titulo":"Interestelar Atualizado","genero":"Ficcao Cientifica","ano":2014,"disponivel":true}'
```

Excluir filme:

```powershell
Invoke-RestMethod `
  -Method Delete `
  -Uri http://localhost:3000/api/filmes `
  -ContentType "application/json" `
  -Body '{"id":1}'
```


