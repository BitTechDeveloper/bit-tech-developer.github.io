!function(){"use strict";var t,e={839:function(){function t(t){return document.querySelector(t)}function e(t){return document.querySelectorAll(t)}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}document.addEventListener("DOMContentLoaded",(function(){t("body");var r=n(e(".thumbnail-img")),o=e(".large-img"),c=t(".lightbox-overlay"),i=(c.querySelector(".next"),c.querySelector(".prev"),t(".lightbox-close-img")),a=t(".cart-wrapper"),s=t(".cart-dropdown"),l=t(".dropdown-content"),d=t(".dropdown-content-empty"),u=t(".item-dropdown-display"),f=t(".total-price-dropdown-display"),v=t(".dropdown-delete"),m=t(".checkout"),h=t(".plus"),p=t(".minus"),g=t(".item-amount-display"),L=t(".cart-badge"),y=n(r.map((function(t){return t.src.replace("-thumbnail","")}))),E=e(".next"),b=e(".prev"),x=t(".hamburger-wrapper"),k=t(".menu"),O=t(".main-nav");x.addEventListener("click",(function(){O.classList.toggle("active"),k.classList.toggle("active"),x.classList.toggle("active")})),a.addEventListener("click",(function(t){s.contains(t.target)||a.classList.toggle("active")})),document.addEventListener("click",(function(t){a.contains(t.target)||s.contains(t.target)||a.classList.remove("active")}));var S=0,C=JSON.parse(localStorage.getItem("totalAmount"))||0,w=125*C;0===C&&(l.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden")),g.textContent=C,L.textContent=C,o.forEach((function(t){t.src=y[S]})),o.forEach((function(t){t.addEventListener("click",(function(){c.classList.add("active")}))})),i.addEventListener("click",(function(){c.classList.remove("active")})),r.forEach((function(t,e){t.addEventListener("click",(function(){r.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active");var n=t.src.replace("-thumbnail","");console.log(n),o.forEach((function(t){t.src=n})),S=e}))})),E.forEach((function(t){t.addEventListener("click",(function(){S<y.length-1&&S++,o.forEach((function(t){t.src=y[S]})),r.forEach((function(t){o.forEach((function(e){e.src===t.src.replace("-thumbnail","")?t.classList.add("active"):t.classList.remove("active")}))}))}))})),b.forEach((function(t){t.addEventListener("click",(function(){S>0&&S--,o.forEach((function(t){t.src=y[S]})),r.forEach((function(t){o.forEach((function(e){e.src===t.src.replace("-thumbnail","")?t.classList.add("active"):t.classList.remove("active")}))}))}))})),h.addEventListener("click",(function(){C++,w=125*C,g.textContent=C,L.textContent=C,u.textContent=C,f.textContent="$".concat(w),localStorage.setItem("totalAmount",JSON.stringify(C)),1===C&&(l.classList.remove("hidden"),m.classList.remove("hidden"),d.classList.add("hidden"))})),p.addEventListener("click",(function(){C>0&&(C--,w=125*C,g.textContent=C,L.textContent=C,u.textContent=C,f.textContent="$".concat(w),localStorage.setItem("totalAmount",JSON.stringify(C))),0===C&&(l.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden"))})),v.addEventListener("click",(function(){C=0,w=0,g.textContent=C,L.textContent=C,l.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden"),localStorage.setItem("totalAmount",JSON.stringify(C))}))}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,r),c.exports}r.m=e,t=[],r.O=function(e,n,o,c){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],c=t[d][2];for(var a=!0,s=0;s<n.length;s++)(!1&c||i>=c)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(a=!1,c<i&&(i=c));if(a){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}c=c||0;for(var d=t.length;d>0&&t[d-1][2]>c;d--)t[d]=t[d-1];t[d]=[n,o,c]},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={793:0,79:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,c,i=n[0],a=n[1],s=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var d=s(r)}for(e&&e(n);l<i.length;l++)c=i[l],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(d)},n=self.webpackChunksample_projects=self.webpackChunksample_projects||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[79],(function(){return r(839)}));o=r.O(o)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FDckUsSUFBSXJDLEtBQVlrQyxFQUNabkMsRUFBb0J3QixFQUFFVyxFQUFhbEMsS0FDckNELEVBQW9CTyxFQUFFTixHQUFZa0MsRUFBWWxDLElBR2hELEdBQUdtQyxFQUFTLElBQUkzQixFQUFTMkIsRUFBUXBDLEVBQ2xDLENBRUEsSUFER2lDLEdBQTRCQSxFQUEyQkMsR0FDckRuQixFQUFJTCxFQUFTaEIsT0FBUXFCLElBQ3pCZ0IsRUFBVXJCLEVBQVNLLEdBQ2hCZixFQUFvQndCLEVBQUVNLEVBQWlCQyxJQUFZRCxFQUFnQkMsSUFDckVELEVBQWdCQyxHQUFTLEtBRTFCRCxFQUFnQkMsR0FBVyxFQUU1QixPQUFPL0IsRUFBb0JRLEVBQUVDLEVBQzlCLEVBRUk4QixFQUFxQkMsS0FBa0MsNEJBQUlBLEtBQWtDLDZCQUFLLEdBQ3RHRCxFQUFtQnJELFFBQVE4QyxFQUFxQlMsS0FBSyxLQUFNLElBQzNERixFQUFtQkcsS0FBT1YsRUFBcUJTLEtBQUssS0FBTUYsRUFBbUJHLEtBQUtELEtBQUtGLEcsSUNoRHZGLElBQUlJLEVBQXNCM0MsRUFBb0JRLE9BQUVMLEVBQVcsQ0FBQyxLQUFLLFdBQWEsT0FBT0gsRUFBb0IsSUFBTSxJQUMvRzJDLEVBQXNCM0MsRUFBb0JRLEVBQUVtQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzLy4vc3JjL3NjcmlwdHMvbGlianMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3NhbXBsZS1wcm9qZWN0cy8uL3NyYy9zY3JpcHRzL2ZlbS9mZW0taW50LWVjb21tZXJjZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUtcHJvamVjdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2FtcGxlLXByb2plY3RzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NhbXBsZS1wcm9qZWN0cy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuICAgIHJldHVybiBzZWxlY3RlZEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBbGwoZWxlbWVudHMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcclxuICAgIHJldHVybiBzZWxlY3RlZEVsZW1lbnRzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGVsZW1lbnQsIHRleHQgPSBudWxsKSB7XHJcbiAgICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWFpbi5jc3NcIjtcclxuaW1wb3J0ICogYXMgZiBmcm9tIFwiLi4vbGlianMvZnVuY3Rpb25zXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZi5zZWxlY3QoXCJib2R5XCIpO1xyXG5cclxuICAgIGNvbnN0IHRodW1ibmFpbHMgPSBbLi4uZi5zZWxlY3RBbGwoXCIudGh1bWJuYWlsLWltZ1wiKV07XHJcbiAgICBjb25zdCBsYXJnZUltYWdlcyA9IGYuc2VsZWN0QWxsKFwiLmxhcmdlLWltZ1wiKTtcclxuXHJcbiAgICBjb25zdCBsaWdodGJveE92ZXJsYXkgPSBmLnNlbGVjdChcIi5saWdodGJveC1vdmVybGF5XCIpO1xyXG4gICAgY29uc3QgbGlnaHRib3hOZXh0SWNvbiA9IGxpZ2h0Ym94T3ZlcmxheS5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIik7XHJcbiAgICBjb25zdCBsaWdodGJveHByZXZJY29uID0gbGlnaHRib3hPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKTtcclxuICAgIGNvbnN0IGxpZ2h0Ym94Q2xvc2VJY29uID0gZi5zZWxlY3QoXCIubGlnaHRib3gtY2xvc2UtaW1nXCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcnRXcmFwcGVyID0gZi5zZWxlY3QoXCIuY2FydC13cmFwcGVyXCIpO1xyXG4gICAgY29uc3QgY2FydERyb3Bkb3duID0gZi5zZWxlY3QoXCIuY2FydC1kcm9wZG93blwiKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGYuc2VsZWN0KFwiLmRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnRFbXB0eSA9IGYuc2VsZWN0KFwiLmRyb3Bkb3duLWNvbnRlbnQtZW1wdHlcIik7XHJcbiAgICBjb25zdCBpdGVtRHJvcGRvd25EaXNwbGF5ID0gZi5zZWxlY3QoXCIuaXRlbS1kcm9wZG93bi1kaXNwbGF5XCIpO1xyXG4gICAgY29uc3QgdG90YWxQcmljZURyb3Bkb3duRGlzcGxheSA9IGYuc2VsZWN0KFwiLnRvdGFsLXByaWNlLWRyb3Bkb3duLWRpc3BsYXlcIik7XHJcbiAgICBjb25zdCBkcm9wZG93bkRlbGV0ZSA9IGYuc2VsZWN0KFwiLmRyb3Bkb3duLWRlbGV0ZVwiKTtcclxuICAgIGNvbnN0IGNoZWNrb3V0ID0gZi5zZWxlY3QoXCIuY2hlY2tvdXRcIik7XHJcblxyXG4gICAgY29uc3QgcGx1c0J0biA9IGYuc2VsZWN0KFwiLnBsdXNcIik7XHJcbiAgICBjb25zdCBtaW51c0J0biA9IGYuc2VsZWN0KFwiLm1pbnVzXCIpO1xyXG4gICAgY29uc3QgaXRlbUFtb3VudERpc3BsYXkgPSBmLnNlbGVjdChcIi5pdGVtLWFtb3VudC1kaXNwbGF5XCIpO1xyXG4gICAgY29uc3QgY2FydEJhZGdlID0gZi5zZWxlY3QoXCIuY2FydC1iYWRnZVwiKTtcclxuXHJcbiAgICBjb25zdCBsYXJnZUltYWdlU3JjcyA9IFtcclxuICAgICAgICAuLi50aHVtYm5haWxzLm1hcCgodCkgPT4gdC5zcmMucmVwbGFjZShcIi10aHVtYm5haWxcIiwgXCJcIikpLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBuZXh0cyA9IGYuc2VsZWN0QWxsKFwiLm5leHRcIik7XHJcbiAgICBjb25zdCBwcmV2cyA9IGYuc2VsZWN0QWxsKFwiLnByZXZcIik7XHJcblxyXG4gICAgLy8gaGFtYnVyZ2VyIHZhcmlhYmxlc1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyV3JhcHBlciA9IGYuc2VsZWN0KFwiLmhhbWJ1cmdlci13cmFwcGVyXCIpO1xyXG4gICAgY29uc3QgbWVudSA9IGYuc2VsZWN0KFwiLm1lbnVcIik7XHJcbiAgICBjb25zdCBtYWluTmF2ID0gZi5zZWxlY3QoXCIubWFpbi1uYXZcIik7XHJcblxyXG4gICAgLy8gaGFtYnVyZ2VyIGZ1bmN0aW9uXHJcbiAgICBoYW1idXJnZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBoYW1idXJnZXJXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkcm9wZG93biBmdW5jaW9uXHJcbiAgICBjYXJ0V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoY2FydERyb3Bkb3duLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcnRXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFjYXJ0V3JhcHBlci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgIWNhcnREcm9wZG93bi5jb250YWlucyhlLnRhcmdldClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2FydFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0aWFsIGluZGV4Zm9yIGxhcmdlIGltYWdlXHJcbiAgICBsZXQgbGFyZ2VJbWFnZVNyY3NJbmRleCA9IDA7XHJcbiAgICBsZXQgdG90YWxBbW91bnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxBbW91bnRcIikpIHx8IDA7XHJcbiAgICBsZXQgdG90YWxQcmljZSA9IHRvdGFsQW1vdW50ICogMTI1O1xyXG5cclxuICAgIGlmICh0b3RhbEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGNoZWNrb3V0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50RW1wdHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtQW1vdW50RGlzcGxheS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG4gICAgY2FydEJhZGdlLnRleHRDb250ZW50ID0gdG90YWxBbW91bnQ7XHJcblxyXG4gICAgLy8gaW5pdGlhbCBkaXNwbGF5IGZvciBsYXJnZSBpbWFnZXNcclxuXHJcbiAgICBsYXJnZUltYWdlcy5mb3JFYWNoKChsYXJnZUltYWdlKSA9PiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZS5zcmMgPSBsYXJnZUltYWdlU3Jjc1tsYXJnZUltYWdlU3Jjc0luZGV4XTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRpc3BsYXkgbGlnaGJveFxyXG4gICAgbGFyZ2VJbWFnZXMuZm9yRWFjaCgobGFyZ2VJbWFnZSkgPT4ge1xyXG4gICAgICAgIGxhcmdlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGlnaHRib3hPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBsaWdodGJveFxyXG4gICAgbGlnaHRib3hDbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsaWdodGJveE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNsaWNrIGV2ZW50IGZvciB0aHVtYm5haWwgdG8gY29udHJvbGwgbGFyZ2UgaW1hZ2VcclxuICAgIHRodW1ibmFpbHMuZm9yRWFjaCgodGh1bWJuYWlsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxzLmZvckVhY2goKHQpID0+IHQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFyZ2VJbWFnZVNyYyA9IHRodW1ibmFpbC5zcmMucmVwbGFjZShcIi10aHVtYm5haWxcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhcmdlSW1hZ2VTcmMpO1xyXG5cclxuICAgICAgICAgICAgbGFyZ2VJbWFnZXMuZm9yRWFjaCgobGFyZ2VJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VJbWFnZS5zcmMgPSBsYXJnZUltYWdlU3JjO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmNzSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxhcmdlIGltYWdlIG5hdmlnYXRpb24gZm9yIG5leHRcclxuICAgIG5leHRzLmZvckVhY2goKG5leHQpID0+IHtcclxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXJnZUltYWdlU3Jjc0luZGV4IDwgbGFyZ2VJbWFnZVNyY3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VJbWFnZVNyY3NJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID0gbGFyZ2VJbWFnZVNyY3NbbGFyZ2VJbWFnZVNyY3NJbmRleF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGh1bWJuYWlscy5mb3JFYWNoKCh0aHVtYm5haWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3JjLnJlcGxhY2UoXCItdGh1bWJuYWlsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gbGFyZ2UgaW1hZ2UgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXNcclxuICAgIHByZXZzLmZvckVhY2goKHByZXYpID0+IHtcclxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXJnZUltYWdlU3Jjc0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VJbWFnZVNyY3NJbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID0gbGFyZ2VJbWFnZVNyY3NbbGFyZ2VJbWFnZVNyY3NJbmRleF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGh1bWJuYWlscy5mb3JFYWNoKCh0aHVtYm5haWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VzLmZvckVhY2goKGxhcmdlSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2Uuc3JjID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3JjLnJlcGxhY2UoXCItdGh1bWJuYWlsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEl0ZW0gYW1vdW50IGluY3JlYW1lbnRcclxuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b3RhbEFtb3VudCsrO1xyXG4gICAgICAgIHRvdGFsUHJpY2UgPSB0b3RhbEFtb3VudCAqIDEyNTtcclxuICAgICAgICBpdGVtQW1vdW50RGlzcGxheS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG4gICAgICAgIGNhcnRCYWRnZS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG4gICAgICAgIGl0ZW1Ecm9wZG93bkRpc3BsYXkudGV4dENvbnRlbnQgPSB0b3RhbEFtb3VudDtcclxuICAgICAgICB0b3RhbFByaWNlRHJvcGRvd25EaXNwbGF5LnRleHRDb250ZW50ID0gYCQke3RvdGFsUHJpY2V9YDtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEFtb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0b3RhbEFtb3VudCkpO1xyXG5cclxuICAgICAgICBpZiAodG90YWxBbW91bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNoZWNrb3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEVtcHR5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBJdGVtIGFtb3VudCBkZWNyZWFtZW50XHJcbiAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0b3RhbEFtb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdG90YWxBbW91bnQtLTtcclxuICAgICAgICAgICAgdG90YWxQcmljZSA9IHRvdGFsQW1vdW50ICogMTI1O1xyXG4gICAgICAgICAgICBpdGVtQW1vdW50RGlzcGxheS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG4gICAgICAgICAgICBjYXJ0QmFkZ2UudGV4dENvbnRlbnQgPSB0b3RhbEFtb3VudDtcclxuICAgICAgICAgICAgaXRlbURyb3Bkb3duRGlzcGxheS50ZXh0Q29udGVudCA9IHRvdGFsQW1vdW50O1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlRHJvcGRvd25EaXNwbGF5LnRleHRDb250ZW50ID0gYCQke3RvdGFsUHJpY2V9YDtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkodG90YWxBbW91bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2hlY2tvdXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RW1wdHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRyb3Bkb3duIGRlbGV0ZVxyXG4gICAgZHJvcGRvd25EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b3RhbEFtb3VudCA9IDA7XHJcbiAgICAgICAgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgaXRlbUFtb3VudERpc3BsYXkudGV4dENvbnRlbnQgPSB0b3RhbEFtb3VudDtcclxuICAgICAgICBjYXJ0QmFkZ2UudGV4dENvbnRlbnQgPSB0b3RhbEFtb3VudDtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBjaGVja291dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudEVtcHR5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxBbW91bnRcIiwgSlNPTi5zdHJpbmdpZnkodG90YWxBbW91bnQpKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDc5MzogMCxcblx0Nzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzYW1wbGVfcHJvamVjdHNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc2FtcGxlX3Byb2plY3RzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNzldLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oODM5KTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwibmFtZXMiOlsiZGVmZXJyZWQiLCJzZWxlY3QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0QWxsIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImYiLCJ0aHVtYm5haWxzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwibGFyZ2VJbWFnZXMiLCJsaWdodGJveE92ZXJsYXkiLCJsaWdodGJveENsb3NlSWNvbiIsImNhcnRXcmFwcGVyIiwiY2FydERyb3Bkb3duIiwiZHJvcGRvd25Db250ZW50IiwiZHJvcGRvd25Db250ZW50RW1wdHkiLCJpdGVtRHJvcGRvd25EaXNwbGF5IiwidG90YWxQcmljZURyb3Bkb3duRGlzcGxheSIsImRyb3Bkb3duRGVsZXRlIiwiY2hlY2tvdXQiLCJwbHVzQnRuIiwibWludXNCdG4iLCJpdGVtQW1vdW50RGlzcGxheSIsImNhcnRCYWRnZSIsImxhcmdlSW1hZ2VTcmNzIiwibWFwIiwidCIsInNyYyIsInJlcGxhY2UiLCJuZXh0cyIsInByZXZzIiwiaGFtYnVyZ2VyV3JhcHBlciIsIm1lbnUiLCJtYWluTmF2IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwicmVtb3ZlIiwibGFyZ2VJbWFnZVNyY3NJbmRleCIsInRvdGFsQW1vdW50IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvdGFsUHJpY2UiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJsYXJnZUltYWdlIiwidGh1bWJuYWlsIiwiaW5kZXgiLCJsYXJnZUltYWdlU3JjIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJsZW5ndGgiLCJwcmV2IiwiY29uY2F0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJmdWxmaWxsZWQiLCJqIiwiT2JqZWN0Iiwia2V5cyIsImV2ZXJ5Iiwia2V5Iiwic3BsaWNlIiwiciIsIm8iLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwiY2h1bmtJZCIsIndlYnBhY2tKc29ucENhbGxiYWNrIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJkYXRhIiwibW9yZU1vZHVsZXMiLCJydW50aW1lIiwic29tZSIsImlkIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwic2VsZiIsImJpbmQiLCJwdXNoIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=