class EmployeePayrollData{

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
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
        console.log("Setting name");
        this.Name = name;
    }

    get salary(){
        return this.Salary;
    }

    set salary(salary){
        this.Salary = salary;
    }

    toString(){
        return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
