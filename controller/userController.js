import routes from "../routes";
import User from "../models/User.js";

export const users = (req, res) => {
  res.redirect("/");
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageName: "프로필 수정" });
};
export const postEditProfile = async (req, res) => {
  const {
    body: { name, email, oldPassword, newPassword, newPasswordConfirm },
    file,
  } = req;
  try {
    if (newPassword !== newPasswordConfirm) {
      res.status(400);
      res.redirect(`/users${routes.editProfile}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl,
    });
    res.redirect(routes.mypage);
  } catch (error) {
    res.status(400);
    res.redirect(`/users${routes.editProfile}`);
  }
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).populate("videos");
  console.log(user);
  res.render("userDetail", { pageName: "마이페이지", user });
};
export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", { pageName: user.name, user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
