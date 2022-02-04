import express from 'express';

import { getForm, createForm, findData } from '../Methods/broker.js';

const router = express.Router();

router.get('/get', getForm);
router.get('/find', findData);
router.post('/create', createForm);

export default router;
