/*
* purpose : Employee Wage Computation Problem
* @uthor : Amol
* since : 2022/09/26
*/
console.log("Welcome To EmpWage Problem")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;


function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee Part Time Present");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee Full Time Present");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is Absent");
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}
{
    const findTotal = (totalValue, dailyValue) => {
        return totalValue + dailyValue;
    }
let totalEmployeeWage = 0;
let dayCounter = 0;

let employeeDailyWageArray = new Array();
let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();

function totalWage(dailyWage){
    totalEmployeeWage += dailyWage;
}

function totalWageUsingReduce(totalWage, dailyWage){
    return totalWage + dailyWage;
}

function mapDayWithDailyWage(dailyWage){
    dayCounter ++;
    return "Day " + dayCounter + " = " + dailyWage;
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}


while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
    employeeDailyHoursMap.set(totalWorkingDays, employeeHours);
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(employeeHours));

}

//UC - 7A
//Calculating Total Employee Wage Using ForEach
employeeDailyWageArray.forEach(totalWage);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//Calculating Total Employee Wage Using Reduce
console.log("Employee Wage With Reduce : " + employeeDailyWageArray.reduce(totalWageUsingReduce, 0));

//UC - 7B
//Print day along with daily wage
let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithDailyWage);
console.log("Daily Wage Map : ");
console.log(mapDayWithWageArray);

//UC - 7C
//Show days when full time Wage of 160 is earned
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned : ");
console.log(fullDayWageArray);

//UC - 7D
//Find first occurence when full time wage was eared using find function
console.log("First Full Time Wage was Earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC - 7E
//Check if every element of full time wage is truely holding full time wage
console.log("Check All Element Have Full Time Wage: " + fullDayWageArray.every(isAllFullTimeWage));

//UC - 7F
//Check if ther eis any Part Time Wages
console.log("Check If Any Part Time Wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC - 7G
//Find Number of days the Employee Worked

console.log("Number of Days the Employee has Worked = " + employeeDailyWageArray.reduce(totalDaysWorked, 0));

//UC - 8
console.log(employeeDailyWageMap);
console.log("\nTotal Working Hours : "+ Array.from(employeeDailyWageMap.values()).reduce(totalWageUsingReduce,0));

//UC - 9
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
 totalWage = employeeDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee Wage Using Arrow Function :\nTotal Hours : " + totalHours + "\nTotal Employee Wage : " + totalWage);

employeeDailyHoursMap.forEach((value, key) => {
    if(value == 8)
        fullTimeWorkingDays.push(key);
    else if(value == 4){
        partTimeWorkingDays.push(key);
    }
    else
        nonWorkingDays.push(key);
});

console.log("Full Time Working Days : " + fullTimeWorkingDays);
console.log("Part Time Working Days : " + partTimeWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

}

//UC - 10
let employeeDailyWageAndHoursArray = new Array();

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageAndHoursArray.push(
        {
            dayNumber: totalWorkingDays,
            dailyHours: employeeHours,
            dailyWage: calculateDailyWage(employeeHours),
            toString() {
                return "\nDay" + this.dayNumber + " => Working Hours = " + this.dailyHours + " And Wage Earned = " + this.dailyWage
            },
        });
}

console.log("\nShowing Daily Wages and Hours Worked : " +employeeDailyWageAndHoursArray);
