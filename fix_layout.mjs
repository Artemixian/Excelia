// Script de correção de layout para Excelia
// Uso: node fix_layout.mjs [arquivo]

import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

const file = process.argv[2] || 'index.html';

async function fixLayout() {
    if (!existsSync(file)) {
        console.error(`Arquivo ${file} não encontrado`);
        process.exit(1);
    }
    
    console.log(`Processando ${file}...`);
    
    let content = await readFile(file, 'utf-8');
    
    // Correções aplicadas:
    // 1. Adiciona meta viewport se não existir
    if (!content.includes('viewport')) {
        content = content.replace(
            '<head>',
            '<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
        );
        console.log('✓ Meta viewport adicionado');
    }
    
    // 2. Adiciona lang pt-BR
    if (!content.includes('lang=')) {
        content = content.replace('<html', '<html lang="pt-BR"');
        console.log('✓ Lang pt-BR adicionado');
    }
    
    // 3. Corrige caracteres especiais
    content = content.replace(/–/g, '—');
    console.log('✓ Caracteres especiais corrigidos');
    
    await writeFile(file, content);
    console.log(`✅ ${file} processado com sucesso!`);
}

fixLayout().catch(console.error);
