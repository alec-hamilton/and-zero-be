const andZeroRepository = require('../repositories/andZeroRepository');

const getAndZero = async () => {
    console.log('Service: getAndZero');
    return await andZeroRepository.getAndZero();
}

module.exports.getAndZero = getAndZero;
