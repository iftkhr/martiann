import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [users, setUsers] = useState([0]);
	const [posts, setPosts] = useState([0]);

	useEffect(() => {
		axios
			.get("/users")
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		axios
			.get("/posts")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	if (
		posts[0] !== 0 &&
		posts.length !== 0 &&
		users[0] !== 0 &&
		users.length !== 0
	) {
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
