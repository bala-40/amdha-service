import express from "express";
import { addParticipantToAzureMeetingController, createAzureMeetingController } from "../../controllers/azureMeetingControllers";

let meetingRouter = express.Router();

meetingRouter.post("/a", createAzureMeetingController)
meetingRouter.post("/a/add", addParticipantToAzureMeetingController)

export default meetingRouter ;