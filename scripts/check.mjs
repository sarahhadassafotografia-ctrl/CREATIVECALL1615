import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { Script } from 'node:vm';
const root = resolve('dist');
for (const name of readdirSync(root)) {
 if (name.endsWith('.js')) new Script(readFileSync(join(root,name),'utf8'), { filename:name });
 if (!name.endsWith('.html')) continue;
 for (const match of readFileSync(join(root,name),'utf8').matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
  const ref=match[1].split('#')[0].split('?')[0];
  if (!ref || /^(?:https?:|data:|mailto:|tel:|\/\/)/.test(ref)) continue;
  if (!existsSync(resolve(dirname(join(root,name)),ref))) throw new Error(`${name}: arquivo ausente ${ref}`);
 }
}
for (const name of ['index.html','processos.html','style.css','app.js','demandas.js','escalas.js','treinamento.js','assets/call1615-logo.png']) {
 if (!existsSync(join(root,name))) throw new Error(`Arquivo obrigatório ausente: ${name}`);
}
console.log('OK: sintaxe JavaScript, páginas, referências locais e arquivos obrigatórios.');
