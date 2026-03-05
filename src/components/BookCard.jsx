

const BookCard = ({book}) => {
    console.log(book)
  return (
    // ── Card Only ──
    <div className="bg-amber-900 rounded-2xl overflow-hidden shadow-2xl w-64 group hover:scale-105 transition-transform duration-300 cursor-pointer border border-amber-800">

        <div className="relative h-80 overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
            {book.category}
          </span>

          {/* Rating Badge */}
          <span className="absolute top-3 right-3 bg-amber-950/80 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            ⭐ {book.rating}
          </span>

          {/* Gradient overlay at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900 to-transparent" />
        </div>

        {/* ── Card Body ── */}
        <div className="p-4">

          {/* Title */}
          <h3 className="text-amber-100 font-serif font-bold text-lg leading-tight line-clamp-2 mb-1">
            {book.title}
          </h3>

          {/* Author */}
          <p className="text-amber-400 text-sm mb-3">
            by <span className="font-medium">{book.author}</span>
          </p>

          {/* Description */}
          <p className="text-amber-300/70 text-xs leading-relaxed line-clamp-2 mb-4">
            {book.description}
          </p>

          {/* Pages + View Details */}
          <div className="flex items-center justify-between">
            <span className="text-amber-500 text-xs flex items-center gap-1">
              📖 {book.pages} pages
            </span>

            {/* View Details Button */}
            <button className="bg-amber-500 hover:bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-amber-400/30">
              View Details
            </button>
          </div>
        </div>
    </div>
  );
};

export default BookCard;