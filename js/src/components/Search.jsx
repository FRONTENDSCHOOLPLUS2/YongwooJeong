const Search = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        location.href = "";
      }}
    >
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <button
        type="submit"
        className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
      >
        검색
      </button>
    </form>
  );
};

export default Search;
