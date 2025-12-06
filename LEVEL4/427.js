function getWeekDays() {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let today = new Date();
    let currentDay = today.getDay();
    
    let prevDay = currentDay === 0 ? 6 : currentDay - 1;
    let nextDay = currentDay === 6 ? 0 : currentDay + 1;
    
    return {
        prev: days[prevDay],
        curr: days[currentDay],
        next: days[nextDay]
    };
}

