import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
	const { handleInput, pendingGuest, handleSubmit } = props;
	return (
		<header>
			<h1>RSVP</h1>
			<p>A McDan App</p>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" value={pendingGuest} placeholder="Invite Someone" onChange={(e) => handleInput(e)} />
				<button type="submit" name="submit" value="submit">
					Submit
				</button>
			</form>
		</header>
	);
};

Header.propTypes = {
	handleInput: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default Header;
