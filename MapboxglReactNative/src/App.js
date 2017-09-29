import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { SegmentedControls } from 'react-native-radio-buttons';


const accessToken = 'pk.eyJ1Ijoic3RkYXZpcyIsImEiOiI5Mkdac0FNIn0.GEQLOdntbI01q3JeFkQuTg';
const layerStyles = MapboxGL.StyleSheet.create({
    circleStyle: {
        circleRadius: 8,
        circleColor: '#e7eb3f',
        circleStrokeWidth: 1
    },
    trails: {
        lineColor: "#E41A1C",
        lineWidth: 2
    }
});
const trailheadsUrl = 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/Recreation/FeatureServer/6/query/?f=geojson&outSR=4326&outFields=*&where=1=1';
const recreateUrl = 'https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/tile/{z}/{y}/{x}.pbf';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: 'map',
            trailheads: []
        };
        this.getTrailheads();
    }
    componentWillMount() {
        MapboxGL.setAccessToken(accessToken);
    }
    async getTrailheads() {
        const url = 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/Recreation/FeatureServer/6/query/?f=geojson&outSR=4326&outFields=*&where=1=1'
        try {
            const response = await fetch(url);
            const geojson = await response.json();
            this.setState({
                trailheads: geojson.features
            });
            console.log('trailheads', geojson);
        } catch (error) {
            console.error('Error getting trailheads data!', error);
        }
    }
    async download() {
        console.log('download');
        // not implemented in v6 yet
        // await MapboxGL.initializeOfflinePacks();
        // await MapboxGL.addOfflinePack({
        //     name: 'trails',
        //     type: 'bbox',
        //     bounds: this.map.getBounds(),
        //     minZoomLevel: 4,
        //     maxZoomLevel: 17,
        // });
        // console.log('offline pack created');
    }

    render() {
        const mapStyle = {
            flex: 1,
            display: this.state.toggle === 'map' ? 'flex': 'none'
        };
        const listStyle = {
            flex: 1,
            display: this.state.toggle === 'list' ? 'flex': 'none'
        };
        const pickerStyle = {
            flex: 9
        }
        const recreateOptions = {
            tiles: [recreateUrl]
        };

                    // this crashes the emulator, likely because options isn't supported yet
                    // <MapboxGL.VectorSource id='recreate' options={recreateOptions}>
                    //     <MapboxGL.LineLayer
                    //         id='Trails/1'
                    //         sourceLayerID='Trails'
                    //         filter={['==', '_symbol', 0]}
                    //         style={layerStyles.trails}
                    //     />
                    // </MapboxGL.VectorSource>
        const options = ['map', 'list'];
        return (
            <View style={styles.container}>
                <View style={{padding: 5}}>
                    <SegmentedControls
                        options={options}
                        selectedOption={this.state.toggle}
                        onSelection={(itemValue) => this.setState({toggle: itemValue})}
                        />
                </View>
                <MapboxGL.MapView
                    showUserLocation={true}
                    centerCoordinate={[-111.8, 40.55]}
                    zoomLevel={8}
                    styleURL='mapbox://styles/mapbox/outdoors-v10'
                    style={mapStyle}
                    ref={map => { this.map = map; }}>

                    <MapboxGL.ShapeSource id='trailheads' url={trailheadsUrl}>
                        <MapboxGL.CircleLayer id='trailheads_circles' style={layerStyles.circleStyle}/>
                    </MapboxGL.ShapeSource>
                </MapboxGL.MapView>
                <FlatList data={this.state.trailheads} style={listStyle}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.properties.PrimaryName}</Text>
                            <Button onPress={this.download.bind(this)} title='Download'/>
                        </View>
                    )}
                    keyExtractor={(item) => item.properties.OBJECTID}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 17
    }
});
