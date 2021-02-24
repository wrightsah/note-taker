// Dependencies

const express = require('express');
const path = require('path');

// Set up express app

const app = express();
const PORT = process.env.PORT || 3000;

// Set up express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());







// Start server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
