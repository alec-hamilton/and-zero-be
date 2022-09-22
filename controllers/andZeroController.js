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
    andZeroService.getUserStats(email, club, date, cupsPledged).then((stats) => {

        if (!stats.status) {
            res.status = 200;
        } else {
            res.status(stats.status);
        }
        res.json(stats);
    });
}

const getClubs = (req, res) => {
    console.log('Controller: getClubs');
    andZeroService.getClubs().then((allClubs) => res.json(allClubs));
}

const getCups = (req, res) => {
    console.log('Controller: getCups');
    andZeroService.getCups().then((allCups) => res.json(allCups));
}

const getCupsPerClub = (req, res) => {
    let clubID = req.params.clubID;
    console.log('Controller: getCupsPerClub, clubID: ' + clubID);
    andZeroService.getCupsPerClub(clubID).then((cupsPerClub) => res.json(cupsPerClub));
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
module.exports.getCups = getCups;
module.exports.getCupsPerClub = getCupsPerClub;
