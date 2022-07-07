import "./AddPost.css";

function AddPost(user) {
	return (
		<div className="addpost-container">
			<div className="addpost-heading">{user.user.name} User</div>
			<div className="addpost-status">
				You could go out for a cup of coffee, come back and find you
				lost a billion dollars.
				<br />
				That would ruin your day.
			</div>
			<div className="addpost-update">
				<form>
					<textarea type="textarea" placeholder="What's happening?" />
					<div className="addpost-buttons">
						<button>
							<img alt="" src="photo-icon.svg" /> Upload File
						</button>
						<button>Post</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddPost;
