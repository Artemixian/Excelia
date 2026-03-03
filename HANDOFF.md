# HANDOFF.md

## Informações de Contexto do Projeto

### Regras de Negócio

- O Excelia é uma ferramenta de produtividade focada em assistência de Excel com IA
- O principal objetivo é ajudar usuários a corrigir fórmulas, automatizar tarefas e aprender Excel
- O produto deve ser totalmente em português brasileiro
- Há 3 planos: Gratuito, Pro (R$ 29/mês) e Empresarial (R$ 99/mês)

### Decisões de Design

- **Tema**: Clean, moderno, inspirado no Microsoft Office/Excel
- **Cores principais**: Verde Excel (#16A34A, #22C55E), fundo branco/cinza claro
- **Tipografia**: Inter (sans-serif) para textos, JetBrains Mono para código/fórmulas
- **Layout**: Single-page com seções: Hero, Features, Demo Interativo, Preços
- **Animações**: Scroll reveal suave, efeito de células de planilha no background

### Arquitetura do Sistema

- **Frontend**: HTML + Tailwind CSS (CDN) + JavaScript vanilla
- **Tema**: Dark mode support via `dark` class no html e localStorage
- **Componentes**: Navegação fixa, hero com gradiente, grid de features, demo interativo, cards de preço
- **Deploy**: Pode ser hospedado em qualquer servidor estático (GitHub Pages, Vercel, Netlify)

### Padrões e Convenções

- Usar classes do Tailwind CSS para estilização
- Nomenclatura BEM-like para classes customizadas
- Cores definidas via tailwind.config no script
- Ícones usando emojis (🧮, 🤖, 📊, etc.) para simplicidade

### Dependências

- Tailwind CSS (CDN): `https://cdn.tailwindcss.com`
- Fontes do Google: Inter, JetBrains Mono
- Tone.js (reservado para futuras features de áudio)

### Pendências e TODOs

- [ ] Implementar backend real para análise de fórmulas
- [ ] Adicionar autenticação de usuários
- [ ] Criar painel de dashboard
- [ ] Implementar pagamentos (Stripe ou similar)
- [ ] Adicionar mais exemplos no demo interativo

### Notas Adicionais

- O projeto foi criado como uma landing page para validação de ideia
- O demo interativo é apenas simulado no frontend
- Futuras versões devem ter integração com API de IA (OpenAI, Claude, etc.)
