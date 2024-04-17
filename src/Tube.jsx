import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage/HomePage";
import VideoPage from "./Components/Pages/VideoPage/VideoPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import Layout from "./Components/Layout/Layout";
import LayoutSidebar from "./Components/Layout/LayoutSidebar";
import ChannelPage from "./Components/Pages/ChannelPage/ChannelPage";
import ExplorePage from "./Components/Pages/ExplorePage/ExplorePage";
import FeedbackPage from "./Components/Pages/FeedbackPage/FeedbackPage";
import Profile from "./Components/Pages/ProfilePage/Profile";
import CreateAccount from "./Components/Pages/CreateAccount/CreateAccount";
import UserProfileContextProvider from "./Contexts/UserProfileContextProvider";
import SidebarContextProvider from "./Contexts/SidebarContextProvider";
import LikeButtonContextProvider from "./Contexts/LikeButtonContextProvider";
import SearchContextProvider from "./Contexts/SearchContextProvider";
import { videos } from "./data/videos";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import ScrollToTop from "./Components/Common/ScrollToTop";

const Tube = () => {
  return (
    <SearchContextProvider>
      <SidebarContextProvider>
        <UserProfileContextProvider>
          <LikeButtonContextProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/video-page/" element={<VideoPage />} />

                {videos.map((video, index) => (
                  <Route
                    key={index}
                    path={`/video-page/${index + 1}`}
                    element={<VideoPage videoUrl={video.videoUrl} id={index} />}
                  />
                ))}

                <Route path="/channel-page/Apple" element={<ChannelPage channelName={"Apple"} />} />
                <Route path="/channel-page/EAGames" element={<ChannelPage channelName={"EA Games"} />} />
                <Route path="/channel-page/FIFA" element={<ChannelPage channelName={"FIFA"} />} />
                <Route path="/channel-page/LiveMusic" element={<ChannelPage channelName={"Live Music"} />} />
                <Route path="/channel-page/Microsoft" element={<ChannelPage channelName={"Microsoft"} />} />
                <Route path="/channel-page/MKBHD" element={<ChannelPage channelName={"MKBHD"} />} />
                <Route path="/channel-page/Nintendo" element={<ChannelPage channelName={"Nintendo"} />} />
                <Route path="/channel-page/Samsung" element={<ChannelPage channelName={"Samsung"} />} />
                <Route path="/channel-page/SteveVai" element={<ChannelPage channelName={"Steve Vai"} />} />
                <Route path="/channel-page/NBA" element={<ChannelPage channelName={"NBA"} />} />

                <Route path="/explore" element={<ExplorePage />} />
              </Route>

              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/secondary" element={<LayoutSidebar />}>
                <Route path="/secondary/explore" element={<ExplorePage />} />
                <Route path="/secondary/video" element={<VideoPage />} />
              </Route>
            </Routes>
          </LikeButtonContextProvider>
        </UserProfileContextProvider>
      </SidebarContextProvider>
    </SearchContextProvider>
  );
};

export default Tube;
