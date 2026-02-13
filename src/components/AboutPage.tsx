export function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white">
          CyberSim <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Security</span>
        </h1>
        <p className="text-xl text-slate-400">
          Ferramenta Educacional de Testes de Segurança
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
          <span className="text-cyan-300 text-sm">Derivado do projeto CyberSim</span>
        </div>
      </div>

      {/* About Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project Info */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400">📋</span> Sobre o Projeto
          </h3>
          <p className="text-slate-300">
            O CyberSim Security é uma plataforma educacional desenvolvida para auxiliar 
            estudantes e entusiastas de segurança cibernética a aprenderem sobre 
            vulnerabilidades e boas práticas de segurança.
          </p>
          <p className="text-slate-400 text-sm">
            Esta ferramenta é derivada do <strong className="text-cyan-300">CyberSim</strong>, 
            uma aplicação criada com o objetivo de democratizar o conhecimento em 
            segurança da informação de forma segura e controlada.
          </p>
        </div>

        {/* Purpose */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400">🎯</span> Propósito
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              Educação em segurança cibernética
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              Ambiente seguro para aprendizado
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              Simulações sem risco real
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              Promoção de práticas éticas
            </li>
          </ul>
        </div>
      </div>

      {/* Team */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6 text-center">Equipe</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Creator */}
          <div className="bg-slate-700/30 rounded-xl p-6 text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
              👨‍💻
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Taylor Reis</h4>
              <p className="text-cyan-400 text-sm">Criador & Idealizador</p>
              <p className="text-slate-400 text-xs mt-1">Desenvolvedor Full Stack</p>
            </div>
            <p className="text-slate-300 text-sm">
              Responsável pela concepção, lógica e arquitetura do CyberSim Security. 
              Estudante apaixonado por segurança cibernética e desenvolvimento.
            </p>
            <a
              href="https://github.com/TaylorReis-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600/50 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Frontend */}
          <div className="bg-slate-700/30 rounded-xl p-6 text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
              🤖
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Claude AI</h4>
              <p className="text-cyan-400 text-sm">Desenvolvimento Frontend</p>
              <p className="text-slate-400 text-xs mt-1">Assistente de Desenvolvimento</p>
            </div>
            <p className="text-slate-300 text-sm">
              Responsável pela implementação da interface do usuário, componentes React, 
              e integração visual seguindo as diretrizes e especificações do projeto.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600/50 rounded-lg text-slate-300 text-sm">
              <span>Anthropic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-amber-300 mb-4 flex items-center gap-2">
          ⚠️ Aviso Legal e Ético
        </h3>
        <div className="space-y-3 text-amber-200/80">
          <p>
            O <strong>CyberSim Security</strong> foi desenvolvido exclusivamente para 
            <strong> fins educacionais</strong>. Esta não é uma ferramenta de ataque e 
            não deve ser utilizada para atividades ilegais ou não autorizadas.
          </p>
          <p>
            O criador <strong>Taylor Reis</strong> é um estudante e desenvolvedor Full Stack 
            que criou esta ferramenta com o objetivo de ajudar outros estudantes a aprenderem 
            sobre segurança cibernética de forma segura e ética.
          </p>
          <p className="text-sm">
            O uso indevido desta ferramenta ou dos conhecimentos adquiridos através dela 
            é de inteira responsabilidade do usuário. Sempre pratique segurança cibernética 
            de forma ética e legal.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Tecnologias Utilizadas</h3>
        <div className="flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map(tech => (
            <span
              key={tech}
              className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Version */}
      <div className="text-center text-slate-500 text-sm">
        <p>CyberSim Security v1.0.0</p>
        <p>Open Source - Contribuições são bem-vindas!</p>
      </div>
    </div>
  );
}
