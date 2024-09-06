import express from 'express';
import { generateDyteTokensController } from '../../../controllers/dyteTokenControllers';

let dyteTokenRouter = express.Router();

dyteTokenRouter.post("/", generateDyteTokensController);

export default dyteTokenRouter;