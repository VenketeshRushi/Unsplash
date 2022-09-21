import { Route, Routes } from "react-router-dom";
import Advertise from "./Advertise";
import Blog from "./Blog";
import CommonPage from "./CommonPage";
import Explore from "./Explore";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/advertise" element={<Advertise />}></Route>
        <Route path="/commonpage/:id" element={<CommonPage />}></Route>
      </Routes>
    </>
  );
}
export default AllRoutes;
