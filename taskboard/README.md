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
- Get the application running locally.
- Extend the existing API to add user assignment capabilities and an activity log for tracking task status changes.

---

## Feature Requirements

### 1. Task User Assignment
- **Feature**: Enable tasks to be assigned to a user who is responsible for performing the task.
- **Implementation Details**:
    - **Database Schema**: Update the database to support user-task relationships.
    - **Layers**: Update the repository, service, and controller layers to incorporate this functionality.
    - **Endpoints**:
        - Add an endpoint to assign a specific user to a task.
        - Add an endpoint to retrieve all tasks assigned to a specific user.

### 2. Activity Log
- **Feature**: Implement an activity log to track and record all status changes for tasks.
- **Implementation Details**:
    - **Database Schema**: Add support for activity logs, associating each log entry with the related task.
    - **Layers**: Update the repository, service, and controller layers to incorporate this functionality.
    - **Logic**: Ensure that when a task’s status changes, a new entry is automatically generated and saved to the database.
    - **Endpoints**:
        - Add an endpoint to retrieve all activity logs for a specific task.
        - Add an endpoint to retrieve the latest activity logs for all tasks.

### 3. Bonus Features
- **Tests**: Implement unit and integration tests for the new functionalities.
- **Feature:** Extended Project Team Support
    - Allow multiple users to be assigned to a project as team members.
    - Add validation to ensure tasks are assigned only to users within the project team.

---

## Clarifications

- **Authentication/Authorization**: User login or registration is not required.
- **Notifications**: Physical notifications (e.g., email, SMS, push) are not required upon task assignment or status change.

---

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
