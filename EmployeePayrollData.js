class EmployeePayrollData{

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id(){
        return this.Id;
    }

    set id(id){
        this.Id = id;
    }

    get name(){
        return this.Name;
    }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this.Name = name;
        else
            throw 'Name is Incorrect';
    }

    get salary(){
        return this.Salary;
    }

    set salary(salary){
        this.Salary = salary;
    }
    get gender() {
        return this.Gender;
    }

    set gender(gender) {
        this.Gender = gender;
    }

    get startDate() {
        return this.StartDate;
    }

    set startDate(startDate) {
        this.StartDate = startDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Gender = " + this.gender + ", Salary = " + this.salary + ", Start Date = " + employeeDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try{
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1, "Teresa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
