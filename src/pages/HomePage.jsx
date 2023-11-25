import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function HomePage() {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 1. Loading...

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response);
      setCountries(response.data);
      setIsLoading(false); // 2. Loading...
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  // const handleRefresh = () => {
  //   setIsLoading(true); // 4 Loading... (en caso de querer un botón)
  //   getData();
  // };

  if (isLoading === true) { // 3. Loading...
    return (
      <div
        style={{ padding: "300px", display: "flex", justifyContent: "center" }}
      >
        <PropagateLoader color={"cornflowerblue"} size={20} />
      </div>
    );
  }

  return (
    <div className="container">
      {/* <button onClick={handleRefresh}>Refrescar</button> {/* // 4 Loading... (en caso de querer un botón) */}

      {/* list of country names */}
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country._id}
            href={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`} 
              alt={`${country.name.common} flag`}
              style={{ marginRight: '10px', width: '36px', height: '27px' }}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ----------------------Iteration de países ingresados manualmente---------------------------

// import React from 'react';

// export default function HomePage () {

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-dark bg-primary mb-3">
//         <div className="container">
//           <a className="navbar-brand" href="/">WikiCountries</a>
//         </div>
//       </nav>

//       {/* Bootstrap container wrapper div */}
//       <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
//         <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

//         <div className="list-group">
//           <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
//           <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
//           <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
//           <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
//           <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
//           <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
//           <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
//           <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
//           <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
//           <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
//           <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
//           <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
//           <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
//           <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
//           <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
//         </div>
//       </div>
//     </div>
//   );
// };
