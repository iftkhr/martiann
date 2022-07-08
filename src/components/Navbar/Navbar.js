import "./Navbar.css";

function Navbar(users) {
	return (
		<div className="navbar-container">
			<div className="logo">Martiann</div>
			<div className="nav">
				<div className="nav-home">
					<a href="/">Home</a>
				</div>
				<div className="nav-user">
					<div className="user-photo">
						<img alt="" src={users.users[0].photo} />
					</div>
					<div className="user-name">{users.users[0].name}</div>
				</div>
				<div className="nav-icons">
					<div className="icons-photo">
						<img alt="" src="rocket-icon.svg" />
					</div>
					<div className="icons-photo">
						<img alt="" src="bell-icon.svg" />
					</div>
					<div className="icons-photo">
						<img alt="" src="arrow-icon.svg" />
					</div>
					<div className="user-name">{}</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
