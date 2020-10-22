//global
const HOME = "/",
  SEARCH = "/search",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout",
  MYPAGE = "/mypage";

//user
const USERS = "/users",
  EDIT_PROFILE = "/editProfile",
  CHANGE_PASSWORD = "/changePassword",
  USER_DETAIL = "/:id";

//video
const VIDEOS = "/videos",
  UPLOAD = "/upload",
  VIDEO_DETAIL = "/:id/",
  EDIT_VIDEO = "/:id/edit",
  DELETE_VIDEO = "/:id/delete";

//github
const GITHUB = "/auth/github",
  GITHUB_CALLBACK = "/auth/github/callback";

//api
const API = "/api",
  REGISTER_VIEW = "/:id/view",
  ADD_COMMENT = "/:id/comment";

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  logout: LOGOUT,
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  mypage: MYPAGE,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
};

export default routes;
