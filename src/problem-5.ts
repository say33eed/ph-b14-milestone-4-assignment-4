interface Summary {
    total: number
    average: number
}



function getQuizSummary(scores: number[]): Summary  {
    let total: number = scores.reduce((total: number, score: number): number => {return total + score}, 0);
    let average: number = Number((total / scores.length).toFixed(1));

    return{
        total: total,
        average: average
    }
}
