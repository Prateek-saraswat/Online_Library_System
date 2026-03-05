import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

const categories = ["Philosophical", "Fantasy", "Sci-Fi", "History", "Poetry"];


const initialForm = {
  title: "",
  author: "",
  category: "",
  rating: "",
  pages: "",
  launchDate: "",
  coverImage: "",
  description: "",
};

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state for form data user for adding new book
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };


  //validation for form 
  const validate = () => {
    const newErrors = {};

    if (!form.title.trim())
      newErrors.title = "Title is required.";

    if (!form.author.trim())
      newErrors.author = "Author is required.";

    if (!form.category)
      newErrors.category = "Please select a category.";

    if (!form.rating) {
      newErrors.rating = "Rating is required.";
    } else if (form.rating < 1 || form.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    if (!form.pages) {
      newErrors.pages = "Pages is required.";
    } else if (form.pages < 1) {
      newErrors.pages = "Pages must be a positive number.";
    }

    if (!form.launchDate)
      newErrors.launchDate = "Launch date is required.";

    if (!form.coverImage.trim()) {
      newErrors.coverImage = "Cover image URL is required.";
    } else if (!form.coverImage.startsWith("http")) {
      newErrors.coverImage = "Please enter a valid URL starting with http.";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (form.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters.";
    }

    return newErrors;
  };


  //submit logic for form 
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   
    const newBook = {
      id: Date.now(),                         
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.toLowerCase(),
      rating: parseFloat(form.rating),
      pages: parseInt(form.pages),
      launchDate: form.launchDate,
      coverImage: form.coverImage.trim(),
      description: form.description.trim(),
    };


    // dispatching action for redux store
    dispatch(addBook(newBook));

    navigate("/browse-books");
  };

  const inputClass = (field) =>
    `w-full bg-amber-950 border ${
      errors[field] ? "border-red-500" : "border-amber-700"
    } focus:border-amber-500 text-amber-100 placeholder-amber-600/50 text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200`;

  return (
    <div className="min-h-screen bg-amber-950 px-6 py-10">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-amber-200">
            Add a New Book
          </h1>
          <p className="text-amber-400/70 text-sm mt-1">
            Fill in the details below to add a book to the library.
          </p>
          <div className="mt-3 w-12 h-1 bg-amber-500 rounded-full" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-amber-900/40 border border-amber-800 rounded-3xl p-8 flex flex-col gap-5"
        >
          <div>
            <label className="text-amber-300 text-sm font-semibold mb-1 block">
              Book Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. The Great Gatsby"
              className={inputClass("title")}
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="text-amber-300 text-sm font-semibold mb-1 block">
              Author <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="e.g. F. Scott Fitzgerald"
              className={inputClass("author")}
            />
            {errors.author && <p className="text-red-400 text-xs mt-1">{errors.author}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="text-amber-300 text-sm font-semibold mb-1 block">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`${inputClass("category")} `}
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
            </div>

            <div>
              <label className="text-amber-300 text-sm font-semibold mb-1 block">
                Rating (1–5) <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                placeholder="e.g. 4.5"
                min="1"
                max="5"
                step="0.1"
                className={inputClass("rating")}
              />
              {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="text-amber-300 text-sm font-semibold mb-1 block">
                Pages <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                name="pages"
                value={form.pages}
                onChange={handleChange}
                placeholder="e.g. 320"
                min="1"
                className={inputClass("pages")}
              />
              {errors.pages && <p className="text-red-400 text-xs mt-1">{errors.pages}</p>}
            </div>

            <div>
              <label className="text-amber-300 text-sm font-semibold mb-1 block">
                Launch Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                name="launchDate"
                value={form.launchDate}
                onChange={handleChange}
                className={inputClass("launchDate")}
              />
              {errors.launchDate && <p className="text-red-400 text-xs mt-1">{errors.launchDate}</p>}
            </div>

          </div>

          <div>
            <label className="text-amber-300 text-sm font-semibold mb-1 block">
              Cover Image URL <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="coverImage"
              value={form.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/cover.jpg"
              className={inputClass("coverImage")}
            />
            {errors.coverImage && <p className="text-red-400 text-xs mt-1">{errors.coverImage}</p>}
          </div>

          <div>
            <label className="text-amber-300 text-sm font-semibold mb-1 block">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write a short description about the book..."
              rows={4}
              className={`${inputClass("description")} resize-none`}
            />
            {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              + Add Book
            </button>
            <button
              type="button"
              onClick={() => { setForm(initialForm); setErrors({}); }}
              className="flex-1 border border-amber-700 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-bold text-sm py-3 rounded-full transition-all duration-200"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}