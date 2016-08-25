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
  // var date = utils.getDate(props.day.dt);
  // var high = Math.round(props.day.temp.max);
  // var id = props.day.weather[0].id;
  console.log(props.dayForecast);
  return  props.isLoading === true
  ? <Loading />
  : <div>
      <div>location {props.location}</div>
    </div>
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