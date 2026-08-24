function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((total: number, expense: number): number =>{return total + expense}, 0);
}

console.log(calculateWeeklyTotal([200, 450, 100]));