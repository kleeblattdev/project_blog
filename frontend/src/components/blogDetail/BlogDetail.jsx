//scss import
import "./blogDetail.scss";

const BlogDetail = ({ post }) => {
	console.log(post);
	return (
		<section className="blogDetail">
			<img
				src={`http://localhost:3000/images/${post.image}`}
				alt={post.title}
			/>
			<h1>{post.title}</h1>
			<p>{post.blogtext}</p>
		</section>
	);
};

export default BlogDetail;
