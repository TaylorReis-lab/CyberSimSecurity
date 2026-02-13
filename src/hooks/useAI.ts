import { useState, useCallback } from 'react';
import { AIMessage, Finding } from '../types';

// Base de conhecimento da IA (simulada - em produção usaria API real)
const KNOWLEDGE_BASE: Record<string, string> = {
  'sql injection': `**SQL Injection** é uma vulnerabilidade crítica onde comandos SQL maliciosos são inseridos em campos de entrada.

**Recomendações:**
- Use prepared statements (consultas parametrizadas)
- Implemente validação de entrada rigorosa
- Use ORM quando possível
- Aplique o princípio do menor privilégio no banco de dados`,

  'xss': `**Cross-Site Scripting (XSS)** permite injeção de scripts maliciosos em páginas web.

**Recomendações:**
- Escape todas as saídas de dados
- Use Content Security Policy (CSP)
- Valide e sanitize inputs
- Use frameworks modernos com proteção automática`,

  'csrf': `**Cross-Site Request Forgery (CSRF)** força usuários autenticados a executar ações não intencionais.

**Recomendações:**
- Implemente tokens CSRF
- Use SameSite cookies
- Verifique o header Referer/Origin
- Requeira re-autenticação para ações sensíveis`,

  'ddos': `**DDoS (Distributed Denial of Service)** visa sobrecarregar serviços com tráfego malicioso.

**Recomendações:**
- Use CDN com proteção DDoS
- Implemente rate limiting
- Configure firewalls adequadamente
- Tenha plano de contingência`,

  'port scan': `**Port Scanning** identifica portas abertas e serviços disponíveis.

**Recomendações:**
- Feche portas desnecessárias
- Use firewalls configurados corretamente
- Monitore logs de rede
- Implemente IDS/IPS`,
};

// Conhecimento aprendido durante a sessão
const learnedKnowledge: Record<string, string> = {};

export function useAI() {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      role: 'assistant',
      content: `Olá! Sou a **LearnTaylor**, a IA do CyberSim Security. Estou aqui para ajudar você a entender vulnerabilidades encontradas e como corrigi-las de forma educacional.

**Como posso ajudar:**
- Explicar vulnerabilidades detectadas em simulações ou testes locais
- Analisar trechos de código que você fornecer
- Sugerir correções e boas práticas
- Ensinar conceitos de segurança

⚠️ Lembre-se: Este conhecimento é apenas para fins educacionais e uso ético em ambientes autorizados.`,
      timestamp: new Date(),
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const processMessage = useCallback(async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Verifica no conhecimento base
    for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    // Verifica no conhecimento aprendido
    for (const [key, value] of Object.entries(learnedKnowledge)) {
      if (lowerMessage.includes(key.toLowerCase())) {
        return value;
      }
    }

    // Respostas genéricas contextuais
    if (lowerMessage.includes('vulnerabilidade') || lowerMessage.includes('vulnerability')) {
      return `Para analisar uma vulnerabilidade específica, por favor me diga qual tipo você encontrou (ex: SQL Injection, XSS, CSRF, etc.).

Posso ajudar com:
- Explicação técnica do problema
- Impacto potencial
- Estratégias de mitigação
- Melhores práticas de prevenção`;
    }

    if (lowerMessage.includes('teste') || lowerMessage.includes('test')) {
      return `Os testes de segurança disponíveis no CyberSim Security são **apenas para ambientes locais controlados**.

**Tipos de testes educacionais:**
- Verificação de portas abertas
- Análise de headers HTTP
- Teste de força de senha
- Detecção de vulnerabilidades conhecidas

Todos os testes são simulados e não causam danos reais.`;
    }

    if (lowerMessage.includes('aprender') || lowerMessage.includes('ensinar') || lowerMessage.includes('novo')) {
      return `Estou sempre aprendendo! Se você encontrou uma vulnerabilidade que não conheço, me explique e eu vou armazenar esse conhecimento para ajudar outros usuários.

Formato sugerido:
"Aprenda sobre [NOME]: [DESCRIÇÃO E RECOMENDAÇÕES]"`;
    }

    // Comando para ensinar a IA
    const learnMatch = userMessage.match(/aprenda sobre\s+([^:]+):\s*(.+)/i);
    if (learnMatch) {
      const topic = learnMatch[1].trim();
      const content = learnMatch[2].trim();
      learnedKnowledge[topic] = content;
      return `✅ Aprendi sobre **${topic}**! Agora posso ajudar outros usuários com esse conhecimento.

Obrigado por contribuir com a base educacional do CyberSim Security!`;
    }

    return `Não encontrei informações específicas sobre sua pergunta na minha base de conhecimento.

Você pode:
1. Reformular a pergunta com mais detalhes
2. Me ensinar sobre o tema: "Aprenda sobre [TEMA]: [EXPLICAÇÃO]"
3. Perguntar sobre vulnerabilidades comuns: SQL Injection, XSS, CSRF, DDoS, Port Scan`;
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: AIMessage = {
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsThinking(true);

    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = await processMessage(content);

    const assistantMessage: AIMessage = {
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsThinking(false);
  }, [processMessage]);

  const analyzeFindings = useCallback(async (findings: Finding[]) => {
    if (findings.length === 0) return;

    const summary = findings.map(f => `- **${f.title}** (${f.severity}): ${f.description}`).join('\n');
    
    const analysisMessage: AIMessage = {
      role: 'assistant',
      content: `📊 **Análise dos Resultados do Teste (LearnTaylor)**

${summary}

**Recomendações Gerais:**
${findings.map(f => f.recommendation).join('\n')}

Gostaria de mais detalhes sobre alguma vulnerabilidade específica?`,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, analysisMessage]);
  }, []);

  const analyzeCode = useCallback(async (code: string) => {
    setIsThinking(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    let analysis = "";
    if (code.match(/SELECT\s+\*\s+FROM/i) || code.match(/'\s+OR\s+'1'='1/i)) {
      analysis = `🔍 **Análise de Código: Vulnerabilidade SQL Injection**

Detectei padrões de SQL Injection neste código.

**Problema:**
A query parece concatenar inputs diretamente, permitindo manipulação da consulta SQL.

**Como Corrigir:**
Use *Prepared Statements* ou *Parameterized Queries*.

Exemplo seguro:
\`\`\`sql
SELECT * FROM users WHERE username = ? AND password = ?
\`\`\`
`;
    } else if (code.match(/<script>/i) || code.match(/innerHTML/i)) {
      analysis = `🔍 **Análise de Código: Vulnerabilidade XSS**

Detectei possíveis vulnerabilidades de Cross-Site Scripting (XSS).

**Problema:**
Uso de inserção direta de HTML/Script sem sanitização.

**Como Corrigir:**
Sempre sanitize inputs e outputs. Use funções de escape apropriadas para o contexto.`;
    } else {
      analysis = `🔍 **Análise de Código**

Não detectei vulnerabilidades óbvias conhecidas (SQLi/XSS) neste trecho, mas lembre-se:
1. Valide todos os inputs.
2. Use autenticação forte.
3. Mantenha bibliotecas atualizadas.

Se quiser, me explique o contexto desse código para uma análise mais profunda.`;
    }

    const message: AIMessage = {
      role: 'assistant',
      content: analysis,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, message]);
    setIsThinking(false);
  }, []);

  return { messages, sendMessage, isThinking, analyzeFindings, analyzeCode };
}
