# Hexagonal Architecture with NodeJS and TypeScript

Simple ticketing system using concepts of Hexagonal Architecture and leveraging separation of concerns.

The code is divided in two main layers:

Core

- Entities: Business Objects
- Repositories: Interfaces to interact with the entities
- Interactors: Business logic, actions that the system can perform.

Inputs and Outputs

- DataSources: Outputs of our system implementing Repositories and connected to storage systems.
- Controllers: Inputs of our system encapsulating the transport layer. They should trigger the Interactors.

## Getting started

- Install dependencies
`npm install`

- Run mongo and mongoclient
`docker-compose up`

- Add the data located in /mongo to a database called `users`

- Start typescript server + nodemon
`npm run watch`
