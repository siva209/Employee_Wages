class EmployeePayrollData {
  constructor(...params) {
      this.id = params[0]
      this.name = params[1]
      this.salary = params[2]
      this.gender = params[3]
      this.date = params[4]
  }
  get id() {
      return this._id
  }
  set id(Id) {
      let i = parseInt(Id);
      let idRegex = RegExp('^[1-9][0-9]*$');
      try {
          if (idRegex.test(i)) {
              this._id = i;
          }
          else {
              throw "Invalid ID";
          }
      } catch (error) {
          console.error(error);
      }
  }
  get name() { return this._name; }
  set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
      try {
          if (nameRegex.test(name))
              this._name = name;
          else
              throw "Name incorrect";
      } catch (error) {
          console.error(error)
      }
  }
  get salary() {
      return this._salary
  }
  set salary(salary) {
      let s = parseInt(salary);
      let salaryRegex = RegExp('^[1-9][0-9]*$');
      try {
          if (salaryRegex.test(s)) {
              this._salary = s;
          } else {
              throw "Invalid Salary";
          }
      } catch (error) {
          console.error(error);
      }
  }
  get gender() {
      return this._gender
  }
  set gender(gender) {
      let genderRegex = RegExp('[MF]{1}$');
      try {
          if (genderRegex.test(gender)) {
              this._gender = gender
          } else {
              throw "Invalid Gender";
          }
      } catch (error) {
          console.error();
      }
  }
  get date() {
      return this._date
  }
  set date(date) {
      var currentDate = new Date();
      try {
          if (date < currentDate) {
              this._date = date;
          }
          else {
              throw "Invalid Date";
          }
      }
      catch (error) {
          console.error();
      }
  }
  toString() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const empDate = this.date === undefined ? "undefined" : this.date.toLocaleDateString("en-US", options);
      return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
          + ", gender = " + this.gender + ", date = " + empDate
  }
}
let employeePayrollData = new EmployeePayrollData(11, "Mark", 2000)
console.log(employeePayrollData.toString())
try {
  employeePayrollData.name = "john"
  console.log(employeePayrollData.toString())
} catch (error) {
  console.error(error)
}
let newEmployeePayrollData = new EmployeePayrollData(0, "Mark", 2000, "M", new Date());
console.log(newEmployeePayrollData.toString())
