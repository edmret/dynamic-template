# Dynamic Template Builder

This project is a full-stack application for building dynamic templates based on a JSON configuration.

## Project Structure

The project is divided into two main parts:

- Backend: Located in the `packages/backend` directory.
- Frontend: Located in the `packages/frontend` directory.

## Tech Stack

### Backend

- Mongoose: Used for database management.
- Swagger: Used for API documentation.
- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- Passport: Used for authentication.

### Frontend

- Material UI: A popular React UI framework.
- Next.js: A React framework for production.
- Next-Auth: Authentication for Next.js applications.

## Running the Project

To run the project, copy the `.env.example` file to a new file named `.env`, then run `docker-compose up`.

## Testing

For testing purposes, automatic data seeding creates an admin user with the following credentials:

- Username: admin
- Password: admin

A template document is also created to demonstrate how the dynamic template works.

## Access

- API Documentation: [http://localhost:3001/api](http://localhost:3001/api)
- UI Application: [http://localhost:3000](http://localhost:3000)

Note: There is no screen for creating a user in the UI, but it is doable by the API on the Swagger documentation.

## Known Issues

If you want to rebuild the application, you need to remove the created `mongo-data` folder with admin permissions.

## Configuration Interfaces

The full configuration interfaces of the template can be found in the `packages/frontend/src/types` directory.
