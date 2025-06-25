function Footer() {
  return (
    <footer className="flex flex-wrap justify-between items-center bg-gray-800 text-gray-400 px-6 min-h-[70px] py-6 dark:bg-gray-900 dark:text-gray-400">
      <div>
        <ul>
          <li className="text-sm font-bold hover:text-gray-300 transition-all ease-in-out">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abutler911/PantryPal/"
              aria-label="Pantry Pal GitHub repository"
            >
              Pantry Pal
            </a>
          </li>
          <li className="text-xs font-thin">Copyright © 2025 PantryPal</li>
        </ul>
      </div>

      {/* Just for resposnive test  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-sm mt-4 sm:mt-0">
        <ul>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            Contact Us
          </li>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            FAQ
          </li>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            Terms
          </li>
        </ul>

        <ul>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            Policy
          </li>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="hover:text-gray-300 transition-colors ease-in-out cursor-pointer">
            Home
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
