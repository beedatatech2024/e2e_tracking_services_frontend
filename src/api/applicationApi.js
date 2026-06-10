// api/candidateApi.js

import axiosInstance from "./axiosInstance";

export const getApplications = async (
  page = 1,
  limit = 10,
  search = "",
  position
) => {
  const response = await axiosInstance.get(
    `/application/list?page=${page}&limit=${limit}&search=${search}&position_id=${position}`
  );

  return response.data;
};


export const getDashboardSummary = async () => {
  const response = await axiosInstance.get(
    "/application/dashboard/summary"
  );

  return response.data.data;
};

export const getSubmissionAnalytics = async (
  startDate,
  endDate,
  category = "benchsales"
) => {
  const response = await axiosInstance.get(
    `/application/dashboard/submissions`,
    {
      params: {
        start_date: startDate,
        end_date: endDate,
        category,
      },
    }
  );

  return response.data;
};

export const createApplication = async (formData) => {
  const response = await axiosInstance.post(
    "/application/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};