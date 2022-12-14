const dbService = require('../services/dbService');

let andZeroDbConnection = null;

dbService.connectToDb().then((db) => andZeroDbConnection = db);

const getAndZero = async () => {
    console.log('Repository: getAndZero');

    const sqlQuery = 'SELECT `users`.`id`, `clubs`.`club`, `users`.`email`, `users`.`pledge_date`, `users`.`cups_day`'
                    + 'FROM `users`'
                    + 'INNER JOIN `clubs`'
                    + 'ON `users`.`club` = `clubs`.`id`'
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

const getUserStats = async (email, club, date, cupsPledged) => {
    console.log('Repository: getUserStats');

    const sqlQuery = 'INSERT INTO users(club, email, pledge_date, cups_day)'
                    + 'VALUES' + `('${club}', '${email}', '${date}', '${cupsPledged}')`
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

const getClubs = async () => {
    console.log('Repository: getClubs');

    const sqlQuery = 'SELECT `clubs`.`id`, `clubs`.`club`'
                    + 'FROM `clubs`'
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

const getCups = async () => {
    console.log('Repository: getCups');

    const sqlQuery = 'SELECT `users`.`pledge_date`, `users`.`cups_day`'
                    + 'FROM `users`'
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

const getCupsPerClub = async (clubID) => {
    console.log('Repository: getCupsPerClub, clubID: ' + clubID);

    const sqlQuery = 'SELECT `users`.`pledge_date`, `users`.`cups_day`'
                    + 'FROM `users`'
                    + 'WHERE `club` = '
                    + `${clubID}`
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

const checkEmail = async (email) => {
    console.log('Repository: checkEmail, email: ' + email);

    const sqlQuery = 'SELECT `users`.`email`'
                    + 'FROM `users`'
                    + 'WHERE `email` = '
                    + `'${email}'`
                    + ';';

    return await andZeroDbConnection.query(sqlQuery);
}

module.exports.getAndZero = getAndZero;
module.exports.getUserStats = getUserStats;
module.exports.getClubs = getClubs;
module.exports.getCups = getCups;
module.exports.getCupsPerClub = getCupsPerClub;
module.exports.checkEmail = checkEmail;
