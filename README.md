# Humble Superhero API

## Overview
The **Humble Superhero API** is a simple RESTful API built with **NestJS** that allows users to:
- Add superheroes with a name, superpower, and humility score.
- Retrieve a sorted list of superheroes based on their humility score.

This project also includes a **React frontend** for interacting with the API in real-time.

---

## Installation
### 1. Clone the repository:
```sh
git clone https://github.com/franruizn/humble-superhero-api.git
cd humble-superhero-api
```

### 2. Install dependencies:
```sh
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## Running the Project
### 1. Start the Backend Server
```sh
cd backend
npm run start
```
This will run the backend at `http://localhost:4000`.

### 2. Start the Frontend
```sh
cd frontend
npm run start
```
This will launch the frontend at `http://localhost:3000`.

---

## How To Test The API Endpoints
### Add a Superhero
```http
POST /superheroes
```
#### Request Body (JSON):
```json
{
  "name": "One Punch Man",
  "superpower": "Super Strength",
  "humilityScore": 9
}
```
#### Response Example:
```json
{
  "message": "One Punch Man has been added to the squad! Welcome."
}
```

### Get Superheroes (Sorted by Humility Score)
```http
GET /superheroes
```
#### Response Example:
```json
[
  { "name": "Monkey D Luffy", "superpower": "Rubber Body", "humilityScore": 10 },
  { "name": "Nezuko", "superpower": "Semi-Evil", "humilityScore": 8 }
]
```

#### It can also be tested by using your favourite tool, in my case I used Postman :D

---

## Running Tests
To test the backend API:
```sh
cd backend
npm run test
```
To check test coverage:
```sh
npm run test:cov
```

---

## Future Improvements (If I Had More Time)
- **Add a database** instead of an in-memory store for permanent data storaging.
- Deploy the project using **Docker**.
- Cover as many **corner cases** as possible.
- Fully test the code to get an **80%+ over-all coverage**.
- **Implement more endpoints** for user enjoyment.
- Implement user **authentication with JWT**.
- Use github actions to implement a **Unit-Test Pipeline**.

---

## Collaboration
If working in a team, I would:
- Use **GitHub Issues** and **Pull Requests** for task management.
- Set up **API documentation** using Astro or Swagger.
- Follow a **feature-branch workflow** to avoid issues on the main branch and ensure code quality.
- Improve efficiency and quality by having **other perspectives**.

---

 **Thanks For Your Time & Enjoy using the Humble Superhero API!** 
