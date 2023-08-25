import { useDispatch,useSelector } from "react-redux";
import { setSearchTerm } from "../../../features/countries/countriesSlice";
import "./search.css";


const Search = () => {

  const {searchTerm} = useSelector((state) => state.country)
  const dispatch = useDispatch();

  const handleInputValueChange = (event) => {
    dispatch(setSearchTerm(event.target.value.toLowerCase()));
  }

 
  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
