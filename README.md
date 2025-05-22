
# 📚 Book Management System

A responsive and user-friendly Book Management System built with **React**, styled using **MUI** and **TailwindCSS**, and powered by **React Query** for efficient data fetching. The app uses **JSON Server** as a mock RESTful API for handling book records.

## 🚀 Features

- 📖 View a paginated list of books (10 per page)
- 🔍 Search books by title using the search bar in the header
- 🎯 Filter books by `Genre`, `Status`, or `Author`
- ➕ Add new books via a modal form
- ✏️ Edit existing book details
- 🗑️ Delete books with confirmation
- 📤 Uses **PUT** and **PATCH** for full or partial updates
- 🌐 Mock API powered by **JSON Server**

## 🧩 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend UI |
| **MUI (Material UI)** | Styled components |
| **TailwindCSS** | Utility-first styling |
| **React Query** | Data fetching & caching |
| **Axios** | HTTP client for API requests |
| **JSON Server** | Mock RESTful backend |
| **React Icons** | Icon library |
| **TypeScript** | Type safety and tooling |

## 📁 Folder Structure

```
├── public/
├── src/
│   ├── api/                # Axios + JSON Server requests
│   ├── components/
│   │   ├── card/           # Book card UI
│   │   ├── form/           # Add/Edit book forms
│   │   ├── alert/          # Alert dialog component
│   │   ├── header/         # App header with search bar
│   │   └── footer/         # App footer
│   ├── hooks/              # Custom hooks like useStore
│   ├── types/              # TypeScript type definitions
│   └── App.tsx             # Main component
```

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-management-system.git
```

### 2. Move to Local Repository

```bash
cd book-management-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Clone Json Server from Another Repository

```bash
git clone https://github.com/VivekDahiya06/api-books.git
```

### 5. Change to Local repository

```bash
cd api-books
```

### 6. Install the Dependencies

```bash
npm install
```

### 7. Start the Local DB.Json Server

```bash
npm start
```

> The server runs at `http://localhost:3000`.

### 8. Change the URL in src/api/Books.ts from
> https://my-json-server.typicode.com/VivekDahiya06/api-books/books to
> http://localhost:3000/books

This is necessary in order for your app to communicate to local API rather than remote API. Because the remote API is a Read-Only Server.

### 9. Start the React app in the Other Repository that has Book Management System

```bash
npm run dev
```

## 🌐 API Endpoints (JSON Server)

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/books`           | Get all books           |
| POST   | `/books`           | Add a new book          |
| PUT    | `/books/:id`       | Replace a book entirely |
| PATCH  | `/books/:id`       | Update fields in a book |
| DELETE | `/books/:id`       | Delete a book           |

## 🧠 Filtering & Searching Logic

- You can **search by title** using the search bar in the header.
- You can **filter by genre, author, or status** using the filter bar.
- If both search and filters are applied, results are combined (AND logic).
- If only one is used, results reflect that filter or search query alone.

## 🖼️ Screenshots

> App screenshots here for better visualization.

---

### 👨‍💻 Developed By

**Vivek Dahiya**  
Developer

> Feel free to contribute or fork this project!
