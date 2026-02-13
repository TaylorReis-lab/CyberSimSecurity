import { useState } from 'react';
import { TestResult, Finding } from '../types';
import { useAI } from '../hooks/useAI';
import { AIAssistant } from './AIAssistant';

interface TestsPageProps {
  onTestComplete: (findings: Finding[]) => void;
}

interface TestConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: number;
  category: string;
}

const AVAILABLE_TESTS: TestConfig[] = [
  {
    id: 'port-scan',
    name: 'Verificação de Portas',
    description: 'Identifica portas abertas no servidor local (Simulação de Nmap)',
    icon: '🔌',
    duration: 3000,
    category: 'Rede',
  },
  {
    id: 'http-headers',
    name: 'Análise de Headers HTTP',
    description: 'Verifica headers de segurança configurados',
    icon: '📋',
    duration: 2000,
    category: 'Web',
  },
  {
    id: 'ssl-check',
    name: 'Verificação SSL/TLS',
    description: 'Analisa configurações de certificado',
    icon: '🔐',
    duration: 2500,
    category: 'Criptografia',
  },
  {
    id: 'password-policy',
    name: 'Política de Senhas',
    description: 'Avalia força das políticas de senha',
    icon: '🔑',
    duration: 1500,
    category: 'Autenticação',
  },
];

const TOOLS_INFO = [
  {
    name: "BoNeSi",
    description: "Ferramenta para simulação de Botnets e ataques DDoS controlados.",
    url: "https://github.com/Markus-Go/bonesi"
  },
  {
    name: "Nmap",
    description: "Utilitário gratuito e open source para descoberta de rede e auditoria de segurança.",
    url: "https://nmap.org/"
  },
  {
    name: "OWASP ZAP",
    description: "Scanner de segurança para aplicações web.",
    url: "https://www.zaproxy.org/"
  }
];

// Geração de findings simulados (apenas para demonstração educacional)
const generateFindings = (testId: string): Finding[] => {
  const findings: Record<string, Finding[]> = {
    'port-scan': [
      {
        severity: 'medium',
        title: 'Porta 22 (SSH) aberta',
        description: 'O serviço SSH está acessível. Certifique-se de usar autenticação por chave.',
        recommendation: 'Configure autenticação por chave SSH e desabilite login por senha.',
      },
      {
        severity: 'low',
        title: 'Porta 80 (HTTP) aberta',
        description: 'Servidor HTTP detectado na porta padrão.',
        recommendation: 'Considere redirecionar para HTTPS (443).',
      },
    ],
    'http-headers': [
      {
        severity: 'high',
        title: 'X-Frame-Options ausente',
        description: 'Header de proteção contra clickjacking não configurado.',
        recommendation: 'Adicione "X-Frame-Options: DENY" ou "SAMEORIGIN".',
      },
      {
        severity: 'medium',
        title: 'Content-Security-Policy ausente',
        description: 'CSP não configurado, permitindo potenciais ataques XSS.',
        recommendation: 'Implemente uma política CSP restritiva.',
      },
    ],
    'ssl-check': [
      {
        severity: 'low',
        title: 'Certificado auto-assinado',
        description: 'Certificado não emitido por CA confiável (esperado em ambiente local).',
        recommendation: 'Em produção, use certificados de CAs reconhecidas.',
      },
    ],
    'password-policy': [
      {
        severity: 'high',
        title: 'Política de senha fraca',
        description: 'Requisitos mínimos de complexidade não detectados.',
        recommendation: 'Exija mínimo 12 caracteres, incluindo números e símbolos.',
      },
    ],
  };

  return findings[testId] || [];
};

