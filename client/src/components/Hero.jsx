import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="dark:bg-gray-900 dark:text-gray-400 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-bold">Pantry Pal</h1>
        <p className="py-4 text-sm font-thin">
          Stop wasting food — track, cook, save
        </p>
        <Link to="/login">
          <button
            aria-label="login"
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Get started
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Hero;
