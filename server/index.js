require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/api.route.js');

const app = express();
app.use(cors({ origin: '*' }));
app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.all('*', (req, res) => res.json({
    message: "Not Found",
    status: 404
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));