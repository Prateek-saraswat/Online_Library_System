

const categories = [
  "All",
  "Fiction",
  "Sci-Fi",
  "Fantasy",
  "Mystery",
  "Non-Fiction",
  "Philosophical",
  "Adventure",
  "Historical",
  "Sci-Fi",
  "History",
  "Poetry",
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 
            ${
              selectedCategory === cat
                ? "bg-amber-500 text-amber-950 border-amber-500 shadow-md shadow-amber-500/30"
                : "bg-transparent text-amber-300 border-amber-700 hover:border-amber-500 hover:text-amber-400"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;