# TV Corporativa — Solução Docker Linux

Uma solução leve e eficiente baseada em Docker para exibição contínua de vídeos em telas de TV corporativa.

## Como funciona

```
┌─────────────┐        ┌────────────────────────────────────┐
│  Smart TV   │◄──────►│  Nginx (porta 81)                  │
│  Android    │        │  ├─ /videos/ → serve arquivo direto│
│  Tizen      │        │  └─ /       → proxy → Node.js      │
└─────────────┘        └────────────────────────────────────┘
                                           │
                                   ┌───────▼────────┐
                                   │  Node.js :3000 │
                                   │  Login + Upload│
                                   └────────────────┘
```

- **`/tv`** — página fullscreen para as TVs (loop automático do vídeo)
- **`/dashboard`** — painel para upload de novo vídeo (requer login)
- O vídeo enviado substitui o arquivo atual em tempo real

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/acorrea1/tv-aviso-empresa.git
   cd tv-aviso-empresa
   ```

2. Configure as credenciais:
   ```bash
   cp .env.example .env
   # Edite o .env com seu usuário, senha e segredo de sessão
   ```

3. Suba os containers:
   ```bash
   docker-compose up -d --build
   ```

4. Acesse:
   - **Painel admin:** `http://seu-servidor:81/login.html`
   - **TV (exibição):** `http://seu-servidor:81/tv`

## Estrutura do projeto

```
tv-aviso-empresa/
├── docker-compose.yml
├── nginx.conf
├── .env.example
└── app/
    ├── Dockerfile
    ├── package.json
    ├── server.js
    └── public/
        ├── login.html   ← login do painel
        ├── admin.html   ← upload de vídeo
        └── tv.html      ← exibição nas TVs
```

## Variáveis de ambiente (`.env`)

| Variável         | Descrição                        | Padrão        |
|------------------|----------------------------------|---------------|
| `TV_USER`        | Usuário do painel admin          | `admin`       |
| `TV_PASS`        | Senha do painel admin            | `admin123`    |
| `SESSION_SECRET` | Segredo da sessão (troque!)      | *(obrigatório)*|

## Tecnologias

- **Docker & Docker Compose**
- **Nginx** — entrega de vídeo em alta performance
- **Node.js + Express** — backend de autenticação e upload
- **Multer** — gerenciamento de uploads

## Créditos

Desenvolvido por Adonias Correa com apoio de ferramentas de IA:
Google Gemini, ChatGPT (OpenAI) e DeepSeek.

## Licença

MIT — veja o arquivo `LICENSE`.
