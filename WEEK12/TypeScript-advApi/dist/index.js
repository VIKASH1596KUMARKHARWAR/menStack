"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({
    name: "vikash",
    age: 21
}, {
    name: "Ishu",
    age: 20
});
console.log(result);
