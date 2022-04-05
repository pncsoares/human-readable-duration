const divisions = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' }
];

let useTime = true;

function toggleTime() {
    const timeCheckbox = getHtmlElementById('checkbox-time');

    const startTime = getHtmlElementById('start-time');
    const endTime = getHtmlElementById('end-time');

    if (timeCheckbox.checked) {
        useTime = true;
        startTime.style.visibility = 'visible';
        endTime.style.visibility = 'visible';
    }
    else {
        useTime = false;
        startTime.style.visibility = 'hidden';
        endTime.style.visibility = 'hidden';
    }
}

function calculateDatesDuration() {
    try {
        const startDate = findHtmlElementAndGetItsValue('start-date');
        const endDate = findHtmlElementAndGetItsValue('end-date');

        const startTime = findHtmlElementAndGetItsValue('start-time');
        const endTime = findHtmlElementAndGetItsValue('end-time');

        const startDateFormatted = transformDateToDateUsFormat(startDate, startTime);
        const endDateFormatted = transformDateToDateUsFormat(endDate, endTime);

        const duration = formatRelativeDate(startDateFormatted, endDateFormatted);
        showDuration(duration);
    }
    catch (e) {
        alert(e);
    }
}

function findHtmlElementAndGetItsValue(elementId) {
    const element = getHtmlElementById(elementId);
    return getElementValue(element);
}

function getHtmlElementById(elementId) {
    return document.getElementById(elementId);
}

function getElementValue(element) {
    return element.value;
}

function transformDateToDateUsFormat(date, time) {
    if (!date) {
        throw new Error('You must chose a valid date!');
    }

    if (useTime && !time) {
        throw new Error('You must chose a valid time!');
    }

    const newDate = new Date(date);

    if (useTime) {
        const hour = Number(time.split(':')[0]);
        newDate.setHours(hour);

        const minute = Number(time.split(':')[1]);
        newDate.setMinutes(minute);

        return newDate;
    }

    return newDate;
}

function formatRelativeDate(toDate, fromDate = new Date()) {
    let duration = (toDate - fromDate) / 1000;

    const language = findHtmlElementAndGetItsValue('language');

    const relativeDateFormatter = new Intl.RelativeTimeFormat(language, {
        numeric: 'auto'
    });

    for (let i = 0; i <= divisions.length; i++) {
        const division = divisions[i];

        if (Math.abs(duration) < division.amount) {
            const roundedDuration = Math.round(duration);
            return relativeDateFormatter.format(roundedDuration, division.name);
        }

        duration /= division.amount;
    }
}

function showDuration(duration) {
    const durationLabel = getHtmlElementById('duration');
    durationLabel.innerText = duration;
}