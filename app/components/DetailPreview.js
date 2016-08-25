var React = require('react');
var PropTypes = React.PropTypes;
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

function DetailPreview (props) {
  var date = utils.getDate(props.day.dt);
  var high = Math.round(props.day.temp.max);
  var id = props.day.weather[0].id;
  console.log(props.day)
  return (
    <div className={props.className} style={styles.div} onClick={props.onClick}>
      <h4>{date}</h4>
      <i className={"wi wi-owm-" + id} style={styles.i} ></i>
      <p>High: {high}</p>
    </div>
  );
}

DetailPreview.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  day: PropTypes.object
};

module.exports = DetailPreview;