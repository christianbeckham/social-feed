import React from "react";

const PostButton = (props) => {
	const { iconName, color, handleOnClick } = props;

	return (
		<button
			className="bg-transparent fs-4 border-0"
			type="button"
			onClick={handleOnClick}
		>
			<i className={`bi bi-${iconName}`} style={{ color: color }}></i>
		</button>
	);
};

export default PostButton;
