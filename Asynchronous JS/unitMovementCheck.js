function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const overallAverage = (averageCodingScore + averageHukumuScore) / 2;

            if (overallAverage >= cutoff) {
                resolve(overallAverage);
            } else {
                reject("Sorry, you haven't cleared the final cutoff.");
            }
        }, 2000);
    });
}
