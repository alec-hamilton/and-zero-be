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