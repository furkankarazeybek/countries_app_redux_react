import "./country.css";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//redux
import {useSelector, useDispatch} from "react-redux";
import { searchByRegion, showAllCountries  } from "../../features/countries/countriesAction";


const Country = () => {
  const dispatch = useDispatch();
  const { countriesData, loading,success, error ,region,searchTerm} = useSelector((state) => state.country);


  useEffect(() => {
    dispatch(showAllCountries());
    if(success) {
      console.log("başarılı")
    }
    if(region) {
      dispatch(searchByRegion(region));
    }
    if(error) {
      console.log(error)
    }
    
  }, [dispatch,error,success,region]);

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm));

  return (
    <section className="country-container">
      {loading ? (<h1>Loading..</h1>) : (
        data.length > 0 && data.map((item,index) => {
          return (

          <Link
            // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
            className="country-card"
            key={index}
            to={`/${item.cioc}`}
          >
            <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
            <div className="country-content">
              <h3> {item.name.common} </h3>
              <p>
                Population: {item.population} <span></span>
              </p>
              <p>
                Region: {item.region}<span></span>
              </p>
              <p>
                Capital: {item.capital} <span></span>
              </p>
            </div>
          </Link>

          )
        } 
        )
      )}
  
    </section>
  );
};

export default Country;
