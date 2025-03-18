import React from "react";
interface HeaderProps {
  logo: string;
}
const Header = ({ logo }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 md:px-16 bg-white flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="" />
          <span className="text-xl font-bold text-gray-800">Nexcent</span>
        </a>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
          Home
        </a>
        <a
          href="/service"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Service
        </a>
        <a
          href="/feature"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Feature
        </a>
        <a
          href="/product"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Product
        </a>
        <a
          href="/testimonial"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Testimonial
        </a>
        <a
          href="/faq"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          FAQ
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="/login"
          className="text-green-500 font-medium hover:text-green-600"
        >
          Login
        </a>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
