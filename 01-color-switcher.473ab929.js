!function(){const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n,e=!1;function o(n){t.btnStart.disabled=n,t.btnStop.disabled=!n}t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(t=>{e=!0,o(e),n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(t=>{e&&(e=!1,clearInterval(n),o(e))}))}();
//# sourceMappingURL=01-color-switcher.473ab929.js.map