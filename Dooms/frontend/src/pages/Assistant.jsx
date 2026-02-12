import { useState } from "react";
import { sendMessage } from "../services/chatbotService";

const Assistant = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello, I am your Marine AI Assistant. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(input);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <div className="flex-1 container mx-auto max-w-4xl py-12 px-6">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          AI Marine Assistant
        </h1>

        <div className="bg-white border border-blue-100 rounded-2xl shadow-lg p-6 h-[500px] overflow-y-auto flex flex-col gap-4">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[75%] p-3 rounded-xl ${
                msg.role === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-orange-100 text-black self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-orange-100 text-black p-3 rounded-xl self-start">
              Thinking...
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about marine ecosystems..."
            className="flex-1 border border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSend}
            className="bg-orange-500 text-white px-6 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
};

export default Assistant;
