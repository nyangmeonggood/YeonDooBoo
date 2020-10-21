import routes from "../routes";
import passport from "passport";
import Video from "../models/Video";
import User from "../models/User.js";

export const home = async (req, res) => {
  try {
    const videoDB = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageName: "메인", videoDB });
    console.log(req.user);
  } catch (error) {
    console.log(error);
    res.render("home", { pageName: "메인", videoDB: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { searchingBy },
  } = req;
  let videoDB = [];
  try {
    videoDB = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
    res.render("search", { searchingBy, pageName: searchingBy, videoDB });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageName: "회원가입" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, passwordConfirm },
  } = req;
  if (password !== passwordConfirm) {
    res.status(400);
    res.render("join", { pageName: "회원가입" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageName: "로그인" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
