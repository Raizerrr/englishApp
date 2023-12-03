//Layout
import {
  OnlySidebarLayout,
  ProfileLayout,
  PremiumLayout,
  SettingLayout,
} from "../component/Layout";
import LoginLayout from "../component/LoginLayout";

//components

//pages
import learn from "../pages/Learn/learn";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import Profile from "../pages/Profile/Profile";
import Register from "../component/LoginLayout/Register";
import PremiumIntro from "../component/Layout/PremiumLayout/PremiumIntro";
import Quest from "../pages/Quest/Quest";
import Shop from "../pages/Shop/Shop";
import License from "../pages/License/License";
import Lesson from "../pages/Lesson/Lesson";
import Setting from "../pages/SettingPage/Setting";
import ChangePassword from "../pages/ChangePassword";
import Notification from "../pages/Notification";
import SuperPackInfomation from "../pages/SuperpackInformation";
import EmailRequestPending from "../pages/EmailRequestPending";
import Practices from "../pages/Practices";
import ReadQuestionPage from "../pages/ReadQuestionPage";
import THPTQGExams from "../pages/THPTQGExams";
import Payment from "../pages/Payment";

//pubic routes
const publicRoutes = [
  { path: "/learn", component: learn },
  { path: "/", component: learn },
  { path: "/practices", component: Practices },
  { path: "/readQuestionPage", component: ReadQuestionPage },
  { path: "/thptqgexams", component: THPTQGExams },
  { path: "/leaderBoard", component: LeaderBoard },
  { path: "/license", component: License, layout: OnlySidebarLayout },
  { path: "/premium", component: PremiumIntro, layout: PremiumLayout },
  { path: "/payment", component: Payment, layout: PremiumLayout },
  { path: "/quest", component: Quest },
  { path: "/shop", component: Shop },
  { path: "/profile", component: Profile, layout: ProfileLayout },
  { path: "/setting", component: Setting, layout: SettingLayout },
  { path: "/changePassword", component: ChangePassword, layout: SettingLayout },
  { path: "signin/changePassword", component: ChangePassword, layout: null },
  {
    path: "signin/emailRequestPending",
    component: EmailRequestPending,
    layout: null,
  },
  {
    path: "/superInfomation",
    component: SuperPackInfomation,
    layout: SettingLayout,
  },

  { path: "/notification", component: Notification, layout: SettingLayout },
  { path: "/lesson", component: Lesson, layout: null },
  { path: "/signin", component: LoginLayout, layout: null },
  { path: "register", component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
