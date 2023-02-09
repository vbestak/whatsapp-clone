import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ChangeEventHandler } from "react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  return (
    <div className="c-searchInput">
      <button className="c-searchInput__searchIcon" aria-label="Search submit">
        <SearchIcon />
      </button>
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default SearchInput;
