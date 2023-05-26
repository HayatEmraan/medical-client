import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { AuthData } from "../../Context/AuthContext";
const Header = () => {
  const { user, logOut } = useContext(AuthData);
  console.log(user);
  const signOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("user");
        console.log("Successfully logged out")
      })
      .catch(() => console.log("an error occurred"));
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-60 " src={logo} alt="" />
        </div>
        <div>
          <nav className="space-x-12 flex items-center">
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">About Us</Link>
            {user ? (
              <>
                {(user.photoURL && (
                  <>
                    <Link to="/booking">
                      My Booking
                    </Link>
                    <img
                      className={`w-8`}
                      title={user?.displayName}
                      src={user.photoURL}
                    ></img>
                  </>
                )) ||
                  (user.displayName && <p>{user.displayName}</p>) || (
                    <p>User</p>
                  )}
                <button onClick={signOut}>LogOut</button>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link
                  className="bg-[#9E7AFF] px-4 py-2 rounded-md text-white"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
