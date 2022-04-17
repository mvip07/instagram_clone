import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Account from "./components/account/account";
import Login from "./components/account/Login";
import SignUp from "./components/account/SignUp";
import Loading from "./components/Loading";
import Likes from "./containers/Likes";
import Profile from "./containers/Profile";
import Search from "./containers/Search";
import YouLink from "./components/likes/YouLink";
import FollowingLink from "./components/likes/FollowingLink";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import ProfileEdit from "./containers/ProfileEdit";
import Createstory from "./containers/Createstory";
import MyPosts from "./containers/MyPosts";
import PrivateRouter from "./utils/PrivateRouter";
import UserProfile from "./User/Profile";
import ProfileEditUser from "./User/ProfileEditUser";
import UserPost from "./User/UserPost"
import Following from "./components/Following";
import Followers from "./components/Followers";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  setTimeout(() => {
    //const userToken = localStorage.getItem('user-token')
    localStorage.removeItem("user-token");
    navigate("/account")
  }, 3600000);

  const pathLink = [
    { path: "/", element: <PrivateRouter >  < Loading />  </ PrivateRouter> },
    { path: "/search", element: <PrivateRouter > < Search /> </ PrivateRouter> },
    { path: "/likes", element: <PrivateRouter > < Likes /> </ PrivateRouter> },
    { path: "/likes/you", element: <PrivateRouter > < YouLink /> </ PrivateRouter> },
    { path: "/likes/following", element: <PrivateRouter > < FollowingLink /> </ PrivateRouter> },
    { path: "/profile", element: <PrivateRouter > < Profile /> </ PrivateRouter> },
    { path: "/profileEdit", element: <PrivateRouter > < ProfileEdit /> </ PrivateRouter> },
    { path: "/account", element: < Account /> },
    { path: "/main", element: <PrivateRouter > < Main /> </ PrivateRouter> },
    { path: "/account/login", element: < Login /> },
    { path: "/account/signup", element: < SignUp /> },
    { path: "/createPost", element: <PrivateRouter > <Createstory /> </ PrivateRouter> },
    { path: "/myPosts", element: <PrivateRouter > < MyPosts /> </ PrivateRouter> },
    { path: "/user/:username/:id", element: <UserProfile /> },
    { path: "/user/:username/:id/secretSection/ProfileEditUser", element: <PrivateRouter > < ProfileEditUser /> </ PrivateRouter> },
    { path: "/:username/:id/userPost", element: <PrivateRouter > <UserPost /> </ PrivateRouter> },
    { path: "/following", element: <PrivateRouter > <Following /> </ PrivateRouter> },
    { path: "/followers", element: <PrivateRouter > <Followers /> </ PrivateRouter> },

  ]

  return (
    <Wrapper>
      <Routes>
        {pathLink.map(({ path, element }) => {
          return <Route
            key={Math.random()}
            path={path}
            element={element} />
        })}
      </Routes>
      {
        !(
          pathname === "/"
          || pathname === "/account"
          || pathname === "/account/login"
          || pathname === "/account/signup"
          || pathname === "/profileEdit"
        ) && <Footer />
      }
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow:hidden;
`
