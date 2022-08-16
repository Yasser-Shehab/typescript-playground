let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  if (showMsg) {
    return `Hello ${name} Age Is ${age},Salary Is`;
  }

  return "No Data";
}

console.log(showDetails("Yasser", 25, 5000));
console.log(showDetails("Yasser", 25, 5000));
