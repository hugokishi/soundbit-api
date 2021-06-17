# Soundbit API

## Table of Contents

- [About](#about)
- [Built with](#built-with)
- [Getting Started](#getting-started)
- [NPM scripts reference](#npm-scripts-reference)
- [API reference](#api-reference)
- [Authors](#authors)
- [License](#license)

## About

Soundbit API is a RESTful API built to stream tracks and musics to the Soundbit app.

## Built with

- Node.js - JavaScript runtime (v16.1 or above)
- TypeScript - JavaScript superset (v4.3 or above)
- Postgres - Open source relational database (v13 or above)
- Docker Compose - Docker multi-container runner (v1.28 or above)
- Jest - Automated testing tool (v27 or above)

## Getting started

These steps will get you an copy of the project up and running on your machine.

### Installing

First, clone or download the project:

```sh
$ git clone git@github.com:ramos-ph/soundbit-api.git
$ cd soundbit-api
```

And install its dependencies:

```sh
$ npm install
```

### Setting up a local database

We provide a docker-compose.yml file which handles a local database setup for you.

To initialize a local Postgres instance, simply run:

```sh
$ docker-compose up
```

Then, in another terminal, run the migrations:

```sh
$ npm run migration:run
```

After run migration, run seeds:

```sh
$ npm run seeds
```

### Running

To start a local server, run:

```sh
$ npm run start:dev
```

### Running the tests

To run all the tests of the project, simply run:

```sh
$ npm test
```

## NPM scripts reference

| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `test`               | Executes the sets of automated tests               |
| `start:dev`          | Starts the application in development environment  |
| `build`              | Creates a distributable version of the application |
| `start`              | Starts the application in production environment   |
| `migration:run`      | Runs all the available migrations                  |
| `migration:generate` | Generate the migration from the entities available |
| `migration:create`   | Creates a new pure migration                       |
| `migration:revert`   | Reverts all the migrations                         |
| `seed`               | Runs all the seed files                            |
| `lint`               | Lint and fixes code style errors                   |


## API Reference

To check the available endpoints to consume this service, check [REFERENCE.md](docs/REFERENCE.md) for details.

## Authors

- *Hugo Kishi* - **[@hugokishi](https://github.com/hugokishi)**
- *João Alves* - **[@J-Alvez](https://github.com/J-Alvez)**
- *Juan Trindade* - **[@JuanTrindade](https://github.com/JuanTrindade)**
- *Nícolas Oliveira* - **[@noccss](https://github.com/noccss)**
- *Pedro Ramos* - **[@ramos-ph](https://github.com/ramos-ph)**

## License

This project is licensed under the MIT license. See [LICENSE.md](LICENSE.md) for details.
