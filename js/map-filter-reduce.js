const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const theEmails = users.map(user => user.email);
// console.log(theEmails)

const theLanguages = users.filter(lang =>lang.languages.length >= 3)
// console.log(theLanguages)

const totalYearsExp = users.reduce ((acc, curr)=>{
    return acc + curr.yearsOfExperience},
    0
);
const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');
console.log(longestEmail)

const usersNamesInAString = users.reduce((acc, curr, index,array)=>{
    if (index === array.length ){
    acc.push(users.name);
    let report = '';
    report += acc.join(", ");

} else {
    acc.push(curr.name)}
    return acc
    }
    ,[])
console.log(usersNamesInAString)

