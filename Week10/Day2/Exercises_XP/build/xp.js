"use strict";
/*🌟 Exercise 1: Class with Access Modifiers */
function printUserDetails(user) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
    else {
        console.log('Membership Level: Not specified');
    }
}
const premiumUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    membershipLevel: 'Gold'
};
printUserDetails(premiumUser);
