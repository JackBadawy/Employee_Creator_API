# Employee creator API

## Overview

this is a full stack application made with Java/Springboot on the backend and Typescript/React on the frontend
the backend of this app has full crud functionality and other business logic, the React front end of
this app allows users to sign in, create a new user (user must be approved before directory can be viewed) read the employee database in an intuitive way as well as fill out a form to create or edit employee info

## Features

- User authentication and authorization
- Full CRUD operations for employee data
- Form validation and error handling
- Intuitive and responsive UI
- Approval process for new user creation

## Technologies Used

- **Backend:** Java, Spring Boot, MySQL, Docker
- **Frontend:** TypeScript, React, Redux
- **Deployment:** Azure Web App, Azure SQL Database - note: azure site currently down

## Installation

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL

### Backend

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/employee-creator-api.git
```

2. Navigate to the backend directory:

3. Build and run the backend service:

```bash
./mvnw spring-boot:run
```

### Frontend

1. Navigate to the frontend directory:

2. Install dependancies:

```bash
npm install
```

3. Run the frontend service:

```bash
npm run dev
```

### Usage

Open your browser and navigate to the address the console displays eg: http://localhost:3000
Sign in or create a new user account. (root user login details are displayed for demo purposes)
Use the interface to view, create, edit, and delete employee information.
