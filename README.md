# TV Corporativa - Solução Docker Linux

Uma solução leve e eficiente baseada em Docker para a exibição contínua de conteúdos de vídeo em diversas telas de TV Corporativa simultaneamente.

## 1. Descrição
Este projeto foi desenvolvido para simplificar a gestão de sinalização digital (Digital Signage). Ele permite que um único vídeo ou fluxo de mídia seja transmitido de forma sincronizada para múltiplos dispositivos (como Smart TVs, Android Boxes ou Tizen) utilizando a infraestrutura Docker.

> Em uso na **suaempresa** — exibição contínua de mídia em telas de TV corporativa.

## 2. Funcionalidades
* **Deploy Rápido:** Configuração via `docker-compose`.
* **Baixo Consumo:** Otimizado para rodar em servidores locais ou VPS.
* **Compatibilidade:** Testado em telas de 55 polegadas e diversos players.
* **Automação:** Scripts integrados para reinicialização automática e monitoramento.

## 3. Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

## 4. Instalação e Uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/acorrea1/tv-aviso-empresa.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd tv-aviso-empresa
   ```

3. Suba os containers:
   ```bash
   docker-compose up -d
   ```

## 5. Tecnologias Utilizadas
1. Docker & Docker Compose
2. Nginx (como servidor web/proxy)
3. Shell Script para automação de logs

## 6. Créditos e Atribuições
Este projeto foi desenvolvido por Adonias Correa com o apoio colaborativo de ferramentas de Inteligência Artificial para a arquitetura de sistemas, depuração de scripts e otimização de containers:
1. Google Gemini
2. ChatGPT (OpenAI)
3. DeepSeek

## 7. Licença
Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
