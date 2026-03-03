# Excelia Design System v3

## Visão Geral

Design system "Modern Minimalist Excel" - a planilha reimaginada.

## Temas

### Light Theme (Padrão)
- **Background**: Clean Office white (#FFFFFF)
- **Primary**: Excel green (#1D6F42, #217346)
- **Grid**: #D0D0D0
- **Text**: #1A1A1A, #404040, #767676

### Dark Theme
- **Background**: Deep navy/charcoal (#050709, #0D1219)
- **Primary**: Bright Excel green (#2AB569)
- **Accent**: Gold premium (#B8860B, #D4A017)
- **Grid**: Subtle

## Cores Principais

### Excel Green
```css
--xg: #1D6F42;
--xg-l: #217346;
--xg-bright: #2E8B57;
--xg-dim: rgba(29,111,66,.08);
```

### Gold
```css
--gold: #B8860B;
--gold-l: #D4A017;
```

### Excel Selection Blue
```css
--blue: #1867C0;
--blue-m: #2E7DE8;
```

## Tipografia

- **Fraunces**: Títulos (serif moderno)
- **Plus Jakarta Sans**: Corpo de texto
- **JetBrains Mono**: Código, fórmulas

## Componentes

### Grid de Células
- Borda: 1px solid var(--cell-bdr)
- Fonte: JetBrains Mono
- Hover: var(--row-hover)

### Fita/Ribbon
- Background: var(--bg-hdr)
- Height: 36px

### Formula Bar
- Background: var(--fx-bg)
- Border: var(--fx-bdr)

### Botões Primários
- Background: var(--xg)
- Color: white
- Border-radius: 3px

## Layout

### Header
- Fixed top
- Altura total: 70px

### Container
- Max-width: 1200px
