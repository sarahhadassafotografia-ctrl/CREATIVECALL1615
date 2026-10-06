const SCALE_ROLES=['Fotografia','Decupagem e edição','Stories','Reels','Cortes de aulas / pregação','Design'];
const SCALE_ROSTER=[
{day:'1',shift:'Noite',members:[['Sarah','Rebeca','Ester','Samuel Nogueira'],['Ester','Yasmim','Leticia'],['Samuel','Emilly','Giovanni Durso'],['Felipe','Luís'],['Samuel Nogueira'],['Alves']]},
{day:'2',shift:'Manhã',members:[['Ester','Yasmim','Leticia'],['Samuel Nogueira','Lara'],['Anna','Samuel','Isaac'],['Felipe','Giovanni'],['Ester'],['Alves']]},
{day:'2',shift:'Tarde',members:[['Sarah','Rebeca','Lara'],['Ester','Yasmim'],['Anna','Emily','Isaac'],['Felipe','Giovanni'],['Felipe'],['Alves']]},
{day:'2',shift:'Noite',members:[['Sarah','Alves','Ester','Lara'],['Ester','Yasmim','Leticia'],['Anna','Emily','Giovanni','Leticia'],['Isaac','Felipe'],['Luís'],['Alves']]},
{day:'3',shift:'Manhã',members:[['Ester','Yasmim','Rebeca'],['Ester','Leticia'],['Samuel','Emilly'],['Felipe'],['Sarah'],['Alves']]},
{day:'3',shift:'Tarde',members:[['Lara','Leticia'],['Yasmim','Lara'],['Samuel','Emilly','Luís'],['Felipe','Luís'],['Samuel'],['Alves']]},
{day:'4',shift:'Manhã',members:[['Sarah','Yasmim','Leticia'],['Ester','Yasmim','Leticia'],['Samuel','Luís','Emilly'],['Felipe'],['Samuel Nogueira'],['Alves']]},
{day:'4',shift:'Tarde',members:[['Todos'],[],['Todos'],['Todos'],[],['Alves']]},
{day:'4',shift:'Noite',members:[['Yasmim','Lara','Samuel Nogueira'],['Sarah','Ester'],['Samuel','Emilly','Luís'],['Isaac','Giovanni','Felipe'],[],['Alves']]}
];
const SCALE_PROCESSES=[
['Captar as fotografias dos momentos do turno','Decupar / selecionar as fotografias','Editar as fotografias selecionadas','Fazer backup dos arquivos brutos','Subir os arquivos no Drive'],
['Receber os arquivos captados pela fotografia','Decupar / selecionar as fotografias do turno','Editar as fotografias selecionadas','Fazer backup dos arquivos brutos','Subir os arquivos no Drive'],
['Captar stories, POVs e entrevistas dos stories','Decupar / selecionar os registros','Editar os stories','Passar pelo Isaac para aprovação; se indisponível, Samuel ou Sarah','Postar após aprovação','Fazer backup no Drive dos brutos e editados'],
['Captar reels, POVs e entrevistas do feed','Decupar / selecionar os registros','Editar os reels','Passar pelo Isaac para aprovação; se indisponível, Samuel ou Sarah','Postar após aprovação','Fazer backup no Drive dos brutos e editados'],
['Captar os cortes das aulas / pregação','Decupar / selecionar os trechos','Editar os cortes','Passar pelo Isaac para aprovação; se indisponível, Samuel ou Sarah','Postar após aprovação','Fazer backup no Drive dos brutos e editados'],
['Produzir as peças de design','Passar pelo Isaac para aprovação e postagem']
];
