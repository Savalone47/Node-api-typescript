import * as express from "express";
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server listing on http://127.0.0.1:${PORT}`);
});