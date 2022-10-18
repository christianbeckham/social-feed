import React from "react";

const Post = (props) => {
	const { username, postMessage } = props.post;
	return (
		<li>
			<div>{username}</div>
			<p>{postMessage}</p>
		</li>
	);
};

export default Post;
