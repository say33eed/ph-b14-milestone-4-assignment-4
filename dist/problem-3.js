"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeklyTotal(expenses) {
    return expenses.reduce((total, expense) => { return total + expense; }, 0);
}
console.log(calculateWeeklyTotal([200, 450, 100]));
//# sourceMappingURL=problem-3.js.map