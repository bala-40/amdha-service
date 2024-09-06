import express from "express";
import azureMeetingRouter from "./azure/meeting";
import azureTokenRouter from "./azure/tokens";
import dyteMeetingRouter from "./dyte/meeting";
import dyteTokenRouter from "./dyte/tokens";

let azureRouter = express.Router();
let dyteRouter = express.Router();

azureRouter.use("/meeting", azureMeetingRouter)
azureRouter.use("/tokens", azureTokenRouter);

dyteRouter.use("/meeting", dyteMeetingRouter);
dyteRouter.use("/tokens", dyteTokenRouter);

let apiRouter = express.Router();

apiRouter.use('/a', azureRouter);
apiRouter.use('/d', dyteRouter);

export {
    apiRouter
}