import passport, { Strategy } from "passport";
import { githubLoginCallback } from "./controller/globalController";
import User from "./models/User";
import routes from "./routes.js";
import GithubStrategy from "passport-github";
import dotenv from "dotenv";
dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
