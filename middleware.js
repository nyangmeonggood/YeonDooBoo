import routes from "./routes";
import multer from "multer";

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = `Yeondooboo`;
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: "testId",
  };
  next();
};

const multerVideo = multer({ dest: "uploads/videos/" });
export const uploadVideo = multerVideo.single("videoFile");
