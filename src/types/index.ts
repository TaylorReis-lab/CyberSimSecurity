export interface NetworkStatus {
  isLocal: boolean;
  ip: string;
  verified: boolean;
  loading: boolean;
}

export interface TestResult {
  id: string;
  type: string;
  status: 'running' | 'completed' | 'failed';
  findings: Finding[];
  timestamp: Date;
}

export interface Finding {
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  recommendation: string;
}

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type TabType = 'home' | 'tests' | 'simulated' | 'docs' | 'about' | 'ai';
