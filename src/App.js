import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

const App = () => {
	const [posts, setPosts] = useState([]);

	const addPost = (post) => {
		setPosts((prevState) => [post, ...prevState]);
	};

	return (
		<div>
			<NavBar />
			<PostForm addPost={addPost} />
			<PostList posts={posts}/>
		</div>
	);
};

export default App;
