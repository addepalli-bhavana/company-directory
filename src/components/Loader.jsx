function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-12 h-12 mb-4">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-600 font-poppins font-medium">Loading companies...</p>
    </div>
  );
}

export default Loader;
