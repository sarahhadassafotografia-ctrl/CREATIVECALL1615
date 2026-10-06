const processKey='call1615-plan-v1';let processEditing=false;
const processNodes=[...document.querySelectorAll('main h1,main h2,main h3,main p,main .eyebrow')];
function readPlan(){try{return JSON.parse(localStorage.getItem(processKey)||'{}')}catch{return {}}}
function showProcessEdits(){const plan=readPlan();processNodes.forEach((el,i)=>{el.dataset.processText='process-'+i;if(plan.processText?.[el.dataset.processText]!==undefined)el.textContent=plan.processText[el.dataset.processText]})}
showProcessEdits();document.querySelector('#processEdit').onclick=()=>{processEditing=!processEditing;document.body.classList.toggle('editing',processEditing);processNodes.forEach(el=>{el.contentEditable=processEditing?'true':'false';el.spellcheck=processEditing});document.querySelector('#processEdit').textContent=processEditing?'Concluir edição ✓':'Editar processos ↗';};
document.addEventListener('input',e=>{if(!processEditing||!e.target.dataset.processText)return;const plan=readPlan();plan.processText??={};plan.processText[e.target.dataset.processText]=e.target.innerText;try{localStorage.setItem(processKey,JSON.stringify(plan))}catch{const t=document.querySelector('#processToast');t.textContent='Não foi possível salvar. Confira o espaço disponível no navegador.';t.style.display='block'}});
window.addEventListener('storage',e=>{if(e.key===processKey&&!processEditing)showProcessEdits()});
