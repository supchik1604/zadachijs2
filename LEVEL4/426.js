function daysUntilMonthEnd() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let lastDay = new Date(currentYear, currentMonth + 1, 0);
    let daysLeft = lastDay.getDate() - today.getDate();
    return daysLeft;
}

