function isValidDate(dateStr) {
    let parts = dateStr.split('-');
    if (parts.length !== 3) return false;
    
    let year = parseInt(parts[0]);
    let month = parseInt(parts[1]);
    let day = parseInt(parts[2]);
    
    if (isNaN(year) || isNaN(month) || isNaN(day)) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1) return false;
    
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) daysInMonth[1] = 29;
    
    return day <= daysInMonth[month - 1];
}

