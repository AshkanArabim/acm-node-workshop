let data = [
	{
		title: "test note 1",
		content:
			"Cars have become an indispensable part of modern society. They are the most popular form of transportation, used by millions of people around the world. Cars are not only convenient but also represent an important part of our culture. They come in all shapes and sizes, from tiny compact cars to massive SUVs.",
		id: 1,
	},
	{
		title: "another note",
		content:
			"There are many different types of cars on the market, each designed to meet different needs and preferences. Compact cars are ideal for city driving because they are small, fuel-efficient, and easy to park. Sedans are popular for families because they have plenty of room for passengers and cargo. Sports cars are designed for speed and performance and are often used for racing.",
		id: 2,
	},
];

let currentId = 3;

function getNotes() {
	return data;
}

function getNote(id) {
	return data.find((note) => note.id === id);
}

function addNote(note) {
	note.id = currentId;
	currentId++;
	data.push(note);
}

function deleteNote(id) {
	data = data.filter((note) => note.id !== id);
}

module.exports = {
  getNote,
  getNotes,
  addNote,
  deleteNote
}