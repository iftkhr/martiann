import "./Feed.css";

import About from "../About/About";
import Photos from "../Photos/Photos";
import Posts from "../Posts/Posts";
import AddPost from "../AddPost/AddPost";

function Feed({ posts, users }) {
	return (
		<div className="feed-container">
			<div className="about">
				<About user={users[0]} />
			</div>
			<div className="posts">
				<AddPost user={users[0]} />
				<Posts posts={posts} user={users[0]} />
			</div>
			<div className="photos">
				<Photos posts={posts} />
			</div>
		</div>
	);
}

export default Feed;
