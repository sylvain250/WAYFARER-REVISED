// this file is for spinning the express
import express from 'express';
import authRoutes from './routes/auth';
import tripRoutes from './routes/trips';
const app = express();
import bodyParser from 'body-parser';



// const bookingsRoutes = require('./routes/bookings');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth',authRoutes);
app.use('/', tripRoutes);
// app.use('/trips', tripsRoutes);
// app.use('/bookings', bookingsRoutes);
// app.use('/user', userRoutes);

export default app;
