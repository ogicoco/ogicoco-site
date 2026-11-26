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
const menu=document.querySelector('.service-menu,.mobile-menu');
if(button&&menu){
  const setMenu=open=>{
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
    menu.hidden=!open;
    menu.classList.toggle('is-open',open);
  };
  button.addEventListener('click',()=>setMenu(button.getAttribute('aria-expanded')!=='true'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);button.focus()}});
  document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!button.contains(e.target)){setMenu(false)}});
}
document.querySelectorAll('.service-menu a,.desktop-nav a,.hero-service-links a').forEach(a=>{
  a.addEventListener('click',()=>window.gtag('event','navigation_click',{
    destination:a.getAttribute('href'),
    link_text:(a.textContent||'').trim(),
    navigation_area:a.closest('.hero-service-links')?'hero':a.closest('.desktop-nav')?'desktop_menu':'menu',
    page_path:window.location.pathname
  }));
});
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(el=>io.observe(el))}else{els.forEach(el=>el.classList.add('is-visible'))}
// Track links from the compact homepage as well as the shared navigation.
document.querySelectorAll('.home-section a[href^="/"]').forEach(a=>{
  a.addEventListener('click',()=>window.gtag('event','navigation_click',{
    destination:a.getAttribute('href'),
    link_text:(a.textContent||'').trim(),
    navigation_area:'homepage_section',
    page_path:window.location.pathname
  }));
});
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

document.querySelectorAll('a[href*="instagram.com/ogicoco_english"]').forEach((link,index)=>{
  link.addEventListener('click',()=>{
    window.gtag('event','instagram_click',{
      link_text:(link.textContent||'').trim(),
      link_url:link.href,
      link_position:index+1,
      page_path:window.location.pathname
    });
  });
});
