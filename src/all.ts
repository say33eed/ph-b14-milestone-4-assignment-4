//Problem-01: Battery Level Status
    function getBatteryStatus(percentage: number): string {
        
        if(percentage < 0 || percentage > 100){
            return "Invalid";
        }
        
        if(percentage <= 20){
            return "Low";
        }
        
        if(percentage <= 50){
            return "Medium";
        }
        
        if(percentage <= 90){
            return "High";
        }
        
        return "Full";
        
    }

//Problem-02: Table Booking Confirmation
interface BookingInfoBlueprint {
    name: string
    guests: number
    time: string
}

function formatBookingConfirmation(booking: BookingInfoBlueprint): string{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((total: number, expense: number): number =>{return total + expense}, 0);
}

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";



function getTrafficAction(light: Light): string {
    if(light === "red"){
        return "Stop";
    }

    if(light === "yellow"){
        return "Slow Down";
    }

    return "Go";
}

//Problem-05: Quiz Score Summary
interface Summary {
    total: number
    average: number
}



function getQuizSummary(scores: number[]): Summary  {
    let total: number = scores.reduce((total: number, score: number): number => {return total + score}, 0);

    // let average: number = Number((total / scores.length).toFixed(1));

    let average: number = scores.length > 0 ? total / scores.length : 0;


    return{
        total: total,
        average: average
    }
}


