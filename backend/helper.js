import fs, { readFile } from "fs";

export const readPosts = () => {
	return new Promise((resolve, reject) => {
		fs.readFile("./posts.json", (err, data) => {
			if (err) reject(err);
			else {
				resolve(JSON.parse(data.toString()));
			}
		});
	});
};

export const writePost = () => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./post.json", JSON.stringify(data, null, 2), (err) => {
			if (err) reject(err);
			else {
				resolve();
			}
		});
	});
};

export const appendPosts = () => {
	return new Promise((resolve, reject) => {
		readFile().then((oldPosts) => {
			const newData = [...oldPosts, newPost];
			writePost(newData)
				.then((res) => resolve(newData))
				.catch((err) => reject(err));
		});
	});
};
