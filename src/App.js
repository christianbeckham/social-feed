import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import PostForm from "./components/PostForm/PostForm";

const App = () => {
	const [posts, setPosts] = useState([]);

	const addPost = (post) => {
		setPosts((prevState) => [post, ...prevState]);
	};

	return (
		<div>
			<NavBar />
			<PostForm addPost={addPost} />
		</div>
	);
};

export default App;
