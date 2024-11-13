import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ placeholder }) {
  return (
    <div className="relative max-w-xs sm:w-full">
      <input
        type="text"
        placeholder={placeholder || 'Search'}
        className="w-full px-4 py-1 text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-full sm:py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="search"
      />
      <SearchIcon className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-3" />
    </div>
  );
}
export default SearchInput;
