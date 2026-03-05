import {Link} from "react-router-dom"

const BookCard = ({book}) => {

        //book card component to show book details in a card form 
    // console.log(book)
  return (
    <div className="bg-amber-900 rounded-2xl overflow-hidden shadow-2xl w-64 group hover:scale-105 transition-transform duration-300 cursor-pointer border border-amber-800">

        <div className="relative h-50 overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <span className="absolute top-3 left-3 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
            {book.category}
          </span>

          <span className="absolute top-3 right-3 bg-amber-950/80 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            ⭐ {book.rating}
          </span>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900 to-transparent" />
        </div>

        <div className="p-4">

          <h3 className="text-amber-100 font-serif font-bold text-lg leading-tight line-clamp-2 mb-1">
            {book.title}
          </h3>

          <p className="text-amber-400 text-sm mb-3">
            by <span className="font-medium">{book.author}</span>
          </p>

          <p className="text-amber-300/70 text-xs leading-relaxed line-clamp-2 mb-4">
            {book.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-amber-500 text-xs flex items-center gap-1">
              📖 {book.pages} pages
            </span>
            <Link to={`/books/${book.category}/${book.id}`}>
            <button className="bg-amber-500 hover:bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-amber-400/30">
              View Details
            </button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default BookCard;