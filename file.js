const { readFile, writeFile } = require('fs');

readFile('./contents/files/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(result);
    const first = result;

    readFile('./contents/files/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(result);
        const second = result;

        writeFile('./contents/files/result-async.txt', `Here are the results: ${first}, ${second}`, 'utf8', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully');
        });
    });
});
