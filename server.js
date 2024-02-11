const express = require('express');
const app = express();
const port = 3002;
const fs = require('fs'); // Include the 'fs' module to read JSON file

app.use(express.static('public')); // Serve static files from the 'public' directory


// const budget = {
//     Mybudget: [
//         {
//             title: 'Eat out',
//             budget: 35
//         },
//         {
//             title: 'Rent',
//             budget: 375
//         },
//         {
//             title: 'Grocery',
//             budget: 110
//         }
//     ]
// };


app.get('/budget', (req, res) => {
    // Read the JSON file and send its content as a response
    fs.readFile('personal_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        try {
            const Mybudget = JSON.parse(data);
            res.json(Mybudget.budget);
        } catch (parseError) {
            console.error(parseError);
            res.status(500).json({ error: 'JSON Parsing Error' });
        }
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
}); 

// app.get('/budget', (req, res) => {
//     res.json(Mybudget);
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});