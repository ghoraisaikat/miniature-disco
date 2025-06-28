import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
	res.status(200).send("Hello, World!");
});

app.get("/:string", (req, res) => {
	const QUERY = req.query || null;
	res.status(200);
	if (QUERY == null) {
		res.send("No queries to work upon.");
	} else {
		res.send(`The queries are: ${JSON.stringify(QUERY)}`);
	}
	if (req.params.string == "Saikat") {
		res.send("bingo!");
	} else {
	res.send(req.params.string);
	}
});

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});
