function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,b=function(){return l.Date.now()};function v(e,t,n){var i,o,r,f,a,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function k(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=b();if(k(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function w(e){return a=void 0,v&&i?y(e):(i=o=void 0,f)}function O(){var e=b(),n=k(e);if(i=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=p(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(p(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=o=a=void 0},O.flush=function(){return void 0===a?f:w(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})},feedbackFormRef=document.querySelector(".feedback-form"),feedbackFormRef.addEventListener("input",e(t)((function(){const e={email:feedbackFormRef.email.value,message:feedbackFormRef.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){if(!localStorage.getItem("feedback-form-state"))return;const{email:e,message:t}=JSON.parse(localStorage.getItem("feedback-form-state"));feedbackFormRef.email.value=e,feedbackFormRef.message.value=t}();
//# sourceMappingURL=03-feedback.789edebe.js.map
