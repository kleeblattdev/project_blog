import fs from "fs";

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

export const writePost = (data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./posts.json", JSON.stringify(data, null, 2), (err) => {
			if (err) reject(err);
			else {
				resolve();
			}
		});
	});
};

export const appendPosts = (newPost) => {
	return new Promise((resolve, reject) => {
		readPosts().then((oldPosts) => {
			const newData = [...oldPosts, newPost];
			writePost(newData)
				.then((res) => resolve(newData))
				.catch((err) => reject(err));
		});
	});
};
