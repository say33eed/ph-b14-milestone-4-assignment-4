"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuizSummary(scores) {
    let total = scores.reduce((total, score) => { return total + score; }, 0);
    let average = Number((total / scores.length).toFixed(1));
    return {
        total: total,
        average: average
    };
}
//# sourceMappingURL=problem-5.js.map