import { useEffect, useState } from "react";

function Feed(posts) {
	const [post, setPost] = useState([0]);

	useEffect(() => {
		setPost(posts);
	}, [posts]);

	if (post[0] !== 0 && post.posts.length !== 0) {
		console.log(posts.posts[0].url);
		return <div>{posts.posts[0].url}</div>;
	}
}

export default Feed;
