const Joi = require('joi');

const andZeroRepository = require('../repositories/andZeroRepository');
const calculateCupData = require("../library/library");

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
    });

    const result = schema.validate({
        email: email,
        club: club,
        date: date,
        cupsPledged: cupsPledged,
    });

    if (result.error) {
        console.log(result.error);
        return {
            message: result.error.details[0].message,
            status: 400,
        };
    }

    const emailFromDb = await andZeroRepository.checkEmail(email);

    if (emailFromDb.length > 0) {
        return {
            message: 'email already exists.',
            status: 400,
        };
    }

    return await andZeroRepository.getUserStats(email, club, date, cupsPledged);
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

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
module.exports.getCups = getCups;
module.exports.getCupsPerClub = getCupsPerClub;
