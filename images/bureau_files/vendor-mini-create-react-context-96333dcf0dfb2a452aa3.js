(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[214],{tEiQ:function(t,e,n){"use strict";(function(t){var o=n("q1tI"),i=n.n(o),r=n("dI71"),u=n("17x9"),s=n.n(u),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:{};function c(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,o){t=n,e.forEach((function(e){return e(t,o)}))}}}var p=i.a.createContext||function(t,e){var n,i,u,p="__create-react-context-"+((a[u="__global_unique_id__"]=(a[u]||0)+1)+"__"),l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=c(e.props.value),e}Object(r.a)(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,o=this.props.value,i=t.value;((r=o)===(u=i)?0!==r||1/r==1/u:r!=r&&u!=u)?n=0:(n="function"==typeof e?e(o,i):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var r,u},o.render=function(){return this.props.children},n}(o.Component);l.childContextTypes=((n={})[p]=s.a.object.isRequired,n);var f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(r.a)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},o.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},o.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},o.getValue=function(){return this.context[p]?this.context[p].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return f.contextTypes=((i={})[p]=s.a.object,i),{Provider:l,Consumer:f}};e.a=p}).call(this,n("yLpj"))}}]);