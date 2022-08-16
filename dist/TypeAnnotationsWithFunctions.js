"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name} Age Is ${age},Salary Is`;
    }
}
console.log(showDetails("Yasser", 25, 5000));
