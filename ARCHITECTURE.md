# Arquitetura de Agentes - Excelia

## Visão Geral

O sistema Excelia utiliza uma arquitetura multi-agente para processar e analisar planilhas Excel.

## Agentes Principais

### 1. Agente de Diagnóstico
- **Função**: Analisar a estrutura da planilha
- **Entrada**: Arquivo .xlsx/.csv
- **Saída**: Relatório de estrutura e anomalias detectadas
- **Responsabilidades**:
  - Identificar colunas e tipos de dados
  - Detectar fórmulas quebradas
  - Mapear dependências entre células

### 2. Agente de Correção
- **Função**: Corrigir erros automaticamente
- **Entrada**: Lista de erros do Agente de Diagnóstico
- **Saída**: Planilha corrigida
- **Responsabilidades**:
  - Corrigir #REF!, #VALUE!, #N/A
  - Ajustar referências circulares
  - Normalizar formatações

### 3. Agente de Geração
- **Função**: Criar novos conteúdos
- **Entrada**: Prompt do usuário + contexto da planilha
- **Saída**: Fórmulas, dashboards ou scripts VBA
- **Responsabilidades**:
  - Gerar fórmulas complexas
  - Criar dashboards visuais
  - Produzir macros VBA

### 4. Agente de Auditoria
- **Função**: Verificar integridade dos dados
- **Entrada**: Planilha completa
- **Saída**: Score de integridade (0-100) + relatório
- **Responsabilidades**:
  - Identificar anomalias estatísticas
  - Verificar consistência contábil
  - Validar regras de negócio

## Fluxo de Processamento

```
Upload → Diagnóstico → [Correção | Geração | Auditoria] → Resultado
```

## Integrações

- **Excel Add-in**: Interface nativa
- **API REST**: Integração com ERPs
- **Web Interface**: Upload direto

## Segurança

- Processamento em sessão isolada
- Dados criptografados end-to-end
- Não persistência de dados
- Conformidade LGPD
