import { useParams, useNavigate } from "react-router-dom";
import  books  from "../data/BooksData.js";


export default function BookDetails() {

    // taking book id from url params
  const { id } = useParams(); 
  const navigate = useNavigate();

  //finding book with help of id 
  const book = books.find((b) => b.id === parseInt(id));


//   rating login for showing in book detail page
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <span className="flex items-center gap-0.5 text-amber-400 text-lg">
        {"★".repeat(full)}
        {half ? "½" : ""}
        <span className="text-amber-700">{"★".repeat(empty)}</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-amber-950 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate("/browse-books")}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium mb-8 transition-colors duration-200 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to Browse
        </button>

        <div className="bg-amber-900/50 border border-amber-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row gap-0">

            <div className="md:w-72 flex-shrink-0 relative">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-80 md:h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-900/80 to-transparent md:hidden" />

              <span className="absolute top-4 left-4 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {book.category}
              </span>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-between">

              <div>
                <h1 className="text-4xl font-serif font-bold text-amber-100 leading-tight mb-2">
                  {book.title}
                </h1>

                <p className="text-amber-400 text-base mb-5">
                  by <span className="font-semibold text-amber-300">{book.author}</span>
                </p>

                <div className="flex items-center gap-3 mb-6">
                  {renderStars(book.rating)}
                  <span className="text-amber-300 font-bold text-lg">{book.rating}</span>
                  <span className="text-amber-600 text-sm">/ 5.0</span>
                </div>

                <div className="border-t border-amber-800 mb-6" />

                <h3 className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-2">
                  About this Book
                </h3>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">

                <div className="bg-amber-950/50 rounded-xl p-4 text-center border border-amber-800">
                  <p className="text-amber-500 text-xs uppercase tracking-widest mb-1">Pages</p>
                  <p className="text-amber-200 font-bold text-lg">{book.pages}</p>
                </div>

                <div className="bg-amber-950/50 rounded-xl p-4 text-center border border-amber-800">
                  <p className="text-amber-500 text-xs uppercase tracking-widest mb-1">Published</p>
                  <p className="text-amber-200 font-bold text-lg">
                    {new Date(book.launchDate).getFullYear()}
                  </p>
                </div>

                <div className="bg-amber-950/50 rounded-xl p-4 text-center border border-amber-800 col-span-2 sm:col-span-1">
                  <p className="text-amber-500 text-xs uppercase tracking-widest mb-1">Rating</p>
                  <p className="text-amber-200 font-bold text-lg">{book.rating} ⭐</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}