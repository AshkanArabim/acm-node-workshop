const express = require("express");
const data = require("./data/database");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"))

app.get("/", (req, res) => {
	notes = data.getNotes();

	console.log(data);
	res.render("notes.ejs", notes);
});

app.get("/notes/:id", (req, res) => {
	const id = +req.params.id;
	note = data.getNote(id);
	
	// in case the note doesn't exist
	if (!note) {
		res.set(404)
		res.send("Note doesn't exist!!!")
		return;
	}

	res.render("singleNote.ejs");
});

app.get("/new", (req, res) => {
	res.render('new.ejs');
})

app.post('/submitnote', (req, res) => {
	const newNote = {
		title: req.body.title,
		content: req.body.content
	}
	data.addNote(newNote)
	res.redirect('/');
})

app.post("/delete/:id", (req, res) => {
	const id = +req.params.id;
	data.deleteNote(id)
	res.redirect("/")
})

app.use(express.static("static"));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
