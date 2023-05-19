/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(array){
    let testEmployee = {
      firstName: array[0], 
      familyName: array[1], 
      title: array[2], 
      payPerHour: array[3],
      timeInEvents: [], 
      timeOutEvents: [],
    }
    //console.log(testEmployee.access())
  return testEmployee
   } 

  
   function createEmployeeRecords(arrays){
    let employeeRecords = arrays
    let newArray = employeeRecords.map(createEmployeeRecord)
    return newArray
   }
  
   function createTimeInEvent(dateStamp){
    let newArr = dateStamp.split(' ')
    let newEvent = {
      type: "TimeIn",
      hour: parseInt(newArr[1], 10),
      date: newArr[0]
    }
    //console.log(this)
    this.timeInEvents.push(newEvent)
    return this
     
   }
  
  
   function createTimeOutEvent(dateStamp){
    let newArr = dateStamp.split(' ')
    let newEvent = {
      type: "TimeOut",
      hour: parseInt(newArr[1], 10),
      date: newArr[0]
    }
    this.timeOutEvents.push(newEvent)
    return this
  }
  
  function hoursWorkedOnDate(date){
    let timeInHours = this.timeInEvents.find(days => days.date === date)
    let timeOutHours = this.timeOutEvents.find(days => days.date === date)
    //console.log(timeInHours)
     return (timeOutHours.hour - timeInHours.hour) / 100
    //console.log(timeInHours)
  }
  
  
  function wagesEarnedOnDate(date){
  let payRate = this.payPerHour
  //console.log(payRate)
     return payRate * hoursWorkedOnDate.call(this, date)
  }
  
  
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(src, firstName){
    //console.log(JSON.stringify(firstName))
    let findName = src.find(arr => arr.firstName === firstName)

    return findName
}

function calculatePayroll(arr){
    let grandTotal = arr.reduce((acc, current) => {
        //console.log(current)
       return acc + allWagesFor.call(current)
       
      } ,0 )
       return grandTotal
}