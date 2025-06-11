import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Irish Twin Towns</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link to="/map" className="text-gray-600 hover:text-blue-600">
          Map
        </Link>
      </nav>
    </header>
  );
};

export default Header;

