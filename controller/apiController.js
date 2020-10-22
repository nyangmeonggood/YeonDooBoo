import routes from "../routes";
import passport from "passport";
import Video from "../models/Video";
import User from "../models/User.js";

export const postRegisterview = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
    res.end();
  } finally {
    res.end();
  }
};
