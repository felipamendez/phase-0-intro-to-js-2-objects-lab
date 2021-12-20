// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    return {
        ...employee,
        [name]: Sam,
        };       
}

newAddress = "12 Broadway"
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newAddress) {
    employee[streetAddress] = newAddress;
    return employee;
} 

function deleteFromEmployeeByKey(newEmployee, name) {
   newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
        delete employee[name]
        return employee;  
}

