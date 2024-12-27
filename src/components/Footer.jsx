import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} News24. All rights reserved.</p>
          </div>
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">For any queries, please contact: <a href="mailto:dubeyapratim20@gmail.com" className="hover:text-blue-300 transition-colors duration-300">apratimdubey@example.com</a></p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">Developed and managed by <span className="font-semibold">Apratim Dubey</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
