import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-10xl font-poppins font-bold text-gray-200">
            404
          </h1>
          <div className="-mt-8">
            <svg
              className="w-24 h-24 md:w-32 md:h-32 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2m0 0l4-4m0 0l4 4m0 0v6m0 0H5m14 0v-6"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 font-poppins text-lg mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Suggestions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-md mx-auto">
          <p className="text-gray-900 font-poppins font-semibold mb-3">
            Here are some helpful links:
          </p>
          <ul className="space-y-2 font-poppins text-sm">
            <li>
              <button
                onClick={() => navigate('/')}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Go to Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/companies')}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Browse Companies
              </button>
            </li>
            <li>
              <button
                onClick={() => window.history.back()}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Go Back
              </button>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-poppins font-semibold transition-colors"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate('/companies')}
            className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-poppins font-semibold transition-colors"
          >
            View Companies
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
