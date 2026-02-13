import { TabType } from '../types';

interface HomePageProps {
  setActiveTab: (tab: TabType) => void;
}

export function HomePage({ setActiveTab }: HomePageProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-800 to-cyan-900/50 border border-slate-700/50 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Derivado do CyberSim
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            CyberSim <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Security</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl">
            Plataforma educacional para aprendizado de segurança cibernética através de testes simulados em ambiente local controlado.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab('simulated')}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span className="text-xl">🧪</span>
              <div className="text-left">
                <div className="text-xs opacity-90 uppercase tracking-wider font-bold">Modo Aprendizado</div>
                <div>Usar Dados Simulados</div>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tests')}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span className="text-xl">🚀</span>
              <div className="text-left">
                <div className="text-xs opacity-75 uppercase tracking-wider font-bold">Modo Avançado</div>
                <div>Testar Localmente</div>
              </div>
            </button>
          </div>
          
          <p className="text-xs text-slate-400 max-w-lg">
            * O modo <strong>Testar Localmente</strong> utiliza seu IP atual e executa testes reais no localhost. 
            Certifique-se de estar em uma rede segura e não usar VPN para resultados precisos.
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-300">⚠️ Aviso Importante - Uso Ético</h3>
            <p className="text-amber-200/80">
              Esta ferramenta é <strong>exclusivamente para fins educacionais</strong>. Qualquer uso para ataques em sistemas não autorizados é ilegal e antiético. Use apenas em seus próprios sistemas ou em ambientes de teste autorizados.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Testes Locais</h3>
          <p className="text-slate-400 text-sm">
            Execute testes de vulnerabilidade apenas em seu servidor local, garantindo um ambiente controlado e seguro.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">IA Assistente</h3>
          <p className="text-slate-400 text-sm">
            Inteligência artificial integrada para ajudar na interpretação de resultados e sugerir correções.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Documentação</h3>
          <p className="text-slate-400 text-sm">
            Aprenda sobre cada tipo de teste, como funciona e melhores práticas de segurança.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Por que usar o CyberSim Security?</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-cyan-400">100%</div>
            <div className="text-slate-400 text-sm">Local & Seguro</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-emerald-400">Open</div>
            <div className="text-slate-400 text-sm">Source Educacional</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-violet-400">IA</div>
            <div className="text-slate-400 text-sm">Assistente Integrada</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-amber-400">0</div>
            <div className="text-slate-400 text-sm">Dados Expostos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
