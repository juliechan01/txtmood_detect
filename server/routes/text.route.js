const TextController = require('../controllers/text.controller');

module.exports = app => {
    // ALL TEXTS
    app.get('/api/texts', TextController.findAll);

    // TEXT FORM
    app.post('/api/texts/add', TextController.addText);

    // ONE TEXT
    app.get('/api/texts/:id', TextController.findOne);

    // UPDATE TEXT
    app.put('/api/texts/:id', TextController.updateText);

    // DELETE TEXT
    app.delete('/api/texts/:id', TextController.deleteText);
}