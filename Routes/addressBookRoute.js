import express from 'express';

import { getForm } from '../Methods/addressBook.js';

const router = express.Router();

router.get('/get', getForm);
// router.get('/find', findData);
// router.post('/create', createForm);

export default router;
