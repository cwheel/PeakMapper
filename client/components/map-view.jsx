import React from 'react';
import {render} from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapView extends React.Component {
	constructor() {
		super();
		this.state = {
			lat: 44.161,
			lng: -71.4352,
			zoom: 12
		};

	}

	render() {
		const position = [this.state.lat, this.state.lng];
		var mapStyle = {
			width: '100%',
			height: '100%'
		};
		
		return (
			<Map center={position} zoom={this.state.zoom} style={mapStyle}>
				<TileLayer style={mapStyle} attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
				<Marker position={position}>
					<Popup>
						<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
					</Popup>
				</Marker>
			</Map>
		);
	}
}

export default MapView;