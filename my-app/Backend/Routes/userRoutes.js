import {register, verify,login,logout} from '../Controllers/userController.js';

import express from 'express';
const router =express.Router();

router.route('/register').post(register);
router.route('/verify').post(verify);
router.route('/login').post(login);
router.route('/logout').post(logout);
export default router;