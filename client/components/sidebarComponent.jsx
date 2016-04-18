import React from 'react';
import {render} from 'react-dom';

class SidebarComponent extends React.Component {
	constructor() {
		super();
		
		this.state = {
		};
	}

	render() {
		const sidebarStyle = {
			zIndex: 1000,
			position: 'absolute',
			height: '100%',
			width: '250px',
			background: '#fff',
			boxShadow: '6px 0px 77px -25px rgba(0,0,0,0.75)'
		};

		return (
			<div style={sidebarStyle}>hello world</div>
		);
	}
}

export default SidebarComponent;