# Gauss Academy Server

![Project Type](https://img.shields.io/badge/project_type-portfolio_demo-3b82f6) ![GitHub deployments](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white) ![Tech Stack](https://img.shields.io/badge/stack-Express_%7C_TypeScript_%7C_MongoDB-000000?logo=express&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-blue)

The robust backend API for Gauss Academy, a comprehensive educational management platform. Built with Node.js, Express, and TypeScript, this system powers the administration of courses, students, and academic operations.

[![Live API](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=render&logoColor=white)](https://gauss-academy-server.onrender.com) [![Frontend Repo](https://img.shields.io/badge/Frontend-Repo-blue?style=for-the-badge&logo=github)](https://github.com/CarlosCanet/gauss-academy-client) [![Report Issue](https://img.shields.io/badge/Report-Issue-red?style=for-the-badge&logo=github)](https://github.com/CarlosCanet/gauss-academy-server/issues)

## 🎯 Project Overview

Gauss Academy Server acts as the central nervous system for the academy, handling data consistency, business logic, and third-party integrations. It is designed to serve a frontend application (web or mobile) used by students, teachers, and administrative staff.

The system manages the entire academic lifecycle:
- **Registration**: Students and staff onboarding.
- **Academic Planning**: Course creation and class scheduling.
- **Enrollment**: managing student admissions to specific courses.
- **Operations**: Payment processing.

### Project Context

This application is a **Technical Proof of Concept** created for portfolio purposes. Inspired by my former business, *Academia Gauss*, it showcases how I would architect and build a modern educational platform today, applying current best practices in full-stack development.

### ✨ Features

- 🔐 **Secure Authentication**: JWT-based authentication with role-based access control (Student, Teacher, Admin, Staff).
- 📚 **Course Management**: Full CRUD operations for courses, including curriculum details, pricing, and university affiliations.
- 📅 **Class Scheduling**: Flexible class management supporting Online, Video, and In-person formats.
- 📝 **Enrollment System**: Streamlined process for enrolling students in active courses.
- 💳 **Payments Integration**: Secure payment processing via Stripe for course fees.
- 👥 **User Profiles**: Specialized data models for Students (academic history), Teachers (active/past courses), and Staff.
- 📧 **Communication**: Email services via Resend for notifications and updates.
- 🖼️ **Media Management**: Cloudinary integration for reliable hosting of user avatars and course imagery.

### 🗄️ Database Schema

- **User**: The central entity supporting multiple roles (Student, Teacher, Staff) with specific data extensions for each.
- **Course**: Represents an academic offering (e.g., "Calculus I") linked to universities and degrees.
- **Class**: A specific scheduled session (date, time, room/URL) belonging to a Course.
- **Enrollment**: The association record between a Student and a Course, tracking status and dates.
- **Payment**: Financial records associated with an Enrollment, managed via Stripe.

<!-- ### ↕️ Key Workflows -->

## 🛠️ Tech Stack & Decisions

This project is built on a battle-tested stack ensuring reliability and scalability:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) ![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)

### Core Technologies

**Express + TypeScript**
- Provides a robust, type-safe environment for building RESTful APIs.
- Modular architecture with clear separation of concerns (Routes, Controllers, Models).

**MongoDB + Mongoose**
- Flexible schema design suitable for evolving educational data models.
- Powerful population capabilities to handle relationships between Courses, Classes, and Users.

**Third-Party Services**
- **Stripe**: Handles secure payments and "payment intents".
- **Cloudinary**: Offloads image storage and optimization.
- **Resend**: reliable email delivery for transactional emails.

## 🏗️ Architecture & Design Principles

The codebase follows high standards for maintainability and extensibility:

- **RESTful API**: Standardized endpoints for resource management.
- **MVC Pattern**: Clear separation between Models (Data), Views (JSON Responses), and Controllers (Logic).
- **Middleware**: Used for cross-cutting concerns like Authentication (`auth.middlewares.ts`) and Error Handling.
- **Type Safety**: leveraged throughout the application to minimize runtime errors.

## 🤖 AI-Assisted Development

This project was developed leveraging modern AI-powered development tools:

- **GitHub Copilot**: Code generation, autocompletion, and refactoring assistance throughout the development process.
- **MCP (Model Context Protocol)**: Integration with external tools (GitHub, MUI, Context7) to provide rich context to the AI assistant.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/CarlosCanet/gauss-academy-server.git
cd gauss-academy-server
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory based on `.env.example`

4. Run the development server
```bash
npm run dev
```

The server will start at `http://localhost:5005`.

### Scripts

```bash
npm run dev       # Start development server with tsx watch
npm run build     # Compile TypeScript to JavaScript
npm run start     # Start production server (from dist)
npm run lint      # Run ESLint
```

<!-- ## 📃 Documentation -->
