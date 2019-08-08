import express from 'express';
import { signup,signin} from '../controllers/auth';
import {trips} from '../controllers/trips';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/trips',trips);

export default router;