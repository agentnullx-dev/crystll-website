const CONFIG={didiName:'Didi',letter:`To my forever best friend ❤️

I'm so grateful to have you in my life. Thank you for being my biggest supporter, my secret keeper, and the one who always knows how to make me smile.

From endless talks to silly laughs and every moment in between, life feels brighter because of you.

I'm lucky to have you. Never forget how special you are. ❤️`};
const slides=[...document.querySelectorAll('.slide')];
let current=1;
function show(n){current=n;slides.forEach(s=>s.classList.toggle('active',+s.dataset.slide===n));}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)show(+b.dataset.go)});
document.getElementById('awardName').textContent=CONFIG.didiName;
const saved=localStorage.getItem('raksha-letter');
const letterText=document.getElementById('letterText');
letterText.textContent=saved||CONFIG.letter;
const editor=document.getElementById('editor'),input=document.getElementById('letterInput');
document.getElementById('editLetter').onclick=()=>{input.value=letterText.textContent;editor.hidden=false;input.focus()};
document.getElementById('cancelLetter').onclick=()=>editor.hidden=true;
document.getElementById('saveLetter').onclick=()=>{letterText.textContent=input.value.trim()||CONFIG.letter;localStorage.setItem('raksha-letter',letterText.textContent);editor.hidden=true};
const single=document.getElementById('singlePhoto'),photo=document.getElementById('sisterPhoto'),placeholder=document.querySelector('.photo-placeholder');
single.onchange=()=>{const f=single.files[0];if(!f)return;const url=URL.createObjectURL(f);photo.onload=()=>URL.revokeObjectURL(url);photo.src=url;photo.style.display='block';placeholder.style.display='none'};
const memInput=document.getElementById('memoryInput'),grid=document.getElementById('memoryGrid');
memInput.onchange=()=>{[...memInput.files].forEach((f,i)=>{const url=URL.createObjectURL(f),item=document.createElement('div');item.className='memory-item';item.style.setProperty('--r',`${[-3,2,-2,3,-1,1][(grid.children.length+i)%6]}deg`);const img=new Image();img.loading='lazy';img.onload=()=>URL.revokeObjectURL(url);img.src=url;item.appendChild(img);grid.appendChild(item)})};
show(1);
