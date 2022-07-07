import "./Feed.css";

import About from "../About/About";
import Photos from "../Photos/Photos";
import Posts from "../Posts/Posts";

function Feed({ posts, users }) {
	return (
		<div className="feed-container">
			<div className="about">
				<About user={users[0]} />
			</div>
			<div className="posts">
				<Posts user={posts} />
			</div>
			<div className="photos">
				<Photos user={posts} />
			</div>
		</div>
	);
}

export default Feed;
