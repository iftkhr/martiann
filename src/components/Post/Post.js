import "./Post.css";

function timeSince(date) {
	if (typeof date !== "object") {
		date = new Date(date);
	}
	var seconds = Math.floor((new Date() - date) / 1000);
	var intervalType;

	var interval = Math.floor(seconds / 31536000);
	if (interval >= 1) {
		intervalType = "year";
	} else {
		interval = Math.floor(seconds / 2592000);
		if (interval >= 1) {
			intervalType = "month";
		} else {
			interval = Math.floor(seconds / 86400);
			if (interval >= 1) {
				intervalType = "day";
			} else {
				interval = Math.floor(seconds / 3600);
				if (interval >= 1) {
					intervalType = "hour";
				} else {
					interval = Math.floor(seconds / 60);
					if (interval >= 1) {
						intervalType = "minute";
					} else {
						interval = seconds;
						intervalType = "second";
					}
				}
			}
		}
	}

	if (interval > 1 || interval === 0) {
		intervalType += "s";
	}

	return interval + " " + intervalType + " ago";
}

function Post({ post, user }) {
	return (
		<div className="post-container">
			<div className="post-header">
				<div className="post-userphoto">
					<img alt="" src={user.photo} />
				</div>
				<div className="post-details">
					<div className="post-username">{user.name}</div>
					<div className="post-time">
						{new Date(post.created_at).toDateString()}
					</div>
					<div className="post-duration">
						{timeSince(post.created_at)}
					</div>
				</div>
				<div className="post-menu">
					<img alt="" src="menu-icon.svg" />
				</div>
			</div>
			<div className="post-content">
				<img alt="" src={post.url} />
			</div>
			<div className="post-footer">
				<button className="footer-likes">
					<img alt="" src="like-icon.svg" /> {post.likes} Likes
				</button>
				<button className="footer-comments">
					<img alt="" src="comment-icon.svg" /> {post.likes} Comments
				</button>
				<button className="footer-dislikes">
					<img alt="" src="dislike-icon.svg" /> {post.likes} Dislikes
				</button>
				<button className="footer-likes">
					<img alt="" src="share-icon.svg" /> {post.likes} Shares
				</button>
			</div>
		</div>
	);
}

export default Post;
