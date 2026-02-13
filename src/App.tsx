import { useState } from 'react';
import { TabType, Finding } from './types';
import { useNetworkCheck } from './hooks/useNetworkCheck';
import { useAI } from './hooks/useAI';
import { NetworkVerification } from './components/NetworkVerification';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TestsPage } from './components/TestsPage';
import { SimulatedDataPage } from './components/SimulatedDataPage';
import { AIAssistant } from './components/AIAssistant';
import { DocsPage } from './components/DocsPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const { networkStatus, verifyNetwork } = useNetworkCheck();
  const { messages, sendMessage, isThinking, analyzeFindings } = useAI();

  const handleTestComplete = (findings: Finding[]) => {
    analyzeFindings(findings);
  };

  // Show network verification screen if not verified or not local
  if (networkStatus.loading || !networkStatus.isLocal) {
    return (
      <NetworkVerification 
        networkStatus={networkStatus} 
        onRetry={verifyNetwork} 
      />
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'tests':
        return <TestsPage onTestComplete={handleTestComplete} />;
      case 'simulated':
        return <SimulatedDataPage />;
      case 'ai':
        return (
          <AIAssistant 
            messages={messages} 
            sendMessage={sendMessage} 
            isThinking={isThinking} 
          />
        );
      case 'docs':
        return <DocsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        networkStatus={networkStatus}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}
