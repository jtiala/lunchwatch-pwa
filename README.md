# 🥗 LunchWatch Menu Aggregator PWA

LunchWatch is a lunch menu aggregator web app. The app is currently aggregating menus from restaurants in Oulu, Finland.

This repository contains [GraphQL][graphql] powered progressive web app client (PWA), while the API and menu importers are located in a [separate repository][lunchwatch-api-repo]. Issues concerning data or imports should be discussed in that repository.

## Pre-requisites

- [Git][git]
- [Node][node]

## Development

Duplicate `.env.example` as `.env` and edit in your details

    cp .env.example .env

Install dependencies

    npm install

Start the development environment

    npm run start

Start interactive test runner

    npm run test

## Production

Duplicate `.env.example` as `.env` and edit in your details

    cp .env.example .env

Install dependencies

    npm install

Build the production bundle

    npm run build

## Contributing

Contributions are most welcome! If you would like to contribute to this project, please discuss the changes you want to make in the [project's issues][issues] first!

## License

This project is open source software licensed under the MIT license. For more information see [LICENSE][license].


[git]: https://git-scm.com/
[node]: https://nodejs.org/
[graphql]: https://graphql.org/
[issues]: https://github.com/jtiala/lunchwatch-pwa/issues
[lunchwatch-api-repo]: https://github.com/jtiala/lunchwatch-api
[license]: https://github.com/jtiala/lunchwatch-pwa/blob/master/LICENSE
