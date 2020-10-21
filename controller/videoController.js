import routes from "../routes";
import Video from "../models/Video";

export const videos = (req, res) => {
  res.redirect("/");
};

export const getUpload = (req, res) => {
  res.render("upload", { pageName: "업로드" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  try{
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: path,
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo._id));
  }catch(error){
    console.log(error)
    res.redirect(routes.home)
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("videoDetail", { pageName: video.title, video });
  }catch(error){
    console.log(error)
    res.redirect(routes.home)
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("editVideo",{pageName:video.title, video});
  }catch(error){
    console.log(error)
    res.redirect(routes.home)
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body:{title, description}
  } = req;
  try{
    await Video.findOneAndUpdate({_id:id},{title,description})
    res.redirect(routes.videoDetail(id))
  }catch(error){
    console.log(error)
    res.redirect(routes.editVideo(id))
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try{
    await Video.findByIdAndRemove({_id:id})
  }catch(error){
    console.log(error)
  }finally{
    res.redirect(routes.home)
  }
};
