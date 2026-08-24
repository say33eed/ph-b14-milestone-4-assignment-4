"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    if (light === "yellow") {
        return "Slow Down";
    }
    return "Go";
}
//# sourceMappingURL=problem-4.js.map