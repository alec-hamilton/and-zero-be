const andZeroController = require('../controllers/andZeroController');
const cors = require('cors');

const routes = (app) => {
    app.get('/andzero', cors(), andZeroController.getAndZero);
}

module.exports = routes;
