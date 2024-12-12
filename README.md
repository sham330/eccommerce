# Shopping Cart Project Board

## Overview
The Shopping Cart Project Board is a task management application designed to help users organize and track their tasks and progress efficiently. This project leverages modern web technologies to deliver a sleek, responsive, and interactive user experience.


## Features
- Task Management: Add, edit, delete, and track tasks effortlessly.
- Progress Tracking: Monitor the status of tasks in real time.
- Animations: Smooth animations for enhanced user experience using AOS (Animation On Scroll).
- Mock API Integration: Data persistence through Axios and Mock API.
- Responsive Design: Built with Tailwind CSS for mobile-friendly usage.


## Technologies Used
- React: For building dynamic and interactive user interfaces.
- Tailwind CSS: For styling and creating a modern, responsive layout.
- Redux: For state management across the application.
- AOS (Animation On Scroll): To implement smooth scrolling animations.
- Axios: For API calls and data management with Mock API.


## Installation

### Prerequisites
- Node.js (v14 or above)
- npm 

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/sham330/eccommerce
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Project Structure
```
ecommerce/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskCard.js
│   │   ├── ProgressBar.js
│   │   └── ...
│   ├── redux/
│   │   ├── store.js
│   │   ├── actions.js
│   │   └── reducers.js
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

---

## Usage
1. Add Tasks: Click the "Add Task" button to create a new task.
2. Update Progress: Mark tasks as "In Progress" or "Completed".
3. Delete Tasks: Remove tasks no longer needed.
4. Real-Time Animations: Scroll through the app to view animations powered by AOS.

---

## Deployment
To build the project for production:
```bash
npm run build
```
The optimized build will be available in the `build/` directory.

---

## Contributions
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a Pull Request.

---


## Contact
For any queries or feedback, please contact the project team at: [shammpams@gmail.com]
