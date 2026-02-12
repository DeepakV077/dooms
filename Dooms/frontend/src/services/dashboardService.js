import API from "./api";

export const getDashboardData = async (region) => {
  try {
    const { data } = await API.get(`/dashboard?region=${encodeURIComponent(region)}`);
    return data;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};
