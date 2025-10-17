# Guestbook App

A minimal full-stack guestbook application with an Express.js backend API and vanilla JavaScript frontend.

## Features

- RESTful API endpoint that returns a list of guest names
- Clean, responsive frontend that fetches and displays guests
- Simple one-command setup

## Project Structure
```
FirstName_LastName_FullStackTask/
├── server.js          # Express server with /api/guests endpoint
├── public/
│   └── index.html     # Frontend HTML with JavaScript
├── package.json       # Node.js dependencies
└── README.md          # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
```bash
   npm install
```

3. **Start the server**
```bash
   npm start
```

4. **Open your browser**
   Navigate to: `http://localhost:3000`

## API Documentation

### GET /api/guests

Returns a JSON array of guest names.

**Response:**
```json
[
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Diana Martinez",
  "Ethan Wilson"
]
```

## Development

To run the server with auto-restart on file changes:
```bash
npm run dev
```

(Requires nodemon to be installed)

## Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **API:** RESTful JSON endpoint

## License

MIT
```

### **5. .gitignore**
```
node_modules/
.env
*.log
.DS_Store
```

---

## **How to Create Your Project**

1. **Create a new folder** named `FirstName_LastName_FullStackTask` (replace with your actual name)

2. **Create the file structure:**
```
   FirstName_LastName_FullStackTask/ <br>
   ├── server.js   <br>
   ├── package.json <br>
   ├── README.md <br>
   ├── .gitignore <br>
   └── public/ <br>
       └── index.html
