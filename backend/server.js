import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import fs from "fs";
import { fileTypeFromBuffer } from "file-type";
import { readPosts, appendPosts } from "./helper.js";

const app = express();
// schaut ob es in der Umgebung die Variable schon vergeben ist, ansonsten butzt es PORT 3000
const PORT = process.env.PORT || 3000;

const upload = multer({
	storage: multer.memoryStorage(),
	limits: { fileSize: 1024 * 1024 },
});

//logger
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors({ origin: "http://localhost:5173" }));

//Middleware zum parsen von JSON
app.use(express.json());

app.use("/images/", express.static("./images"));

//handler für GET-Anfragen auf "/posts"
app.get("/api/getPosts", (req, res) => {
	readPosts()
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

//handler für POST Anfragen auf "addPost"
app.post("/api/createPost", upload.single("image"), (req, res) => {
	const data = req.body;
	fileTypeFromBuffer(req.file.buffer).then((result) => {
		if (result.ext === "png" || result.ext === "jpg" || result.ext === "jpeg") {
			let filename = new Date().getTime();
			filename += "." + result.ext;
			fs.writeFile("./images/" + filename, req.file.buffer, (err) => {
				if (err) console.log(err);
				else {
					data.image = filename;
					appendPosts(data)
						.then((newData) => res.json(newData))
						.catch((err) => console.log(err));
				}
			});
		} else {
			res.status(500).end();
		}
	});
});

//handler für GET Anfragen auf "/:postID" einzelnen Blogeintrag
app.get("api/posts/:postID", (req, res) => {});

app.listen(PORT, () => console.log("Server started on PORT", PORT));
