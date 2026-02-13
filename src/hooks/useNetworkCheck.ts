import { useState, useEffect, useCallback } from 'react';
import { NetworkStatus } from '../types';

// Ranges de IPs locais (privados)
const LOCAL_IP_PATTERNS = [
  /^127\./, // Loopback
  /^10\./, // Classe A privada
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // Classe B privada
  /^192\.168\./, // Classe C privada
  /^0\.0\.0\.0/, // Bind all
  /^localhost$/i,
  /^::1$/, // IPv6 loopback
  /^fe80:/i, // IPv6 link-local
];

export function useNetworkCheck() {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isLocal: false,
    ip: '',
    verified: false,
    loading: true,
  });

  const checkIfLocalIP = (ip: string): boolean => {
    return LOCAL_IP_PATTERNS.some(pattern => pattern.test(ip));
  };

  const verifyNetwork = useCallback(async () => {
    setNetworkStatus(prev => ({ ...prev, loading: true }));
    
    try {
      // Simula detecção de IP local (em produção, isso seria feito via backend)
      // Verifica se está rodando em localhost
      const hostname = window.location.hostname;
      const isLocalhost = checkIfLocalIP(hostname);
      
      // Simula um pequeno delay para parecer que está verificando
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setNetworkStatus({
        isLocal: isLocalhost,
        ip: hostname || '127.0.0.1',
        verified: true,
        loading: false,
      });
    } catch (error) {
      setNetworkStatus({
        isLocal: false,
        ip: 'unknown',
        verified: true,
        loading: false,
      });
    }
  }, []);

  useEffect(() => {
    verifyNetwork();
  }, [verifyNetwork]);

  return { networkStatus, verifyNetwork, checkIfLocalIP };
}
