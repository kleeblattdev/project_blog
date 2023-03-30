//library import
import { Link } from "react-router-dom";

//scss import
import "./blogArticle.scss";

const BlogArticle = ({ post }) => {
	return (
		<Link to={`/${post.id}`} className="blogArticle">
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
