# dpdzero_crud_app
This package contains the backend for crud_app which supports user registration and login with JWT token authentication. API endpoints for adding, updating, and deleting data with JWT authorization

# Tech stack used
- Node.js as the runtime environment.
- Express.js as the web application framework.
- Sequelize as the Object-Relational Mapping (ORM).
- PostgreSQL as the database.

## Reason for Choosing NodeJS and ExpressJS:

- Express.js - Minimalist and Flexible Framework: Express.js is a popular web framework for Node.js that offers a minimalist approach, allowing developers to build applications without imposing too many conventions. This flexibility allows developers to choose the best practices and design patterns for their specific needs.

- Middleware Support: Express.js provides a robust middleware architecture, enabling developers to add modular features to the application's request-response cycle. This enhances code reusability and makes it easier to manage complex application logic.

- Routing and MVC Support: Express.js supports routing, which helps in structuring the application and handling different endpoints. Additionally, it allows developers to implement the Model-View-Controller (MVC) pattern for a more organized and maintainable codebase.
  
## Reason for Choosing PostgreSQL and Sequelize(ORM)
- Powerful Relational Database: PostgreSQL is a versatile database with support for ACID transactions, foreign keys, and JSON data types, making it suitable for various applications like web apps, data warehouses, and real-time systems.

- Efficient ORM with Sequelize: Sequelize is a widely-used ORM for PostgreSQL, offering a straightforward API that saves developers time and effort. It includes advanced features like relations, migrations, and caching.

- Scalable and Reliable Solution: The combination of PostgreSQL and Sequelize ensures scalability and performance. PostgreSQL's reputation for scalability is complemented by Sequelize's support for transactions, contributing to a more reliable application.

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
