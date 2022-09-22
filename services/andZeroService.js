const Joi = require('joi');

const andZeroRepository = require('../repositories/andZeroRepository');

const getAndZero = async () => {
    console.log('Service: getAndZero');
    return await andZeroRepository.getAndZero();
}

const getUserStats = async (email, club, date, cupsPledged) => {
    console.log('Service: getUserStats');

    const schema = Joi.object({
        email: Joi.string().email().required(),
        club: Joi.number().integer().required(),
        date: Joi.date().required(),
        cupsPledged: Joi.number().integer().required(),
    })

    const result = schema.validate({
        email: email,
        club: club,
        date: date,
        cupsPledged: cupsPledged,
    });

    if (result.error) {
        console.log(result.error);
        return result.error.details[0].message;
    }

    return await andZeroRepository.getUserStats(email, club, date, cupsPledged)
}

const getClubs = async () => {
    console.log('Service: getClubs');
    return await andZeroRepository.getClubs();
}

const getCups = async () => {
    console.log('Service: getCups');
    return await andZeroRepository.getCups()
        .then(calculateCupData);
}

const getCupsPerClub = async (clubID) => {
    console.log('Service: getCupsPerClub, clubID: ' + clubID);
    return await andZeroRepository.getCupsPerClub(clubID)
        .then(calculateCupData);
}

const calculateCupData = (cupsData) => {
    let numberOfUsers = cupsData.length;
    let cupsSaved = 0;

    cupsData.forEach(user => {
        let pledgeDate = new Date(user.pledge_date);
        let todaysDate = new Date;
        let differenceInTime = todaysDate.getTime() - pledgeDate.getTime();
        let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        cupsSaved += user.cups_day * differenceInDays;
    })

    return {
        "totalUsers": numberOfUsers,
        "totalCupsSaved": cupsSaved,
    };
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
module.exports.getCups = getCups;
module.exports.getCupsPerClub = getCupsPerClub;
