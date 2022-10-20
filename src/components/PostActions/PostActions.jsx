import React from "react";
import PostButton from "../PostButton/PostButton";

const PostActions = (props) => {
	const { post, toggleEditMode, updatePost } = props;

	const handleLike = () => {
		post.isLiked
			? updatePost(post.id, { isLiked: null })
			: updatePost(post.id, { isLiked: true });
	};

	const handleDislike = () => {
		post.isLiked === false
			? updatePost(post.id, { isLiked: null })
			: updatePost(post.id, { isLiked: false });
	};

	return (
		<div className="float-end">
			<PostButton
				iconName="hand-thumbs-up-fill"
				color={post.isLiked ? "green" : "lightgray"}
				handleOnClick={handleLike}
			/>
			<PostButton
				iconName="hand-thumbs-down-fill"
				color={post.isLiked === false ? "red" : "lightgray"}
				handleOnClick={handleDislike}
			/>
			<PostButton
				iconName="pencil-square"
				color={"lightgray"}
				handleOnClick={toggleEditMode}
			/>
		</div>
	);
};

export default PostActions;
