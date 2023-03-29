const AdminPage = () => {
	return (
		<main>
			<form>
				<input type="text" name="title" placeholder="Blogtitle" />
				<input type="file" name="image" placeholder="image" />
				<textarea name="blogtext" cols="30" rows="10"></textarea>
				<button>Publish</button>
			</form>
		</main>
	);
};

export default AdminPage;
