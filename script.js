document.documentElement.classList.add('js');

const GA_MEASUREMENT_ID='G-FHXZG8GX1N';
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
window.gtag('js',new Date());
window.gtag('config',GA_MEASUREMENT_ID);
const gaScript=document.createElement('script');
gaScript.async=true;
gaScript.src=`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(gaScript);

const button=document.querySelector('.menu-button');
const menu=document.querySelector('.mobile-menu');
if(button&&menu){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));menu.hidden=false;menu.classList.toggle('is-open',!open);if(open){menu.hidden=true}});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');menu.classList.remove('is-open');menu.hidden=true}))}
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(el=>io.observe(el))}else{els.forEach(el=>el.classList.add('is-visible'))}
const eikenCard=document.querySelector('.support-cards .support-card');
if(eikenCard&&!eikenCard.querySelector('.eiken-detail-link')){const a=document.createElement('a');a.href='eiken.html';a.className='text-link eiken-detail-link';a.textContent='英検対策を詳しく見る →';a.style.display='inline-block';a.style.marginTop='14px';eikenCard.appendChild(a)}

const learningModeTitle=document.querySelector('.split-photo h3');
if(learningModeTitle){learningModeTitle.innerHTML='「おぎココに来ると、<br>学習モードに。」'}

document.querySelectorAll('a[href*="page.line.me/971ktbrj"]').forEach((link,index)=>{
  link.addEventListener('click',()=>{
    window.gtag('event','line_click',{
      link_text:(link.textContent||'').trim(),
      link_url:link.href,
      link_position:index+1,
      page_path:window.location.pathname
    });
  });
});
