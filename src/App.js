import React, { Component } from "react";
import GuestList from "./components/GuestList";
import Header from "./components/Header";
import CounterPanel from "./components/CounterPanel";

class App extends Component {
	state = {
		isFiltered: false,
		pendingGuest: "",
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

	handleNameInput = (e) => {
		this.setState({ pendingGuest: e.target.value });
	};

	addNewGuest = (e) => {
		e.preventDefault();

		if (this.state.pendingGuest !== "") {
			const newGuest = {
				name: this.state.pendingGuest,
				isConfirmed: false,
				id: this.state.guests.length + 1,
				isEditing: false
			};
			this.setState({ guests: [ newGuest, ...this.state.guests ], pendingGuest: "" });
		}
	};

	removeGuestAt = (index) => {
		this.setState({ guests: [ ...this.state.guests.slice(0, index), ...this.state.guests.slice(index + 1) ] });
	};

	toggleFilter = () => {
		this.setState({ isFiltered: !this.state.isFiltered });
	};

	getTotalInvited = () => {
		return this.state.guests.length;
	};
	// getAttendingGuests = () => {}
	getConfirmedGuests = () => {
		const confirmedGuest = this.state.guests.filter((guest) => guest.isConfirmed === true);
		return confirmedGuest.length;
	};

	getUnConfirmedGuests = () => {
		const unConfirmedGuest = this.state.guests.filter((guest) => guest.isConfirmed === false);
		return unConfirmedGuest.length;
	};

	render() {
		return (
			<div className="App">
				<Header
					handleInput={this.handleNameInput}
					pendingGuest={this.state.pendingGuest}
					handleSubmit={this.addNewGuest}
				/>
				<div className="main">
					<div>
						<h2>Invitees</h2>
						<label>
							<input type="checkbox" onChange={this.toggleFilter} checked={this.state.isFiltered} /> Hide those who
							havent responded
						</label>
					</div>
					<CounterPanel
						totalGuest={() => this.getTotalInvited()}
						confirmedGuests={() => this.getConfirmedGuests()}
						notGoing={() => this.getUnConfirmedGuests()}
					/>
					<GuestList
						guests={this.state.guests}
						toggleConfirmationAt={this.toggleConfirmationAt}
						toggleEditingAt={this.toggleEditingAt}
						setNameAt={this.setNameAt}
						isFiltered={this.state.isFiltered}
						removeGuestAt={this.removeGuestAt}
						pendingGuest={this.state.pendingGuest}
					/>
				</div>
			</div>
		);
	}
}

export default App;
