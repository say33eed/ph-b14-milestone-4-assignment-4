"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(getBatteryStatus(66));
//# sourceMappingURL=problem-1.js.map