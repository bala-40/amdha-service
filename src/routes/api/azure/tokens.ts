import express from "express";
import { generateAzureTokensController, refreshAzureTokenController } from "../../../controllers/azureTokenControllers";

let azureTokenRouter = express.Router();

azureTokenRouter.post("/a", generateAzureTokensController)
azureTokenRouter.post("/a/refresh", refreshAzureTokenController)

export default azureTokenRouter;