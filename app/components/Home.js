var React = require('react');
var CityInput = require('./CityInput');
var GetWeatherButton = require('./GetWeatherButton');

var styles = {
  section: {
    height: '100vh',
    background: 'url("images/pattern.svg")'
  },
  h2: {
    color: '#fff'
  },
  input: {

  },
  button: {
    marginLeft: 10
  }
}

function Home (props) {
  return (
    <section className="jumbotron col-sm-12 text-center" style={styles.section}>
      <h2 style={styles.h2}>Enter a City and State</h2>
      <form>
        <CityInput />
	      <GetWeatherButton />
      </form>	
    </section>
  );
}

module.exports = Home;