import React, { useState } from "react";
import PostButton from "../PostButton/PostButton";

const PostActions = (props) => {
	const initialColors = { likedColor: "lightgray", dislikedColor: "lightgray" };
	const [colors, setColors] = useState(initialColors);

	const handleLike = () => {
		setColors({ likedColor: "green", dislikedColor: "lightgray" });
		props.post.isLiked = true;
	};

	const handleDislike = () => {
		setColors({ likedColor: "lightgray", dislikedColor: "red" });
		props.post.isLiked = false;
	};

	return (
		<div className="float-end">
			<PostButton
				iconName="hand-thumbs-up-fill"
				color={colors.likedColor}
				handleOnClick={handleLike}
			/>
			<PostButton
				iconName="hand-thumbs-down-fill"
				color={colors.dislikedColor}
				handleOnClick={handleDislike}
			/>
		</div>
	);
};

export default PostActions;
