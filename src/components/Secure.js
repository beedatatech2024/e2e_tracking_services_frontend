import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getMyResources } from "../api/authApi";
import Loader from "./Loader";

const Secure = () => {
  const token = Cookies.get("jwtToken");
  const location = useLocation();

  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        if (!token) {
          setAllowed(false);
          return;
        }

        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          Cookies.remove("jwtToken");
          setAllowed(false);
          return;
        }

        const resources = await getMyResources();

        const currentPath = location.pathname.toLowerCase();

        // Dashboard should always be accessible after login
        if (currentPath === "/dashboard") {
          setAllowed(true);
          return;
        }

        const matchedResource = resources.find(
          (item) =>
            item.route &&
            currentPath.startsWith(item.route.toLowerCase())
        );

        if (matchedResource && matchedResource.can_view === 1) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
      } catch (error) {
        console.error("Access verification failed:", error);
        Cookies.remove("jwtToken");
        setAllowed(false);
      }
    };

    verifyAccess();
  }, [token, location.pathname]);

  if (allowed === null) {
    return <Loader />;
  }

  return allowed ? <Outlet /> : <Navigate to="/" replace />;
};

export default Secure;