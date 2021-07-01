//UC3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

//UC4
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Working Hours : " + empHrs + " Total Employee Wage : " + empWage);

//UC5
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workingHrs = getWorkingHours(empCheck);
    totalEmpHrs += workingHrs;
    empDailyWageArr.push(calcDailyWage(workingHrs));
}
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5-Total Days : " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage : " + totalEmpWage);
console.log(empDailyWageArr);
//UC6
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
//UC7A - Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log('UC7A - Total Days : ' + totalWorkingDays + 'Total Hrs : ' + totalEmpHrs + 'Emp Wage : ' + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log('UC7A - Emp Wage with reduce : ' + empDailyWageArr.reduce(totalWages, 0));