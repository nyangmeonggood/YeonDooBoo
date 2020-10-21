import routes from "../routes";

export const users = (req, res) => {
  res.redirect("/");
};
export const editProfile = (req, res) => {
  res.send("editProfile");
};
export const changePassword = (req, res) => {
  res.render("changePassword", { pageName: "비밀번호 변경" });
};
export const userDetail = (req, res) => {
  res.send("userDetail");
};
