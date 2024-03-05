require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user'); // import the routes

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

app.use('/api/users', userRoutes); // use the routes

// ... rest of your server setup, including database connection and listening on a port

// Connect to Database

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
