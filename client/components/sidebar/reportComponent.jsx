import React from 'react';
import {render} from 'react-dom';

class ReportComponent extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-flag" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Mt. Starr King, Mt. Waumbek, NH
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-map-signs" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Starr King Trail
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-car" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Arrived at 11 am and snagged one of few remaining spots. At least 8 cars there.
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-tree" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Dry Trail, Wet Trail, Ice - Blue, Mud - Significant, Slush 
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-binoculars" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Light Traction 
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-tint" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						No water crossings to worry about 
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-wrench" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						No trail maintnence to worry about 
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-paw" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Pets would do great here
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-bug" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Theyre back, though low in numbers and not biting
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-question" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Nothing lost and found
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-comment" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						Spectacular views day. Reiterating Lady Greys earlier post, ice began about 1.5 mile in when the trail veered left and into the shade. Microspikes were essential and even with them, several bulges were tricky. We saw zero people on the summits without traction, and noted 2 guys early in the icy section who appear to have turned around. 

						I switched to my new Hillsounds on descent which I absolutely loved for these trail conditions. But by afternoon the ice was softening a bit though still highly slick in spots. 

						Id forgotten how stunning the Waumbeck view point was. Recent tree clearing (just a little) there made it even better. I know this is controversial but thank you to whomever for giving me a fabulous window into the full Presidential range and beyond. Fuel for the journey.  
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-1">
						<i className="fa fa-user" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						TwinMom+2 
					</div>
				</div>
				<hr/>
				<div className="row" style={{marginBottom: '20px'}}>
					<div className="col-md-1">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</div>

					<div className="col-md-10">
						<a href='mailto:mkm@mkmarinac.com'>mkm@mkmarinac.com</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ReportComponent;