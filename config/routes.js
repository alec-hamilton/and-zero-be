const andZeroController = require('../controllers/andZeroController');
const cors = require('cors');

const routes = (app) => {
    app.get('/andzero', cors(), andZeroController.getAndZero);
    app.post('/pledge', cors(), andZeroController.getUserStats);
}

module.exports = routes;
