require ("dotenv").config()
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')


// Middleware
app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/",(req, res) => res.send('Hello Group8!'));
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));