const Gs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Gs();function na(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qs=na(Xs);function ro(e){return!!e||e===""}function ra(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?el(r):ra(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(de(e))return e}}const Js=/;(?![^(]*\))/g,Zs=/:(.+)/;function el(e){const t={};return e.split(Js).forEach(n=>{if(n){const r=n.split(Zs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function aa(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=aa(e[n]);r&&(t+=r+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ba=e=>ge(e)?e:e==null?"":H(e)||de(e)&&(e.toString===so||!B(e.toString))?JSON.stringify(e,ao,2):String(e),ao=(e,t)=>t&&t.__v_isRef?ao(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:io(t)?{[`Set(${t.size})`]:[...t.values()]}:de(t)&&!H(t)&&!lo(t)?String(t):t,re={},Ft=[],Me=()=>{},tl=()=>!1,nl=/^on[^a-z]/,Jn=e=>nl.test(e),ia=e=>e.startsWith("onUpdate:"),ye=Object.assign,oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rl=Object.prototype.hasOwnProperty,q=(e,t)=>rl.call(e,t),H=Array.isArray,$t=e=>Zn(e)==="[object Map]",io=e=>Zn(e)==="[object Set]",B=e=>typeof e=="function",ge=e=>typeof e=="string",sa=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",oo=e=>de(e)&&B(e.then)&&B(e.catch),so=Object.prototype.toString,Zn=e=>so.call(e),al=e=>Zn(e).slice(8,-1),lo=e=>Zn(e)==="[object Object]",la=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},il=/-(\w)/g,He=er(e=>e.replace(il,(t,n)=>n?n.toUpperCase():"")),ol=/\B([A-Z])/g,Yt=er(e=>e.replace(ol,"-$1").toLowerCase()),tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=er(e=>e?`on${tr(e)}`:""),gn=(e,t)=>!Object.is(e,t),pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},sl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wa;const ll=()=>Wa||(Wa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;class co{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Ye=this,t()}finally{Ye=this.parent}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function cl(e){return new co(e)}function fl(e,t=Ye){t&&t.active&&t.effects.push(e)}const ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},fo=e=>(e.w&dt)>0,uo=e=>(e.n&dt)>0,ul=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},dl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];fo(a)&&!uo(a)?a.delete(e):t[n++]=a,a.w&=~dt,a.n&=~dt}t.length=n}},Pr=new WeakMap;let tn=0,dt=1;const Or=30;let je;const _t=Symbol(""),Sr=Symbol("");class fa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fl(this,r)}run(){if(!this.active)return this.fn();let t=je,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=je,je=this,ct=!0,dt=1<<++tn,tn<=Or?ul(this):Ya(this),this.fn()}finally{tn<=Or&&dl(this),dt=1<<--tn,je=this.parent,ct=n,this.parent=void 0}}stop(){this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const mo=[];function Kt(){mo.push(ct),ct=!1}function Vt(){const e=mo.pop();ct=e===void 0?!0:e}function Ae(e,t,n){if(ct&&je){let r=Pr.get(e);r||Pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ca()),ho(a)}}function ho(e,t){let n=!1;tn<=Or?uo(e)||(e.n|=dt,n=!fo(e)):n=!e.has(je),n&&(e.add(je),je.deps.push(e))}function Ve(e,t,n,r,a,i){const o=Pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?la(n)&&s.push(o.get("length")):(s.push(o.get(_t)),$t(e)&&s.push(o.get(Sr)));break;case"delete":H(e)||(s.push(o.get(_t)),$t(e)&&s.push(o.get(Sr)));break;case"set":$t(e)&&s.push(o.get(_t));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Ir(ca(l))}}function Ir(e,t){for(const n of H(e)?e:[...e])(n!==je||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ml=na("__proto__,__v_isRef,__isVue"),po=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(sa)),hl=ua(),pl=ua(!1,!0),gl=ua(!0),Ka=vl();function vl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=G(this)[t].apply(this,n);return Vt(),r}}),e}function ua(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Tl:_o:t?yo:bo).get(r))return r;const o=H(r);if(!e&&o&&q(Ka,a))return Reflect.get(Ka,a,i);const s=Reflect.get(r,a,i);return(sa(a)?po.has(a):ml(a))||(e||Ae(r,"get",a),t)?s:pe(s)?!o||!la(a)?s.value:s:de(s)?e?wo(s):An(s):s}}const bl=go(),yl=go(!0);function go(e=!1){return function(n,r,a,i){let o=n[r];if(vn(o)&&pe(o)&&!pe(a))return!1;if(!e&&!vn(a)&&(xo(a)||(a=G(a),o=G(o)),!H(n)&&pe(o)&&!pe(a)))return o.value=a,!0;const s=H(n)&&la(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?gn(a,o)&&Ve(n,"set",r,a):Ve(n,"add",r,a)),l}}function _l(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function wl(e,t){const n=Reflect.has(e,t);return(!sa(t)||!po.has(t))&&Ae(e,"has",t),n}function xl(e){return Ae(e,"iterate",H(e)?"length":_t),Reflect.ownKeys(e)}const vo={get:hl,set:bl,deleteProperty:_l,has:wl,ownKeys:xl},kl={get:gl,set(e,t){return!0},deleteProperty(e,t){return!0}},Al=ye({},vo,{get:pl,set:yl}),da=e=>e,nr=e=>Reflect.getPrototypeOf(e);function Cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);t!==i&&!n&&Ae(a,"get",t),!n&&Ae(a,"get",i);const{has:o}=nr(a),s=r?da:n?ga:bn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Pn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return e!==a&&!t&&Ae(r,"has",e),!t&&Ae(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function On(e,t=!1){return e=e.__v_raw,!t&&Ae(G(e),"iterate",_t),Reflect.get(e,"size",e)}function Va(e){e=G(e);const t=G(this);return nr(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function qa(e,t){t=G(t);const n=G(this),{has:r,get:a}=nr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gn(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function Ga(e){const t=G(this),{has:n,get:r}=nr(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ve(t,"delete",e,void 0),i}function Xa(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?da:e?ga:bn;return!e&&Ae(s,"iterate",_t),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function In(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?da:t?ga:bn;return!t&&Ae(i,"iterate",l?Sr:_t),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function El(){const e={get(i){return Cn(this,i)},get size(){return On(this)},has:Pn,add:Va,set:qa,delete:Ga,clear:Xa,forEach:Sn(!1,!1)},t={get(i){return Cn(this,i,!1,!0)},get size(){return On(this)},has:Pn,add:Va,set:qa,delete:Ga,clear:Xa,forEach:Sn(!1,!0)},n={get(i){return Cn(this,i,!0)},get size(){return On(this,!0)},has(i){return Pn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Sn(!0,!1)},r={get(i){return Cn(this,i,!0,!0)},get size(){return On(this,!0)},has(i){return Pn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=In(i,!1,!1),n[i]=In(i,!0,!1),t[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[e,n,t,r]}const[Cl,Pl,Ol,Sl]=El();function ma(e,t){const n=t?e?Sl:Ol:e?Pl:Cl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Il={get:ma(!1,!1)},Rl={get:ma(!1,!0)},Ml={get:ma(!0,!1)},bo=new WeakMap,yo=new WeakMap,_o=new WeakMap,Tl=new WeakMap;function zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(e){return e.__v_skip||!Object.isExtensible(e)?0:zl(al(e))}function An(e){return vn(e)?e:ha(e,!1,vo,Il,bo)}function Ll(e){return ha(e,!1,Al,Rl,yo)}function wo(e){return ha(e,!0,kl,Ml,_o)}function ha(e,t,n,r,a){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Nl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function jt(e){return vn(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function xo(e){return!!(e&&e.__v_isShallow)}function ko(e){return jt(e)||vn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function pa(e){return $n(e,"__v_skip",!0),e}const bn=e=>de(e)?An(e):e,ga=e=>de(e)?wo(e):e;function Ao(e){ct&&je&&(e=G(e),ho(e.dep||(e.dep=ca())))}function Eo(e,t){e=G(e),e.dep&&Ir(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function Co(e){return Po(e,!1)}function Fl(e){return Po(e,!0)}function Po(e,t){return pe(e)?e:new $l(e,t)}class $l{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:bn(t)}get value(){return Ao(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),gn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:bn(t),Eo(this))}}function on(e){return pe(e)?e.value:e}const jl={get:(e,t,n)=>on(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return pe(a)&&!pe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Oo(e){return jt(e)?e:new Proxy(e,jl)}class Dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fa(t,()=>{this._dirty||(this._dirty=!0,Eo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Ao(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Hl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Me):(r=e.get,a=e.set),new Dl(r,a,i||!a,n)}Promise.resolve();function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){rr(i,t,n)}return a}function Te(e,t,n,r){if(B(e)){const i=ft(e,t,n,r);return i&&oo(i)&&i.catch(o=>{rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Te(e[i],t,n,r));return a}function rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}Ul(e,n,a,r)}function Ul(e,t,n,r=!0){console.error(e)}let jn=!1,Rr=!1;const ke=[];let Ke=0;const sn=[];let nn=null,Rt=0;const ln=[];let ot=null,Mt=0;const So=Promise.resolve();let va=null,Mr=null;function Io(e){const t=va||So;return e?t.then(this?e.bind(this):e):t}function Bl(e){let t=Ke+1,n=ke.length;for(;t<n;){const r=t+n>>>1;yn(ke[r])<e?t=r+1:n=r}return t}function Ro(e){(!ke.length||!ke.includes(e,jn&&e.allowRecurse?Ke+1:Ke))&&e!==Mr&&(e.id==null?ke.push(e):ke.splice(Bl(e.id),0,e),Mo())}function Mo(){!jn&&!Rr&&(Rr=!0,va=So.then(No))}function Wl(e){const t=ke.indexOf(e);t>Ke&&ke.splice(t,1)}function To(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Mo()}function Yl(e){To(e,nn,sn,Rt)}function Kl(e){To(e,ot,ln,Mt)}function ba(e,t=null){if(sn.length){for(Mr=t,nn=[...new Set(sn)],sn.length=0,Rt=0;Rt<nn.length;Rt++)nn[Rt]();nn=null,Rt=0,Mr=null,ba(e,t)}}function zo(e){if(ln.length){const t=[...new Set(ln)];if(ln.length=0,ot){ot.push(...t);return}for(ot=t,ot.sort((n,r)=>yn(n)-yn(r)),Mt=0;Mt<ot.length;Mt++)ot[Mt]();ot=null,Mt=0}}const yn=e=>e.id==null?1/0:e.id;function No(e){Rr=!1,jn=!0,ba(e),ke.sort((n,r)=>yn(n)-yn(r));const t=Me;try{for(Ke=0;Ke<ke.length;Ke++){const n=ke[Ke];n&&n.active!==!1&&ft(n,null,14)}}finally{Ke=0,ke.length=0,zo(),jn=!1,va=null,(ke.length||sn.length||ln.length)&&No(e)}}function Vl(e,t,...n){const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||re;h?a=n.map(v=>v.trim()):d&&(a=n.map(sl))}let s,l=r[s=hr(t)]||r[s=hr(He(t))];!l&&i&&(l=r[s=hr(Yt(t))]),l&&Te(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Te(f,e,6,a)}}function Lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=Lo(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):ye(o,i),r.set(e,o),o)}function ya(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Yt(t))||q(e,t))}let Ie=null,Fo=null;function Dn(e){const t=Ie;return Ie=e,Fo=e&&e.type.__scopeId||null,t}function ve(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&oi(-1);const i=Dn(t),o=e(...a);return Dn(i),r._d&&oi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:v,ctx:E,inheritAttrs:z}=e;let O,g;const x=Dn(e);try{if(n.shapeFlag&4){const j=a||r;O=$e(c.call(j,j,d,i,v,h,E)),g=l}else{const j=t;O=$e(j.length>1?j(i,{attrs:l,slots:s,emit:f}):j(i,null)),g=t.props?l:ql(l)}}catch(j){fn.length=0,rr(j,e,1),O=oe(Ht)}let T=O;if(g&&z!==!1){const j=Object.keys(g),{shapeFlag:K}=T;j.length&&K&7&&(o&&j.some(ia)&&(g=Gl(g,o)),T=_n(T,g))}return n.dirs&&(T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),O=T,Dn(x),O}const ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},Gl=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qa(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!ya(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Qa(r,o,f):!0:!!o;return!1}function Qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ya(n,i))return!0}return!1}function Ql({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Jl=e=>e.__isSuspense;function Zl(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Kl(e)}function Tn(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function ut(e,t,n=!1){const r=he||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Ja={};function cn(e,t,n){return $o(e,t,n)}function $o(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=he;let l,f=!1,c=!1;if(pe(e)?(l=()=>e.value,f=xo(e)):jt(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(jt),l=()=>e.map(g=>{if(pe(g))return g.value;if(jt(g))return zt(g);if(B(g))return ft(g,s,2)})):B(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Te(e,s,3,[h])}:l=Me,t&&r){const g=l;l=()=>zt(g())}let d,h=g=>{d=O.onStop=()=>{ft(g,s,4)}};if(wn)return h=Me,t?n&&Te(t,s,3,[l(),c?[]:void 0,h]):l(),Me;let v=c?[]:Ja;const E=()=>{if(!!O.active)if(t){const g=O.run();(r||f||(c?g.some((x,T)=>gn(x,v[T])):gn(g,v)))&&(d&&d(),Te(t,s,3,[g,v===Ja?void 0:v,h]),v=g)}else O.run()};E.allowRecurse=!!t;let z;a==="sync"?z=E:a==="post"?z=()=>_e(E,s&&s.suspense):z=()=>{!s||s.isMounted?Yl(E):E()};const O=new fa(l,z);return t?n?E():v=O.run():a==="post"?_e(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&oa(s.scope.effects,O)}}function ec(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?jo(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=he;Ut(this);const s=$o(a,i.bind(r),n);return o?Ut(o):xt(),s}function jo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t){if(!de(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))zt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(io(e)||$t(e))e.forEach(n=>{zt(n,t)});else if(lo(e))for(const n in e)zt(e[n],t);return e}function Qe(e){return B(e)?{setup:e,name:e.name}:e}const Tr=e=>!!e.type.__asyncLoader,Do=e=>e.type.__isKeepAlive;function tc(e,t){Ho(e,"a",t)}function nc(e,t){Ho(e,"da",t)}function Ho(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Do(a.parent.vnode)&&rc(r,t,n,a),a=a.parent}}function rc(e,t,n,r){const a=ar(t,e,r,!0);Uo(()=>{oa(r[t],a)},n)}function ar(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),Ut(n);const s=Te(t,n,e,o);return xt(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=he)=>(!wn||e==="sp")&&ar(e,t,n),ac=Je("bm"),ic=Je("m"),oc=Je("bu"),sc=Je("u"),lc=Je("bum"),Uo=Je("um"),cc=Je("sp"),fc=Je("rtg"),uc=Je("rtc");function dc(e,t=he){ar("ec",e,t)}let zr=!0;function mc(e){const t=Wo(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:v,updated:E,activated:z,deactivated:O,beforeDestroy:g,beforeUnmount:x,destroyed:T,unmounted:j,render:K,renderTracked:ae,renderTriggered:fe,errorCaptured:Ce,serverPrefetch:me,expose:tt,inheritAttrs:Ue,components:Be,directives:Et,filters:Ct}=t;if(f&&hc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const Q=o[te];B(Q)&&(r[te]=Q.bind(n))}if(a){const te=a.call(n,n);de(te)&&(e.data=An(te))}if(zr=!0,i)for(const te in i){const Q=i[te],we=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):Me,Ot=!B(Q)&&B(Q.set)?Q.set.bind(n):Me,We=ce({get:we,set:Ot});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ne=>We.value=Ne})}if(s)for(const te in s)Bo(s[te],r,n,te);if(l){const te=B(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Q=>{Tn(Q,te[Q])})}c&&Za(c,e,"c");function ue(te,Q){H(Q)?Q.forEach(we=>te(we.bind(n))):Q&&te(Q.bind(n))}if(ue(ac,d),ue(ic,h),ue(oc,v),ue(sc,E),ue(tc,z),ue(nc,O),ue(dc,Ce),ue(uc,ae),ue(fc,fe),ue(lc,x),ue(Uo,j),ue(cc,me),H(tt))if(tt.length){const te=e.exposed||(e.exposed={});tt.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>n[Q],set:we=>n[Q]=we})})}else e.exposed||(e.exposed={});K&&e.render===Me&&(e.render=K),Ue!=null&&(e.inheritAttrs=Ue),Be&&(e.components=Be),Et&&(e.directives=Et)}function hc(e,t,n=Me,r=!1){H(e)&&(e=Nr(e));for(const a in e){const i=e[a];let o;de(i)?"default"in i?o=ut(i.from||a,i.default,!0):o=ut(i.from||a):o=ut(i),pe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Za(e,t,n){Te(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bo(e,t,n,r){const a=r.includes(".")?jo(n,r):()=>n[r];if(ge(e)){const i=t[e];B(i)&&cn(a,i)}else if(B(e))cn(a,e.bind(n));else if(de(e))if(H(e))e.forEach(i=>Bo(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&cn(a,i,e)}}function Wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Hn(l,f,o,!0)),Hn(l,t,o)),i.set(t,l),l}function Hn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Hn(e,i,n,!0),a&&a.forEach(o=>Hn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=pc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const pc={data:ei,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:vt,directives:vt,watch:vc,provide:ei,inject:gc};function ei(e,t){return t?e?function(){return ye(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function gc(e,t){return vt(Nr(e),Nr(t))}function Nr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function vt(e,t){return e?ye(ye(Object.create(null),e),t):t}function vc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function bc(e,t,n,r=!1){const a={},i={};$n(i,ir,1),e.propsDefaults=Object.create(null),Yo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function yc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];const v=t[h];if(l)if(q(i,h))v!==i[h]&&(i[h]=v,f=!0);else{const E=He(h);a[E]=Lr(l,s,E,v,e,!1)}else v!==i[h]&&(i[h]=v,f=!0)}}}else{Yo(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=Yt(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Lr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],f=!0)}f&&Ve(e,"set","$attrs")}function Yo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const f=t[l];let c;a&&q(a,c=He(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:ya(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=G(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Lr(a,l,d,f[d],e,!q(f,d))}}return o}function Lr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ut(a),r=f[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Yt(n))&&(r=!0))}return r}function Ko(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const c=d=>{l=!0;const[h,v]=Ko(d,t,!0);ye(o,h),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Ft),Ft;if(H(i))for(let c=0;c<i.length;c++){const d=He(i[c]);ti(d)&&(o[d]=re)}else if(i)for(const c in i){const d=He(c);if(ti(d)){const h=i[c],v=o[d]=H(h)||B(h)?{type:h}:h;if(v){const E=ai(Boolean,v.type),z=ai(String,v.type);v[0]=E>-1,v[1]=z<0||E<z,(E>-1||q(v,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function ti(e){return e[0]!=="$"}function ni(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ri(e,t){return ni(e)===ni(t)}function ai(e,t){return H(t)?t.findIndex(n=>ri(n,e)):B(t)&&ri(t,e)?0:-1}const Vo=e=>e[0]==="_"||e==="$stable",_a=e=>H(e)?e.map($e):[$e(e)],_c=(e,t,n)=>{const r=ve((...a)=>_a(t(...a)),n);return r._c=!1,r},qo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vo(a))continue;const i=e[a];if(B(i))t[a]=_c(a,i,r);else if(i!=null){const o=_a(i);t[a]=()=>o}}},Go=(e,t)=>{const n=_a(t);e.slots.default=()=>n},wc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),$n(t,"_",n)):qo(t,e.slots={})}else e.slots={},t&&Go(e,t);$n(e.slots,ir,1)},xc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,qo(t,a)),o=t}else t&&(Go(e,t),o={default:1});if(i)for(const s in a)!Vo(s)&&!(s in o)&&delete a[s]};function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Kt(),Te(l,n,8,[e.el,s,e,t]),Vt())}}function Xo(){return{app:null,config:{isNativeTag:tl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kc=0;function Ac(e,t){return function(r,a=null){a!=null&&!de(a)&&(a=null);const i=Xo(),o=new Set;let s=!1;const l=i.app={_uid:kc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Kc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=oe(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,ka(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Fr(e,t,n,r,a=!1){if(H(e)){e.forEach((h,v)=>Fr(h,t&&(H(t)?t[v]:t),n,r,a));return}if(Tr(r)&&!a)return;const i=r.shapeFlag&4?ka(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ge(f)?(c[f]=null,q(d,f)&&(d[f]=null)):pe(f)&&(f.value=null)),B(l))ft(l,s,12,[o,c]);else{const h=ge(l),v=pe(l);if(h||v){const E=()=>{if(e.f){const z=h?c[l]:l.value;a?H(z)&&oa(z,i):H(z)?z.includes(i)||z.push(i):h?c[l]=[i]:(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,q(d,l)&&(d[l]=o)):pe(l)&&(l.value=o,e.k&&(c[e.k]=o))};o?(E.id=-1,_e(E,n)):E()}}}const _e=Zl;function Ec(e){return Cc(e)}function Cc(e,t){const n=ll();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:v=Me,cloneNode:E,insertStaticContent:z}=e,O=(u,m,p,_=null,y=null,A=null,S=!1,k=null,C=!!m.dynamicChildren)=>{if(u===m)return;u&&!Jt(u,m)&&(_=N(u),Pe(u,y,A,!0),u=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:w,ref:L,shapeFlag:R}=m;switch(w){case wa:g(u,m,p,_);break;case Ht:x(u,m,p,_);break;case vr:u==null&&T(m,p,_,S);break;case Oe:Et(u,m,p,_,y,A,S,k,C);break;default:R&1?ae(u,m,p,_,y,A,S,k,C):R&6?Ct(u,m,p,_,y,A,S,k,C):(R&64||R&128)&&w.process(u,m,p,_,y,A,S,k,C,ne)}L!=null&&y&&Fr(L,u&&u.ref,A,m||u,!m)},g=(u,m,p,_)=>{if(u==null)r(m.el=s(m.children),p,_);else{const y=m.el=u.el;m.children!==u.children&&f(y,m.children)}},x=(u,m,p,_)=>{u==null?r(m.el=l(m.children||""),p,_):m.el=u.el},T=(u,m,p,_)=>{[u.el,u.anchor]=z(u.children,m,p,_,u.el,u.anchor)},j=({el:u,anchor:m},p,_)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,_),u=y;r(m,p,_)},K=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},ae=(u,m,p,_,y,A,S,k,C)=>{S=S||m.type==="svg",u==null?fe(m,p,_,y,A,S,k,C):tt(u,m,y,A,S,k,C)},fe=(u,m,p,_,y,A,S,k)=>{let C,w;const{type:L,props:R,shapeFlag:F,transition:D,patchFlag:V,dirs:le}=u;if(u.el&&E!==void 0&&V===-1)C=u.el=E(u.el);else{if(C=u.el=o(u.type,A,R&&R.is,R),F&8?c(C,u.children):F&16&&me(u.children,C,null,_,y,A&&L!=="foreignObject",S,k),le&&pt(u,null,_,"created"),R){for(const ie in R)ie!=="value"&&!Mn(ie)&&i(C,ie,null,R[ie],A,u.children,_,y,P);"value"in R&&i(C,"value",null,R.value),(w=R.onVnodeBeforeMount)&&Fe(w,_,u)}Ce(C,u,u.scopeId,S,_)}le&&pt(u,null,_,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(C),r(C,m,p),((w=R&&R.onVnodeMounted)||Z||le)&&_e(()=>{w&&Fe(w,_,u),Z&&D.enter(C),le&&pt(u,null,_,"mounted")},y)},Ce=(u,m,p,_,y)=>{if(p&&v(u,p),_)for(let A=0;A<_.length;A++)v(u,_[A]);if(y){let A=y.subTree;if(m===A){const S=y.vnode;Ce(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},me=(u,m,p,_,y,A,S,k,C=0)=>{for(let w=C;w<u.length;w++){const L=u[w]=k?st(u[w]):$e(u[w]);O(null,L,m,p,_,y,A,S,k)}},tt=(u,m,p,_,y,A,S)=>{const k=m.el=u.el;let{patchFlag:C,dynamicChildren:w,dirs:L}=m;C|=u.patchFlag&16;const R=u.props||re,F=m.props||re;let D;p&&gt(p,!1),(D=F.onVnodeBeforeUpdate)&&Fe(D,p,m,u),L&&pt(m,u,p,"beforeUpdate"),p&&gt(p,!0);const V=y&&m.type!=="foreignObject";if(w?Ue(u.dynamicChildren,w,k,p,_,V,A):S||we(u,m,k,null,p,_,V,A,!1),C>0){if(C&16)Be(k,m,R,F,p,_,y);else if(C&2&&R.class!==F.class&&i(k,"class",null,F.class,y),C&4&&i(k,"style",R.style,F.style,y),C&8){const le=m.dynamicProps;for(let Z=0;Z<le.length;Z++){const ie=le[Z],Se=R[ie],St=F[ie];(St!==Se||ie==="value")&&i(k,ie,Se,St,y,u.children,p,_,P)}}C&1&&u.children!==m.children&&c(k,m.children)}else!S&&w==null&&Be(k,m,R,F,p,_,y);((D=F.onVnodeUpdated)||L)&&_e(()=>{D&&Fe(D,p,m,u),L&&pt(m,u,p,"updated")},_)},Ue=(u,m,p,_,y,A,S)=>{for(let k=0;k<m.length;k++){const C=u[k],w=m[k],L=C.el&&(C.type===Oe||!Jt(C,w)||C.shapeFlag&70)?d(C.el):p;O(C,w,L,null,_,y,A,S,!0)}},Be=(u,m,p,_,y,A,S)=>{if(p!==_){for(const k in _){if(Mn(k))continue;const C=_[k],w=p[k];C!==w&&k!=="value"&&i(u,k,w,C,S,m.children,y,A,P)}if(p!==re)for(const k in p)!Mn(k)&&!(k in _)&&i(u,k,p[k],null,S,m.children,y,A,P);"value"in _&&i(u,"value",p.value,_.value)}},Et=(u,m,p,_,y,A,S,k,C)=>{const w=m.el=u?u.el:s(""),L=m.anchor=u?u.anchor:s("");let{patchFlag:R,dynamicChildren:F,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,p,_),r(L,p,_),me(m.children,p,L,y,A,S,k,C)):R>0&&R&64&&F&&u.dynamicChildren?(Ue(u.dynamicChildren,F,p,y,A,S,k),(m.key!=null||y&&m===y.subTree)&&Qo(u,m,!0)):we(u,m,p,L,y,A,S,k,C)},Ct=(u,m,p,_,y,A,S,k,C)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,_,S,C):Pt(m,p,_,y,A,S,C):ue(u,m,C)},Pt=(u,m,p,_,y,A,S)=>{const k=u.component=jc(u,_,y);if(Do(u)&&(k.ctx.renderer=ne),Dc(k),k.asyncDep){if(y&&y.registerDep(k,te),!u.el){const C=k.subTree=oe(Ht);x(null,C,m,p)}return}te(k,u,m,p,y,A,S)},ue=(u,m,p)=>{const _=m.component=u.component;if(Xl(u,m,p))if(_.asyncDep&&!_.asyncResolved){Q(_,m,p);return}else _.next=m,Wl(_.update),_.update();else m.component=u.component,m.el=u.el,_.vnode=m},te=(u,m,p,_,y,A,S)=>{const k=()=>{if(u.isMounted){let{next:L,bu:R,u:F,parent:D,vnode:V}=u,le=L,Z;gt(u,!1),L?(L.el=V.el,Q(u,L,S)):L=V,R&&pr(R),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&Fe(Z,D,L,V),gt(u,!0);const ie=gr(u),Se=u.subTree;u.subTree=ie,O(Se,ie,d(Se.el),N(Se),u,y,A),L.el=ie.el,le===null&&Ql(u,ie.el),F&&_e(F,y),(Z=L.props&&L.props.onVnodeUpdated)&&_e(()=>Fe(Z,D,L,V),y)}else{let L;const{el:R,props:F}=m,{bm:D,m:V,parent:le}=u,Z=Tr(m);if(gt(u,!1),D&&pr(D),!Z&&(L=F&&F.onVnodeBeforeMount)&&Fe(L,le,m),gt(u,!0),R&&U){const ie=()=>{u.subTree=gr(u),U(R,u.subTree,u,y,null)};Z?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=gr(u);O(null,ie,p,_,u,y,A),m.el=ie.el}if(V&&_e(V,y),!Z&&(L=F&&F.onVnodeMounted)){const ie=m;_e(()=>Fe(L,le,ie),y)}m.shapeFlag&256&&u.a&&_e(u.a,y),u.isMounted=!0,m=p=_=null}},C=u.effect=new fa(k,()=>Ro(u.update),u.scope),w=u.update=C.run.bind(C);w.id=u.uid,gt(u,!0),w()},Q=(u,m,p)=>{m.component=u;const _=u.vnode.props;u.vnode=m,u.next=null,yc(u,m.props,_,p),xc(u,m.children,p),Kt(),ba(void 0,u.update),Vt()},we=(u,m,p,_,y,A,S,k,C=!1)=>{const w=u&&u.children,L=u?u.shapeFlag:0,R=m.children,{patchFlag:F,shapeFlag:D}=m;if(F>0){if(F&128){We(w,R,p,_,y,A,S,k,C);return}else if(F&256){Ot(w,R,p,_,y,A,S,k,C);return}}D&8?(L&16&&P(w,y,A),R!==w&&c(p,R)):L&16?D&16?We(w,R,p,_,y,A,S,k,C):P(w,y,A,!0):(L&8&&c(p,""),D&16&&me(R,p,_,y,A,S,k,C))},Ot=(u,m,p,_,y,A,S,k,C)=>{u=u||Ft,m=m||Ft;const w=u.length,L=m.length,R=Math.min(w,L);let F;for(F=0;F<R;F++){const D=m[F]=C?st(m[F]):$e(m[F]);O(u[F],D,p,null,y,A,S,k,C)}w>L?P(u,y,A,!0,!1,R):me(m,p,_,y,A,S,k,C,R)},We=(u,m,p,_,y,A,S,k,C)=>{let w=0;const L=m.length;let R=u.length-1,F=L-1;for(;w<=R&&w<=F;){const D=u[w],V=m[w]=C?st(m[w]):$e(m[w]);if(Jt(D,V))O(D,V,p,null,y,A,S,k,C);else break;w++}for(;w<=R&&w<=F;){const D=u[R],V=m[F]=C?st(m[F]):$e(m[F]);if(Jt(D,V))O(D,V,p,null,y,A,S,k,C);else break;R--,F--}if(w>R){if(w<=F){const D=F+1,V=D<L?m[D].el:_;for(;w<=F;)O(null,m[w]=C?st(m[w]):$e(m[w]),p,V,y,A,S,k,C),w++}}else if(w>F)for(;w<=R;)Pe(u[w],y,A,!0),w++;else{const D=w,V=w,le=new Map;for(w=V;w<=F;w++){const xe=m[w]=C?st(m[w]):$e(m[w]);xe.key!=null&&le.set(xe.key,w)}let Z,ie=0;const Se=F-V+1;let St=!1,Da=0;const Qt=new Array(Se);for(w=0;w<Se;w++)Qt[w]=0;for(w=D;w<=R;w++){const xe=u[w];if(ie>=Se){Pe(xe,y,A,!0);continue}let Le;if(xe.key!=null)Le=le.get(xe.key);else for(Z=V;Z<=F;Z++)if(Qt[Z-V]===0&&Jt(xe,m[Z])){Le=Z;break}Le===void 0?Pe(xe,y,A,!0):(Qt[Le-V]=w+1,Le>=Da?Da=Le:St=!0,O(xe,m[Le],p,null,y,A,S,k,C),ie++)}const Ha=St?Pc(Qt):Ft;for(Z=Ha.length-1,w=Se-1;w>=0;w--){const xe=V+w,Le=m[xe],Ua=xe+1<L?m[xe+1].el:_;Qt[w]===0?O(null,Le,p,Ua,y,A,S,k,C):St&&(Z<0||w!==Ha[Z]?Ne(Le,p,Ua,2):Z--)}}},Ne=(u,m,p,_,y=null)=>{const{el:A,type:S,transition:k,children:C,shapeFlag:w}=u;if(w&6){Ne(u.component.subTree,m,p,_);return}if(w&128){u.suspense.move(m,p,_);return}if(w&64){S.move(u,m,p,ne);return}if(S===Oe){r(A,m,p);for(let R=0;R<C.length;R++)Ne(C[R],m,p,_);r(u.anchor,m,p);return}if(S===vr){j(u,m,p);return}if(_!==2&&w&1&&k)if(_===0)k.beforeEnter(A),r(A,m,p),_e(()=>k.enter(A),y);else{const{leave:R,delayLeave:F,afterLeave:D}=k,V=()=>r(A,m,p),le=()=>{R(A,()=>{V(),D&&D()})};F?F(A,V,le):le()}else r(A,m,p)},Pe=(u,m,p,_=!1,y=!1)=>{const{type:A,props:S,ref:k,children:C,dynamicChildren:w,shapeFlag:L,patchFlag:R,dirs:F}=u;if(k!=null&&Fr(k,null,p,u,!0),L&256){m.ctx.deactivate(u);return}const D=L&1&&F,V=!Tr(u);let le;if(V&&(le=S&&S.onVnodeBeforeUnmount)&&Fe(le,m,u),L&6)M(u.component,p,_);else{if(L&128){u.suspense.unmount(p,_);return}D&&pt(u,null,m,"beforeUnmount"),L&64?u.type.remove(u,m,p,y,ne,_):w&&(A!==Oe||R>0&&R&64)?P(w,m,p,!1,!0):(A===Oe&&R&384||!y&&L&16)&&P(C,m,p),_&&mr(u)}(V&&(le=S&&S.onVnodeUnmounted)||D)&&_e(()=>{le&&Fe(le,m,u),D&&pt(u,null,m,"unmounted")},p)},mr=u=>{const{type:m,el:p,anchor:_,transition:y}=u;if(m===Oe){b(p,_);return}if(m===vr){K(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,C=()=>S(p,A);k?k(u.el,A,C):C()}else A()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},M=(u,m,p)=>{const{bum:_,scope:y,update:A,subTree:S,um:k}=u;_&&pr(_),y.stop(),A&&(A.active=!1,Pe(S,u,m,p)),k&&_e(k,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,_=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Pe(u[S],m,p,_,y)},N=u=>u.shapeFlag&6?N(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),J=(u,m,p)=>{u==null?m._vnode&&Pe(m._vnode,null,null,!0):O(m._vnode||null,u,m,null,null,null,p),zo(),m._vnode=u},ne={p:O,um:Pe,m:Ne,r:mr,mt:Pt,mc:me,pc:we,pbc:Ue,n:N,o:e};let W,U;return t&&([W,U]=t(ne)),{render:J,hydrate:W,createApp:Ac(J,W)}}function gt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qo(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||Qo(o,s))}}function Pc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Oc=e=>e.__isTeleport,Jo="components";function Sc(e,t){return Rc(Jo,e,!0,t)||e}const Ic=Symbol();function Rc(e,t,n=!0,r=!1){const a=Ie||he;if(a){const i=a.type;if(e===Jo){const s=Wc(i);if(s&&(s===t||s===He(t)||s===tr(He(t))))return i}const o=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!o&&r?i:o}}function ii(e,t){return e&&(e[t]||e[He(t)]||e[tr(He(t))])}const Oe=Symbol(void 0),wa=Symbol(void 0),Ht=Symbol(void 0),vr=Symbol(void 0),fn=[];let wt=null;function ze(e=!1){fn.push(wt=e?null:[])}function Mc(){fn.pop(),wt=fn[fn.length-1]||null}let Un=1;function oi(e){Un+=e}function Zo(e){return e.dynamicChildren=Un>0?wt||Ft:null,Mc(),Un>0&&wt&&wt.push(e),e}function Ze(e,t,n,r,a,i){return Zo(Y(e,t,n,r,a,i,!0))}function es(e,t,n,r,a){return Zo(oe(e,t,n,r,a,!0))}function Bn(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",ts=({key:e})=>e!=null?e:null,zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||pe(e)||B(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function Y(e,t=null,n=null,r=0,a=null,i=e===Oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ts(t),ref:t&&zn(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(xa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Un>0&&!o&&wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&wt.push(l),l}const oe=Tc;function Tc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ic)&&(e=Ht),Bn(e)){const s=_n(e,t,!0);return n&&xa(s,n),s}if(Yc(e)&&(e=e.__vccOpts),t){t=zc(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=aa(s)),de(l)&&(ko(l)&&!H(l)&&(l=ye({},l)),t.style=ra(l))}const o=ge(e)?1:Jl(e)?128:Oc(e)?64:de(e)?4:B(e)?2:0;return Y(e,t,n,r,a,o,i,!0)}function zc(e){return e?ko(e)||ir in e?ye({},e):e:null}function _n(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Nc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ts(s),ref:t&&t.ref?n&&a?H(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_n(e.ssContent),ssFallback:e.ssFallback&&_n(e.ssFallback),el:e.el,anchor:e.anchor}}function X(e=" ",t=0){return oe(wa,null,e,t)}function $e(e){return e==null||typeof e=="boolean"?oe(Ht):H(e)?oe(Oe,null,e.slice()):typeof e=="object"?st(e):oe(wa,null,String(e))}function st(e){return e.el===null||e.memo?e:_n(e)}function xa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),xa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[X(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=aa([t.class,r.class]));else if(a==="style")t.style=ra([t.style,r.style]);else if(Jn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Fe(e,t,n,r=null){Te(e,t,7,[n,r])}function br(e,t,n={},r,a){if(Ie.isCE)return oe("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),ze();const o=i&&ns(i(n)),s=es(Oe,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function ns(e){return e.some(t=>Bn(t)?!(t.type===Ht||t.type===Oe&&!ns(t.children)):!0)?e:null}const $r=e=>e?rs(e)?ka(e)||e.proxy:$r(e.parent):null,Wn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$emit:e=>e.emit,$options:e=>Wo(e),$forceUpdate:e=>()=>Ro(e.update),$nextTick:e=>Io.bind(e.proxy),$watch:e=>ec.bind(e)}),Lc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==re&&q(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const c=Wn[t];let d,h;if(c)return t==="$attrs"&&Ae(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==re&&q(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||t!==re&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(Wn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Fc=Xo();let $c=0;function jc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Fc,i={uid:$c++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ko(r,a),emitsOptions:Lo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vl.bind(null,i),e.ce&&e.ce(i),i}let he=null;const Ut=e=>{he=e,e.scope.on()},xt=()=>{he&&he.scope.off(),he=null};function rs(e){return e.vnode.shapeFlag&4}let wn=!1;function Dc(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,a=rs(e);bc(e,n,a,t),wc(e,r);const i=a?Hc(e,t):void 0;return wn=!1,i}function Hc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=pa(new Proxy(e.ctx,Lc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Bc(e):null;Ut(e),Kt();const i=ft(r,e,0,[e.props,a]);if(Vt(),xt(),oo(i)){if(i.then(xt,xt),t)return i.then(o=>{si(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=i}else si(e,i,t)}else as(e,t)}function si(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=Oo(t)),as(e,n)}let li;function as(e,t,n){const r=e.type;if(!e.render){if(!t&&li&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=li(a,f)}}e.render=r.render||Me}Ut(e),Kt(),mc(e),Vt(),xt()}function Uc(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function Bc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Uc(e))},slots:e.slots,emit:e.emit,expose:t}}function ka(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oo(pa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)}}))}function Wc(e){return B(e)&&e.displayName||e.name}function Yc(e){return B(e)&&"__vccOpts"in e}const ce=(e,t)=>Hl(e,t,wn);function or(e,t,n){const r=arguments.length;return r===2?de(t)&&!H(t)?Bn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bn(n)&&(n=[n]),oe(e,t,n))}const Kc="3.2.31",Vc="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,ci=bt&&bt.createElement("template"),qc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS(Vc,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Xc(e,t,n){const r=e.style,a=ge(n);if(n&&!a){for(const i in n)jr(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&jr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const fi=/\s*!important$/;function jr(e,t,n){if(H(n))n.forEach(r=>jr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Qc(e,t);fi.test(n)?e.setProperty(Yt(r),n.replace(fi,""),"important"):e[r]=n}}const ui=["Webkit","Moz","ms"],yr={};function Qc(e,t){const n=yr[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return yr[t]=r;r=tr(r);for(let a=0;a<ui.length;a++){const i=ui[a]+r;if(i in e)return yr[t]=i}return t}const di="http://www.w3.org/1999/xlink";function Jc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n);else{const i=Qs(t);n==null||i&&!ro(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=ro(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Yn=Date.now,is=!1;if(typeof window!="undefined"){Yn()>document.createEvent("Event").timeStamp&&(Yn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);is=!!(e&&Number(e[1])<=53)}let Dr=0;const ef=Promise.resolve(),tf=()=>{Dr=0},nf=()=>Dr||(ef.then(tf),Dr=Yn());function rf(e,t,n,r){e.addEventListener(t,n,r)}function af(e,t,n,r){e.removeEventListener(t,n,r)}function of(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=sf(t);if(r){const f=i[t]=lf(r,a);rf(e,s,f,l)}else o&&(af(e,s,o,l),i[t]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function sf(e){let t;if(mi.test(e)){t={};let n;for(;n=e.match(mi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Yt(e.slice(2)),t]}function lf(e,t){const n=r=>{const a=r.timeStamp||Yn();(is||a>=n.attached-1)&&Te(cf(r,n.value),t,5,[r])};return n.value=e,n.attached=nf(),n}function cf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const hi=/^on[a-z]/,ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Gc(e,r,a):t==="style"?Xc(e,n,r):Jn(t)?ia(t)||of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uf(e,t,r,a))?Zc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jc(e,t,r,a))};function uf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&hi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hi.test(t)&&ge(n)?!1:t in e}const df=ye({patchProp:ff},qc);let pi;function mf(){return pi||(pi=Ec(df))}const hf=(...e)=>{const t=mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=pf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function pf(e){return ge(e)?document.querySelector(e):e}var gf=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const vf=Symbol();var gi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(gi||(gi={}));function bf(){const e=cl(!0),t=e.run(()=>Co({}));let n=[],r=[];const a=pa({install(i){a._a=i,i.provide(vf,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!gf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const yf={class:"header"},_f={class:"author"},wf={class:"center"},xf=Y("span",{class:"title"},"This site is",-1),kf=Y("span",{class:"content"},"Coming Soon",-1),Af={class:"social"},Ef={href:"https://github.com/ted-v9n",target:"blank"},Cf=Qe({props:{author:null,year:null},setup(e){return(t,n)=>{const r=Sc("font-awesome-icon");return ze(),Ze("div",null,[Y("div",yf,[Y("h1",_f,Ba(e.author)+" - "+Ba(e.year),1)]),Y("div",wf,[xf,kf,Y("div",Af,[Y("ul",null,[Y("li",null,[Y("a",Ef,[oe(r,{icon:["fab","github"]})])])])])])])}}});const Pf=Qe({setup(e){return(t,n)=>(ze(),es(Cf,{author:"Nh\u01A1n V\xF5",year:"2022"}))}}),Of="modulepreload",vi={},Sf="/",If=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Sf}${r}`,r in vi)return;vi[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Of,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qt=e=>os?Symbol(e):"_vr_"+e,Rf=qt("rvlm"),bi=qt("rvd"),Aa=qt("r"),ss=qt("rl"),Hr=qt("rvl"),Tt=typeof window!="undefined";function Mf(e){return e.__esModule||os&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function _r(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const un=()=>{},Tf=/\/$/,zf=e=>e.replace(Tf,"");function wr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=$f(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Nf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Lf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Bt(t.matched[r],n.matched[a])&&ls(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ls(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ff(e[n],t[n]))return!1;return!0}function Ff(e,t){return Array.isArray(e)?_i(e,t):Array.isArray(t)?_i(t,e):e===t}function _i(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $f(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var xn;(function(e){e.pop="pop",e.push="push"})(xn||(xn={}));var dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dn||(dn={}));function jf(e){if(!e)if(Tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zf(e)}const Df=/^[^#]+#/;function Hf(e,t){return e.replace(Df,"#")+t}function Uf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Uf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function wi(e,t){return(history.state?history.state.position-t:-1)+e}const Ur=new Map;function Wf(e,t){Ur.set(e,t)}function Yf(e){const t=Ur.get(e);return Ur.delete(e),t}let Kf=()=>location.protocol+"//"+location.host;function cs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),yi(l,"")}return yi(n,e)+r+a}function Vf(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const v=cs(e,location),E=n.value,z=t.value;let O=0;if(h){if(n.value=v,t.value=h,o&&o===E){o=null;return}O=z?h.position-z.position:0}else r(v);a.forEach(g=>{g(n.value,E,{delta:O,type:xn.pop,direction:O?O>0?dn.forward:dn.back:dn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const v=()=>{const E=a.indexOf(h);E>-1&&a.splice(E,1)};return i.push(v),v}function c(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:sr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function xi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?sr():null}}function qf(e){const{history:t,location:n}=window,r={value:cs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Kf()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(v){console.error(v),n[c?"replace":"assign"](h)}}function o(l,f){const c=ee({},t.state,xi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=ee({},a.value,t.state,{forward:l,scroll:sr()});i(c.current,c,!0);const d=ee({},xi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Gf(e){e=jf(e);const t=qf(e),n=Vf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ee({location:"",base:e,go:r,createHref:Hf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Xf(e){return typeof e=="string"||e&&typeof e=="object"}function fs(e){return typeof e=="string"||typeof e=="symbol"}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},us=qt("nf");var ki;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ki||(ki={}));function Wt(e,t){return ee(new Error,{type:e,[us]:!0},t)}function at(e,t){return e instanceof Error&&us in e&&(t==null||!!(e.type&t))}const Ai="[^/]+?",Qf={sensitive:!1,strict:!1,start:!0,end:!0},Jf=/[.+*?^${}()[\]/\\]/g;function Zf(e,t){const n=ee({},Qf,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Jf,"\\$&"),v+=40;else if(h.type===1){const{value:E,repeatable:z,optional:O,regexp:g}=h;i.push({name:E,repeatable:z,optional:O});const x=g||Ai;if(x!==Ai){v+=10;try{new RegExp(`(${x})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${E}" (${x}): `+j.message)}}let T=z?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(T=O&&f.length<2?`(?:/${T})`:"/"+T),O&&(T+="?"),a+=T,v+=20,O&&(v+=-8),z&&(v+=-20),x===".*"&&(v+=-50)}c.push(v)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const v=c[h]||"",E=i[h-1];d[E.name]=v&&E.repeatable?v.split("/"):v}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of h)if(v.type===0)c+=v.value;else if(v.type===1){const{value:E,repeatable:z,optional:O}=v,g=E in f?f[E]:"";if(Array.isArray(g)&&!z)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(g)?g.join("/"):g;if(!x)if(O)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);c+=x}}return c}return{re:o,score:r,keys:i,parse:s,stringify:l}}function eu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function tu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=eu(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const nu={type:0,value:""},ru=/[a-zA-Z0-9_]/;function au(e){if(!e)return[[]];if(e==="/")return[[nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${f}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:ru.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function iu(e,t,n){const r=Zf(au(e.path),n),a=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function ou(e,t){const n=[],r=new Map;t=Ci({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const v=!h,E=lu(c);E.aliasOf=h&&h.record;const z=Ci(t,c),O=[E];if("alias"in c){const T=typeof c.alias=="string"?[c.alias]:c.alias;for(const j of T)O.push(ee({},E,{components:h?h.record.components:E.components,path:j,aliasOf:h?h.record:E}))}let g,x;for(const T of O){const{path:j}=T;if(d&&j[0]!=="/"){const K=d.record.path,ae=K[K.length-1]==="/"?"":"/";T.path=d.record.path+(j&&ae+j)}if(g=iu(T,d,z),h?h.alias.push(g):(x=x||g,x!==g&&x.alias.push(g),v&&c.name&&!Ei(g)&&o(c.name)),"children"in E){const K=E.children;for(let ae=0;ae<K.length;ae++)i(K[ae],g,h&&h.children[ae])}h=h||g,l(g)}return x?()=>{o(x)}:un}function o(c){if(fs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&tu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!ds(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Ei(c)&&r.set(c.record.name,c)}function f(c,d){let h,v={},E,z;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Wt(1,{location:c});z=h.record.name,v=ee(su(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),c.params),E=h.stringify(v)}else if("path"in c)E=c.path,h=n.find(x=>x.re.test(E)),h&&(v=h.parse(E),z=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw Wt(1,{location:c,currentLocation:d});z=h.record.name,v=ee({},d.params,c.params),E=h.stringify(v)}const O=[];let g=h;for(;g;)O.unshift(g.record),g=g.parent;return{name:z,path:E,params:v,matched:O,meta:fu(O)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function su(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function lu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:cu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function cu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ei(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fu(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Ci(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ds(e,t){return t.children.some(n=>n===e||ds(e,n))}const ms=/#/g,uu=/&/g,du=/\//g,mu=/=/g,hu=/\?/g,hs=/\+/g,pu=/%5B/g,gu=/%5D/g,ps=/%5E/g,vu=/%60/g,gs=/%7B/g,bu=/%7C/g,vs=/%7D/g,yu=/%20/g;function Ea(e){return encodeURI(""+e).replace(bu,"|").replace(pu,"[").replace(gu,"]")}function _u(e){return Ea(e).replace(gs,"{").replace(vs,"}").replace(ps,"^")}function Br(e){return Ea(e).replace(hs,"%2B").replace(yu,"+").replace(ms,"%23").replace(uu,"%26").replace(vu,"`").replace(gs,"{").replace(vs,"}").replace(ps,"^")}function wu(e){return Br(e).replace(mu,"%3D")}function xu(e){return Ea(e).replace(ms,"%23").replace(hu,"%3F")}function ku(e){return e==null?"":xu(e).replace(du,"%2F")}function Kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Au(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(hs," "),o=i.indexOf("="),s=Kn(o<0?i:i.slice(0,o)),l=o<0?null:Kn(i.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Pi(e){let t="";for(let n in e){const r=e[n];if(n=wu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Br(i)):[r&&Br(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Eu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Zt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Wt(4,{from:n,to:t})):d instanceof Error?s(d):Xf(d)?s(Wt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function xr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Cu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(lt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Mf(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&lt(h,n,r,i,o)()}))}}return a}function Cu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oi(e){const t=ut(Aa),n=ut(ss),r=ce(()=>t.resolve(on(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Bt.bind(null,c));if(h>-1)return h;const v=Si(l[f-2]);return f>1&&Si(c)===v&&d[d.length-1].path!==v?d.findIndex(Bt.bind(null,l[f-2])):h}),i=ce(()=>a.value>-1&&Iu(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&ls(n.params,r.value.params));function s(l={}){return Su(l)?t[on(e.replace)?"replace":"push"](on(e.to)).catch(un):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Pu=Qe({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oi,setup(e,{slots:t}){const n=An(Oi(e)),{options:r}=ut(Aa),a=ce(()=>({[Ii(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ii(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Ou=Pu;function Su(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Iu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Si(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ii=(e,t,n)=>e!=null?e:t!=null?t:n,Ru=Qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=ut(Hr),a=ce(()=>e.route||r.value),i=ut(bi,0),o=ce(()=>a.value.matched[i]);Tn(bi,i+1),Tn(Rf,o),Tn(Hr,a);const s=Co();return cn(()=>[s.value,o.value,e.name],([l,f,c],[d,h,v])=>{f&&(f.instances[c]=l,h&&h!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),l&&f&&(!h||!Bt(f,h)||!d)&&(f.enterCallbacks[c]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=a.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return Ri(n.default,{Component:c,route:l});const h=f.props[e.name],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,z=or(c,ee({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return Ri(n.default,{Component:z,route:l})||z}}});function Ri(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Mu=Ru;function Tu(e){const t=ou(e.routes,e),n=e.parseQuery||Au,r=e.stringifyQuery||Pi,a=e.history,i=Zt(),o=Zt(),s=Zt(),l=Fl(rt);let f=rt;Tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=_r.bind(null,b=>""+b),d=_r.bind(null,ku),h=_r.bind(null,Kn);function v(b,M){let P,N;return fs(b)?(P=t.getRecordMatcher(b),N=M):N=b,t.addRoute(N,P)}function E(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function z(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function g(b,M){if(M=ee({},M||l.value),typeof b=="string"){const U=wr(n,b,M.path),u=t.resolve({path:U.path},M),m=a.createHref(U.fullPath);return ee(U,u,{params:h(u.params),hash:Kn(U.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=ee({},b,{path:wr(n,b.path,M.path).path});else{const U=ee({},b.params);for(const u in U)U[u]==null&&delete U[u];P=ee({},b,{params:d(b.params)}),M.params=d(M.params)}const N=t.resolve(P,M),J=b.hash||"";N.params=c(h(N.params));const ne=Nf(r,ee({},b,{hash:_u(J),path:N.path})),W=a.createHref(ne);return ee({fullPath:ne,hash:J,query:r===Pi?Eu(b.query):b.query||{}},N,{redirectedFrom:void 0,href:W})}function x(b){return typeof b=="string"?wr(n,b,l.value.path):ee({},b)}function T(b,M){if(f!==b)return Wt(8,{from:M,to:b})}function j(b){return fe(b)}function K(b){return j(ee(x(b),{replace:!0}))}function ae(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let N=typeof P=="function"?P(b):P;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=x(N):{path:N},N.params={}),ee({query:b.query,hash:b.hash,params:b.params},N)}}function fe(b,M){const P=f=g(b),N=l.value,J=b.state,ne=b.force,W=b.replace===!0,U=ae(P);if(U)return fe(ee(x(U),{state:J,force:ne,replace:W}),M||P);const u=P;u.redirectedFrom=M;let m;return!ne&&Lf(r,N,P)&&(m=Wt(16,{to:u,from:N}),Ot(N,N,!0,!1)),(m?Promise.resolve(m):me(u,N)).catch(p=>at(p)?at(p,2)?p:we(p):te(p,u,N)).then(p=>{if(p){if(at(p,2))return fe(ee(x(p.to),{state:J,force:ne,replace:W}),M||u)}else p=Ue(u,N,!0,W,J);return tt(u,N,p),p})}function Ce(b,M){const P=T(b,M);return P?Promise.reject(P):Promise.resolve()}function me(b,M){let P;const[N,J,ne]=zu(b,M);P=xr(N.reverse(),"beforeRouteLeave",b,M);for(const U of N)U.leaveGuards.forEach(u=>{P.push(lt(u,b,M))});const W=Ce.bind(null,b,M);return P.push(W),It(P).then(()=>{P=[];for(const U of i.list())P.push(lt(U,b,M));return P.push(W),It(P)}).then(()=>{P=xr(J,"beforeRouteUpdate",b,M);for(const U of J)U.updateGuards.forEach(u=>{P.push(lt(u,b,M))});return P.push(W),It(P)}).then(()=>{P=[];for(const U of b.matched)if(U.beforeEnter&&!M.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)P.push(lt(u,b,M));else P.push(lt(U.beforeEnter,b,M));return P.push(W),It(P)}).then(()=>(b.matched.forEach(U=>U.enterCallbacks={}),P=xr(ne,"beforeRouteEnter",b,M),P.push(W),It(P))).then(()=>{P=[];for(const U of o.list())P.push(lt(U,b,M));return P.push(W),It(P)}).catch(U=>at(U,8)?U:Promise.reject(U))}function tt(b,M,P){for(const N of s.list())N(b,M,P)}function Ue(b,M,P,N,J){const ne=T(b,M);if(ne)return ne;const W=M===rt,U=Tt?history.state:{};P&&(N||W?a.replace(b.fullPath,ee({scroll:W&&U&&U.scroll},J)):a.push(b.fullPath,J)),l.value=b,Ot(b,M,P,W),we()}let Be;function Et(){Be=a.listen((b,M,P)=>{const N=g(b),J=ae(N);if(J){fe(ee(J,{replace:!0}),N).catch(un);return}f=N;const ne=l.value;Tt&&Wf(wi(ne.fullPath,P.delta),sr()),me(N,ne).catch(W=>at(W,12)?W:at(W,2)?(fe(W.to,N).then(U=>{at(U,20)&&!P.delta&&P.type===xn.pop&&a.go(-1,!1)}).catch(un),Promise.reject()):(P.delta&&a.go(-P.delta,!1),te(W,N,ne))).then(W=>{W=W||Ue(N,ne,!1),W&&(P.delta?a.go(-P.delta,!1):P.type===xn.pop&&at(W,20)&&a.go(-1,!1)),tt(N,ne,W)}).catch(un)})}let Ct=Zt(),Pt=Zt(),ue;function te(b,M,P){we(b);const N=Pt.list();return N.length?N.forEach(J=>J(b,M,P)):console.error(b),Promise.reject(b)}function Q(){return ue&&l.value!==rt?Promise.resolve():new Promise((b,M)=>{Ct.add([b,M])})}function we(b){return ue||(ue=!b,Et(),Ct.list().forEach(([M,P])=>b?P(b):M()),Ct.reset()),b}function Ot(b,M,P,N){const{scrollBehavior:J}=e;if(!Tt||!J)return Promise.resolve();const ne=!P&&Yf(wi(b.fullPath,0))||(N||!P)&&history.state&&history.state.scroll||null;return Io().then(()=>J(b,M,ne)).then(W=>W&&Bf(W)).catch(W=>te(W,b,M))}const We=b=>a.go(b);let Ne;const Pe=new Set;return{currentRoute:l,addRoute:v,removeRoute:E,hasRoute:O,getRoutes:z,resolve:g,options:e,push:j,replace:K,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Pt.add,isReady:Q,install(b){const M=this;b.component("RouterLink",Ou),b.component("RouterView",Mu),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>on(l)}),Tt&&!Ne&&l.value===rt&&(Ne=!0,j(a.location).catch(J=>{}));const P={};for(const J in rt)P[J]=ce(()=>l.value[J]);b.provide(Aa,M),b.provide(ss,An(P)),b.provide(Hr,l);const N=b.unmount;Pe.add(b),b.unmount=function(){Pe.delete(b),Pe.size<1&&(f=rt,Be&&Be(),l.value=rt,Ne=!1,ue=!1),N()}}}}function It(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function zu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Bt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Bt(f,l))||a.push(l))}return[n,r,a]}var Gt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Nu={},Lu={class:"item"},Fu={class:"details"};function $u(e,t){return ze(),Ze("div",Lu,[Y("i",null,[br(e.$slots,"icon",{},void 0,!0)]),Y("div",Fu,[Y("h3",null,[br(e.$slots,"heading",{},void 0,!0)]),br(e.$slots,"default",{},void 0,!0)])])}var en=Gt(Nu,[["render",$u],["__scopeId","data-v-7a6fe88e"]]);const ju={},Du={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Hu=Y("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Uu=[Hu];function Bu(e,t){return ze(),Ze("svg",Du,Uu)}var Wu=Gt(ju,[["render",Bu]]);const Yu={},Ku={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Vu=Y("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),qu=[Vu];function Gu(e,t){return ze(),Ze("svg",Ku,qu)}var Xu=Gt(Yu,[["render",Gu]]);const Qu={},Ju={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Zu=Y("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),ed=[Zu];function td(e,t){return ze(),Ze("svg",Ju,ed)}var nd=Gt(Qu,[["render",td]]);const rd={},ad={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},id=Y("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),od=[id];function sd(e,t){return ze(),Ze("svg",ad,od)}var ld=Gt(rd,[["render",sd]]);const cd={},fd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},ud=Y("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),dd=[ud];function md(e,t){return ze(),Ze("svg",fd,dd)}var hd=Gt(cd,[["render",md]]);const pd=X("Documentation"),gd=X(" Vue\u2019s "),vd=Y("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),bd=X(" provides you with all information you need to get started. "),yd=X("Tooling"),_d=X(" This project is served and bundled with "),wd=Y("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),xd=X(". The recommended IDE setup is "),kd=Y("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),Ad=X(" + "),Ed=Y("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),Cd=X(". If you need to test your components and web pages, check out "),Pd=Y("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),Od=X(" and "),Sd=Y("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),Id=X(". "),Rd=Y("br",null,null,-1),Md=X(" More instructions are available in "),Td=Y("code",null,"README.md",-1),zd=X(". "),Nd=X("Ecosystem"),Ld=X(" Get official tools and libraries for your project: "),Fd=Y("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),$d=X(", "),jd=Y("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),Dd=X(", "),Hd=Y("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),Ud=X(", and "),Bd=Y("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),Wd=X(". If you need more resources, we suggest paying "),Yd=Y("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),Kd=X(" a visit. "),Vd=X("Community"),qd=X(" Got stuck? Ask your question on "),Gd=Y("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),Xd=X(", our official Discord server, or "),Qd=Y("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),Jd=X(". You should also subscribe to "),Zd=Y("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),em=X(" and follow the official "),tm=Y("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),nm=X(" twitter account for latest news in the Vue world. "),rm=X("Support Vue"),am=X(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),im=Y("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),om=X(". "),sm=Qe({setup(e){return(t,n)=>(ze(),Ze(Oe,null,[oe(en,null,{icon:ve(()=>[oe(Wu)]),heading:ve(()=>[pd]),default:ve(()=>[gd,vd,bd]),_:1}),oe(en,null,{icon:ve(()=>[oe(Xu)]),heading:ve(()=>[yd]),default:ve(()=>[_d,wd,xd,kd,Ad,Ed,Cd,Pd,Od,Sd,Id,Rd,Md,Td,zd]),_:1}),oe(en,null,{icon:ve(()=>[oe(nd)]),heading:ve(()=>[Nd]),default:ve(()=>[Ld,Fd,$d,jd,Dd,Hd,Ud,Bd,Wd,Yd,Kd]),_:1}),oe(en,null,{icon:ve(()=>[oe(ld)]),heading:ve(()=>[Vd]),default:ve(()=>[qd,Gd,Xd,Qd,Jd,Zd,em,tm,nm]),_:1}),oe(en,null,{icon:ve(()=>[oe(hd)]),heading:ve(()=>[rm]),default:ve(()=>[am,im,om]),_:1})],64))}}),lm=Qe({setup(e){return(t,n)=>(ze(),Ze("main",null,[oe(sm)]))}}),cm=Tu({history:Gf("/"),routes:[{path:"/",name:"home",component:lm},{path:"/about",name:"about",component:()=>If(()=>import("./AboutView.ffa49693.js"),["assets/AboutView.ffa49693.js","assets/AboutView.ab071ea6.css"])}]});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){dm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function fm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ti(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function um(e,t,n){return t&&Ti(e.prototype,t),n&&Ti(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function dm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ca(e,t){return hm(e)||gm(e,t)||bs(e,t)||bm()}function lr(e){return mm(e)||pm(e)||bs(e)||vm()}function mm(e){if(Array.isArray(e))return Wr(e)}function hm(e){if(Array.isArray(e))return e}function pm(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gm(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function bs(e,t){if(!!e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zi=function(){},Pa={},ys={},_s=null,ws={mark:zi,measure:zi};try{typeof window!="undefined"&&(Pa=window),typeof document!="undefined"&&(ys=document),typeof MutationObserver!="undefined"&&(_s=MutationObserver),typeof performance!="undefined"&&(ws=performance)}catch{}var ym=Pa.navigator||{},Ni=ym.userAgent,Li=Ni===void 0?"":Ni,mt=Pa,se=ys,Fi=_s,Rn=ws;mt.document;var et=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",xs=~Li.indexOf("MSIE")||~Li.indexOf("Trident/"),qe="___FONT_AWESOME___",Yr=16,ks="fa",As="svg-inline--fa",kt="data-fa-i2svg",Kr="data-fa-pseudo-element",_m="data-fa-pseudo-element-pending",Oa="data-prefix",Sa="data-icon",$i="fontawesome-i2svg",wm="async",xm=["HTML","HEAD","STYLE","SCRIPT"],Es=function(){try{return!0}catch{return!1}}(),Ia={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},qn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Cs={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},km={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Am=/fa[srltdbk\-\ ]/,Ps="fa-layers-text",Em=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Cm={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Os=[1,2,3,4,5,6,7,8,9,10],Pm=Os.concat([11,12,13,14,15,16,17,18,19,20]),Om=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sm=[].concat(lr(Object.keys(qn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(Os.map(function(e){return"".concat(e,"x")})).concat(Pm.map(function(e){return"w-".concat(e)})),Ss=mt.FontAwesomeConfig||{};function Im(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Mm=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mm.forEach(function(e){var t=Ca(e,2),n=t[0],r=t[1],a=Rm(Im(n));a!=null&&(Ss[r]=a)})}var Tm={familyPrefix:ks,styleDefault:"solid",replacementClass:As,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},mn=I(I({},Tm),Ss);mn.autoReplaceSvg||(mn.observeMutations=!1);var $={};Object.keys(mn).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){mn[e]=n,Nn.forEach(function(r){return r($)})},get:function(){return mn[e]}})});mt.FontAwesomeConfig=$;var Nn=[];function zm(e){return Nn.push(e),function(){Nn.splice(Nn.indexOf(e),1)}}var it=Yr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nm(e){if(!(!e||!et)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var Lm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kn(){for(var e=12,t="";e-- >0;)t+=Lm[Math.random()*62|0];return t}function Xt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Is(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Is(e[n]),'" ')},"").trim()}function cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ma(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function $m(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function jm(e){var t=e.transform,n=e.width,r=n===void 0?Yr:n,a=e.height,i=a===void 0?Yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xs?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Dm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
    transition-delay: 0s;
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
}`;function Rs(){var e=ks,t=As,n=$.familyPrefix,r=$.replacementClass,a=Dm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ji=!1;function kr(){$.autoAddCss&&!ji&&(Nm(Rs()),ji=!0)}var Hm={mixout:function(){return{dom:{css:Rs,insertCss:kr}}},hooks:function(){return{beforeDOMElementCreation:function(){kr()},beforeI2svg:function(){kr()}}}},Ge=mt||{};Ge[qe]||(Ge[qe]={});Ge[qe].styles||(Ge[qe].styles={});Ge[qe].hooks||(Ge[qe].hooks={});Ge[qe].shims||(Ge[qe].shims=[]);var Re=Ge[qe],Ms=[],Um=function e(){se.removeEventListener("DOMContentLoaded",e),Gn=1,Ms.map(function(t){return t()})},Gn=!1;et&&(Gn=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Gn||se.addEventListener("DOMContentLoaded",Um));function Bm(e){!et||(Gn?setTimeout(e,0):Ms.push(e))}function En(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Is(e):"<".concat(t," ").concat(Fm(r),">").concat(i.map(En).join(""),"</").concat(t,">")}function Di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ar=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Wm(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Ym(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Vr(e){var t=Ym(e);return t.length===1?t[0].toString(16):null}function Km(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Hi(t);typeof Re.hooks.addPack=="function"&&!a?Re.hooks.addPack(e,Hi(t)):Re.styles[e]=I(I({},Re.styles[e]||{}),i),e==="fas"&&qr("fa",t)}var hn=Re.styles,Vm=Re.shims,qm=Object.values(Cs),Ta=null,Ts={},zs={},Ns={},Ls={},Fs={},Gm=Object.keys(Ia);function Xm(e){return~Sm.indexOf(e)}function Qm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xm(a)?a:null}var $s=function(){var t=function(i){return Ar(hn,function(o,s,l){return o[l]=Ar(s,i,{}),o},{})};Ts=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),zs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in hn||$.autoFetchSvg,r=Ar(Vm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ns=r.names,Ls=r.unicodes,Ta=fr($.styleDefault)};zm(function(e){Ta=fr(e.styleDefault)});$s();function za(e,t){return(Ts[e]||{})[t]}function Jm(e,t){return(zs[e]||{})[t]}function Nt(e,t){return(Fs[e]||{})[t]}function js(e){return Ns[e]||{prefix:null,iconName:null}}function Zm(e){var t=Ls[e],n=za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return Ta}var Na=function(){return{prefix:null,iconName:null,rest:[]}};function fr(e){var t=Ia[e],n=qn[e]||qn[t],r=e in Re.styles?e:null;return n||r||null}function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Qm($.familyPrefix,s);if(hn[s]?(s=qm.includes(s)?km[s]:s,a=s,o.prefix=s):Gm.indexOf(s)>-1?(a=s,o.prefix=fr(s)):l?o.iconName=l:s!==$.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?js(o.iconName):{},c=Nt(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!hn.far&&hn.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},Na());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ht()||"fas"),i}var eh=function(){function e(){fm(this,e),this.definitions={}}return um(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),qr(s,o[s]);var l=Cs[s];l&&qr(l,o[s]),$s()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),Ui=[],Lt={},Dt={},th=Object.keys(Dt);function nh(e,t){var n=t.mixoutsTo;return Ui=e,Lt={},Object.keys(Dt).forEach(function(r){th.indexOf(r)===-1&&delete Dt[r]}),Ui.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Lt[o]||(Lt[o]=[]),Lt[o].push(i[o])})}r.provides&&r.provides(Dt)}),n}function Gr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Lt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Lt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Xe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Dt[e]?Dt[e].apply(null,t):void 0}function Xr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(!!t)return t=Nt(n,t)||t,Di(Ds.definitions,n,t)||Di(Re.styles,n,t)}var Ds=new eh,rh=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,At("noAuto")},ah={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(At("beforeI2svg",t),Xe("pseudoElements2svg",t),Xe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,Bm(function(){oh({autoReplaceSvgRoot:n}),At("watch",t)})}},ih={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fr(t[0]);return{prefix:r,iconName:Nt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.familyPrefix,"-"))>-1||t.match(Am))){var a=ur(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:Nt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:Nt(i,t)||t}}}},Ee={noAuto:rh,config:$,dom:ah,parse:ih,library:Ds,findIconDefinition:Xr,toHtml:En},oh=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Re.styles).length>0||$.autoFetchSvg)&&et&&$.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function dr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return En(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function sh(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=cr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function lh(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat($.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function La(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,v=h===void 0?!1:h,E=r.found?r:n,z=E.width,O=E.height,g=a==="fak",x=[$.replacementClass,i?"".concat($.familyPrefix,"-").concat(i):""].filter(function(me){return d.classes.indexOf(me)===-1}).filter(function(me){return me!==""||!!me}).concat(d.classes).join(" "),T={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(O)})},j=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(z/O*16*.0625,"em")}:{};v&&(T.attributes[kt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(c||kn())},children:[l]}),delete T.attributes.title);var K=I(I({},T),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},j),d.styles)}),ae=r.found&&n.found?Xe("generateAbstractMask",K)||{children:[],attributes:{}}:Xe("generateAbstractIcon",K)||{children:[],attributes:{}},fe=ae.children,Ce=ae.attributes;return K.children=fe,K.attributes=Ce,s?lh(K):sh(K)}function Bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[kt]="");var c=I({},o.styles);Ma(a)&&(c.transform=jm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=cr(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function ch(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Er=Re.styles;function Qr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var fh={found:!1,width:512,height:512};function uh(e,t){!Es&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Jr(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(Xe("missingIconAbstract"),n==="fa"){var i=js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Er[t]&&Er[t][e]){var o=Er[t][e];return r(Qr(o))}uh(e,t),r(I(I({},fh),{},{icon:$.showMissingIcons&&e?Xe("missingIconAbstract")||{}:{}}))})}var Wi=function(){},Zr=$.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:Wi,measure:Wi},rn='FA "6.1.1"',dh=function(t){return Zr.mark("".concat(rn," ").concat(t," begins")),function(){return Hs(t)}},Hs=function(t){Zr.mark("".concat(rn," ").concat(t," ends")),Zr.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},Fa={begin:dh,end:Hs},Ln=function(){};function Yi(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function mh(e){var t=e.getAttribute?e.getAttribute(Oa):null,n=e.getAttribute?e.getAttribute(Sa):null;return t&&n}function hh(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function ph(){if($.autoReplaceSvg===!0)return Fn.replace;var e=Fn[$.autoReplaceSvg];return e||Fn.replace}function gh(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function vh(e){return se.createElement(e)}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gh:vh:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Us(o,{ceFn:r}))}),a}function bh(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Us(a),n)}),n.getAttribute(kt)===null&&$.keepOriginalSource){var r=se.createComment(bh(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf($.replacementClass))return Fn.replace(t);var a=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return En(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=o}};function Ki(e){e()}function Bs(e,t){var n=typeof t=="function"?t:Ln;if(e.length===0)n();else{var r=Ki;$.mutateApproach===wm&&(r=mt.requestAnimationFrame||Ki),r(function(){var a=ph(),i=Fa.begin("mutate");e.map(a),i(),n()})}}var $a=!1;function Ws(){$a=!0}function ea(){$a=!1}var Xn=null;function Vi(e){if(!!Fi&&!!$.observeMutations){var t=e.treeCallback,n=t===void 0?Ln:t,r=e.nodeCallback,a=r===void 0?Ln:r,i=e.pseudoElementsCallback,o=i===void 0?Ln:i,s=e.observeMutationsRoot,l=s===void 0?se:s;Xn=new Fi(function(f){if(!$a){var c=ht();Xt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Yi(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Yi(d.target)&&~Om.indexOf(d.attributeName))if(d.attributeName==="class"&&mh(d.target)){var h=ur(Ra(d.target)),v=h.prefix,E=h.iconName;d.target.setAttribute(Oa,v||c),E&&d.target.setAttribute(Sa,E)}else hh(d.target)&&a(d.target)})}}),et&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yh(){!Xn||Xn.disconnect()}function _h(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function wh(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ur(Ra(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Jm(a.prefix,e.innerText)||za(a.prefix,Vr(e.innerText))),a}function xh(e){var t=Xt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||kn()):(t["aria-hidden"]="true",t.focusable="false")),t}function kh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wh(e),r=n.iconName,a=n.prefix,i=n.rest,o=xh(e),s=Gr("parseNodeAttributes",{},e),l=t.styleParser?_h(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ah=Re.styles;function Ys(e){var t=$.autoReplaceSvg==="nest"?qi(e,{styleParser:!1}):qi(e);return~t.extra.classes.indexOf(Ps)?Xe("generateLayersText",e,t):Xe("generateSvgReplacementMutation",e,t)}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat($i,"-").concat(d))},a=function(d){return n.remove("".concat($i,"-").concat(d))},i=$.autoFetchSvg?Object.keys(Ia):Object.keys(Ah),o=[".".concat(Ps,":not([").concat(kt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Xt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Fa.begin("onTree"),f=s.reduce(function(c,d){try{var h=Ys(d);h&&c.push(h)}catch(v){Es||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){Bs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function Eh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ys(e).then(function(n){n&&Bs([n],t)})}function Ch(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Xr(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Ph=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,v=n.titleId,E=v===void 0?null:v,z=n.classes,O=z===void 0?[]:z,g=n.attributes,x=g===void 0?{}:g,T=n.styles,j=T===void 0?{}:T;if(!!t){var K=t.prefix,ae=t.iconName,fe=t.icon;return dr(I({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(h?x["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(E||kn()):(x["aria-hidden"]="true",x.focusable="false")),La({icons:{main:Qr(fe),mask:l?Qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ae,transform:I(I({},De),a),symbol:o,title:h,maskId:c,titleId:E,extra:{attributes:x,styles:j,classes:O}})})}},Oh={mixout:function(){return{icon:Ch(Ph)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gi,n.nodeCallback=Eh,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return Gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(v,E){Promise.all([Jr(a,s),c.iconName?Jr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var O=Ca(z,2),g=O[0],x=O[1];v([n,La({icons:{main:g,mask:x},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(a.style=l);var f;return Ma(o)&&(f=Xe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Sh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return dr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(lr(i)).join(" ")},children:o}]})}}}},Ih={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return dr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),ch({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat($.familyPrefix,"-layers-counter")].concat(lr(s))}})})}}}},Rh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,v=h===void 0?{}:h;return dr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Bi({content:n,transform:I(I({},De),i),title:s,extra:{attributes:d,styles:v,classes:["".concat($.familyPrefix,"-layers-text")].concat(lr(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return $.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Mh=new RegExp('"',"ug"),Xi=[1105920,1112319];function Th(e){var t=e.replace(Mh,""),n=Km(t,0),r=n>=Xi[0]&&n<=Xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Vr(a?t[0]:t),isSecondary:r||a}}function Qi(e,t){var n="".concat(_m).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Xt(e.children),o=i.filter(function(ae){return ae.getAttribute(Kr)===t})[0],s=mt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Em),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qn[l[2].toLowerCase()]:Cm[f],v=Th(d),E=v.value,z=v.isSecondary,O=l[0].startsWith("FontAwesome"),g=za(h,E),x=g;if(O){var T=Zm(E);T.iconName&&T.prefix&&(g=T.iconName,h=T.prefix)}if(g&&!z&&(!o||o.getAttribute(Oa)!==h||o.getAttribute(Sa)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);var j=kh(),K=j.extra;K.attributes[Kr]=t,Jr(g,h).then(function(ae){var fe=La(I(I({},j),{},{icons:{main:ae,mask:Na()},prefix:h,iconName:x,extra:K,watchable:!0})),Ce=se.createElement("svg");t==="::before"?e.insertBefore(Ce,e.firstChild):e.appendChild(Ce),Ce.outerHTML=fe.map(function(me){return En(me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zh(e){return Promise.all([Qi(e,"::before"),Qi(e,"::after")])}function Nh(e){return e.parentNode!==document.head&&!~xm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ji(e){if(!!et)return new Promise(function(t,n){var r=Xt(e.querySelectorAll("*")).filter(Nh).map(zh),a=Fa.begin("searchPseudoElements");Ws(),Promise.all(r).then(function(){a(),ea(),t()}).catch(function(){a(),ea(),n()})})}var Lh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;$.searchPseudoElements&&Ji(a)}}},Zi=!1,Fh={mixout:function(){return{dom:{unwatch:function(){Ws(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){Vi(Gr("mutationObserverCallbacks",{}))},noAuto:function(){yh()},watch:function(n){var r=n.observeMutationsRoot;Zi?ea():Vi(Gr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$h={mixout:function(){return{parse:{transform:function(n){return eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:I({},v.outer),children:[{tag:"g",attributes:I({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),v.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function jh(e){return e.tag==="g"?e.children:[e]}var Dh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ur(a.split(" ").map(function(o){return o.trim()})):Na();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,v=$m({transform:l,containerWidth:d,iconWidth:f}),E={tag:"rect",attributes:I(I({},Cr),{},{fill:"white"})},z=c.children?{children:c.children.map(to)}:{},O={tag:"g",attributes:I({},v.inner),children:[to(I({tag:c.tag,attributes:I(I({},c.attributes),v.path)},z))]},g={tag:"g",attributes:I({},v.outer),children:[O]},x="mask-".concat(s||kn()),T="clip-".concat(s||kn()),j={tag:"mask",attributes:I(I({},Cr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,g]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:jh(h)},j]};return r.push(K,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(x,")")},Cr)}),{children:r,attributes:a}}}},Hh={provides:function(t){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Uh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Bh=[Hm,Oh,Sh,Ih,Rh,Lh,Fh,$h,Dh,Hh,Uh];nh(Bh,{mixoutsTo:Ee});Ee.noAuto;var Ks=Ee.config,Wh=Ee.library;Ee.dom;var Vs=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var Yh=Ee.icon;Ee.layer;var Kh=Ee.text;Ee.counter;var Vh=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function qh(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Gh=qh(function(e){(function(t){var n=function(g,x,T){if(!f(x)||d(x)||h(x)||v(x)||l(x))return x;var j,K=0,ae=0;if(c(x))for(j=[],ae=x.length;K<ae;K++)j.push(n(g,x[K],T));else{j={};for(var fe in x)Object.prototype.hasOwnProperty.call(x,fe)&&(j[g(fe,T)]=n(g,x[fe],T))}return j},r=function(g,x){x=x||{};var T=x.separator||"_",j=x.split||/(?=[A-Z])/;return g.split(j).join(T)},a=function(g){return E(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(x,T){return T?T.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var x=a(g);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(g,x){return r(g,x).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},f=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},h=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},E=function(g){return g=g-0,g===g},z=function(g,x){var T=x&&"process"in x?x.process:x;return typeof T!="function"?g:function(j,K){return T(j,g,K)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,x){return n(z(a,x),g)},decamelizeKeys:function(g,x){return n(z(o,x),g,x)},pascalizeKeys:function(g,x){return n(z(i,x),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(Vh)}),Xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},an=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Qn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},ta=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Jh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Gh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Zh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ja(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Zh(c);break;case"style":l.style=Jh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Qh(n,["class","style"]);return or(e.tag,Qn({},t,{class:a.class,style:Qn({},a.style,o)},a.attrs,s),r)}var qs=!1;try{qs=!0}catch{}function ep(){if(!qs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function pn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?an({},e,t):{}}function tp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},an(t,"fa-"+e.size,e.size!==null),an(t,"fa-rotate-"+e.rotation,e.rotation!==null),an(t,"fa-pull-"+e.pull,e.pull!==null),an(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function no(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Xh(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var np=Qe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return no(t.icon)}),i=ce(function(){return pn("classes",tp(t))}),o=ce(function(){return pn("transform",typeof t.transform=="string"?Vs.transform(t.transform):t.transform)}),s=ce(function(){return pn("mask",no(t.mask))}),l=ce(function(){return Yh(a.value,Qn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});cn(l,function(c){if(!c)return ep("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?ja(l.value.abstract[0],{},r):null});return function(){return f.value}}});Qe({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ks.familyPrefix,i=ce(function(){return[a+"-layers"].concat(ta(t.fixedWidth?[a+"-fw"]:[]))});return function(){return or("div",{class:i.value},r.default?r.default():[])}}});Qe({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ks.familyPrefix,i=ce(function(){return pn("classes",[].concat(ta(t.counter?[a+"-layers-counter"]:[]),ta(t.position?[a+"-layers-"+t.position]:[])))}),o=ce(function(){return pn("transform",typeof t.transform=="string"?Vs.transform(t.transform):t.transform)}),s=ce(function(){var f=Kh(t.value.toString(),Qn({},o.value,i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ce(function(){return ja(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var rp={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Wh.add(rp);hf(Pf).use(bf()).use(cm).component("font-awesome-icon",np).mount("#app");export{Gt as _,Y as a,Ze as c,ze as o};
