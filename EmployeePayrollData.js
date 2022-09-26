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
        let idRegx = RegExp('^[1-9][0-9]*$');
        if (idRegx.test(id))
            this.Id = id;
        else
            throw 'incorrect id'
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
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if (salaryRegx.test(salary))
            this.Salary = salary;
        else
            throw 'incorrect salary'
    }
    get gender() {
        return this.Gender;
    }

    set gender(gender) {
        let genderRegex = RegExp('^[F|M]$');
        if (genderRegex.test(gender))
            this.Gender = gender;
        else
             throw 'incorrect gender'
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

try {
    let employeePayrollData = new EmployeePayrollData(1, "Jeff", 5000000, "M", new Date());
    console.log(employeePayrollData.toString());

    let teresaPayrollData = new EmployeePayrollData(0, "Teresa", 50000, "F", new Date());
    console.log(teresaPayrollData.toString());
}
catch (e) {
    console.error(e);
}