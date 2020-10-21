import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videoDB = await Video.find({}).sort({ _id: -1 });
    console.log(videoDB);
    res.render("home", { pageName: "메인", videoDB });
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
export const postJoin = (req, res) => {
  const {
    body: { /*name, email,*/ password, passwordConfirm },
  } = req;
  if (password !== passwordConfirm) {
    res.status(400);
    res.render("join", { pageName: "회원가입" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageName: "로그인" });
};
export const postLogin = (req, res) => {
  res.render("login", { pageName: "로그인" });
};

export const logout = (req, res) => {
  res.send("logout");
};
