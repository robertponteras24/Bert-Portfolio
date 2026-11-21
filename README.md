Berthography — Personal Portfolio

A personal portfolio website developed to showcase my creative work, professional background, technical skills, and projects. The application features a modern frontend built with React and Vite, and is powered by a robust backend using Node.js, Express, and Prisma ORM to manage database records.

Features

Portfolio Website
*   **Personal introduction** and professional background
*   **About Me** section and creative skills
*   **Projects Showcase** dynamically pulled from the database
*   **Interactive UI** with responsive design
*   **Contact information** and social media links

Full-Stack Architecture
*   **RESTful API** built with Express.js
*   **Database Management** using Prisma ORM
*   **Environment Configuration** using `.env` files
*   **Separated frontend and backend** for clean code organization

Technologies Used

Frontend
*   **React.js**
*   **JavaScript / JSX**
*   **Vite** (Build tool)
*   **HTML5 & CSS3**

Backend
*   **Node.js**
*   **Express.js**
*   **Prisma ORM**
*   **Database** (Configured via Prisma)

Application Architecture

The application follows a client-server architecture:

*   **Frontend (`/frontend`):** React and Vite provide the user interface and consume the API.
*   **Backend (`/backend`):** Express.js handles API requests, application logic, and database interactions.
*   **ORM:** Prisma ORM manages database operations and schema migrations.

CRUD Operations & API Endpoints

The application demonstrates database operations using Prisma ORM. *(Note: Update these endpoints if your server.js uses different routes).*

| Operation | HTTP Method | Endpoint | Prisma Operation |
| :--- | :--- | :--- | :--- |
| **Create** | POST | `/api/projects` | `prisma.project.create()` |
| **Read** | GET | `/api/projects` | `prisma.project.findMany()` |
| **Update** | PUT | `/api/projects/:id` | `prisma.project.update()` |
| **Delete** | DELETE | `/api/projects/:id` | `prisma.project.delete()` |

Project Structure

```text
Berthography_React_Prisma/
├── backend/
│   ├── prisma/
│   │   ├── migrations/          # Database migrations
│   │   └── schema.prisma        # Database schema definition
│   ├── .env                     # Environment variables (dummy values)
│   ├── package.json
│   ├── prisma.config.ts         # Prisma configuration
│   ├── prisma.js                # Prisma client initialization
│   └── server.js                # Express server entry point
│
├── frontend/
│   ├── public/                  # Static assets (images, favicons)
│   ├── src/                     # React components and logic
│   ├── index.html
│   ├── package.json
│   └── vite.config.js           # Vite bundler configuration
│
└── README.md
