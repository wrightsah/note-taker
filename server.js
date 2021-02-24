// Dependencies

const express = require('express');
const { join } = require('path');
const path = require('path');

// Set up express app

const app = express();
const PORT = process.env.PORT || 3000;

// Set up express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route to landing page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// route to notes page

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// display all notes as json object

app.get('/api/db', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));

// Start server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
