# Demo for React SSR + Redux with PHP

## Setup

Create `./config/main.local.js`

Create `./development/docker/docker-compose.local.yml`

Open terminal and run
```
$ composer install
$ npm install
$ npm install -g @crazyfactory/docker-project-cli
$ dopr pull
$ dopr up
```

Open another terminal and run
```
$ npm run build
```

Open one more terminal and run
```
$ npm run build:server
```

Go to browser and open `localhost:8080`
