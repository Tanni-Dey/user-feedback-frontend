import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const [signOut] = useSignOut(auth);

  return (
    <div>
      <Link onClick={() => signOut()} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
