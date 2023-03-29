//library import
import { NavLink, Link } from "react-router-dom";

//scss import
import "./header.scss";

const Header = () => {
	return (
		<header>
			<h1>Super Backend Blog</h1>
			<nav>
				{/* 				<Link to="/">Home</Link>
				<Link to="/addPost">Admin</Link> */}
			</nav>
		</header>
	);
};

export default Header;
