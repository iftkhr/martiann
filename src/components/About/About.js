import "./About.css";

function About(user) {
	return (
		<div className="about-container">
			<div className="about-photo">
				<img alt="" src={user.user.photo} />
			</div>
			<div className="about-details">
				<div className="details-heading">
					Credits & Highlights{" "}
					<span className="details-link"> More... </span>
				</div>
				<div className="details-name details">
					<img alt="" src="user-icon.svg" />
					<span>{user.user.name}</span>
				</div>
				<div className="details-company details">
					<img alt="" src="briefcase-icon.svg" />
					<span>{user.user.company}</span>
				</div>
				<div className="details-school details">
					<img alt="" src="cap-icon.svg" />
					<span>{user.user.school}</span>
				</div>
				<div className="details-college details">
					<img alt="" src="cap-icon.svg" />
					<span>{user.user.college}</span>
				</div>
			</div>
		</div>
	);
}

export default About;
