(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function d(){let o=new Date;const r=document.getElementById("sec"),s=document.getElementById("min"),i=document.getElementById("hr"),t=document.getElementById("pa");setInterval(()=>{o=new Date;let e=o.getHours();const n=o.getMinutes(),c=o.getSeconds(),u=e>=12?"PM":"AM";r.innerHTML=c,c<10&&(r.innerHTML="0"+c),s.innerHTML=n,n<10&&(s.innerHTML="0"+n),e=e%12,e=e||12,i.innerHTML=e,e<10&&(i.innerHTML="0"+e),t.innerHTML=u},10)}window.onload=d;
