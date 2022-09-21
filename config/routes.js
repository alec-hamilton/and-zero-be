const andZeroController = require('../controllers/andZeroController');

const routes = (app) => {
    app.get('/andzero', andZeroController.getAndZero);
    app.post('/pledge', andZeroController.getUserStats);
}

module.exports = routes;
