import React from "react";
import PostActions from "../PostActions/PostActions";

const Post = (props) => {
	const {
		post,
		post: { username, postMessage },
	} = props;

	return (
		<li>
			<div>{username}</div>
			<p>{postMessage}</p>
			<PostActions post={post} />
		</li>
	);
};

export default Post;
