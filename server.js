const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/dbInfo', (req, res)=>{
    const mysql = require('mysql')
    //Database connection to the Allergy Awareness App database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'allergyawarenessapp'
    })

    connection.connect()

    //Get barcode from the front side (post request includes the barcode)
    var barcode = req.body.barcode;
    var data;

    //Query the barcode to the database table 'products'
    connection.query("SELECT * from products where barcode = '" + barcode + "'", (err, rows, fields) => {
    if (err) throw err

    //Display results in console
    console.log('The solution is: ', rows)
    data = rows;
    })

    connection.end()

    res.send(JSON.stringify(data));
});

app.get('/test', (req, res) => {
    res.send('Testing!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});