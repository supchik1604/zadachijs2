function getLeapYears() {
    let currentYear = new Date().getFullYear();
    let leapYears = [];
    
    for (let year = currentYear - 100; year < currentYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }
    
    return leapYears;
}

