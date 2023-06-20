(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tu(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ae={},qr=[],Wt=()=>{},o0=()=>!1,a0=/^on[^a-z]/,fa=e=>a0.test(e),nu=e=>e.startsWith("onUpdate:"),He=Object.assign,ru=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},l0=Object.prototype.hasOwnProperty,fe=(e,t)=>l0.call(e,t),q=Array.isArray,Wr=e=>Ts(e)==="[object Map]",ha=e=>Ts(e)==="[object Set]",Bf=e=>Ts(e)==="[object Date]",ee=e=>typeof e=="function",je=e=>typeof e=="string",Qi=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",_p=e=>xe(e)&&ee(e.then)&&ee(e.catch),xp=Object.prototype.toString,Ts=e=>xp.call(e),c0=e=>Ts(e).slice(8,-1),Ap=e=>Ts(e)==="[object Object]",iu=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Eo=tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},u0=/-(\w)/g,cn=da(e=>e.replace(u0,(t,n)=>n?n.toUpperCase():"")),f0=/\B([A-Z])/g,di=da(e=>e.replace(f0,"-$1").toLowerCase()),pa=da(e=>e.charAt(0).toUpperCase()+e.slice(1)),sl=da(e=>e?`on${pa(e)}`:""),Xi=(e,t)=>!Object.is(e,t),_o=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Po=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ql=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Uf;const Wl=()=>Uf||(Uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function su(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=je(r)?m0(r):su(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(je(e))return e;if(xe(e))return e}}const h0=/;(?![^(]*\))/g,d0=/:([^]+)/,p0=/\/\*[^]*?\*\//g;function m0(e){const t={};return e.replace(p0,"").split(h0).forEach(n=>{if(n){const r=n.split(d0);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ar(e){let t="";if(je(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const r=Ar(e[n]);r&&(t+=r+" ")}else if(xe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const g0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v0=tu(g0);function Tp(e){return!!e||e===""}function y0(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ma(e[r],t[r]);return n}function ma(e,t){if(e===t)return!0;let n=Bf(e),r=Bf(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Qi(e),r=Qi(t),n||r)return e===t;if(n=q(e),r=q(t),n||r)return n&&r?y0(e,t):!1;if(n=xe(e),r=xe(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ma(e[o],t[o]))return!1}}return String(e)===String(t)}function Sp(e,t){return e.findIndex(n=>ma(n,t))}const Do=e=>je(e)?e:e==null?"":q(e)||xe(e)&&(e.toString===xp||!ee(e.toString))?JSON.stringify(e,Ip,2):String(e),Ip=(e,t)=>t&&t.__v_isRef?Ip(e,t.value):Wr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ha(t)?{[`Set(${t.size})`]:[...t.values()]}:xe(t)&&!q(t)&&!Ap(t)?String(t):t;let Bt;class w0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!t&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Bt;try{return Bt=this,t()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function b0(e,t=Bt){t&&t.active&&t.effects.push(e)}function E0(){return Bt}const ou=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Cp=e=>(e.w&Hn)>0,kp=e=>(e.n&Hn)>0,_0=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Hn},x0=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Cp(i)&&!kp(i)?i.delete(e):t[n++]=i,i.w&=~Hn,i.n&=~Hn}t.length=n}},Gl=new WeakMap;let Pi=0,Hn=1;const Yl=30;let Vt;const wr=Symbol(""),Ql=Symbol("");class au{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,b0(this,r)}run(){if(!this.active)return this.fn();let t=Vt,n=$n;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Vt,Vt=this,$n=!0,Hn=1<<++Pi,Pi<=Yl?_0(this):Vf(this),this.fn()}finally{Pi<=Yl&&x0(this),Hn=1<<--Pi,Vt=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(Vf(this),this.onStop&&this.onStop(),this.active=!1)}}function Vf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let $n=!0;const Op=[];function pi(){Op.push($n),$n=!1}function mi(){const e=Op.pop();$n=e===void 0?!0:e}function At(e,t,n){if($n&&Vt){let r=Gl.get(e);r||Gl.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=ou()),Pp(i)}}function Pp(e,t){let n=!1;Pi<=Yl?kp(e)||(e.n|=Hn,n=!Cp(e)):n=!e.has(Vt),n&&(e.add(Vt),Vt.deps.push(e))}function wn(e,t,n,r,i,s){const o=Gl.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&q(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":q(e)?iu(n)&&a.push(o.get("length")):(a.push(o.get(wr)),Wr(e)&&a.push(o.get(Ql)));break;case"delete":q(e)||(a.push(o.get(wr)),Wr(e)&&a.push(o.get(Ql)));break;case"set":Wr(e)&&a.push(o.get(wr));break}if(a.length===1)a[0]&&Xl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xl(ou(l))}}function Xl(e,t){const n=q(e)?e:[...e];for(const r of n)r.computed&&zf(r);for(const r of n)r.computed||zf(r)}function zf(e,t){(e!==Vt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A0=tu("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qi)),T0=lu(),S0=lu(!1,!0),I0=lu(!0),Hf=C0();function C0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=pe(this);for(let s=0,o=this.length;s<o;s++)At(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pi();const r=pe(this)[t].apply(this,n);return mi(),r}}),e}function k0(e){const t=pe(this);return At(t,"has",e),t.hasOwnProperty(e)}function lu(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?K0:Fp:t?Lp:Mp).get(r))return r;const o=q(r);if(!e){if(o&&fe(Hf,i))return Reflect.get(Hf,i,s);if(i==="hasOwnProperty")return k0}const a=Reflect.get(r,i,s);return(Qi(i)?Dp.has(i):A0(i))||(e||At(r,"get",i),t)?a:ft(a)?o&&iu(i)?a:a.value:xe(a)?e?$p(a):gi(a):a}}const O0=Np(),P0=Np(!0);function Np(e=!1){return function(n,r,i,s){let o=n[r];if(ei(o)&&ft(o)&&!ft(i))return!1;if(!e&&(!No(i)&&!ei(i)&&(o=pe(o),i=pe(i)),!q(n)&&ft(o)&&!ft(i)))return o.value=i,!0;const a=q(n)&&iu(r)?Number(r)<n.length:fe(n,r),l=Reflect.set(n,r,i,s);return n===pe(s)&&(a?Xi(i,o)&&wn(n,"set",r,i):wn(n,"add",r,i)),l}}function D0(e,t){const n=fe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&wn(e,"delete",t,void 0),r}function N0(e,t){const n=Reflect.has(e,t);return(!Qi(t)||!Dp.has(t))&&At(e,"has",t),n}function R0(e){return At(e,"iterate",q(e)?"length":wr),Reflect.ownKeys(e)}const Rp={get:T0,set:O0,deleteProperty:D0,has:N0,ownKeys:R0},M0={get:I0,set(e,t){return!0},deleteProperty(e,t){return!0}},L0=He({},Rp,{get:S0,set:P0}),cu=e=>e,ga=e=>Reflect.getPrototypeOf(e);function qs(e,t,n=!1,r=!1){e=e.__v_raw;const i=pe(e),s=pe(t);n||(t!==s&&At(i,"get",t),At(i,"get",s));const{has:o}=ga(i),a=r?cu:n?hu:Ji;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function Ws(e,t=!1){const n=this.__v_raw,r=pe(n),i=pe(e);return t||(e!==i&&At(r,"has",e),At(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Gs(e,t=!1){return e=e.__v_raw,!t&&At(pe(e),"iterate",wr),Reflect.get(e,"size",e)}function Kf(e){e=pe(e);const t=pe(this);return ga(t).has.call(t,e)||(t.add(e),wn(t,"add",e,e)),this}function qf(e,t){t=pe(t);const n=pe(this),{has:r,get:i}=ga(n);let s=r.call(n,e);s||(e=pe(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Xi(t,o)&&wn(n,"set",e,t):wn(n,"add",e,t),this}function Wf(e){const t=pe(this),{has:n,get:r}=ga(t);let i=n.call(t,e);i||(e=pe(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&wn(t,"delete",e,void 0),s}function Gf(){const e=pe(this),t=e.size!==0,n=e.clear();return t&&wn(e,"clear",void 0,void 0),n}function Ys(e,t){return function(r,i){const s=this,o=s.__v_raw,a=pe(o),l=t?cu:e?hu:Ji;return!e&&At(a,"iterate",wr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Qs(e,t,n){return function(...r){const i=this.__v_raw,s=pe(i),o=Wr(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?cu:t?hu:Ji;return!t&&At(s,"iterate",l?Ql:wr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Pn(e){return function(...t){return e==="delete"?!1:this}}function F0(){const e={get(s){return qs(this,s)},get size(){return Gs(this)},has:Ws,add:Kf,set:qf,delete:Wf,clear:Gf,forEach:Ys(!1,!1)},t={get(s){return qs(this,s,!1,!0)},get size(){return Gs(this)},has:Ws,add:Kf,set:qf,delete:Wf,clear:Gf,forEach:Ys(!1,!0)},n={get(s){return qs(this,s,!0)},get size(){return Gs(this,!0)},has(s){return Ws.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ys(!0,!1)},r={get(s){return qs(this,s,!0,!0)},get size(){return Gs(this,!0)},has(s){return Ws.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Qs(s,!1,!1),n[s]=Qs(s,!0,!1),t[s]=Qs(s,!1,!0),r[s]=Qs(s,!0,!0)}),[e,n,t,r]}const[$0,j0,B0,U0]=F0();function uu(e,t){const n=t?e?U0:B0:e?j0:$0;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(fe(n,i)&&i in r?n:r,i,s)}const V0={get:uu(!1,!1)},z0={get:uu(!1,!0)},H0={get:uu(!0,!1)},Mp=new WeakMap,Lp=new WeakMap,Fp=new WeakMap,K0=new WeakMap;function q0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W0(e){return e.__v_skip||!Object.isExtensible(e)?0:q0(c0(e))}function gi(e){return ei(e)?e:fu(e,!1,Rp,V0,Mp)}function G0(e){return fu(e,!1,L0,z0,Lp)}function $p(e){return fu(e,!0,M0,H0,Fp)}function fu(e,t,n,r,i){if(!xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=W0(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Gr(e){return ei(e)?Gr(e.__v_raw):!!(e&&e.__v_isReactive)}function ei(e){return!!(e&&e.__v_isReadonly)}function No(e){return!!(e&&e.__v_isShallow)}function jp(e){return Gr(e)||ei(e)}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function Bp(e){return Po(e,"__v_skip",!0),e}const Ji=e=>xe(e)?gi(e):e,hu=e=>xe(e)?$p(e):e;function Up(e){$n&&Vt&&(e=pe(e),Pp(e.dep||(e.dep=ou())))}function Vp(e,t){e=pe(e);const n=e.dep;n&&Xl(n)}function ft(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return Hp(e,!1)}function zp(e){return Hp(e,!0)}function Hp(e,t){return ft(e)?e:new Y0(e,t)}class Y0{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:pe(t),this._value=n?t:Ji(t)}get value(){return Up(this),this._value}set value(t){const n=this.__v_isShallow||No(t)||ei(t);t=n?t:pe(t),Xi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ji(t),Vp(this))}}function Fe(e){return ft(e)?e.value:e}const Q0={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ft(i)&&!ft(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Kp(e){return Gr(e)?e:new Proxy(e,Q0)}class X0{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new au(t,()=>{this._dirty||(this._dirty=!0,Vp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=pe(this);return Up(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function J0(e,t,n=!1){let r,i;const s=ee(e);return s?(r=e,i=Wt):(r=e.get,i=e.set),new X0(r,i,s||!i,n)}function jn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){va(s,t,n)}return i}function Gt(e,t,n,r){if(ee(e)){const s=jn(e,t,n,r);return s&&_p(s)&&s.catch(o=>{va(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Gt(e[s],t,n,r));return i}function va(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){jn(l,null,10,[e,o,a]);return}}Z0(e,n,i,r)}function Z0(e,t,n,r=!0){console.error(e)}let Zi=!1,Jl=!1;const ct=[];let tn=0;const Yr=[];let pn=null,sr=0;const qp=Promise.resolve();let du=null;function pu(e){const t=du||qp;return e?t.then(this?e.bind(this):e):t}function e1(e){let t=tn+1,n=ct.length;for(;t<n;){const r=t+n>>>1;es(ct[r])<e?t=r+1:n=r}return t}function mu(e){(!ct.length||!ct.includes(e,Zi&&e.allowRecurse?tn+1:tn))&&(e.id==null?ct.push(e):ct.splice(e1(e.id),0,e),Wp())}function Wp(){!Zi&&!Jl&&(Jl=!0,du=qp.then(Yp))}function t1(e){const t=ct.indexOf(e);t>tn&&ct.splice(t,1)}function n1(e){q(e)?Yr.push(...e):(!pn||!pn.includes(e,e.allowRecurse?sr+1:sr))&&Yr.push(e),Wp()}function Yf(e,t=Zi?tn+1:0){for(;t<ct.length;t++){const n=ct[t];n&&n.pre&&(ct.splice(t,1),t--,n())}}function Gp(e){if(Yr.length){const t=[...new Set(Yr)];if(Yr.length=0,pn){pn.push(...t);return}for(pn=t,pn.sort((n,r)=>es(n)-es(r)),sr=0;sr<pn.length;sr++)pn[sr]();pn=null,sr=0}}const es=e=>e.id==null?1/0:e.id,r1=(e,t)=>{const n=es(e)-es(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yp(e){Jl=!1,Zi=!0,ct.sort(r1);const t=Wt;try{for(tn=0;tn<ct.length;tn++){const n=ct[tn];n&&n.active!==!1&&jn(n,null,14)}}finally{tn=0,ct.length=0,Gp(),Zi=!1,du=null,(ct.length||Yr.length)&&Yp()}}function i1(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ae;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||Ae;h&&(i=n.map(p=>je(p)?p.trim():p)),f&&(i=n.map(ql))}let a,l=r[a=sl(t)]||r[a=sl(cn(t))];!l&&s&&(l=r[a=sl(di(t))]),l&&Gt(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Gt(c,e,6,i)}}function Qp(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!ee(e)){const l=c=>{const u=Qp(c,t,!0);u&&(a=!0,He(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(xe(e)&&r.set(e,null),null):(q(s)?s.forEach(l=>o[l]=null):He(o,s),xe(e)&&r.set(e,o),o)}function ya(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,di(t))||fe(e,t))}let Mt=null,Xp=null;function Ro(e){const t=Mt;return Mt=e,Xp=e&&e.type.__scopeId||null,t}function It(e,t=Mt,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ah(-1);const s=Ro(t);let o;try{o=e(...i)}finally{Ro(s),r._d&&ah(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ol(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:y}=e;let A,w;const b=Ro(e);try{if(n.shapeFlag&4){const k=i||r;A=en(u.call(k,k,f,s,p,h,v)),w=l}else{const k=t;A=en(k.length>1?k(s,{attrs:l,slots:a,emit:c}):k(s,null)),w=t.props?l:s1(l)}}catch(k){ji.length=0,va(k,e,1),A=de(Tr)}let R=A;if(w&&y!==!1){const k=Object.keys(w),{shapeFlag:W}=R;k.length&&W&7&&(o&&k.some(nu)&&(w=o1(w,o)),R=Sr(R,w))}return n.dirs&&(R=Sr(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),A=R,Ro(b),A}const s1=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},o1=(e,t)=>{const n={};for(const r in e)(!nu(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function a1(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qf(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ya(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qf(r,o,c):!0:!!o;return!1}function Qf(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!ya(n,s))return!0}return!1}function l1({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const c1=e=>e.__isSuspense;function u1(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):n1(e)}function kt(e,t){return gu(e,null,t)}const Xs={};function an(e,t,n){return gu(e,t,n)}function gu(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ae){var a;const l=E0()===((a=tt)==null?void 0:a.scope)?tt:null;let c,u=!1,f=!1;if(ft(e)?(c=()=>e.value,u=No(e)):Gr(e)?(c=()=>e,r=!0):q(e)?(f=!0,u=e.some(k=>Gr(k)||No(k)),c=()=>e.map(k=>{if(ft(k))return k.value;if(Gr(k))return fr(k);if(ee(k))return jn(k,l,2)})):ee(e)?t?c=()=>jn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Gt(e,l,3,[p])}:c=Wt,t&&r){const k=c;c=()=>fr(k())}let h,p=k=>{h=b.onStop=()=>{jn(k,l,4)}},v;if(ns)if(p=Wt,t?n&&Gt(t,l,3,[c(),f?[]:void 0,p]):c(),i==="sync"){const k=aw();v=k.__watcherHandles||(k.__watcherHandles=[])}else return Wt;let y=f?new Array(e.length).fill(Xs):Xs;const A=()=>{if(b.active)if(t){const k=b.run();(r||u||(f?k.some((W,Z)=>Xi(W,y[Z])):Xi(k,y)))&&(h&&h(),Gt(t,l,3,[k,y===Xs?void 0:f&&y[0]===Xs?[]:y,p]),y=k)}else b.run()};A.allowRecurse=!!t;let w;i==="sync"?w=A:i==="post"?w=()=>_t(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),w=()=>mu(A));const b=new au(c,w);t?n?A():y=b.run():i==="post"?_t(b.run.bind(b),l&&l.suspense):b.run();const R=()=>{b.stop(),l&&l.scope&&ru(l.scope.effects,b)};return v&&v.push(R),R}function f1(e,t,n){const r=this.proxy,i=je(e)?e.includes(".")?Jp(r,e):()=>r[e]:e.bind(r,r);let s;ee(t)?s=t:(s=t.handler,n=t);const o=tt;ti(this);const a=gu(i,s.bind(r),n);return o?ti(o):br(),a}function Jp(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function fr(e,t){if(!xe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ft(e))fr(e.value,t);else if(q(e))for(let n=0;n<e.length;n++)fr(e[n],t);else if(ha(e)||Wr(e))e.forEach(n=>{fr(n,t)});else if(Ap(e))for(const n in e)fr(e[n],t);return e}function Js(e,t){const n=Mt;if(n===null)return e;const r=xa(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,l,c=Ae]=t[s];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&fr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function tr(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(pi(),Gt(l,n,8,[e.el,a,e,t]),mi())}}function mt(e,t){return ee(e)?(()=>He({name:e.name},t,{setup:e}))():e}const xo=e=>!!e.type.__asyncLoader,Zp=e=>e.type.__isKeepAlive;function h1(e,t){em(e,"a",t)}function d1(e,t){em(e,"da",t)}function em(e,t,n=tt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(wa(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Zp(i.parent.vnode)&&p1(r,t,n,i),i=i.parent}}function p1(e,t,n,r){const i=wa(t,e,r,!0);Pt(()=>{ru(r[t],i)},n)}function wa(e,t,n=tt,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;pi(),ti(n);const a=Gt(t,n,e,o);return br(),mi(),a});return r?i.unshift(s):i.push(s),s}}const In=e=>(t,n=tt)=>(!ns||e==="sp")&&wa(e,(...r)=>t(...r),n),m1=In("bm"),ht=In("m"),g1=In("bu"),v1=In("u"),y1=In("bum"),Pt=In("um"),w1=In("sp"),b1=In("rtg"),E1=In("rtc");function _1(e,t=tt){wa("ec",e,t)}const tm="components";function ba(e,t){return A1(tm,e,!0,t)||e}const x1=Symbol.for("v-ndc");function A1(e,t,n=!0,r=!1){const i=Mt||tt;if(i){const s=i.type;if(e===tm){const a=iw(s,!1);if(a&&(a===t||a===cn(t)||a===pa(cn(t))))return s}const o=Xf(i[e]||s[e],t)||Xf(i.appContext[e],t);return!o&&r?s:o}}function Xf(e,t){return e&&(e[t]||e[cn(t)]||e[pa(cn(t))])}function Zl(e,t,n,r){let i;const s=n&&n[r];if(q(e)||je(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(xe(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=t(e[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const ec=e=>e?hm(e)?xa(e)||e.proxy:ec(e.parent):null,Fi=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ec(e.parent),$root:e=>ec(e.root),$emit:e=>e.emit,$options:e=>vu(e),$forceUpdate:e=>e.f||(e.f=()=>mu(e.update)),$nextTick:e=>e.n||(e.n=pu.bind(e.proxy)),$watch:e=>f1.bind(e)}),al=(e,t)=>e!==Ae&&!e.__isScriptSetup&&fe(e,t),T1={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(al(r,t))return o[t]=1,r[t];if(i!==Ae&&fe(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&fe(c,t))return o[t]=3,s[t];if(n!==Ae&&fe(n,t))return o[t]=4,n[t];tc&&(o[t]=0)}}const u=Fi[t];let f,h;if(u)return t==="$attrs"&&At(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Ae&&fe(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,fe(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return al(i,t)?(i[t]=n,!0):r!==Ae&&fe(r,t)?(r[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==Ae&&fe(e,o)||al(t,o)||(a=s[0])&&fe(a,o)||fe(r,o)||fe(Fi,o)||fe(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Jf(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let tc=!0;function S1(e){const t=vu(e),n=e.proxy,r=e.ctx;tc=!1,t.beforeCreate&&Zf(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:y,deactivated:A,beforeDestroy:w,beforeUnmount:b,destroyed:R,unmounted:k,render:W,renderTracked:Z,renderTriggered:ne,errorCaptured:he,serverPrefetch:ce,expose:Oe,inheritAttrs:Ge,components:Ft,directives:Re,filters:se}=t;if(c&&I1(c,r,null),o)for(const Q in o){const ae=o[Q];ee(ae)&&(r[Q]=ae.bind(n))}if(i){const Q=i.call(n,n);xe(Q)&&(e.data=gi(Q))}if(tc=!0,s)for(const Q in s){const ae=s[Q],Ye=ee(ae)?ae.bind(n,n):ee(ae.get)?ae.get.bind(n,n):Wt,hn=!ee(ae)&&ee(ae.set)?ae.set.bind(n):Wt,$t=K({get:Ye,set:hn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$t.value,set:Qe=>$t.value=Qe})}if(a)for(const Q in a)nm(a[Q],r,n,Q);if(l){const Q=ee(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(ae=>{wt(ae,Q[ae])})}u&&Zf(u,e,"c");function re(Q,ae){q(ae)?ae.forEach(Ye=>Q(Ye.bind(n))):ae&&Q(ae.bind(n))}if(re(m1,f),re(ht,h),re(g1,p),re(v1,v),re(h1,y),re(d1,A),re(_1,he),re(E1,Z),re(b1,ne),re(y1,b),re(Pt,k),re(w1,ce),q(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(ae=>{Object.defineProperty(Q,ae,{get:()=>n[ae],set:Ye=>n[ae]=Ye})})}else e.exposed||(e.exposed={});W&&e.render===Wt&&(e.render=W),Ge!=null&&(e.inheritAttrs=Ge),Ft&&(e.components=Ft),Re&&(e.directives=Re)}function I1(e,t,n=Wt){q(e)&&(e=nc(e));for(const r in e){const i=e[r];let s;xe(i)?"default"in i?s=$e(i.from||r,i.default,!0):s=$e(i.from||r):s=$e(i),ft(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Zf(e,t,n){Gt(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function nm(e,t,n,r){const i=r.includes(".")?Jp(n,r):()=>n[r];if(je(e)){const s=t[e];ee(s)&&an(i,s)}else if(ee(e))an(i,e.bind(n));else if(xe(e))if(q(e))e.forEach(s=>nm(s,t,n,r));else{const s=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(s)&&an(i,s,e)}}function vu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Mo(l,c,o,!0)),Mo(l,t,o)),xe(t)&&s.set(t,l),l}function Mo(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Mo(e,s,n,!0),i&&i.forEach(o=>Mo(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=C1[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const C1={data:eh,props:th,emits:th,methods:Di,computed:Di,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Di,directives:Di,watch:O1,provide:eh,inject:k1};function eh(e,t){return t?e?function(){return He(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function k1(e,t){return Di(nc(e),nc(t))}function nc(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function gt(e,t){return e?[...new Set([].concat(e,t))]:t}function Di(e,t){return e?He(Object.create(null),e,t):t}function th(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:He(Object.create(null),Jf(e),Jf(t??{})):t}function O1(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const r in t)n[r]=gt(e[r],t[r]);return n}function rm(){return{app:null,config:{isNativeTag:o0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P1=0;function D1(e,t){return function(r,i=null){ee(r)||(r=He({},r)),i!=null&&!xe(i)&&(i=null);const s=rm(),o=new Set;let a=!1;const l=s.app={_uid:P1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:lw,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=de(r,i);return h.appContext=s,u&&t?t(h,c):e(h,c,f),a=!0,l._container=c,c.__vue_app__=l,xa(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Lo=l;try{return c()}finally{Lo=null}}};return l}}let Lo=null;function wt(e,t){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=tt||Mt;if(r||Lo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Lo._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(r&&r.proxy):t}}function N1(e,t,n,r=!1){const i={},s={};Po(s,_a,1),e.propsDefaults=Object.create(null),im(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:G0(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function R1(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=pe(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ya(e.emitsOptions,h))continue;const p=t[h];if(l)if(fe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=cn(h);i[v]=rc(l,a,v,p,e,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{im(e,t,i,s)&&(c=!0);let u;for(const f in a)(!t||!fe(t,f)&&((u=di(f))===f||!fe(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=rc(l,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!fe(t,f))&&(delete s[f],c=!0)}c&&wn(e,"set","$attrs")}function im(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Eo(l))continue;const c=t[l];let u;i&&fe(i,u=cn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ya(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=pe(n),c=a||Ae;for(let u=0;u<s.length;u++){const f=s[u];n[f]=rc(i,l,f,c[f],e,!fe(c,f))}}return o}function rc(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(ti(i),r=c[n]=l.call(null,t),br())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===di(n))&&(r=!0))}return r}function sm(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!ee(e)){const u=f=>{l=!0;const[h,p]=sm(f,t,!0);He(o,h),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return xe(e)&&r.set(e,qr),qr;if(q(s))for(let u=0;u<s.length;u++){const f=cn(s[u]);nh(f)&&(o[f]=Ae)}else if(s)for(const u in s){const f=cn(u);if(nh(f)){const h=s[u],p=o[f]=q(h)||ee(h)?{type:h}:He({},h);if(p){const v=sh(Boolean,p.type),y=sh(String,p.type);p[0]=v>-1,p[1]=y<0||v<y,(v>-1||fe(p,"default"))&&a.push(f)}}}const c=[o,a];return xe(e)&&r.set(e,c),c}function nh(e){return e[0]!=="$"}function rh(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ih(e,t){return rh(e)===rh(t)}function sh(e,t){return q(t)?t.findIndex(n=>ih(n,e)):ee(t)&&ih(t,e)?0:-1}const om=e=>e[0]==="_"||e==="$stable",yu=e=>q(e)?e.map(en):[en(e)],M1=(e,t,n)=>{if(t._n)return t;const r=It((...i)=>yu(t(...i)),n);return r._c=!1,r},am=(e,t,n)=>{const r=e._ctx;for(const i in e){if(om(i))continue;const s=e[i];if(ee(s))t[i]=M1(i,s,r);else if(s!=null){const o=yu(s);t[i]=()=>o}}},lm=(e,t)=>{const n=yu(t);e.slots.default=()=>n},L1=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=pe(t),Po(t,"_",n)):am(t,e.slots={})}else e.slots={},t&&lm(e,t);Po(e.slots,_a,1)},F1=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=Ae;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(He(i,t),!n&&a===1&&delete i._):(s=!t.$stable,am(t,i)),o=t}else t&&(lm(e,t),o={default:1});if(s)for(const a in i)!om(a)&&!(a in o)&&delete i[a]};function ic(e,t,n,r,i=!1){if(q(e)){e.forEach((h,p)=>ic(h,t&&(q(t)?t[p]:t),n,r,i));return}if(xo(r)&&!i)return;const s=r.shapeFlag&4?xa(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Ae?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,fe(f,c)&&(f[c]=null)):ft(c)&&(c.value=null)),ee(l))jn(l,a,12,[o,u]);else{const h=je(l),p=ft(l);if(h||p){const v=()=>{if(e.f){const y=h?fe(f,l)?f[l]:u[l]:l.value;i?q(y)&&ru(y,s):q(y)?y.includes(s)||y.push(s):h?(u[l]=[s],fe(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,fe(f,l)&&(f[l]=o)):p&&(l.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,_t(v,n)):v()}}}const _t=u1;function $1(e){return j1(e)}function j1(e,t){const n=Wl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Wt,insertStaticContent:v}=e,y=(d,m,g,E=null,x=null,T=null,M=!1,O=null,P=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ti(d,m)&&(E=_(d),Qe(d,x,T,!0),d=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:S,ref:V,shapeFlag:j}=m;switch(S){case Ea:A(d,m,g,E);break;case Tr:w(d,m,g,E);break;case Ao:d==null&&b(m,g,E,M);break;case vt:Ft(d,m,g,E,x,T,M,O,P);break;default:j&1?W(d,m,g,E,x,T,M,O,P):j&6?Re(d,m,g,E,x,T,M,O,P):(j&64||j&128)&&S.process(d,m,g,E,x,T,M,O,P,D)}V!=null&&x&&ic(V,d&&d.ref,T,m||d,!m)},A=(d,m,g,E)=>{if(d==null)r(m.el=a(m.children),g,E);else{const x=m.el=d.el;m.children!==d.children&&c(x,m.children)}},w=(d,m,g,E)=>{d==null?r(m.el=l(m.children||""),g,E):m.el=d.el},b=(d,m,g,E)=>{[d.el,d.anchor]=v(d.children,m,g,E,d.el,d.anchor)},R=({el:d,anchor:m},g,E)=>{let x;for(;d&&d!==m;)x=h(d),r(d,g,E),d=x;r(m,g,E)},k=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=h(d),i(d),d=g;i(m)},W=(d,m,g,E,x,T,M,O,P)=>{M=M||m.type==="svg",d==null?Z(m,g,E,x,T,M,O,P):ce(d,m,x,T,M,O,P)},Z=(d,m,g,E,x,T,M,O)=>{let P,S;const{type:V,props:j,shapeFlag:z,transition:J,dirs:ie}=d;if(P=d.el=o(d.type,T,j&&j.is,j),z&8?u(P,d.children):z&16&&he(d.children,P,null,E,x,T&&V!=="foreignObject",M,O),ie&&tr(d,null,E,"created"),ne(P,d,d.scopeId,M,E),j){for(const we in j)we!=="value"&&!Eo(we)&&s(P,we,null,j[we],T,d.children,E,x,rt);"value"in j&&s(P,"value",null,j.value),(S=j.onVnodeBeforeMount)&&Zt(S,E,d)}ie&&tr(d,null,E,"beforeMount");const Ee=(!x||x&&!x.pendingBranch)&&J&&!J.persisted;Ee&&J.beforeEnter(P),r(P,m,g),((S=j&&j.onVnodeMounted)||Ee||ie)&&_t(()=>{S&&Zt(S,E,d),Ee&&J.enter(P),ie&&tr(d,null,E,"mounted")},x)},ne=(d,m,g,E,x)=>{if(g&&p(d,g),E)for(let T=0;T<E.length;T++)p(d,E[T]);if(x){let T=x.subTree;if(m===T){const M=x.vnode;ne(d,M,M.scopeId,M.slotScopeIds,x.parent)}}},he=(d,m,g,E,x,T,M,O,P=0)=>{for(let S=P;S<d.length;S++){const V=d[S]=O?Rn(d[S]):en(d[S]);y(null,V,m,g,E,x,T,M,O)}},ce=(d,m,g,E,x,T,M)=>{const O=m.el=d.el;let{patchFlag:P,dynamicChildren:S,dirs:V}=m;P|=d.patchFlag&16;const j=d.props||Ae,z=m.props||Ae;let J;g&&nr(g,!1),(J=z.onVnodeBeforeUpdate)&&Zt(J,g,m,d),V&&tr(m,d,g,"beforeUpdate"),g&&nr(g,!0);const ie=x&&m.type!=="foreignObject";if(S?Oe(d.dynamicChildren,S,O,g,E,ie,T):M||ae(d,m,O,null,g,E,ie,T,!1),P>0){if(P&16)Ge(O,m,j,z,g,E,x);else if(P&2&&j.class!==z.class&&s(O,"class",null,z.class,x),P&4&&s(O,"style",j.style,z.style,x),P&8){const Ee=m.dynamicProps;for(let we=0;we<Ee.length;we++){const Me=Ee[we],jt=j[Me],$r=z[Me];($r!==jt||Me==="value")&&s(O,Me,jt,$r,x,d.children,g,E,rt)}}P&1&&d.children!==m.children&&u(O,m.children)}else!M&&S==null&&Ge(O,m,j,z,g,E,x);((J=z.onVnodeUpdated)||V)&&_t(()=>{J&&Zt(J,g,m,d),V&&tr(m,d,g,"updated")},E)},Oe=(d,m,g,E,x,T,M)=>{for(let O=0;O<m.length;O++){const P=d[O],S=m[O],V=P.el&&(P.type===vt||!Ti(P,S)||P.shapeFlag&70)?f(P.el):g;y(P,S,V,null,E,x,T,M,!0)}},Ge=(d,m,g,E,x,T,M)=>{if(g!==E){if(g!==Ae)for(const O in g)!Eo(O)&&!(O in E)&&s(d,O,g[O],null,M,m.children,x,T,rt);for(const O in E){if(Eo(O))continue;const P=E[O],S=g[O];P!==S&&O!=="value"&&s(d,O,S,P,M,m.children,x,T,rt)}"value"in E&&s(d,"value",g.value,E.value)}},Ft=(d,m,g,E,x,T,M,O,P)=>{const S=m.el=d?d.el:a(""),V=m.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:J}=m;J&&(O=O?O.concat(J):J),d==null?(r(S,g,E),r(V,g,E),he(m.children,g,V,x,T,M,O,P)):j>0&&j&64&&z&&d.dynamicChildren?(Oe(d.dynamicChildren,z,g,x,T,M,O),(m.key!=null||x&&m===x.subTree)&&wu(d,m,!0)):ae(d,m,g,V,x,T,M,O,P)},Re=(d,m,g,E,x,T,M,O,P)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?x.ctx.activate(m,g,E,M,P):se(m,g,E,x,T,M,P):oe(d,m,P)},se=(d,m,g,E,x,T,M)=>{const O=d.component=Z1(d,E,x);if(Zp(d)&&(O.ctx.renderer=D),ew(O),O.asyncDep){if(x&&x.registerDep(O,re),!d.el){const P=O.subTree=de(Tr);w(null,P,m,g)}return}re(O,d,m,g,x,T,M)},oe=(d,m,g)=>{const E=m.component=d.component;if(a1(d,m,g))if(E.asyncDep&&!E.asyncResolved){Q(E,m,g);return}else E.next=m,t1(E.update),E.update();else m.el=d.el,E.vnode=m},re=(d,m,g,E,x,T,M)=>{const O=()=>{if(d.isMounted){let{next:V,bu:j,u:z,parent:J,vnode:ie}=d,Ee=V,we;nr(d,!1),V?(V.el=ie.el,Q(d,V,M)):V=ie,j&&_o(j),(we=V.props&&V.props.onVnodeBeforeUpdate)&&Zt(we,J,V,ie),nr(d,!0);const Me=ol(d),jt=d.subTree;d.subTree=Me,y(jt,Me,f(jt.el),_(jt),d,x,T),V.el=Me.el,Ee===null&&l1(d,Me.el),z&&_t(z,x),(we=V.props&&V.props.onVnodeUpdated)&&_t(()=>Zt(we,J,V,ie),x)}else{let V;const{el:j,props:z}=m,{bm:J,m:ie,parent:Ee}=d,we=xo(m);if(nr(d,!1),J&&_o(J),!we&&(V=z&&z.onVnodeBeforeMount)&&Zt(V,Ee,m),nr(d,!0),j&&me){const Me=()=>{d.subTree=ol(d),me(j,d.subTree,d,x,null)};we?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Me()):Me()}else{const Me=d.subTree=ol(d);y(null,Me,g,E,d,x,T),m.el=Me.el}if(ie&&_t(ie,x),!we&&(V=z&&z.onVnodeMounted)){const Me=m;_t(()=>Zt(V,Ee,Me),x)}(m.shapeFlag&256||Ee&&xo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&_t(d.a,x),d.isMounted=!0,m=g=E=null}},P=d.effect=new au(O,()=>mu(S),d.scope),S=d.update=()=>P.run();S.id=d.uid,nr(d,!0),S()},Q=(d,m,g)=>{m.component=d;const E=d.vnode.props;d.vnode=m,d.next=null,R1(d,m.props,E,g),F1(d,m.children,g),pi(),Yf(),mi()},ae=(d,m,g,E,x,T,M,O,P=!1)=>{const S=d&&d.children,V=d?d.shapeFlag:0,j=m.children,{patchFlag:z,shapeFlag:J}=m;if(z>0){if(z&128){hn(S,j,g,E,x,T,M,O,P);return}else if(z&256){Ye(S,j,g,E,x,T,M,O,P);return}}J&8?(V&16&&rt(S,x,T),j!==S&&u(g,j)):V&16?J&16?hn(S,j,g,E,x,T,M,O,P):rt(S,x,T,!0):(V&8&&u(g,""),J&16&&he(j,g,E,x,T,M,O,P))},Ye=(d,m,g,E,x,T,M,O,P)=>{d=d||qr,m=m||qr;const S=d.length,V=m.length,j=Math.min(S,V);let z;for(z=0;z<j;z++){const J=m[z]=P?Rn(m[z]):en(m[z]);y(d[z],J,g,null,x,T,M,O,P)}S>V?rt(d,x,T,!0,!1,j):he(m,g,E,x,T,M,O,P,j)},hn=(d,m,g,E,x,T,M,O,P)=>{let S=0;const V=m.length;let j=d.length-1,z=V-1;for(;S<=j&&S<=z;){const J=d[S],ie=m[S]=P?Rn(m[S]):en(m[S]);if(Ti(J,ie))y(J,ie,g,null,x,T,M,O,P);else break;S++}for(;S<=j&&S<=z;){const J=d[j],ie=m[z]=P?Rn(m[z]):en(m[z]);if(Ti(J,ie))y(J,ie,g,null,x,T,M,O,P);else break;j--,z--}if(S>j){if(S<=z){const J=z+1,ie=J<V?m[J].el:E;for(;S<=z;)y(null,m[S]=P?Rn(m[S]):en(m[S]),g,ie,x,T,M,O,P),S++}}else if(S>z)for(;S<=j;)Qe(d[S],x,T,!0),S++;else{const J=S,ie=S,Ee=new Map;for(S=ie;S<=z;S++){const St=m[S]=P?Rn(m[S]):en(m[S]);St.key!=null&&Ee.set(St.key,S)}let we,Me=0;const jt=z-ie+1;let $r=!1,Ff=0;const Ai=new Array(jt);for(S=0;S<jt;S++)Ai[S]=0;for(S=J;S<=j;S++){const St=d[S];if(Me>=jt){Qe(St,x,T,!0);continue}let Jt;if(St.key!=null)Jt=Ee.get(St.key);else for(we=ie;we<=z;we++)if(Ai[we-ie]===0&&Ti(St,m[we])){Jt=we;break}Jt===void 0?Qe(St,x,T,!0):(Ai[Jt-ie]=S+1,Jt>=Ff?Ff=Jt:$r=!0,y(St,m[Jt],g,null,x,T,M,O,P),Me++)}const $f=$r?B1(Ai):qr;for(we=$f.length-1,S=jt-1;S>=0;S--){const St=ie+S,Jt=m[St],jf=St+1<V?m[St+1].el:E;Ai[S]===0?y(null,Jt,g,jf,x,T,M,O,P):$r&&(we<0||S!==$f[we]?$t(Jt,g,jf,2):we--)}}},$t=(d,m,g,E,x=null)=>{const{el:T,type:M,transition:O,children:P,shapeFlag:S}=d;if(S&6){$t(d.component.subTree,m,g,E);return}if(S&128){d.suspense.move(m,g,E);return}if(S&64){M.move(d,m,g,D);return}if(M===vt){r(T,m,g);for(let j=0;j<P.length;j++)$t(P[j],m,g,E);r(d.anchor,m,g);return}if(M===Ao){R(d,m,g);return}if(E!==2&&S&1&&O)if(E===0)O.beforeEnter(T),r(T,m,g),_t(()=>O.enter(T),x);else{const{leave:j,delayLeave:z,afterLeave:J}=O,ie=()=>r(T,m,g),Ee=()=>{j(T,()=>{ie(),J&&J()})};z?z(T,ie,Ee):Ee()}else r(T,m,g)},Qe=(d,m,g,E=!1,x=!1)=>{const{type:T,props:M,ref:O,children:P,dynamicChildren:S,shapeFlag:V,patchFlag:j,dirs:z}=d;if(O!=null&&ic(O,null,g,d,!0),V&256){m.ctx.deactivate(d);return}const J=V&1&&z,ie=!xo(d);let Ee;if(ie&&(Ee=M&&M.onVnodeBeforeUnmount)&&Zt(Ee,m,d),V&6)Ks(d.component,g,E);else{if(V&128){d.suspense.unmount(g,E);return}J&&tr(d,null,m,"beforeUnmount"),V&64?d.type.remove(d,m,g,x,D,E):S&&(T!==vt||j>0&&j&64)?rt(S,m,g,!1,!0):(T===vt&&j&384||!x&&V&16)&&rt(P,m,g),E&&kn(d)}(ie&&(Ee=M&&M.onVnodeUnmounted)||J)&&_t(()=>{Ee&&Zt(Ee,m,d),J&&tr(d,null,m,"unmounted")},g)},kn=d=>{const{type:m,el:g,anchor:E,transition:x}=d;if(m===vt){On(g,E);return}if(m===Ao){k(d);return}const T=()=>{i(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:M,delayLeave:O}=x,P=()=>M(g,T);O?O(d.el,T,P):P()}else T()},On=(d,m)=>{let g;for(;d!==m;)g=h(d),i(d),d=g;i(m)},Ks=(d,m,g)=>{const{bum:E,scope:x,update:T,subTree:M,um:O}=d;E&&_o(E),x.stop(),T&&(T.active=!1,Qe(M,d,m,g)),O&&_t(O,m),_t(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},rt=(d,m,g,E=!1,x=!1,T=0)=>{for(let M=T;M<d.length;M++)Qe(d[M],m,g,E,x)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),F=(d,m,g)=>{d==null?m._vnode&&Qe(m._vnode,null,null,!0):y(m._vnode||null,d,m,null,null,null,g),Yf(),Gp(),m._vnode=d},D={p:y,um:Qe,m:$t,r:kn,mt:se,mc:he,pc:ae,pbc:Oe,n:_,o:e};let U,me;return t&&([U,me]=t(D)),{render:F,hydrate:U,createApp:D1(F,U)}}function nr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wu(e,t,n=!1){const r=e.children,i=t.children;if(q(r)&&q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Rn(i[s]),a.el=o.el),n||wu(o,a)),a.type===Ea&&(a.el=o.el)}}function B1(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const U1=e=>e.__isTeleport,$i=e=>e&&(e.disabled||e.disabled===""),oh=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sc=(e,t)=>{const n=e&&e.to;return je(n)?t?t(n):null:n},V1={__isTeleport:!0,process(e,t,n,r,i,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:v,createText:y,createComment:A}}=c,w=$i(t.props);let{shapeFlag:b,children:R,dynamicChildren:k}=t;if(e==null){const W=t.el=y(""),Z=t.anchor=y("");p(W,n,r),p(Z,n,r);const ne=t.target=sc(t.props,v),he=t.targetAnchor=y("");ne&&(p(he,ne),o=o||oh(ne));const ce=(Oe,Ge)=>{b&16&&u(R,Oe,Ge,i,s,o,a,l)};w?ce(n,Z):ne&&ce(ne,he)}else{t.el=e.el;const W=t.anchor=e.anchor,Z=t.target=e.target,ne=t.targetAnchor=e.targetAnchor,he=$i(e.props),ce=he?n:Z,Oe=he?W:ne;if(o=o||oh(Z),k?(h(e.dynamicChildren,k,ce,i,s,o,a),wu(e,t,!0)):l||f(e,t,ce,Oe,i,s,o,a,!1),w)he||Zs(t,n,W,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Ge=t.target=sc(t.props,v);Ge&&Zs(t,Ge,null,c,0)}else he&&Zs(t,Z,ne,c,1)}cm(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=e;if(f&&s(u),(o||!$i(h))&&(s(c),a&16))for(let p=0;p<l.length;p++){const v=l[p];i(v,t,n,!0,!!v.dynamicChildren)}},move:Zs,hydrate:z1};function Zs(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,f=s===2;if(f&&r(o,t,n),(!f||$i(u))&&l&16)for(let h=0;h<c.length;h++)i(c[h],t,n,2);f&&r(a,t,n)}function z1(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=sc(t.props,l);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if($i(t.props))t.anchor=c(o(e),t,a(e),n,r,i,s),t.targetAnchor=f;else{t.anchor=o(e);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(f,t,u,n,r,i,s)}cm(t)}return t.anchor&&o(t.anchor)}const H1=V1;function cm(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const vt=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),ji=[];let Ht=null;function ot(e=!1){ji.push(Ht=e?null:[])}function K1(){ji.pop(),Ht=ji[ji.length-1]||null}let ts=1;function ah(e){ts+=e}function um(e){return e.dynamicChildren=ts>0?Ht||qr:null,K1(),ts>0&&Ht&&Ht.push(e),e}function bn(e,t,n,r,i,s){return um($(e,t,n,r,i,s,!0))}function or(e,t,n,r,i){return um(de(e,t,n,r,i,!0))}function oc(e){return e?e.__v_isVNode===!0:!1}function Ti(e,t){return e.type===t.type&&e.key===t.key}const _a="__vInternal",fm=({key:e})=>e??null,To=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||ft(e)||ee(e)?{i:Mt,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,r=0,i=null,s=e===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fm(t),ref:t&&To(t),scopeId:Xp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mt};return a?(bu(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),ts>0&&!o&&Ht&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ht.push(l),l}const de=q1;function q1(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===x1)&&(e=Tr),oc(e)){const a=Sr(e,t,!0);return n&&bu(a,n),ts>0&&!s&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(e)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(sw(e)&&(e=e.__vccOpts),t){t=W1(t);let{class:a,style:l}=t;a&&!je(a)&&(t.class=Ar(a)),xe(l)&&(jp(l)&&!q(l)&&(l=He({},l)),t.style=su(l))}const o=je(e)?1:c1(e)?128:U1(e)?64:xe(e)?4:ee(e)?2:0;return $(e,t,n,r,i,o,s,!0)}function W1(e){return e?jp(e)||_a in e?He({},e):e:null}function Sr(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?Q1(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&fm(a),ref:t&&t.ref?n&&i?q(i)?i.concat(To(t)):[i,To(t)]:To(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==vt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sr(e.ssContent),ssFallback:e.ssFallback&&Sr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Yt(e=" ",t=0){return de(Ea,null,e,t)}function G1(e,t){const n=de(Ao,null,e);return n.staticCount=t,n}function Y1(e="",t=!1){return t?(ot(),or(Tr,null,e)):de(Tr,null,e)}function en(e){return e==null||typeof e=="boolean"?de(Tr):q(e)?de(vt,null,e.slice()):typeof e=="object"?Rn(e):de(Ea,null,String(e))}function Rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sr(e)}function bu(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),bu(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(_a in t)?t._ctx=Mt:i===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Mt},n=32):(t=String(t),r&64?(n=16,t=[Yt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Q1(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ar([t.class,r.class]));else if(i==="style")t.style=su([t.style,r.style]);else if(fa(i)){const s=t[i],o=r[i];o&&s!==o&&!(q(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Zt(e,t,n,r=null){Gt(e,t,7,[n,r])}const X1=rm();let J1=0;function Z1(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||X1,s={uid:J1++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new w0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(r,i),emitsOptions:Qp(r,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=i1.bind(null,s),e.ce&&e.ce(s),s}let tt=null,Eu,jr,lh="__VUE_INSTANCE_SETTERS__";(jr=Wl()[lh])||(jr=Wl()[lh]=[]),jr.push(e=>tt=e),Eu=e=>{jr.length>1?jr.forEach(t=>t(e)):jr[0](e)};const ti=e=>{Eu(e),e.scope.on()},br=()=>{tt&&tt.scope.off(),Eu(null)};function hm(e){return e.vnode.shapeFlag&4}let ns=!1;function ew(e,t=!1){ns=t;const{props:n,children:r}=e.vnode,i=hm(e);N1(e,n,i,t),L1(e,r);const s=i?tw(e,t):void 0;return ns=!1,s}function tw(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bp(new Proxy(e.ctx,T1));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?rw(e):null;ti(e),pi();const s=jn(r,e,0,[e.props,i]);if(mi(),br(),_p(s)){if(s.then(br,br),t)return s.then(o=>{ch(e,o,t)}).catch(o=>{va(o,e,0)});e.asyncDep=s}else ch(e,s,t)}else dm(e,t)}function ch(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xe(t)&&(e.setupState=Kp(t)),dm(e,n)}let uh;function dm(e,t,n){const r=e.type;if(!e.render){if(!t&&uh&&!r.render){const i=r.template||vu(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=He(He({isCustomElement:s,delimiters:a},o),l);r.render=uh(i,c)}}e.render=r.render||Wt}ti(e),pi(),S1(e),mi(),br()}function nw(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return At(e,"get","$attrs"),t[n]}}))}function rw(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return nw(e)},slots:e.slots,emit:e.emit,expose:t}}function xa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Kp(Bp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fi)return Fi[n](e)},has(t,n){return n in t||n in Fi}}))}function iw(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function sw(e){return ee(e)&&"__vccOpts"in e}const K=(e,t)=>J0(e,t,ns);function at(e,t,n){const r=arguments.length;return r===2?xe(t)&&!q(t)?oc(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oc(n)&&(n=[n]),de(e,t,n))}const ow=Symbol.for("v-scx"),aw=()=>$e(ow),lw="3.3.4",cw="http://www.w3.org/2000/svg",ar=typeof document<"u"?document:null,fh=ar&&ar.createElement("template"),uw={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ar.createElementNS(cw,e):ar.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ar.createTextNode(e),createComment:e=>ar.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ar.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{fh.innerHTML=r?`<svg>${e}</svg>`:e;const a=fh.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fw(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hw(e,t,n){const r=e.style,i=je(n);if(n&&!i){if(t&&!je(t))for(const s in t)n[s]==null&&ac(r,s,"");for(const s in n)ac(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const hh=/\s*!important$/;function ac(e,t,n){if(q(n))n.forEach(r=>ac(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=dw(e,t);hh.test(n)?e.setProperty(di(r),n.replace(hh,""),"important"):e[r]=n}}const dh=["Webkit","Moz","ms"],ll={};function dw(e,t){const n=ll[t];if(n)return n;let r=cn(t);if(r!=="filter"&&r in e)return ll[t]=r;r=pa(r);for(let i=0;i<dh.length;i++){const s=dh[i]+r;if(s in e)return ll[t]=s}return t}const ph="http://www.w3.org/1999/xlink";function pw(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ph,t.slice(6,t.length)):e.setAttributeNS(ph,t,n);else{const s=v0(t);n==null||s&&!Tp(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function mw(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Tp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function lr(e,t,n,r){e.addEventListener(t,n,r)}function gw(e,t,n,r){e.removeEventListener(t,n,r)}function vw(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=yw(t);if(r){const c=s[t]=Ew(r,i);lr(e,a,c,l)}else o&&(gw(e,a,o,l),s[t]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function yw(e){let t;if(mh.test(e)){t={};let r;for(;r=e.match(mh);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):di(e.slice(2)),t]}let cl=0;const ww=Promise.resolve(),bw=()=>cl||(ww.then(()=>cl=0),cl=Date.now());function Ew(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(_w(r,n.value),t,5,[r])};return n.value=e,n.attached=bw(),n}function _w(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const gh=/^on[a-z]/,xw=(e,t,n,r,i=!1,s,o,a,l)=>{t==="class"?fw(e,r,i):t==="style"?hw(e,n,r):fa(t)?nu(t)||vw(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Aw(e,t,r,i))?mw(e,t,r,s,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pw(e,t,r,i))};function Aw(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gh.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gh.test(t)&&je(n)?!1:t in e}const Fo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>_o(t,n):t};function Tw(e){e.target.composing=!0}function vh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ul={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Fo(i);const s=r||i.props&&i.props.type==="number";lr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=ql(a)),e._assign(a)}),n&&lr(e,"change",()=>{e.value=e.value.trim()}),t||(lr(e,"compositionstart",Tw),lr(e,"compositionend",vh),lr(e,"change",vh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Fo(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&ql(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Sw={deep:!0,created(e,t,n){e._assign=Fo(n),lr(e,"change",()=>{const r=e._modelValue,i=Iw(e),s=e.checked,o=e._assign;if(q(r)){const a=Sp(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(ha(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(pm(e,s))})},mounted:yh,beforeUpdate(e,t,n){e._assign=Fo(n),yh(e,t,n)}};function yh(e,{value:t,oldValue:n},r){e._modelValue=t,q(t)?e.checked=Sp(t,r.props.value)>-1:ha(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=ma(t,pm(e,!0)))}function Iw(e){return"_value"in e?e._value:e.value}function pm(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Cw=He({patchProp:xw},uw);let wh;function kw(){return wh||(wh=$1(Cw))}const Ow=(...e)=>{const t=kw().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Pw(r);if(!i)return;const s=t._component;!ee(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Pw(e){return je(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof window<"u";function Dw(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ve=Object.assign;function fl(e,t){const n={};for(const r in t){const i=t[r];n[r]=Qt(i)?i.map(e):e(i)}return n}const Bi=()=>{},Qt=Array.isArray,Nw=/\/$/,Rw=e=>e.replace(Nw,"");function hl(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$w(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Mw(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bh(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Lw(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ni(t.matched[r],n.matched[i])&&mm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ni(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Fw(e[n],t[n]))return!1;return!0}function Fw(e,t){return Qt(e)?Eh(e,t):Qt(t)?Eh(t,e):e===t}function Eh(e,t){return Qt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var rs;(function(e){e.pop="pop",e.push="push"})(rs||(rs={}));var Ui;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ui||(Ui={}));function jw(e){if(!e)if(Ur){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Rw(e)}const Bw=/^[^#]+#/;function Uw(e,t){return e.replace(Bw,"#")+t}function Vw(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function zw(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Vw(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function _h(e,t){return(history.state?history.state.position-t:-1)+e}const lc=new Map;function Hw(e,t){lc.set(e,t)}function Kw(e){const t=lc.get(e);return lc.delete(e),t}let qw=()=>location.protocol+"//"+location.host;function gm(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),bh(l,"")}return bh(n,e)+r+i}function Ww(e,t,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const p=gm(e,location),v=n.value,y=t.value;let A=0;if(h){if(n.value=p,t.value=h,o&&o===v){o=null;return}A=y?h.position-y.position:0}else r(p);i.forEach(w=>{w(n.value,v,{delta:A,type:rs.pop,direction:A?A>0?Ui.forward:Ui.back:Ui.unknown})})};function l(){o=n.value}function c(h){i.push(h);const p=()=>{const v=i.indexOf(h);v>-1&&i.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ve({},h.state,{scroll:Aa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function xh(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Aa():null}}function Gw(e){const{history:t,location:n}=window,r={value:gm(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:qw()+e+l;try{t[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ve({},t.state,xh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=ve({},i.value,t.state,{forward:l,scroll:Aa()});s(u.current,u,!0);const f=ve({},xh(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Yw(e){e=jw(e);const t=Gw(e),n=Ww(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ve({location:"",base:e,go:r,createHref:Uw.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Qw(e){return typeof e=="string"||e&&typeof e=="object"}function vm(e){return typeof e=="string"||typeof e=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ym=Symbol("");var Ah;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ah||(Ah={}));function ri(e,t){return ve(new Error,{type:e,[ym]:!0},t)}function dn(e,t){return e instanceof Error&&ym in e&&(t==null||!!(e.type&t))}const Th="[^/]+?",Xw={sensitive:!1,strict:!1,start:!0,end:!0},Jw=/[.+*?^${}()[\]/\\]/g;function Zw(e,t){const n=ve({},Xw,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(Jw,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:y,optional:A,regexp:w}=h;s.push({name:v,repeatable:y,optional:A});const b=w||Th;if(b!==Th){p+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${v}" (${b}): `+k.message)}}let R=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(R=A&&c.length<2?`(?:/${R})`:"/"+R),A&&(R+="?"),i+=R,p+=20,A&&(p+=-8),y&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:y,optional:A}=p,w=v in c?c[v]:"";if(Qt(w)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const b=Qt(w)?w.join("/"):w;if(!b)if(A)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function eb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function tb(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=eb(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Sh(r))return 1;if(Sh(i))return-1}return i.length-r.length}function Sh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nb={type:0,value:""},rb=/[a-zA-Z0-9_]/;function ib(e){if(!e)return[[]];if(e==="/")return[[nb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:rb.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function sb(e,t,n){const r=Zw(ib(e.path),n),i=ve(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ob(e,t){const n=[],r=new Map;t=kh({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const p=!h,v=ab(u);v.aliasOf=h&&h.record;const y=kh(t,u),A=[v];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of R)A.push(ve({},v,{components:h?h.record.components:v.components,path:k,aliasOf:h?h.record:v}))}let w,b;for(const R of A){const{path:k}=R;if(f&&k[0]!=="/"){const W=f.record.path,Z=W[W.length-1]==="/"?"":"/";R.path=f.record.path+(k&&Z+k)}if(w=sb(R,f,y),h?h.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),p&&u.name&&!Ch(w)&&o(u.name)),v.children){const W=v.children;for(let Z=0;Z<W.length;Z++)s(W[Z],w,h&&h.children[Z])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return b?()=>{o(b)}:Bi}function o(u){if(vm(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&tb(u,n[f])>=0&&(u.record.path!==n[f].record.path||!wm(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ch(u)&&r.set(u.record.name,u)}function c(u,f){let h,p={},v,y;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw ri(1,{location:u});y=h.record.name,p=ve(Ih(f.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Ih(u.params,h.keys.map(b=>b.name))),v=h.stringify(p)}else if("path"in u)v=u.path,h=n.find(b=>b.re.test(v)),h&&(p=h.parse(v),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(b=>b.re.test(f.path)),!h)throw ri(1,{location:u,currentLocation:f});y=h.record.name,p=ve({},f.params,u.params),v=h.stringify(p)}const A=[];let w=h;for(;w;)A.unshift(w.record),w=w.parent;return{name:y,path:v,params:p,matched:A,meta:cb(A)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ih(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ab(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:lb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function lb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ch(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cb(e){return e.reduce((t,n)=>ve(t,n.meta),{})}function kh(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function wm(e,t){return t.children.some(n=>n===e||wm(e,n))}const bm=/#/g,ub=/&/g,fb=/\//g,hb=/=/g,db=/\?/g,Em=/\+/g,pb=/%5B/g,mb=/%5D/g,_m=/%5E/g,gb=/%60/g,xm=/%7B/g,vb=/%7C/g,Am=/%7D/g,yb=/%20/g;function _u(e){return encodeURI(""+e).replace(vb,"|").replace(pb,"[").replace(mb,"]")}function wb(e){return _u(e).replace(xm,"{").replace(Am,"}").replace(_m,"^")}function cc(e){return _u(e).replace(Em,"%2B").replace(yb,"+").replace(bm,"%23").replace(ub,"%26").replace(gb,"`").replace(xm,"{").replace(Am,"}").replace(_m,"^")}function bb(e){return cc(e).replace(hb,"%3D")}function Eb(e){return _u(e).replace(bm,"%23").replace(db,"%3F")}function _b(e){return e==null?"":Eb(e).replace(fb,"%2F")}function $o(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function xb(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Em," "),o=s.indexOf("="),a=$o(o<0?s:s.slice(0,o)),l=o<0?null:$o(s.slice(o+1));if(a in t){let c=t[a];Qt(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Oh(e){let t="";for(let n in e){const r=e[n];if(n=bb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qt(r)?r.map(s=>s&&cc(s)):[r&&cc(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ab(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Qt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Tb=Symbol(""),Ph=Symbol(""),xu=Symbol(""),Tm=Symbol(""),uc=Symbol("");function Si(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Mn(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ri(4,{from:n,to:t})):f instanceof Error?a(f):Qw(f)?a(ri(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function dl(e,t,n,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Sb(a)){const c=(a.__vccOpts||a)[t];c&&i.push(Mn(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Dw(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&Mn(h,n,r,s,o)()}))}}return i}function Sb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Dh(e){const t=$e(xu),n=$e(Tm),r=K(()=>t.resolve(Fe(e.to))),i=K(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ni.bind(null,u));if(h>-1)return h;const p=Nh(l[c-2]);return c>1&&Nh(u)===p&&f[f.length-1].path!==p?f.findIndex(ni.bind(null,l[c-2])):h}),s=K(()=>i.value>-1&&kb(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&mm(n.params,r.value.params));function a(l={}){return Cb(l)?t[Fe(e.replace)?"replace":"push"](Fe(e.to)).catch(Bi):Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Ib=mt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dh,setup(e,{slots:t}){const n=gi(Dh(e)),{options:r}=$e(xu),i=K(()=>({[Rh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:at("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),jo=Ib;function Cb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kb(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Qt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Nh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rh=(e,t,n)=>e??t??n,Ob=mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(uc),i=K(()=>e.route||r.value),s=$e(Ph,0),o=K(()=>{let c=Fe(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=K(()=>i.value.matched[o.value]);wt(Ph,K(()=>o.value+1)),wt(Tb,a),wt(uc,i);const l=Y();return an(()=>[l.value,a.value,e.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ni(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return Mh(n.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,A=at(h,ve({},v,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Mh(n.default,{Component:A,route:c})||A}}});function Mh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sm=Ob;function Pb(e){const t=ob(e.routes,e),n=e.parseQuery||xb,r=e.stringifyQuery||Oh,i=e.history,s=Si(),o=Si(),a=Si(),l=zp(Dn);let c=Dn;Ur&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fl.bind(null,_=>""+_),f=fl.bind(null,_b),h=fl.bind(null,$o);function p(_,F){let D,U;return vm(_)?(D=t.getRecordMatcher(_),U=F):U=_,t.addRoute(U,D)}function v(_){const F=t.getRecordMatcher(_);F&&t.removeRoute(F)}function y(){return t.getRoutes().map(_=>_.record)}function A(_){return!!t.getRecordMatcher(_)}function w(_,F){if(F=ve({},F||l.value),typeof _=="string"){const g=hl(n,_,F.path),E=t.resolve({path:g.path},F),x=i.createHref(g.fullPath);return ve(g,E,{params:h(E.params),hash:$o(g.hash),redirectedFrom:void 0,href:x})}let D;if("path"in _)D=ve({},_,{path:hl(n,_.path,F.path).path});else{const g=ve({},_.params);for(const E in g)g[E]==null&&delete g[E];D=ve({},_,{params:f(g)}),F.params=f(F.params)}const U=t.resolve(D,F),me=_.hash||"";U.params=u(h(U.params));const d=Mw(r,ve({},_,{hash:wb(me),path:U.path})),m=i.createHref(d);return ve({fullPath:d,hash:me,query:r===Oh?Ab(_.query):_.query||{}},U,{redirectedFrom:void 0,href:m})}function b(_){return typeof _=="string"?hl(n,_,l.value.path):ve({},_)}function R(_,F){if(c!==_)return ri(8,{from:F,to:_})}function k(_){return ne(_)}function W(_){return k(ve(b(_),{replace:!0}))}function Z(_){const F=_.matched[_.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let U=typeof D=="function"?D(_):D;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=b(U):{path:U},U.params={}),ve({query:_.query,hash:_.hash,params:"path"in U?{}:_.params},U)}}function ne(_,F){const D=c=w(_),U=l.value,me=_.state,d=_.force,m=_.replace===!0,g=Z(D);if(g)return ne(ve(b(g),{state:typeof g=="object"?ve({},me,g.state):me,force:d,replace:m}),F||D);const E=D;E.redirectedFrom=F;let x;return!d&&Lw(r,U,D)&&(x=ri(16,{to:E,from:U}),$t(U,U,!0,!1)),(x?Promise.resolve(x):Oe(E,U)).catch(T=>dn(T)?dn(T,2)?T:hn(T):ae(T,E,U)).then(T=>{if(T){if(dn(T,2))return ne(ve({replace:m},b(T.to),{state:typeof T.to=="object"?ve({},me,T.to.state):me,force:d}),F||E)}else T=Ft(E,U,!0,m,me);return Ge(E,U,T),T})}function he(_,F){const D=R(_,F);return D?Promise.reject(D):Promise.resolve()}function ce(_){const F=On.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(_):_()}function Oe(_,F){let D;const[U,me,d]=Db(_,F);D=dl(U.reverse(),"beforeRouteLeave",_,F);for(const g of U)g.leaveGuards.forEach(E=>{D.push(Mn(E,_,F))});const m=he.bind(null,_,F);return D.push(m),rt(D).then(()=>{D=[];for(const g of s.list())D.push(Mn(g,_,F));return D.push(m),rt(D)}).then(()=>{D=dl(me,"beforeRouteUpdate",_,F);for(const g of me)g.updateGuards.forEach(E=>{D.push(Mn(E,_,F))});return D.push(m),rt(D)}).then(()=>{D=[];for(const g of _.matched)if(g.beforeEnter&&!F.matched.includes(g))if(Qt(g.beforeEnter))for(const E of g.beforeEnter)D.push(Mn(E,_,F));else D.push(Mn(g.beforeEnter,_,F));return D.push(m),rt(D)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),D=dl(d,"beforeRouteEnter",_,F),D.push(m),rt(D))).then(()=>{D=[];for(const g of o.list())D.push(Mn(g,_,F));return D.push(m),rt(D)}).catch(g=>dn(g,8)?g:Promise.reject(g))}function Ge(_,F,D){for(const U of a.list())ce(()=>U(_,F,D))}function Ft(_,F,D,U,me){const d=R(_,F);if(d)return d;const m=F===Dn,g=Ur?history.state:{};D&&(U||m?i.replace(_.fullPath,ve({scroll:m&&g&&g.scroll},me)):i.push(_.fullPath,me)),l.value=_,$t(_,F,D,m),hn()}let Re;function se(){Re||(Re=i.listen((_,F,D)=>{if(!Ks.listening)return;const U=w(_),me=Z(U);if(me){ne(ve(me,{replace:!0}),U).catch(Bi);return}c=U;const d=l.value;Ur&&Hw(_h(d.fullPath,D.delta),Aa()),Oe(U,d).catch(m=>dn(m,12)?m:dn(m,2)?(ne(m.to,U).then(g=>{dn(g,20)&&!D.delta&&D.type===rs.pop&&i.go(-1,!1)}).catch(Bi),Promise.reject()):(D.delta&&i.go(-D.delta,!1),ae(m,U,d))).then(m=>{m=m||Ft(U,d,!1),m&&(D.delta&&!dn(m,8)?i.go(-D.delta,!1):D.type===rs.pop&&dn(m,20)&&i.go(-1,!1)),Ge(U,d,m)}).catch(Bi)}))}let oe=Si(),re=Si(),Q;function ae(_,F,D){hn(_);const U=re.list();return U.length?U.forEach(me=>me(_,F,D)):console.error(_),Promise.reject(_)}function Ye(){return Q&&l.value!==Dn?Promise.resolve():new Promise((_,F)=>{oe.add([_,F])})}function hn(_){return Q||(Q=!_,se(),oe.list().forEach(([F,D])=>_?D(_):F()),oe.reset()),_}function $t(_,F,D,U){const{scrollBehavior:me}=e;if(!Ur||!me)return Promise.resolve();const d=!D&&Kw(_h(_.fullPath,0))||(U||!D)&&history.state&&history.state.scroll||null;return pu().then(()=>me(_,F,d)).then(m=>m&&zw(m)).catch(m=>ae(m,_,F))}const Qe=_=>i.go(_);let kn;const On=new Set,Ks={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:A,getRoutes:y,resolve:w,options:e,push:k,replace:W,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:Ye,install(_){const F=this;_.component("RouterLink",jo),_.component("RouterView",Sm),_.config.globalProperties.$router=F,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(l)}),Ur&&!kn&&l.value===Dn&&(kn=!0,k(i.location).catch(me=>{}));const D={};for(const me in Dn)D[me]=K(()=>l.value[me]);_.provide(xu,F),_.provide(Tm,gi(D)),_.provide(uc,l);const U=_.unmount;On.add(_),_.unmount=function(){On.delete(_),On.size<1&&(c=Dn,Re&&Re(),Re=null,l.value=Dn,kn=!1,Q=!1),U()}}};function rt(_){return _.reduce((F,D)=>F.then(()=>ce(D)),Promise.resolve())}return Ks}function Db(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(c=>ni(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>ni(c,l))||i.push(l))}return[n,r,i]}const Lh="/logo.svg";function Lt(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Lt),r}var ii=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ii||{}),Fn=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Fn||{});function Dt({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...i}){var s;let o=Cm(r,n),a=Object.assign(i,{props:o});if(e||t&2&&o.static)return pl(a);if(t&1){let l=(s=o.unmount)==null||s?0:1;return Lt(l,{[0](){return null},[1](){return pl({...i,props:{...o,hidden:!0,style:{display:"none"}}})}})}return pl(a)}function pl({props:e,attrs:t,slots:n,slot:r,name:i}){var s,o;let{as:a,...l}=km(e,["unmount","static"]),c=(s=n.default)==null?void 0:s.call(n,r),u={};if(r){let f=!1,h=[];for(let[p,v]of Object.entries(r))typeof v=="boolean"&&(f=!0),v===!0&&h.push(p);f&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=Im(c??[]),Object.keys(l).length>0||Object.keys(t).length>0){let[f,...h]=c??[];if(!Nb(f)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(y=>y.trim()).filter((y,A,w)=>w.indexOf(y)===A).sort((y,A)=>y.localeCompare(A)).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let p=Cm((o=f.props)!=null?o:{},l),v=Sr(f,p);for(let y in p)y.startsWith("on")&&(v.props||(v.props={}),v.props[y]=p[y]);return v}return Array.isArray(c)&&c.length===1?c[0]:c}return at(a,Object.assign({},l,u),{default:()=>c})}function Im(e){return e.flatMap(t=>t.type===vt?Im(t.children):[t])}function Cm(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...s){let o=n[r];for(let a of o){if(i instanceof Event&&i.defaultPrevented)return;a(i,...s)}}});return t}function km(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Nb(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Rb=0;function Mb(){return++Rb}function vi(){return Mb()}var cr=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(cr||{});function be(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Om=Symbol("Context");var Ze=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Ze||{});function Lb(){return Ta()!==null}function Ta(){return $e(Om,null)}function Pm(e){wt(Om,e)}function Fh(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Fb(e,t){let n=Y(Fh(e.value.type,e.value.as));return ht(()=>{n.value=Fh(e.value.type,e.value.as)}),kt(()=>{var r;n.value||be(t)&&be(t)instanceof HTMLButtonElement&&!((r=be(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var $b=Object.defineProperty,jb=(e,t,n)=>t in e?$b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$h=(e,t,n)=>(jb(e,typeof t!="symbol"?t+"":t,n),n);class Bb{constructor(){$h(this,"current",this.detect()),$h(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ss=new Bb;function Is(e){if(Ss.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=be(e);if(t)return t.ownerDocument}return document}let fc=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ln=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ln||{}),Dm=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Dm||{}),Ub=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ub||{});function Vb(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fc)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Nm=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Nm||{});function zb(e,t=0){var n;return e===((n=Is(e))==null?void 0:n.body)?!1:Lt(t,{[0](){return e.matches(fc)},[1](){let r=e;for(;r!==null;){if(r.matches(fc))return!0;r=r.parentElement}return!1}})}var Hb=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Hb||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Er(e){e==null||e.focus({preventScroll:!0})}let Kb=["textarea","input"].join(",");function qb(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Kb))!=null?n:!1}function Wb(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),s=t(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function So(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var s;let o=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,a=Array.isArray(e)?n?Wb(e):e:Vb(e);i.length>0&&a.length>1&&(a=a.filter(v=>!i.includes(v))),r=r??o.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},f=0,h=a.length,p;do{if(f>=h||f+h<=0)return 0;let v=c+f;if(t&16)v=(v+h)%h;else{if(v<0)return 3;if(v>=h)return 1}p=a[v],p==null||p.focus(u),f+=l}while(p!==o.activeElement);return t&6&&qb(p)&&p.select(),2}function ml(e,t,n){Ss.isServer||kt(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Gb(e,t,n=K(()=>!0)){function r(s,o){if(!n.value||s.defaultPrevented)return;let a=o(s);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:be(c);if(u!=null&&u.contains(a)||s.composed&&s.composedPath().includes(u))return}return!zb(a,Nm.Loose)&&a.tabIndex!==-1&&s.preventDefault(),t(s,a)}let i=Y(null);ml("mousedown",s=>{var o,a;n.value&&(i.value=((a=(o=s.composedPath)==null?void 0:o.call(s))==null?void 0:a[0])||s.target)},!0),ml("click",s=>{i.value&&(r(s,()=>i.value),i.value=null)},!0),ml("blur",s=>r(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Bo=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Bo||{});let hc=mt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...i}=e,s={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return Dt({ourProps:s,theirProps:i,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Yb(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Qb(e,t,n){Ss.isServer||kt(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}var Ni=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ni||{});function Xb(){let e=Y(0);return Qb("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Rm(e,t,n,r){Ss.isServer||kt(i=>{e=e??window,e.addEventListener(t,n,r),i(()=>e.removeEventListener(t,n,r))})}function Mm(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Jb(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Lm(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=be(n);r instanceof HTMLElement&&t.add(r)}return t}var Fm=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fm||{});let Ii=Object.assign(mt({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:Y(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let i=Y(null);r({el:i,$el:i});let s=K(()=>Is(i)),o=Y(!1);ht(()=>o.value=!0),Pt(()=>o.value=!1),e2({ownerDocument:s},K(()=>o.value&&!!(e.features&16)));let a=t2({ownerDocument:s,container:i,initialFocus:K(()=>e.initialFocus)},K(()=>o.value&&!!(e.features&2)));n2({ownerDocument:s,container:i,containers:e.containers,previousActiveElement:a},K(()=>o.value&&!!(e.features&8)));let l=Xb();function c(p){let v=be(i);v&&(y=>y())(()=>{Lt(l.value,{[Ni.Forwards]:()=>{So(v,Ln.First,{skipElements:[p.relatedTarget]})},[Ni.Backwards]:()=>{So(v,Ln.Last,{skipElements:[p.relatedTarget]})}})})}let u=Y(!1);function f(p){p.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function h(p){if(!o.value)return;let v=Lm(e.containers);be(i)instanceof HTMLElement&&v.add(be(i));let y=p.relatedTarget;y instanceof HTMLElement&&y.dataset.headlessuiFocusGuard!=="true"&&($m(v,y)||(u.value?So(be(i),Lt(l.value,{[Ni.Forwards]:()=>Ln.Next,[Ni.Backwards]:()=>Ln.Previous})|Ln.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&Er(p.target)))}return()=>{let p={},v={ref:i,onKeydown:f,onFocusout:h},{features:y,initialFocus:A,containers:w,...b}=e;return at(vt,[!!(y&4)&&at(hc,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Bo.Focusable}),Dt({ourProps:v,theirProps:{...t,...b},slot:p,attrs:t,slots:n,name:"FocusTrap"}),!!(y&4)&&at(hc,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:Bo.Focusable})])}}}),{features:Fm}),ur=[];Jb(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&ur[0]!==t.target&&(ur.unshift(t.target),ur=ur.filter(n=>n!=null&&n.isConnected),ur.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Zb(e){let t=Y(ur.slice());return an([e],([n],[r])=>{r===!0&&n===!1?Mm(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=ur.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function e2({ownerDocument:e},t){let n=Zb(t);ht(()=>{kt(()=>{var r,i;t.value||((r=e.value)==null?void 0:r.activeElement)===((i=e.value)==null?void 0:i.body)&&Er(n())},{flush:"post"})}),Pt(()=>{Er(n())})}function t2({ownerDocument:e,container:t,initialFocus:n},r){let i=Y(null),s=Y(!1);return ht(()=>s.value=!0),Pt(()=>s.value=!1),ht(()=>{an([t,n,r],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!r.value)return;let l=be(t);l&&Mm(()=>{var c,u;if(!s.value)return;let f=be(n),h=(c=e.value)==null?void 0:c.activeElement;if(f){if(f===h){i.value=h;return}}else if(l.contains(h)){i.value=h;return}f?Er(f):So(l,Ln.First|Ln.NoScroll)===Dm.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),i}function n2({ownerDocument:e,container:t,containers:n,previousActiveElement:r},i){var s;Rm((s=e.value)==null?void 0:s.defaultView,"focus",o=>{if(!i.value)return;let a=Lm(n);be(t)instanceof HTMLElement&&a.add(be(t));let l=r.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?$m(a,c)?(r.value=c,Er(c)):(o.preventDefault(),o.stopPropagation(),Er(l)):Er(r.value)},!0)}function $m(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let gl=new Map,Ci=new Map;function jh(e,t=Y(!0)){kt(n=>{var r;if(!t.value)return;let i=be(e);if(!i)return;n(function(){var o;if(!i)return;let a=(o=Ci.get(i))!=null?o:1;if(a===1?Ci.delete(i):Ci.set(i,a-1),a!==1)return;let l=gl.get(i);l&&(l["aria-hidden"]===null?i.removeAttribute("aria-hidden"):i.setAttribute("aria-hidden",l["aria-hidden"]),i.inert=l.inert,gl.delete(i))});let s=(r=Ci.get(i))!=null?r:0;Ci.set(i,s+1),s===0&&(gl.set(i,{"aria-hidden":i.getAttribute("aria-hidden"),inert:i.inert}),i.setAttribute("aria-hidden","true"),i.inert=!0)})}let jm=Symbol("ForcePortalRootContext");function r2(){return $e(jm,!1)}let Bh=mt({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return wt(jm,e.force),()=>{let{force:r,...i}=e;return Dt({theirProps:i,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function i2(e){let t=Is(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let s2=mt({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=Y(null),i=K(()=>Is(r)),s=r2(),o=$e(Bm,null),a=Y(s===!0||o==null?i2(r.value):o.resolveTarget());return kt(()=>{s||o!=null&&(a.value=o.resolveTarget())}),Pt(()=>{var l,c;let u=(l=i.value)==null?void 0:l.getElementById("headlessui-portal-root");u&&a.value===u&&a.value.children.length<=0&&((c=a.value.parentElement)==null||c.removeChild(a.value))}),()=>{if(a.value===null)return null;let l={ref:r,"data-headlessui-portal":""};return at(H1,{to:a.value},Dt({ourProps:l,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Bm=Symbol("PortalGroupContext"),o2=mt({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=gi({resolveTarget(){return e.target}});return wt(Bm,r),()=>{let{target:i,...s}=e;return Dt({theirProps:s,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Um=Symbol("StackContext");var dc=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(dc||{});function a2(){return $e(Um,()=>{})}function l2({type:e,enabled:t,element:n,onUpdate:r}){let i=a2();function s(...o){r==null||r(...o),i(...o)}ht(()=>{an(t,(o,a)=>{o?s(0,e,n):a===!0&&s(1,e,n)},{immediate:!0,flush:"sync"})}),Pt(()=>{t.value&&s(1,e,n)}),wt(Um,s)}let c2=Symbol("DescriptionContext");function u2({slot:e=Y({}),name:t="Description",props:n={}}={}){let r=Y([]);function i(s){return r.value.push(s),()=>{let o=r.value.indexOf(s);o!==-1&&r.value.splice(o,1)}}return wt(c2,{register:i,slot:e,name:t,props:n}),K(()=>r.value.length>0?r.value.join(" "):void 0)}function f2(e){let t=zp(e.getSnapshot());return Pt(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Sa(){let e=[],t={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),t.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=Sa();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function h2(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...s){let o=t[i].call(n,...s);o&&(n=o,r.forEach(a=>a()))}}}function d2(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,i=r.clientWidth-r.offsetWidth,s=e-i;n.style(r,"paddingRight",`${s}px`)}}}function p2(){if(!Yb())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function i(o){return r.containers.flatMap(a=>a()).some(a=>a.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let s=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let a=o.target.closest("a");if(!a)return;let{hash:l}=new URL(a.href),c=t.querySelector(l);c&&!i(c)&&(s=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})}}}function m2(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function g2(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let hr=h2(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Sa(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:g2(n)},i=[p2(),d2(),m2()];i.forEach(({before:s})=>s==null?void 0:s(r)),i.forEach(({after:s})=>s==null?void 0:s(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});hr.subscribe(()=>{let e=hr.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&hr.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&hr.dispatch("TEARDOWN",n)}});function v2(e,t,n){let r=f2(hr),i=K(()=>{let s=e.value?r.value.get(e.value):void 0;return s?s.count>0:!1});return an([e,t],([s,o],[a],l)=>{if(!s||!o)return;hr.dispatch("PUSH",s,n);let c=!1;l(()=>{c||(hr.dispatch("POP",a??s,n),c=!0)})},{immediate:!0}),i}var y2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(y2||{});let pc=Symbol("DialogContext");function Au(e){let t=$e(pc,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Au),n}return t}let eo="DC8F892D-2EBD-447C-A4C8-A03058436FF4",w2=mt({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:eo},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${vi()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:i}){var s;let o=Y(!1);ht(()=>{o.value=!0});let a=Y(0),l=Ta(),c=K(()=>e.open===eo&&l!==null?(l.value&Ze.Open)===Ze.Open:e.open),u=Y(null),f=Y(null),h=K(()=>Is(u));if(i({el:u,$el:u}),!(e.open!==eo||l!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof c.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value===eo?void 0:e.open}`);let p=K(()=>o.value&&c.value?0:1),v=K(()=>p.value===0),y=K(()=>a.value>1),A=$e(pc,null)!==null,w=K(()=>y.value?"parent":"leaf"),b=K(()=>l!==null?(l.value&Ze.Closing)===Ze.Closing:!1),R=K(()=>A||b.value?!1:v.value),k=K(()=>{var se,oe,re;return(re=Array.from((oe=(se=h.value)==null?void 0:se.querySelectorAll("body > *"))!=null?oe:[]).find(Q=>Q.id==="headlessui-portal-root"?!1:Q.contains(be(f))&&Q instanceof HTMLElement))!=null?re:null});jh(k,R);let W=K(()=>y.value?!0:v.value),Z=K(()=>{var se,oe,re;return(re=Array.from((oe=(se=h.value)==null?void 0:se.querySelectorAll("[data-headlessui-portal]"))!=null?oe:[]).find(Q=>Q.contains(be(f))&&Q instanceof HTMLElement))!=null?re:null});jh(Z,W),l2({type:"Dialog",enabled:K(()=>p.value===0),element:u,onUpdate:(se,oe)=>{if(oe==="Dialog")return Lt(se,{[dc.Add]:()=>a.value+=1,[dc.Remove]:()=>a.value-=1})}});let ne=u2({name:"DialogDescription",slot:K(()=>({open:c.value}))}),he=Y(null),ce={titleId:he,panelRef:Y(null),dialogState:p,setTitleId(se){he.value!==se&&(he.value=se)},close(){t("close",!1)}};wt(pc,ce);function Oe(){var se,oe,re;return[...Array.from((oe=(se=h.value)==null?void 0:se.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?oe:[]).filter(Q=>!(Q===document.body||Q===document.head||!(Q instanceof HTMLElement)||Q.contains(be(f))||ce.panelRef.value&&Q.contains(ce.panelRef.value))),(re=ce.panelRef.value)!=null?re:u.value]}let Ge=K(()=>!(!v.value||y.value));Gb(()=>Oe(),(se,oe)=>{ce.close(),pu(()=>oe==null?void 0:oe.focus())},Ge);let Ft=K(()=>!(y.value||p.value!==0));Rm((s=h.value)==null?void 0:s.defaultView,"keydown",se=>{Ft.value&&(se.defaultPrevented||se.key===cr.Escape&&(se.preventDefault(),se.stopPropagation(),ce.close()))});let Re=K(()=>!(b.value||p.value!==0||A));return v2(h,Re,se=>{var oe;return{containers:[...(oe=se.containers)!=null?oe:[],Oe]}}),kt(se=>{if(p.value!==0)return;let oe=be(u);if(!oe)return;let re=new ResizeObserver(Q=>{for(let ae of Q){let Ye=ae.target.getBoundingClientRect();Ye.x===0&&Ye.y===0&&Ye.width===0&&Ye.height===0&&ce.close()}});re.observe(oe),se(()=>re.disconnect())}),()=>{let{id:se,open:oe,initialFocus:re,...Q}=e,ae={...n,ref:u,id:se,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":he.value,"aria-describedby":ne.value},Ye={open:p.value===0};return at(Bh,{force:!0},()=>[at(s2,()=>at(o2,{target:u.value},()=>at(Bh,{force:!1},()=>at(Ii,{initialFocus:re,containers:Oe,features:v.value?Lt(w.value,{parent:Ii.features.RestoreFocus,leaf:Ii.features.All&~Ii.features.FocusLock}):Ii.features.None},()=>Dt({ourProps:ae,theirProps:Q,slot:Ye,attrs:n,slots:r,visible:p.value===0,features:ii.RenderStrategy|ii.Static,name:"Dialog"}))))),at(hc,{features:Bo.Hidden,ref:f})])}}}),b2=mt({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${vi()}`}},setup(e,{attrs:t,slots:n,expose:r}){let i=Au("DialogPanel");r({el:i.panelRef,$el:i.panelRef});function s(o){o.stopPropagation()}return()=>{let{id:o,...a}=e,l={id:o,ref:i.panelRef,onClick:s};return Dt({ourProps:l,theirProps:a,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),E2=mt({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${vi()}`}},setup(e,{attrs:t,slots:n}){let r=Au("DialogTitle");return ht(()=>{r.setTitleId(e.id),Pt(()=>r.setTitleId(null))}),()=>{let{id:i,...s}=e;return Dt({ourProps:{id:i},theirProps:s,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});var _2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_2||{});let Vm=Symbol("DisclosureContext");function Tu(e){let t=$e(Vm,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Tu),n}return t}let zm=Symbol("DisclosurePanelContext");function x2(){return $e(zm,null)}let A2=mt({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let r=Y(e.defaultOpen?0:1),i=Y(null),s=Y(null),o={buttonId:Y(null),panelId:Y(null),disclosureState:r,panel:i,button:s,toggleDisclosure(){r.value=Lt(r.value,{[0]:1,[1]:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(a){o.closeDisclosure();let l=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?be(a):be(o.button):be(o.button))();l==null||l.focus()}};return wt(Vm,o),Pm(K(()=>Lt(r.value,{[0]:Ze.Open,[1]:Ze.Closed}))),()=>{let{defaultOpen:a,...l}=e,c={open:r.value===0,close:o.close};return Dt({theirProps:l,ourProps:{},slot:c,slots:t,attrs:n,name:"Disclosure"})}}}),Uh=mt({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${vi()}`}},setup(e,{attrs:t,slots:n,expose:r}){let i=Tu("DisclosureButton");ht(()=>{i.buttonId.value=e.id}),Pt(()=>{i.buttonId.value=null});let s=x2(),o=K(()=>s===null?!1:s.value===i.panelId.value),a=Y(null);r({el:a,$el:a}),o.value||kt(()=>{i.button.value=a.value});let l=Fb(K(()=>({as:e.as,type:t.type})),a);function c(){var h;e.disabled||(o.value?(i.toggleDisclosure(),(h=be(i.button))==null||h.focus()):i.toggleDisclosure())}function u(h){var p;if(!e.disabled)if(o.value)switch(h.key){case cr.Space:case cr.Enter:h.preventDefault(),h.stopPropagation(),i.toggleDisclosure(),(p=be(i.button))==null||p.focus();break}else switch(h.key){case cr.Space:case cr.Enter:h.preventDefault(),h.stopPropagation(),i.toggleDisclosure();break}}function f(h){switch(h.key){case cr.Space:h.preventDefault();break}}return()=>{let h={open:i.disclosureState.value===0},{id:p,...v}=e,y=o.value?{ref:a,type:l.value,onClick:c,onKeydown:u}:{id:p,ref:a,type:l.value,"aria-expanded":e.disabled?void 0:i.disclosureState.value===0,"aria-controls":be(i.panel)?i.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:c,onKeydown:u,onKeyup:f};return Dt({ourProps:y,theirProps:v,slot:h,attrs:t,slots:n,name:"DisclosureButton"})}}}),T2=mt({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${vi()}`}},setup(e,{attrs:t,slots:n,expose:r}){let i=Tu("DisclosurePanel");ht(()=>{i.panelId.value=e.id}),Pt(()=>{i.panelId.value=null}),r({el:i.panel,$el:i.panel}),wt(zm,i.panelId);let s=Ta(),o=K(()=>s!==null?(s.value&Ze.Open)===Ze.Open:i.disclosureState.value===0);return()=>{let a={open:i.disclosureState.value===0,close:i.close},{id:l,...c}=e,u={id:l,ref:i.panel};return Dt({ourProps:u,theirProps:c,slot:a,attrs:t,slots:n,features:ii.RenderStrategy|ii.Static,visible:o.value,name:"DisclosurePanel"})}}});function S2(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function vl(e,...t){e&&t.length>0&&e.classList.add(...t)}function to(e,...t){e&&t.length>0&&e.classList.remove(...t)}var mc=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(mc||{});function I2(e,t){let n=Sa();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[s,o]=[r,i].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return s!==0?n.setTimeout(()=>t("finished"),s+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Vh(e,t,n,r,i,s){let o=Sa(),a=s!==void 0?S2(s):()=>{};return to(e,...i),vl(e,...t,...n),o.nextFrame(()=>{to(e,...n),vl(e,...r),o.add(I2(e,l=>(to(e,...r,...t),vl(e,...i),a(l))))}),o.add(()=>to(e,...t,...n,...r,...i)),o.add(()=>a("cancelled")),o.dispose}function rr(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Su=Symbol("TransitionContext");var C2=(e=>(e.Visible="visible",e.Hidden="hidden",e))(C2||{});function k2(){return $e(Su,null)!==null}function O2(){let e=$e(Su,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function P2(){let e=$e(Iu,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Iu=Symbol("NestingContext");function Ia(e){return"children"in e?Ia(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Hm(e){let t=Y([]),n=Y(!1);ht(()=>n.value=!0),Pt(()=>n.value=!1);function r(s,o=Fn.Hidden){let a=t.value.findIndex(({id:l})=>l===s);a!==-1&&(Lt(o,{[Fn.Unmount](){t.value.splice(a,1)},[Fn.Hidden](){t.value[a].state="hidden"}}),!Ia(t)&&n.value&&(e==null||e()))}function i(s){let o=t.value.find(({id:a})=>a===s);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:s,state:"visible"}),()=>r(s,Fn.Unmount)}return{children:t,register:i,unregister:r}}let Km=ii.RenderStrategy,gc=mt({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:i}){let s=Y(0);function o(){s.value|=Ze.Opening,t("beforeEnter")}function a(){s.value&=~Ze.Opening,t("afterEnter")}function l(){s.value|=Ze.Closing,t("beforeLeave")}function c(){s.value&=~Ze.Closing,t("afterLeave")}if(!k2()&&Lb())return()=>at(qm,{...e,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},r);let u=Y(null),f=K(()=>e.unmount?Fn.Unmount:Fn.Hidden);i({el:u,$el:u});let{show:h,appear:p}=O2(),{register:v,unregister:y}=P2(),A=Y(h.value?"visible":"hidden"),w={value:!0},b=vi(),R={value:!1},k=Hm(()=>{!R.value&&A.value!=="hidden"&&(A.value="hidden",y(b),c())});ht(()=>{let Re=v(b);Pt(Re)}),kt(()=>{if(f.value===Fn.Hidden&&b){if(h.value&&A.value!=="visible"){A.value="visible";return}Lt(A.value,{hidden:()=>y(b),visible:()=>v(b)})}});let W=rr(e.enter),Z=rr(e.enterFrom),ne=rr(e.enterTo),he=rr(e.entered),ce=rr(e.leave),Oe=rr(e.leaveFrom),Ge=rr(e.leaveTo);ht(()=>{kt(()=>{if(A.value==="visible"){let Re=be(u);if(Re instanceof Comment&&Re.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Ft(Re){let se=w.value&&!p.value,oe=be(u);!oe||!(oe instanceof HTMLElement)||se||(R.value=!0,h.value&&o(),h.value||l(),Re(h.value?Vh(oe,W,Z,ne,he,re=>{R.value=!1,re===mc.Finished&&a()}):Vh(oe,ce,Oe,Ge,he,re=>{R.value=!1,re===mc.Finished&&(Ia(k)||(A.value="hidden",y(b),c()))})))}return ht(()=>{an([h],(Re,se,oe)=>{Ft(oe),w.value=!1},{immediate:!0})}),wt(Iu,k),Pm(K(()=>Lt(A.value,{visible:Ze.Open,hidden:Ze.Closed})|s.value)),()=>{let{appear:Re,show:se,enter:oe,enterFrom:re,enterTo:Q,entered:ae,leave:Ye,leaveFrom:hn,leaveTo:$t,...Qe}=e,kn={ref:u},On={...Qe,...p.value&&h.value&&Ss.isServer?{class:Ar([n.class,Qe.class,...W,...Z])}:{}};return Dt({theirProps:On,ourProps:kn,slot:{},slots:r,attrs:n,features:Km,visible:A.value==="visible",name:"TransitionChild"})}}}),D2=gc,qm=mt({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let i=Ta(),s=K(()=>e.show===null&&i!==null?(i.value&Ze.Open)===Ze.Open:e.show);kt(()=>{if(![!0,!1].includes(s.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=Y(s.value?"visible":"hidden"),a=Hm(()=>{o.value="hidden"}),l=Y(!0),c={show:s,appear:K(()=>e.appear||!l.value)};return ht(()=>{kt(()=>{l.value=!1,s.value?o.value="visible":Ia(a)||(o.value="hidden")})}),wt(Iu,a),wt(Su,c),()=>{let u=km(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),f={unmount:e.unmount};return Dt({ourProps:{...f,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[at(D2,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...f,...u},r.default)]},attrs:{},features:Km,visible:o.value==="visible",name:"Transition"})}}});const N2={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},R2={class:"relative flex h-16 items-center justify-between"},M2={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},L2=$("div",{class:"sr-only"},"Open main menu",-1),F2={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},$2=$("div",{class:"flex sm:flex-grow items-center"},[$("img",{class:"block h-8 w-auto lg:hidden",src:Lh,alt:"CodeReviewShop"}),$("img",{class:"hidden h-8 w-auto lg:block",src:Lh,alt:"CodeReviewShop"}),$("h3",{class:"text-white px-2 font-semibold"},"Code Review Shop")],-1),j2={class:"hidden sm:ml-6 sm:block"},B2={class:"flex space-x-4"},U2={class:"space-y-1 px-2 pb-3 pt-2"},V2=["onClick"],z2={__name:"NavBar",setup(e){const t=Y([{name:"Home",href:"/",current:!0},{name:"Services",href:"/services",current:!1},{name:"About Us",href:"/about",current:!1}]);function n(r){t.value.forEach(i=>{r!=i?i.current=!1:i.current=!0})}return(r,i)=>{const s=ba("font-awesome-icon");return ot(),or(Fe(A2),{as:"nav",class:"bg-gray-800"},{default:It(({open:o})=>[$("div",N2,[$("div",R2,[$("div",M2,[de(Fe(Uh),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:It(()=>[L2,o?(ot(),or(s,{key:1,icon:["fas","xmark"],"aria-hidden":"true",class:"block h-6 w-6"})):(ot(),or(s,{key:0,icon:["fas","bars"],class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),$("div",F2,[$2,$("div",j2,[$("div",B2,[(ot(!0),bn(vt,null,Zl(t.value,a=>(ot(),or(Fe(jo),{onClick:l=>n(a),key:a.name,to:a.href,class:Ar([a.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-semibold"]),"aria-current":a.current?"page":void 0},{default:It(()=>[Yt(Do(a.name),1)]),_:2},1032,["onClick","to","class","aria-current"]))),128)),$("a",{href:"https://codereviewblog.web.app",target:"_blank",onClick:i[0]||(i[0]=a=>n(null)),class:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold","aria-current":"undefined"},"Blog")])])])])]),de(Fe(T2),{class:"sm:hidden"},{default:It(({close:a})=>[$("div",U2,[(ot(!0),bn(vt,null,Zl(t.value,l=>(ot(),or(Fe(Uh),{onClick:c=>{n(l),a(Y)},key:l.name,as:Fe(jo),to:l.href,class:Ar([l.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":l.current?"page":void 0},{default:It(()=>[Yt(Do(l.name),1)]),_:2},1032,["onClick","as","to","class","aria-current"]))),128)),$("a",{onClick:l=>{n(null),a(Y)},target:"_blank",href:"https://codereviewblog.web.app",class:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"undefined"},"Blog",8,V2)])]),_:1})]),_:1})}}},H2={class:"sm:flex inline-block bg-orange-100 flex-col w-full h-max justify-center items-center text-center py-4"},K2={class:"flex sm:flex-row flex-col justify-around items-center p-4 mx-auto my-0 w-full max-w-7xl"},q2={class:"w-full text-center mb-3"},W2=$("p",{class:"text-xl"},"Contact Us",-1),G2={href:"mailto:codereviewshop@gmail.com"},Y2=G1('<div class="flex flex-row justify-center gap-5 my-0 mx-10 w-full max-w-7xl"><a href="https://www.linkedin.com/in/davesaah/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="blue"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a><a href="https://github.com/DaveSaah" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://twitter.com/dave_saah" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="DeepSkyBlue"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a></div>',1),Q2={__name:"FooterSection",setup(e){const t=Y(new Date().getFullYear());return(n,r)=>{const i=ba("font-awesome-icon");return ot(),bn("footer",H2,[$("div",null," © 2023 "+Do(t.value!==2023?"- "+t.value:"")+" CodeReviewShop ",1),$("div",K2,[$("div",q2,[W2,$("a",G2,[de(i,{icon:["fas","envelope"],class:"w-4 h-4 text-red-600"}),Yt(" codereviewshop@gmail.com")])]),Y2])])}}},X2=$("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),J2={class:"fixed inset-0 overflow-y-auto"},Z2={class:"flex min-h-full items-center justify-center p-4 text-center"},eE=$("div",{class:"mt-2"},[$("p",{class:"text-sm text-gray-500"}," This site uses Google Analytics to understand how users interact with it. ")],-1),tE={__name:"ConsentDialog",setup(e){const t=Y(!0);function n(){t.value=!1}return(r,i)=>(ot(),or(Fe(qm),{appear:"",show:t.value,as:"template"},{default:It(()=>[de(Fe(w2),{as:"div",onClose:n,class:"relative z-10"},{default:It(()=>[de(Fe(gc),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:It(()=>[X2]),_:1}),$("div",J2,[$("div",Z2,[de(Fe(gc),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:It(()=>[de(Fe(b2),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:It(()=>[de(Fe(E2),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:It(()=>[Yt(" Welcome to CodeReviewShop! ")]),_:1}),eE,$("div",{class:"mt-4"},[$("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none",onClick:n}," Got it, thanks! ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},nE={__name:"App",setup(e){return(t,n)=>(ot(),bn(vt,null,[de(tE),$("header",null,[de(z2)]),de(Fe(Sm)),de(Q2)],64))}},rE="modulepreload",iE=function(e){return"/"+e},zh={},yl=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=iE(s),s in zh)return;zh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":rE,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},sE="/home.jpg",oE={class:"inline-flex w-[200px] flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"},aE={class:"relative m-4 flex h-40 flex-col justify-between rounded-lg bg-gray-200 p-4 shadow"},lE={class:"z-10"},cE={class:"font-bold mb-2 text-lg"},uE={class:"absolute right-5 top-10 text-8xl backdrop-blur"},fE={__name:"CardItem",props:{title:String,color:String,icon:String[2]},setup(e){return(t,n)=>{const r=ba("font-awesome-icon");return ot(),bn("div",oE,[$("div",aE,[$("div",lE,[$("h3",cE,Do(e.title),1)]),$("div",uE,[de(r,{icon:e.icon,class:Ar(e.color)},null,8,["icon","class"])])])])}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},hE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),r.push(n[u],n[f],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):hE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new dE;const h=s<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pE=function(e){const t=Wm(e);return Gm.encodeByteArray(t,!0)},Uo=function(e){return pE(e).replace(/\./g,"")},mE=function(e){try{return Gm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=()=>gE().__FIREBASE_DEFAULTS__,yE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mE(e[1]);return t&&JSON.parse(t)},Ym=()=>{try{return vE()||yE()||wE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bE=e=>{var t,n;return(n=(t=Ym())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},EE=e=>{const t=bE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Qm=()=>{var e;return(e=Ym())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),a].join(".")}function AE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Jm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function TE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="FirebaseError";class Jn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=SE,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?IE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,a,r)}}function IE(e,t){return e.replace(CE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const CE=/\{\$([^}]+)}/g;function Vo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Hh(s)&&Hh(o)){if(!Vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1e3,OE=2,PE=4*60*60*1e3,DE=.5;function Kh(e,t=kE,n=OE){const r=t*Math.pow(n,e),i=Math.round(DE*r*(Math.random()-.5)*2);return Math.min(PE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){return e&&e._delegate?e._delegate:e}class En{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _E;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ME(t))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ir){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ir){return this.instances.has(t)}getOptions(t=ir){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ir){return this.component?this.component.multipleInstances?t:ir:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(e){return e===ir?void 0:e}function ME(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new NE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ge||(ge={}));const FE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},$E=ge.INFO,jE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},BE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=jE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cu{constructor(t){this.name=t,this._logLevel=$E,this._logHandler=BE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ge))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?FE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...t),this._logHandler(this,ge.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...t),this._logHandler(this,ge.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...t),this._logHandler(this,ge.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...t),this._logHandler(this,ge.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...t),this._logHandler(this,ge.ERROR,...t)}}const UE=(e,t)=>t.some(n=>e instanceof n);let qh,Wh;function VE(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return Wh||(Wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zm=new WeakMap,vc=new WeakMap,eg=new WeakMap,wl=new WeakMap,ku=new WeakMap;function HE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Bn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Zm.set(n,e)}).catch(()=>{}),ku.set(t,e),t}function KE(e){if(vc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});vc.set(e,t)}let yc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return vc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||eg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qE(e){yc=e(yc)}function WE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bl(this),t,...n);return eg.set(r,t.sort?t.sort():[t]),Bn(r)}:zE().includes(e)?function(...t){return e.apply(bl(this),t),Bn(Zm.get(this))}:function(...t){return Bn(e.apply(bl(this),t))}}function GE(e){return typeof e=="function"?WE(e):(e instanceof IDBTransaction&&KE(e),UE(e,VE())?new Proxy(e,yc):e)}function Bn(e){if(e instanceof IDBRequest)return HE(e);if(wl.has(e))return wl.get(e);const t=GE(e);return t!==e&&(wl.set(e,t),ku.set(t,e)),t}const bl=e=>ku.get(e);function YE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bn(o.result),l.oldVersion,l.newVersion,Bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const QE=["get","getKey","getAll","getAllKeys","count"],XE=["put","add","delete","clear"],El=new Map;function Gh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(El.get(t))return El.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=XE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return El.set(t,s),s}qE(e=>({...e,get:(t,n,r)=>Gh(t,n)||e.get(t,n,r),has:(t,n)=>!!Gh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wc="@firebase/app",Yh="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Cu("@firebase/app"),e_="@firebase/app-compat",t_="@firebase/analytics-compat",n_="@firebase/analytics",r_="@firebase/app-check-compat",i_="@firebase/app-check",s_="@firebase/auth",o_="@firebase/auth-compat",a_="@firebase/database",l_="@firebase/database-compat",c_="@firebase/functions",u_="@firebase/functions-compat",f_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",p_="@firebase/messaging-compat",m_="@firebase/performance",g_="@firebase/performance-compat",v_="@firebase/remote-config",y_="@firebase/remote-config-compat",w_="@firebase/storage",b_="@firebase/storage-compat",E_="@firebase/firestore",__="@firebase/firestore-compat",x_="firebase",A_="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="[DEFAULT]",T_={[wc]:"fire-core",[e_]:"fire-core-compat",[n_]:"fire-analytics",[t_]:"fire-analytics-compat",[i_]:"fire-app-check",[r_]:"fire-app-check-compat",[s_]:"fire-auth",[o_]:"fire-auth-compat",[a_]:"fire-rtdb",[l_]:"fire-rtdb-compat",[c_]:"fire-fn",[u_]:"fire-fn-compat",[f_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[p_]:"fire-fcm-compat",[m_]:"fire-perf",[g_]:"fire-perf-compat",[v_]:"fire-rc",[y_]:"fire-rc-compat",[w_]:"fire-gcs",[b_]:"fire-gcs-compat",[E_]:"fire-fst",[__]:"fire-fst-compat","fire-js":"fire-js",[x_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,Ec=new Map;function S_(e,t){try{e.container.addComponent(t)}catch(n){Cr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kn(e){const t=e.name;if(Ec.has(t))return Cr.debug(`There were multiple attempts to register component ${t}.`),!1;Ec.set(t,e);for(const n of zo.values())S_(n,e);return!0}function Cs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Ca("app","Firebase",I_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=A_;function tg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:bc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=Qm()),!n)throw Un.create("no-options");const s=zo.get(i);if(s){if(Vo(n,s.options)&&Vo(r,s.config))return s;throw Un.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of Ec.values())o.addComponent(l);const a=new C_(n,r,o);return zo.set(i,a),a}function Ou(e=bc){const t=zo.get(e);if(!t&&e===bc&&Qm())return tg();if(!t)throw Un.create("no-app",{appName:e});return t}function ln(e,t,n){var r;let i=(r=T_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Kn(new En(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebase-heartbeat-database",P_=1,is="firebase-heartbeat-store";let _l=null;function ng(){return _l||(_l=YE(O_,P_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(is)}}}).catch(e=>{throw Un.create("idb-open",{originalErrorMessage:e.message})})),_l}async function D_(e){try{return await(await ng()).transaction(is).objectStore(is).get(rg(e))}catch(t){if(t instanceof Jn)Cr.warn(t.message);else{const n=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(n.message)}}}async function Qh(e,t){try{const r=(await ng()).transaction(is,"readwrite");await r.objectStore(is).put(t,rg(e)),await r.done}catch(n){if(n instanceof Jn)Cr.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function rg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=1024,R_=30*24*60*60*1e3;class M_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=R_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xh(),{heartbeatsToSend:n,unsentEntries:r}=L_(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xh(){return new Date().toISOString().substring(0,10)}function L_(e,t=N_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Jm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await D_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jh(e){return Uo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e){Kn(new En("platform-logger",t=>new JE(t),"PRIVATE")),Kn(new En("heartbeat",t=>new M_(t),"PRIVATE")),ln(wc,Yh,e),ln(wc,Yh,"esm2017"),ln("fire-js","")}$_("");var j_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Pu=Pu||{},X=j_||self;function ka(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ks(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function B_(e){return Object.prototype.hasOwnProperty.call(e,xl)&&e[xl]||(e[xl]=++U_)}var xl="closure_uid_"+(1e9*Math.random()>>>0),U_=0;function V_(e,t,n){return e.call.apply(e.bind,arguments)}function z_(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function dt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=V_:dt=z_,dt.apply(null,arguments)}function no(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function We(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var H_=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),H_!=0)&&B_(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ig=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Du(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Zh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ka(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function pt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var K_=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{X.addEventListener("test",()=>{},t),X.removeEventListener("test",()=>{},t)}catch{}return e}();function ss(e){return/^[\s\xa0]*$/.test(e)}function Oa(){var e=X.navigator;return e&&(e=e.userAgent)?e:""}function nn(e){return Oa().indexOf(e)!=-1}function Nu(e){return Nu[" "](e),e}Nu[" "]=function(){};function q_(e,t){var n=$x;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var W_=nn("Opera"),si=nn("Trident")||nn("MSIE"),sg=nn("Edge"),_c=sg||si,og=nn("Gecko")&&!(Oa().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),G_=Oa().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function ag(){var e=X.document;return e?e.documentMode:void 0}var xc;e:{var Al="",Tl=function(){var e=Oa();if(og)return/rv:([^\);]+)(\)|;)/.exec(e);if(sg)return/Edge\/([\d\.]+)/.exec(e);if(si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(G_)return/WebKit\/(\S+)/.exec(e);if(W_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Tl&&(Al=Tl?Tl[1]:""),si){var Sl=ag();if(Sl!=null&&Sl>parseFloat(Al)){xc=String(Sl);break e}}xc=Al}var Ac;if(X.document&&si){var ed=ag();Ac=ed||parseInt(xc,10)||void 0}else Ac=void 0;var Y_=Ac;function os(e,t){if(pt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(og){e:{try{Nu(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Q_[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&os.$.h.call(this)}}We(os,pt);var Q_={2:"touch",3:"pen",4:"mouse"};os.prototype.h=function(){os.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),X_=0;function J_(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X_,this.fa=this.ia=!1}function Pa(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ru(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Z_(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function lg(e){const t={};for(const n in e)t[n]=e[n];return t}const td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cg(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<td.length;s++)n=td[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Da(e){this.src=e,this.g={},this.h=0}Da.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Sc(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new J_(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Tc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ig(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Pa(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Sc(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),Il={};function ug(e,t,n,r,i){if(r&&r.once)return hg(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ug(e,t[s],n,r,i);return null}return n=$u(n),e&&e[Os]?e.O(t,n,ks(r)?!!r.capture:!!r,i):fg(e,t,n,!1,r,i)}function fg(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ks(i)?!!i.capture:!!i,a=Fu(e);if(a||(e[Mu]=a=new Da(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ex(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)K_||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pg(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ex(){function e(n){return t.call(e.src,e.listener,n)}const t=tx;return e}function hg(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)hg(e,t[s],n,r,i);return null}return n=$u(n),e&&e[Os]?e.P(t,n,ks(r)?!!r.capture:!!r,i):fg(e,t,n,!0,r,i)}function dg(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)dg(e,t[s],n,r,i);else r=ks(r)?!!r.capture:!!r,n=$u(n),e&&e[Os]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Sc(s,n,r,i),-1<n&&(Pa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Fu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Sc(t,n,r,i)),(n=-1<e?t[e]:null)&&Lu(n))}function Lu(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Os])Tc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pg(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fu(t))?(Tc(n,e),n.h==0&&(n.src=null,t[Mu]=null)):Pa(e)}}}function pg(e){return e in Il?Il[e]:Il[e]="on"+e}function tx(e,t){if(e.fa)e=!0;else{t=new os(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Lu(e),e=n.call(r,t)}return e}function Fu(e){return e=e[Mu],e instanceof Da?e:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(e){return typeof e=="function"?e:(e[Cl]||(e[Cl]=function(t){return e.handleEvent(t)}),e[Cl])}function Ke(){Zn.call(this),this.i=new Da(this),this.S=this,this.J=null}We(Ke,Zn);Ke.prototype[Os]=!0;Ke.prototype.removeEventListener=function(e,t,n,r){dg(this,e,t,n,r)};function nt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new pt(t,e);else if(t instanceof pt)t.target=t.target||e;else{var i=t;t=new pt(r,e),cg(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ro(o,r,!0,t)&&i}if(o=t.g=e,i=ro(o,r,!0,t)&&i,i=ro(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ro(o,r,!1,t)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Pa(n[r]);delete e.g[t],e.h--}}this.J=null};Ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ke.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ro(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Tc(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ju=X.JSON.stringify;class nx{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function rx(){var e=Bu;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ix{constructor(){this.h=this.g=null}add(t,n){const r=mg.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var mg=new nx(()=>new sx,e=>e.reset());class sx{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ox(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ax(e){X.setTimeout(()=>{throw e},0)}let as,ls=!1,Bu=new ix,gg=()=>{const e=X.Promise.resolve(void 0);as=()=>{e.then(lx)}};var lx=()=>{for(var e;e=rx();){try{e.h.call(e.g)}catch(n){ax(n)}var t=mg;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ls=!1};function Na(e,t){Ke.call(this),this.h=e||1,this.g=t||X,this.j=dt(this.qb,this),this.l=Date.now()}We(Na,Ke);N=Na.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Uu(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uu(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}N.N=function(){Na.$.N.call(this),Uu(this),delete this.g};function Vu(e,t,n){if(typeof e=="function")n&&(e=dt(e,n));else if(e&&typeof e.handleEvent=="function")e=dt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:X.setTimeout(e,t||0)}function vg(e){e.g=Vu(()=>{e.g=null,e.i&&(e.i=!1,vg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class cx extends Zn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vg(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(e){Zn.call(this),this.h=e,this.g={}}We(cs,Zn);var nd=[];function yg(e,t,n,r){Array.isArray(n)||(n&&(nd[0]=n.toString()),n=nd);for(var i=0;i<n.length;i++){var s=ug(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function wg(e){Ru(e.g,function(t,n){this.g.hasOwnProperty(n)&&Lu(t)},e),e.g={}}cs.prototype.N=function(){cs.$.N.call(this),wg(this)};cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ra(){this.g=!0}Ra.prototype.Ea=function(){this.g=!1};function ux(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function fx(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function zr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+dx(e,n)+(r?" "+r:"")})}function hx(e,t){e.info(function(){return"TIMEOUT: "+t})}Ra.prototype.info=function(){};function dx(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ju(n)}catch{return t}}var Lr={},rd=null;function Ma(){return rd=rd||new Ke}Lr.Ta="serverreachability";function bg(e){pt.call(this,Lr.Ta,e)}We(bg,pt);function us(e){const t=Ma();nt(t,new bg(t))}Lr.STAT_EVENT="statevent";function Eg(e,t){pt.call(this,Lr.STAT_EVENT,e),this.stat=t}We(Eg,pt);function yt(e){const t=Ma();nt(t,new Eg(t,e))}Lr.Ua="timingevent";function _g(e,t){pt.call(this,Lr.Ua,e),this.size=t}We(_g,pt);function Ps(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){e()},t)}var La={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zu(){}zu.prototype.h=null;function id(e){return e.h||(e.h=e.i())}function Ag(){}var Ds={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hu(){pt.call(this,"d")}We(Hu,pt);function Ku(){pt.call(this,"c")}We(Ku,pt);var Ic;function Fa(){}We(Fa,zu);Fa.prototype.g=function(){return new XMLHttpRequest};Fa.prototype.i=function(){return{}};Ic=new Fa;function Ns(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new cs(this),this.P=px,e=_c?125:void 0,this.V=new Na(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Tg}function Tg(){this.i=null,this.g="",this.h=!1}var px=45e3,Cc={},Ho={};N=Ns.prototype;N.setTimeout=function(e){this.P=e};function kc(e,t,n){e.L=1,e.v=ja(_n(t)),e.s=n,e.S=!0,Sg(e,null)}function Sg(e,t){e.G=Date.now(),Rs(e),e.A=_n(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Rg(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Tg,e.g=tv(e.l,n?t:null,!e.s),0<e.O&&(e.M=new cx(dt(e.Pa,e,e.g),e.O)),yg(e.U,e.g,"readystatechange",e.nb),t=e.I?lg(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),us(),ux(e.j,e.u,e.A,e.m,e.W,e.s)}N.nb=function(e){e=e.target;const t=this.M;t&&rn(e)==3?t.l():this.Pa(e)};N.Pa=function(e){try{if(e==this.g)e:{const u=rn(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||_c||this.g&&(this.h.h||this.g.ja()||ld(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?us(3):us(2)),$a(this);var n=this.g.da();this.ca=n;t:if(Ig(this)){var r=ld(this.g);e="";var i=r.length,s=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Vi(this);var o="";break t}this.h.i=new X.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fx(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ss(a)){var c=a;break t}}c=null}if(n=c)zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,n);else{this.i=!1,this.o=3,yt(12),dr(this),Vi(this);break e}}this.S?(Cg(this,u,o),_c&&this.i&&u==3&&(yg(this.U,this.V,"tick",this.mb),this.V.start())):(zr(this.j,this.m,o,null),Oc(this,o)),u==4&&dr(this),this.i&&!this.J&&(u==4?Xg(this.l,this):(this.i=!1,Rs(this)))}else Mx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),dr(this),Vi(this)}}}catch{}finally{}};function Ig(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Cg(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=mx(e,n),i==Ho){t==4&&(e.o=4,yt(14),r=!1),zr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Cc){e.o=4,yt(15),zr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else zr(e.j,e.m,i,null),Oc(e,i);Ig(e)&&i!=Ho&&i!=Cc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xu(t),t.M=!0,yt(11))):(zr(e.j,e.m,n,"[Invalid Chunked Response]"),dr(e),Vi(e))}N.mb=function(){if(this.g){var e=rn(this.g),t=this.g.ja();this.C<t.length&&($a(this),Cg(this,e,t),this.i&&e!=4&&Rs(this))}};function mx(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Ho:(n=Number(t.substring(n,r)),isNaN(n)?Cc:(r+=1,r+n>t.length?Ho:(t=t.slice(r,r+n),e.C=r+n,t)))}N.cancel=function(){this.J=!0,dr(this)};function Rs(e){e.Y=Date.now()+e.P,kg(e,e.P)}function kg(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ps(dt(e.lb,e),t)}function $a(e){e.B&&(X.clearTimeout(e.B),e.B=null)}N.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(hx(this.j,this.A),this.L!=2&&(us(),yt(17)),dr(this),this.o=2,Vi(this)):kg(this,this.Y-e)};function Vi(e){e.l.H==0||e.J||Xg(e.l,e)}function dr(e){$a(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Uu(e.V),wg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Oc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Pc(n.i,e))){if(!e.K&&Pc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Wo(n),Va(n);else break e;Qu(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ps(dt(n.ib,n),6e3));if(1>=Fg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else pr(n,11)}else if((e.K||n.g==e)&&Wo(n),!ss(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qu(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Se(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ev(r,r.J?r.pa:null,r.Y),o.K){$g(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&($a(a),Rs(a)),r.g=o}else Yg(r);0<n.j.length&&za(n)}else c[0]!="stop"&&c[0]!="close"||pr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?pr(n,7):Yu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}us(4)}catch{}}function gx(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ka(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function vx(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ka(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Og(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ka(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=vx(e),r=gx(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yx(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _r(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof _r){this.h=e.h,Ko(this,e.j),this.s=e.s,this.g=e.g,qo(this,e.m),this.l=e.l;var t=e.i,n=new fs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),sd(this,n),this.o=e.o}else e&&(t=String(e).match(Pg))?(this.h=!1,Ko(this,t[1]||"",!0),this.s=Ri(t[2]||""),this.g=Ri(t[3]||"",!0),qo(this,t[4]),this.l=Ri(t[5]||"",!0),sd(this,t[6]||"",!0),this.o=Ri(t[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}_r.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Mi(t,od,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Mi(t,od,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Mi(n,n.charAt(0)=="/"?Ex:bx,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Mi(n,xx)),e.join("")};function _n(e){return new _r(e)}function Ko(e,t,n){e.j=n?Ri(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function sd(e,t,n){t instanceof fs?(e.i=t,Ax(e.i,e.h)):(n||(t=Mi(t,_x)),e.i=new fs(t,e.h))}function Se(e,t,n){e.i.set(t,n)}function ja(e){return Se(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ri(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Mi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,wx),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wx(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var od=/[#\/\?@]/g,bx=/[#\?:]/g,Ex=/[#\?]/g,_x=/[#\?@]/g,xx=/#/g;function fs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function er(e){e.g||(e.g=new Map,e.h=0,e.i&&yx(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=fs.prototype;N.add=function(e,t){er(this),this.i=null,e=yi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Dg(e,t){er(e),t=yi(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ng(e,t){return er(e),t=yi(e,t),e.g.has(t)}N.forEach=function(e,t){er(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};N.ta=function(){er(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};N.Z=function(e){er(this);let t=[];if(typeof e=="string")Ng(this,e)&&(t=t.concat(this.g.get(yi(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};N.set=function(e,t){return er(this),this.i=null,e=yi(this,e),Ng(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Rg(e,t,n){Dg(e,t),0<n.length&&(e.i=null,e.g.set(yi(e,t),Du(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function yi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ax(e,t){t&&!e.j&&(er(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Dg(this,r),Rg(this,i,n))},e)),e.j=t}var Tx=class{constructor(e,t){this.g=e,this.map=t}};function Mg(e){this.l=e||Sx,X.PerformanceNavigationTiming?(e=X.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sx=10;function Lg(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fg(e){return e.h?1:e.g?e.g.size:0}function Pc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function qu(e,t){e.g?e.g.add(t):e.h=t}function $g(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mg.prototype.cancel=function(){if(this.i=jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function jg(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Du(e.i)}var Ix=class{stringify(e){return X.JSON.stringify(e,void 0)}parse(e){return X.JSON.parse(e,void 0)}};function Cx(){this.g=new Ix}function kx(e,t,n){const r=n||"";try{Og(e,function(i,s){let o=i;ks(i)&&(o=ju(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ox(e,t){const n=new Ra;if(X.Image){const r=new Image;r.onload=no(io,n,r,"TestLoadImage: loaded",!0,t),r.onerror=no(io,n,r,"TestLoadImage: error",!1,t),r.onabort=no(io,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=no(io,n,r,"TestLoadImage: timeout",!1,t),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function io(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ms(e){this.l=e.fc||null,this.j=e.ob||!1}We(Ms,zu);Ms.prototype.g=function(){return new Ba(this.l,this.j)};Ms.prototype.i=function(e){return function(){return e}}({});function Ba(e,t){Ke.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Wu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Ba,Ke);var Wu=0;N=Ba.prototype;N.open=function(e,t){if(this.readyState!=Wu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hs(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||X).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=Wu};N.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bg(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Bg(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}N.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ls(this):hs(this),this.readyState==3&&Bg(this)}};N.Za=function(e){this.g&&(this.response=this.responseText=e,Ls(this))};N.Ya=function(e){this.g&&(this.response=e,Ls(this))};N.ka=function(){this.g&&Ls(this)};function Ls(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hs(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function hs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Px=X.JSON.parse;function Ne(e){Ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ug,this.L=this.M=!1}We(Ne,Ke);var Ug="",Dx=/^https?$/i,Nx=["POST","PUT"];N=Ne.prototype;N.Oa=function(e){this.M=e};N.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ic.g(),this.C=this.u?id(this.u):id(Ic),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ad(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&e instanceof X.FormData,!(0<=ig(Nx,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hg(this),0<this.B&&((this.L=Rx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ad(this,s)}};function Rx(e){return si&&typeof e.timeout=="number"&&e.ontimeout!==void 0}N.ua=function(){typeof Pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function ad(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vg(e),Ua(e)}function Vg(e){e.F||(e.F=!0,nt(e,"complete"),nt(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,nt(this,"complete"),nt(this,"abort"),Ua(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ua(this,!0)),Ne.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?zg(this):this.kb())};N.kb=function(){zg(this)};function zg(e){if(e.h&&typeof Pu<"u"&&(!e.C[1]||rn(e)!=4||e.da()!=2)){if(e.v&&rn(e)==4)Vu(e.La,0,e);else if(nt(e,"readystatechange"),rn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Pg)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),r=!Dx.test(i?i.toLowerCase():"")}n=r}if(n)nt(e,"complete"),nt(e,"success");else{e.m=6;try{var s=2<rn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Vg(e)}}finally{Ua(e)}}}}function Ua(e,t){if(e.g){Hg(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||nt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Hg(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(X.clearTimeout(e.A),e.A=null)}N.isActive=function(){return!!this.g};function rn(e){return e.g?e.g.readyState:0}N.da=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Px(t)}};function ld(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ug:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Mx(e){const t={};e=(e.g&&2<=rn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ss(e[r]))continue;var n=ox(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Z_(t,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kg(e){let t="";return Ru(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gu(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kg(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Se(e,t,n))}function ki(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qg(e){this.Ga=0,this.j=[],this.l=new Ra,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ki("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ki("baseRetryDelayMs",5e3,e),this.hb=ki("retryDelaySeedMs",1e4,e),this.eb=ki("forwardChannelMaxRetries",2,e),this.xa=ki("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Mg(e&&e.concurrentRequestLimit),this.Ja=new Cx,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=qg.prototype;N.ra=8;N.H=1;function Yu(e){if(Wg(e),e.H==3){var t=e.W++,n=_n(e.I);if(Se(n,"SID",e.K),Se(n,"RID",t),Se(n,"TYPE","terminate"),Fs(e,n),t=new Ns(e,e.l,t),t.L=2,t.v=ja(_n(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&X.Image&&(new Image().src=t.v,n=!0),n||(t.g=tv(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Rs(t)}Zg(e)}function Va(e){e.g&&(Xu(e),e.g.cancel(),e.g=null)}function Wg(e){Va(e),e.u&&(X.clearTimeout(e.u),e.u=null),Wo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&X.clearTimeout(e.m),e.m=null)}function za(e){if(!Lg(e.i)&&!e.m){e.m=!0;var t=e.Na;as||gg(),ls||(as(),ls=!0),Bu.add(t,e),e.C=0}}function Lx(e,t){return Fg(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ps(dt(e.Na,e,t),Jg(e,e.C)),e.C++,!0)}N.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ns(this,this.l,e);let s=this.s;if(this.U&&(s?(s=lg(s),cg(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Gg(this,i,t),n=_n(this.I),Se(n,"RID",e),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Fs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Kg(s)))+"&"+t:this.o&&Gu(n,this.o,s)),qu(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",t),Se(n,"SID","null"),i.aa=!0,kc(i,n,null)):kc(i,n,t),this.H=2}}else this.H==3&&(e?cd(this,e):this.j.length==0||Lg(this.i)||cd(this))};function cd(e,t){var n;t?n=t.m:n=e.W++;const r=_n(e.I);Se(r,"SID",e.K),Se(r,"RID",n),Se(r,"AID",e.V),Fs(e,r),e.o&&e.s&&Gu(r,e.o,e.s),n=new Ns(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Gg(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),qu(e.i,n),kc(n,r,t)}function Fs(e,t){e.na&&Ru(e.na,function(n,r){Se(t,r,n)}),e.h&&Og({},function(n,r){Se(t,r,n)})}function Gg(e,t,n){n=Math.min(e.j.length,n);var r=e.h?dt(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{kx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Yg(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;as||gg(),ls||(as(),ls=!0),Bu.add(t,e),e.A=0}}function Qu(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ps(dt(e.Ma,e),Jg(e,e.A)),e.A++,!0)}N.Ma=function(){if(this.u=null,Qg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ps(dt(this.jb,this),e)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),Va(this),Qg(this))};function Xu(e){e.B!=null&&(X.clearTimeout(e.B),e.B=null)}function Qg(e){e.g=new Ns(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=_n(e.wa);Se(t,"RID","rpc"),Se(t,"SID",e.K),Se(t,"AID",e.V),Se(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Se(t,"TO",e.qa),Se(t,"TYPE","xmlhttp"),Fs(e,t),e.o&&e.s&&Gu(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ja(_n(t)),n.s=null,n.S=!0,Sg(n,e)}N.ib=function(){this.v!=null&&(this.v=null,Va(this),Qu(this),yt(19))};function Wo(e){e.v!=null&&(X.clearTimeout(e.v),e.v=null)}function Xg(e,t){var n=null;if(e.g==t){Wo(e),Xu(e),e.g=null;var r=2}else if(Pc(e.i,t))n=t.F,$g(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ma(),nt(r,new _g(r,n)),za(e)}else Yg(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Lx(e,t)||r==2&&Qu(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:pr(e,5);break;case 4:pr(e,10);break;case 3:pr(e,6);break;default:pr(e,2)}}}function Jg(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function pr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=dt(e.pb,e);n||(n=new _r("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Ko(n,"https"),ja(n)),Ox(n.toString(),r)}else yt(2);e.H=0,e.h&&e.h.za(t),Zg(e),Wg(e)}N.pb=function(e){e?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function Zg(e){if(e.H=0,e.ma=[],e.h){const t=jg(e.i);(t.length!=0||e.j.length!=0)&&(Zh(e.ma,t),Zh(e.ma,e.j),e.i.i.length=0,Du(e.j),e.j.length=0),e.h.ya()}}function ev(e,t,n){var r=n instanceof _r?_n(n):new _r(n);if(r.g!="")t&&(r.g=t+"."+r.g),qo(r,r.m);else{var i=X.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new _r(null);r&&Ko(s,r),t&&(s.g=t),i&&qo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Se(r,n,t),Se(r,"VER",e.ra),Fs(e,r),r}function tv(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Ne(new Ms({ob:!0})):new Ne(e.va),t.Oa(e.J),t}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function nv(){}N=nv.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Go(){if(si&&!(10<=Number(Y_)))throw Error("Environmental error: no available transport.")}Go.prototype.g=function(e,t){return new Ot(e,t)};function Ot(e,t){Ke.call(this),this.g=new qg(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ss(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ss(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new wi(this)}We(Ot,Ke);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ev(e,null,e.Y),za(e)};Ot.prototype.close=function(){Yu(this.g)};Ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ju(e),e=n);t.j.push(new Tx(t.fb++,e)),t.H==3&&za(t)};Ot.prototype.N=function(){this.g.h=null,delete this.j,Yu(this.g),delete this.g,Ot.$.N.call(this)};function rv(e){Hu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}We(rv,Hu);function iv(){Ku.call(this),this.status=1}We(iv,Ku);function wi(e){this.g=e}We(wi,nv);wi.prototype.Ba=function(){nt(this.g,"a")};wi.prototype.Aa=function(e){nt(this.g,new rv(e))};wi.prototype.za=function(e){nt(this.g,new iv)};wi.prototype.ya=function(){nt(this.g,"b")};function Fx(){this.blockSize=-1}function un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(un,Fx);un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function kl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}un.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)kl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){kl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){kl(this,r),i=0;break}}this.h=i,this.i+=t};un.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ye(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var $x={};function Ju(e){return-128<=e&&128>e?q_(e,function(t){return new ye([t|0],0>t?-1:0)}):new ye([e|0],0>e?-1:0)}function sn(e){if(isNaN(e)||!isFinite(e))return Qr;if(0>e)return et(sn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Dc;return new ye(t,0)}function sv(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return et(sv(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sn(Math.pow(t,8)),r=Qr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=sn(Math.pow(t,s)),r=r.R(s).add(sn(o))):(r=r.R(n),r=r.add(sn(o)))}return r}var Dc=4294967296,Qr=Ju(0),Nc=Ju(1),ud=Ju(16777216);N=ye.prototype;N.ea=function(){if(Rt(this))return-et(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Dc+r)*t,t*=Dc}return e};N.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(gn(this))return"0";if(Rt(this))return"-"+et(this).toString(e);for(var t=sn(Math.pow(e,6)),n=this,r="";;){var i=Qo(n,t).g;n=Yo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,gn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function gn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Rt(e){return e.h==-1}N.X=function(e){return e=Yo(this,e),Rt(e)?-1:gn(e)?0:1};function et(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ye(n,~e.h).add(Nc)}N.abs=function(){return Rt(this)?et(this):this};N.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Yo(e,t){return e.add(et(t))}N.R=function(e){if(gn(this)||gn(e))return Qr;if(Rt(this))return Rt(e)?et(this).R(et(e)):et(et(this).R(e));if(Rt(e))return et(this.R(et(e)));if(0>this.X(ud)&&0>e.X(ud))return sn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,so(n,2*r+2*i),n[2*r+2*i+1]+=s*l,so(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,so(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,so(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ye(n,0)};function so(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Oi(e,t){this.g=e,this.h=t}function Qo(e,t){if(gn(t))throw Error("division by zero");if(gn(e))return new Oi(Qr,Qr);if(Rt(e))return t=Qo(et(e),t),new Oi(et(t.g),et(t.h));if(Rt(t))return t=Qo(e,et(t)),new Oi(et(t.g),t.h);if(30<e.g.length){if(Rt(e)||Rt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Nc,r=t;0>=r.X(e);)n=fd(n),r=fd(r);var i=Br(n,1),s=Br(r,1);for(r=Br(r,2),n=Br(n,2);!gn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Br(r,1),n=Br(n,1)}return t=Yo(e,i.R(t)),new Oi(i,t)}for(i=Qr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=sn(n),o=s.R(t);Rt(o)||0<o.X(e);)n-=r,s=sn(n),o=s.R(t);gn(s)&&(s=Nc),i=i.add(s),e=Yo(e,o)}return new Oi(i,e)}N.gb=function(e){return Qo(this,e).h};N.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ye(n,this.h&e.h)};N.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ye(n,this.h|e.h)};N.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ye(n,this.h^e.h)};function fd(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ye(n,e.h)}function Br(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ye(i,e.h)}Go.prototype.createWebChannel=Go.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;La.NO_ERROR=0;La.TIMEOUT=8;La.HTTP_ERROR=6;xg.COMPLETE="complete";Ag.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;un.prototype.digest=un.prototype.l;un.prototype.reset=un.prototype.reset;un.prototype.update=un.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=sn;ye.fromString=sv;var jx=function(){return new Go},Bx=function(){return Ma()},Ol=La,Ux=xg,Vx=Lr,hd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zx=Ms,oo=Ag,Hx=Ne,Kx=ye;const dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Cu("@firebase/firestore");function pd(){return kr.logLevel}function H(e,...t){if(kr.logLevel<=ge.DEBUG){const n=t.map(Zu);kr.debug(`Firestore (${bi}): ${e}`,...n)}}function Or(e,...t){if(kr.logLevel<=ge.ERROR){const n=t.map(Zu);kr.error(`Firestore (${bi}): ${e}`,...n)}}function Xo(e,...t){if(kr.logLevel<=ge.WARN){const n=t.map(Zu);kr.warn(`Firestore (${bi}): ${e}`,...n)}}function Zu(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e="Unexpected state"){const t=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+e;throw Or(t),new Error(t)}function qe(e,t){e||le()}function Ce(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Wx{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gx{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new ov(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return qe(t===null||typeof t=="string"),new st(t)}}class Yx{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qx{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Yx(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xx{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jx{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qe(typeof n.token=="string"),this.T=n.token,new Xx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Zx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function _e(e,t){return e<t?-1:e>t?1:0}function oi(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new G(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new G(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ze.fromMillis(Date.now())}static fromDate(t){return ze.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_e(this.nanoseconds,t.nanoseconds):_e(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ke(t)}static min(){return new ke(new ze(0,0))}static max(){return new ke(new ze(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,r){n===void 0?n=0:n>t.length&&le(),r===void 0?r=t.length-n:r>t.length-n&&le(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ds.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ds?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class De extends ds{construct(t,n,r){return new De(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new G(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const eA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends ds{construct(t,n,r){return new ut(t,n,r)}static isValidIdentifier(t){return eA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(I.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new G(I.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(I.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.path=t}static fromPath(t){return new te(De.fromString(t))}static fromName(t){return new te(De.fromString(t).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&De.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return De.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new te(new De(t.slice()))}}function tA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ke.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new qn(i,te.empty(),t)}function nA(e){return new qn(e.readTime,e.key,-1)}class qn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(ke.min(),te.empty(),-1)}static max(){return new qn(ke.max(),te.empty(),-1)}}function rA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=te.comparator(e.documentKey,t.documentKey),n!==0?n:_e(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==iA)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):C.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):C.reject(n)}static resolve(t){return new C((n,r)=>{n(t)})}static reject(t){return new C((n,r)=>{r(t)})}static waitFor(t){return new C((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=C.resolve(!1);for(const r of t)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new C((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new C((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Ha(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}cv.ct=-1;function ef(e){return e==null}function Jo(e){return e===0&&1/e==-1/0}function oA(e){return typeof e=="number"&&Number.isInteger(e)&&!Jo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $s(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function uv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,n){this.comparator=t,this.root=n||Xe.EMPTY}insert(t,n){return new Tt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ao(this.root,t,this.comparator,!0)}}class ao{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Xe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const t=this.left.check();if(t!==this.right.check())throw le();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(t){return new gd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof bt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new bt(this.comparator);return n.data=t,n}}class gd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Kt([])}unionWith(t){let n=new bt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Kt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return oi(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new aA("Invalid base64 string: "+i):i}}(t);return new xn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new xn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _e(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xn.EMPTY_BYTE_STRING=new xn("");const lA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(e){if(qe(!!e),typeof e=="string"){let t=0;const n=lA.exec(e);if(qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Je(e.seconds),nanos:Je(e.nanos)}}function Je(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ps(e){return typeof e=="string"?xn.fromBase64String(e):xn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fv(e){const t=e.mapValue.fields.__previous_value__;return tf(t)?fv(t):t}function Zo(e){const t=Pr(e.mapValue.fields.__local_write_time__.timestampValue);return new ze(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ea{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ea&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ai(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?tf(e)?4:uA(e)?9007199254740991:10:le()}function fn(e,t){if(e===t)return!0;const n=ai(e);if(n!==ai(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Zo(e).isEqual(Zo(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pr(r.timestampValue),o=Pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return ps(r.bytesValue).isEqual(ps(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Je(r.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(r.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Je(r.integerValue)===Je(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Je(r.doubleValue),o=Je(i.doubleValue);return s===o?Jo(s)===Jo(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return oi(e.arrayValue.values||[],t.arrayValue.values||[],fn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(md(s)!==md(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!fn(s[a],o[a])))return!1;return!0}(e,t);default:return le()}}function ms(e,t){return(e.values||[]).find(n=>fn(n,t))!==void 0}function li(e,t){if(e===t)return 0;const n=ai(e),r=ai(t);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Je(i.integerValue||i.doubleValue),a=Je(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return vd(e.timestampValue,t.timestampValue);case 4:return vd(Zo(e),Zo(t));case 5:return _e(e.stringValue,t.stringValue);case 6:return function(i,s){const o=ps(i),a=ps(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_e(o[l],a[l]);if(c!==0)return c}return _e(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=_e(Je(i.latitude),Je(s.latitude));return o!==0?o:_e(Je(i.longitude),Je(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=li(o[l],a[l]);if(c)return c}return _e(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===lo.mapValue&&s===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(s===lo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=_e(a[u],c[u]);if(f!==0)return f;const h=li(o[a[u]],l[c[u]]);if(h!==0)return h}return _e(a.length,c.length)}(e.mapValue,t.mapValue);default:throw le()}}function vd(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _e(e,t);const n=Pr(e),r=Pr(t),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function ci(e){return Rc(e)}function Rc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Pr(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ps(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,te.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rc(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rc(r.fields[a])}`;return s+"}"}(e.mapValue):le();var t,n}function Mc(e){return!!e&&"integerValue"in e}function nf(e){return!!e&&"arrayValue"in e}function Io(e){return!!e&&"mapValue"in e}function zi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $s(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=zi(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=zi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function uA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.value=t}static empty(){return new zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=zi(n)}setAll(t){let n=ut.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return fn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Io(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){$s(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new zt(zi(this.value))}}function hv(e){const t=[];return $s(e.fields,(n,r)=>{const i=new ut([n]);if(Io(r)){const s=hv(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Kt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ut(t,0,ke.min(),ke.min(),ke.min(),zt.empty(),0)}static newFoundDocument(t,n,r,i){return new Ut(t,1,n,ke.min(),r,i,0)}static newNoDocument(t,n){return new Ut(t,2,n,ke.min(),ke.min(),zt.empty(),0)}static newUnknownDocument(t,n){return new Ut(t,3,n,ke.min(),ke.min(),zt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,n){this.position=t,this.inclusive=n}}function yd(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n="asc"){this.field=t,this.dir=n}}function fA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{}class Ve extends dv{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new dA(t,n,r):n==="array-contains"?new gA(t,r):n==="in"?new vA(t,r):n==="not-in"?new yA(t,r):n==="array-contains-any"?new wA(t,r):new Ve(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new pA(t,r):new mA(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wn extends dv{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new Wn(t,n)}matches(t){return pv(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function pv(e){return e.op==="and"}function mv(e){return hA(e)&&pv(e)}function hA(e){for(const t of e.filters)if(t instanceof Wn)return!1;return!0}function Lc(e){if(e instanceof Ve)return e.field.canonicalString()+e.op.toString()+ci(e.value);if(mv(e))return e.filters.map(t=>Lc(t)).join(",");{const t=e.filters.map(n=>Lc(n)).join(",");return`${e.op}(${t})`}}function gv(e,t){return e instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.field.isEqual(r.field)&&fn(n.value,r.value)}(e,t):e instanceof Wn?function(n,r){return r instanceof Wn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&gv(s,r.filters[o]),!0):!1}(e,t):void le()}function vv(e){return e instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${ci(t.value)}`}(e):e instanceof Wn?function(t){return t.op.toString()+" {"+t.getFilters().map(vv).join(" ,")+"}"}(e):"Filter"}class dA extends Ve{constructor(t,n,r){super(t,n,r),this.key=te.fromName(r.referenceValue)}matches(t){const n=te.comparator(t.key,this.key);return this.matchesComparison(n)}}class pA extends Ve{constructor(t,n){super(t,"in",n),this.keys=yv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class mA extends Ve{constructor(t,n){super(t,"not-in",n),this.keys=yv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function yv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class gA extends Ve{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return nf(n)&&ms(n.arrayValue,this.value)}}class vA extends Ve{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class yA extends Ve{constructor(t,n){super(t,"not-in",n)}matches(t){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class wA extends Ve{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ms(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function bd(e,t=null,n=[],r=[],i=null,s=null,o=null){return new bA(e,t,n,r,i,s,o)}function rf(e){const t=Ce(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Lc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ef(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ci(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ci(r)).join(",")),t.dt=n}return t.dt}function sf(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!gv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wd(e.startAt,t.startAt)&&wd(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function EA(e,t,n,r,i,s,o,a){return new Ka(e,t,n,r,i,s,o,a)}function _A(e){return new Ka(e)}function Ed(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function xA(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function AA(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function TA(e){return e.collectionGroup!==null}function Xr(e){const t=Ce(e);if(t.wt===null){t.wt=[];const n=AA(t),r=xA(t);if(n!==null&&r===null)n.isKeyField()||t.wt.push(new Hi(n)),t.wt.push(new Hi(ut.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Hi(ut.keyField(),s))}}}return t.wt}function ui(e){const t=Ce(e);if(!t._t)if(t.limitType==="F")t._t=bd(t.path,t.collectionGroup,Xr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Xr(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Hi(s.field,o))}const r=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;t._t=bd(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Fc(e,t,n){return new Ka(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wv(e,t){return sf(ui(e),ui(t))&&e.limitType===t.limitType}function bv(e){return`${rf(ui(e))}|lt:${e.limitType}`}function _d(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>vv(r)).join(", ")}]`),ef(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ci(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ci(r)).join(",")),`Target(${n})`}(ui(e))}; limitType=${e.limitType})`}function of(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of Xr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=yd(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Xr(n),r)||n.endAt&&!function(i,s,o){const a=yd(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Xr(n),r))}(e,t)}function SA(e){return(t,n)=>{let r=!1;for(const i of Xr(e)){const s=IA(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IA(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?li(a,l):le()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$s(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return uv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Tt(te.comparator);function na(){return CA}const Ev=new Tt(te.comparator);function co(...e){let t=Ev;for(const n of e)t=t.insert(n.key,n);return t}function _v(e){let t=Ev;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function mr(){return Ki()}function xv(){return Ki()}function Ki(){return new Ei(e=>e.toString(),(e,t)=>e.isEqual(t))}const kA=new Tt(te.comparator),OA=new bt(te.comparator);function lt(...e){let t=OA;for(const n of e)t=t.add(n);return t}const PA=new bt(_e);function DA(){return PA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(t)?"-0":t}}function Tv(e){return{integerValue:""+e}}function NA(e,t){return oA(t)?Tv(t):Av(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function RA(e,t,n){return e instanceof gs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&tf(i)&&(i=fv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof vs?Iv(e,t):e instanceof ys?Cv(e,t):function(r,i){const s=Sv(r,i),o=xd(s)+xd(r.gt);return Mc(s)&&Mc(r.gt)?Tv(o):Av(r.serializer,o)}(e,t)}function MA(e,t,n){return e instanceof vs?Iv(e,t):e instanceof ys?Cv(e,t):n}function Sv(e,t){return e instanceof ra?Mc(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class gs extends qa{}class vs extends qa{constructor(t){super(),this.elements=t}}function Iv(e,t){const n=kv(t);for(const r of e.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ys extends qa{constructor(t){super(),this.elements=t}}function Cv(e,t){let n=kv(t);for(const r of e.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class ra extends qa{constructor(t,n){super(),this.serializer=t,this.gt=n}}function xd(e){return Je(e.integerValue||e.doubleValue)}function kv(e){return nf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(t,n){this.field=t,this.transform=n}}function FA(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof vs&&r instanceof vs||n instanceof ys&&r instanceof ys?oi(n.elements,r.elements,fn):n instanceof ra&&r instanceof ra?fn(n.gt,r.gt):n instanceof gs&&r instanceof gs}(e.transform,t.transform)}class $A{constructor(t,n){this.version=t,this.transformResults=n}}class vn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new vn}static exists(t){return new vn(void 0,t)}static updateTime(t){return new vn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Co(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wa{}function Ov(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Dv(e.key,vn.none()):new js(e.key,e.data,vn.none());{const n=e.data,r=zt.empty();let i=new bt(ut.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(e.key,r,new Kt(i.toArray()),vn.none())}}function jA(e,t,n){e instanceof js?function(r,i,s){const o=r.value.clone(),a=Td(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Fr?function(r,i,s){if(!Co(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Td(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Pv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function qi(e,t,n,r){return e instanceof js?function(i,s,o,a){if(!Co(i.precondition,s))return o;const l=i.value.clone(),c=Sd(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fr?function(i,s,o,a){if(!Co(i.precondition,s))return o;const l=Sd(i.fieldTransforms,a,s),c=s.data;return c.setAll(Pv(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(e,t,n,r):function(i,s,o){return Co(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function BA(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Sv(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function Ad(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&oi(n,r,(i,s)=>FA(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class js extends Wa{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends Wa{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pv(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Td(e,t,n){const r=new Map;qe(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,MA(o,a,n[i]))}return r}function Sd(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RA(s,o,t))}return r}class Dv extends Wa{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UA extends Wa{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&jA(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=qi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=qi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xv();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ov(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ke.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),lt())}isEqual(t){return this.batchId===t.batchId&&oi(this.mutations,t.mutations,(n,r)=>Ad(n,r))&&oi(this.baseMutations,t.baseMutations,(n,r)=>Ad(n,r))}}class af{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){qe(t.mutations.length===r.length);let i=kA;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new af(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ue;function HA(e){switch(e){default:return le();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function KA(e){if(e===void 0)return Or("GRPC error has no .code"),I.UNKNOWN;switch(e){case Le.OK:return I.OK;case Le.CANCELLED:return I.CANCELLED;case Le.UNKNOWN:return I.UNKNOWN;case Le.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Le.INTERNAL:return I.INTERNAL;case Le.UNAVAILABLE:return I.UNAVAILABLE;case Le.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Le.NOT_FOUND:return I.NOT_FOUND;case Le.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Le.ABORTED:return I.ABORTED;case Le.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Le.DATA_LOSS:return I.DATA_LOSS;default:return le()}}(ue=Le||(Le={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Kx([4294967295,4294967295],0);class qA{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function $c(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function WA(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function GA(e,t){return $c(e,t.toTimestamp())}function Jr(e){return qe(!!e),ke.fromTimestamp(function(t){const n=Pr(t);return new ze(n.seconds,n.nanos)}(e))}function Nv(e,t){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function YA(e){const t=De.fromString(e);return qe(r4(t)),t}function jc(e,t){return Nv(e.databaseId,t.path)}function QA(e){const t=YA(e);return t.length===4?De.emptyPath():JA(t)}function XA(e){return new De(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function JA(e){return qe(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Id(e,t,n){return{name:jc(e,t),fields:n.value.mapValue.fields}}function ZA(e,t){let n;if(t instanceof js)n={update:Id(e,t.key,t.value)};else if(t instanceof Dv)n={delete:jc(e,t.key)};else if(t instanceof Fr)n={update:Id(e,t.key,t.data),updateMask:n4(t.fieldMask)};else{if(!(t instanceof UA))return le();n={verify:jc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof gs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ys)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ra)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw le()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:GA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(e,t.precondition)),n}function e4(e,t){return e&&e.length>0?(qe(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?Jr(r.updateTime):Jr(i);return s.isEqual(ke.min())&&(s=Jr(i)),new $A(s,r.transformResults||[])}(n,t))):[]}function t4(e){let t=QA(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){qe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(u){const f=Rv(u);return f instanceof Wn&&mv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Hi(Vr(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,ef(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(u){const f=!!u.before,h=u.values||[];return new ta(h,f)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const f=!u.before,h=u.values||[];return new ta(h,f)}(n.endAt)),EA(t,i,o,s,a,"F",l,c)}function Rv(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Vr(t.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Vr(t.unaryFilter.field);return Ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Vr(t.unaryFilter.field);return Ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(e):e.fieldFilter!==void 0?function(t){return Ve.create(Vr(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Wn.create(t.compositeFilter.filters.map(n=>Rv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return le()}}(t.compositeFilter.op))}(e):le()}function Vr(e){return ut.fromServerFormat(e.fieldPath)}function n4(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function r4(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(t){this.fe=t}}function s4(e){const t=t4({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.rn=new a4}addToCollectionParentIndex(t,n){return this.rn.add(n),C.resolve()}getCollectionParents(t,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return C.resolve()}deleteFieldIndex(t,n){return C.resolve()}getDocumentsMatchingTarget(t,n){return C.resolve(null)}getIndexType(t,n){return C.resolve(0)}getFieldIndexes(t,n){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,n){return C.resolve(qn.min())}getMinOffsetFromCollectionGroup(t,n){return C.resolve(qn.min())}updateCollectionGroup(t,n,r){return C.resolve()}updateIndexEntries(t,n){return C.resolve()}}class a4{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new bt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new bt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new fi(0)}static Mn(){return new fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(){this.changes=new Ei(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ut.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&qi(r.mutation,i,Kt.empty(),ze.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,lt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=lt()){const i=mr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=co();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=mr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,lt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=na();const o=Ki(),a=Ki();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Fr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),qi(u.mutation,c,u.mutation.getFieldMask(),ze.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new c4(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ki();let i=new Tt((o,a)=>o-a),s=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Kt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(i.get(a.batchId)||lt()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=xv();u.forEach(h=>{if(!s.has(h)){const p=Ov(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):TA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):C.resolve(mr());let a=-1,l=s;return o.next(c=>C.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?C.resolve():this.remoteDocumentCache.getEntry(t,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,lt())).next(u=>({batchId:a,changes:_v(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new te(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=co();return this.indexManager.getCollectionParents(t,i).next(o=>C.forEach(o,a=>{const l=function(c,u){return new Ka(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Ut.newInvalidDocument(c)))});let o=co();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&qi(c.mutation,l,Kt.empty(),ze.now()),of(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Jr(r.createTime)}),C.resolve()}getNamedQuery(t,n){return C.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(r){return{name:r.name,query:s4(r.bundledQuery),readTime:Jr(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(){this.overlays=new Tt(te.comparator),this.ls=new Map}getOverlay(t,n){return C.resolve(this.overlays.get(n))}getOverlays(t,n){const r=mr();return C.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.we(t,n,s)}),C.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),C.resolve()}getOverlaysForCollection(t,n,r){const i=mr(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Tt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=mr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=mr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return C.resolve(a)}we(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zA(n,r));let s=this.ls.get(n);s===void 0&&(s=lt(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.fs=new bt(Ue.ds),this.ws=new bt(Ue._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const r=new Ue(t,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.ys(new Ue(t,n))}ps(t,n){t.forEach(r=>this.removeReference(r,n))}Is(t){const n=new te(new De([])),r=new Ue(n,t),i=new Ue(n,t+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new te(new De([])),r=new Ue(n,t),i=new Ue(n,t+1);let s=lt();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ue(t,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ue{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return te.comparator(t.key,n.key)||_e(t.As,n.As)}static _s(t,n){return _e(t.As,n.As)||te.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new bt(Ue.ds)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(t,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new bt(_e);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),C.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new te(s),0);let a=new bt(_e);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){qe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Cn(t){}containsKey(t,n){const r=new Ue(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(t){this.Ds=t,this.docs=new Tt(te.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(t,n){let r=na();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=na();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rA(nA(u),r)<=0||(i.has(u.key)||of(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(t,n,r,i){le()}Cs(t,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new m4(this)}getSize(t){return C.resolve(this.size)}}class m4 extends l4{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(r)}),C.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(t){this.persistence=t,this.xs=new Ei(n=>rf(n),sf),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.Ns=0,this.ks=new lf,this.targetCount=0,this.Ms=fi.kn()}forEachTarget(t,n){return this.xs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new fi(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(t,n){return this.Fn(n),C.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,n){const r=this.xs.get(n)||null;return C.resolve(r)}addMatchingKeys(t,n,r){return this.ks.gs(n,r),C.resolve()}removeMatchingKeys(t,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(t,n){const r=this.ks.Es(n);return C.resolve(r)}containsKey(t,n){return C.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(t,n){this.$s={},this.overlays={},this.Os=new cv(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new g4(this),this.indexManager=new o4,this.remoteDocumentCache=function(r){return new p4(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new i4(n),this.qs=new f4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new h4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.$s[t.toKey()];return r||(r=new d4(n,this.referenceDelegate),this.$s[t.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,r){H("MemoryPersistence","Starting transaction:",t);const i=new y4(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(t,n){return C.or(Object.values(this.$s).map(r=>()=>r.containsKey(t,n)))}}class y4 extends sA{constructor(t){super(),this.currentSequenceNumber=t}}class cf{constructor(t){this.persistence=t,this.Qs=new lf,this.js=null}static zs(t){return new cf(t)}get Ws(){if(this.js)return this.js;throw le()}addReference(t,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),C.resolve()}removeReference(t,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,r=>{const i=te.fromPath(r);return this.Hs(t,i).next(s=>{s||n.removeEntry(i,ke.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(t,n){let r=lt(),i=lt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uf(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ki(t,n).next(s=>s||this.Gi(t,n,i,r)).next(s=>s||this.Qi(t,n))}Ki(t,n){if(Ed(n))return C.resolve(null);let r=ui(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fc(n,null,"F"),r=ui(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=lt(...s);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(t,Fc(n,null,"F")):this.Wi(t,c,n,l)}))})))}Gi(t,n,r,i){return Ed(n)||i.isEqual(ke.min())?this.Qi(t,n):this.Ui.getDocuments(t,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(t,n):(pd()<=ge.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_d(n)),this.Wi(t,o,n,tA(i,-1)))})}ji(t,n){let r=new bt(SA(t));return n.forEach((i,s)=>{of(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(t,n){return pd()<=ge.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",_d(n)),this.Ui.getDocumentsMatchingQuery(t,n,qn.min())}Wi(t,n,r,i){return this.Ui.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new Tt(_e),this.Yi=new Ei(s=>rf(s),sf),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(r)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new u4(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function E4(e,t,n,r){return new b4(e,t,n,r)}async function Mv(e,t){const n=Ce(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=lt();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function _4(e,t){const n=Ce(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,f=u.keys();let h=C.resolve();return f.forEach(p=>{h=h.next(()=>c.getEntry(a,p)).next(v=>{const y=l.docVersions.get(p);qe(y!==null),v.version.compareTo(y)<0&&(u.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),c.addEntry(v)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=lt();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function x4(e){const t=Ce(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function A4(e,t){const n=Ce(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Cd{constructor(){this.activeTargetIds=DA()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class T4{constructor(){this.Hr=new Cd,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,r){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Cd,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo=null;function Pl(){return uo===null?uo=268435456+Math.round(2147483648*Math.random()):uo++,"0x"+uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class k4 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,r,i,s){const o=Pl(),a=this.To(t,n);H("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(t,a,l,r).then(c=>(H("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Xo("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}vo(t,n,r,i,s,o){return this.Io(t,n,r,i,s)}Eo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+bi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}To(t,n){const r=I4[t];return`${this.mo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,r,i){const s=Pl();return new Promise((o,a)=>{const l=new Hx;l.setWithCredentials(!0),l.listenOnce(Ux.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ol.NO_ERROR:const u=l.getResponseJson();H(it,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ol.TIMEOUT:H(it,`RPC '${t}' ${s} timed out`),a(new G(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const f=l.getStatus();if(H(it,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const v=function(y){const A=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(p.status);a(new G(v,p.message))}else a(new G(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(I.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{H(it,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);H(it,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=Pl(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=jx(),a=Bx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new zx({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");H(it,`Creating RPC '${t}' stream ${i}: ${u}`,l);const f=o.createWebChannel(u,l);let h=!1,p=!1;const v=new C4({ro:A=>{p?H(it,`Not sending because RPC '${t}' stream ${i} is closed:`,A):(h||(H(it,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),H(it,`RPC '${t}' stream ${i} sending:`,A),f.send(A))},oo:()=>f.close()}),y=(A,w,b)=>{A.listen(w,R=>{try{b(R)}catch(k){setTimeout(()=>{throw k},0)}})};return y(f,oo.EventType.OPEN,()=>{p||H(it,`RPC '${t}' stream ${i} transport opened.`)}),y(f,oo.EventType.CLOSE,()=>{p||(p=!0,H(it,`RPC '${t}' stream ${i} transport closed`),v.wo())}),y(f,oo.EventType.ERROR,A=>{p||(p=!0,Xo(it,`RPC '${t}' stream ${i} transport errored:`,A),v.wo(new G(I.UNAVAILABLE,"The operation could not be completed")))}),y(f,oo.EventType.MESSAGE,A=>{var w;if(!p){const b=A.data[0];qe(!!b);const R=b,k=R.error||((w=R[0])===null||w===void 0?void 0:w.error);if(k){H(it,`RPC '${t}' stream ${i} received error:`,k);const W=k.status;let Z=function(he){const ce=Le[he];if(ce!==void 0)return KA(ce)}(W),ne=k.message;Z===void 0&&(Z=I.INTERNAL,ne="Unknown error status: "+W+" with message "+k.message),p=!0,v.wo(new G(Z,ne)),f.close()}else H(it,`RPC '${t}' stream ${i} received:`,b),v._o(b)}}),y(a,Vx.STAT_EVENT,A=>{A.stat===hd.PROXY?H(it,`RPC '${t}' stream ${i} detected buffering proxy`):A.stat===hd.NOPROXY&&H(it,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function Dl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e){return new qA(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(t,n,r,i,s,o,a,l){this.ii=t,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Lv(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{t(()=>{const i=new G(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(t,n){const r=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return H("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P4 extends O4{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(qe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=e4(t.writeResults,t.commitTime),r=Jr(t.commitTime);return this.listener.cu(r,n)}return qe(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=XA(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>ZA(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new G(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(I.UNKNOWN,i.toString())})}vo(t,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class N4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Or(n),this.mu=!1):H("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Us(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ce(a);l.vu.add(4),await Bs(l),l.bu.set("Unknown"),l.vu.delete(4),await Ya(l)}(this))})}),this.bu=new N4(r,i)}}async function Ya(e){if(Us(e))for(const t of e.Ru)await t(!0)}async function Bs(e){for(const t of e.Ru)await t(!1)}function Us(e){return Ce(e).vu.size===0}async function Fv(e,t,n){if(!Ha(t))throw t;e.vu.add(1),await Bs(e),e.bu.set("Offline"),n||(n=()=>x4(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Ya(e)})}function $v(e,t){return t().catch(n=>Fv(e,n,t))}async function Qa(e){const t=Ce(e),n=Gn(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;M4(t);)try{const i=await A4(t.localStore,r);if(i===null){t.Eu.length===0&&n.jo();break}r=i.batchId,L4(t,i)}catch(i){await Fv(t,i)}jv(t)&&Bv(t)}function M4(e){return Us(e)&&e.Eu.length<10}function L4(e,t){e.Eu.push(t);const n=Gn(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function jv(e){return Us(e)&&!Gn(e).Uo()&&e.Eu.length>0}function Bv(e){Gn(e).start()}async function F4(e){Gn(e).hu()}async function $4(e){const t=Gn(e);for(const n of e.Eu)t.uu(n.mutations)}async function j4(e,t,n){const r=e.Eu.shift(),i=af.from(r,t,n);await $v(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Qa(e)}async function B4(e,t){t&&Gn(e).ou&&await async function(n,r){if(i=r.code,HA(i)&&i!==I.ABORTED){const s=n.Eu.shift();Gn(n).Qo(),await $v(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qa(n)}var i}(e,t),jv(e)&&Bv(e)}async function Od(e,t){const n=Ce(e);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Us(n);n.vu.add(3),await Bs(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Ya(n)}async function U4(e,t){const n=Ce(e);t?(n.vu.delete(2),await Ya(n)):t||(n.vu.add(2),await Bs(n),n.bu.set("Unknown"))}function Gn(e){return e.Du||(e.Du=function(t,n,r){const i=Ce(t);return i.fu(),new P4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{uo:F4.bind(null,e),ao:B4.bind(null,e),au:$4.bind(null,e),cu:j4.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await Qa(e)):(await e.Du.stop(),e.Eu.length>0&&(H("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ff(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(I.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uv(e,t){if(Or("AsyncQueue",`${t}: ${e}`),Ha(e))return new G(I.UNAVAILABLE,`${t}: ${e}`);throw e}class V4{constructor(){this.queries=new Ei(t=>bv(t),wv),this.onlineState="Unknown",this.ku=new Set}}function z4(e){e.ku.forEach(t=>{t.next()})}class H4{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ei(a=>bv(a),wv),this._c=new Map,this.mc=new Set,this.gc=new Tt(te.comparator),this.yc=new Map,this.Ic=new lf,this.Tc={},this.Ec=new Map,this.Ac=fi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function K4(e,t,n){const r=Y4(e);try{const i=await function(s,o){const a=Ce(s),l=ze.now(),c=o.reduce((h,p)=>h.add(p.key),lt());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=na(),v=lt();return a.Zi.getEntries(h,c).next(y=>{p=y,p.forEach((A,w)=>{w.isValidDocument()||(v=v.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(y=>{u=y;const A=[];for(const w of o){const b=BA(w,u.get(w.key).overlayedDocument);b!=null&&A.push(new Fr(w.key,b,hv(b.value.mapValue),vn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,A,o)}).next(y=>{f=y;const A=y.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(h,y.batchId,A)})}).then(()=>({batchId:f.batchId,changes:_v(u)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Tt(_e)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Xa(r,i.changes),await Qa(r.remoteStore)}catch(i){const s=Uv(i,"Failed to persist write");n.reject(s)}}function Pd(e,t,n){const r=Ce(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Ce(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.Mu(o)&&(l=!0)}),l&&z4(a)}(r.eventManager,t),i.length&&r.dc.nu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function q4(e,t){const n=Ce(e),r=t.batch.batchId;try{const i=await _4(n.localStore,t);zv(n,r,null),Vv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xa(n,i)}catch(i){await lv(i)}}async function W4(e,t,n){const r=Ce(e);try{const i=await function(s,o){const a=Ce(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(qe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,t);zv(r,t,n),Vv(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Xa(r,i)}catch(i){await lv(i)}}function Vv(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function zv(e,t,n){const r=Ce(e);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}async function Xa(e,t,n){const r=Ce(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=uf.Li(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const c=Ce(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(l,f=>C.forEach(f.Fi,h=>c.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>C.forEach(f.Bi,h=>c.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!Ha(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const h=c.Ji.get(f),p=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(p);c.Ji=c.Ji.insert(f,v)}}}(r.localStore,s))}async function G4(e,t){const n=Ce(e);if(!n.currentUser.isEqual(t)){H("SyncEngine","User change. New user:",t.toKey());const r=await Mv(n.localStore,t);n.currentUser=t,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new G(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Xa(n,r.er)}}function Y4(e){const t=Ce(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=q4.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=W4.bind(null,t),t}class Dd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ga(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return E4(this.persistence,new w4,t.initialUser,this.serializer)}createPersistence(t){return new v4(cf.zs,this.serializer)}createSharedClientState(t){return new T4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Q4{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G4.bind(null,this.syncEngine),await U4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new V4}createDatastore(t){const n=Ga(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new k4(i));var i;return function(s,o,a,l){return new D4(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Pd(this.syncEngine,a,0),o=kd.D()?new kd:new S4,new R4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,c){const u=new H4(r,i,s,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=Ce(t);H("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Bs(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=av.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Uv(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Nl(e,t){e.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mv(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Nd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Z4(e);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Od(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Od(t.remoteStore,s)),e._onlineComponents=t}function J4(e){return e.name==="FirebaseError"?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Z4(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!J4(n))throw n;Xo("Error using user provided cache. Falling back to memory cache: "+n),await Nl(e,new Dd)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Nl(e,new Dd);return e._offlineComponents}async function eT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Nd(e,e._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Nd(e,new Q4))),e._onlineComponents}function tT(e){return eT(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(e,t,n){if(!n)throw new G(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nT(e,t,n,r){if(t===!0&&r===!0)throw new G(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Md(e){if(!te.isDocumentKey(e))throw new G(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ld(e){if(te.isDocumentKey(e))throw new G(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":le()}function qv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new G(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(e);throw new G(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new G(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new G(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=t.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,r}}class Ja{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new G(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qx;switch(n.type){case"firstParty":return new Qx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Rd.get(t);n&&(H("ComponentProvider","Removing Datastore"),Rd.delete(t),n.terminate())}(this),Promise.resolve()}}function rT(e,t,n,r={}){var i;const s=(e=qv(e,Ja))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Xo("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=st.MOCK_USER;else{o=xE(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new G(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(l)}e._authCredentials=new Wx(new ov(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yn(this.firestore,t,this._key)}}class df{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new df(this.firestore,t,this._query)}}class Vn extends df{constructor(t,n,r){super(t,n,_A(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yn(this.firestore,null,new te(t))}withConverter(t){return new Vn(this.firestore,t,this._path)}}function Wv(e,t,...n){if(e=Ir(e),Kv("collection","path",t),e instanceof Ja){const r=De.fromString(t,...n);return Ld(r),new Vn(e,null,r)}{if(!(e instanceof yn||e instanceof Vn))throw new G(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(De.fromString(t,...n));return Ld(r),new Vn(e.firestore,null,r)}}function iT(e,t,...n){if(e=Ir(e),arguments.length===1&&(t=av.A()),Kv("doc","path",t),e instanceof Ja){const r=De.fromString(t,...n);return Md(r),new yn(e,null,new te(r))}{if(!(e instanceof yn||e instanceof Vn))throw new G(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(De.fromString(t,...n));return Md(r),new yn(e.firestore,e instanceof Vn?e.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Lv(this,"async_queue_retry"),this.Xc=()=>{const n=Dl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Dl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new xr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ha(t))throw t;H("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(t,n,r){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=ff.createAndSchedule(this,t,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&le()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Gv extends Ja{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new sT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qv(this),this._firestoreClient.terminate()}}function Yv(e,t){const n=typeof e=="object"?e:Ou(),r=typeof e=="string"?e:t||"(default)",i=Cs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=EE("firestore");s&&rT(i,...s)}return i}function oT(e){return e._firestoreClient||Qv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qv(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,l,c){return new cA(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Hv(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new X4(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ws(xn.fromBase64String(t))}catch(n){throw new G(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ws(xn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new G(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new G(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new G(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _e(this._lat,t._lat)||_e(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=/^__.*__$/;class lT{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Fr(t,this.data,this.fieldMask,n,this.fieldTransforms):new js(t,this.data,n,this.fieldTransforms)}}function Zv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class mf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new mf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:r,la:!1});return i.fa(t),i}da(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:r,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return ia(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Zv(this.ca)&&aT.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class cT{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(t)}ya(t,n,r,i=!1){return new mf({ca:t,methodName:n,ga:r,path:ut.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uT(e){const t=e._freezeSettings(),n=Ga(e._databaseId);return new cT(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fT(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);ry("Data must be an object, but it was:",o,r);const a=ty(r,o);let l,c;if(s.merge)l=new Kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=hT(t,f,n);if(!o.contains(h))throw new G(I.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);mT(u,h)||u.push(h)}l=new Kt(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new lT(new zt(a),l,c)}class gf extends pf{_toFieldTransform(t){return new LA(t.path,new gs)}isEqual(t){return t instanceof gf}}function ey(e,t){if(ny(e=Ir(e)))return ry("Unsupported field value:",t,e),ty(e,t);if(e instanceof pf)return function(n,r){if(!Zv(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ey(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Ir(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:$c(r.serializer,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$c(r.serializer,i)}}if(n instanceof Jv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ws)return{bytesValue:WA(r.serializer,n._byteString)};if(n instanceof yn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${hf(n)}`)}(e,t)}function ty(e,t){const n={};return uv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$s(e,(r,i)=>{const s=ey(i,t.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ny(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ze||e instanceof Jv||e instanceof ws||e instanceof yn||e instanceof pf)}function ry(e,t,n){if(!ny(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=hf(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function hT(e,t,n){if((t=Ir(t))instanceof Xv)return t._internalPath;if(typeof t=="string")return pT(e,t);throw ia("Field path arguments must be of type string or ",e,!1,void 0,n)}const dT=new RegExp("[~\\*/\\[\\]]");function pT(e,t,n){if(t.search(dT)>=0)throw ia(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xv(...t.split("."))._internalPath}catch{throw ia(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ia(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new G(I.INVALID_ARGUMENT,a+e+l)}function mT(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function vT(e,t){const n=qv(e.firestore,Gv),r=iT(e),i=gT(e.converter,t);return yT(n,[fT(uT(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function yT(e,t){return function(n,r){const i=new xr;return n.asyncQueue.enqueueAndForget(async()=>K4(await tT(n),r,i)),i.promise}(oT(e),t)}function wT(){return new gf("serverTimestamp")}(function(e,t=!0){(function(n){bi=n})(k_),Kn(new En("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Gv(new Gx(n.getProvider("auth-internal")),new Jx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ln(dd,"3.12.1",e),ln(dd,"3.12.1","esm2017")})();var bT="firebase",ET="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(bT,ET,"app");const _T=(e,t)=>t.some(n=>e instanceof n);let $d,jd;function xT(){return $d||($d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return jd||(jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Bc=new WeakMap,sy=new WeakMap,Rl=new WeakMap,vf=new WeakMap;function TT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&iy.set(n,e)}).catch(()=>{}),vf.set(t,e),t}function ST(e){if(Bc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Bc.set(e,t)}let Uc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||sy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function IT(e){Uc=e(Uc)}function CT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ml(this),t,...n);return sy.set(r,t.sort?t.sort():[t]),zn(r)}:AT().includes(e)?function(...t){return e.apply(Ml(this),t),zn(iy.get(this))}:function(...t){return zn(e.apply(Ml(this),t))}}function kT(e){return typeof e=="function"?CT(e):(e instanceof IDBTransaction&&ST(e),_T(e,xT())?new Proxy(e,Uc):e)}function zn(e){if(e instanceof IDBRequest)return TT(e);if(Rl.has(e))return Rl.get(e);const t=kT(e);return t!==e&&(Rl.set(e,t),vf.set(t,e)),t}const Ml=e=>vf.get(e);function OT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const PT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],Ll=new Map;function Bd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ll.get(t))return Ll.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=DT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ll.set(t,s),s}IT(e=>({...e,get:(t,n,r)=>Bd(t,n)||e.get(t,n,r),has:(t,n)=>!!Bd(t,n)||e.has(t,n)}));const oy="@firebase/installations",yf="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1e4,ly=`w:${yf}`,cy="FIS_v2",NT="https://firebaseinstallations.googleapis.com/v1",RT=60*60*1e3,MT="installations",LT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dr=new Ca(MT,LT,FT);function uy(e){return e instanceof Jn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy({projectId:e}){return`${NT}/projects/${e}/installations`}function hy(e){return{token:e.token,requestStatus:2,expiresIn:jT(e.expiresIn),creationTime:Date.now()}}async function dy(e,t){const r=(await t.json()).error;return Dr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function py({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $T(e,{refreshToken:t}){const n=py(e);return n.append("Authorization",BT(t)),n}async function my(e){const t=await e();return t.status>=500&&t.status<600?e():t}function jT(e){return Number(e.replace("s","000"))}function BT(e){return`${cy} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=fy(e),i=py(e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:cy,appId:e.appId,sdkVersion:ly},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await my(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:hy(c.authToken)}}else throw await dy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=/^[cdef][\w-]{21}$/,Vc="";function HT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=KT(e);return zT.test(n)?n:Vc}catch{return Vc}}function KT(e){return VT(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Map;function yy(e,t){const n=Za(e);wy(n,t),qT(n,t)}function wy(e,t){const n=vy.get(e);if(n)for(const r of n)r(t)}function qT(e,t){const n=WT();n&&n.postMessage({key:e,fid:t}),GT()}let gr=null;function WT(){return!gr&&"BroadcastChannel"in self&&(gr=new BroadcastChannel("[Firebase] FID Change"),gr.onmessage=e=>{wy(e.data.key,e.data.fid)}),gr}function GT(){vy.size===0&&gr&&(gr.close(),gr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebase-installations-database",QT=1,Nr="firebase-installations-store";let Fl=null;function wf(){return Fl||(Fl=OT(YT,QT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nr)}}})),Fl}async function sa(e,t){const n=Za(e),i=(await wf()).transaction(Nr,"readwrite"),s=i.objectStore(Nr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&yy(e,t.fid),t}async function by(e){const t=Za(e),r=(await wf()).transaction(Nr,"readwrite");await r.objectStore(Nr).delete(t),await r.done}async function el(e,t){const n=Za(e),i=(await wf()).transaction(Nr,"readwrite"),s=i.objectStore(Nr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&yy(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(e){let t;const n=await el(e.appConfig,r=>{const i=XT(r),s=JT(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Vc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function XT(e){const t=e||{fid:HT(),registrationStatus:0};return Ey(t)}function JT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Dr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ZT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:eS(e)}:{installationEntry:t}}async function ZT(e,t){try{const n=await UT(e,t);return sa(e.appConfig,n)}catch(n){throw uy(n)&&n.customData.serverCode===409?await by(e.appConfig):await sa(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function eS(e){let t=await Ud(e.appConfig);for(;t.registrationStatus===1;)await gy(100),t=await Ud(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bf(e);return r||n}return t}function Ud(e){return el(e,t=>{if(!t)throw Dr.create("installation-not-found");return Ey(t)})}function Ey(e){return tS(e)?{fid:e.fid,registrationStatus:0}:e}function tS(e){return e.registrationStatus===1&&e.registrationTime+ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS({appConfig:e,heartbeatServiceProvider:t},n){const r=rS(e,n),i=$T(e,n),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ly,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await my(()=>fetch(r,a));if(l.ok){const c=await l.json();return hy(c)}else throw await dy("Generate Auth Token",l)}function rS(e,{fid:t}){return`${fy(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(e,t=!1){let n;const r=await el(e.appConfig,s=>{if(!_y(s))throw Dr.create("not-registered");const o=s.authToken;if(!t&&oS(o))return s;if(o.requestStatus===1)return n=iS(e,t),s;{if(!navigator.onLine)throw Dr.create("app-offline");const a=lS(s);return n=sS(e,a),a}});return n?await n:r.authToken}async function iS(e,t){let n=await Vd(e.appConfig);for(;n.authToken.requestStatus===1;)await gy(100),n=await Vd(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ef(e,t):r}function Vd(e){return el(e,t=>{if(!_y(t))throw Dr.create("not-registered");const n=t.authToken;return cS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function sS(e,t){try{const n=await nS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await sa(e.appConfig,r),n}catch(n){if(uy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await by(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await sa(e.appConfig,r)}throw n}}function _y(e){return e!==void 0&&e.registrationStatus===2}function oS(e){return e.requestStatus===2&&!aS(e)}function aS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+RT}function lS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function cS(e){return e.requestStatus===1&&e.requestTime+ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(e){const t=e,{installationEntry:n,registrationPromise:r}=await bf(t);return r?r.catch(console.error):Ef(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(e,t=!1){const n=e;return await hS(n),(await Ef(n,t)).token}async function hS(e){const{registrationPromise:t}=await bf(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(e){if(!e||!e.options)throw $l("App Configuration");if(!e.name)throw $l("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $l(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function $l(e){return Dr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="installations",pS="installations-internal",mS=e=>{const t=e.getProvider("app").getImmediate(),n=dS(t),r=Cs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gS=e=>{const t=e.getProvider("app").getImmediate(),n=Cs(t,xy).getImmediate();return{getId:()=>uS(n),getToken:i=>fS(n,i)}};function vS(){Kn(new En(xy,mS,"PUBLIC")),Kn(new En(pS,gS,"PRIVATE"))}vS();ln(oy,yf);ln(oy,yf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="analytics",yS="firebase_id",wS="origin",bS=60*1e3,ES="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_f="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Cu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Ca("analytics","Analytics",_S);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(e){if(!e.startsWith(_f)){const t=Ct.create("invalid-gtag-resource",{gtagURL:e});return xt.warn(t.message),""}return e}function Ay(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function AS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function TS(e,t){const n=AS("firebase-js-sdk-policy",{createScriptURL:xS}),r=document.createElement("script"),i=`${_f}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function SS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function IS(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Ay(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(a){xt.error(a)}e("config",i,s)}async function CS(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ay(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&t[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){xt.error(s)}}function kS(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await CS(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await IS(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,c]=o;e("get",a,l,c)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){xt.error(a)}}return i}function OS(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function PS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_f)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=30,NS=1e3;class RS{constructor(t={},n=NS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ty=new RS;function MS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function LS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:MS(r)},s=ES.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function FS(e,t=Ty,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new BS;return setTimeout(async()=>{a.abort()},n!==void 0?n:bS),Sy({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Sy(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ty){var s;const{appId:o,measurementId:a}=e;try{await $S(r,t)}catch(l){if(a)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await LS(e);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!jS(c)){if(i.deleteThrottleMetadata(o),a)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Kh(n,i.intervalMillis,DS):Kh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),xt.debug(`Calling attemptFetch again in ${u} millis`),Sy(e,f,r,i)}}function $S(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function jS(e){if(!(e instanceof Jn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class BS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function US(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(){if(Xm())try{await Jm()}catch(e){return xt.warn(Ct.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return xt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zS(e,t,n,r,i,s,o){var a;const l=FS(e);l.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>xt.error(p)),t.push(l);const c=VS().then(p=>{if(p)return r.getId()}),[u,f]=await Promise.all([l,c]);PS(s)||TS(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[wS]="firebase",h.update=!0,f!=null&&(h[yS]=f),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(t){this.app=t}_delete(){return delete Wi[this.app.options.appId],Promise.resolve()}}let Wi={},zd=[];const Hd={};let jl="dataLayer",KS="gtag",Kd,Iy,qd=!1;function qS(){const e=[];if(AE()&&e.push("This is a browser extension environment."),TE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:t});xt.warn(n.message)}}function WS(e,t,n){qS();const r=e.options.appId;if(!r)throw Ct.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Wi[r]!=null)throw Ct.create("already-exists",{id:r});if(!qd){SS(jl);const{wrappedGtag:s,gtagCore:o}=OS(Wi,zd,Hd,jl,KS);Iy=s,Kd=o,qd=!0}return Wi[r]=zS(e,zd,Hd,t,Kd,jl,n),new HS(e)}function GS(e=Ou()){e=Ir(e);const t=Cs(e,oa);return t.isInitialized()?t.getImmediate():YS(e)}function YS(e,t={}){const n=Cs(e,oa);if(n.isInitialized()){const i=n.getImmediate();if(Vo(t,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:t})}function QS(e,t,n,r){e=Ir(e),US(Iy,Wi[e.app.options.appId],t,n,r).catch(i=>xt.error(i))}const Wd="@firebase/analytics",Gd="0.10.0";function XS(){Kn(new En(oa,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return WS(r,i,n)},"PUBLIC")),Kn(new En("analytics-internal",e,"PRIVATE")),ln(Wd,Gd),ln(Wd,Gd,"esm2017");function e(t){try{const n=t.getProvider(oa).getImmediate();return{logEvent:(r,i,s)=>QS(n,r,i,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}XS();const xf=tg({apiKey:"AIzaSyCBTeoHQ2eo2LbhvTLpO2jkQ9YJLGRAATQ",authDomain:"davesaah-tests.firebaseapp.com",projectId:"davesaah-tests",storageBucket:"davesaah-tests.appspot.com",messagingSenderId:"543723979787",appId:"1:543723979787:web:1d45ef0448fea8868b730e",measurementId:"G-7KY6K70SWF"},"firebaseApp"),JS={install(e,t){Ou("firebaseApp")}},ZS={install(e,t){GS(xf)}},eI={install(e,t){Yv(xf)}},Cy=Yv(xf),Bl=Wv(Cy,"feedback"),tI=Wv(Cy,"suggestion"),nI={class:"mt-6 flex flex-col items-center justify-center md:container md:pr-5"},rI=$("div",{class:"px-4"},[$("h1",{class:"text-3xl mb-3 text-center"},"Write to us"),$("p",{class:"mb-3 text-lg"},[Yt(" Do you have any questions or suggestions for CodeReviewShop?"),$("br"),Yt(" Would you like to share how CodeReviewShop has impacted you? ")])],-1),iI={class:"flex md:flex-row flex-col gap-x-5 items-center justify-center"},sI={class:"flex flex-col"},oI={class:"mb-3"},aI=$("label",{for:"isSuggestion"},"Is your message a suggestion?",-1),lI=$("div",{class:"mt-5 grid place-items-center"},[$("input",{type:"submit",value:"Submit",class:"bg-blue-200 rounded-lg py-2 px-28 hover:bg-blue-500 hover:text-white"})],-1),cI={key:0,class:"fixed right-8 bottom-8 px-5 py-3 border-r-8 border-green-500 bg-green-100 drop-shadow-lg"},uI={class:"text-sm"},fI={__name:"FeedbackForm",setup(e){const t=Y(""),n=Y(""),r=Y(""),i=Y(!1),s=Y(!1),o=Y(Bl);function a(u){return new Promise(f=>setTimeout(f,u))}function l(){o.value=s.value?Bl:tI}async function c(u){u.preventDefault(),vT(o.value,{name:t.value,email:n.value,msg:r.value,timestamp:wT()}).then(()=>{t.value="",n.value="",r.value="",s.value=!1,o.value=Bl,i.value=!i.value}),await a(8e3),i.value=!i.value}return(u,f)=>{const h=ba("font-awesome-icon");return ot(),bn("div",nI,[rI,$("form",{onSubmit:c,method:"post"},[$("div",null,[$("div",iI,[$("div",sI,[Js($("input",{type:"text",placeholder:"First Name",class:"mb-3 p-2 rounded-md border-2 border-gray-400 accent-gray-500 shadow-md","onUpdate:modelValue":f[0]||(f[0]=p=>t.value=p),required:""},null,512),[[ul,t.value,void 0,{lazy:!0}]]),Js($("input",{type:"email",placeholder:"Enter your email",class:"mb-3 p-2 rounded-md border-2 border-gray-400 accent-gray-500 shadow-md","onUpdate:modelValue":f[1]||(f[1]=p=>n.value=p),required:""},null,512),[[ul,n.value,void 0,{lazy:!0}]]),$("div",oI,[Js($("input",{type:"checkbox",name:"isSuggestion",class:"mr-1","onUpdate:modelValue":f[2]||(f[2]=p=>s.value=p),onClick:l},null,512),[[Sw,s.value]]),aI])]),$("div",null,[Js($("textarea",{placeholder:"Write your feedback/suggestion",class:"rounded-md h-40 w-60 md:w-96 p-2 border-2 border-gray-400 accent-gray-500 shadow-md","onUpdate:modelValue":f[3]||(f[3]=p=>r.value=p),required:""},null,512),[[ul,r.value,void 0,{lazy:!0}]])])]),lI])],32),i.value?(ot(),bn("div",cI,[$("p",uI,[de(h,{class:"mr-2 text-green-800",icon:["far","circle-check"]}),Yt(" Message sent successfully! ")])])):Y1("",!0)])}}},hI={class:"py-8 px-2"},dI={class:"flex flex-row md:gap-x-2.5 items-center md:justify-center lg:w-3/4 md:container"},pI={class:"px-4 md:w-1/2 md:pl-1 md:px-0"},mI=$("h1",{class:"text-5xl"},[Yt(" Better Software "),$("br"),Yt(" is Built Together. ")],-1),gI=$("p",{class:"mt-3 mb-5 text-lg 2xl:w-1/2"}," We help students grow with a solid foundation of the concepts and tools needed to be a thriving software engineer. ",-1),vI=$("div",{class:"hidden md:inline"},[$("img",{alt:"pair programming",src:sE,class:"object-contain w-[450px] rounded-xl"})],-1),yI={class:"mt-6 flex flex-col md:flex-row items-center justify-center md:container md:pr-5"},wI=$("h1",{class:"text-center text-3xl mb-3 md:pr-10"},"Languages & Tools",-1),bI={class:"grid grid-cols-2 sm:grid-cols-3 md:gap-x-8 md:grid-cols-3 xl:grid-cols-4"},EI={__name:"HomeView",setup(e){const t=[{title:"Java",color:"text-red-800",icon:["fab","java"]},{title:"Python",color:"text-yellow-600",icon:["fab","python"]},{title:"HTML5",color:"text-red-600",icon:["fab","html5"]},{title:"CSS3",color:"text-blue-600",icon:["fab","css3-alt"]},{title:"Terminal",color:"text-black-600",icon:["fas","terminal"]},{title:"Git",color:"text-red-600",icon:["fas","code-branch"]},{title:"Github",color:"text-black-600",icon:["fab","github"]}];return(n,r)=>(ot(),bn("div",hI,[$("div",dI,[$("div",pI,[mI,gI,de(Fe(jo),{to:"/about",class:"bg-blue-200 hover:bg-blue-500 rounded-3xl hover:text-white px-4 py-2"},{default:It(()=>[Yt("LEARN MORE")]),_:1})]),vI]),$("div",yI,[wI,$("div",bI,[(ot(),bn(vt,null,Zl(t,i=>$("div",null,[de(fE,{title:i.title,about:i.about,color:i.color,icon:i.icon},null,8,["title","about","color","icon"])])),64))])]),de(fI)]))}},ky=Pb({history:Yw("/"),routes:[{path:"/",name:"Home",component:EI},{path:"/about",name:"About",component:()=>yl(()=>import("./AboutView-2a650b17.js"),["assets/AboutView-2a650b17.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/services",name:"Services",component:()=>yl(()=>import("./ServiceView-13697302.js"),["assets/ServiceView-13697302.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/:catchAll(.*)*",name:"PageNotFound",component:()=>yl(()=>import("./PageNotFoundView-89e83cd4.js"),[])}]});ky.beforeEach((e,t,n)=>{document.title="CodeReviewShop ~ "+e.name,n()});function Yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yd(Object(n),!0).forEach(function(r){Be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aa(e){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},aa(e)}function _I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xI(e,t,n){return t&&Qd(e.prototype,t),n&&Qd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Af(e,t){return TI(e)||II(e,t)||Oy(e,t)||kI()}function Vs(e){return AI(e)||SI(e)||Oy(e)||CI()}function AI(e){if(Array.isArray(e))return zc(e)}function TI(e){if(Array.isArray(e))return e}function SI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function II(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Oy(e,t){if(e){if(typeof e=="string")return zc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zc(e,t)}}function zc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function CI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=function(){},Tf={},Py={},Dy=null,Ny={mark:Xd,measure:Xd};try{typeof window<"u"&&(Tf=window),typeof document<"u"&&(Py=document),typeof MutationObserver<"u"&&(Dy=MutationObserver),typeof performance<"u"&&(Ny=performance)}catch{}var OI=Tf.navigator||{},Jd=OI.userAgent,Zd=Jd===void 0?"":Jd,Yn=Tf,Ie=Py,ep=Dy,fo=Ny;Yn.document;var Cn=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",Ry=~Zd.indexOf("MSIE")||~Zd.indexOf("Trident/"),ho,po,mo,go,vo,An="___FONT_AWESOME___",Hc=16,My="fa",Ly="svg-inline--fa",Rr="data-fa-i2svg",Kc="data-fa-pseudo-element",PI="data-fa-pseudo-element-pending",Sf="data-prefix",If="data-icon",tp="fontawesome-i2svg",DI="async",NI=["HTML","HEAD","STYLE","SCRIPT"],Fy=function(){try{return!0}catch{return!1}}(),Te="classic",Pe="sharp",Cf=[Te,Pe];function zs(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Te]}})}var bs=zs((ho={},Be(ho,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Be(ho,Pe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ho)),Es=zs((po={},Be(po,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Be(po,Pe,{solid:"fass",regular:"fasr",light:"fasl"}),po)),_s=zs((mo={},Be(mo,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Be(mo,Pe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),mo)),RI=zs((go={},Be(go,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Be(go,Pe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),go)),MI=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,$y="fa-layers-text",LI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FI=zs((vo={},Be(vo,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Be(vo,Pe,{900:"fass",400:"fasr",300:"fasl"}),vo)),jy=[1,2,3,4,5,6,7,8,9,10],$I=jy.concat([11,12,13,14,15,16,17,18,19,20]),jI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xs=new Set;Object.keys(Es[Te]).map(xs.add.bind(xs));Object.keys(Es[Pe]).map(xs.add.bind(xs));var BI=[].concat(Cf,Vs(xs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vr.GROUP,vr.SWAP_OPACITY,vr.PRIMARY,vr.SECONDARY]).concat(jy.map(function(e){return"".concat(e,"x")})).concat($I.map(function(e){return"w-".concat(e)})),Gi=Yn.FontAwesomeConfig||{};function UI(e){var t=Ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function VI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ie&&typeof Ie.querySelector=="function"){var zI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zI.forEach(function(e){var t=Af(e,2),n=t[0],r=t[1],i=VI(UI(n));i!=null&&(Gi[r]=i)})}var By={styleDefault:"solid",familyDefault:"classic",cssPrefix:My,replacementClass:Ly,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gi.familyPrefix&&(Gi.cssPrefix=Gi.familyPrefix);var hi=L(L({},By),Gi);hi.autoReplaceSvg||(hi.observeMutations=!1);var B={};Object.keys(By).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){hi[e]=n,Yi.forEach(function(r){return r(B)})},get:function(){return hi[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){hi.cssPrefix=t,Yi.forEach(function(n){return n(B)})},get:function(){return hi.cssPrefix}});Yn.FontAwesomeConfig=B;var Yi=[];function HI(e){return Yi.push(e),function(){Yi.splice(Yi.indexOf(e),1)}}var Nn=Hc,on={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KI(e){if(!(!e||!Cn)){var t=Ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ie.head.insertBefore(t,r),e}}var qI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function As(){for(var e=12,t="";e-- >0;)t+=qI[Math.random()*62|0];return t}function _i(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function kf(e){return e.classList?_i(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Uy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function WI(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Uy(e[n]),'" ')},"").trim()}function tl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Of(e){return e.size!==on.size||e.x!==on.x||e.y!==on.y||e.rotate!==on.rotate||e.flipX||e.flipY}function GI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function YI(e){var t=e.transform,n=e.width,r=n===void 0?Hc:n,i=e.height,s=i===void 0?Hc:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&Ry?l+="translate(".concat(t.x/Nn-r/2,"em, ").concat(t.y/Nn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Nn,"em), calc(-50% + ").concat(t.y/Nn,"em)) "):l+="translate(".concat(t.x/Nn,"em, ").concat(t.y/Nn,"em) "),l+="scale(".concat(t.size/Nn*(t.flipX?-1:1),", ").concat(t.size/Nn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var QI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vy(){var e=My,t=Ly,n=B.cssPrefix,r=B.replacementClass,i=QI;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var np=!1;function Ul(){B.autoAddCss&&!np&&(KI(Vy()),np=!0)}var XI={mixout:function(){return{dom:{css:Vy,insertCss:Ul}}},hooks:function(){return{beforeDOMElementCreation:function(){Ul()},beforeI2svg:function(){Ul()}}}},Tn=Yn||{};Tn[An]||(Tn[An]={});Tn[An].styles||(Tn[An].styles={});Tn[An].hooks||(Tn[An].hooks={});Tn[An].shims||(Tn[An].shims=[]);var qt=Tn[An],zy=[],JI=function e(){Ie.removeEventListener("DOMContentLoaded",e),la=1,zy.map(function(t){return t()})},la=!1;Cn&&(la=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),la||Ie.addEventListener("DOMContentLoaded",JI));function ZI(e){Cn&&(la?setTimeout(e,0):zy.push(e))}function Hs(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Uy(e):"<".concat(t," ").concat(WI(r),">").concat(s.map(Hs).join(""),"</").concat(t,">")}function rp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eC=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Vl=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?eC(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,t[c],c,t);return u};function tC(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function qc(e){var t=tC(e);return t.length===1?t[0].toString(16):null}function nC(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ip(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ip(t);typeof qt.hooks.addPack=="function"&&!i?qt.hooks.addPack(e,ip(t)):qt.styles[e]=L(L({},qt.styles[e]||{}),s),e==="fas"&&Wc("fa",t)}var yo,wo,bo,Hr=qt.styles,rC=qt.shims,iC=(yo={},Be(yo,Te,Object.values(_s[Te])),Be(yo,Pe,Object.values(_s[Pe])),yo),Pf=null,Hy={},Ky={},qy={},Wy={},Gy={},sC=(wo={},Be(wo,Te,Object.keys(bs[Te])),Be(wo,Pe,Object.keys(bs[Pe])),wo);function oC(e){return~BI.indexOf(e)}function aC(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!oC(i)?i:null}var Yy=function(){var t=function(s){return Vl(Hr,function(o,a,l){return o[l]=Vl(a,s,{}),o},{})};Hy=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Ky=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Gy=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Hr||B.autoFetchSvg,r=Vl(rC,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});qy=r.names,Wy=r.unicodes,Pf=nl(B.styleDefault,{family:B.familyDefault})};HI(function(e){Pf=nl(e.styleDefault,{family:B.familyDefault})});Yy();function Df(e,t){return(Hy[e]||{})[t]}function lC(e,t){return(Ky[e]||{})[t]}function yr(e,t){return(Gy[e]||{})[t]}function Qy(e){return qy[e]||{prefix:null,iconName:null}}function cC(e){var t=Wy[e],n=Df("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qn(){return Pf}var Nf=function(){return{prefix:null,iconName:null,rest:[]}};function nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Te:n,i=bs[r][e],s=Es[r][e]||Es[r][i],o=e in qt.styles?e:null;return s||o||null}var sp=(bo={},Be(bo,Te,Object.keys(_s[Te])),Be(bo,Pe,Object.keys(_s[Pe])),bo);function rl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Be(t,Te,"".concat(B.cssPrefix,"-").concat(Te)),Be(t,Pe,"".concat(B.cssPrefix,"-").concat(Pe)),t),o=null,a=Te;(e.includes(s[Te])||e.some(function(c){return sp[Te].includes(c)}))&&(a=Te),(e.includes(s[Pe])||e.some(function(c){return sp[Pe].includes(c)}))&&(a=Pe);var l=e.reduce(function(c,u){var f=aC(B.cssPrefix,u);if(Hr[u]?(u=iC[a].includes(u)?RI[a][u]:u,o=u,c.prefix=u):sC[a].indexOf(u)>-1?(o=u,c.prefix=nl(u,{family:a})):f?c.iconName=f:u!==B.replacementClass&&u!==s[Te]&&u!==s[Pe]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var h=o==="fa"?Qy(c.iconName):{},p=yr(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Hr.far&&Hr.fas&&!B.autoFetchSvg&&(c.prefix="fas")}return c},Nf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Pe&&(Hr.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=yr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qn()||"fas"),l}var uC=function(){function e(){_I(this,e),this.definitions={}}return xI(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),Wc(a,o[a]);var l=_s[Te][a];l&&Wc(l,o[a]),Yy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),e}(),op=[],Kr={},Zr={},fC=Object.keys(Zr);function hC(e,t){var n=t.mixoutsTo;return op=e,Kr={},Object.keys(Zr).forEach(function(r){fC.indexOf(r)===-1&&delete Zr[r]}),op.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),aa(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Kr[o]||(Kr[o]=[]),Kr[o].push(s[o])})}r.provides&&r.provides(Zr)}),n}function Gc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Kr[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Kr[e]||[];i.forEach(function(s){s.apply(null,n)})}function Sn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Zr[e]?Zr[e].apply(null,t):void 0}function Yc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qn();if(t)return t=yr(n,t)||t,rp(Xy.definitions,n,t)||rp(qt.styles,n,t)}var Xy=new uC,dC=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,Mr("noAuto")},pC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Cn?(Mr("beforeI2svg",t),Sn("pseudoElements2svg",t),Sn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,ZI(function(){gC({autoReplaceSvgRoot:n}),Mr("watch",t)})}},mC={icon:function(t){if(t===null)return null;if(aa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nl(t[0]);return{prefix:r,iconName:yr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(MI))){var i=rl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qn(),iconName:yr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Qn();return{prefix:s,iconName:yr(s,t)||t}}}},Nt={noAuto:dC,config:B,dom:pC,parse:mC,library:Xy,findIconDefinition:Yc,toHtml:Hs},gC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ie:n;(Object.keys(qt.styles).length>0||B.autoFetchSvg)&&Cn&&B.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function il(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Hs(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Cn){var r=Ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vC(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Of(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=tl(L(L({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function yC(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Rf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,p=h===void 0?!1:h,v=r.found?r:n,y=v.width,A=v.height,w=i==="fak",b=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(ce){return f.classes.indexOf(ce)===-1}).filter(function(ce){return ce!==""||!!ce}).concat(f.classes).join(" "),R={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(A)})},k=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/A*16*.0625,"em")}:{};p&&(R.attributes[Rr]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||As())},children:[l]}),delete R.attributes.title);var W=L(L({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:L(L({},k),f.styles)}),Z=r.found&&n.found?Sn("generateAbstractMask",W)||{children:[],attributes:{}}:Sn("generateAbstractIcon",W)||{children:[],attributes:{}},ne=Z.children,he=Z.attributes;return W.children=ne,W.attributes=he,a?yC(W):vC(W)}function ap(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Rr]="");var u=L({},o.styles);Of(i)&&(u.transform=YI({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=tl(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function wC(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=tl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zl=qt.styles;function Qc(e){var t=e[0],n=e[1],r=e.slice(4),i=Af(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(vr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(vr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(vr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var bC={found:!1,width:512,height:512};function EC(e,t){!Fy&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xc(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Qn()),new Promise(function(r,i){if(Sn("missingIconAbstract"),n==="fa"){var s=Qy(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&zl[t]&&zl[t][e]){var o=zl[t][e];return r(Qc(o))}EC(e,t),r(L(L({},bC),{},{icon:B.showMissingIcons&&e?Sn("missingIconAbstract")||{}:{}}))})}var lp=function(){},Jc=B.measurePerformance&&fo&&fo.mark&&fo.measure?fo:{mark:lp,measure:lp},Li='FA "6.4.0"',_C=function(t){return Jc.mark("".concat(Li," ").concat(t," begins")),function(){return Jy(t)}},Jy=function(t){Jc.mark("".concat(Li," ").concat(t," ends")),Jc.measure("".concat(Li," ").concat(t),"".concat(Li," ").concat(t," begins"),"".concat(Li," ").concat(t," ends"))},Mf={begin:_C,end:Jy},ko=function(){};function cp(e){var t=e.getAttribute?e.getAttribute(Rr):null;return typeof t=="string"}function xC(e){var t=e.getAttribute?e.getAttribute(Sf):null,n=e.getAttribute?e.getAttribute(If):null;return t&&n}function AC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function TC(){if(B.autoReplaceSvg===!0)return Oo.replace;var e=Oo[B.autoReplaceSvg];return e||Oo.replace}function SC(e){return Ie.createElementNS("http://www.w3.org/2000/svg",e)}function IC(e){return Ie.createElement(e)}function Zy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?SC:IC:n;if(typeof e=="string")return Ie.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(Zy(o,{ceFn:r}))}),i}function CC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Oo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Zy(i),n)}),n.getAttribute(Rr)===null&&B.keepOriginalSource){var r=Ie.createComment(CC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~kf(n).indexOf(B.replacementClass))return Oo.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Hs(a)}).join(`
`);n.setAttribute(Rr,""),n.innerHTML=o}};function up(e){e()}function e0(e,t){var n=typeof t=="function"?t:ko;if(e.length===0)n();else{var r=up;B.mutateApproach===DI&&(r=Yn.requestAnimationFrame||up),r(function(){var i=TC(),s=Mf.begin("mutate");e.map(i),s(),n()})}}var Lf=!1;function t0(){Lf=!0}function Zc(){Lf=!1}var ca=null;function fp(e){if(ep&&B.observeMutations){var t=e.treeCallback,n=t===void 0?ko:t,r=e.nodeCallback,i=r===void 0?ko:r,s=e.pseudoElementsCallback,o=s===void 0?ko:s,a=e.observeMutationsRoot,l=a===void 0?Ie:a;ca=new ep(function(c){if(!Lf){var u=Qn();_i(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cp(f.addedNodes[0])&&(B.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&cp(f.target)&&~jI.indexOf(f.attributeName))if(f.attributeName==="class"&&xC(f.target)){var h=rl(kf(f.target)),p=h.prefix,v=h.iconName;f.target.setAttribute(Sf,p||u),v&&f.target.setAttribute(If,v)}else AC(f.target)&&i(f.target)})}}),Cn&&ca.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kC(){ca&&ca.disconnect()}function OC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function PC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=rl(kf(e));return i.prefix||(i.prefix=Qn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=lC(i.prefix,e.innerText)||Df(i.prefix,qc(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function DC(e){var t=_i(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||As()):(t["aria-hidden"]="true",t.focusable="false")),t}function NC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:on,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PC(e),r=n.iconName,i=n.prefix,s=n.rest,o=DC(e),a=Gc("parseNodeAttributes",{},e),l=t.styleParser?OC(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:on,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var RC=qt.styles;function n0(e){var t=B.autoReplaceSvg==="nest"?hp(e,{styleParser:!1}):hp(e);return~t.extra.classes.indexOf($y)?Sn("generateLayersText",e,t):Sn("generateSvgReplacementMutation",e,t)}var Xn=new Set;Cf.map(function(e){Xn.add("fa-".concat(e))});Object.keys(bs[Te]).map(Xn.add.bind(Xn));Object.keys(bs[Pe]).map(Xn.add.bind(Xn));Xn=Vs(Xn);function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Cn)return Promise.resolve();var n=Ie.documentElement.classList,r=function(f){return n.add("".concat(tp,"-").concat(f))},i=function(f){return n.remove("".concat(tp,"-").concat(f))},s=B.autoFetchSvg?Xn:Cf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(RC));s.includes("fa")||s.push("fa");var o=[".".concat($y,":not([").concat(Rr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Rr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=_i(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Mf.begin("onTree"),c=a.reduce(function(u,f){try{var h=n0(f);h&&u.push(h)}catch(p){Fy||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){e0(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),f(h)})})}function MC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;n0(e).then(function(n){n&&e0([n],t)})}function LC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Yc(i||{})),e(r,L(L({},n),{},{mask:i}))}}var FC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?on:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,p=n.titleId,v=p===void 0?null:p,y=n.classes,A=y===void 0?[]:y,w=n.attributes,b=w===void 0?{}:w,R=n.styles,k=R===void 0?{}:R;if(t){var W=t.prefix,Z=t.iconName,ne=t.icon;return il(L({type:"icon"},t),function(){return Mr("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(h?b["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(v||As()):(b["aria-hidden"]="true",b.focusable="false")),Rf({icons:{main:Qc(ne),mask:l?Qc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:Z,transform:L(L({},on),i),symbol:o,title:h,maskId:u,titleId:v,extra:{attributes:b,styles:k,classes:A}})})}},$C={mixout:function(){return{icon:LC(FC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dp,n.nodeCallback=MC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Ie:r,s=n.callback,o=s===void 0?function(){}:s;return dp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,v){Promise.all([Xc(i,a),u.iconName?Xc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=Af(y,2),w=A[0],b=A[1];p([n,Rf({icons:{main:w,mask:b},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=tl(a);l.length>0&&(i.style=l);var c;return Of(o)&&(c=Sn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},jC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return il({type:"layer"},function(){Mr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Vs(s)).join(" ")},children:o}]})}}}},BC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return il({type:"counter",content:n},function(){return Mr("beforeDOMElementCreation",{content:n,params:r}),wC({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Vs(a))}})})}}}},UC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?on:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,h=r.styles,p=h===void 0?{}:h;return il({type:"text",content:n},function(){return Mr("beforeDOMElementCreation",{content:n,params:r}),ap({content:n,transform:L(L({},on),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Vs(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Ry){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ap({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},VC=new RegExp('"',"ug"),pp=[1105920,1112319];function zC(e){var t=e.replace(VC,""),n=nC(t,0),r=n>=pp[0]&&n<=pp[1],i=t.length===2?t[0]===t[1]:!1;return{value:qc(i?t[0]:t),isSecondary:r||i}}function mp(e,t){var n="".concat(PI).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=_i(e.children),o=s.filter(function(ne){return ne.getAttribute(Kc)===t})[0],a=Yn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(LI),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Pe:Te,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Es[h][l[2].toLowerCase()]:FI[h][c],v=zC(f),y=v.value,A=v.isSecondary,w=l[0].startsWith("FontAwesome"),b=Df(p,y),R=b;if(w){var k=cC(y);k.iconName&&k.prefix&&(b=k.iconName,p=k.prefix)}if(b&&!A&&(!o||o.getAttribute(Sf)!==p||o.getAttribute(If)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var W=NC(),Z=W.extra;Z.attributes[Kc]=t,Xc(b,p).then(function(ne){var he=Rf(L(L({},W),{},{icons:{main:ne,mask:Nf()},prefix:p,iconName:R,extra:Z,watchable:!0})),ce=Ie.createElement("svg");t==="::before"?e.insertBefore(ce,e.firstChild):e.appendChild(ce),ce.outerHTML=he.map(function(Oe){return Hs(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function HC(e){return Promise.all([mp(e,"::before"),mp(e,"::after")])}function KC(e){return e.parentNode!==document.head&&!~NI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gp(e){if(Cn)return new Promise(function(t,n){var r=_i(e.querySelectorAll("*")).filter(KC).map(HC),i=Mf.begin("searchPseudoElements");t0(),Promise.all(r).then(function(){i(),Zc(),t()}).catch(function(){i(),Zc(),n()})})}var qC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ie:r;B.searchPseudoElements&&gp(i)}}},vp=!1,WC={mixout:function(){return{dom:{unwatch:function(){t0(),vp=!0}}}},hooks:function(){return{bootstrap:function(){fp(Gc("mutationObserverCallbacks",{}))},noAuto:function(){kC()},watch:function(n){var r=n.observeMutationsRoot;vp?Zc():fp(Gc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},yp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},GC={mixout:function(){return{parse:{transform:function(n){return yp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=yp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},Hl={x:0,y:0,width:"100%",height:"100%"};function wp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function YC(e){return e.tag==="g"?e.children:[e]}var QC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?rl(i.split(" ").map(function(o){return o.trim()})):Nf();return s.prefix||(s.prefix=Qn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,p=GI({transform:l,containerWidth:f,iconWidth:c}),v={tag:"rect",attributes:L(L({},Hl),{},{fill:"white"})},y=u.children?{children:u.children.map(wp)}:{},A={tag:"g",attributes:L({},p.inner),children:[wp(L({tag:u.tag,attributes:L(L({},u.attributes),p.path)},y))]},w={tag:"g",attributes:L({},p.outer),children:[A]},b="mask-".concat(a||As()),R="clip-".concat(a||As()),k={tag:"mask",attributes:L(L({},Hl),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,w]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:YC(h)},k]};return r.push(W,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(b,")")},Hl)}),{children:r,attributes:i}}}},XC={provides:function(t){var n=!1;Yn.matchMedia&&(n=Yn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},JC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},ZC=[XI,$C,jC,BC,UC,qC,WC,GC,QC,XC,JC];hC(ZC,{mixoutsTo:Nt});Nt.noAuto;Nt.config;var Xt=Nt.library;Nt.dom;var eu=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var ek=Nt.icon;Nt.layer;Nt.text;Nt.counter;function bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bp(Object(n),!0).forEach(function(r){Et(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ua(e){"@babel/helpers - typeof";return ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ua(e)}function Et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nk(e,t){if(e==null)return{};var n=tk(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var rk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r0={exports:{}};(function(e){(function(t){var n=function(w,b,R){if(!c(b)||f(b)||h(b)||p(b)||l(b))return b;var k,W=0,Z=0;if(u(b))for(k=[],Z=b.length;W<Z;W++)k.push(n(w,b[W],R));else{k={};for(var ne in b)Object.prototype.hasOwnProperty.call(b,ne)&&(k[w(ne,R)]=n(w,b[ne],R))}return k},r=function(w,b){b=b||{};var R=b.separator||"_",k=b.split||/(?=[A-Z])/;return w.split(k).join(R)},i=function(w){return v(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(b,R){return R?R.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var b=i(w);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(w,b){return r(w,b).toLowerCase()},a=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},h=function(w){return a.call(w)=="[object RegExp]"},p=function(w){return a.call(w)=="[object Boolean]"},v=function(w){return w=w-0,w===w},y=function(w,b){var R=b&&"process"in b?b.process:b;return typeof R!="function"?w:function(k,W){return R(k,w,W)}},A={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(w,b){return n(y(i,b),w)},decamelizeKeys:function(w,b){return n(y(o,b),w,b)},pascalizeKeys:function(w,b){return n(y(s,b),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(rk)})(r0);var ik=r0.exports,sk=["class","style"];function ok(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=ik.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function ak(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function i0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return i0(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=ak(u);break;case"style":l.style=ok(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=nk(n,sk);return at(e.tag,mn(mn(mn({},t),{},{class:i.class,style:mn(mn({},i.style),o)},i.attrs),a),r)}var s0=!1;try{s0=!0}catch{}function lk(){if(!s0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Et({},e,t):{}}function ck(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Et(t,"fa-".concat(e.size),e.size!==null),Et(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Et(t,"fa-pull-".concat(e.pull),e.pull!==null),Et(t,"fa-swap-opacity",e.swapOpacity),Et(t,"fa-bounce",e.bounce),Et(t,"fa-shake",e.shake),Et(t,"fa-beat",e.beat),Et(t,"fa-fade",e.fade),Et(t,"fa-beat-fade",e.beatFade),Et(t,"fa-flash",e.flash),Et(t,"fa-spin-pulse",e.spinPulse),Et(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ep(e){if(e&&ua(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(eu.icon)return eu.icon(e);if(e===null)return null;if(ua(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var uk=mt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=K(function(){return Ep(t.icon)}),s=K(function(){return Kl("classes",ck(t))}),o=K(function(){return Kl("transform",typeof t.transform=="string"?eu.transform(t.transform):t.transform)}),a=K(function(){return Kl("mask",Ep(t.mask))}),l=K(function(){return ek(i.value,mn(mn(mn(mn({},s.value),o.value),a.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(u){if(!u)return lk("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=K(function(){return l.value?i0(l.value.abstract[0],{},r):null});return function(){return c.value}}}),fk={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]},hk={prefix:"fab",iconName:"css3-alt",icon:[384,512,[],"f38b","M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"]},dk={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},pk={prefix:"fab",iconName:"python",icon:[448,512,[],"f3e2","M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"]},mk={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},gk={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},vk={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},yk={prefix:"fas",iconName:"terminal",icon:[576,512,[],"f120","M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wk={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},bk={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ek={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]};Xt.add(fk);Xt.add(pk);Xt.add(dk);Xt.add(hk);Xt.add(yk);Xt.add(vk);Xt.add(mk);Xt.add(bk);Xt.add(gk);Xt.add(Ek);Xt.add(wk);const xi=Ow(nE);xi.use(JS);xi.use(ZS);xi.use(eI);xi.use(ky);xi.component("font-awesome-icon",uk);xi.mount("#app");export{jo as R,$ as a,de as b,bn as c,Yt as d,ot as o,Fe as u,It as w};
