<p align="center">
  <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/pensador-promise/main/.github/images/favicon512x512-pensador.png" alt=":package: pensador-api" />
  <h2 align="center">:package: pensador-api</h2>
  <p align="center">API de frases do Pensador via Web Scraping</p>
</p>

<p align="center">
  <a href="https://github.com/hebertcisco/pensador-api/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/pensador-api?style=flat&color=336791" />
  </a>
  <a href="https://github.com/hebertcisco/pensador-api/pulls">
    <img alt="Pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/pensador-api?style=flat&color=336791" />
  </a>
  <a href="https://www.npmjs.com/package/pensador-promise">
    <img alt="pensador-promise downloads" src="https://img.shields.io/npm/dt/pensador-promise?color=336791&label=pensador-promise%20downloads" />
  </a>
  <br />
  <a href="https://github.com/hebertcisco/pensador-api/issues/new/choose">Report Bug</a>
  ·
  <a href="https://github.com/hebertcisco/pensador-api/issues/new/choose">Request Feature</a>
</p>

<p align="center"><strong>Live:</strong> https://pensador-api.vercel.app/</p>

---

## 🚀 Quick Start / Início Rápido

Realize buscas por frases do Pensador usando o endpoint público.

> curl

```bash
curl -s "https://pensador-api.vercel.app/?term=Jesus+Cristo&max=7"
```

> HTTP

```http
GET /?term=Jesus+Cristo&max=7 HTTP/1.1
Host: pensador-api.vercel.app
Accept: application/json
```

Parâmetros:

- `term` (string): termo de pesquisa (autor, tema, etc.).
- `max` (number): quantidade máxima de resultados (padrão: 10).

Exemplo de resposta:

```json
{
  "termoDePesquisa": "frases_de_jesus_cristo",
  "total": 7,
  "frases": [{ "autor": "Jesus Cristo", "texto": "E conhecereis a verdade..." }]
}
```

Endpoints adicionais:

- `GET /status` — status do serviço e informações de ambiente.

Observação: por favor, use com responsabilidade. Evite cargas excessivas para respeitar os limites do site de origem.

---

## 🧭 API Reference

### GET `/`

- Query: `term` (string), `max` (number, opcional, padrão 10)
- Retorna: objeto com `termoDePesquisa`, `total` e lista `frases` (autor, texto)

### GET `/status`

- Retorna: `{ status, date, environment, aws: { region, function_version } }`

---

## 🛠️ Local Development

Pré-requisitos: Node.js 18+ e npm 9+.

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/hebertcisco/pensador-api.git
cd pensador-api
npm install
```

Configure variáveis de ambiente:

```bash
cp .env.example .env.local
# Opcional: edite .env.local
# DEFAULT_AUTHOR=Jesus Cristo
# PORT=3000
# BODY_PARSER_LIMIT=15mb
# MORGAN_FORMAT=":date[iso] HTTP/:http-version :method :url :status :response-time ms"
```

Rodando em desenvolvimento:

```bash
npm run dev
# Servidor: http://localhost:3000 (ou porta definida em PORT)
```

Build de produção:

```bash
npm run build
```

> Observação: variáveis MONGODB\_\* existem no `.env.example`, mas não são necessárias no estado atual do projeto.

---

## ☁️ Deploy

Este projeto está configurado para a Vercel (veja `vercel.json`).

- Entrada: `src/server.ts` com `@vercel/node`
- Rotas: todos os caminhos mapeados para o servidor (`/src/server.ts`)

---

## 🤝 Contributing

Contribuições são bem-vindas! Leia o [CONTRIBUTING.md](CONTRIBUTING.md) e o [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

- Acompanhe as [issues](https://github.com/hebertcisco/pensador-api/issues)
- Sugira ideias usando o template de feature
- Relate bugs com passos para reproduzir e logs

---

## ⚖️ License

MIT © [Hebert F Barros](https://github.com/hebertcisco). Veja [LICENSE](LICENSE).

---

## ☕ Support

Se este projeto ajudou você, deixe uma estrela e considere um café:

<a href="https://www.buymeacoffee.com/hebertcisco">
  <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

---

<sub>Powered by <a href="https://www.npmjs.com/package/pensador-promise">pensador-promise</a>.</sub>
