import React, { Component } from "react";
import GuestList from "./components/GuestList";
import Header from "./components/Header";
import CounterPanel from "./components/CounterPanel";

class App extends Component {
	state = {
		guests: [
			{
				name: "Treasure",
				isConfirmed: false,
				id: 1,
				isEditing: false
			},
			{
				name: "Nic",
				isConfirmed: true,
				id: 2,
				isEditing: false
			},
			{
				name: "Ola",
				isConfirmed: false,
				id: 3,
				isEditing: false
			},
			{
				name: "Tony",
				isConfirmed: true,
				id: 4,
				isEditing: false
			},
			{
				name: "Ojo",
				isConfirmed: false,
				id: 5,
				isEditing: false
			},
			{
				name: "Thompson",
				isConfirmed: false,
				id: 6,
				isEditing: false
			}
		]
	};

	toggleGuestPropertyAt = (property, indexToChange) => {
		const updatedGuests = this.state.guests.map((guest, index) => {
			if (index === indexToChange) {
				return {
					...guest,
					[property]: !guest[property]
				};
			}
			return guest;
		});
		return this.setState({ guests: updatedGuests });
	};

	toggleConfirmationAt = (index) => {
		this.toggleGuestPropertyAt("isConfirmed", index);
	};

	toggleEditingAt = (index) => {
		this.toggleGuestPropertyAt("isEditing", index);
	};

	getTotalInvited = () => {
		return this.state.guests.length;
	};

	setNameAt = (name, indexToChange) => {
		const updatedGuests = this.state.guests.map((guest, index) => {
			if (index === indexToChange) {
				return {
					...guest,
					name
				};
			}
			return guest;
		});
		return this.setState({ guests: updatedGuests });
	};

	// getAttendingGuests = () => {}
	// getConfirmedGuests = () => {}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="main">
					<div>
						<h2>Invitees</h2>
						<label>
							<input type="checkbox" /> Hide those who havent responded
						</label>
					</div>
					<CounterPanel totalGuest={() => this.getTotalInvited()} />
					<GuestList
						guests={this.state.guests}
						toggleConfirmationAt={this.toggleConfirmationAt}
						toggleEditingAt={this.toggleEditingAt}
						setNameAt={this.setNameAt}
					/>
				</div>
			</div>
		);
	}
}

export default App;
