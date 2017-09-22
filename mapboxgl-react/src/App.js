import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import styles from './styles';
import Result from './Result';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RkYXZpcyIsImEiOiI5Mkdac0FNIn0.GEQLOdntbI01q3JeFkQuTg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mapVisible: true,
      features: []
    };
  }
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [-111.8, 40.55],
      zoom: 8
    });
    this.map.on('load', () => {
      this.map.addSource('esri', {
        type: 'vector',
        tiles: ['https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/tile/{z}/{y}/{x}.pbf']
      });
      styles.layers.forEach(this.map.addLayer.bind(this.map));

      const bounds = this.map.getBounds();
      const [xmin, ymin] = bounds.getSouthWest().toArray();
      const [xmax, ymax] = bounds.getNorthEast().toArray();
      this.map.addLayer({
        id: 'trailheads',
        type: 'circle',
        source: {
          type: 'geojson',
          data: `http://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/Recreation/FeatureServer/6/query/?f=geojson&geometry=${xmin},${ymin},${xmax},${ymax}&geometryType=esriGeometryEnvelope&inSR=4326&outSR=4326&outFields=*`,
        },
        paint: {
          'circle-radius': 8,
          'circle-color': '#e7eb3f',
          'circle-stroke-width': 1
        }
      });
    });
    const loadFeatures = (evt) => {
      if (evt.sourceId === 'trailheads') {
        const features = this.map.querySourceFeatures('trailheads');
        if (features.length > 0) {
          this.setState({ features });
          console.log('features loaded', features.map(f => f.properties.OBJECTID));
          this.map.off('sourcedata', loadFeatures);
        }
      }
    }
    this.map.on('sourcedata', loadFeatures);
    this.map.addControl(new mapboxgl.NavigationControl());
  }
  toggle(evt) {
    this.setState({mapVisible: evt.target.value === 'map'});
  }
  render() {
    const mapStyle = {
      display: this.state.mapVisible ? 'block': 'none'
    };
    const listStyle = {
      display: this.state.mapVisible ? 'none': 'block'
    };
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
        <div ref={el => this.mapContainer = el} className='pane' style={mapStyle}></div>
        <div className='pane list' style={listStyle}>
          <h3>Trailheads</h3>
          <ul>
            {this.state.features.map(f => {
              return (<Result key={f.properties.OBJECTID} feature={f} handleDownload={this.download.bind(this)}></Result>);
            })}
          </ul>
        </div>
      </div>
    );
  }
  download(evt) {
    console.log(evt.target.value);
  }
}

export default App;
