# PROJECT_STRUCTURE.md

## Estrutura do Projeto Excelia

### Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Landing page principal (versão simplificada) |
| `excelia-landing.html` | Versão alternativa da landing page |
| `excelia-design.html` | Design system v3 em HTML |
| `excelia-design-complete.html` | Design system completo (460 linhas) |
| `excelia-landing-official.html` | Versão oficial completa (Next.js export) |
| `Excelia-Premium.html` | Versão com visual premium dark |
| `Excelia-Preview.html` | Preview da matriz determinística |
| `excelia-light.html` | Versão light theme |
| `excelia-preview-*.html` | Versões de preview (v2, v3, animações) |
| `excelia-screens-preview.html` | Preview de telas |

### Documentação

| Arquivo | Descrição |
|---------|-----------|
| `HANDOFF.md` | Informações de contexto e handoff |
| `PROJECT_STRUCTURE.md` | Este arquivo - estrutura do projeto |
| `excelia-design-system.md` | Documentação do design system |
| `docx_content.txt` | Conteúdo extraído de documentos |

### Scripts e Ferramentas

| Arquivo | Descrição |
|---------|-----------|
| `fix_layout.mjs` | Script Node.js para correção de layout |
| `spec-driven-execution-planner.skill` | Skill de planejamento (arquivo binário) |

### Assets

| Arquivo | Descrição |
|---------|-----------|
| `excelia-light.tgz` | Arquivo compactado da versão light |
| `excelia_arquitetura_agentes.docx` | Documentação de arquitetura (Word) |
| `spec-driven-execution-planner.verify.zip` | Verificação de skill (zip) |

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS (via CDN)
- **JavaScript Vanilla** - Interatividade
- **Google Fonts** - Tipografia (Inter, JetBrains Mono, Fraunces)

## Como Usar

1. Abra qualquer arquivo `.html` diretamente no navegador
2. Para desenvolvimento, edite os arquivos HTML diretamente
3. Use `fix_layout.mjs` para correções automatizadas de layout

## Versões Disponíveis

1. **index.html** - Versão básica e limpa (recomendada para iniciar)
2. **excelia-landing-official.html** - Versão mais completa e profissional
3. **excelia-design-complete.html** - Demonstração do design system
4. **Excelia-Premium.html** - Versão com visual premium escuro

## Próximos Passos Sugeridos

- [ ] Consolidar todas as versões em um único código base
- [ ] Implementar backend para funcionalidades de IA
- [ ] Adicionar sistema de autenticação
- [ ] Criar painel de dashboard
- [ ] Implementar sistema de pagamentos
