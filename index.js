// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)
const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function (fare){
        return fare*mult
}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverFunc){
return driverFunc(drivers)
}