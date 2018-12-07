import React, { Component } from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

class GuestList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { guests, toggleConfirmationAt, toggleEditingAt, setNameAt, isFiltered } = this.props;
		return (
			<ul>
				<li className="pending">
					<span>Safia</span>
				</li>

				{guests.filter((guest) => !isFiltered || guest.isConfirmed).map((guest, index) => {
					return (
						<Guest
							key={index}
							name={guest.name}
							isConfirmed={guest.isConfirmed}
							isEditing={guest.isEditing}
							handleConfirmation={() => toggleConfirmationAt(index)}
							handleEditing={() => toggleEditingAt(index)}
							setName={(text) => setNameAt(text, index)}
							isFiltered={isFiltered}
						/>
					);
				})}
			</ul>
		);
	}
}

GuestList.propTypes = {
	guests: PropTypes.array.isRequired,
	toggleConfirmationAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired
};

export default GuestList;
