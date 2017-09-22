import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl'
import styles from './styles'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RkYXZpcyIsImEiOiI5Mkdac0FNIn0.GEQLOdntbI01q3JeFkQuTg';

class App extends Component {
  constructor() {
    super();
    this.state = {mapVisible: true};
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [-111.8, 40.55],
      zoom: 8
    });
    map.on('load', () => {
      // GeoJson example. Not ideal
      // const bounds = map.getBounds();
      // const [xmin, ymin] = bounds.getSouthWest().toArray();
      // const [xmax, ymax] = bounds.getNorthEast().toArray();
      // map.addLayer({
      //   id: 'trails-layer',
      //   type: 'line',
      //   source: {
      //     type: 'geojson',
      //     data: `http://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/Recreation/FeatureServer/7/query/?f=geojson&geometry=${xmin},${ymin},${xmax},${ymax}&geometryType=esriGeometryEnvelope&inSR=4326&outSR=4326`,
      //   },
      //   paint: {
      //     'line-color': '#1c89ab',
      //     'line-width': 3
      //   }
      // });

      map.addSource('esri', {
        type: 'vector',
        tiles: ['https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/tile/{z}/{y}/{x}.pbf']
      });
      styles.layers.forEach(map.addLayer.bind(map));
    });
    map.addControl(new mapboxgl.NavigationControl());
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
        <div ref={el => this.mapContainer = el} className='map'></div>
      </div>
    );
  }
}

export default App;
