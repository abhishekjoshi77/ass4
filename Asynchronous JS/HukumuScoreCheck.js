function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((acc, score) => acc + score, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you haven't cleared the HUKUMU round.");
            }
        }, 2000);
    });
}
