import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

const App = () => {
	const [posts, setPosts] = useState([]);

	const addPost = (post) => {
		setPosts((prevState) => [post, ...prevState]);
	};

	const updatePost = (postId, values) => {
		const newUpdatedPosts = posts.map((post) => {
			if (post.id === postId) {
				return { ...post, ...values };
			}
			return post;
		});
		setPosts(newUpdatedPosts);
	};

	return (
		<div>
			<NavBar />
			<div className="col-6 m-auto">
				<PostForm addPost={addPost} />
				<PostList posts={posts} updatePost={updatePost} />
			</div>
		</div>
	);
};

export default App;
