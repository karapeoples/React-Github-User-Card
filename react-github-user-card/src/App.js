import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
library.add(faCodeBranch, faGithubSquare)


class App extends Component {
	state = {
		followersList: [],
		searchFollowers: [],
		searchTerm: "",
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/karapeoples")
			.then(data => {
				console.log("API Is Here: ", data.data);
				this.setState({
					name: data.data.name,
					img: data.data.avatar_url,
					github: data.data.html_url,
					files: data.data.repos_url,
					area: data.data.location,
					repoNum: data.data.public_repos,
					followed: data.data.following,
					followers: data.data.followers,
				});
			})
			.catch(err => console.log("You have encountered an error", err));

			
		axios
			.get("https://api.github.com/users/karapeoples/followers")
			.then(data => {
				console.log("API Is Here: ", data.data);
				this.setState({
					searchFollowers: data.data,
					followersList: data.data,
				});
			})
			.catch(error => console.log("None for You", error));
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			console.log("SearchTerm: we have a state change!");

			const follower = this.state.searchFollowers.filter(people =>
				people.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
			);
			this.setState({
				followersList: follower,
			});
		}
	}

	render() {
		return (
			<div>
				<h1>GitHub User Info</h1>

				<UserCard
					name={this.state.name}
					img={this.state.img}
					github={this.state.github}
					files={this.state.files}
					area={this.state.area}
					repoNum={this.state.repoNum}
					followed={this.state.followed}
					followers={this.state.followers}
					iconGH={faGithubSquare}
					iconB={faCodeBranch}
				/>

				<h1>{this.state.name}'s Followers:</h1>
				<div>
					<form>
						<h3>Search Bar</h3>
						<input
							onChange={this.handleChange}
							type="text"
							name="searchTerm"
							value={this.state.searchTerm}
							placeholder="Search "></input>
					</form>
					<div>
						{this.state.followersList.map(info => {
							return (
								<FollowerCard
									key={info.id}
									name={info.login}
									img={info.avatar_url}
									github={info.html_url}
									files={info.repos_url}
									iconGH={faGithubSquare}
									iconB={faCodeBranch}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default App;
