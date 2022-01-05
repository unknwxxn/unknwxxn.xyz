function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

setInterval(function () {
    function formatAMPM() {
        var d = new Date(),
            hours = zero_first_format(d.getHours()),
            minutes = zero_first_format(d.getMinutes()),
            seconds = zero_first_format(d.getSeconds()),
            months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time = `<font size="4">${hours}:${minutes}:${seconds}</font>`,
            weekday = `<center> ${days[d.getDay()]}`,
            day = `<center> ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
        return time + weekday + day;
    }
    document.getElementById('time_block').innerHTML = formatAMPM();
}, 10);
