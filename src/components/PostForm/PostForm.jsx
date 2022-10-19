import React, { useState } from "react";
import { generateId } from "../../utils/generateId";

const PostForm = (props) => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(inputs).length > 0) {
			if (inputs.username.trim() && inputs.postMessage.trim()) {
				const updatedInput = {
					...inputs,
					createdDate: new Date().toLocaleDateString(),
					isLiked: null,
				};
				props.addPost(updatedInput);
				setInputs({});
			}
		}
	};

	return (
		<form className="border my-3 p-3 rounded-4 shadow" onSubmit={handleSubmit}>
			<div className="row mb-3 align-items-center">
				<div className="col-1">
					<label className="form-label fw-semibold text-black-50">Name</label>
				</div>
				<div className="col-9">
					<input
						className="form-control"
						type="text"
						name="username"
						value={inputs.username || ""}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-1">
					<label className="form-label fw-semibold text-black-50">Post</label>
				</div>
				<div className="col-9">
					<textarea
						className="form-control"
						name="postMessage"
						value={inputs.postMessage || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="col align-self-end text-center mt-2">
					<input
						className="bg-primary rounded-pill px-4 text-white border-0 fw-semibol shadow:hover"
						type="submit"
						value="Create"
					/>
				</div>
			</div>
		</form>
	);
};

export default PostForm;
