import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20  px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-poppins font-semibold">
              ✨ Explore Global Companies
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6 leading-tight">
            Discover Companies <br />
            <span className="text-blue-500">Around the World</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 font-poppins mb-8 leading-relaxed max-w-2xl mx-auto">
            Browse our comprehensive directory of companies across different industries and locations. Search, filter, and explore businesses to find exactly what you're looking for.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate('/companies')}
              className="flex items-center justify-center gap-2 group px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-poppins font-semibold transition-colors"
            >
              Explore Companies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-poppins font-semibold transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
            <div>
              <p className="text-3xl md:text-4xl font-poppins font-bold text-gray-900">25+</p>
              <p className="text-sm md:text-base text-gray-600 font-poppins mt-1">Companies</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-poppins font-bold text-gray-900">10+</p>
              <p className="text-sm md:text-base text-gray-600 font-poppins mt-1">Industries</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-poppins font-bold text-gray-900">15+</p>
              <p className="text-sm md:text-base text-gray-600 font-poppins mt-1">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 font-poppins text-lg">
              Powerful tools to find the perfect company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Search */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-soft hover:shadow-soft-md transition-all hover:scale-105 transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                Advanced Search
              </h3>
              <p className="text-gray-600 font-poppins">
                Search companies by name, industry, or location with instant results.
              </p>
            </div>

            {/* Feature 2: Filter */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-soft hover:shadow-soft-md transition-all hover:scale-105 transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                Smart Filters
              </h3>
              <p className="text-gray-600 font-poppins">
                Filter by industry and location to narrow down your search.
              </p>
            </div>

            {/* Feature 3: Sort */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-soft hover:shadow-soft-md transition-all hover:scale-105 transform">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                Flexible Sorting
              </h3>
              <p className="text-gray-600 font-poppins">
                Sort by name or founding year to organize results your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-blue-100 font-poppins text-lg mb-8">
            Start browsing our directory of companies from around the world.
          </p>
          <button
            onClick={() => navigate('/companies')}
            className="flex items-center justify-center gap-2 mx-auto group px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-poppins font-semibold transition-colors"
          >
            View All Companies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
