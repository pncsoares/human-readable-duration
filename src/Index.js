const divisions = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' }
];

const relativeDateFormatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: 'auto'
});

function calculateDatesDuration() {
    const startDate = findHtmlElementAndGetItsValue('start');
    const endDate = findHtmlElementAndGetItsValue('end');

    const startDateFormatted = transformDateToDateUsFormat(startDate);
    const endDateFormatted = transformDateToDateUsFormat(endDate);

    const duration = formatRelativeDate(startDateFormatted, endDateFormatted);
    showDuration(duration);
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

function transformDateToDateUsFormat(date) {
    return new Date(date);
}

function formatRelativeDate(toDate, fromDate = new Date()) {
    let duration = (toDate - fromDate) / 1000;

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