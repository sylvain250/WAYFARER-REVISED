// this file is for spinning the express
import express from 'express';
import authRoutes from './routes/auth';
const app = express();
import bodyParser from 'body-parser';


// const userRoutes = require('./routes/user');
// const tripsRoutes = require('./routes/trips');
// const bookingsRoutes = require('./routes/bookings');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth',authRoutes);
// app.use('/trips', tripsRoutes);
// app.use('/bookings', bookingsRoutes);
// app.use('/user', userRoutes);

export default app;
