const andZeroRepository = require('../repositories/andZeroRepository');

const getAndZero = async () => {
    console.log('Service: getAndZero');
    return await andZeroRepository.getAndZero();
}

const getUserStats = async (email, club, date, cupsPledged) => {
    console.log('Service: getUserStats');
    return await andZeroRepository.getUserStats(email, club, date, cupsPledged);
    // add a .then() to do any further logic with the cupsPledged.
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
