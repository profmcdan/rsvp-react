import React, { Component } from "react";
import GuestList from "./components/GuestList";

class App extends Component {
	state = {
		guests: [
			{
				name: "Treasure",
				isConfirmed: false,
				id: 1
			},
			{
				name: "Nic",
				isConfirmed: true,
				id: 2
			}
		]
	};

	getTotalInvited = () => {
		return this.state.guests.length;
	};

	// getAttendingGuests = () => {}
	// getConfirmedGuests = () => {}
	render() {
		return (
			<div className="App">
				<header>
					<h1>RSVP</h1>
					<p>A McDan App</p>
					<form>
						<input type="text" value="Safia" placeholder="Invite Someone" />
						<button type="submit" name="submit" value="submit">
							Submit
						</button>
					</form>
				</header>
				<div className="main">
					<div>
						<h2>Invitees</h2>
						<label>
							<input type="checkbox" /> Hide those who havent responded
						</label>
					</div>
					<table className="counter">
						<tbody>
							<tr>
								<td>Attending:</td>
								<td>2</td>
							</tr>
							<tr>
								<td>Unconfirmed:</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Total:</td>
								<td>3</td>
							</tr>
						</tbody>
					</table>

					<GuestList />
				</div>
			</div>
		);
	}
}

export default App;
