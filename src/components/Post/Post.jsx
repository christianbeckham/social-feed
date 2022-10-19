import React from "react";
import PostActions from "../PostActions/PostActions";

const Post = (props) => {
	const { post } = props;

	return (
		<li className="list-group-item py-3 px-5">
			<div className="fw-semibold">
				<span>{post.username}</span>
				{" -"}
				<span className="badge font-monospace fw-lighter text-muted align-middle">
					{post.createdDate}
				</span>
			</div>
			<p className="fw-normal">{post.postMessage}</p>
			<PostActions post={post} />
		</li>
	);
};

export default Post;
