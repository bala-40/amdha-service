import express from "express";
import { generateAzureTokensController, refreshAzureTokenController } from "../../../controllers/azureTokenControllers";

let azureTokenRouter = express.Router();

azureTokenRouter.post("/", generateAzureTokensController)
azureTokenRouter.post("/refresh", refreshAzureTokenController)

export default azureTokenRouter;