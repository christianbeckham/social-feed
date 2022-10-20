import React from "react";
import Post from "../Post/Post";

const PostList = (props) => {
	const { posts, updatePost } = props;

	return (
		<div className="mb-5">
			<ul className="list-group rounded-4 shadow">
				{posts.map((post) => (
					<Post key={post.id} post={post} updatePost={updatePost} />
				))}
			</ul>
		</div>
	);
};

export default PostList;
