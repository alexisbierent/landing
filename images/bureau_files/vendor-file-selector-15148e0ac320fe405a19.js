(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[260],{aHqM:function(e,n,t){"use strict";var r=t("mrSG"),i=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function o(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=i.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var a=[".DS_Store","Thumbs.db"];function u(e){return r.b(this,void 0,void 0,(function(){return r.d(this,(function(n){return[2,(t=e,t.dataTransfer&&e.dataTransfer?f(e.dataTransfer,e.type):c(e))];var t}))}))}function c(e){return(null!==e.target&&e.target.files?l(e.target.files):[]).map((function(e){return o(e)}))}function f(e,n){return r.b(this,void 0,void 0,(function(){var t;return r.d(this,(function(r){switch(r.label){case 0:return e.items?(t=l(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(p))]):[3,2];case 1:return[2,s(d(r.sent()))];case 2:return[2,s(l(e.files).map((function(e){return o(e)})))]}}))}))}function s(e){return e.filter((function(e){return-1===a.indexOf(e.name)}))}function l(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function p(e){if("function"!=typeof e.webkitGetAsEntry)return v(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?g(n):v(e)}function d(e){return e.reduce((function(e,n){return r.f(e,Array.isArray(n)?d(n):[n])}),[])}function v(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=o(n);return Promise.resolve(t)}function m(e){return r.b(this,void 0,void 0,(function(){return r.d(this,(function(n){return[2,e.isDirectory?g(e):h(e)]}))}))}function g(e){var n=e.createReader();return new Promise((function(e,t){var i=[];!function o(){var a=this;n.readEntries((function(n){return r.b(a,void 0,void 0,(function(){var a,u,c;return r.d(this,(function(r){switch(r.label){case 0:if(n.length)return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return a=r.sent(),e(a),[3,4];case 3:return u=r.sent(),t(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(m)),i.push(c),o(),r.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function h(e){return r.b(this,void 0,void 0,(function(){return r.d(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=o(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}t.d(n,"a",(function(){return u}))}}]);