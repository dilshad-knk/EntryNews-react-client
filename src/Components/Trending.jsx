import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrendingHeader from "./TrendingHeader";
import Spinner from "./Spinner";

const Trending = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      let filteredCountries = data;

      if (selectedRegion && selectedRegion !== 'All') {
        filteredCountries = data.filter(country => country.region === selectedRegion);
      }

      if (searchTerm) {
        filteredCountries = filteredCountries.filter(country => 
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setCountries(filteredCountries);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchTerm, selectedRegion]);
  
 
  
  return (
    <div>
      <TrendingHeader setSearchTerm={setSearchTerm} setSelectedRegion={setSelectedRegion}/>
      {loading? 
        <Spinner/> :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-9 mt-9 ">
        {countries && countries.map((country) => (
          <div key={country.name} className=" rounded-xl  overflow-hidden box_shadow">
            <div className="h-1/2">
              <Link to={country.alpha2Code}>
                <img src={country.flags.svg} alt="" className="h-full w-full object-cover" />
              </Link>
            </div>
            <div className="p-4 bg-white text-center h-full">
                <h2 className="font-bold  pb-3">{country.name}</h2>
                <p className="pb-2 ">Population: <span>{country.population.toLocaleString()}</span></p>
                <p className="pb-2">Region: <span>{country.region}</span></p>
                <p className="pb-2">Capital: <span>{country.capital}</span></p>
            </div>
          </div>
        ))}
      </div>
    
       }
     
    </div>
  );
};

export default Trending;
