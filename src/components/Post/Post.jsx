import React, { useState } from "react";
import PostActions from "../PostActions/PostActions";

const Post = (props) => {
	const { post, updatePost } = props;
	const [editMode, setEditMode] = useState(false);
	const [updates, setUpdates] = useState({});

	const toggleEditMode = () => setEditMode((prevState) => !prevState);

	const handleUpdateChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUpdates((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleUpdateClick = (e) => {
		const modifiedDate = new Date().toLocaleDateString();
		const updatedPostValues = {
			...updates,
			modifiedDate,
		};
		updatePost(post.id, updatedPostValues);
		toggleEditMode();
		setUpdates({});
	};

	const handleCancelClick = (e) => {
		toggleEditMode();
		setUpdates({});
	};

	return (
		<li className="list-group-item py-3 px-5">
			<div className="fw-semibold">
				<span>{post.username}</span>
				{" -"}
				<span className="badge font-monospace fw-lighter text-muted align-middle">
					{post.createdDate}{" "}
					{post.hasOwnProperty("modifiedDate") ? (
						<span className="fst-italic">(Edited)</span>
					) : null}
				</span>
			</div>
			{editMode === false ? (
				<p className="fw-normal">{post.postMessage}</p>
			) : (
				<React.Fragment>
					<textarea
						className="form-control my-2"
						name="postMessage"
						value={updates.postMessage || post.postMessage}
						onChange={handleUpdateChange}
					></textarea>
					<div
						className="btn-group btn-group-sm"
						role="group"
						aria-label="Small button group"
					>
						<button
							type="button"
							className="btn btn-success"
							onClick={handleUpdateClick}
						>
							Update
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={handleCancelClick}
						>
							Cancel
						</button>
					</div>
				</React.Fragment>
			)}
			<PostActions
				post={post}
				toggleEditMode={toggleEditMode}
				updatePost={updatePost}
			/>
		</li>
	);
};

export default Post;
