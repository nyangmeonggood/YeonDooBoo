import express from "express";
import { postRegisterview } from "../controller/apiController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterview);

export default apiRouter;
