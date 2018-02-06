LunchWatch Menu Aggregator Web Client
=====================================

[LunchWatch](https://lunch.watch) is a lunch menu aggregator web app. The app is currently in development. During beta phase, the app aggregates menus from restaurants in Oulu, Finland.

This repository contains only a web client front-end while the API and menu importers are located in a [separate repository](https://github.com/jtiala/lunchwatch-api). Issues concerning data or imports should be discussed in that repository.

## Contributing

Contributions are most welcome! When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Development

Duplicate `.env.example` as `.env` and edit in your configuration.

Start containers with [docker-compose](https://docs.docker.com/compose/)

    docker-compose up

Navigate to [http://localhost:8080](http://localhost:8080) to verify application is running from docker.

## Production

Duplicate `.env.example` as `.env` and edit in your configuration.

Install and build

    yarn install
    yarn run build

## License

[MIT](LICENSE)
