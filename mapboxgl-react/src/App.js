import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RkYXZpcyIsImEiOiI5Mkdac0FNIn0.GEQLOdntbI01q3JeFkQuTg';

class App extends Component {
  constructor() {
    super();
    this.state = {mapVisible: true};
  }
  componentDidMount() {
    new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [-111.8, 40.55],
      zoom: 8
    });
  }
  toggle(evt) {
    this.setState({mapVisible: evt.target.value === 'map'});
  }
  render() {
    return (
      <div className='app'>
        <label>
          <input type='radio' value='map' name='toggle' checked={this.state.mapVisible} onChange={this.toggle.bind(this)}></input>
          map
        </label>
        <label>
          <input type='radio' value='list' name='toggle' checked={!this.state.mapVisible} onChange={this.toggle.bind(this)}></input>
          list
        </label>
        <div ref={el => this.mapContainer = el}></div>
      </div>
    );
  }
}

export default App;
