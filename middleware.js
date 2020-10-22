import routes from "./routes";
import multer from "multer";

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = `Yeondooboo`;
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
