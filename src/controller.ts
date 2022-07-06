import express from 'express';
import IService from './interfaces/IService';
import container from './inversify.config';
import TYPES from './types';

const router = express.Router();

let service = container.get<IService>(TYPES.IService);

router.get('/', (req, res) => service.root(req, res));

export default router;