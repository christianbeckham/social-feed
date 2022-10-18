import React, { useState } from "react";
import PostButton from "../PostButton/PostButton";

const PostActions = (props) => {
	const [buttonColors, setButtonColors] = useState({
		likedColor: "gray",
		dislikedColor: "gray",
	});

	const handleLike = () => {
		setButtonColors({ likedColor: "green", dislikedColor: "gray" });
	};
	const handleDislike = () => {
		setButtonColors({ likedColor: "gray", dislikedColor: "red" });
	};

	return (
		<div>
			<PostButton
				iconName="hand-thumbs-up-fill"
				color={buttonColors.likedColor}
				handleOnClick={handleLike}
			/>
			<PostButton
				iconName="hand-thumbs-down-fill"
				color={buttonColors.dislikedColor}
				handleOnClick={handleDislike}
			/>
		</div>
	);
};

export default PostActions;
