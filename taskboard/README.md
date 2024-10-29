## Interview Challenge: Task Assignment and Notifications System

### Objective
Extend the existing task functionality to include user assignments and automated notifications for status changes.

---

### Feature Details

1. **Assigning Users to Tasks**
   - Add functionality to assign users to specific tasks within projects.
   - Update the database schema to track which users are assigned to each task.

2. **Status Change Notifications**
   - Implement a notification system where users assigned to a task are automatically notified when the task’s status changes.
   - Notifications should be stored as entities in the database, with a simple REST endpoint to retrieve them.

3. **Endpoint Requirements**
   - Create endpoints for:
     - Assigning users to tasks
     - Fetching all tasks assigned to a user
     - Retrieving notifications related to status changes

4. **Bonus**
   - Implement role-based access to limit who can assign users or update task statuses.
   - Include validations to ensure users can only be assigned to tasks within their project scope.
   - Tests

5. **Assumptions**
   - Login is not required, just a users table
   - Sending actual notifications (emails/sms/push) are not required. Just adding to the table


---

### Evaluation Criteria
This challenge is designed to assess the following skills:
- **Database Schema Management**: Extending the existing schema to support new features.
- **API Development**: Adding new REST API endpoints using NestJS.
- **Efficient Querying**: Ensuring queries are optimized and performant.
- **Role-Based Access Control**: Securing actions based on user roles.
- **Code Quality**: Clean, readable code with adequate documentation.


## About this project
This project is built with [NestJS](https://nestjs.com/). It uses [Drizzle](https://orm.drizzle.team/) for a SQL DSL and ORM along with [Drizzle Kit](https://orm.drizzle.team/docs/kit-overview) for database migrations. Input validation is done using [Zod](https://zod.dev/) combined with some utilities like [zod-nestjs](https://www.npmjs.com/package/@anatine/zod-nestjs) and [drizzle-zod](https://orm.drizzle.team/docs/zod)

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
