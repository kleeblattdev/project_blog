//library import
import { Link } from "react-router-dom";

const BlogArticle = ({ post }) => {
	return (
		<Link to="/:postID">
			<article>
				<img
					src={`http://localhost:3000/images/${post.image}`}
					alt={post.title}
				/>
				<h1>{post.title}</h1>
			</article>
		</Link>
	);
};

export default BlogArticle;
