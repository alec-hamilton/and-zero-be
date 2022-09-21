const andZeroController = require('../controllers/andZeroController');

const routes = (app) => {
    app.get('/andzero', andZeroController.getAndZero);
    app.post('/pledge', andZeroController.getUserStats);
    app.get('/clubs', andZeroController.getClubs);
    app.get('/cups', andZeroController.getCups);
    app.get('/cups/:clubID', andZeroController.getCupsPerClub);
}

module.exports = routes;
