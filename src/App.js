import { useState } from "react";
import "./styles/app.css"
import NavBar from "./components/NavBar/NavBar";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

const App = () => {
	const [posts, setPosts] = useState([]);
	console.log("App", posts);

	const addPost = (post) => {
		setPosts((prevState) => [post, ...prevState]);
	};

	return (
		<div className="app">
			<NavBar />
			<div className="col-6 m-auto">
				<PostForm addPost={addPost} />
				<PostList posts={posts} />
			</div>
		</div>
	);
};

export default App;
