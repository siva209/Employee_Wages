class EmployeePayrollData {
    constructor(...params){
      this.id = params[0]
      this.name = params[1]
      this.salary = params[2]
      this.gender = params[3]
      this.date = params[4]
    }
    get id(){
      return this._id
    }
    set id(id){
      this._id = id
    }
    get name() {
      return this._name
    }
    set name(name){
      this._name = name
    }
    get salary() {
      return this._salary
    }
    set salary(salary){
      this._salary = salary
    }
    get gender() {
      return this._gender
    }
    set gender(gender){
      this._gender = gender
    }
    get date() {
      return this._date
    }
    set date(date){
      this._date = date
    }
    toString(){
      const options = {year : 'numeric', month : 'long', day : 'numeric'}
      const empDate = this.date === undefined ? "undefined" : this.date.toLocaleDateString("en-US", options);
      return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary 
                     + ", gender = " + this.gender + ", date = " + empDate
    }
  }
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 2000)
  console.log(employeePayrollData.toString())
  employeePayrollData.name = "John"
  console.log(employeePayrollData.toString())
  let newEmployeePayrollData = new EmployeePayrollData(1, "Mark", 2000, "M", new Date())
  console.log(newEmployeePayrollData.toString())