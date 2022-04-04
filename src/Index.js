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