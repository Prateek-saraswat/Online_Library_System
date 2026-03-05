import { useLocation } from "react-router-dom";

// 404 Not Found Page Component
// Shows the invalid route URL and a link back to Home
// Does NOT include the Navbar/Header component
const ErrorPage = () => {
  // Get the current invalid URL path
  const location = useLocation();

  return (
    <div className="min-h-screen bg-amber-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* ── Big 404 Text ── */}
        <h1 className="text-[10rem] font-serif font-bold text-amber-800 leading-none select-none">
          404
        </h1>

        {/* ── Book Icon ── */}
        <div className="flex justify-center mb-6 -mt-4">
          <svg
            className="w-20 h-20 text-amber-500 opacity-80"
            fill="currentColor"
            viewBox="0 0 64 64"
          >
            <path d="M8 4h30l14 14v42H8V4zm28 0v14h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <line x1="16" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* X mark */}
            <line x1="26" y1="10" x2="38" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="10" x2="26" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-3xl font-serif font-bold text-amber-200 mb-3">
          Page Not Found
        </h2>

        {/* ── Description ── */}
        <p className="text-amber-400 text-sm mb-4">
          Oops! The page you're looking for doesn't exist in our library.
        </p>

        {/* ── Invalid Route Display ── */}
        <div className="bg-amber-900 border border-amber-700 rounded-lg px-5 py-3 mb-8 inline-block">
          <p className="text-amber-500 text-xs uppercase tracking-widest mb-1 font-semibold">
            Invalid Route
          </p>
          <p className="text-amber-300 font-mono text-sm break-all">
            {location.pathname}
          </p>
        </div>

        {/* ── Back to Home Button ── */}
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-amber-400/30 hover:scale-105 text-sm"
          >
            {/* Arrow icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;