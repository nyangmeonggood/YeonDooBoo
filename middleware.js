import routes from "./routes";

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = `Yeondooboo`;
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: "testId",
  };
  next();
};
