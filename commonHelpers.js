import{i as g,a as w,S as C}from"./assets/vendor-483db976.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u={formEl:document.querySelector(".form-search"),imgContainer:document.querySelector(".gallery"),loaderContainer:document.querySelector(".loader-container"),loaderBtn:document.querySelector(".js-load-btn")};function b({webformatURL:o,largeImageURL:r,tags:s,likes:a,views:e,comments:t,downloads:n}){return` 
  <a href="${r}" class="gallery-link">
     <figure>
      <img src="${o}" alt="${s}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${a}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${t}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${n}</span></div>
  </figcaption>
  </figure>
</a >`}function p(o){const r=o.map(b).join("");u.imgContainer.insertAdjacentHTML("beforeend",r)}const{loaderBtn:h,loaderContainer:y}=u;function F(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}function A(){h.classList.remove("hidden")}function B(){h.classList.add("hidden")}function E(){g.show({close:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"10px",backgroundColor:"#B51B1B",position:"center",close:!0,timeout:1e4,progressBarColor:"#FFFFFF",maxWidth:"380px"})}function x(){g.show({close:!0,message:"We are sorry, but you have reached the end of search results",messageColor:"#FFFFFF",messageSize:"10px",backgroundColor:"#004ff9c7",position:"bottomCenter",close:!0,timeout:1e4,progressBarColor:"#FFFFFF",maxWidth:"380px"})}class q{constructor(){}async getPictures(r,s,a){const e="https://pixabay.com/api",t="/?key=42190673-143cbde4cd6a94de75e31d0a4",n="&image_type=photo&orientation=horizontal&safesearch=true&per_page=",v="&page=",S=`&q=${r}`,$=`${e}${t}${S}${n}${a}${v}${s}`;return(await w.get($)).data}}const{formEl:d,imgContainer:f,loaderBtn:M}=u,L=new q;let i;const m=15;let c="";d.addEventListener("submit",H);async function H(o){if(o.preventDefault(),c=o.target.elements.text.value.trim(),c===""){f.innerHTML="";return}f.innerHTML="",F(),i=1;const{totalHits:r,hits:s}=await L.getPictures(c,i,m);if(s.length===0){E(),d.reset(),l();return}p(s),new C(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1}),d.reset(),l(),P(r)}M.addEventListener("click",O);async function O(){i+=1,F(),B();const{totalHits:o,hits:r}=await L.getPictures(c,i,m);p(r),l(),P(o)}function P(o){i<=o/m?A():x()}
//# sourceMappingURL=commonHelpers.js.map
