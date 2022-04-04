# Human Readable Duration

Duration in a way that humans can read and understand 🕐

# Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/docs/)

# Setup

## Clone repository

Create and go to the directory where you want to place the repository

```bash
  cd my-directory
```

Clone the project

```bash
  git clone https://github.com/pncsoares/human-readable-duration.git
```

Go to the project directory

```bash
  cd human-readable-duration
```

## How to execute

1. Open terminal
1. Go to the projects root folder `human-readable-duration`
1. Run the command `npm i` to install dependencies
1. Add examples so you can test different scenarios:

   Open `src/Index.js` file and add the following code at the bottom of the file
    ```bash
        const currentDate = new Date();
        const twoMonthsAgo = new Date().setMonth(currentDate.getMonth() - 2);
        const yesterday = new Date().setDate(currentDate.getDate() - 1);
        const nineDaysAgo = new Date().setDate(currentDate.getDate() - 9);
        console.log("Two Months Ago:", formatRelativeDate(twoMonthsAgo));
        console.log("Yesterday:", formatRelativeDate(yesterday));
        console.log("Nine Days Ago:", formatRelativeDate(nineDaysAgo));
        console.log("Yesterday vs Nine Days Ago:", formatRelativeDate(yesterday, nineDaysAgo));
    ```
1. Run the following command to test:
    ```
    node src/Index.js
    ```
1. If you want to use other languages, you just need to change the `undefined` value to `'pt-pt'`, `'es-sp'`, `'fr-fr'`, `'de-de'`, etc.
    ```bash
    # example to english
    const relativeDateFormatter = new Intl.RelativeTimeFormat(undefined, {
        numeric: 'auto'
    });

    # example to portuguese
    const relativeDateFormatter = new Intl.RelativeTimeFormat('pt-pt', {
        numeric: 'auto'
    });
    ```

# License

MIT