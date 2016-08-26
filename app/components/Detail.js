var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var utils = require('../utils/utils');

var styles = {
  separator: {
    paddingBottom: "20px"
  },
  i: {
    default: {
      fontSize: '1.5em'
    },
    temp: {
      fontSize: '3em',
      margin: '8px 0'
    },
    icon: {
      fontSize: '4em',
      marginBottom: '10px'
    },
    humidity: {
      fontSize: '1.5em'
    },
    wind: {
      fontSize: '2em'
    }
  },
  humWind: {
    paddingTop: '5px'
  }
}

function Detail (props) {
  var date = utils.getDate(props.dayForecast.dt);
  var high = Math.round(props.dayForecast.temp.max);
  var low = Math.round(props.dayForecast.temp.min);
  var id = props.dayForecast.weather[0].id;
  var windDir = Math.round(props.dayForecast.deg);
  console.log(props.dayForecast);
  return  (
    <section className="text-center">
      <h2>{date}</h2>
      <h3 style={styles.separator}>{props.location}</h3>
      <div className="row" style={styles.separator}>
      <div className="col-xs-2 col-xs-offset-4 text-right">
        <i className="wi wi-thermometer" style={styles.i.temp}></i>
      </div>
        <div className="col-xs-6 text-left">
          <p id="high">High: {high}</p>
          <p id="low">Low: {low}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-sm-offset-3">
          <i id="icon" className={"wi wi-owm-" + id} style={styles.i.icon}></i>
          <p id="description">{props.dayForecast.weather[0].description}</p>
        </div>
        <div className="col-xs-12 col-sm-3" style={styles.humWind}>
          <p id="humidity">{props.dayForecast.humidity} <i className="wi wi-humidity" style={styles.i.humidity}></i></p>
          <p id="wind">{props.dayForecast.speed} mph <i className="wi wi-wind from-' + windDir + '-deg" style={styles.i.wind}></i></p>
        </div>
      </div>
    </section>
  );
}

Detail.propTypes = {
  className: PropTypes.string,
  location: PropTypes.string,
  dayForecast: PropTypes.object
};

module.exports = Detail;