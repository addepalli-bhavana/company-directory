function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">CD</span>
              </div>
              <span className="font-poppins font-bold text-white">
                Company Directory
              </span>
            </div>
            <p className="text-gray-400 font-poppins">
              Browse and explore companies from around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-poppins font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/companies"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Companies
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-poppins font-bold text-white mb-4">About</h3>
            <p className="text-gray-400 font-poppins text-sm">
              A simple, responsive directory application built with React, Tailwind CSS,
              and modern web technologies.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 font-poppins text-sm">
            &copy; {currentYear} Company Directory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
