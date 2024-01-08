// import React from "react";
// import { useSignOut } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import { auth } from "../utils/firebase";

// const Navbar = () => {
//   const [signOut] = useSignOut(auth);

//   return (
//     <div>
//       <Link onClick={() => signOut()} to="/login">
//         Logout
//       </Link>
//     </div>
//   );
// };

// export default Navbar;

import { auth } from "../utils/firebase";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar bg-base-100 container max-auto mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* --------for mobile view navbar ul----- */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="all-products">All Products</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to="signup">Signup</NavLink>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl uppercase">
          user feedback
        </a>
      </div>

      {/* ---------------for large device ul view----------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="all-products">All Products</NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="signup">Signup</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
