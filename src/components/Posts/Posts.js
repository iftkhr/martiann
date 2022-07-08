import { useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";

function Posts({ posts, user }) {
	const [postsToAdd, setPostsToAdd] = useState(10); // get and show top 10 photos
	const [postsToLoad, setPostsToLoad] = useState([
		...posts.slice(0, postsToAdd), // get and show more photos on scroll
	]);

	var lastScrollTop = 0;

	// function to add more photos in feed
	window.addEventListener(
		"scroll",
		function () {
			var st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				var scrollPercentage = Math.floor(
					100 * (window.pageYOffset / document.body.clientHeight),
				);
				if (
					scrollPercentage > 70 &&
					scrollPercentage % 10 === 0 &&
					window.pageYOffset &&
					postsToAdd <= posts.length
				) {
					setPostsToAdd(postsToAdd + 5);
					setPostsToLoad([...posts.slice(0, postsToAdd)]);
				}
			}
			lastScrollTop = st <= 0 ? 0 : st;
		},
		false,
	);

	return (
		<div className="posts-container">
			{postsToLoad.map((post) => {
				return (
					<div className="post" key={post.id}>
						<Post post={post} user={user} />
					</div>
				);
			})}
		</div>
	);
}

export default Posts;
