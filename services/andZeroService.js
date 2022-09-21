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

const getClubs = async () => {
    console.log('Service: getClubs');
    return await andZeroRepository.getClubs();
}

const getCups = async () => {
    console.log('Service: getCups');
    return await andZeroRepository.getCups()
        .then((cupsData) => {
            console.log(cupsData);

            let numberOfUsers = cupsData.length;
            let cupsSaved = 0;

            cupsData.forEach(user => {
                let pledgeDate = new Date(user.pledge_date);
                let todaysDate = new Date;
                let differenceInTime = todaysDate.getTime() - pledgeDate.getTime();
                let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
                cupsSaved += user.cups_day * differenceInDays;
            })

            let finalData = {
                "totalUsers": numberOfUsers,
                "totalCupsSaved":cupsSaved,
            }

            return finalData;
        })

}

const

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
module.exports.getCups = getCups;
