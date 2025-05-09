const express = require('express');
const messagesRouter = require('./routes/messagesRouter');
const formRouter = require('./routes/formRouter');
const app = express();
const path = require('node:path');
const PORT = process.env.PORT || 5000;

// Use form data
app.use(express.urlencoded({ extended: true }));

// Use views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/new', formRouter);
app.use('/', messagesRouter);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
