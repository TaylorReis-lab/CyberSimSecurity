# 🛡️ CyberSim Security

<div align="center">

![CyberSim Security Logo](https://img.shields.io/badge/CyberSim-Security-00D4AA?style=for-the-badge&logo=shield&logoColor=white)

**Plataforma Educacional de Testes de Segurança Cibernética**

[![Educacional](https://img.shields.io/badge/Propósito-Educacional-blue?style=flat-square)](https://github.com/TaylorReis-lab)
[![Apenas Local](https://img.shields.io/badge/Rede-Apenas%20Local-green?style=flat-square)](.)
[![MIT License](https://img.shields.io/badge/Licença-MIT-yellow?style=flat-square)](LICENSE)

[Começar](#-instalação) • [Documentação](#-documentação) • [Sobre](#-sobre-o-projeto) • [Contribuir](#-contribuindo)

</div>

---

## ⚠️ AVISO IMPORTANTE

> **Este software é EXCLUSIVAMENTE para fins educacionais.**
> 
> O CyberSim Security foi desenvolvido para ajudar estudantes e profissionais a aprenderem sobre segurança cibernética de forma segura e ética. **NÃO utilize esta ferramenta ou conhecimentos adquiridos para:**
> - Acessar sistemas sem autorização
> - Realizar ataques em redes de terceiros
> - Qualquer atividade ilegal ou antiética
>
> **O uso indevido é de inteira responsabilidade do usuário.**

---

## 📋 Sobre o Projeto

O **CyberSim Security** é uma ferramenta derivada do projeto CyberSim, desenvolvida para fornecer um ambiente seguro e controlado para aprendizado de segurança cibernética.

### 🎯 Propósito

- **Educação**: Ensinar conceitos de segurança de forma prática
- **Simulação**: Ambiente seguro para testar e aprender
- **Ética**: Promover práticas responsáveis em segurança
- **Acessibilidade**: Democratizar conhecimento em cibersegurança

### ✨ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🔒 **Verificação de Rede** | Restringe execução apenas para redes locais |
| 🧪 **Testes Simulados** | Verificações de segurança em ambiente controlado |
| 🤖 **Assistente IA** | IA integrada para ajudar na análise de vulnerabilidades |
| 📊 **Dados Simulados** | Visualização de cenários de segurança fictícios |
| 📚 **Documentação** | Guias completos sobre uso ético e funcionalidades |

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Ambiente de desenvolvimento local

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/TaylorReis-lab/cybersim-security.git

# 2. Entre no diretório
cd cybersim-security

# 3. Instale as dependências
npm install

# 4. Execute em modo desenvolvimento
npm run dev
```

### 🔐 Requisito de Rede Local

O CyberSim Security **só funciona em redes locais** para garantir uso seguro:

- ✅ `localhost`
- ✅ `127.0.0.1`
- ✅ `192.168.x.x`
- ✅ `10.x.x.x`
- ✅ `172.16-31.x.x`
- ❌ IPs públicos não são permitidos

---

## 📖 Documentação

### Como Funciona

1. **Verificação de Rede**: Ao iniciar, a aplicação verifica se está em rede local
2. **Acesso às Ferramentas**: Após verificação, as funcionalidades são liberadas
3. **Execução de Testes**: Testes simulados são executados localmente
4. **Análise com IA**: A IA ajuda a interpretar resultados e sugere correções

### Tipos de Testes Disponíveis

| Teste | Descrição | Categoria |
|-------|-----------|-----------|
| Verificação de Portas | Identifica portas abertas | Rede |
| Headers HTTP | Analisa headers de segurança | Web |
| SSL/TLS | Verifica certificados | Criptografia |
| Política de Senhas | Avalia requisitos de senha | Autenticação |
| Validação de Inputs | Testa sanitização | Web |
| Verificação CORS | Analisa configurações | Web |

### Usando o Assistente IA

A IA integrada pode:
- Explicar vulnerabilidades detectadas
- Sugerir correções e mitigações
- Responder perguntas sobre segurança
- **Aprender novos conceitos** durante a sessão

**Para ensinar a IA:**
```
Aprenda sobre [NOME]: [EXPLICAÇÃO DETALHADA]
```

---

## 🔧 Referências Técnicas

Este projeto foi inspirado em ferramentas profissionais de segurança:

- [BoNeSi](https://github.com/Markus-Go/bonesi) - Simulação de botnet para testes
- OWASP ZAP - Scanner de vulnerabilidades
- Nmap - Escaneamento de portas

> **Nota**: O CyberSim Security fornece apenas **simulações educacionais** sem capacidade de ataque real.

---

## 🛡️ Segurança e Privacidade

### O que o CyberSim Security NÃO faz:

- ❌ Não coleta dados pessoais
- ❌ Não envia informações para servidores externos
- ❌ Não executa ataques reais
- ❌ Não armazena logs de forma permanente
- ❌ Não funciona fora de redes locais

### Boas Práticas

1. Execute apenas em seus próprios sistemas
2. Use em ambientes de teste isolados
3. Nunca teste sistemas de terceiros sem autorização
4. Pratique disclosure responsável

---

## 👥 Equipe

### Criador e Idealizador

**Taylor Reis** - *Desenvolvedor Full Stack*

[![GitHub](https://img.shields.io/badge/GitHub-TaylorReis--lab-181717?style=flat-square&logo=github)](https://github.com/TaylorReis-lab)

Responsável pela concepção, lógica e arquitetura do projeto. Estudante apaixonado por segurança cibernética e desenvolvimento de software.

### Desenvolvimento Frontend

**Claude AI** - *Assistente de Desenvolvimento (Anthropic)*

Responsável pela implementação da interface de usuário e componentes React.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o foco educacional
- Não adicione funcionalidades de ataque real
- Documente suas mudanças
- Siga as boas práticas de código

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ⚖️ Código de Ética

Ao usar o CyberSim Security, você concorda em:

1. ✅ Usar apenas para fins educacionais
2. ✅ Testar apenas sistemas próprios ou autorizados
3. ✅ Reportar vulnerabilidades de forma responsável
4. ✅ Não utilizar conhecimentos para atividades ilegais
5. ✅ Promover segurança cibernética ética

---

<div align="center">

**CyberSim Security** - Aprendendo segurança de forma ética e responsável

Feito com 💚 por [Taylor Reis](https://github.com/TaylorReis-lab)

</div>
