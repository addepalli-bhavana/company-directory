import { Globe, Users, Calendar, MapPin } from 'lucide-react';

function CompanyTable({ companies }) {
  if (companies.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-poppins font-bold text-gray-900">
                Company
              </th>
              <th className="px-6 py-4 text-left text-sm font-poppins font-bold text-gray-900">
                Industry
              </th>
              <th className="px-6 py-4 text-left text-sm font-poppins font-bold text-gray-900">
                Location
              </th>
              <th className="px-6 py-4 text-left text-sm font-poppins font-bold text-gray-900">
                Employees
              </th>
              <th className="px-6 py-4 text-left text-sm font-poppins font-bold text-gray-900">
                Founded
              </th>
              <th className="px-6 py-4 text-center text-sm font-poppins font-bold text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr
                key={company.id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                {/* Company Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-10 h-10 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div>
                      <p className="text-sm font-poppins font-semibold text-gray-900">
                        {company.name}
                      </p>
                      <p className="text-xs text-gray-500 font-poppins">
                        {company.description.substring(0, 30)}...
                      </p>
                    </div>
                  </div>
                </td>

                {/* Industry */}
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-poppins font-medium">
                    {company.industry}
                  </span>
                </td>

                {/* Location */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-poppins">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {company.location}
                  </div>
                </td>

                {/* Employees */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-poppins">
                    <Users className="w-4 h-4 text-gray-400" />
                    {company.employees.toLocaleString()}
                  </div>
                </td>

                {/* Founded */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-poppins">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {company.founded}
                  </div>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => window.open(`https://${company.website}`, '_blank')}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-poppins text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Visit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4 p-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-soft-md transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <img
                src={company.logo}
                alt={company.name}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex-1">
                <h4 className="font-poppins font-bold text-gray-900">{company.name}</h4>
                <p className="text-xs text-blue-500 font-poppins font-medium">{company.industry}</p>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <p className="text-xs text-gray-600 font-poppins flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {company.location}
              </p>
              <p className="text-xs text-gray-600 font-poppins flex items-center gap-2">
                <Users className="w-3 h-3" />
                {company.employees.toLocaleString()} employees
              </p>
              <p className="text-xs text-gray-600 font-poppins flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                Founded {company.founded}
              </p>
            </div>

            <button
              onClick={() => window.open(`https://${company.website}`, '_blank')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-poppins transition-colors"
            >
              <Globe className="w-4 h-4" />
              Visit Website
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyTable;
