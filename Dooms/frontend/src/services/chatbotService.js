import API from "./api";

export const sendMessage = async (message) => {
  const { data } = await API.post("/chatbot", { message });
  return data.reply;
};
