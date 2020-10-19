import routes from "../routes";

export const videos = (req, res) => {
  res.redirect("/");
};
export const upload = (req, res) => {
  res.send("upload");
};
export const videoDetail = (req, res) => {
  res.send("videoDetail");
};
export const editVideo = (req, res) => {
  res.send("editVideo");
};
export const deleteVideo = (req, res) => {
  res.send("deleteVideo");
};
