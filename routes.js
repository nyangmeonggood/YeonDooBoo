//global
const HOME = "/",
  SEARCH = "/search",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout";

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

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
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
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
