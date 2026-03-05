import books from '../data/BooksData.js'
import BookCard from "./BookCard";



const BookList = () => {
  return (

    //Book List component  which renders all books inside it ans shows all book cards
    <section className="py-10 px-6 max-w-7xl mx-auto">

      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-200">
          Popular Books
        </h2>
        <p className="text-amber-400 text-sm mt-1">
          Explore our most loved titles across all genres
        </p>
        <div className="mt-3 w-16 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Book card component to render for each book  */}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </section>
  );
};

export default BookList;