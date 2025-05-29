
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
|
|── db.json                 # Database Json file.
|
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

### 4. Go to src/api/Books.ts
 - In order to run json-server locally, uncomment the localUrl and change all api requests from remoteUrl to localUrl.
 For Eg:-<br>
 ```bash
 await axios.get(remoteUrl) ➡ await axios.get(localUrl).
 ```
 >Note :- I'm using remoteUrl so that my application can run when some clicks on the live link to check my app. Otherwise they will have to clone the repo. and run the server locally to get db.json data.

### 5. Start the Local db.json Server

```bash
npm run json-server
```

>1) The local server runs at `http://localhost:3000/books`.
>2) The remote server runs at `https://my-json-server.typicode.com/VivekDahiya06/Book-Management-System/books`.

### 6. Start the React server in a new Terminal.

```bash
npm run dev
```

>Note :- At the end make sure both terminals are running i.e.<br>
>1) npm run json-server ➡ Starts Json Server
>2) npm run dev ➡ Starts React Application 


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
