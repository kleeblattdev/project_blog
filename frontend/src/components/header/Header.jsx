//library import
import { NavLink, Link } from "react-router-dom";

//scss import
import "./header.scss";

const Header = () => {
	return (
		<header>
			<NavLink to="/">
				<h1>Super Backend Blog</h1>
			</NavLink>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/addPost">Admin</NavLink>
			</nav>
		</header>
	);
};

export default Header;
