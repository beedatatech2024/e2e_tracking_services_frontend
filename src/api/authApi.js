import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";


export const loginUser = async (loginDetails) => {
  try {
    const response = await axiosInstance.post(
      "/auth/login",
      loginDetails
    );

    const token = response?.data?.token;
    const userData = response?.data?.user;

    Cookies.set("jwtToken", token, {
      expires: 30,
    });

    localStorage.setItem(
      "userData",
      JSON.stringify(userData)
    );

    const resourceResponse = await axiosInstance.get(
      "/resource/my",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resources = resourceResponse.data.data;

    return {
      ...response.data,
      firstRoute: resources?.[0]?.route || "/dashboard",
    };
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getMyResources = async () => {
  const response = await axiosInstance.get("/resource/my");
  return response.data.data;
};