//Layout
import {
  OnlySidebarLayout,
  ProfileLayout,
  PremiumLayout,
} from "../component/Layout";
import LoginLayout from "../component/LoginLayout";

import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import Profile from "../pages/Profile/Profile";
import Register from "../component/LoginLayout/Register";
import Quest from "../pages/Quest/Quest";
import Shop from "../pages/Shop/Shop";
import License from "../pages/License/License";
import Lesson from "../pages/Lesson/Lesson";
import Setting from "../pages/SettingPage/Setting";
import ChangePassword from "../pages/SettingPage/ChangePassword";
import SuperInfomation from "../pages/SettingPage/SuperInfomation";
import Notification from "../pages/SettingPage/Notification";
import PremiumIntro from "../component/Layout/PremiumLayout/PremiumIntro";
import Learn from "../pages/Learn/learn";
//pubic routes
const publicRoutes = [
  { path: "/learn", component: Learn },
  { path: "/", component: Learn },
  { path: "/leaderBoard", component: LeaderBoard },
  { path: "/license", component: License, layout: OnlySidebarLayout },
  { path: "/premium", component: PremiumIntro, layout: PremiumLayout },
  { path: "/quest", component: Quest },
  { path: "/shop", component: Shop },
  { path: "/profile", component: Profile, layout: ProfileLayout },
  { path: "/setting", component: Setting, layout: null },
  { path: "/changePassword", component: ChangePassword, layout: null },
  { path: "/superInfomation", component: SuperInfomation, layout: null },
  { path: "/notification", component: Notification, layout: null },
  { path: "/lesson/:type/:questionType/:lessonNumber", component: Lesson, layout: null },
  { path: "/signin", component: LoginLayout, layout: null },
  { path: "register", component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
