import express from "express";
import {
  home,
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
  search,
  githubLogin,
  postGithubLogin,
} from "../controller/globalController";
import routes from "../routes";
import passport from "passport";
import { getMe } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.mypage, getMe);

globalRouter.get(routes.logout, logout);

export default globalRouter;
