!function(){"use strict";var t,e={839:function(){function t(t){return document.querySelector(t)}function e(t){return document.querySelectorAll(t)}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}document.addEventListener("DOMContentLoaded",(function(){t("body");var r=n(e(".thumbnail-img")),o=e(".large-img"),c=t(".lightbox-overlay"),a=(c.querySelector(".next"),c.querySelector(".prev"),t(".lightbox-close-img")),i=t(".cart-wrapper"),s=t(".cart-dropdown"),l=t(".dropdown-content"),d=t(".dropdown-content-empty"),u=t(".item-dropdown-display"),f=t(".total-price-dropdown-display"),m=t(".dropdown-delete"),v=t(".checkout"),g=t(".plus"),p=t(".minus"),h=t(".item-amount-display"),L=t(".add-to-cart"),y=t(".cart-badge"),S=n(r.map((function(t){return t.src.replace("-thumbnail","")}))),E=e(".next"),b=e(".prev"),O=t(".hamburger-wrapper"),x=t(".menu"),k=t(".main-nav");O.addEventListener("click",(function(){k.classList.toggle("active"),x.classList.toggle("active"),O.classList.toggle("active")})),i.addEventListener("click",(function(t){s.contains(t.target)||i.classList.toggle("active")})),document.addEventListener("click",(function(t){i.contains(t.target)||s.contains(t.target)||i.classList.remove("active")}));var A=0,C=JSON.parse(localStorage.getItem("totalAmount"))||0,w=125*I,I=JSON.parse(localStorage.getItem("cartTotalAmount"))||0,J=JSON.parse(localStorage.getItem("cartTotalPrice"))||0;0===I&&(l.classList.add("hidden"),v.classList.add("hidden"),d.classList.remove("hidden")),h.textContent=C,y.textContent=I,u.textContent=I,f.textContent="$".concat(J),o.forEach((function(t){t.src=S[A]})),o.forEach((function(t){t.addEventListener("click",(function(){c.classList.add("active")}))})),a.addEventListener("click",(function(){c.classList.remove("active")})),r.forEach((function(t,e){t.addEventListener("click",(function(){r.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active");var n=t.src.replace("-thumbnail","");console.log(n),o.forEach((function(t){t.src=n})),A=e}))})),E.forEach((function(t){t.addEventListener("click",(function(){A<S.length-1&&A++,o.forEach((function(t){t.src=S[A]})),r.forEach((function(t){o.forEach((function(e){e.src===t.src.replace("-thumbnail","")?t.classList.add("active"):t.classList.remove("active")}))}))}))})),b.forEach((function(t){t.addEventListener("click",(function(){A>0&&A--,o.forEach((function(t){t.src=S[A]})),r.forEach((function(t){o.forEach((function(e){e.src===t.src.replace("-thumbnail","")?t.classList.add("active"):t.classList.remove("active")}))}))}))})),g.addEventListener("click",(function(){C++,w=125*C,h.textContent=C,localStorage.setItem("totalAmount",JSON.stringify(C))})),p.addEventListener("click",(function(){C>0&&(C--,w=125*C,h.textContent=C,localStorage.setItem("totalAmount",JSON.stringify(C)))})),m.addEventListener("click",(function(){I=0,J=0,localStorage.setItem("cartTotalAmount",JSON.stringify(I)),localStorage.setItem("cartTotalPrice",JSON.stringify(J)),y.textContent=I,l.classList.add("hidden"),v.classList.add("hidden"),d.classList.remove("hidden"),localStorage.setItem("totalAmount",JSON.stringify(C))})),L.addEventListener("click",(function(){I+=C,J+=w,C=0,w=125*I,h.textContent=C,localStorage.setItem("cartTotalAmount",JSON.stringify(I)),localStorage.setItem("cartTotalPrice",JSON.stringify(J)),y.textContent=I,u.textContent=I,f.textContent="$".concat(J),localStorage.setItem("totalAmount",JSON.stringify(C)),I>0&&(l.classList.remove("hidden"),v.classList.remove("hidden"),d.classList.add("hidden")),0===I&&(l.classList.add("hidden"),v.classList.add("hidden"),d.classList.remove("hidden"))}))}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,r),c.exports}r.m=e,t=[],r.O=function(e,n,o,c){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],c=t[d][2];for(var i=!0,s=0;s<n.length;s++)(!1&c||a>=c)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(i=!1,c<a&&(a=c));if(i){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}c=c||0;for(var d=t.length;d>0&&t[d-1][2]>c;d--)t[d]=t[d-1];t[d]=[n,o,c]},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={793:0,79:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,c,a=n[0],i=n[1],s=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var d=s(r)}for(e&&e(n);l<a.length;l++)c=a[l],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(d)},n=self.webpackChunksample_projects=self.webpackChunksample_projects||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[79],(function(){return r(839)}));o=r.O(o)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPSCxFQUFvQixJQUFNLElBQy9HMkMsRUFBc0IzQyxFQUFvQlEsRUFBRW1DLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtcHJvamVjdHMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zYW1wbGUtcHJvamVjdHMvLi9zcmMvc2NyaXB0cy9saWJqcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzLy4vc3JjL3NjcmlwdHMvZmVtL2ZlbS1pbnQtZWNvbW1lcmNlLmpzIiwid2VicGFjazovL3NhbXBsZS1wcm9qZWN0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUtcHJvamVjdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUtcHJvamVjdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdChlbGVtZW50KSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEFsbChlbGVtZW50cykge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkRWxlbWVudHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoZWxlbWVudCwgdGV4dCA9IG51bGwpIHtcclxuICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBcIi4uLy4uL3N0eWxlcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBmIGZyb20gXCIuLi9saWJqcy9mdW5jdGlvbnNcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBmLnNlbGVjdChcImJvZHlcIik7XHJcblxyXG4gICAgY29uc3QgdGh1bWJuYWlscyA9IFsuLi5mLnNlbGVjdEFsbChcIi50aHVtYm5haWwtaW1nXCIpXTtcclxuICAgIGNvbnN0IGxhcmdlSW1hZ2VzID0gZi5zZWxlY3RBbGwoXCIubGFyZ2UtaW1nXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0Ym94T3ZlcmxheSA9IGYuc2VsZWN0KFwiLmxpZ2h0Ym94LW92ZXJsYXlcIik7XHJcbiAgICBjb25zdCBsaWdodGJveE5leHRJY29uID0gbGlnaHRib3hPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuICAgIGNvbnN0IGxpZ2h0Ym94cHJldkljb24gPSBsaWdodGJveE92ZXJsYXkucXVlcnlTZWxlY3RvcihcIi5wcmV2XCIpO1xyXG4gICAgY29uc3QgbGlnaHRib3hDbG9zZUljb24gPSBmLnNlbGVjdChcIi5saWdodGJveC1jbG9zZS1pbWdcIik7XHJcblxyXG4gICAgY29uc3QgY2FydFdyYXBwZXIgPSBmLnNlbGVjdChcIi5jYXJ0LXdyYXBwZXJcIik7XHJcbiAgICBjb25zdCBjYXJ0RHJvcGRvd24gPSBmLnNlbGVjdChcIi5jYXJ0LWRyb3Bkb3duXCIpO1xyXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZi5zZWxlY3QoXCIuZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudEVtcHR5ID0gZi5zZWxlY3QoXCIuZHJvcGRvd24tY29udGVudC1lbXB0eVwiKTtcclxuICAgIGNvbnN0IGl0ZW1Ecm9wZG93bkRpc3BsYXkgPSBmLnNlbGVjdChcIi5pdGVtLWRyb3Bkb3duLWRpc3BsYXlcIik7XHJcbiAgICBjb25zdCB0b3RhbFByaWNlRHJvcGRvd25EaXNwbGF5ID0gZi5zZWxlY3QoXCIudG90YWwtcHJpY2UtZHJvcGRvd24tZGlzcGxheVwiKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duRGVsZXRlID0gZi5zZWxlY3QoXCIuZHJvcGRvd24tZGVsZXRlXCIpO1xyXG4gICAgY29uc3QgY2hlY2tvdXQgPSBmLnNlbGVjdChcIi5jaGVja291dFwiKTtcclxuXHJcbiAgICBjb25zdCBwbHVzQnRuID0gZi5zZWxlY3QoXCIucGx1c1wiKTtcclxuICAgIGNvbnN0IG1pbnVzQnRuID0gZi5zZWxlY3QoXCIubWludXNcIik7XHJcbiAgICBjb25zdCBpdGVtQW1vdW50RGlzcGxheSA9IGYuc2VsZWN0KFwiLml0ZW0tYW1vdW50LWRpc3BsYXlcIik7XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSBmLnNlbGVjdChcIi5hZGQtdG8tY2FydFwiKTtcclxuICAgIGNvbnN0IGNhcnRCYWRnZSA9IGYuc2VsZWN0KFwiLmNhcnQtYmFkZ2VcIik7XHJcblxyXG4gICAgY29uc3QgbGFyZ2VJbWFnZVNyY3MgPSBbLi4udGh1bWJuYWlscy5tYXAoKHQpID0+IHQuc3JjLnJlcGxhY2UoXCItdGh1bWJuYWlsXCIsIFwiXCIpKV07XHJcblxyXG4gICAgY29uc3QgbmV4dHMgPSBmLnNlbGVjdEFsbChcIi5uZXh0XCIpO1xyXG4gICAgY29uc3QgcHJldnMgPSBmLnNlbGVjdEFsbChcIi5wcmV2XCIpO1xyXG5cclxuICAgIC8vIGhhbWJ1cmdlciB2YXJpYWJsZXNcclxuICAgIGNvbnN0IGhhbWJ1cmdlcldyYXBwZXIgPSBmLnNlbGVjdChcIi5oYW1idXJnZXItd3JhcHBlclwiKTtcclxuICAgIGNvbnN0IG1lbnUgPSBmLnNlbGVjdChcIi5tZW51XCIpO1xyXG4gICAgY29uc3QgbWFpbk5hdiA9IGYuc2VsZWN0KFwiLm1haW4tbmF2XCIpO1xyXG5cclxuICAgIC8vIGhhbWJ1cmdlciBmdW5jdGlvblxyXG4gICAgaGFtYnVyZ2VyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgaGFtYnVyZ2VyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZHJvcGRvd24gZnVuY2lvblxyXG4gICAgY2FydFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcnREcm9wZG93bi5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJ0V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFjYXJ0V3JhcHBlci5jb250YWlucyhlLnRhcmdldCkgJiYgIWNhcnREcm9wZG93bi5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgY2FydFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0aWFsIGluZGV4Zm9yIGxhcmdlIGltYWdlXHJcbiAgICBsZXQgbGFyZ2VJbWFnZVNyY3NJbmRleCA9IDA7XHJcbiAgICBsZXQgdG90YWxBbW91bnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxBbW91bnRcIikpIHx8IDA7XHJcbiAgICBsZXQgdG90YWxQcmljZSA9IGNhcnRUb3RhbEFtb3VudCAqIDEyNTtcclxuXHJcbiAgICBsZXQgY2FydFRvdGFsQW1vdW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRUb3RhbEFtb3VudFwiKSkgfHwgMDtcclxuICAgIGxldCBjYXJ0VG90YWxQcmljZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0VG90YWxQcmljZVwiKSkgfHwgMDtcclxuXHJcbiAgICBpZiAoY2FydFRvdGFsQW1vdW50ID09PSAwKSB7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgY2hlY2tvdXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnRFbXB0eS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1BbW91bnREaXNwbGF5LnRleHRDb250ZW50ID0gdG90YWxBbW91bnQ7XHJcbiAgICBjYXJ0QmFkZ2UudGV4dENvbnRlbnQgPSBjYXJ0VG90YWxBbW91bnQ7XHJcbiAgICBpdGVtRHJvcGRvd25EaXNwbGF5LnRleHRDb250ZW50ID0gY2FydFRvdGFsQW1vdW50O1xyXG4gICAgdG90YWxQcmljZURyb3Bkb3duRGlzcGxheS50ZXh0Q29udGVudCA9IGAkJHtjYXJ0VG90YWxQcmljZX1gO1xyXG5cclxuICAgIC8vIGluaXRpYWwgZGlzcGxheSBmb3IgbGFyZ2UgaW1hZ2VzXHJcblxyXG4gICAgbGFyZ2VJbWFnZXMuZm9yRWFjaCgobGFyZ2VJbWFnZSkgPT4ge1xyXG4gICAgICAgIGxhcmdlSW1hZ2Uuc3JjID0gbGFyZ2VJbWFnZVNyY3NbbGFyZ2VJbWFnZVNyY3NJbmRleF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkaXNwbGF5IGxpZ2hib3hcclxuICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICBsYXJnZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpZ2h0Ym94T3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgbGlnaHRib3hcclxuICAgIGxpZ2h0Ym94Q2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGlnaHRib3hPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbGljayBldmVudCBmb3IgdGh1bWJuYWlsIHRvIGNvbnRyb2xsIGxhcmdlIGltYWdlXHJcbiAgICB0aHVtYm5haWxzLmZvckVhY2goKHRodW1ibmFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgICB0aHVtYm5haWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGh1bWJuYWlscy5mb3JFYWNoKCh0KSA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhcmdlSW1hZ2VTcmMgPSB0aHVtYm5haWwuc3JjLnJlcGxhY2UoXCItdGh1bWJuYWlsXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYXJnZUltYWdlU3JjKTtcclxuXHJcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID0gbGFyZ2VJbWFnZVNyYztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsYXJnZUltYWdlU3Jjc0luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsYXJnZSBpbWFnZSBuYXZpZ2F0aW9uIGZvciBuZXh0XHJcbiAgICBuZXh0cy5mb3JFYWNoKChuZXh0KSA9PiB7XHJcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFyZ2VJbWFnZVNyY3NJbmRleCA8IGxhcmdlSW1hZ2VTcmNzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmNzSW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXJnZUltYWdlcy5mb3JFYWNoKChsYXJnZUltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXJnZUltYWdlLnNyYyA9IGxhcmdlSW1hZ2VTcmNzW2xhcmdlSW1hZ2VTcmNzSW5kZXhdO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRodW1ibmFpbHMuZm9yRWFjaCgodGh1bWJuYWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXJnZUltYWdlcy5mb3JFYWNoKChsYXJnZUltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhcmdlSW1hZ2Uuc3JjID09PSB0aHVtYm5haWwuc3JjLnJlcGxhY2UoXCItdGh1bWJuYWlsXCIsIFwiXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gbGFyZ2UgaW1hZ2UgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXNcclxuICAgIHByZXZzLmZvckVhY2goKHByZXYpID0+IHtcclxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXJnZUltYWdlU3Jjc0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VJbWFnZVNyY3NJbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID0gbGFyZ2VJbWFnZVNyY3NbbGFyZ2VJbWFnZVNyY3NJbmRleF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGh1bWJuYWlscy5mb3JFYWNoKCh0aHVtYm5haWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFyZ2VJbWFnZS5zcmMgPT09IHRodW1ibmFpbC5zcmMucmVwbGFjZShcIi10aHVtYm5haWxcIiwgXCJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSXRlbSBhbW91bnQgaW5jcmVhbWVudFxyXG4gICAgcGx1c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRvdGFsQW1vdW50Kys7XHJcbiAgICAgICAgdG90YWxQcmljZSA9IHRvdGFsQW1vdW50ICogMTI1O1xyXG4gICAgICAgIGl0ZW1BbW91bnREaXNwbGF5LnRleHRDb250ZW50ID0gdG90YWxBbW91bnQ7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkodG90YWxBbW91bnQpKTtcclxuICAgIH0pO1xyXG4gICAgLy8gSXRlbSBhbW91bnQgZGVjcmVhbWVudFxyXG4gICAgbWludXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAodG90YWxBbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50LS07XHJcbiAgICAgICAgICAgIHRvdGFsUHJpY2UgPSB0b3RhbEFtb3VudCAqIDEyNTtcclxuICAgICAgICAgICAgaXRlbUFtb3VudERpc3BsYXkudGV4dENvbnRlbnQgPSB0b3RhbEFtb3VudDtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkodG90YWxBbW91bnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRyb3Bkb3duIGRlbGV0ZVxyXG4gICAgZHJvcGRvd25EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjYXJ0VG90YWxBbW91bnQgPSAwO1xyXG4gICAgICAgIGNhcnRUb3RhbFByaWNlID0gMDtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0VG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydFRvdGFsQW1vdW50KSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0VG90YWxQcmljZVwiLCBKU09OLnN0cmluZ2lmeShjYXJ0VG90YWxQcmljZSkpO1xyXG4gICAgICAgIGNhcnRCYWRnZS50ZXh0Q29udGVudCA9IGNhcnRUb3RhbEFtb3VudDtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBjaGVja291dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudEVtcHR5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkodG90YWxBbW91bnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFRvQ2FydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNhcnRUb3RhbEFtb3VudCArPSB0b3RhbEFtb3VudDtcclxuICAgICAgICBjYXJ0VG90YWxQcmljZSArPSB0b3RhbFByaWNlO1xyXG5cclxuICAgICAgICB0b3RhbEFtb3VudCA9IDA7XHJcbiAgICAgICAgdG90YWxQcmljZSA9IGNhcnRUb3RhbEFtb3VudCAqIDEyNTtcclxuICAgICAgICBpdGVtQW1vdW50RGlzcGxheS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRUb3RhbEFtb3VudFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0VG90YWxBbW91bnQpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRUb3RhbFByaWNlXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRUb3RhbFByaWNlKSk7XHJcblxyXG4gICAgICAgIGNhcnRCYWRnZS50ZXh0Q29udGVudCA9IGNhcnRUb3RhbEFtb3VudDtcclxuICAgICAgICBpdGVtRHJvcGRvd25EaXNwbGF5LnRleHRDb250ZW50ID0gY2FydFRvdGFsQW1vdW50O1xyXG4gICAgICAgIHRvdGFsUHJpY2VEcm9wZG93bkRpc3BsYXkudGV4dENvbnRlbnQgPSBgJCR7Y2FydFRvdGFsUHJpY2V9YDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQW1vdW50XCIsIEpTT04uc3RyaW5naWZ5KHRvdGFsQW1vdW50KSk7XHJcblxyXG4gICAgICAgIGlmIChjYXJ0VG90YWxBbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjaGVja291dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRFbXB0eS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhcnRUb3RhbEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2hlY2tvdXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RW1wdHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ3OTM6IDAsXG5cdDc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc2FtcGxlX3Byb2plY3RzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3NhbXBsZV9wcm9qZWN0c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzc5XSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgzOSk7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sIm5hbWVzIjpbImRlZmVycmVkIiwic2VsZWN0IiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdEFsbCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmIiwidGh1bWJuYWlscyIsIl90b0NvbnN1bWFibGVBcnJheSIsImxhcmdlSW1hZ2VzIiwibGlnaHRib3hPdmVybGF5IiwibGlnaHRib3hDbG9zZUljb24iLCJjYXJ0V3JhcHBlciIsImNhcnREcm9wZG93biIsImRyb3Bkb3duQ29udGVudCIsImRyb3Bkb3duQ29udGVudEVtcHR5IiwiaXRlbURyb3Bkb3duRGlzcGxheSIsInRvdGFsUHJpY2VEcm9wZG93bkRpc3BsYXkiLCJkcm9wZG93bkRlbGV0ZSIsImNoZWNrb3V0IiwicGx1c0J0biIsIm1pbnVzQnRuIiwiaXRlbUFtb3VudERpc3BsYXkiLCJhZGRUb0NhcnQiLCJjYXJ0QmFkZ2UiLCJsYXJnZUltYWdlU3JjcyIsIm1hcCIsInQiLCJzcmMiLCJyZXBsYWNlIiwibmV4dHMiLCJwcmV2cyIsImhhbWJ1cmdlcldyYXBwZXIiLCJtZW51IiwibWFpbk5hdiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsInJlbW92ZSIsImxhcmdlSW1hZ2VTcmNzSW5kZXgiLCJ0b3RhbEFtb3VudCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b3RhbFByaWNlIiwiY2FydFRvdGFsQW1vdW50IiwiY2FydFRvdGFsUHJpY2UiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsImZvckVhY2giLCJsYXJnZUltYWdlIiwidGh1bWJuYWlsIiwiaW5kZXgiLCJsYXJnZUltYWdlU3JjIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJsZW5ndGgiLCJwcmV2Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJmdWxmaWxsZWQiLCJqIiwiT2JqZWN0Iiwia2V5cyIsImV2ZXJ5Iiwia2V5Iiwic3BsaWNlIiwiciIsIm8iLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwiY2h1bmtJZCIsIndlYnBhY2tKc29ucENhbGxiYWNrIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJkYXRhIiwibW9yZU1vZHVsZXMiLCJydW50aW1lIiwic29tZSIsImlkIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwic2VsZiIsImJpbmQiLCJwdXNoIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=