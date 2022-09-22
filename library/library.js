const calculateCupData = (cupsData) => {
    let numberOfUsers = cupsData.length;
    let cupsSaved = 0;

    if (numberOfUsers === 0) {
        return {
            "totalUsers": 0,
            "totalCupsSaved": 0,
        };
    }

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

module.exports = calculateCupData;
