import { Link } from "react-router";

function Hero() {
  return (
    <main className="dark:bg-gray-900 dark:text-gray-400 min-h-screen mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-bold">Pantry Pal</h1>
        <p className="text-center py-4 text-sm font-thin">
          Stop wasting food-track, cook, save
        </p>
        <div className="flex items-center justify-center py-2 ">
          <Link to={"/login"}>
            <button
              aria-label="login"
              className="cursor-pointer bg-green-600 hover:bg-white/80 transition-all ease-in-out font-semibold text-gray-800 px-2 py-2 rounded-xl"
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
