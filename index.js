import{a as y,S as v,i as c}from"./assets/vendor-MgecxatS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function b(i){return y.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits)}const a="/goit-js-hw-11/assets/icons-DsMv-Dn6.svg",g=document.querySelector(".loader"),h=document.querySelector(".gallery");let w=new v(".gallery-link",{captionsData:"alt",captionDelay:250});function L(i){return i.map(function(t){const{webformatURL:r,largeImageURL:o,tags:e,likes:s,views:n,comments:f,downloads:p}=t;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${o}">
              <img class="image" src="${r}" alt="${e}" data-source="${o}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-like"></use>
          </svg><span>${s}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-views"></use>
          </svg><span>${n}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-comments"></use>
          </svg><span>${f}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-downloads"></use>
          </svg><span>${p}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function $(i){if(i.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const t=L(i);h.insertAdjacentHTML("afterbegin",t),l(),w.refresh()}function S(){h.innerHTML=""}function q(){g.classList.add("is-shown")}function l(){g.classList.remove("is-shown")}const d=document.querySelector(".form"),u=document.querySelector("button[type=submit]"),m=document.querySelector('input[name="search-text"]');u.disabled=!0;m.addEventListener("input",i=>{u.disabled=i.target.value.trim()===""});d.addEventListener("submit",i=>{i.preventDefault(),q();const t=m.value.trim();if(!t){l();return}S(),b(t).then(r=>{if(!r.hits||r.hits.length===0){c.warning({title:"Немає результатів",message:`Зображення за запитом "${t}" не знайдено.`,position:"topRight"});return}$(r.hits)}).catch(()=>{c.error({title:"Помилка",message:"Сталася помилка під час отримання даних. Спробуйте ще раз.",position:"topRight"})}).finally(()=>{l(),d.reset(),u.disabled=!0})});
//# sourceMappingURL=index.js.map
