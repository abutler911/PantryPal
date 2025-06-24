function Footer() {
  return (
    <footer className="flex justify-between items-center bg-gray-900 text-gray-400 px-6 min-h-[70px] py-6">
      <div>
        <ul>
          <li className="text-sm font-bold hover:text-gray-300 transition-all ease-in-out">
            <a target="_blank" href="https://github.com/abutler911/PantryPal/">
              Pantry Pal
            </a>
          </li>

          <li className="text-xs font-thin">Copyright © 2025 PantryPal</li>
        </ul>
      </div>

      {/* Just for resposnive test  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <ul>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            Contact Us
          </li>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            FAQ
          </li>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            Terms
          </li>
        </ul>

        <ul>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            Policy
          </li>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            About Us
          </li>
          <li className="hover:text-gray-300 hover:font-semibold transition-all ease-in-out">
            Home
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
