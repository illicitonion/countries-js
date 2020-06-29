import React from "react";

const Countries = ({ allData, selectedCountryData }) => {
  return allData.map((eachCountry) => {
    return (
      <div>
        <img
          src={eachCountry.flag}
          alt="flag"
          style={{ width: "100px" }}
          onClick={() => selectedCountryData(eachCountry)}
        />
        {eachCountry.name},
        {eachCountry.population.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")},
        {eachCountry.region},{eachCountry.capital},
      </div>
    );
  });
};

export default Countries;
