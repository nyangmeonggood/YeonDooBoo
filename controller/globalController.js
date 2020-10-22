import routes from "../routes";
import passport from "passport";
import Video from "../models/Video";
import User from "../models/User.js";

export const home = async (req, res) => {
  try {
    const videoDB = await Video.find({}).populate("creator").sort({ _id: -1 });
    res.render("home", { pageName: "메인", videoDB });
    console.log(req.user);
  } catch (error) {
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
    res.redirect(routes.home);
  }
};

export const getJoin = (req, res) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    res.render("join", { pageName: "회원가입" });
  }
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
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};
export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};
export const githubLogin = passport.authenticate("github");

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
