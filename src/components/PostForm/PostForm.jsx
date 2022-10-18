import React, { useState } from "react";

const PostForm = (props) => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);

		setInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addPost(inputs);
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
