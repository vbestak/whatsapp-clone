import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

function SearchInput() {
  return (
    <div className="c-searchInput">
      <button className="c-searchInput__searchIcon">
        <SearchIcon />
      </button>
      <input placeholder="Search or start a new chat" />
    </div>
  );
}

export default SearchInput;
