import { useState } from "react";

const AdminPage = () => {
	const handleSubmit = (e) => {
		let id = "";
		for (let i = 0; i < id.length; i++) {
			id = i;
		}
		const formData = new FormData(e.target);
	};
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title" hidden>
					Blogtitle
				</label>
				<input type="text" name="title" placeholder="Title" />
				<label htmlFor="image" hidden>
					Upload image
				</label>
				<input type="file" name="image" placeholder="image" />
				<label htmlFor="blogtext">Blogtext</label>
				<textarea name="blogtext" cols="30" rows="10"></textarea>
				<button type="submit">Publish</button>
			</form>
		</main>
	);
};

export default AdminPage;
