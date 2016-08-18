var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
  button: {
    marginLeft: 10
  }
}

function GetWeatherButton (props) {
  console.log(props)
  return (
    <Link to='/forecast'>
      <button type='button' className='btn btn-success'
        style={props.style}>Get Weather</button>
    </Link>
  );
}

module.exports = GetWeatherButton;