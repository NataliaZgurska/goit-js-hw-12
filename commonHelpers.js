import{S as m,i as u,A as d}from"./assets/vendor-0b74c313.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".form-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader-container");n.style.display="none";async function p(i){const s="https://pixabay.com/api",r="/?key=42190673-143cbde4cd6a94de75e31d0a4",o=`&q=${i}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=s+r+o+e,a=await d.get(t);return console.log("Запит на сервер",a.data),a.data}l.addEventListener("submit",g);async function g(i){i.preventDefault();const s=i.target.elements.text.value;if(s==="")return;c.innerHTML="",n.style.display="flex";const{total:r,hits:o}=await p(s);if(console.log("onFormSubmit",r,o),r===0){y(),l.reset(),n.style.display="none";return}const e=o.map(f).join("");c.innerHTML=e,new m(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1}).refresh(),l.reset(),n.style.display="none"}function f({webformatURL:i,largeImageURL:s,tags:r,likes:o,views:e,comments:t,downloads:a}){return` 
  <a href="${s}" class="gallery-link">
     <figure>
      <img src="${i}" alt="${r}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${o}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${t}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${a}</span></div>
  </figcaption>
  </figure>
</a >`}function y(){u.show({close:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"10px",backgroundColor:"#B51B1B",position:"topRight",close:!0,timeout:1e4,progressBarColor:"#FFFFFF",maxWidth:"380px"})}
//# sourceMappingURL=commonHelpers.js.map
