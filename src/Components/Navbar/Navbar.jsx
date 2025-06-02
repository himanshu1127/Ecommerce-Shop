import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, User, Search } from "lucide-react";

const Navbar = ({ size }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Shop", path: "/" },
    { name: "Men", path: "/Mens" },
    { name: "Women", path: "/Womens" },
    { name: "Kids", path: "/Kids" },
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ELITEMART
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveMenu(item.name)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActiveRoute(item.path)
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {isActiveRoute(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors duration-200">
              <Search size={20} />
            </button>
            
            <Link
              to="/Login"
              className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <User size={20} />
              <span className="text-sm font-medium">Login</span>
            </Link>

            <Link
              to="/Cart"
              className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <ShoppingBag size={20} />
              {size > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce-in">
                  {size}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActiveMenu(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActiveRoute(item.path)
                    ? "text-primary bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/Login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <User size={20} />
                <span>Login</span>
              </Link>
              
              <Link
                to="/Cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <ShoppingBag size={20} />
                <span>Cart ({size})</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
