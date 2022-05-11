import express from 'express';
import { allTools } from '../data/tools.js';

const router = express.Router();

router.get('/tools', (req, res) => {
  res.json({data: allTools})
})

export default router;