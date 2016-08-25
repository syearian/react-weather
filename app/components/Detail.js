var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var utils = require('../utils/utils');

var styles = {
  div: {
    padding: "10px 0"
  },
  i: {
    fontSize: "4em",
    margin: "10px 0"
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
      <h3>{props.location}</h3>
      <p id="high">High {high}</p>
      <p id="low">Low {low}</p>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-offset-2">
          <i id="icon" className={"wi wi-owm-" + id}></i>
          <p id="description">{props.dayForecast.weather[0].description}</p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <p id="humidity">{props.dayForecast.humidity} <i className="wi wi-humidity"></i></p>
          <p id="wind">{props.dayForecast.speed} mph <i className="wi wi-wind from-' + windDir + '-deg"></i></p>
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
// <div className={props.className} style={styles.div} onClick={props.onClick}>
//       <h4>{date}</h4>
//       <i className={"wi wi-owm-" + id} style={styles.i} ></i>
//       <p>High: {high}</p>
//     </div>
    //  <div>detail {console.log(props.dayForecast)}</div>

module.exports = Detail;