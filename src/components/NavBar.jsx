export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-amber-500">MyApp</div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-amber-500 transition duration-300">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition duration-300">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition duration-300">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon Placeholder (optional for responsiveness) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
