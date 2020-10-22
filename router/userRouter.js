import express from "express";
import {
  getEditProfile,
  postEditProfile,
  userDetail,
  users,
} from "../controller/userController";
import { uploadAvatar } from "../middleware";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, uploadAvatar, postEditProfile);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
