import routes from "../routes";

export const users = (req, res) => {
  res.redirect("/");
};
export const editProfile = (req, res) => {
  res.send("editProfile");
};
export const changePassword = (req, res) => {
  res.send("changePassword");
};
export const userDetail = (req, res) => {
  res.send("userDetail");
};
