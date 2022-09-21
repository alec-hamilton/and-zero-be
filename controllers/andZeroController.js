const andZeroService = require('../services/andZeroService');

const getAndZero = (req, res) => {
    console.log('Controller: getAndZero');
    andZeroService.getAndZero().then((allData) => res.json(allData));
}

const getUserStats = (req, res) => {
    console.log('Controller: getUserStats' + JSON.stringify(req.body));
    let email = req.body.email;
    let club = req.body.club;
    let date = req.body.date;
    let cupsPledged = req.body.cupsPledged;
    andZeroService.getUserStats(email, club, date, cupsPledged).then((stats) => res.json(stats));
}

const getClubs = (req, res) => {
    console.log('Controller: getClubs');
    andZeroService.getClubs().then((allClubs) => res.json(allClubs));
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
