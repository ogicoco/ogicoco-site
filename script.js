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

const featuresHeading=document.querySelector('#features .section-heading h2');
if(featuresHeading){
  const mobileFeaturesHeading=window.matchMedia('(max-width: 600px)');
  const updateFeaturesHeading=()=>{
    featuresHeading.innerHTML=mobileFeaturesHeading.matches
      ? '一人ひとりに合わせる<br>3つの特徴'
      : '一人ひとりに合わせる 3つの特徴';
  };
  updateFeaturesHeading();
  if(mobileFeaturesHeading.addEventListener){mobileFeaturesHeading.addEventListener('change',updateFeaturesHeading)}
}

const trialHeading=document.querySelector('#trial .section-heading h2');
if(trialHeading){
  const mobileTrialHeading=window.matchMedia('(max-width: 600px)');
  const updateTrialHeading=()=>{
    trialHeading.innerHTML=mobileTrialHeading.matches
      ? 'LINEから<br>かんたん4ステップ'
      : 'LINEから かんたん4ステップ';
  };
  updateTrialHeading();
  if(mobileTrialHeading.addEventListener){mobileTrialHeading.addEventListener('change',updateTrialHeading)}
}

const lessonSceneImage=document.querySelector('img[src="assets/images/students-studying.jpg"]');
if(lessonSceneImage){lessonSceneImage.style.objectPosition='center 35%'}

const trialLineButton=document.querySelector('#trial a.btn-line');
if(trialLineButton){
  trialLineButton.innerHTML='LINEで無料体験を<br>予約する';
  trialLineButton.style.whiteSpace='nowrap';
  const mobileTrialButton=window.matchMedia('(max-width: 600px)');
  const updateTrialButtonAlignment=()=>{
    trialLineButton.style.textAlign=mobileTrialButton.matches?'center':'';
  };
  updateTrialButtonAlignment();
  if(mobileTrialButton.addEventListener){mobileTrialButton.addEventListener('change',updateTrialButtonAlignment)}
}

const accessSection=document.querySelector('#access');
if(accessSection&&!document.querySelector('#instagram')){
  const instagramUrl='https://www.instagram.com/ogicoco_english';
  const instagramSection=document.createElement('section');
  instagramSection.className='instagram-section';
  instagramSection.id='instagram';
  instagramSection.innerHTML=`
    <div class="container instagram-wrap">
      <div class="instagram-heading">
        <p class="eyebrow">Instagram</p>
        <h2>教室の様子を発信しています</h2>
        <p>授業の雰囲気や教室の様子、お知らせなどをInstagramでもご覧いただけます。</p>
      </div>
      <div class="instagram-grid">
        <a class="instagram-card" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Instagramで教室の様子を見る">
          <img src="assets/images/classroom-wide-1.jpg" alt="おぎココ学習塾の明るい教室" loading="lazy">
          <span>教室の様子</span>
        </a>
        <a class="instagram-card" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Instagramで授業風景を見る">
          <img src="assets/images/lesson-scene-1.jpg" alt="おぎココ学習塾の個別指導の様子" loading="lazy">
          <span>授業の雰囲気</span>
        </a>
        <a class="instagram-card" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Instagramで講師の様子を見る">
          <img src="assets/images/teacher-smile.jpg" alt="おぎココ代表講師" loading="lazy">
          <span>講師・お知らせ</span>
        </a>
      </div>
      <div class="instagram-action">
        <a class="instagram-button" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagramを見る ↗</a>
        <span>@ogicoco_english</span>
      </div>
    </div>`;
  accessSection.parentNode.insertBefore(instagramSection,accessSection);

  const instagramStyle=document.createElement('style');
  instagramStyle.textContent=`
    .instagram-section{padding:88px 0;background:#fff}
    .instagram-wrap{max-width:1120px}
    .instagram-heading{text-align:center;max-width:720px;margin:0 auto 34px}
    .instagram-heading h2{font-size:clamp(30px,4vw,44px);line-height:1.3;margin:0 0 12px;letter-spacing:-.03em}
    .instagram-heading>p:last-child{margin:0;color:#687c84}
    .instagram-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .instagram-card{position:relative;overflow:hidden;border-radius:24px;aspect-ratio:1/1;text-decoration:none;background:#e9f7fc;box-shadow:0 12px 30px rgba(45,92,108,.1)}
    .instagram-card img{width:100%;height:100%;object-fit:cover;transition:transform .25s ease}
    .instagram-card:hover img{transform:scale(1.025)}
    .instagram-card span{position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);padding:8px 12px;border-radius:999px;font-size:13px;font-weight:800;color:#29444e}
    .instagram-action{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:28px}
    .instagram-button{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;background:#29444e;color:#fff;border-radius:999px;padding:14px 22px;font-weight:800;line-height:1.3}
    .instagram-button:hover{background:#2f687c}
    .instagram-action span{font-size:13px;color:#687c84;font-weight:700}
    @media(max-width:600px){
      .instagram-section{padding:64px 0}
      .instagram-heading{margin-bottom:24px}
      .instagram-heading h2{font-size:30px}
      .instagram-grid{gap:8px}
      .instagram-card{border-radius:15px}
      .instagram-card span{left:8px;bottom:8px;padding:6px 8px;font-size:10px}
      .instagram-action{margin-top:22px;gap:10px;flex-direction:column}
      .instagram-button{width:100%;max-width:320px}
    }`;
  document.head.appendChild(instagramStyle);
}

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
