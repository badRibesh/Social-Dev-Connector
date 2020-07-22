const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DB
connectDB();

// Init Middlware

app.use(express.json({ extented: true }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/v1/users/', require('./routes/api/users'));
app.use('/api/v1/posts/', require('./routes/api/posts'));
app.use('/api/v1/auth/', require('./routes/api/auth'));
app.use('/api/v1/profile/', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing and up ${PORT}`));
