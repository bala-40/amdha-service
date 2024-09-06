import express from "express";
import { createDyteMeetingController, deactivateDyteMeetingController } from "../../../controllers/dyteMeetingControllers";

let dyteMeetingRouter = express.Router();

dyteMeetingRouter.post("/", createDyteMeetingController);
dyteMeetingRouter.delete("/", deactivateDyteMeetingController);

export default dyteMeetingRouter;