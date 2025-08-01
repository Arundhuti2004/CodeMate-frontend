import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((store) => store.user);
  console.log(user);
  
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-neutral shadow-sm ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🤝CodeMate</a>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {user && <div className="w-10 rounded-full">
                <img
                  alt="User Photo"
                  src={user.photoUrl}
                />
              </div>}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
