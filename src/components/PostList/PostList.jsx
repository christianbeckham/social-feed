import React from "react";
import Post from "../Post/Post";

const PostList = (props) => {
	const { posts } = props;
	return (
		<div>
			<ul>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</ul>
		</div>
	);
};

export default PostList;
