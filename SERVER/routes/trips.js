import express from 'express';
import {trips, addTrip} from '../controllers/trips';
const router = express.Router();

router.get('/trips',trips);
router.post('/trips',addTrip);

export default router;