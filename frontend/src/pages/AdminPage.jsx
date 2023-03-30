import { useState } from "react";

const AdminPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		fetch("http://localhost:3000/api/createPost", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input type="text" name="title" placeholder="Title" />
				<input type="file" name="image" placeholder="image" />
				<input type="text" name="blogtext" />
				<button type="submit">Publish</button>
			</form>
		</main>
	);
};

export default AdminPage;
