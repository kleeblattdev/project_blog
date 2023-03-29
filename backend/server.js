import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

//Middleware zum parsen von JSON
app.use(express.json());

//handler für GET-Anfragen auf "/posts"
app.get("api/posts", (req, res) => {});

//handler für GET Anfragen auf "/:postID" einzelnen Blogeintrag
app.get("api/posts/:postID", (req, res) => {});

//handler für POST Anfragen auf "addPost"
app.post("/api/addPost", (req, res) => {});

app.listen(PORT, () => console.log("I listen to PORT", PORT));
