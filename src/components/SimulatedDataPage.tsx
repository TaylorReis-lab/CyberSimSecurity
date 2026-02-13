import { useState } from 'react';
import { useAI } from '../hooks/useAI';
import { AIAssistant } from './AIAssistant';

interface SimulatedScenario {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  vulnerabilities: string[];
  codeSnippet?: string;
}

const SCENARIOS: SimulatedScenario[] = [
  {
    id: 'sqli-simulation',
    name: 'Login Admin (SQL Injection)',
    description: 'Simula um formulário de login vulnerável a injeção SQL.',
    category: 'Vulnerabilidade Crítica',
    icon: '💉',
    vulnerabilities: ['SQL Injection', 'Input não sanitizado'],
    codeSnippet: `const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";`
  },
  {
    id: 'xss-simulation',
    name: 'Comentários (XSS Stored)',
    description: 'Simula um sistema de comentários que aceita scripts.',
    category: 'Vulnerabilidade Alta',
    icon: '🖋️',
    vulnerabilities: ['XSS Armazenado', 'Falta de encoding no output'],
    codeSnippet: `<div>
  <h3>Comentário de {user}:</h3>
  <div dangerouslySetInnerHTML={{__html: userComment}} />
</div>`
  },
  {
    id: 'csrf-simulation',
    name: 'Transferência Bancária (CSRF)',
    description: 'Simula uma ação crítica sem validação de origem.',
    category: 'Vulnerabilidade Média',
    icon: '🔄',
    vulnerabilities: ['Ausência de Anti-CSRF Token'],
    codeSnippet: `<form action="/transfer" method="POST">
  <input type="hidden" name="amount" value="1000" />
  <input type="hidden" name="to" value="attacker" />
</form>`
  },
  {
    id: 'ddos-simulation',
    name: 'Servidor Web (DDoS Simulation)',
    description: 'Visualiza logs de um servidor sob ataque de negação de serviço.',
    category: 'Rede',
    icon: '🔥',
    vulnerabilities: ['Ausência de Rate Limiting', 'Firewall mal configurado'],
  },
];

export function SimulatedDataPage() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; details: string; findings: string[] } | null>(null);
  const { messages, sendMessage, isThinking, analyzeCode } = useAI();
  const [showAI, setShowAI] = useState(false);

  const loadScenario = async (id: string) => {
    setIsRunningTest(true);
    setTestResult(null);
    setShowAI(false);
    
    // Simulate "loading" the environment
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setSelectedScenario(id);
    setIsRunningTest(false);
  };

  const runAttackSimulation = async () => {
    if (!selectedScenario) return;
    
    setIsRunningTest(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const scenario = SCENARIOS.find(s => s.id === selectedScenario);
    if (scenario) {
      setTestResult({
        success: true, // Attack was "successful" (meaning vulnerability exists)
        details: `Ataque simulado concluído com sucesso! A vulnerabilidade ${scenario.name} foi explorada.`,
        findings: scenario.vulnerabilities
      });
    }
    setIsRunningTest(false);
  };

  const explainWithAI = () => {
    const scenario = SCENARIOS.find(s => s.id === selectedScenario);
    if (scenario) {
      sendMessage(`Explique a vulnerabilidade: ${scenario.name}. Detalhes encontrados: ${scenario.vulnerabilities.join(', ')}`);
      setShowAI(true);
    }
  };

  const analyzeCodeWithAI = () => {
    const scenario = SCENARIOS.find(s => s.id === selectedScenario);
    if (scenario && scenario.codeSnippet) {
      analyzeCode(scenario.codeSnippet);
      setShowAI(true);
    }
  };

  const currentScenario = SCENARIOS.find(s => s.id === selectedScenario);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
      {/* Sidebar / List */}
      <div className="lg:w-1/3 space-y-4 overflow-y-auto pr-2">
        <h2 className="text-xl font-bold text-white mb-4">Laboratório Virtual</h2>
        <p className="text-sm text-slate-400 mb-4">Selecione um cenário para simular ataques e aprender com a LearnTaylor.</p>
        
        {SCENARIOS.map(scenario => (
          <button
            key={scenario.id}
            onClick={() => loadScenario(scenario.id)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              selectedScenario === scenario.id
                ? 'bg-slate-700 border-cyan-500 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{scenario.icon}</span>
              <div>
                <h3 className="font-bold text-white">{scenario.name}</h3>
                <span className="text-xs text-cyan-400 bg-cyan-900/30 px-2 py-0.5 rounded">
                  {scenario.category}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="lg:w-2/3 flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        {!selectedScenario ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">🧪</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ambiente de Simulação</h3>
            <p className="max-w-md">Selecione um cenário à esquerda para iniciar os testes. Nenhum dado real é exposto aqui.</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    {currentScenario?.icon} {currentScenario?.name}
                  </h2>
                  <p className="text-slate-400 mt-1">{currentScenario?.description}</p>
                </div>
                <button
                  onClick={() => setShowAI(!showAI)}
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  🤖 {showAI ? 'Esconder LearnTaylor' : 'Perguntar à LearnTaylor'}
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {showAI ? (
                <AIAssistant messages={messages} sendMessage={sendMessage} isThinking={isThinking} />
              ) : (
                <>
                  {/* Action Area */}
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Painel de Controle da Simulação</h3>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={runAttackSimulation}
                        disabled={isRunningTest}
                        className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 rounded-lg font-medium transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {isRunningTest ? 'Executando...' : '⚡ Simular Ataque'}
                      </button>
                      
                      {currentScenario?.codeSnippet && (
                        <button
                          onClick={analyzeCodeWithAI}
                          className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-300 rounded-lg font-medium transition-all flex items-center gap-2"
                        >
                          🔍 Analisar Código Vulnerável
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Code View */}
                  {currentScenario?.codeSnippet && (
                    <div className="bg-black/30 rounded-xl overflow-hidden border border-slate-700">
                      <div className="px-4 py-2 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">vulnerable_code.js</span>
                      </div>
                      <pre className="p-4 font-mono text-sm text-emerald-300 overflow-x-auto">
                        {currentScenario.codeSnippet}
                      </pre>
                    </div>
                  )}

                  {/* Results Area */}
                  {testResult && (
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                          ⚠️
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Vulnerabilidade Explorada</h4>
                          <p className="text-sm text-slate-400">O ataque simulado foi bem-sucedido.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-slate-300">{testResult.details}</p>
                        <div className="flex flex-wrap gap-2">
                          {testResult.findings.map((finding, i) => (
                            <span key={i} className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full text-xs text-red-300">
                              {finding}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-slate-700">
                          <button
                            onClick={explainWithAI}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2"
                          >
                            👉 Peça para a LearnTaylor explicar como corrigir isso
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
