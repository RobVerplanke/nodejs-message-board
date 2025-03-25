const { Router } = require('express');
const messagesRouter = Router();

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

// Get overview of all messages
messagesRouter.get('/', (req, res) => {
  res.render('messagesView', {
    title: 'Mini Messageboard',
    messages: messages,
  });
});

// Add new message
messagesRouter.post('/new', (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

// Search message details
messagesRouter.get('/:id', (req, res) => {
  const message = messages.find((msg) => msg.id === parseInt(req.params.id));

  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('messageDetails', { message });
});

module.exports = messagesRouter;
