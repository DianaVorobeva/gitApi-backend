import express from 'express';
import { entervalFetch } from '../Controllers/GitHubApiController.js';



const router = express.Router();

router.get('/', entervalFetch);

export default router;