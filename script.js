document.documentElement.classList.add('js');
const button=document.querySelector('.menu-button');
const menu=document.querySelector('.mobile-menu');
if(button&&menu){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));menu.hidden=false;menu.classList.toggle('is-open',!open);if(open){menu.hidden=true}});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');menu.classList.remove('is-open');menu.hidden=true}))}
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(el=>io.observe(el))}else{els.forEach(el=>el.classList.add('is-visible'))}
