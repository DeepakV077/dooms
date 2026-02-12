import { useState } from 'react';
import { askChatbot } from '../../services/api';

const ChatAssistant = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await askChatbot(question);
      const aiMessage = {
        role: 'assistant',
        content: response.data.response.answer,
        confidence: response.data.response.confidence,
        sources: response.data.response.sources
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error asking chatbot:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        error: true
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-4">AI Assistant</h3>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 ? (
          <div className="text-slate-400 text-center py-8">
            Ask me anything about climate change, species, or ecosystems!
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-900/50 ml-8'
                  : 'bg-slate-800 mr-8'
              }`}
            >
              <p className="text-white text-sm">{msg.content}</p>
              {msg.sources && (
                <div className="mt-2 text-xs text-slate-400">
                  Sources: {msg.sources.join(', ')}
                </div>
              )}
            </div>
          ))
        )}
        {loading && (
          <div className="text-slate-400 text-sm">Thinking...</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 text-white px-6 py-2 rounded-lg transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;
