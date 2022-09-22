const calculateCupData = require('../../library/library');

describe('function that calculates cup data', () => {
    it('given empty array, users and cups pledged is 0', () => {
        expect(calculateCupData([])).toStrictEqual({
            "totalUsers": 0,
            "totalCupsSaved": 0,
        });
    });

    it('given 1 user who pledged today and drinks 10 cups per day, return 1 total user and 0 cups saved', () => {
        expect(calculateCupData([{pledge_date: new Date, cups_day: 10}])).toStrictEqual({
            "totalUsers": 1,
            "totalCupsSaved": 0,
        });
    });
});