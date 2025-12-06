function daysToDate(month, day) {
    let today = new Date();
    let currentYear = today.getFullYear();
    let targetDate = new Date(currentYear, month - 1, day);
    let todayDate = new Date(currentYear, today.getMonth(), today.getDate());
    
    let diffTime = targetDate - todayDate;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

