const andZeroRepository = require('../repositories/andZeroRepository');

const getAndZero = async () => {
    console.log('Service: getAndZero');
    return await andZeroRepository.getAndZero();
}

const getUserStats = async (email, club, date, cupsPledged) => {
    console.log('Service: getUserStats');

    let duplicateEmail = andZeroRepository.checkEmail(email).then();

    duplicateEmail.then()
    console.log(duplicateEmail);

    return await andZeroRepository.getUserStats(email, club, date, cupsPledged)
    // add a .then() to do any further logic with the cupsPledged.

}

const getClubs = async () => {
    console.log('Service: getClubs');
    return await andZeroRepository.getClubs();
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
