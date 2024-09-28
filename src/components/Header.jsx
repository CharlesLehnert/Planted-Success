import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:mx-auto">
          <div className="flex flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-xs uppercase text-n-1 transition-colors hover:text-color-1 lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* "Contact" Text and "HERE" Button */}
        <div className="hidden lg:flex items-center">
          <span className="text-n-1/50 mr-2">Contact</span>
          <div className="relative">
            <Button onClick={toggleDropdown} className="px-3">
              HERE
            </Button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                <a
                  href="tel:8152893393"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Call Us
                </a>
                <a
                  href="mailto:charliesbuis@gmail.com"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Email Us
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Contact Button with Dropdown */}
        <div className="ml-auto lg:hidden relative">
          <Button onClick={toggleDropdown} className="px-3">
            Contact
          </Button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
              <a
                href="tel:8152893393"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Call Us
              </a>
              <a
                href="mailto:charliesbuis@gmail.com"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Email Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
