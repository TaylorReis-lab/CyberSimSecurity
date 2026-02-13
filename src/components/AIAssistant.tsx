import { useState, useRef, useEffect } from 'react';
import { AIMessage } from '../types';

interface AIAssistantProps {
  messages: AIMessage[];
  sendMessage: (content: string) => void;
  isThinking: boolean;
}

export function AIAssistant({ messages, sendMessage, isThinking }: AIAssistantProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isThinking) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  const quickQuestions = [
    'O que é SQL Injection?',
    'Como prevenir XSS?',
    'Explique CSRF',
    'O que é DDoS?',
  ];

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, i) => {
        // Bold text
        let formattedLine = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-cyan-300">$1</strong>');
        // List items
        if (formattedLine.startsWith('- ')) {
          formattedLine = `<span class="text-slate-400">•</span> ${formattedLine.substring(2)}`;
        }
        return <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
      });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[700px]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white">Assistente IA</h2>
        <p className="text-slate-400">
          Tire dúvidas sobre segurança e vulnerabilidades
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h4 className="font-semibold text-emerald-300">IA Educacional</h4>
            <p className="text-emerald-200/70 text-sm">
              Esta IA foi projetada para ensinar conceitos de segurança. Ela pode aprender 
              novos conceitos durante a sessão quando você a ensina.
            </p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-cyan-500/20 border border-cyan-500/30 text-white'
                    : 'bg-slate-700/50 border border-slate-600/50 text-slate-200'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-600/30">
                    <span className="text-lg">🤖</span>
                    <span className="text-xs text-slate-400">CyberSim AI</span>
                  </div>
                )}
                <div className="text-sm leading-relaxed">
                  {formatMessage(message.content)}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-slate-700/50 border border-slate-600/50 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm text-slate-400">Pensando...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-3 border-t border-slate-700/50 bg-slate-800/30">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickQuestions.map((question, i) => (
              <button
                key={i}
                onClick={() => sendMessage(question)}
                disabled={isThinking}
                className="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 rounded-full text-xs text-slate-300 whitespace-nowrap transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-slate-700/50">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta sobre segurança..."
              className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50"
              disabled={isThinking}
            />
            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      {/* Learning Tip */}
      <div className="mt-4 bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
        <h4 className="font-semibold text-violet-300 mb-2">💡 Dica: Ensine a IA</h4>
        <p className="text-violet-200/70 text-sm">
          Você pode ensinar novos conceitos usando o formato: 
          <code className="bg-slate-800 px-2 py-1 rounded ml-1">
            "Aprenda sobre [TEMA]: [EXPLICAÇÃO]"
          </code>
        </p>
      </div>
    </div>
  );
}
