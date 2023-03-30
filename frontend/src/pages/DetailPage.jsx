//library import
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//component import
import BlogDetail from "../components/blogDetail/BlogDetail";

const DetailPage = () => {
	const [singlePost, setSinglePost] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:3000/api/getPosts/${params.postID}`)
			.then((res) => res.json())
			.then((data) => setSinglePost(data));
	}, []);
	return <main>{singlePost && <BlogDetail post={singlePost} />}</main>;
};

export default DetailPage;
