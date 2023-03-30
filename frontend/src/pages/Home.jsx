//library import
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//component import
import BlogArticle from "../components/blogArticle/BlogArticle";

const Home = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		fetch("http://localhost:3000/api/getPosts")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<main>
			{posts &&
				posts.map((post) => {
					return <BlogArticle key={uuidv4()} post={post} />;
				})}
		</main>
	);
};

export default Home;
