import { useState } from 'react';

interface DocSection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

export function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Começando',
      icon: '🚀',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Bem-vindo ao CyberSim Security</h3>
          <p className="text-slate-300">
            O CyberSim Security é uma plataforma educacional completa para aprender sobre vulnerabilidades
            de segurança de duas maneiras distintas: <strong>Simulação Virtual</strong> e <strong>Testes Locais</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-700/30 rounded-lg p-4 border border-cyan-500/20">
              <h4 className="font-semibold text-cyan-300 mb-2">🧪 Modo Simulado (Virtual Lab)</h4>
              <p className="text-sm text-slate-300">
                Ideal para iniciantes. Um ambiente totalmente seguro e fictício onde você pode ver
                como ataques funcionam sem risco. A IA "LearnTaylor" explica cada passo.
              </p>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 border border-emerald-500/20">
              <h4 className="font-semibold text-emerald-300 mb-2">🚀 Modo Local (Advanced)</h4>
              <p className="text-sm text-slate-300">
                Para usuários intermediários. Executa testes reais contra seu próprio servidor localhost.
                Requer responsabilidade e aceitação dos termos de uso.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'simulated-mode',
      title: 'Guia: Modo Simulado',
      icon: '🧪',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Como usar o Laboratório Virtual</h3>
          
          <ol className="space-y-4 text-slate-300">
            <li className="bg-slate-700/30 p-4 rounded-lg">
              <strong className="text-cyan-400 block mb-1">1. Escolha um Cenário</strong>
              Navegue pela lista de vulnerabilidades (SQL Injection, XSS, CSRF, etc.).
            </li>
            <li className="bg-slate-700/30 p-4 rounded-lg">
              <strong className="text-cyan-400 block mb-1">2. Simule o Ataque</strong>
              Clique em "Simular Ataque" para ver como a vulnerabilidade é explorada.
              Você verá logs e resultados como se fosse um sistema real.
            </li>
            <li className="bg-slate-700/30 p-4 rounded-lg">
              <strong className="text-cyan-400 block mb-1">3. Analise o Código</strong>
              Clique em "Analisar Código Vulnerável". A IA LearnTaylor irá ler o snippet
              de código fornecido e explicar exatamente onde está o erro (ex: falta de sanitização).
            </li>
            <li className="bg-slate-700/30 p-4 rounded-lg">
              <strong className="text-cyan-400 block mb-1">4. Pergunte à LearnTaylor</strong>
              Use o chat integrado para tirar dúvidas específicas, como "Como corrijo esse SQL Injection em Python?".
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: 'local-testing',
      title: 'Guia: Testes Locais',
      icon: '🔒',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Executando Testes Reais (Localhost)</h3>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-300 font-semibold">⚠️ AVISO DE SEGURANÇA</p>
            <p className="text-red-200/80 text-sm">
              Ao usar o Modo Local, seu IP é utilizado para realizar varreduras reais.
              Certifique-se de <strong>NÃO</strong> estar conectado a uma VPN corporativa ou pública,
              pois isso pode ser interpretado como um ataque malicioso à rede do provedor da VPN.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Funcionalidades Disponíveis:</h4>
            
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-300">Análise de Código (NOVO)</h5>
              <p className="text-slate-300 text-sm mt-1">
                Você pode colar trechos do seu próprio código na aba "Análise de Código".
                A LearnTaylor irá procurar por padrões de vulnerabilidades conhecidas (SQLi, XSS)
                e sugerir correções.
                <br/>
                <em>Nota: O código é processado localmente no navegador.</em>
              </p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-300">Scanners Automatizados</h5>
              <ul className="list-disc list-inside text-slate-300 text-sm mt-1 space-y-1">
                <li><strong>Port Scan:</strong> Verifica portas comuns abertas no seu localhost.</li>
                <li><strong>HTTP Headers:</strong> Analisa se seu servidor local está enviando headers de segurança (CSP, X-Frame-Options).</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tools',
      title: 'Ferramentas Externas',
      icon: '🔧',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Ferramentas Recomendadas</h3>
          <p className="text-slate-300">
            Para aprofundar seus estudos, recomendamos aprender a usar estas ferramentas profissionais
            (sempre em ambiente controlado):
          </p>

          <div className="grid gap-4">
            <a href="https://github.com/Markus-Go/bonesi" target="_blank" className="block bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
              <h4 className="font-bold text-white">BoNeSi</h4>
              <p className="text-sm text-slate-400">DDoS Botnet Simulator. Excelente para testar como sua infraestrutura lida com tráfego massivo em ambiente de laboratório.</p>
            </a>
            
            <a href="https://nmap.org" target="_blank" className="block bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
              <h4 className="font-bold text-white">Nmap</h4>
              <p className="text-sm text-slate-400">O padrão da indústria para descoberta de rede e auditoria de segurança.</p>
            </a>

            <a href="https://www.zaproxy.org" target="_blank" className="block bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
              <h4 className="font-bold text-white">OWASP ZAP</h4>
              <p className="text-sm text-slate-400">Scanner de segurança web integrado para encontrar vulnerabilidades em aplicações web.</p>
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'ethics',
      title: 'Código de Ética',
      icon: '⚖️',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Compromisso Ético</h3>
          <p className="text-slate-300">
            Ao usar o CyberSim Security, você concorda em seguir os princípios do <strong>White Hat Hacking</strong>.
          </p>
          <ul className="space-y-2 text-slate-300 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <li>✅ <strong>Autorização:</strong> Nunca teste um sistema que não seja seu ou sem permissão explícita por escrito.</li>
            <li>✅ <strong>Privacidade:</strong> Respeite a privacidade dos dados encontrados.</li>
            <li>✅ <strong>Divulgação Responsável:</strong> Se encontrar uma falha em um sistema real, notifique o proprietário de forma privada.</li>
            <li>❌ <strong>Não Destruição:</strong> Não execute testes que possam danificar permanentemente dados ou serviços.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 sticky top-24">
          <h3 className="font-semibold text-white mb-4">Documentação</h3>
          <nav className="space-y-1">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <span>{section.icon}</span>
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 min-h-[500px]">
          {sections.find(s => s.id === activeSection)?.content}
        </div>
      </div>
    </div>
  );
}
