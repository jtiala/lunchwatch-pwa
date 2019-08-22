# 🥗 LunchWatch Menu Aggregator PWA

[![Actions Status][actions-status-badge]][actions-status]
[![Dependencies Status][dependencies-status-badge]][dependencies-status]
[![Dev Dependencies Status][devdependencies-status-badge]][devdependencies-status]
[![PRs Welcome][prs-badge]][contributing]
[![License][license-badge]](license)

[LunchWatch][lunchwatch] is a lunch menu aggregator web app. The app is currently aggregating menus from restaurants in Oulu, Finland.

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

[actions-status]: https://github.com/jtiala/lunchwatch-pwa/actions
[actions-status-badge]: https://github.com/jtiala/lunchwatch-pwa/workflows/CI/badge.svg
[dependencies-status]: https://david-dm.org/jtiala/lunchwatch-pwa
[dependencies-status-badge]: https://img.shields.io/david/jtiala/lunchwatch-pwa.svg
[devdependencies-status]: https://david-dm.org/jtiala/lunchwatch-pwa?type=dev
[devdependencies-status-badge]: https://img.shields.io/david/dev/jtiala/lunchwatch-pwa.svg
[contributing]: #contributing
[prs-badge]: https://img.shields.io/badge/prs-welcome-blue.svg
[license]: https://github.com/jtiala/lunchwatch-pwa/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[git]: https://git-scm.com/
[node]: https://nodejs.org/
[graphql]: https://graphql.org/
[issues]: https://github.com/jtiala/lunchwatch-pwa/issues
[lunchwatch]: https://lunch.watch/
[lunchwatch-api-repo]: https://github.com/jtiala/lunchwatch-api
