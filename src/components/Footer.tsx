export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white">CyberSim Security</h3>
                <p className="text-xs text-slate-400">Ferramenta Educacional</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Plataforma educacional para aprendizado de segurança cibernética 
              em ambiente controlado.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Links Úteis</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a 
                  href="https://github.com/TaylorReis-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub - Taylor Reis
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Markus-Go/bonesi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Referência: BoNeSi
                </a>
              </li>
              <li>
                <a 
                  href="https://owasp.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  OWASP Foundation
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Aviso</h4>
            <p className="text-slate-400 text-sm">
              Esta ferramenta é para fins educacionais apenas. 
              Não utilize para atividades ilegais ou não autorizadas.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Apenas redes locais
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CyberSim Security. Criado por{' '}
            <a 
              href="https://github.com/TaylorReis-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Taylor Reis
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-xs">
              🎓 Cunho Educativo
            </span>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs">
              🔒 Open Source
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
