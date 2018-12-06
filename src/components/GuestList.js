import React, { Component } from "react";

class GuestList extends Component {
	render() {
		return (
			<ul>
				<li className="pending">
					<span>Safia</span>
				</li>
				<li className="responded">
					<span>Iver</span>
					<label>
						<input type="checkbox" checked /> Confirmed
					</label>
					<button>edit</button>
					<button>remove</button>
				</li>
				<li className="responded">
					<span>Corrina</span>
					<label>
						<input type="checkbox" checked /> Confirmed
					</label>
					<button>edit</button>
					<button>remove</button>
				</li>
				<li>
					<span>Joel</span>
					<label>
						<input type="checkbox" /> Confirmed
					</label>
					<button>edit</button>
					<button>remove</button>
				</li>
			</ul>
		);
	}
}

export default GuestList;
