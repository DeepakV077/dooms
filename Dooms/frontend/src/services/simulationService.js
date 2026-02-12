import { runSimulation as runSimAPI } from "./api";

export const runSimulation = async (payload) => {
  const { data } = await runSimAPI(payload);
  return data;
};

