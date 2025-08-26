import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-7">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-6">&copy; 2025 Job Hub. All rights reserved.</p>
        <div className="flex justify-center gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Contact Us
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Jobs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
