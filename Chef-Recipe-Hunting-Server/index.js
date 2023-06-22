const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 1010;

const chefData = require("./files/chef-data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send("Assalamualaikum");
});

app.get("/chef-data", (req, res) => {
	res.send(chefData);
});

app.get("/chef-data/:id", (req, res) => {
	// res.send(chefData);
	const id = req.params.id;
	const Chef_id = chefData.find((Cid) => Cid.id == id);
	res.send(Chef_id);
});

app.listen(port, () => {
	console.log(`Server Run Success ! ${port}`);
});
