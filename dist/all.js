"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-01: Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage < 0 || percentage > 100) {
        return "Invalid";
    }
    if (percentage <= 20) {
        return "Low";
    }
    if (percentage <= 50) {
        return "Medium";
    }
    if (percentage <= 90) {
        return "High";
    }
    return "Full";
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses) {
    return expenses.reduce((total, expense) => { return total + expense; }, 0);
}
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    if (light === "yellow") {
        return "Slow Down";
    }
    return "Go";
}
function getQuizSummary(scores) {
    let total = scores.reduce((total, score) => { return total + score; }, 0);
    // let average: number = Number((total / scores.length).toFixed(1));
    let average = scores.length > 0 ? total / scores.length : 0;
    return {
        total: total,
        average: average
    };
}
//# sourceMappingURL=all.js.map