import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Login from "../components/login/login";
import SignIn from "../components/login/signin";
import PhotoDetails from "../components/photoDetail/photoDetail";
import Photographer from "../components/photographer/photographer";

function pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/photographer" element={<Photographer />} />
      <Route path="/photographer/:id" element={<PhotoDetails />} />
    </Routes>
  );
}

export default pages;
