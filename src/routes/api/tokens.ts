import express from "express";
import { generateAzureTokensController, refreshAzureTokenController } from "../../controllers/azureTokenControllers";
import { refreshAzureTokens } from "../../helpers/azureHelper";

let tokenRouter = express.Router();

tokenRouter.post("/a", generateAzureTokensController)
tokenRouter.post("/a/refresh", refreshAzureTokenController)

export default tokenRouter;