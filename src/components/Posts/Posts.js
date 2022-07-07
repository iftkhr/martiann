import Post from "../Post/Post";
import "./Posts.css";

function Posts({ posts, user }) {
	console.log(posts);
	return (
		<div className="posts-container">
			{posts.map((post) => {
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
