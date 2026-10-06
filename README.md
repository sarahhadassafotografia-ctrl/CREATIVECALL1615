# CALL 16:15 — Equipe de Comunicação

Site estático em português com escalas, programação, Stories e Feed, checklists interativos, guia de processos e treinamento para os voluntários. Identidade visual preservada e elementos de papel rasgado removidos.

## Publicar pelo GitHub e Vercel

1. Descompacte o pacote e crie um repositório no GitHub.
2. Envie o conteúdo da pasta `call1615-github-vercel`: `dist`, `scripts`, `vercel.json`, `.gitignore` e README. O `vercel.json` deve ficar na raiz do repositório.
3. No Vercel, escolha **Add New → Project**, conecte o GitHub e importe o repositório.
4. Use a raiz do repositório como **Root Directory**. O `vercel.json` configura **Framework Preset: Other**, **Build Command: node scripts/check.mjs**, **Output Directory: dist** e nenhuma instalação de dependências.
5. Clique em **Deploy** e confira a página inicial e `/processos.html`.
6. Novos commits na branch de produção geram novos deploys pelo Vercel.

Não são necessárias variáveis de ambiente, banco de dados ou pacotes npm. A verificação usa módulos nativos do Node.js.

## Conferir localmente

Na pasta do projeto:

```bash
node scripts/check.mjs
python3 -m http.server 8000 --directory dist
```

Abra `http://localhost:8000`. A verificação confere sintaxe dos scripts, referências locais das páginas e arquivos obrigatórios. Faça também uma revisão visual no navegador.

## Onde editar

- `dist/index.html`: página inicial e carregamento dos scripts.
- `dist/app.js`: interface, programação, edição e salvamento dos checklists.
- `dist/demandas.js`: demandas detalhadas e checks.
- `dist/escalas.js`: escala padrão, turnos e áreas.
- `dist/cronograma.js`: 47 momentos do cronograma oficial da planilha.
- `dist/process-editor.js`: edição do guia de processos.
- `dist/treinamento.js`: propósito, consagração e convivência.
- `dist/processos.html`: guia dos processos por área.
- `dist/style.css`: identidade visual e regras responsivas.
- `dist/assets/call1615-logo.png`: logo oficial.

A arte da Clara Mendes não é exibida. O pacote contém o código e conteúdo padrão da versão atual; alterações salvas somente em um navegador precisam ser exportadas separadamente.

## Checklists e migração

O salvamento usa `localStorage`, chave `call1615-plan-v1`. Cada navegador, dispositivo e endereço tem seu próprio planejamento. As marcações e edições não são compartilhadas automaticamente entre voluntários e não alteram os arquivos do GitHub.

1. No site antigo, clique em **Exportar** e guarde `call1615-planejamento.json`.
2. Abra o novo endereço no Vercel.
3. Clique em **Importar** e selecione o JSON. A importação substitui o planejamento local após confirmação.
4. Exporte cópias atualizadas para guardar ou compartilhar o planejamento.

Limpar os dados do navegador pode apagar as marcações. Para atualizar os dados padrão para toda a equipe, edite o código e publique novamente; dados já salvos no navegador podem continuar prevalecendo. Sincronização em tempo real requer a implementação de um backend.

## Acesso

Este pacote não inclui autenticação. As permissões do endereço anterior não são transferidas para o Vercel. Repositório privado protege o código no GitHub, mas não torna o site publicado privado. Configure o acesso na hospedagem se a escala precisar ficar restrita à equipe.

## Documentação oficial

- https://vercel.com/docs/git/vercel-for-github
- https://vercel.com/docs/project-configuration/vercel-json

## Edição no site

Clique em **Editar planejamento** no topo. Os textos ficam editáveis. Na seção **Escala**, altere os nomes na tabela ou use **Editar turno** para alterar o dia, turno e responsáveis. Use **Adicionar dia / turno** para completar a escala, inclusive terça-feira. O formulário também permite remover turnos.

Na seção **Cronograma**, edite horário, momento e condução na tabela ou use **Editar momento**. É possível adicionar e remover momentos. Os horários de chegada são calculados entre 60 e 40 minutos antes do primeiro horário de cada bloco e atualizados ao concluir a edição.

Para modificar as demandas e seus checks, use **Editar demanda / responsável**. No guia de processos, clique em **Editar processos**. Finalize com **Concluir edição**. Todas essas alterações são locais e entram no arquivo de Exportar JSON; as edições do guia são incluídas no planejamento do mesmo endereço.

Orientações incluídas: chegar entre uma hora e 40 minutos antes do início, manter a organização e honrar os horários; neste ano, a equipe só será liberada quando todos os backups estiverem concluídos no Drive.
