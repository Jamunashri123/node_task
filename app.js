require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const timeRoutes = require('./routes/time');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/time', timeRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
