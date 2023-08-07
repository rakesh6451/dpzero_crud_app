# dpdzero_crud_app
This package contains the backend for crud_app which supports user registration and login with JWT token authentication. API endpoints for adding, updating, and deleting data with JWT authorization

#Tech stack used
- Node.js as the runtime environment.
- Express.js as the web application framework.
- Sequelize as the Object-Relational Mapping (ORM).
- PostgreSQL as the database.

## Database Schema

`User` schema:
- `id`: Primary key, autoincrement.
- `username`:  unique.
- `email`: Unique and should a valid email.
- `password`: should be a strong password based on regex.
- `full_name`: required.
- `age`: requires positive integer.
- `gender`: required string.

`Data` schema:
- `id`: Primary key, autoincrement.
- `key`: Unique and required.
- `value`: required.

### Prerequisites
- Node.js installed.
- PostgreSQL database.
- install the postman or other api testing tools

## Instructions to Setup the Code

Before running the code, you need to setup the environment and the database:

1. Clone the repository: `git clone repo-link`
2. Navigate to the directory: `cd repo_name`
3. Install the dependencies: `npm install`
4. Create a .env file with the following variables:
   - PORT 
   - DB_USERNAME
   - DB_PASSWORD 
   - JWT_SECRET 

## Instructions to Run the Code

Once the setup is completed, you can run the server:

1. Start the server: `npm start`
2. The server should now be running at `http://localhost:6000`

## Testing End points:

- Use Postman or any other API testing tools with the end points 


## API Endpoints

Below are the main API endpoints exposed by this application:

### User Routes: `/api`

| Endpoint       | HTTP Method | Description                  |
|----------------|-------------|------------------------------|
| `/register`    | POST        | Create a new user            |
| `/token`       | POST        | Generate authentication token|


### Data Routes: `/api/data`

| Endpoint       | HTTP Method | Description                  |
|----------------|-------------|------------------------------|
| `/`            | POST        | Create a new data            |
| `/:key`        | GET         | Fetch a data by Key          |
| `/:key`        | PUT         | Update a data by Key         |
| `/:key`        | DELETE      | Delete a data by Key         |