import React from 'react';
import {render} from 'react-dom';
import {Motion, spring} from 'react-motion';
import Radium from 'radium';

import ReportComponent from './sidebar/reportComponent';

class SidebarComponent extends React.Component {
	constructor() {
		super();
		
		this.state = {
			visible: false
		};

		this.disclose = this.disclose.bind(this);
	}

	render() {
		const barStyle = {
			position: 'absolute',
			top: '15px',
			right: '10px',
			fontSize: '25px',
			color: '#444',
			cursor: 'pointer'
		};

		const sidebarContentStyle = {
			marginTop: '45px',
			marginLeft: '15px',
			marginRight: '15px',
			position: 'absolute',
			bottom: '0px',
			top: '45px',
			overflow: 'scroll'
		};

		const sidebarTitleStyle = {
			fontSize: '25px',
			fontWeight: 100,
			marginLeft: '15px',
			marginTop: '10px'
		};

		const sidebarStyle = {
			zIndex: 1000,
			position: 'absolute',
			height: '100%',
			width: '300px',
			background: '#fff',
			boxShadow: '6px 0px 77px -25px rgba(0,0,0,0.75)'
		};

		const slide = 260;

		return (
			<div>
				<Motion style={{x: spring(this.state.visible ? 0 : -slide), alpha: spring(this.state.visible ? 1 : 0)}}>
					{({x, alpha}) => 
						<div style={[sidebarStyle, {transform: `translate3d(${x}px, 0, 0)`, background: `rgba(255,255,255,${alpha})`, boxShadow: `6px 0px 77px -25px rgba(0,0,0,${alpha})`}]}>
							<i className="fa fa-bars" aria-hidden="true" style={barStyle} onClick={this.disclose}></i>

							<div style={sidebarTitleStyle}>Peak Report</div>

							<div style={[sidebarContentStyle, {opacity: alpha}]}>
								<ReportComponent></ReportComponent>
							</div>
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

export default Radium(SidebarComponent);