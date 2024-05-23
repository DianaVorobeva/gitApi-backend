import express from 'express';
import { getAllRepos, getRepoByNameOrId } from '../Controllers/GetDateDBController.js';




const router = express.Router();

router.get('/', getAllRepos);
router.get('/:search', getRepoByNameOrId);


export default router;