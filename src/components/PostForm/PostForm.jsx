import React, { useState } from "react";

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
				props.addPost(inputs);
				setInputs({});
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="form-label">
				Name
				<input
					className="form-control"
					type="text"
					name="username"
					value={inputs.username || ""}
					onChange={handleChange}
				/>
			</label>
			<label>
				Post
				<textarea
					className="form-control"
					name="postMessage"
					value={inputs.postMessage || ""}
					onChange={handleChange}
				/>
			</label>
			<input type="submit" value="Create" />
		</form>
	);
};

export default PostForm;
