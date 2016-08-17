var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var WeatherInput = require('./WeatherInput');

function Home (props) {
  return (
    <div className="jumbotron col-sm-12 text-center">
      <h2>Enter a City and State</h2>
      <WeatherInput />
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Weather</button>
      </Link>
    </div>
  );
}

module.exports = Home;