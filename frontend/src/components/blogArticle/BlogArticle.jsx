//library import
import { Link } from "react-router-dom";

const BlogArticle = () => {
	return (
		<Link to="/:postID">
			<article>
				<img src="" alt="" />
				<h1>Blogtitle</h1>
			</article>
		</Link>
	);
};

export default BlogArticle;
