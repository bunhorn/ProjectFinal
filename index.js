const express = require('express');
const { student } = require('./src/routes/studentRoute');
const { teacher } = require('./src/routes/teacherRoute');
const { product } = require('./src/routes/productRoute');
const pool = require('./src/config/db');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

student(app);
teacher(app);
product(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});