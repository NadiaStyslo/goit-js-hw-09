!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("h6c0i"),i=document.querySelector("button"),l=document.querySelector("form");function u(e,t){return i.setAttribute("disabled",""),new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o&&n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")),r("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}l.style.display="flex",l.style.fontSize="30px",l.style.flexDirection="column",i.style.fontSize="30px",i.style.margin="6px",l.style.padding="5px",l.addEventListener("click",(function(e){e.preventDefault();for(var t=e.currentTarget.elements,n=t.delay,r=t.step,i=t.amount,l=Number(n.value),c=Number(r.value),a=Number(i.value),f=1,s=1;s<=a;s+=1)u(f,l).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),f+=1,l+=c}))}();
//# sourceMappingURL=03-promises.760f8e94.js.map
