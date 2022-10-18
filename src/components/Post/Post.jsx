import React from "react";
import PostActions from "../PostActions/PostActions";

const Post = (props) => {
	const {
		post: { username, postMessage },
	} = props;

	return (
		<li>
			<div>{username}</div>
			<p>{postMessage}</p>
			<PostActions />
		</li>
	);
};

export default Post;
