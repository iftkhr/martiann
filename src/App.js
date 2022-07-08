import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [users, setUsers] = useState([0]); //set users
	const [posts, setPosts] = useState([0]); // set posts

	// get users
	useEffect(() => {
		axios
			.get("/api/users")
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	//get posts
	useEffect(() => {
		axios
			.get("/api/posts")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// check if get successful
	if (
		posts[0] !== 0 &&
		posts.length !== 0 &&
		users[0] !== 0 &&
		users.length !== 0
	) {
		posts.sort((a, b) => {
			return b.id - a.id; //sort posts by latest
		});
		return (
			<Router>
				<Navbar users={users} />
				<Routes>
					<Route
						exact
						path="/"
						element={<Feed posts={posts} users={users} />}
					/>
				</Routes>
			</Router>
		);
	}
}

export default App;
