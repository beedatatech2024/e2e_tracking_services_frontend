import Cookies from "js-cookie";

const getUserDataFromCookies = () => {
  try {
    const token = Cookies.get("jwtToken");

    if (!token) return null;

    const payload = token.split(".")[1];

    const decoded = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
    );

    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};

export default getUserDataFromCookies;