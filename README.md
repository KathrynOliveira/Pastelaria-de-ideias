# App Pastel de ideias


# Installation using node
https://nodejs.org/pt-br/download

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Installation using Docker
https://docs.docker.com/desktop/

## Image Dockerfile Node + VueCli
    cd docker build -t img_vue .
    docker compose up -d
## Project setup
```
docker compose exec node npm install
```

### Compiles and hot-reloads for development
```
docker compose exec node npm run serve -- --port 80
```

### Compiles and minifies for production
```
docker compose exec node npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
