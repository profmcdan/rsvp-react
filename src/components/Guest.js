import React, { Component } from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

class Guest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { name, isConfirmed, isEditing, handleConfirmation, handleEditing, setName, removeGuest } = this.props;
		const editText = isEditing ? "save" : "edit";
		return (
			<li className="responded">
				<GuestName isEditing={isEditing} handleNameEdits={(e) => setName(e.target.value)}>
					{name}
				</GuestName>
				<label>
					<input type="checkbox" checked={isConfirmed} onChange={handleConfirmation} /> Confirmed
				</label>
				<button onClick={handleEditing}>{editText}</button>
				<button onClick={removeGuest}>remove</button>
			</li>
		);
	}
}

Guest.propTypes = {
	name: PropTypes.string.isRequired,
	isConfirmed: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleConfirmation: PropTypes.func.isRequired,
	handleEditing: PropTypes.func.isRequired,
	setName: PropTypes.func.isRequired,
	removeGuest: PropTypes.func.isRequired
};

export default Guest;
