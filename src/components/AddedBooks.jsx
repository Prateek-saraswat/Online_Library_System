import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";


const AddedBooks = () => {
  const addedBooks = useSelector((state) => state.books.addedBooks);

  if (addedBooks.length === 0) return null;

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl"></span>
          <div>
            <h2 className="text-2xl font-serif font-bold text-amber-200">
              Recently Added
            </h2>
            <p className="text-amber-400 text-sm mt-0.5">
              {addedBooks.length} book{addedBooks.length !== 1 ? "s" : ""} added by you
            </p>
          </div>
        </div>
        <div className="mt-3 w-16 h-1 bg-green-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {addedBooks.map((book) => (
          <Link key={book.id} to={`/books/${book.category}/${book.id}`}>
            <BookCard book={book} isNew={true} />
          </Link>
        ))}
      </div>

      <div className="border-t border-amber-800/50 mt-10" />

    </section>
  );
};

export default AddedBooks;