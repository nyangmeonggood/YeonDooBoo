import express from "express";
import { postRegisterview } from "../controller/apiController";
import { postAddComment } from "../controller/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterview);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
