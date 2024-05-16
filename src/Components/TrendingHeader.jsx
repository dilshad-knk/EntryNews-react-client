import React, { useState } from 'react'
import { VscTriangleDown } from "react-icons/vsc";
const TrendingHeader = ({setSearchTerm,setSelectedRegion}) => {


    const [regionDropdownVisibility, setRegionDropdownVisiblity] = useState(false);
    const [regionSelected, setRegionSelected] = useState('');

    const handleRegionSelect = (region) => {
      setSelectedRegion(region);
      setRegionSelected (region)
      setRegionDropdownVisiblity(false);
    };

    const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    }

    const regionOptions = [
      { value: "All", label: "All" },
      { value: "Asia", label: "Asia" },
      { value: "Africa", label: "Africa" },
      { value: "Europe", label: "Europe" },
      { value: "Americas", label: "Americas" },
      { value: "Oceania", label: "Oceania" },
      { value: "Polar", label: "Polar" }
    ];

    

    return (
    <>
      <header>
        <div className="flex justify-between items-center md:py-2 ">
          <h3 className="title font-extrabold md:text-2xl ">Where in the world?</h3>
          <input onChange={handleSearch} type="text" placeholder='search country' className=' box_shadow border p-4 mx-5 w-96 hidden md:block'/>
          <div id="filter" className="box_shadow relative min-w-40">
              <div onClick={() => setRegionDropdownVisiblity(!regionDropdownVisibility)}  className="border p-2 md:p-4 flex items-center gap-1 font-semibold">
                <span>{regionSelected || 'All'}</span>
                <VscTriangleDown/>
              </div>
              <ul className={`${regionDropdownVisibility? 'block' : 'hidden'} absolute bg-slate-50 mt-2 box_shadow rounded-md w-full `}>
                {regionOptions.map((option,index) => (
                       <li 
                       key ={index}
                       className='hover:bg-slate-200 p-2 cursor-pointer '
                       data-value={option.value} 
                       onClick={() => handleRegionSelect(option.value)}>
                           {option.label}
                      </li>
                ))}
              </ul>
            </div>
        </div>
        <div  onChange={handleSearch} className='md:hidden mt-2'>
            <input type="text" placeholder='search country' className='border p-3 w-full'/>
        </div>
      </header>
   
</>

  )
}

export default TrendingHeader