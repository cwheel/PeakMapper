import React from 'react';
import {render} from 'react-dom';
import {Motion, spring} from 'react-motion';

class SidebarComponent extends React.Component {
	constructor() {
		super();
		
		this.state = {
			visible: true
		};

		this.disclose = this.disclose.bind(this);
	}

	

	render() {
		const barStyle = {
			position: 'absolute',
			top: '10px',
			right: '10px',
			fontSize: '25px',
			color: '#444',
			cursor: 'pointer'
		};

		const slide = 210;

		return (
			<div>
				<Motion style={{x: spring(this.state.visible ? 0 : -slide), alpha: spring(this.state.visible ? 1 : 0)}}>
					{({x, alpha}) => 
						<div className="sidebar" style={{transform: `translate3d(${x}px, 0, 0)`, background: `rgba(255,255,255,${alpha})`, boxShadow: `6px 0px 77px -25px rgba(0,0,0,${alpha})`}}>
							<i className="fa fa-bars" aria-hidden="true" style={barStyle} onClick={this.disclose}></i>
							hello world
						</div>
					}
				</Motion>
			</div>
		);
	}


	disclose() {
		this.setState({visible: !this.state.visible});
	}
}

export default SidebarComponent;