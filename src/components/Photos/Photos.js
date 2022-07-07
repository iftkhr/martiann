import "./Photos.css";

function Photos(user) {

    return (
		<div className="container">
			<div className="Photos-photo">
                <img alt="" src={user.user.photo} />
            </div>
		</div>
	);
}

export default Photos;
