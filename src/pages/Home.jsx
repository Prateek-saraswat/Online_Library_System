import BookList from "../components/BookList";

export default function Home() {
  return (

    //this is div for Welcome messages
    <div className="min-h-screen bg-amber-950">

      <div className="px-6 pt-10 pb-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-amber-200">
          Hello, Readers
        </h1>
        <p className="text-amber-400/70 text-base mt-2 max-w-xl leading-relaxed">
          Welcome to your digital Library. Browse books by category, explore
          details, and manage your collection with ease.
        </p>
      </div>

    
        {/* {book list componsnt for rendering book card} */}
      <BookList />

    </div>
  );
}