const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");console.log(t.dataset),setTimeout;let r=null;e.addEventListener("click",(function(){e.toggleAttribute("disabled"),o.removeAttribute("disabled"),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),o.setAttribute("disabled",!0),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b8dbd815.js.map
