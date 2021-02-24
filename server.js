// Dependencies

const express = require('express');
const path = require('path');

// Set up express app

const app = express();
const PORT = process.env.PORT || 3000;

// Set up express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route to landing page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));





// Start server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
