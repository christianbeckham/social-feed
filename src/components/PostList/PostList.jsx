import React from "react";

const PostList = (props) => {
	return (
		<div>
			<ul>
				{props.posts.map((post, index) => (
					<li key={index}>
						<div>Username: {post.username}</div>
						<p>Message: {post.postMessage}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
