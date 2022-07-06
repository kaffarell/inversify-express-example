import express from 'express';
import { root } from './service';

const router = express.Router();

router.get('/', root);

export default router;