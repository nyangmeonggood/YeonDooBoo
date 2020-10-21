import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalRouter from "./router/globalRouter.js";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import { localMiddleWare } from "./middleware";

var app = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(localMiddleWare);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
