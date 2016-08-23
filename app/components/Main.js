var React = require('react');
var CityInput = require('./CityInput');

var styles = {
  header: {
    backgroundColor: 'coral',
    paddingTop: 15,
    paddingBottom: 15
  },
  h1: {
    margin: 0,
    color: '#fff'
  },
  form: {
    button: {
      marginLeft: 10
    }
  },
  main: {
    height: '100%'
  }
}

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      location: ''
    }
  },
  handleSubmitLocation: function() {
    console.log('submit');
  },
  handleUpdateLocation: function() {
    console.log('update');
  },
  render: function () {
    return (
      <div>
        <header className='container-fluid' style={styles.header}>
          <h1 className='col-sm-6 col-md-7 col-lg-8' style={styles.h1}>Weather App</h1>
          <CityInput 
            classes='col-sm-6 col-md-5 col-lg-4 form-inline'
            onSubmitLocation={this.handleSubmitLocation}
            onUpdateLocation={this.handleUpdateLocation}
            location={this.state.location}
            style={styles.form}
          />
        </header>
        <main className='main-container' style={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = Main;
