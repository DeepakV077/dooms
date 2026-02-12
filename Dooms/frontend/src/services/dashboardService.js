import API from "./api";

export const getDashboardData = async () => {
  try {
    const { data } = await API.get("/dashboard");
    return data;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};
