import express from "express";
import { addParticipantToAzureMeetingController, createAzureMeetingController } from "../../../controllers/azureMeetingControllers";

let azureMeetingRouter = express.Router();

azureMeetingRouter.post("/", createAzureMeetingController)
azureMeetingRouter.post("/add", addParticipantToAzureMeetingController)

export default azureMeetingRouter ;