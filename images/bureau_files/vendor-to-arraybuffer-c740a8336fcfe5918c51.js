(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[143],{"2Tiy":function(e,f,t){var r=t("tjlA").Buffer;e.exports=function(e){if(e instanceof Uint8Array){if(0===e.byteOffset&&e.byteLength===e.buffer.byteLength)return e.buffer;if("function"==typeof e.buffer.slice)return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(r.isBuffer(e)){for(var f=new Uint8Array(e.length),t=e.length,n=0;n<t;n++)f[n]=e[n];return f.buffer}throw new Error("Argument must be a Buffer")}}}]);