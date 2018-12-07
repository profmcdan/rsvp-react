import React from "react";
import PropTypes from "prop-types";

const CounterPanel = (props) => {
	return (
		<table className="counter">
			<tbody>
				<tr>
					<td>Attending:</td>
					<td>{props.confirmedGuests()}</td>
				</tr>
				<tr>
					<td>Unconfirmed:</td>
					<td>{props.notGoing()}</td>
				</tr>
				<tr>
					<td>Total:</td>
					<td>{props.totalGuest()}</td>
				</tr>
			</tbody>
		</table>
	);
};

CounterPanel.propTypes = {
	totalGuest: PropTypes.func.isRequired,
	confirmedGuests: PropTypes.func.isRequired,
	notGoing: PropTypes.func.isRequired
};

export default CounterPanel;
