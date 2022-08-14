import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temp">18°C</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">22</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind</span>
            <span className="param-value">20 mph</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">15%</span>
          </div>
          <div className="param-row">
            <span className="param-label">Pressure</span>
            <span className="param-value">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
