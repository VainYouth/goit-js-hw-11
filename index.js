import{a as m,S as p,i as y}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function v(r){return m.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(s=>s.data.hits)}const a="/goit-js-hw-11/assets/icons-DsMv-Dn6.svg",u=document.querySelector(".loader"),d=document.querySelector(".gallery");let L=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function b(r){return r.map(function(s){const{webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:h,downloads:f}=s;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${o}">
              <img class="image" src="${i}" alt="${e}" data-source="${o}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-like"></use>
          </svg><span>${t}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-views"></use>
          </svg><span>${n}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-comments"></use>
          </svg><span>${h}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-downloads"></use>
          </svg><span>${f}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function w(r){if(r.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const s=b(r);d.insertAdjacentHTML("afterbegin",s),q(),L.refresh()}function $(){d.innerHTML=""}function S(){u.classList.add("is-shown")}function q(){u.classList.remove("is-shown")}const l=document.querySelector(".form"),c=document.querySelector("button[type=submit]"),g=document.querySelector('input[name="search-text"]');c.disabled=!0;g.addEventListener("input",r=>{c.disabled=r.target.value.trim()===""});l.addEventListener("submit",r=>{r.preventDefault(),S();const s=g.value.trim();if(!s){hideLoader();return}$(),v(s).then(w).catch(i=>console.log(i)).finally(()=>{hideLoader(),l.reset(),c.disabled=!0})});
//# sourceMappingURL=index.js.map
