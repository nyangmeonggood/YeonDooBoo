import mongoose from "mongoose";
import passportMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  githubId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

userSchema.plugin(passportMongoose, { usernameField: "email" });
mongoose.set("useCreateIndex", true);
const model = mongoose.model("User", userSchema);
export default model;
