import { NetworkStatus } from '../types';

interface NetworkVerificationProps {
  networkStatus: NetworkStatus;
  onRetry: () => void;
}

export function NetworkVerification({ networkStatus, onRetry }: NetworkVerificationProps) {
  if (networkStatus.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-cyan-500/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-20 h-20 border-4 border-transparent border-b-emerald-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Verificando Rede</h2>
            <p className="text-slate-400">Detectando ambiente de execução...</p>
            <p className="text-xs text-slate-500 font-mono">IP: {networkStatus.ip || 'detectando...'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!networkStatus.isLocal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/80 backdrop-blur border border-red-500/30 rounded-2xl p-8 space-y-6 text-center">
          <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Acesso Restrito</h1>
            <p className="text-red-300 font-semibold">Rede Não Local Detectada</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4 text-left space-y-2">
            <p className="text-slate-300 text-sm">
              O <span className="text-cyan-400 font-semibold">CyberSim Security</span> só pode ser executado em redes locais para garantir que os testes sejam realizados apenas em ambientes controlados.
            </p>
            <p className="text-slate-400 text-xs">
              IP detectado: <code className="bg-slate-700 px-2 py-1 rounded text-red-300">{networkStatus.ip}</code>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm">Para usar esta ferramenta:</h3>
            <ul className="text-slate-400 text-sm text-left space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">1.</span>
                Execute em <code className="bg-slate-700 px-1 rounded">localhost</code> ou <code className="bg-slate-700 px-1 rounded">127.0.0.1</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">2.</span>
                Use uma rede privada (192.168.x.x, 10.x.x.x)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">3.</span>
                Configure um servidor local (npm run dev)
              </li>
            </ul>
          </div>

          <button
            onClick={onRetry}
            className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
          >
            Verificar Novamente
          </button>

          <p className="text-xs text-slate-500">
            Esta restrição existe para uso ético e educacional.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
