import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3306/home")
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:3306")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Router>
			<Navbar users={users} />
			<Routes>
				<Route exact path="/" element={<Feed posts={posts} />} />
			</Routes>
		</Router>
	);
}

export default App;
