let currentDate = new Date();
class EmployeePayrollData {
    //property
    // id;
    // name;
    // salary;
    // gender;
    // startDate;

    //constructor
    //in java script only one constructor is used
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.pinCode = params[5];
        this.email = params[6];
    }

    //getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }
    get id() { return this._id; }
    set id(id) {
        if (typeof id === "string") {
            let idRegex = /[0-9]*[1-9][0-9]*/;
            if (idRegex.test(id))
                this._id = parseInt(id);
            else throw "Id is incorrect";
        }
        else {
            if (id > 0)
                this._id = id;
            else
                throw "Id is incorrect";
        }
    }

    get salary() { return this._salary; }
    set salary(salary) {
        if (typeof salary === "string") {
            let salaryRegex = /[0-9]*[1-9][0-9]*/;
            if (salaryRegex.test(salary))
                this._salary = parseInt(salary);
            else throw "Salary is incorrect";
        }
        else {
            if (salary > 0)
                this._salary = salary;
            else throw "Salary is incorrect";
        }
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = /M|F/i;
        if (genderRegex.test(gender))
            this._gender = gender.toUpperCase();
        else throw "Gender is incorrect";
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (typeof startDate === "string") {
            let dateRegex = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
            if (dateRegex.test(startDate)) {
                let date = new Date(startDate);
                if (compareDates(date, currentDate) == 1)
                    throw "Incorrect Date";
                this._startDate = date;
            }
            else throw "Incorrect Date";
        }
        else {
            if (compareDates(startDate, currentDate) == 1)
                throw "Incorrect Date";
            this._startDate = startDate;
        }
    }

    get pinCode() { return this._pinCode; }
    set pinCode(pincode) {
        if (typeof pincode === "undefined")
            return;
        let pincodeString = pincode.toString();
        let pinCodeRegex = /[1-9][0-9]{2}\s[0-9]{3}/;
        if (pinCodeRegex.test(pincodeString))
            this._pinCode = parseInt(pincode);
        else throw "Incorrect Pincode";
    }

    get email() { return this._email; }
    set email(email) {
        if (typeof email === "undefined")
            return;
        let emailRegex = RegExp("^([a-zA-Z0-9+-])+(\\.?[a-zA-Z0-9_+-])*@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.]?[a-zA-Z]{2,3})?$");
        if (emailRegex.test(email))
            this._email = email;
        else throw "Invalid email";
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary
            + ", gender=" + this.gender + ", startDate=" + this.startDate.toLocaleDateString("en-US", options);
    }
}
function compareDates(date1, date2) {
    if (date1.getFullYear() == date2.getFullYear()) {
        if (date1.getMonth() == date2.getMonth()) {
            if (date1.getDate() == date2.getDate())
                return 0;
            else if (date1.getDate() > date2.getDate())
                return 1;
            else
                return -1;
        }
        else if (date1.getMonth() > date2.getMonth())
            return 1;
        else
            return -1;
    }
    else if (date1.getFullYear() > date2.getFullYear())
        return 1;
    else
        return -1;
}

try {
    var employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "T", new Date());
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 40000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData("2", "Sam", "5000", "M", "2014-08-20");
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData("0", "Mendes", "7000", "M", "2018-03-21");
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData("2", "Shawn", "0", "M", "2019-02-24");
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData("3", "Stella", "8000", "F", "2050-11-25");
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newemployeePayrollData = new EmployeePayrollData(4, "Kramer", 4000, "M", new Date(), "400 088", "abc@yahoo.com");
    console.log(newemployeePayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newemployeePayrollData = new EmployeePayrollData(4, "Kramer", 4000, "M", new Date(), "400 088", "abc123@gmail.a");
    console.log(newemployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
