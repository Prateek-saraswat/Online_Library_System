# Github-Repository - https://github.com/Prateek-saraswat/Online_Library_System

# Online Library System

A React-based online library management system built with Vite, Redux, and Tailwind CSS. This application allows users to browse books by category, view book details, search for books, and add new books to the library.

## Features

- **Home Page**: Welcome message, navigation bar, and popular books display
- **Browse Books**: Filter by category, search by title/author, dynamic routing
- **Book Details**: View detailed information about any book
- **Add Book**: Form to add new books with validation (Redux state management)
- **404 Page**: Custom error page for invalid routes

## Tech Stack

- **React** (v19.2.0)
- **Vite** (v7.3.1)
- **Redux Toolkit** (@reduxjs/toolkit v2.11.2)
- **React Router DOM** (v7.13.1)
- **Tailwind CSS** (v4.2.1)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ONLINE_LIBRARY_SYSTEM
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AddedBooks.jsx      # Displays newly added books
│   ├── BookCard.jsx        # Book card component
│   ├── BookList.jsx        # Book list grid component
│   ├── CategoryFilter.jsx  # Category filter buttons
│   ├── ErrorPage.jsx      # 404 error page
│   ├── Header.jsx         # Navigation header
│   └── SearchBar.jsx      # Search input component
├── data/
│   └── BooksData.js       # Static book data
├── pages/
│   ├── AddBook.jsx        # Add new book form
│   ├── BookDetails.jsx   # Book details page
│   ├── BrowseBook.jsx    # Browse books page
│   └── Home.jsx          # Home page
├── redux/
│   ├── booksSlice.js     # Redux slice for books
│   └── store.js          # Redux store configuration
├── App.jsx               # Main App component
├── main.jsx              # Entry point with router setup
├── index.css             # Global styles
└── App.css               # App-specific styles
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/browse-books` | Browse all books |
| `/books/:category` | Browse books by category |
| `/books/:category/:id` | Book details page |
| `/add-book` | Add new book form |
| `*` | 404 Error page |

## Available Categories

- Philosophical
- Fantasy
- Sci-Fi
- History
- Poetry

## Adding a New Book

1. Click on "Add Book" in the navigation
2. Fill in all required fields:
   - Book Title
   - Author
   - Category (select from dropdown)
   - Rating (1-5)
   - Pages
   - Launch Date
   - Cover Image URL
   - Description
3. Click "Add Book" to submit

The new book will be added to the Redux store and displayed in the Browse Books page.


