const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/dbInfo', (req, res)=>{
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: 'allergyawarenessapp'
    })

    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});