import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import { readPosts } from "./helper";

const app = express();
const PORT = 3000;
const upload = multer();

app.use(cors({ origin: "http://localhost:5173" }));

//Middleware zum parsen von JSON
app.use(express.json());

//handler für GET-Anfragen auf "/posts"
app.get("api/posts", (req, res) => {
	readPosts()
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

//handler für GET Anfragen auf "/:postID" einzelnen Blogeintrag
app.get("api/posts/:postID", (req, res) => {});

//handler für POST Anfragen auf "addPost"
app.post("/api/addPost", (req, res) => {
	const data = req.body;
	appendPosts(data)
		.then((newData) => res.json(newData))
		.catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server started on PORT", PORT));
