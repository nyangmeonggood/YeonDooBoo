import express from "express";
import {
  home,
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
  search,
} from "../controller/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

export default globalRouter;
