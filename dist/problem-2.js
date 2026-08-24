"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }));
//# sourceMappingURL=problem-2.js.map