export function TestsPage({ onTestComplete }: TestsPageProps) {
  const [runningTests, setRunningTests] = useState<Set<string>>(new Set());
  const [results, setResults] = useState<TestResult[]>([]);
  const [activeTab, setActiveTab] = useState<'tests' | 'code-analysis'>('tests');
  const [codeToAnalyze, setCodeToAnalyze] = useState('');
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);
  const { messages, sendMessage, isThinking, analyzeCode } = useAI();

  const runTest = async (test: TestConfig) => {
    setRunningTests(prev => new Set(prev).add(test.id));

    // Simula execução do teste
    await new Promise(resolve => setTimeout(resolve, test.duration));

    const findings = generateFindings(test.id);
    const result: TestResult = {
      id: `${test.id}-${Date.now()}`,
      type: test.name,
      status: 'completed',
      findings,
      timestamp: new Date(),
    };

    setResults(prev => [result, ...prev]);
    setRunningTests(prev => {
      const next = new Set(prev);
      next.delete(test.id);
      return next;
    });

    if (findings.length > 0) {
      onTestComplete(findings);
    }
  };

  const handleAnalyzeCode = async () => {
    if (!codeToAnalyze.trim()) return;
    await analyzeCode(codeToAnalyze);
  };

  if (!isDisclaimerAccepted) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-slate-800 border border-red-500/30 rounded-2xl p-8 space-y-6 shadow-2xl shadow-red-900/20">
          <div className="flex items-center gap-4 text-red-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold text-white">Atenção: Modo de Teste Real</h2>
          </div>
          
          <div className="space-y-4 text-slate-300">
            <p>
              Você está prestes a entrar no modo de <strong>Testes Locais</strong>. Este modo executa
              simulações de varredura utilizando o endereço IP da sua máquina.
            </p>
            
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Certifique-se de não estar utilizando VPNs que possam mascarar sua rede local.</li>
                <li>Este software é projetado apenas para fins educacionais em ambientes autorizados.</li>
                <li>O uso de ferramentas de segurança em redes de terceiros sem permissão é ilegal.</li>
                <li>O criador (Taylor Reis) e colaboradores não se responsabilizam por uso indevido.</li>
              </ul>
            </div>
            
            <p className="font-semibold text-white">
              Ao prosseguir, você confirma que está executando estes testes em sua própria infraestrutura local.
            </p>
          </div>

          <button
            onClick={() => setIsDisclaimerAccepted(true)}
            className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors"
          >
            Eu Concordo e Entendo os Riscos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Laboratório Local</h2>
          <p className="text-slate-400">Ambiente de testes para seu servidor localhost</p>
        </div>
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('tests')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'tests' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Testes Automatizados
          </button>
          <button
            onClick={() => setActiveTab('code-analysis')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'code-analysis' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Análise de Código
          </button>
        </div>
      </div>

      {activeTab === 'tests' ? (
        <>
          {/* Tools Reference Banner */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {TOOLS_INFO.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-800/30 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all group"
              >
                <h4 className="font-bold text-white group-hover:text-cyan-400 flex items-center gap-2">
                  {tool.name}
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h4>
                <p className="text-xs text-slate-400 mt-1">{tool.description}</p>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AVAILABLE_TESTS.map(test => (
              <div
                key={test.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{test.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{test.name}</h3>
                    <span className="text-xs text-cyan-400">{test.category}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm h-10">{test.description}</p>
                <button
                  onClick={() => runTest(test)}
                  disabled={runningTests.has(test.id)}
                  className={`w-full py-2 rounded-lg font-medium transition-all ${
                    runningTests.has(test.id)
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}
                >
                  {runningTests.has(test.id) ? 'Executando...' : 'Executar Scan'}
                </button>
              </div>
            ))}
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {results.map(result => (
              <div
                key={result.id}
                className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 animate-in slide-in-from-bottom-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-white text-lg">{result.type} - Resultado</h4>
                  <span className="text-xs text-slate-400 font-mono">
                    {result.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                
                {result.findings.length > 0 ? (
                  <div className="space-y-3">
                    {result.findings.map((finding, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-red-500">
                        <div className="flex justify-between items-start">
                          <h5 className="font-semibold text-red-300">{finding.title}</h5>
                          <span className="text-xs uppercase font-bold bg-red-500/20 text-red-300 px-2 py-0.5 rounded">
                            {finding.severity}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 mt-1">{finding.description}</p>
                        <p className="text-sm text-slate-400 mt-2">
                          <strong className="text-slate-300">Recomendação:</strong> {finding.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-4 rounded-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nenhuma vulnerabilidade detectada neste teste.</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Code Analysis Tab */
        <div className="grid lg:grid-cols-2 gap-6 h-[600px]">
          <div className="flex flex-col space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex-1 flex flex-col">
              <label className="text-white font-semibold mb-2 block">Cole seu código aqui:</label>
              <textarea
                value={codeToAnalyze}
                onChange={(e) => setCodeToAnalyze(e.target.value)}
                placeholder="// Exemplo: const query = 'SELECT * FROM users WHERE id=' + id;"
                className="flex-1 w-full bg-slate-900/50 border border-slate-600 rounded-lg p-4 font-mono text-sm text-slate-300 focus:border-cyan-500 focus:outline-none resize-none"
              />
              <button
                onClick={handleAnalyzeCode}
                disabled={!codeToAnalyze.trim() || isThinking}
                className="mt-4 w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-lg transition-all disabled:opacity-50"
              >
                {isThinking ? 'LearnTaylor está analisando...' : 'Analisar Vulnerabilidades'}
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
             <div className="p-4 bg-slate-800 border-b border-slate-700">
               <h3 className="font-bold text-white">Análise da LearnTaylor</h3>
             </div>
             <div className="flex-1 overflow-y-auto p-4">
               {messages.length > 1 ? (
                 <AIAssistant messages={messages} sendMessage={sendMessage} isThinking={isThinking} />
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center">
                   <span className="text-4xl mb-4">🕵️‍♀️</span>
                   <p>Cole um código ao lado para análise...</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
