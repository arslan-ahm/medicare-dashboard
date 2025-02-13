

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      {/* Logo or Title */}
      <div className="text-xl text-gray-500 font-bold">
        <span className="text-blue-500">M</span> Medicare
      </div>

      {/* Search Bar (Optional) */}
      <div>
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center text-gray-500 space-x-4">
        <div>John Doe</div>
        <div>24 October 2022</div>
        <div>General Doctor</div>
      </div>
    </nav>
  );
};

export default Navbar;