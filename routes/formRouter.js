const { Router } = require('express');
const formRouter = Router();

// Open form
formRouter.get('/', (req, res) => res.render('formView'));

module.exports = formRouter;
