import MainRouter from "../components/MainRouter";
import Home from "../pages/Home";
import Causes from "../pages/Causes";
import CausesDetail from "../pages/CausesDetail";
import DonateNow from "../pages/DonateNow";
import Events from "../pages/Events";
import EventsDetail from "../pages/EventsDetail";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Volunteer from "../pages/Volunteer";
import OurTeam from "../pages/OurTeam";
import Sponsors from "../pages/Sponsors";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminRouter from "../components/AdminRouter";
import CauseAdd from "../pages/Admin/CauseAdd/CauseAdd";
import CommentAdd from "../pages/Admin/CommentAdd/CommentAdd";
import EventAdd from "../pages/Admin/EventAdd/EventAdd";
import GalleryAdd from "../pages/Admin/GalleryAdd/GalleryAdd";
import NewsAdd from "../pages/Admin/NewsAdd/NewsAdd";
import ReadAdd from "../pages/Admin/ReadAdd/ReadAdd";
import RecentAdd from "../pages/Admin/RecentAdd/RecentAdd";
import TeamAdd from "../pages/Admin/TeamAdd/TeamAdd";
import VolunteerAdd from "../pages/Admin/VolunteerAdd/VolunteerAdd";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
const ROUTES = [
  {
    path: "/",
    element: <MainRouter />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "causes",
        element: <Causes />,
      },
      { path: "causes/:id", element: <CausesDetail /> },
      {
        path: "donatenow",
        element: <DonateNow />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "events/:id",
        element: <EventsDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "ourteam",
        element: <OurTeam />,
      },
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRouter />,
    children: [
      { path: "", element: <AdminHome/> },
      { path: "causeAdd", element: <CauseAdd /> },
      { path: "commentAdd", element: <CommentAdd/> },
      { path: "eventAdd", element: <EventAdd/> },
      { path: "galleryAdd", element: <GalleryAdd/> },
      { path: "newsAdd", element: <NewsAdd/> },
      { path: "readAdd", element: <ReadAdd/>},
      { path: "recentAdd", element: <RecentAdd/> },
      { path: "teamAdd", element: <TeamAdd/> },
      { path: "volunteerAdd", element: <VolunteerAdd/> },
    ],
  },
];

export default ROUTES;
