const andZeroService = require('../services/andZeroService');

const getAndZero = (req, res) => {
    console.log('Controller: getAndZero');
    andZeroService.getAndZero().then((allData) => res.json(allData));
}

module.exports.getAndZero = getAndZero;
