## Interview Challenge: Task Assignment and Notifications System

### Context
This project represents a backend API for a simple task board application (e.g. Trello Clone). The application 
allows users to create projects and tasks within those projects. The API supports CRUD operations for projects 
and tasks, along with the ability to update task statuses.

This project is built with [NestJS](https://nestjs.com/). It uses [Drizzle](https://orm.drizzle.team/) for a 
SQL DSL and ORM along with [Drizzle Kit](https://orm.drizzle.team/docs/kit-overview) for database migrations. 
Input validation is done using [Zod](https://zod.dev/) combined with some utilities 
like [zod-nestjs](https://www.npmjs.com/package/@anatine/zod-nestjs) 
and [drizzle-zod](https://orm.drizzle.team/docs/zod).

# Coding Challenge: Task Assignment and Activity Logging System

## Objective
- Review the existing codebase to understand its organization and structure.
- Run the application locally.
- During your scheduled pairing session, you will be asked to work on a new feature extending this API.
- (Optionally) Implement the sample feature below before the pairing session to familiarize yourself with the codebase.

---

## Example Feature: Activity Log
- **Feature**: Implement an activity log to record all status changes for tasks.
- **Implementation Details**:
    - **Database Schema**: Add support for an activity log
    - **Layers**: Update the repository, service, and controller layers to incorporate this functionality.
    - **Logic**: Ensure that when a task’s status changes, a new entry is automatically generated and saved to the database.
    - **Testing**: Implement unit tests to validate the activity log functionality.
    - **Endpoints**:
        - Add an endpoint to retrieve all activity logs for a specific task.
        - Add an endpoint to retrieve the latest activity logs for all tasks.

## Evaluation Criteria

The challenge will assess the following skills:

- **Database Schema Design**: Extending the schema to support new relationships and features.
- **API Development**: Building new REST API endpoints using NestJS.
- **Efficient Querying**: Ensuring database queries are optimized and performant.
- **Code Quality**: Writing clean, readable, and well-documented code.

---

## Installation

```bash
$ npm install
```

## Running the app

Make sure docker is installed and run
```bash
docker compose up -d
```


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Migrations
To generate new database migration files after updating the drizzle schema, use
```bash
npm run generate:migrations
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
