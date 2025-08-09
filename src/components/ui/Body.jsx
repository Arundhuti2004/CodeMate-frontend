import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { addUser } from "../../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(user.data));
    } catch (error) {
      if (error.response?.status == 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if(!user){   // login na taklei fetchUser() call hbe 
      fetchUser();
    }
  },[user])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
