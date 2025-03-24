# 👩🏻‍💻 Projeto Pastel de ideias

<div align="center">

<img src="./public/img/logo.svg" width="350px">

<div style="margin-top:15px;">
  <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="VueJs"/>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">  
</div>

</div>

O Projeto Pastel de Ideias é uma aplicação frontend desenvolvida para aprimorar habilidades com Vue.js e Vuex. Trata-se de uma aplicação simples, focada na manipulação da reatividade fornecida pelo Vue, permitindo a criação de um layout dinâmico por meio de interações intuitivas.

## 🖥️ Como rodar este projeto 🖥️

### Requisitos:
-   Node.js instalado
-   Docker instalado

### Execução:

1. Clone este repositório:

    ```sh
    git clone https://github.com/KathrynOliveira/Pastelaria-de-ideias.git
    ```

2. Acesse o diretório do projeto:

    ```sh
    cd Pastelaria-de-ideias
    ```

3. Comando imagem docker:

    ```sh
    cd docker build -t img_vue .
    docker compose up -d
    ```

4. Comando docker:
    ```sh
    docker compose exec node npm install
    docker compose exec node npm run serve -- --port 80
    ```

## 💎 Links úteis 💎
-   [Docker](https://docs.docker.com/desktop/)
