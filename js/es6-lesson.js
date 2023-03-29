// const HelloWorld = (name) => {
//     return `hello, ${name}!`;
// }
// let response = HelloWorld();
// console.log(response)
//
// const getPerson = async (id = 1) => {
//     let response = await fetch('url')
//     let data = await response.json();
//     console.log(data.name);
// }

// const getEmployee = (id) => {
//    // let response = fetch();
//    // let data = await response.json();
//    let firstName = data.name.split(' ')[0];
//    let lastName = data.name.split(' ')[1];
//    // return {
//    //     firstName: firstName,
//    //     lastName: lastName
//    // }
//     return {
//         firstName,
//         lastName,
//         email: 'zion@yomama.com'
//     }
// }

// object Deconstruction Shorthand
let employee = {
    firstName: 'Yo',
    lastName: 'mama',
    email: 'yomamadawg@gmail.com',
    position: 'Cool Guy',
    startDate: '2020-01-01'
}
let {firstName, lastName, email, position, startDate} = employee;
console.log(firstName);

employee.forEach(async employee=>console.log(employee.name));