import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetials, setCountryDetails] = useState(null);
  cost[(borders, setBorders)] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      console.log(response);
      setCountryDetails(response.data);
      setBorders(response.data.borders || []);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  if (isLoading === true) {
    // 3. Loading...
    return (
      <div
        style={{ padding: "300px", display: "flex", justifyContent: "center" }}
      >
        <PropagateLoader color={"cornflowerblue"} size={20} />
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        {/* country details */}
        {countryDetials && (
          <div>
            <h1>{countryDetials.name.common}</h1>
            <p>Capital: {countryDetials.capital}</p>
            <p>
              Area: {countryDetials.area} km<sup>2</sup>
            </p>

            <h3>Borders:</h3>
            <ul>
              {borders.map((border) => (
                <li key={border}>
                  <Link to={`/${border}`}>{border}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
