import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 dark:bg-gray-900 dark:text-gray-200">
      <div className="text-center max-w-xl w-full prose dark:prose-invert">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Pantry Pal
        </h1>
        <p className="text-base md:text-lg font-light mb-6 leading-relaxed">
          Stop wasting food — track, cook, save
        </p>
        <Link to="/login">
          <button
            type="button"
            aria-label="get started"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition hover:bg-green-700 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:ring-offset-2"
          >
            Get started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
