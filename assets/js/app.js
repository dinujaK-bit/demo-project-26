console.log("JS LOADED");

function setday() {
    let year = Number(document.getElementById("year").value);
    let month = Number(document.getElementById("month").value);
    let date = Number(document.getElementById("date").value);
    let resultBox = document.getElementById("result");

    // Basic validation
    if (!year || !month || !date || month < 1 || month > 12 || date < 1 || date > 31) {
        resultBox.className = "result-box show error";
        resultBox.textContent = "Please enter a valid year, month (1–12), and date (1–31).";
        return;
    }

    let ynote = year - Math.floor((14 - month) / 12);
    let x = ynote + Math.floor(ynote / 4) - Math.floor(ynote / 100) + Math.floor(ynote / 400);
    let mnote = month + 12 * Math.floor((14 - month) / 12) - 2;
    let dnote = (date + x + Math.floor((31 * mnote) / 12)) % 7;

    let dayName = "";

    switch (dnote) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }

    console.log(dayName);

    resultBox.className = "result-box show success";
    resultBox.innerHTML = `
        <span class="result-label">${date}/${month}/${year} falls on a</span>
        <span class="result-day">${dayName}</span>
    `;
}