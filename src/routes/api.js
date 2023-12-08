import express from 'express';

import { baseController } from '../controllers/baseController.js';
import { userController } from '../controllers/userController.js';

const router = express.Router();

router.get('/', baseController);
router.post('/api/user-create', userController);

export default router;
