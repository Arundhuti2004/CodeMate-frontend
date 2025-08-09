import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/ui/Body";
import Login from "./components/ui/Login";
import Feed from "./components/ui/Feed";
import Profile from "./components/ui/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </>
  );
}

export default App;
