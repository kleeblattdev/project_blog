import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {});

app.get("/:postID", (req, res) => {});

//Adminpage, wo der Admin einen neuen Post speichern kann
app.post("/addPost", (req, res) => {});

app.listen(PORT, () => console.log("I listen to PORT", PORT));
