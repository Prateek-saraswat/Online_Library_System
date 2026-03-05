import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import books from "../data/BooksData.js";
import CategoryFilter from "../components/Categoryfilter.jsx";

export default function BrowseBooks() {
  const { category } = useParams();
  const navigate = useNavigate();

  const addedBooks = useSelector((state) => state.books.addedBooks);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    category ? capitalize(category) : "All"
  );

  useEffect(() => {
    if (selectedCategory === "All") {
      navigate("/browse-books");
    } else {
      navigate(`/books/${selectedCategory.toLowerCase()}`);
    }
  }, [selectedCategory]);

  const filteredAddedBooks = addedBooks.filter((book) => {
    const categoryMatch =
      selectedCategory === "All" ||
      book.category.toLowerCase() === selectedCategory.toLowerCase();

    const searchMatch =
      searchQuery.trim() === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const filteredStaticBooks = books.filter((book) => {
    const categoryMatch =
      selectedCategory === "All" ||
      book.category.toLowerCase() === selectedCategory.toLowerCase();

    const searchMatch =
      searchQuery.trim() === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const totalFound = filteredAddedBooks.length + filteredStaticBooks.length;

  return (
    <div className="min-h-screen bg-amber-950 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-amber-200">
            Browse Books
          </h1>
          <p className="text-amber-400/70 text-sm mt-1">
            {totalFound} book{totalFound !== 1 ? "s" : ""} found
          </p>
          <div className="mt-3 w-12 h-1 bg-amber-500 rounded-full" />
        </div>

        <div className="flex flex-col gap-5 mb-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="border-t border-amber-800/50 mb-8" />

        {totalFound === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-6xl mb-4">📭</span>
            <h3 className="text-xl font-serif font-bold text-amber-300 mb-2">
              No Books Found
            </h3>
            <p className="text-amber-500/70 text-sm max-w-xs">
              Try adjusting your search or selecting a different category.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-6 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {filteredAddedBooks.length > 0 && (
              <div className="mb-10">

                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🆕</span>
                    <h2 className="text-2xl font-serif font-bold text-amber-200">
                      Recently Added
                    </h2>
                  </div>
                  <div className="mt-2 w-12 h-1 bg-green-500 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredAddedBooks.map((book) => (
                    <Link
                      key={book.id}
                      to={`/books/${book.category.toLowerCase()}/${book.id}`}
                    >
                      <BookCard book={book} isNew={true} />
                    </Link>
                  ))}
                </div>

                {filteredStaticBooks.length > 0 && (
                  <div className="border-t border-amber-800/50 mt-10 mb-10" />
                )}
              </div>
            )}

            {filteredStaticBooks.length > 0 && (
              <div>
                {filteredAddedBooks.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-serif font-bold text-amber-200">
                      📚 All Books
                    </h2>
                    <div className="mt-2 w-12 h-1 bg-amber-500 rounded-full" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredStaticBooks.map((book) => (
                    <Link
                      key={book.id}
                      to={`/books/${book.category.toLowerCase()}/${book.id}`}
                    >
                      <BookCard book={book} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

// Helper to capitalize first letter of category from URL param
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}