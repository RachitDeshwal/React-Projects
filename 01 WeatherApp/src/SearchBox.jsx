import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);
  const API_KEY = "8c0fbc09c4db5a87405bc7ffbd162c4d";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  let getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (e) {
      throw e;
    }
  };

  let changeInput = (evt) => {
    setCity(evt.target.value);
  };
  let submitHandle = async (evt) => {
    try {
      evt.preventDefault();

      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (e) {
      updateInfo({});
      setErr(true);
    }
  };

  return (
    <>
      <div className="SearchBox">
        <form>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={city}
            required
            onChange={changeInput}
          />
          <br />
          <br />
          <Button
            variant="contained"
            type="submit"
            onClick={submitHandle}
            style={{ marginBottom: "25px" }}
          >
            Search
          </Button>
        </form>
      </div>
      {err && <p style={{ color: "red" }}>This city data is not found</p>}
    </>
  );
}
