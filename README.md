Berthography — Personal Portfolio
A personal portfolio website developed to showcase my creative work, professional background, and projects. The application features a modern frontend built with React and Vite, and is powered by a robust backend using Node.js, Express, and Prisma ORM to manage database records.

Features
Portfolio Website
Personal introduction and professional background

Projects Showcase dynamically pulled from the database

Interactive UI with responsive design

Contact information and social media links

Full-Stack Architecture
RESTful API built with Express.js

Database Management using Prisma ORM

Environment Configuration using .env files

Separated frontend and backend for clean code organization

Technologies Used
Frontend
React.js

JavaScript / JSX

Vite (Build tool)

HTML5 & CSS3

Backend
Node.js

Express.js

Prisma ORM

Database (Configured via Prisma)

Application Architecture
The application follows a client-server architecture:

Frontend (/frontend): React and Vite provide the user interface and consume the API.

Backend (/backend): Express.js handles API requests, application logic, and database interactions.

ORM: Prisma ORM manages database operations and schema migrations.

Project Structure
text
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
│   ├── public/                  # Static assets
│   ├── src/                     # React components and logic
│   ├── index.html
│   ├── package.json
│   └── vite.config.js           # Vite bundler configuration
│
└── README.md
Installation and Setup
Prerequisites
Make sure the following software is installed:

Node.js and npm

Visual Studio Code

Git

1. Clone the Repository
bash
git clone https://github.com/robertponteras24/Bert-Portfolio.git
cd Bert-Portfolio
2. Setup the Backend
Navigate to the backend folder and install dependencies:

bash
cd backend
npm install
Environment Variables:
Create a .env file in the backend directory. You can use the provided .env.example as a template. (Note: The dummy .env included in this repository is for demonstration purposes).

env
DATABASE_URL="your_database_connection_string"
PORT=5000
Database Setup:
Generate the Prisma Client and apply migrations:

bash
npx prisma generate
npx prisma db push
Start the Backend Server:

bash
npm run dev
# or node server.js
The backend API will run at http://localhost:5000 (or your configured port).

3. Setup the Frontend
Open a new terminal window, navigate to the frontend folder, and install dependencies:

bash
cd frontend
npm install
Start the Frontend Development Server:

bash
npm run dev
The portfolio website will be available at http://localhost:5173 (or the port Vite provides).

Security Note
Never upload your .env file containing real database passwords, API keys, or secrets to a public GitHub repository. The .env file currently included in this repository contains only dummy/placeholder data for demonstration purposes.

Author
Robert Ponteras

GitHub: @robertponteras24

License
This project was developed for academic and personal portfolio purposes.
