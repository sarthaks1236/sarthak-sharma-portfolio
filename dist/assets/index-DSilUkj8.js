var Gx=Object.defineProperty;var Hx=(t,e,n)=>e in t?Gx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dc=(t,e,n)=>Hx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vm={exports:{}},Gl={},Gm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),Yx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),yh=Symbol.iterator;function tv(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jm=Object.assign,Wm={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=Ds.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}var nf=tf.prototype=new Xm;nf.constructor=tf;jm(nf,Ds.prototype);nf.isPureReactComponent=!0;var Mh=Array.isArray,Ym=Object.prototype.hasOwnProperty,rf={current:null},qm={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,i)&&!qm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ga,type:t,key:s,ref:a,props:r,_owner:rf.current}}function nv(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sh=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iv(""+t.key):e.toString(36)}function Xo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ga:case Wx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+fc(a,0):i,Mh(r)?(n="",t!=null&&(n=t.replace(Sh,"$&/")+"/"),Xo(r,e,n,"",function(c){return c})):r!=null&&(sf(r)&&(r=nv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Sh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Mh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+fc(s,o);a+=Xo(s,e,n,l,r)}else if(l=tv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+fc(s,o++),a+=Xo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(t,e,n){if(t==null)return t;var i=[],r=0;return Xo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Yo={transition:null},sv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:rf};function Km(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ds;Ye.Fragment=Xx;Ye.Profiler=qx;Ye.PureComponent=tf;Ye.StrictMode=Yx;Ye.Suspense=Qx;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;Ye.act=Km;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ym.call(e,l)&&!qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:Kx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$x,_context:t},t.Consumer=t};Ye.createElement=$m;Ye.createFactory=function(t){var e=$m.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Zx,render:t}};Ye.isValidElement=sf;Ye.lazy=function(t){return{$$typeof:ev,_payload:{_status:-1,_result:t},_init:rv}};Ye.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Ye.unstable_act=Km;Ye.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ye.useContext=function(t){return Zt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ye.useId=function(){return Zt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Zt.current.useRef(t)};Ye.useState=function(t){return Zt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Zt.current.useTransition()};Ye.version="18.3.1";Gm.exports=Ye;var Ge=Gm.exports;const av=jx(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=Ge,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)uv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lv,type:t,key:s,ref:a,props:r,_owner:dv.current}}Gl.Fragment=cv;Gl.jsx=Zm;Gl.jsxs=Zm;Vm.exports=Gl;var h=Vm.exports,xu={},Qm={exports:{}},vn={},Jm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,X){var J=I.length;I.push(X);e:for(;0<J;){var se=J-1>>>1,Me=I[se];if(0<r(Me,X))I[se]=X,I[J]=Me,J=se;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var X=I[0],J=I.pop();if(J!==X){I[0]=J;e:for(var se=0,Me=I.length,$e=Me>>>1;se<$e;){var W=2*(se+1)-1,ne=I[W],ue=W+1,ae=I[ue];if(0>r(ne,J))ue<Me&&0>r(ae,ne)?(I[se]=ae,I[ue]=J,se=ue):(I[se]=ne,I[W]=J,se=W);else if(ue<Me&&0>r(ae,J))I[se]=ae,I[ue]=J,se=ue;else break e}}return X}function r(I,X){var J=I.sortIndex-X.sortIndex;return J!==0?J:I.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,p=null,f=3,m=!1,_=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=I)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function y(I){if(M=!1,v(I),!_)if(n(l)!==null)_=!0,Y(N);else{var X=n(c);X!==null&&ee(y,X.startTime-I)}}function N(I,X){_=!1,M&&(M=!1,u(C),C=-1),m=!0;var J=f;try{for(v(X),p=n(l);p!==null&&(!(p.expirationTime>X)||I&&!L());){var se=p.callback;if(typeof se=="function"){p.callback=null,f=p.priorityLevel;var Me=se(p.expirationTime<=X);X=t.unstable_now(),typeof Me=="function"?p.callback=Me:p===n(l)&&i(l),v(X)}else i(l);p=n(l)}if(p!==null)var $e=!0;else{var W=n(c);W!==null&&ee(y,W.startTime-X),$e=!1}return $e}finally{p=null,f=J,m=!1}}var R=!1,A=null,C=-1,T=5,E=-1;function L(){return!(t.unstable_now()-E<T)}function H(){if(A!==null){var I=t.unstable_now();E=I;var X=!0;try{X=A(!0,I)}finally{X?V():(R=!1,A=null)}}else R=!1}var V;if(typeof g=="function")V=function(){g(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Z=$.port2;$.port1.onmessage=H,V=function(){Z.postMessage(null)}}else V=function(){x(H,0)};function Y(I){A=I,R||(R=!0,V())}function ee(I,X){C=x(function(){I(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Y(N))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var J=f;f=X;try{return I()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=f;f=I;try{return X()}finally{f=J}},t.unstable_scheduleCallback=function(I,X,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=J+Me,I={id:d++,callback:X,priorityLevel:I,startTime:J,expirationTime:Me,sortIndex:-1},J>se?(I.sortIndex=J,e(c,I),n(l)===null&&I===n(c)&&(M?(u(C),C=-1):M=!0,ee(y,J-se))):(I.sortIndex=Me,e(l,I),_||m||(_=!0,Y(N))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var X=f;return function(){var J=f;f=X;try{return I.apply(this,arguments)}finally{f=J}}}})(eg);Jm.exports=eg;var hv=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=Ge,xn=hv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,Ea={};function Pr(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Ea[t]=e,t=0;t<e.length;t++)tg.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eh={},wh={};function gv(t){return vu.call(wh,t)?!0:vu.call(Eh,t)?!1:mv.test(t)?wh[t]=!0:(Eh[t]=!0,!1)}function xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vv(t,e,n,i){if(e===null||typeof e>"u"||xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,of);kt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,of);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,of);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,n,r,i)&&(n=null),i||r===null?gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),ig=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),Th=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,hc;function ia(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var pc=!1;function mc(t,e){if(!t||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function _v(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=mc(t.type,!1),t;case 11:return t=mc(t.type.render,!1),t;case 1:return t=mc(t.type,!0),t;default:return""}}function Su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case _u:return"Profiler";case cf:return"StrictMode";case yu:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ig:return(t.displayName||"Context")+".Consumer";case ng:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case df:return e=t.displayName||null,e!==null?e:Su(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Su(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=Mv(t))}function ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function wu(t,e){og(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ra(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function lg(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){Sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function fg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ev=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(Ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pu=null,hs=null,ps=null;function Nh(t){if(t=Wa(t)){if(typeof Pu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Yl(e),Pu(t.stateNode,t.type,e))}}function hg(t){hs?ps?ps.push(t):ps=[t]:hs=t}function pg(){if(hs){var t=hs,e=ps;if(ps=hs=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function mg(t,e){return t(e)}function gg(){}var gc=!1;function xg(t,e,n){if(gc)return t(e,n);gc=!0;try{return mg(t,e,n)}finally{gc=!1,(hs!==null||ps!==null)&&(gg(),pg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Lu=!1;if(vi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Lu=!1}function wv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var da=!1,fl=null,hl=!1,Iu=null,Tv={onError:function(t){da=!0,fl=t}};function bv(t,e,n,i,r,s,a,o,l){da=!1,fl=null,wv.apply(Tv,arguments)}function Av(t,e,n,i,r,s,a,o,l){if(bv.apply(this,arguments),da){if(da){var c=fl;da=!1,fl=null}else throw Error(te(198));hl||(hl=!0,Iu=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(Lr(t)!==t)throw Error(te(188))}function Rv(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ph(r),t;if(s===i)return Ph(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function _g(t){return t=Rv(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var Mg=xn.unstable_scheduleCallback,Lh=xn.unstable_cancelCallback,Cv=xn.unstable_shouldYield,Nv=xn.unstable_requestPaint,St=xn.unstable_now,Pv=xn.unstable_getCurrentPriorityLevel,hf=xn.unstable_ImmediatePriority,Sg=xn.unstable_UserBlockingPriority,pl=xn.unstable_NormalPriority,Lv=xn.unstable_LowPriority,Eg=xn.unstable_IdlePriority,Hl=null,Qn=null;function Iv(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:Fv,Dv=Math.log,Uv=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Dv(t)/Uv|0)|0}var ro=64,so=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Ov(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wg(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,mf,Ag,Rg,Cg,Uu=!1,ao=[],Bi=null,Vi=null,Gi=null,ba=new Map,Aa=new Map,Ui=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vv(t,e,n,i,r){switch(e){case"focusin":return Bi=Ws(Bi,t,e,n,i,r),!0;case"dragenter":return Vi=Ws(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Ws(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,Ws(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Ws(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=gr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=vg(n),e!==null){t.blockedOn=e,Cg(t.priority,function(){Ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=Wa(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){qo(t)&&n.delete(e)}function Gv(){Uu=!1,Bi!==null&&qo(Bi)&&(Bi=null),Vi!==null&&qo(Vi)&&(Vi=null),Gi!==null&&qo(Gi)&&(Gi=null),ba.forEach(Dh),Aa.forEach(Dh)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,Gv)))}function Ra(t){function e(r){return Xs(r,t)}if(0<ao.length){Xs(ao[0],t);for(var n=1;n<ao.length;n++){var i=ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Xs(Bi,t),Vi!==null&&Xs(Vi,t),Gi!==null&&Xs(Gi,t),ba.forEach(e),Aa.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&Ui.shift()}var ms=Ei.ReactCurrentBatchConfig,gl=!0;function Hv(t,e,n,i){var r=it,s=ms.transition;ms.transition=null;try{it=1,gf(t,e,n,i)}finally{it=r,ms.transition=s}}function jv(t,e,n,i){var r=it,s=ms.transition;ms.transition=null;try{it=4,gf(t,e,n,i)}finally{it=r,ms.transition=s}}function gf(t,e,n,i){if(gl){var r=Fu(t,e,n,i);if(r===null)Ac(t,e,i,xl,n),Ih(t,i);else if(Vv(r,t,e,n,i))i.stopPropagation();else if(Ih(t,i),e&4&&-1<Bv.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&bg(s),s=Fu(t,e,n,i),s===null&&Ac(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ac(t,e,i,null,n)}}var xl=null;function Fu(t,e,n,i){if(xl=null,t=ff(i),t=gr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case hf:return 1;case Sg:return 4;case pl:case Lv:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var ki=null,xf=null,$o=null;function Lg(){if($o)return $o;var t,e=xf,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return $o=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Uh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:Uh,this.isPropagationStopped=Uh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=_n(Us),ja=_t({},Us,{view:0,detail:0}),Wv=_n(ja),vc,_c,Ys,jl=_t({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(vc=t.screenX-Ys.screenX,_c=t.screenY-Ys.screenY):_c=vc=0,Ys=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Fh=_n(jl),Xv=_t({},jl,{dataTransfer:0}),Yv=_n(Xv),qv=_t({},ja,{relatedTarget:0}),yc=_n(qv),$v=_t({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=_n($v),Zv=_t({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=_n(Zv),Jv=_t({},Us,{data:0}),Oh=_n(Jv),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function _f(){return i_}var r_=_t({},ja,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=_n(r_),a_=_t({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=_n(a_),o_=_t({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),l_=_n(o_),c_=_t({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=_n(c_),d_=_t({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=_n(d_),h_=[9,13,27,32],yf=vi&&"CompositionEvent"in window,fa=null;vi&&"documentMode"in document&&(fa=document.documentMode);var p_=vi&&"TextEvent"in window&&!fa,Ig=vi&&(!yf||fa&&8<fa&&11>=fa),zh=" ",Bh=!1;function Dg(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function m_(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(Bh=!0,zh);case"textInput":return t=e.data,t===zh&&Bh?null:t;default:return null}}function g_(t,e){if(ts)return t==="compositionend"||!yf&&Dg(t,e)?(t=Lg(),$o=xf=ki=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ig&&e.locale!=="ko"?null:e.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x_[t.type]:e==="textarea"}function Fg(t,e,n,i){hg(i),e=vl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function v_(t){Yg(t,0)}function Wl(t){var e=rs(t);if(ag(e))return t}function __(t,e){if(t==="change")return e}var Og=!1;if(vi){var Mc;if(vi){var Sc="oninput"in document;if(!Sc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Sc=typeof Gh.oninput=="function"}Mc=Sc}else Mc=!1;Og=Mc&&(!document.documentMode||9<document.documentMode)}function Hh(){ha&&(ha.detachEvent("onpropertychange",kg),Ca=ha=null)}function kg(t){if(t.propertyName==="value"&&Wl(Ca)){var e=[];Fg(e,Ca,t,ff(t)),xg(v_,e)}}function y_(t,e,n){t==="focusin"?(Hh(),ha=e,Ca=n,ha.attachEvent("onpropertychange",kg)):t==="focusout"&&Hh()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ca)}function S_(t,e){if(t==="click")return Wl(e)}function E_(t,e){if(t==="input"||t==="change")return Wl(e)}function w_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:w_;function Na(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wh(t,e){var n=jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jh(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function T_(t){var e=Bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(i!==null&&Mf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wh(n,s);var a=Wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b_=vi&&"documentMode"in document&&11>=document.documentMode,ns=null,Ou=null,pa=null,ku=!1;function Xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||ns==null||ns!==dl(i)||(i=ns,"selectionStart"in i&&Mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Na(pa,i)||(pa=i,i=vl(Ou,"onSelect"),0<i.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ec={},Vg={};vi&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Xl(t){if(Ec[t])return Ec[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return Ec[t]=e[n];return t}var Gg=Xl("animationend"),Hg=Xl("animationiteration"),jg=Xl("animationstart"),Wg=Xl("transitionend"),Xg=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Xg.set(t,e),Pr(e,[t])}for(var wc=0;wc<Yh.length;wc++){var Tc=Yh[wc],A_=Tc.toLowerCase(),R_=Tc[0].toUpperCase()+Tc.slice(1);er(A_,"on"+R_)}er(Gg,"onAnimationEnd");er(Hg,"onAnimationIteration");er(jg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Wg,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Av(i,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,c),s=l}}}if(hl)throw t=Iu,hl=!1,Iu=null,t}function ht(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(qg(e,t,2,!1),n.add(i))}function bc(t,e,n){var i=0;e&&(i|=4),qg(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[co]){t[co]=!0,tg.forEach(function(n){n!=="selectionchange"&&(C_.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,bc("selectionchange",!1,e))}}function qg(t,e,n,i){switch(Pg(e)){case 1:var r=Hv;break;case 4:r=jv;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xg(function(){var c=s,d=ff(n),p=[];e:{var f=Xg.get(t);if(f!==void 0){var m=vf,_=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":m=s_;break;case"focusin":_="focus",m=yc;break;case"focusout":_="blur",m=yc;break;case"beforeblur":case"afterblur":m=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=l_;break;case Gg:case Hg:case jg:m=Kv;break;case Wg:m=u_;break;case"scroll":m=Wv;break;case"wheel":m=f_;break;case"copy":case"cut":case"paste":m=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kh}var M=(e&4)!==0,x=!M&&t==="scroll",u=M?f!==null?f+"Capture":null:f;M=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Ta(g,u),y!=null&&M.push(La(g,y,v)))),x)break;g=g.return}0<M.length&&(f=new m(f,_,null,n,d),p.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Nu&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[_i]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?gr(_):null,_!==null&&(x=Lr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(M=Fh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=kh,y="onPointerLeave",u="onPointerEnter",g="pointer"),x=m==null?f:rs(m),v=_==null?f:rs(_),f=new M(y,g+"leave",m,n,d),f.target=x,f.relatedTarget=v,y=null,gr(d)===c&&(M=new M(u,g+"enter",_,n,d),M.target=v,M.relatedTarget=x,y=M),x=y,m&&_)t:{for(M=m,u=_,g=0,v=M;v;v=Ur(v))g++;for(v=0,y=u;y;y=Ur(y))v++;for(;0<g-v;)M=Ur(M),g--;for(;0<v-g;)u=Ur(u),v--;for(;g--;){if(M===u||u!==null&&M===u.alternate)break t;M=Ur(M),u=Ur(u)}M=null}else M=null;m!==null&&$h(p,f,m,M,!1),_!==null&&x!==null&&$h(p,x,_,M,!0)}}e:{if(f=c?rs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=__;else if(Vh(f))if(Og)N=E_;else{N=M_;var R=y_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=S_);if(N&&(N=N(t,c))){Fg(p,N,n,d);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Tu(f,"number",f.value)}switch(R=c?rs(c):window,t){case"focusin":(Vh(R)||R.contentEditable==="true")&&(ns=R,Ou=c,pa=null);break;case"focusout":pa=Ou=ns=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Xh(p,n,d);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Xh(p,n,d)}var A;if(yf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ts?Dg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ig&&n.locale!=="ko"&&(ts||C!=="onCompositionStart"?C==="onCompositionEnd"&&ts&&(A=Lg()):(ki=d,xf="value"in ki?ki.value:ki.textContent,ts=!0)),R=vl(c,C),0<R.length&&(C=new Oh(C,t,null,n,d),p.push({event:C,listeners:R}),A?C.data=A:(A=Ug(n),A!==null&&(C.data=A)))),(A=p_?m_(t,n):g_(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(d=new Oh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=A))}Yg(p,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(La(t,s,r)),s=Ta(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var N_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(P_,"")}function uo(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(te(425))}function _l(){}var zu=null,Bu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(t){return Zh.resolve(null).then(t).catch(D_)}:Gu;function D_(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Fs,Ia="__reactProps$"+Fs,_i="__reactContainer$"+Fs,Hu="__reactEvents$"+Fs,U_="__reactListeners$"+Fs,F_="__reactHandles$"+Fs;function gr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[Kn])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[Kn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Yl(t){return t[Ia]||null}var ju=[],ss=-1;function tr(t){return{current:t}}function pt(t){0>ss||(t.current=ju[ss],ju[ss]=null,ss--)}function ut(t,e){ss++,ju[ss]=t.current,t.current=e}var Zi={},Wt=tr(Zi),rn=tr(!1),wr=Zi;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function yl(){pt(rn),pt(Wt)}function Jh(t,e,n){if(Wt.current!==Zi)throw Error(te(168));ut(Wt,e),ut(rn,n)}function $g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,yv(t)||"Unknown",r));return _t({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,wr=Wt.current,ut(Wt,t),ut(rn,rn.current),!0}function ep(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=$g(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,pt(rn),pt(Wt),ut(Wt,t)):pt(rn),ut(rn,n)}var ui=null,ql=!1,Cc=!1;function Kg(t){ui===null?ui=[t]:ui.push(t)}function O_(t){ql=!0,Kg(t)}function nr(){if(!Cc&&ui!==null){Cc=!0;var t=0,e=it;try{var n=ui;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,ql=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Mg(hf,nr),r}finally{it=e,Cc=!1}}return null}var as=[],os=0,Sl=null,El=0,wn=[],Tn=0,Tr=null,fi=1,hi="";function ur(t,e){as[os++]=El,as[os++]=Sl,Sl=t,El=e}function Zg(t,e,n){wn[Tn++]=fi,wn[Tn++]=hi,wn[Tn++]=Tr,Tr=t;var i=fi;t=hi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,fi=1<<32-Gn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function Sf(t){t.return!==null&&(ur(t,1),Zg(t,1,0))}function Ef(t){for(;t===Sl;)Sl=as[--os],as[os]=null,El=as[--os],as[os]=null;for(;t===Tr;)Tr=wn[--Tn],wn[Tn]=null,hi=wn[--Tn],wn[Tn]=null,fi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,gt=!1,zn=null;function Qg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xu(t){if(gt){var e=mn;if(e){var n=e;if(!tp(t,e)){if(Wu(t))throw Error(te(418));e=Hi(n.nextSibling);var i=gn;e&&tp(t,e)?Qg(i,n):(t.flags=t.flags&-4097|2,gt=!1,gn=t)}}else{if(Wu(t))throw Error(te(418));t.flags=t.flags&-4097|2,gt=!1,gn=t}}}function np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function fo(t){if(t!==gn)return!1;if(!gt)return np(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=mn)){if(Wu(t))throw Jg(),Error(te(418));for(;e;)Qg(t,e),e=Hi(e.nextSibling)}if(np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Hi(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=mn;t;)t=Hi(t.nextSibling)}function Es(){mn=gn=null,gt=!1}function wf(t){zn===null?zn=[t]:zn.push(t)}var k_=Ei.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ip(t){var e=t._init;return e(t._payload)}function e0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Yi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,y){return g===null||g.tag!==6?(g=Fc(v,u.mode,y),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,y){var N=v.type;return N===es?d(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ii&&ip(N)===g.type)?(y=r(g,v.props),y.ref=qs(u,g,v),y.return=u,y):(y=il(v.type,v.key,v.props,null,u.mode,y),y.ref=qs(u,g,v),y.return=u,y)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Oc(v,u.mode,y),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,y,N){return g===null||g.tag!==7?(g=Er(v,u.mode,y,N),g.return=u,g):(g=r(g,v),g.return=u,g)}function p(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case to:return v=il(g.type,g.key,g.props,null,u.mode,v),v.ref=qs(u,null,g),v.return=u,v;case Jr:return g=Oc(g,u.mode,v),g.return=u,g;case Ii:var y=g._init;return p(u,y(g._payload),v)}if(ra(g)||Hs(g))return g=Er(g,u.mode,v,null),g.return=u,g;ho(u,g)}return null}function f(u,g,v,y){var N=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:o(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===N?l(u,g,v,y):null;case Jr:return v.key===N?c(u,g,v,y):null;case Ii:return N=v._init,f(u,g,N(v._payload),y)}if(ra(v)||Hs(v))return N!==null?null:d(u,g,v,y,null);ho(u,v)}return null}function m(u,g,v,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,o(g,u,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case to:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,N);case Jr:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,N);case Ii:var R=y._init;return m(u,g,v,R(y._payload),N)}if(ra(y)||Hs(y))return u=u.get(v)||null,d(g,u,y,N,null);ho(g,y)}return null}function _(u,g,v,y){for(var N=null,R=null,A=g,C=g=0,T=null;A!==null&&C<v.length;C++){A.index>C?(T=A,A=null):T=A.sibling;var E=f(u,A,v[C],y);if(E===null){A===null&&(A=T);break}t&&A&&E.alternate===null&&e(u,A),g=s(E,g,C),R===null?N=E:R.sibling=E,R=E,A=T}if(C===v.length)return n(u,A),gt&&ur(u,C),N;if(A===null){for(;C<v.length;C++)A=p(u,v[C],y),A!==null&&(g=s(A,g,C),R===null?N=A:R.sibling=A,R=A);return gt&&ur(u,C),N}for(A=i(u,A);C<v.length;C++)T=m(A,u,C,v[C],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?C:T.key),g=s(T,g,C),R===null?N=T:R.sibling=T,R=T);return t&&A.forEach(function(L){return e(u,L)}),gt&&ur(u,C),N}function M(u,g,v,y){var N=Hs(v);if(typeof N!="function")throw Error(te(150));if(v=N.call(v),v==null)throw Error(te(151));for(var R=N=null,A=g,C=g=0,T=null,E=v.next();A!==null&&!E.done;C++,E=v.next()){A.index>C?(T=A,A=null):T=A.sibling;var L=f(u,A,E.value,y);if(L===null){A===null&&(A=T);break}t&&A&&L.alternate===null&&e(u,A),g=s(L,g,C),R===null?N=L:R.sibling=L,R=L,A=T}if(E.done)return n(u,A),gt&&ur(u,C),N;if(A===null){for(;!E.done;C++,E=v.next())E=p(u,E.value,y),E!==null&&(g=s(E,g,C),R===null?N=E:R.sibling=E,R=E);return gt&&ur(u,C),N}for(A=i(u,A);!E.done;C++,E=v.next())E=m(A,u,C,E.value,y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?C:E.key),g=s(E,g,C),R===null?N=E:R.sibling=E,R=E);return t&&A.forEach(function(H){return e(u,H)}),gt&&ur(u,C),N}function x(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var N=v.key,R=g;R!==null;){if(R.key===N){if(N=v.type,N===es){if(R.tag===7){n(u,R.sibling),g=r(R,v.props.children),g.return=u,u=g;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ii&&ip(N)===R.type){n(u,R.sibling),g=r(R,v.props),g.ref=qs(u,R,v),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===es?(g=Er(v.props.children,u.mode,y,v.key),g.return=u,u=g):(y=il(v.type,v.key,v.props,null,u.mode,y),y.ref=qs(u,g,v),y.return=u,u=y)}return a(u);case Jr:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Oc(v,u.mode,y),g.return=u,u=g}return a(u);case Ii:return R=v._init,x(u,g,R(v._payload),y)}if(ra(v))return _(u,g,v,y);if(Hs(v))return M(u,g,v,y);ho(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Fc(v,u.mode,y),g.return=u,u=g),a(u)):n(u,g)}return x}var ws=e0(!0),t0=e0(!1),wl=tr(null),Tl=null,ls=null,Tf=null;function bf(){Tf=ls=Tl=null}function Af(t){var e=wl.current;pt(wl),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Tl=t,Tf=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Tl===null)throw Error(te(308));ls=t,Tl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var xr=null;function Rf(t){xr===null?xr=[t]:xr.push(t)}function n0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=_t({},p,f);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=p):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=p}}function sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Xa={},Jn=tr(Xa),Da=tr(Xa),Ua=tr(Xa);function vr(t){if(t===Xa)throw Error(te(174));return t}function Nf(t,e){switch(ut(Ua,e),ut(Da,t),ut(Jn,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}pt(Jn),ut(Jn,e)}function Ts(){pt(Jn),pt(Da),pt(Ua)}function r0(t){vr(Ua.current);var e=vr(Jn.current),n=Au(e,t.type);e!==n&&(ut(Da,t),ut(Jn,n))}function Pf(t){Da.current===t&&(pt(Jn),pt(Da))}var xt=tr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Lf(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Qo=Ei.ReactCurrentDispatcher,Pc=Ei.ReactCurrentBatchConfig,br=0,vt=null,bt=null,Lt=null,Rl=!1,ma=!1,Fa=0,z_=0;function Bt(){throw Error(te(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Df(t,e,n,i,r,s){if(br=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?H_:j_,t=n(i,r),ma){s=0;do{if(ma=!1,Fa=0,25<=s)throw Error(te(301));s+=1,Lt=bt=null,e.updateQueue=null,Qo.current=W_,t=n(i,r)}while(ma)}if(Qo.current=Cl,e=bt!==null&&bt.next!==null,br=0,Lt=bt=vt=null,Rl=!1,e)throw Error(te(300));return t}function Uf(){var t=Fa!==0;return Fa=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Lt===null?vt.memoizedState:Lt.next;if(e!==null)Lt=e,bt=t;else{if(t===null)throw Error(te(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Oa(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,vt.lanes|=d,Ar|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s0(){}function a0(t,e){var n=vt,i=Nn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Ff(c0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ka(9,l0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));br&30||o0(n,e,r)}return r}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,i){e.value=n,e.getSnapshot=i,u0(e)&&d0(t)}function c0(t,e,n){return n(function(){u0(e)&&d0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function d0(t){var e=yi(t,1);e!==null&&Hn(e,t,1,-1)}function ap(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=G_.bind(null,vt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f0(){return Nn().memoizedState}function Jo(t,e,n,i){var r=qn();vt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&If(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function op(t,e){return Jo(8390656,8,t,e)}function Ff(t,e){return $l(2048,8,t,e)}function h0(t,e){return $l(4,2,t,e)}function p0(t,e){return $l(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,m0.bind(null,e,t),n)}function Of(){}function x0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return br&21?(Wn(n,e)||(n=wg(),vt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function B_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{it=n,Pc.transition=i}}function y0(){return Nn().memoizedState}function V_(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},M0(t))S0(e,n);else if(n=n0(t,e,n,i),n!==null){var r=Kt();Hn(n,t,i,r),E0(n,e,i)}}function G_(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(M0(t))S0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n0(t,e,r,i),n!==null&&(r=Kt(),Hn(n,t,i,r),E0(n,e,i))}}function M0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function S0(t,e){ma=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var Cl={readContext:Cn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},H_={readContext:Cn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=V_.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Of,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=B_.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=qn();if(gt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));br&30||o0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,op(c0.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,l0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Dt.identifierPrefix;if(gt){var n=hi,i=fi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j_={readContext:Cn,useCallback:x0,useContext:Cn,useEffect:Ff,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Lc,useRef:f0,useState:function(){return Lc(Oa)},useDebugValue:Of,useDeferredValue:function(t){var e=Nn();return _0(e,bt.memoizedState,t)},useTransition:function(){var t=Lc(Oa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1},W_={readContext:Cn,useCallback:x0,useContext:Cn,useEffect:Ff,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Ic,useRef:f0,useState:function(){return Ic(Oa)},useDebugValue:Of,useDeferredValue:function(t){var e=Nn();return bt===null?e.memoizedState=t:_0(e,bt.memoizedState,t)},useTransition:function(){var t=Ic(Oa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Hn(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Hn(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Xi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Hn(e,t,i,n),Zo(e,t,i))}};function lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function w0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?wr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?wr:Wt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=_v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function T0(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pl||(Pl=!0,ad=i),Ku(t,e)},n}function b0(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Y_=Ei.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?t0(e,null,n,i):ws(e,t.child,n,i)}function hp(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=Df(t,e,n,i,s,r),n=Uf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(gt&&n&&Sf(e),e.flags|=1,qt(t,e,i,r),e.child)}function pp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Zu(t,e,n,i,r)}function R0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(us,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(us,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(us,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(us,hn),hn|=i;return qt(t,e,r,n),e.child}function C0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=sn(n)?wr:Wt.current;return s=Ss(e,s),gs(e,r),n=Df(t,e,n,i,s,r),i=Uf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(gt&&i&&Sf(e),e.flags|=1,qt(t,e,n,r),e.child)}function mp(t,e,n,i,r){if(sn(n)){var s=!0;Ml(e)}else s=!1;if(gs(e,r),e.stateNode===null)el(t,e),w0(e,n,i),$u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=sn(n)?wr:Wt.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&cp(e,a,i,c),Di=!1;var f=e.memoizedState;a.state=f,bl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||rn.current||Di?(typeof d=="function"&&(qu(e,n,d,i),l=e.memoizedState),(o=Di||lp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,i0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:On(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?wr:Wt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&cp(e,a,i,l),Di=!1,f=e.memoizedState,a.state=f,bl(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||rn.current||Di?(typeof m=="function"&&(qu(e,n,m,i),_=e.memoizedState),(c=Di||lp(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){C0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ep(e,n,!1),Mi(t,e,s);i=e.stateNode,Y_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&ep(e,n,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?Jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jh(t,e.context,!1),Nf(t,e.containerInfo)}function gp(t,e,n,i,r){return Es(),wf(r),e.flags|=256,qt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return Xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jl(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Ju,t):kf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return q_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Yi(o,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,i){return i!==null&&wf(i),ws(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(te(422))),po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=ed(a),e.memoizedState=Ju,s);if(!(e.mode&1))return po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Dc(s,i,void 0),po(t,e,a,i)}if(o=(a&t.childLanes)!==0,nn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Hn(i,t,r,-1))}return jf(),i=Dc(Error(te(421))),po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Hi(r.nextSibling),gn=e,gt=!0,zn=null,t!==null&&(wn[Tn++]=fi,wn[Tn++]=hi,wn[Tn++]=Tr,fi=t.id,hi=t.overflow,Tr=e),e=kf(e,i.children),e.flags|=4096,e)}function xp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n,e);else if(t.tag===19)xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $_(t,e,n){switch(e.tag){case 3:N0(e),Es();break;case 5:r0(e);break;case 1:sn(e.type)&&Ml(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(ut(xt,xt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,R0(t,e,n)}return Mi(t,e,n)}var I0,td,D0,U0;I0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};D0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Jn.current);var s=null;switch(n){case"input":r=Eu(t,r),i=Eu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_l)}Ru(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};U0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return sn(e.type)&&yl(),Vt(e),null;case 3:return i=e.stateNode,Ts(),pt(rn),pt(Wt),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(cd(zn),zn=null))),td(t,e),Vt(e),null;case 5:Pf(e);var r=vr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(t=vr(Jn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ht(aa[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":bh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Rh(i,s),ht("invalid",i)}Ru(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":no(i),Ah(i,s,!0);break;case"textarea":no(i),Ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Kn]=e,t[Ia]=i,I0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Cu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ht(aa[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":bh(t,i),r=Eu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Rh(t,i),r=bu(t,i),ht("invalid",t);break;default:r=i}Ru(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?fg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&lf(t,s,l,a))}switch(n){case"input":no(t),Ah(t,i,!1);break;case"textarea":no(t),Ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)U0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=vr(Ua.current),vr(Jn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Vt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&mn!==null&&e.mode&1&&!(e.flags&128))Jg(),Es(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Kn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else zn!==null&&(cd(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?At===0&&(At=3):jf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ts(),td(t,e),t===null&&Pa(e.stateNode.containerInfo),Vt(e),null;case 10:return Af(e.type._context),Vt(e),null;case 17:return sn(e.type)&&yl(),Vt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Al(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>As&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return Vt(e),null}else 2*St()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Hf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Z_(t,e){switch(Ef(e),e.tag){case 1:return sn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),pt(rn),pt(Wt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Ts(),null;case 10:return Af(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var mo=!1,jt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function nd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var vp=!1;function J_(t,e){if(zu=gl,t=Bg(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,x=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:On(e.type,M),x);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){Mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=vp,vp=!1,_}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F0(t){var e=t.alternate;e!==null&&(t.alternate=null,F0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Ia],delete e[Hu],delete e[U_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var Ft=null,kn=!1;function bi(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:jt||cs(n,e);case 6:var i=Ft,r=kn;Ft=null,bi(t,e,n),Ft=i,kn=r,Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Ra(t)):Rc(Ft,n.stateNode));break;case 4:i=Ft,r=kn,Ft=n.stateNode.containerInfo,kn=!0,bi(t,e,n),Ft=i,kn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nd(n,e,a),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!jt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,bi(t,e,n),jt=i):bi(t,e,n);break;default:bi(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,kn=!1;break e;case 3:Ft=o.stateNode.containerInfo,kn=!0;break e;case 4:Ft=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Ft===null)throw Error(te(160));k0(s,a,r),Ft=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Yn(t),i&4){try{ga(3,t,t.return),Zl(3,t)}catch(M){Mt(t,t.return,M)}try{ga(5,t,t.return)}catch(M){Mt(t,t.return,M)}}break;case 1:In(e,t),Yn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(In(e,t),Yn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(M){Mt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&og(r,s),Cu(o,a);var c=Cu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?fg(r,p):d==="dangerouslySetInnerHTML"?ug(r,p):d==="children"?wa(r,p):lf(r,d,p,c)}switch(o){case"input":wu(r,s);break;case"textarea":lg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?fs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(M){Mt(t,t.return,M)}}break;case 6:if(In(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Mt(t,t.return,M)}}break;case 3:if(In(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(M){Mt(t,t.return,M)}break;case 4:In(e,t),Yn(t);break;case 13:In(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=St())),i&4&&yp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,In(e,t),jt=c):In(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(p=me=d;me!==null;){switch(f=me,m=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:cs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Mt(i,n,M)}}break;case 5:cs(f,f.return);break;case 22:if(f.memoizedState!==null){Sp(p);continue}}m!==null?(m.return=f,me=m):Sp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=dg("display",a))}catch(M){Mt(t,t.return,M)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(M){Mt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:In(e,t),Yn(t),i&4&&yp(t);break;case 21:break;default:In(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=_p(t);sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=_p(t);rd(t,o,a);break;default:throw Error(te(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ey(t,e,n){me=t,B0(t)}function B0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=mo;var c=jt;if(mo=a,(jt=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?Ep(r):l!==null?(l.return=a,me=l):Ep(r);for(;s!==null;)me=s,B0(s),s=s.sibling;me=r,mo=o,jt=c}Mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Mp(t)}}function Mp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}jt||e.flags&512&&id(e)}catch(f){Mt(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Sp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Ep(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{id(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{id(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var ty=Math.ceil,Nl=Ei.ReactCurrentDispatcher,zf=Ei.ReactCurrentOwner,An=Ei.ReactCurrentBatchConfig,Qe=0,Dt=null,wt=null,Ot=0,hn=0,us=tr(0),At=0,za=null,Ar=0,Ql=0,Bf=0,xa=null,en=null,Vf=0,As=1/0,ci=null,Pl=!1,ad=null,Wi=null,go=!1,zi=null,Ll=0,va=0,od=null,tl=-1,nl=0;function Kt(){return Qe&6?St():tl!==-1?tl:tl=St()}function Xi(t){return t.mode&1?Qe&2&&Ot!==0?Ot&-Ot:k_.transition!==null?(nl===0&&(nl=wg()),nl):(t=it,t!==0||(t=window.event,t=t===void 0?16:Pg(t.type)),t):1}function Hn(t,e,n,i){if(50<va)throw va=0,od=null,Error(te(185));Ha(t,n,i),(!(Qe&2)||t!==Dt)&&(t===Dt&&(!(Qe&2)&&(Ql|=n),At===4&&Fi(t,Ot)),an(t,i),n===1&&Qe===0&&!(e.mode&1)&&(As=St()+500,ql&&nr()))}function an(t,e){var n=t.callbackNode;kv(t,e);var i=ml(t,t===Dt?Ot:0);if(i===0)n!==null&&Lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lh(n),e===1)t.tag===0?O_(wp.bind(null,t)):Kg(wp.bind(null,t)),I_(function(){!(Qe&6)&&nr()}),n=null;else{switch(Tg(i)){case 1:n=hf;break;case 4:n=Sg;break;case 16:n=pl;break;case 536870912:n=Eg;break;default:n=pl}n=q0(n,V0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V0(t,e){if(tl=-1,nl=0,Qe&6)throw Error(te(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=ml(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=Qe;Qe|=2;var s=H0();(Dt!==t||Ot!==e)&&(ci=null,As=St()+500,Sr(t,e));do try{ry();break}catch(o){G0(t,o)}while(!0);bf(),Nl.current=s,Qe=r,wt!==null?e=0:(Dt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Du(t),r!==0&&(i=r,e=ld(t,r))),e===1)throw n=za,Sr(t,0),Fi(t,i),an(t,St()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ny(r)&&(e=Il(t,i),e===2&&(s=Du(t),s!==0&&(i=s,e=ld(t,s))),e===1))throw n=za,Sr(t,0),Fi(t,i),an(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:dr(t,en,ci);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Vf+500-St(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gu(dr.bind(null,t,en,ci),e);break}dr(t,en,ci);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ty(i/1960))-i,10<i){t.timeoutHandle=Gu(dr.bind(null,t,en,ci),i);break}dr(t,en,ci);break;case 5:dr(t,en,ci);break;default:throw Error(te(329))}}}return an(t,St()),t.callbackNode===n?V0.bind(null,t):null}function ld(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=en,en=n,e!==null&&cd(e)),t}function cd(t){en===null?en=t:en.push.apply(en,t)}function ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Bf,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function wp(t){if(Qe&6)throw Error(te(327));xs();var e=ml(t,0);if(!(e&1))return an(t,St()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Du(t);i!==0&&(e=i,n=ld(t,i))}if(n===1)throw n=za,Sr(t,0),Fi(t,e),an(t,St()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,en,ci),an(t,St()),null}function Gf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(As=St()+500,ql&&nr())}}function Rr(t){zi!==null&&zi.tag===0&&!(Qe&6)&&xs();var e=Qe;Qe|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,Qe=e,!(Qe&6)&&nr()}}function Hf(){hn=us.current,pt(us)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L_(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ts(),pt(rn),pt(Wt),Lf();break;case 5:Pf(i);break;case 4:Ts();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Af(i.type._context);break;case 22:case 23:Hf()}n=n.return}if(Dt=t,wt=t=Yi(t.current,null),Ot=hn=e,At=0,za=null,Bf=Ql=Ar=0,en=xa=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function G0(t,e){do{var n=wt;try{if(bf(),Qo.current=Cl,Rl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(br=0,Lt=bt=vt=null,ma=!1,Fa=0,zf.current=null,n===null||n.return===null){At=1,za=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=dp(a);if(m!==null){m.flags&=-257,fp(m,a,o,s,e),m.mode&1&&up(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){up(s,c,e),jf();break e}l=Error(te(426))}}else if(gt&&o.mode&1){var x=dp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),fp(x,a,o,s,e),wf(bs(l,o));break e}}s=l=bs(l,o),At!==4&&(At=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=T0(s,l,e);rp(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wi===null||!Wi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=b0(s,o,e);rp(s,y);break e}}s=s.return}while(s!==null)}W0(n)}catch(N){e=N,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function H0(){var t=Nl.current;return Nl.current=Cl,t===null?Cl:t}function jf(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Ar&268435455)&&!(Ql&268435455)||Fi(Dt,Ot)}function Il(t,e){var n=Qe;Qe|=2;var i=H0();(Dt!==t||Ot!==e)&&(ci=null,Sr(t,e));do try{iy();break}catch(r){G0(t,r)}while(!0);if(bf(),Qe=n,Nl.current=i,wt!==null)throw Error(te(261));return Dt=null,Ot=0,At}function iy(){for(;wt!==null;)j0(wt)}function ry(){for(;wt!==null&&!Cv();)j0(wt)}function j0(t){var e=Y0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?W0(t):wt=e,zf.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z_(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=K_(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function dr(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,sy(t,e,n,i)}finally{An.transition=r,it=i}return null}function sy(t,e,n,i){do xs();while(zi!==null);if(Qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zv(t,s),t===Dt&&(wt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,q0(pl,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=it;it=1;var o=Qe;Qe|=4,zf.current=null,J_(t,n),z0(n,t),T_(Bu),gl=!!zu,Bu=zu=null,t.current=n,ey(n),Nv(),Qe=o,it=a,An.transition=s}else t.current=n;if(go&&(go=!1,zi=t,Ll=r),s=t.pendingLanes,s===0&&(Wi=null),Iv(n.stateNode),an(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,t=ad,ad=null,t;return Ll&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===od?va++:(va=0,od=t):va=0,nr(),null}function xs(){if(zi!==null){var t=Tg(Ll),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Ll=0,Qe&6)throw Error(te(331));var r=Qe;for(Qe|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:ga(8,d,s)}var p=d.child;if(p!==null)p.return=d,me=p;else for(;me!==null;){d=me;var f=d.sibling,m=d.return;if(F0(d),d===c){me=null;break}if(f!==null){f.return=m,me=f;break}me=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var x=M.sibling;M.sibling=null,M=x}while(M!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){a=me;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,me=v;else e:for(a=g;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(N){Mt(o,o.return,N)}if(o===a){me=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,me=y;break e}me=o.return}}if(Qe=r,nr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function Tp(t,e,n){e=bs(n,e),e=T0(t,e,1),t=ji(t,e,1),e=Kt(),t!==null&&(Ha(t,1,e),an(t,e))}function Mt(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=bs(n,t),t=b0(e,t,1),e=ji(e,t,1),t=Kt(),e!==null&&(Ha(e,1,t),an(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>St()-Vf?Sr(t,0):Bf|=n),an(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=Kt();t=yi(t,e),t!==null&&(Ha(t,e,n),an(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),X0(t,n)}var Y0;Y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,$_(t,e,n);nn=!!(t.flags&131072)}else nn=!1,gt&&e.flags&1048576&&Zg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ss(e,Wt.current);gs(e,n),r=Df(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cf(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,$u(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Sf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=On(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=mp(null,e,i,t,n);break e;case 11:e=hp(null,e,i,t,n);break e;case 14:e=pp(null,e,i,On(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),mp(t,e,i,r,n);case 3:e:{if(N0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i0(t,e),bl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(te(423)),e),e=gp(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(te(424)),e),e=gp(t,e,i,n,r);break e}else for(mn=Hi(e.stateNode.containerInfo.firstChild),gn=e,gt=!0,zn=null,n=t0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=Mi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return r0(e),t===null&&Xu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Vu(i,r)?a=null:s!==null&&Vu(i,s)&&(e.flags|=32),C0(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&Xu(e),null;case 13:return P0(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),hp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(wl,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=Cn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),pp(t,e,i,r,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),el(t,e),e.tag=1,sn(i)?(t=!0,Ml(e)):t=!1,gs(e,n),w0(e,i,r),$u(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return L0(t,e,n);case 22:return R0(t,e,n)}throw Error(te(156,e.tag))};function q0(t,e){return Mg(t,e)}function cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new cy(t,e,n,i)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return Wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===df)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Wf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case es:return Er(n.children,r,s,e);case cf:a=8,r|=8;break;case _u:return t=bn(12,n,e,r|2),t.elementType=_u,t.lanes=s,t;case yu:return t=bn(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Mu:return t=bn(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case rg:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ng:a=10;break e;case ig:a=9;break e;case uf:a=11;break e;case df:a=14;break e;case Ii:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,i,r,s,a,o,l){return t=new dy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $0(t){if(!t)return Zi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return $g(t,n,e)}return e}function K0(t,e,n,i,r,s,a,o,l){return t=Xf(n,i,!0,t,r,s,a,o,l),t.context=$0(null),n=t.current,i=Kt(),r=Xi(n),s=gi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ha(t,r,i),an(t,i),t}function ec(t,e,n,i){var r=e.current,s=Kt(),a=Xi(r);return n=$0(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(Hn(t,r,a,s),Zo(t,r,a)),a}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function hy(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function qf(t){this._internalRoot=t}tc.prototype.render=qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ec(t,e,null,null)};tc.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){ec(null,t,null,null)}),e[_i]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Ng(t)}};function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dl(a);s.call(c)}}var a=K0(e,i,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=a,t[_i]=a.current,Pa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Dl(l);o.call(c)}}var l=Xf(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=l,t[_i]=l.current,Pa(t.nodeType===8?t.parentNode:t),Rr(function(){ec(e,l,n,i)}),l}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dl(a);o.call(l)}}ec(e,a,t,r)}else a=py(n,e,t,r,i);return Dl(a)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(pf(e,n|1),an(e,St()),!(Qe&6)&&(As=St()+500,nr()))}break;case 13:Rr(function(){var i=yi(t,1);if(i!==null){var r=Kt();Hn(i,t,1,r)}}),Yf(t,1)}};mf=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Kt();Hn(e,t,134217728,n)}Yf(t,134217728)}};Ag=function(t){if(t.tag===13){var e=Xi(t),n=yi(t,e);if(n!==null){var i=Kt();Hn(n,t,e,i)}Yf(t,e)}};Rg=function(){return it};Cg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Pu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(te(90));ag(i),wu(i,r)}}}break;case"textarea":lg(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};mg=Gf;gg=Rr;var my={usingClientEntryPoint:!1,Events:[Wa,rs,Yl,hg,pg,Gf]},Ks={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Hl=xo.inject(gy),Qn=xo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(te(200));return fy(t,e,null,n)};vn.createRoot=function(t,e){if(!$f(t))throw Error(te(299));var n=!1,i="",r=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Pa(t.nodeType===8?t.parentNode:t),new qf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Rr(t)};vn.hydrate=function(t,e,n){if(!nc(e))throw Error(te(200));return ic(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!$f(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=K0(e,null,t,1,n??null,r,!1,s,a),t[_i]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};vn.render=function(t,e,n){if(!nc(e))throw Error(te(200));return ic(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(te(40));return t._reactRootContainer?(Rr(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};vn.unstable_batchedUpdates=Gf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return ic(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qm.exports=vn;var xy=Qm.exports,Rp=xy;xu.createRoot=Rp.createRoot,xu.hydrateRoot=Rp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="170",vy=0,Cp=1,_y=2,J0=1,yy=2,li=3,Qi=0,on=1,di=2,qi=0,vs=1,ud=2,Np=3,Pp=4,My=5,pr=100,Sy=101,Ey=102,wy=103,Ty=104,by=200,Ay=201,Ry=202,Cy=203,dd=204,fd=205,Ny=206,Py=207,Ly=208,Iy=209,Dy=210,Uy=211,Fy=212,Oy=213,ky=214,hd=0,pd=1,md=2,Rs=3,gd=4,xd=5,vd=6,_d=7,ex=0,zy=1,By=2,$i=0,Vy=1,Gy=2,Hy=3,tx=4,jy=5,Wy=6,Xy=7,nx=300,Cs=301,Ns=302,yd=303,Md=304,rc=306,Sd=1e3,_r=1001,Ed=1002,jn=1003,Yy=1004,vo=1005,Zn=1006,kc=1007,yr=1008,Si=1009,ix=1010,rx=1011,Ba=1012,Zf=1013,Cr=1014,pi=1015,Ya=1016,Qf=1017,Jf=1018,Ps=1020,sx=35902,ax=1021,ox=1022,Vn=1023,lx=1024,cx=1025,_s=1026,Ls=1027,ux=1028,eh=1029,dx=1030,th=1031,nh=1033,rl=33776,sl=33777,al=33778,ol=33779,wd=35840,Td=35841,bd=35842,Ad=35843,Rd=36196,Cd=37492,Nd=37496,Pd=37808,Ld=37809,Id=37810,Dd=37811,Ud=37812,Fd=37813,Od=37814,kd=37815,zd=37816,Bd=37817,Vd=37818,Gd=37819,Hd=37820,jd=37821,ll=36492,Wd=36494,Xd=36495,fx=36283,Yd=36284,qd=36285,$d=36286,qy=3200,$y=3201,hx=0,Ky=1,Oi="",En="srgb",Os="srgb-linear",sc="linear",rt="srgb",Fr=7680,Lp=519,Zy=512,Qy=513,Jy=514,px=515,eM=516,tM=517,nM=518,iM=519,Ip=35044,Dp="300 es",mi=2e3,Ul=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Up=1234567;const _a=Math.PI/180,Va=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function It(t,e,n){return Math.max(e,Math.min(n,t))}function ih(t,e){return(t%e+e)%e}function rM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function sM(t,e,n){return t!==e?(n-t)/(e-t):0}function ya(t,e,n){return(1-n)*t+n*e}function aM(t,e,n,i){return ya(t,e,1-Math.exp(-n*i))}function oM(t,e=1){return e-Math.abs(ih(t,e*2)-e)}function lM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function cM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function dM(t,e){return t+Math.random()*(e-t)}function fM(t){return t*(.5-Math.random())}function hM(t){t!==void 0&&(Up=t);let e=Up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pM(t){return t*_a}function mM(t){return t*Va}function gM(t){return(t&t-1)===0&&t!==0}function xM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _M(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),p=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*p,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const zc={DEG2RAD:_a,RAD2DEG:Va,generateUUID:zs,clamp:It,euclideanModulo:ih,mapLinear:rM,inverseLerp:sM,lerp:ya,damp:aM,pingpong:oM,smoothstep:lM,smootherstep:cM,randInt:uM,randFloat:dM,randFloatSpread:fM,seededRandom:hM,degToRad:pM,radToDeg:mM,isPowerOfTwo:gM,ceilPowerOfTwo:xM,floorPowerOfTwo:vM,setQuaternionFromProperEuler:_M,normalize:Xt,denormalize:Zr};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],m=i[5],_=i[8],M=r[0],x=r[3],u=r[6],g=r[1],v=r[4],y=r[7],N=r[2],R=r[5],A=r[8];return s[0]=a*M+o*g+l*N,s[3]=a*x+o*v+l*R,s[6]=a*u+o*y+l*A,s[1]=c*M+d*g+p*N,s[4]=c*x+d*v+p*R,s[7]=c*u+d*y+p*A,s[2]=f*M+m*g+_*N,s[5]=f*x+m*v+_*R,s[8]=f*u+m*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new ke;function mx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yM(){const t=Fl("canvas");return t.style.display="block",t}const Fp={};function oa(t){t in Fp||(Fp[t]=!0,console.warn(t))}function MM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function EM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===rt&&(t.r=xi(t.r),t.g=xi(t.g),t.b=xi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===rt&&(t.r=ys(t.r),t.g=ys(t.g),t.b=ys(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Oi?sc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Op=[.64,.33,.3,.6,.15,.06],kp=[.2126,.7152,.0722],zp=[.3127,.329],Bp=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Os]:{primaries:Op,whitePoint:zp,transfer:sc,toXYZ:Bp,fromXYZ:Vp,luminanceCoefficients:kp,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Op,whitePoint:zp,transfer:rt,toXYZ:Bp,fromXYZ:Vp,luminanceCoefficients:kp,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Or;class wM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Fl("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class ln extends ks{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=_r,r=_r,s=Zn,a=yr,o=Vn,l=Si,c=ln.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=zs(),this.name="",this.source=new gx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=nx;ln.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],m=l[5],_=l[9],M=l[2],x=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-M)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+M)<.1&&Math.abs(_+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,N=(u+1)/2,R=(d+f)/4,A=(p+M)/4,C=(_+x)/4;return v>y&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):y>N?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=C/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-_)*(x-_)+(p-M)*(p-M)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(x-_)/g,this.y=(p-M)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends AM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xx extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=M;return}if(p!==M||l!==f||c!==m||d!==_){let x=1-o;const u=l*f+c*m+d*_+p*M,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const N=Math.sqrt(v),R=Math.atan2(N,u*g);x=Math.sin(x*R)/N,o=Math.sin(o*R)/N}const y=o*g;if(l=l*x+f*y,c=c*x+m*y,d=d*x+_*y,p=p*x+M*y,x===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=N,c*=N,d*=N,p*=N}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*p+l*m-c*f,e[n+1]=l*_+d*f+c*p-o*m,e[n+2]=c*_+d*m+o*f-l*p,e[n+3]=d*_-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*p+c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p-f*m*_;break;case"YXZ":this._x=f*d*p+c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p+f*m*_;break;case"ZXY":this._x=f*d*p-c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p-f*m*_;break;case"ZYX":this._x=f*d*p-c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p+f*m*_;break;case"YZX":this._x=f*d*p+c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p-f*m*_;break;case"XZY":this._x=f*d*p-c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*d,this.y=i+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new D,Gp=new qa;class $a{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),yo.subVectors(this.max,Zs),kr.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Br.subVectors(e.c,Zs),Ai.subVectors(zr,kr),Ri.subVectors(Br,zr),rr.subVectors(kr,Br);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-rr.z,rr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,rr.z,0,-rr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-rr.y,rr.x,0];return!Hc(n,kr,zr,Br,yo)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,kr,zr,Br,yo))?!1:(Mo.crossVectors(Ai,Ri),n=[Mo.x,Mo.y,Mo.z],Hc(n,kr,zr,Br,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,_o=new $a,kr=new D,zr=new D,Br=new D,Ai=new D,Ri=new D,rr=new D,Zs=new D,yo=new D,Mo=new D,sr=new D;function Hc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const CM=new $a,Qs=new D,jc=new D;class Ka{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(jc)),this.expandByPoint(Qs.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new D,Wc=new D,So=new D,Ci=new D,Xc=new D,Eo=new D,Yc=new D;class ac{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wc.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Wc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=Ci.dot(this.direction),l=-Ci.dot(So),c=Ci.lengthSq(),d=Math.abs(1-a*a);let p,f,m,_;if(d>0)if(p=a*l-o,f=a*o-l,_=s*d,p>=0)if(f>=-_)if(f<=_){const M=1/d;p*=M,f*=M,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Wc).addScaledVector(So,f),m}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),Eo.subVectors(i,e),Yc.crossVectors(Xc,Eo);let a=this.direction.dot(Yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(Ci,Eo));if(l<0)return null;const c=o*this.direction.dot(Xc.cross(Ci));if(c<0||l+c>a)return null;const d=-o*Ci.dot(Yc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,n,i,r,s,a,o,l,c,d,p,f,m,_,M,x){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,p,f,m,_,M,x)}set(e,n,i,r,s,a,o,l,c,d,p,f,m,_,M,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=f,u[3]=m,u[7]=_,u[11]=M,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*p,_=o*d,M=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,_=c*d,M=c*p;n[0]=f+M*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,_=c*d,M=c*p;n[0]=f-M*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*p,_=o*d,M=o*p;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+M,n[1]=l*p,n[5]=M*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*d,n[4]=M-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*p+_,n[10]=f-M*p}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=f*p+M,n[5]=a*d,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*d,n[10]=M*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NM,e,PM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ni.crossVectors(i,dn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ni.crossVectors(i,dn)),Ni.normalize(),wo.crossVectors(dn,Ni),r[0]=Ni.x,r[4]=wo.x,r[8]=dn.x,r[1]=Ni.y,r[5]=wo.y,r[9]=dn.y,r[2]=Ni.z,r[6]=wo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],m=i[13],_=i[2],M=i[6],x=i[10],u=i[14],g=i[3],v=i[7],y=i[11],N=i[15],R=r[0],A=r[4],C=r[8],T=r[12],E=r[1],L=r[5],H=r[9],V=r[13],$=r[2],Z=r[6],Y=r[10],ee=r[14],I=r[3],X=r[7],J=r[11],se=r[15];return s[0]=a*R+o*E+l*$+c*I,s[4]=a*A+o*L+l*Z+c*X,s[8]=a*C+o*H+l*Y+c*J,s[12]=a*T+o*V+l*ee+c*se,s[1]=d*R+p*E+f*$+m*I,s[5]=d*A+p*L+f*Z+m*X,s[9]=d*C+p*H+f*Y+m*J,s[13]=d*T+p*V+f*ee+m*se,s[2]=_*R+M*E+x*$+u*I,s[6]=_*A+M*L+x*Z+u*X,s[10]=_*C+M*H+x*Y+u*J,s[14]=_*T+M*V+x*ee+u*se,s[3]=g*R+v*E+y*$+N*I,s[7]=g*A+v*L+y*Z+N*X,s[11]=g*C+v*H+y*Y+N*J,s[15]=g*T+v*V+y*ee+N*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],m=e[14],_=e[3],M=e[7],x=e[11],u=e[15];return _*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*m-i*l*m)+M*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+x*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*p+n*o*f+r*a*p-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],m=e[11],_=e[12],M=e[13],x=e[14],u=e[15],g=p*x*c-M*f*c+M*l*m-o*x*m-p*l*u+o*f*u,v=_*f*c-d*x*c-_*l*m+a*x*m+d*l*u-a*f*u,y=d*M*c-_*p*c+_*o*m-a*M*m-d*o*u+a*p*u,N=_*p*l-d*M*l-_*o*f+a*M*f+d*o*x-a*p*x,R=n*g+i*v+r*y+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(M*f*s-p*x*s-M*r*m+i*x*m+p*r*u-i*f*u)*A,e[2]=(o*x*s-M*l*s+M*r*c-i*x*c-o*r*u+i*l*u)*A,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(d*x*s-_*f*s+_*r*m-n*x*m-d*r*u+n*f*u)*A,e[6]=(_*l*s-a*x*s-_*r*c+n*x*c+a*r*u-n*l*u)*A,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*A,e[8]=y*A,e[9]=(_*p*s-d*M*s-_*i*m+n*M*m+d*i*u-n*p*u)*A,e[10]=(a*M*s-_*o*s+_*i*c-n*M*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*p*s-d*i*c+n*p*c+a*i*m-n*o*m)*A,e[12]=N*A,e[13]=(d*M*r-_*p*r+_*i*f-n*M*f-d*i*x+n*p*x)*A,e[14]=(_*o*r-a*M*r-_*i*l+n*M*l+a*i*x-n*o*x)*A,e[15]=(a*p*r-d*o*r+d*i*l-n*p*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,p=o+o,f=s*c,m=s*d,_=s*p,M=a*d,x=a*p,u=o*p,g=l*c,v=l*d,y=l*p,N=i.x,R=i.y,A=i.z;return r[0]=(1-(M+u))*N,r[1]=(m+y)*N,r[2]=(_-v)*N,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(f+u))*R,r[6]=(x+g)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(x-g)*A,r[10]=(1-(f+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,d=1/a,p=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===mi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ul)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=mi){const l=this.elements,c=1/(n-e),d=1/(i-r),p=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,M;if(o===mi)_=(a+s)*p,M=-2*p;else if(o===Ul)_=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new D,Un=new at,NM=new D(0,0,0),PM=new D(1,1,1),Ni=new D,wo=new D,dn=new D,Hp=new at,jp=new qa;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";let rh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},LM=0;const Wp=new D,Gr=new qa,si=new at,To=new D,Js=new D,IM=new D,DM=new qa,Xp=new D(1,0,0),Yp=new D(0,1,0),qp=new D(0,0,1),$p={type:"added"},UM={type:"removed"},Hr={type:"childadded",child:null},qc={type:"childremoved",child:null};class Ut extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,n=new ei,i=new qa,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Js,To,this.up):si.lookAt(To,Js,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(si),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UM),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new D,ai=new D,$c=new D,oi=new D,jr=new D,Wr=new D,Kp=new D,Kc=new D,Zc=new D,Qc=new D,Jc=new st,eu=new st,tu=new st;class Bn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),ai.subVectors(i,n),$c.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(ai),l=Fn.dot($c),c=ai.dot(ai),d=ai.dot($c),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Jc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Jc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jc,s.x),a.addScaledVector(eu,s.y),a.addScaledVector(tu,s.z),a}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ai.subVectors(e,n),Fn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Wr.subVectors(s,i),Kc.subVectors(e,i);const l=jr.dot(Kc),c=Wr.dot(Kc);if(l<=0&&c<=0)return n.copy(i);Zc.subVectors(e,r);const d=jr.dot(Zc),p=Wr.dot(Zc);if(d>=0&&p<=d)return n.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(jr,a);Qc.subVectors(e,s);const m=jr.dot(Qc),_=Wr.dot(Qc);if(_>=0&&m<=_)return n.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Wr,o);const x=d*_-m*p;if(x<=0&&p-d>=0&&m-_>=0)return Kp.subVectors(s,r),o=(p-d)/(p-d+(m-_)),n.copy(r).addScaledVector(Kp,o);const u=1/(x+M+f);return a=M*u,o=f*u,n.copy(i).addScaledVector(jr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=ih(e,1),n=It(n,0,1),i=It(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ze.fromWorkingColorSpace(Ht.copy(this),e),Math.round(It(Ht.r*255,0,255))*65536+Math.round(It(Ht.g*255,0,255))*256+Math.round(It(Ht.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=En){Ze.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(bo);const i=ya(Pi.h,bo.h,n),r=ya(Pi.s,bo.s,n),s=ya(Pi.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new De;De.NAMES=vx;let FM=0;class Ir extends ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=zs(),this.name="",this.blending=vs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _x extends Ir{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,Ao=new Xe;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ip,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class yx extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mx extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OM=0;const Mn=new at,iu=new Ut,Xr=new D,fn=new $a,ea=new $a,Nt=new D;class $t extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?Mx:yx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(fn.min,ea.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,ea.max),fn.expandByPoint(Nt)):(fn.expandByPoint(ea.min),fn.expandByPoint(ea.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),Nt.add(Xr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;const c=new D,d=new D,p=new D,f=new Xe,m=new Xe,_=new Xe,M=new D,x=new D;function u(C,T,E){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,E),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,E),d.sub(c),p.sub(c),m.sub(f),_.sub(f);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(L),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),o[C].add(M),o[T].add(M),o[E].add(M),l[C].add(x),l[T].add(x),l[E].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,T=g.length;C<T;++C){const E=g[C],L=E.start,H=E.count;for(let V=L,$=L+H;V<$;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new D,y=new D,N=new D,R=new D;function A(C){N.fromBufferAttribute(r,C),R.copy(N);const T=o[C];v.copy(T),v.sub(N.multiplyScalar(N.dot(T))).normalize(),y.crossVectors(R,T);const L=y.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,T=g.length;C<T;++C){const E=g[C],L=E.start,H=E.count;for(let V=L,$=L+H;V<$;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,d=new D,p=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,x),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Rn(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new at,ar=new ac,Ro=new Ka,Qp=new D,Co=new D,No=new D,Po=new D,ru=new D,Lo=new D,Jp=new D,Io=new D;class tn extends Ut{constructor(e=new $t,n=new _x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(ru.fromBufferAttribute(p,e),a?Lo.addScaledVector(ru,d):Lo.addScaledVector(ru.sub(n),d))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ro.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ro,Qp)===null||ar.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const x=f[_],u=a[x.materialIndex],g=Math.max(x.start,m.start),v=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let y=g,N=v;y<N;y+=3){const R=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);r=Do(this,u,e,i,c,d,p,R,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let x=_,u=M;x<u;x+=3){const g=o.getX(x),v=o.getX(x+1),y=o.getX(x+2);r=Do(this,a,e,i,c,d,p,g,v,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const x=f[_],u=a[x.materialIndex],g=Math.max(x.start,m.start),v=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let y=g,N=v;y<N;y+=3){const R=y,A=y+1,C=y+2;r=Do(this,u,e,i,c,d,p,R,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let x=_,u=M;x<u;x+=3){const g=x,v=x+1,y=x+2;r=Do(this,a,e,i,c,d,p,g,v,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function kM(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qi,o),l===null)return null;Io.copy(o),Io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Io);return c<n.near||c>n.far?null:{distance:c,point:Io.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Co),t.getVertexPosition(l,No),t.getVertexPosition(c,Po);const d=kM(t,e,n,i,Co,No,Po,Jp);if(d){const p=new D;Bn.getBarycoord(Jp,Co,No,Po,p),r&&(d.uv=Bn.getInterpolatedAttribute(r,o,l,c,p,new Xe)),s&&(d.uv1=Bn.getInterpolatedAttribute(s,o,l,c,p,new Xe)),a&&(d.normal=Bn.getInterpolatedAttribute(a,o,l,c,p,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Bn.getNormal(Co,No,Po,f.normal),d.face=f,d.barycoord=p}return d}class Za extends $t{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(p,2));function _(M,x,u,g,v,y,N,R,A,C,T){const E=y/A,L=N/C,H=y/2,V=N/2,$=R/2,Z=A+1,Y=C+1;let ee=0,I=0;const X=new D;for(let J=0;J<Y;J++){const se=J*L-V;for(let Me=0;Me<Z;Me++){const $e=Me*E-H;X[M]=$e*g,X[x]=se*v,X[u]=$,c.push(X.x,X.y,X.z),X[M]=0,X[x]=0,X[u]=R>0?1:-1,d.push(X.x,X.y,X.z),p.push(Me/A),p.push(1-J/C),ee+=1}}for(let J=0;J<C;J++)for(let se=0;se<A;se++){const Me=f+se+Z*J,$e=f+se+Z*(J+1),W=f+(se+1)+Z*(J+1),ne=f+(se+1)+Z*J;l.push(Me,$e,ne),l.push($e,W,ne),I+=6}o.addGroup(m,I,T),m+=I,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function zM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const BM={clone:Is,merge:Yt};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ir{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ex extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new D,em=new Xe,tm=new Xe;class pn extends Ex{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class HM extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Yr,qr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Yr,qr,e,n);s.layers=this.layers,this.add(s);const a=new pn(Yr,qr,e,n);a.layers=this.layers,this.add(a);const o=new pn(Yr,qr,e,n);o.layers=this.layers,this.add(o);const l=new pn(Yr,qr,e,n);l.layers=this.layers,this.add(l);const c=new pn(Yr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wx extends ln{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jM extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:qi});s.uniforms.tEquirect.value=n;const a=new tn(r,s),o=n.minFilter;return n.minFilter===yr&&(n.minFilter=Zn),new HM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const su=new D,WM=new D,XM=new ke;class fr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross(WM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XM.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ka,Uo=new D;class sh{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],f=r[7],m=r[8],_=r[9],M=r[10],x=r[11],u=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,x-m,y-u).normalize(),i[1].setComponents(l+s,f+c,x+m,y+u).normalize(),i[2].setComponents(l+a,f+d,x+_,y+g).normalize(),i[3].setComponents(l-a,f-d,x-_,y-g).normalize(),i[4].setComponents(l-o,f-p,x-M,y-v).normalize(),n===mi)i[5].setComponents(l+o,f+p,x+M,y+v).normalize();else if(n===Ul)i[5].setComponents(o,p,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Uo.x=r.normal.x>0?e.max.x:e.min.x,Uo.y=r.normal.y>0?e.max.y:e.min.y,Uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YM(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],M=p[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const M=p[m];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class oc extends $t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,p=e/o,f=n/l,m=[],_=[],M=[],x=[];for(let u=0;u<d;u++){const g=u*f-a;for(let v=0;v<c;v++){const y=v*p-s;_.push(y,-g,0),M.push(0,0,1),x.push(v/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,y=g+c*(u+1),N=g+1+c*(u+1),R=g+1+c*u;m.push(v,y,R),m.push(y,N,R)}this.setIndex(m),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(M,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:qM,alphahash_pars_fragment:$M,alphamap_fragment:KM,alphamap_pars_fragment:ZM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:a1,iridescence_fragment:o1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:f1,color_fragment:h1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:x1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:y1,displacementmap_vertex:M1,emissivemap_fragment:S1,emissivemap_pars_fragment:E1,colorspace_fragment:w1,colorspace_pars_fragment:T1,envmap_fragment:b1,envmap_common_pars_fragment:A1,envmap_pars_fragment:R1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:B1,envmap_vertex:N1,fog_vertex:P1,fog_pars_vertex:L1,fog_fragment:I1,fog_pars_fragment:D1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:k1,lights_pars_begin:z1,lights_toon_fragment:V1,lights_toon_pars_fragment:G1,lights_phong_fragment:H1,lights_phong_pars_fragment:j1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:Y1,lights_fragment_maps:q1,lights_fragment_end:$1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:yS,opaque_fragment:MS,packing:SS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:bS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:RS,shadowmap_pars_fragment:CS,shadowmap_pars_vertex:NS,shadowmap_vertex:PS,shadowmask_pars_fragment:LS,skinbase_vertex:IS,skinning_pars_vertex:DS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:zS,tonemapping_pars_fragment:BS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:HS,uv_pars_vertex:jS,uv_vertex:WS,worldpos_vertex:XS,background_vert:YS,background_frag:qS,backgroundCube_vert:$S,backgroundCube_frag:KS,cube_vert:ZS,cube_frag:QS,depth_vert:JS,depth_frag:eE,distanceRGBA_vert:tE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:aE,meshbasic_vert:oE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:dE,meshmatcap_frag:fE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:xE,meshphysical_frag:vE,meshtoon_vert:_E,meshtoon_frag:yE,points_vert:ME,points_frag:SE,shadow_vert:EE,shadow_frag:wE,sprite_vert:TE,sprite_frag:bE},le={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},$n={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};$n.physical={uniforms:Yt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Fo={r:0,b:0,g:0},lr=new ei,AE=new at;function RE(t,e,n,i,r,s,a){const o=new De(0);let l=s===!0?0:1,c,d,p=null,f=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function M(g){let v=!1;const y=_(g);y===null?u(o,l):y&&y.isColor&&(u(y,1),v=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(g,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===rc)?(d===void 0&&(d=new tn(new Za(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Is($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),lr.copy(v.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(lr)),d.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,(p!==y||f!==y.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tn(new oc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Is($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Fo,Sx(t)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:M,addToRenderList:x}}function CE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(E,L,H,V,$){let Z=!1;const Y=p(V,H,L);s!==Y&&(s=Y,c(s.object)),Z=m(E,V,H,$),Z&&_(E,V,H,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(E,L,H,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function p(E,L,H){const V=H.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let Y=Z[V];return Y===void 0&&(Y=f(l()),Z[V]=Y),Y}function f(E){const L=[],H=[],V=[];for(let $=0;$<n;$++)L[$]=0,H[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:V,object:E,attributes:{},index:null}}function m(E,L,H,V){const $=s.attributes,Z=L.attributes;let Y=0;const ee=H.getAttributes();for(const I in ee)if(ee[I].location>=0){const J=$[I];let se=Z[I];if(se===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function _(E,L,H,V){const $={},Z=L.attributes;let Y=0;const ee=H.getAttributes();for(const I in ee)if(ee[I].location>=0){let J=Z[I];J===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),$[I]=se,Y++}s.attributes=$,s.attributesNum=Y,s.index=V}function M(){const E=s.newAttributes;for(let L=0,H=E.length;L<H;L++)E[L]=0}function x(E){u(E,0)}function u(E,L){const H=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;H[E]=1,V[E]===0&&(t.enableVertexAttribArray(E),V[E]=1),$[E]!==L&&(t.vertexAttribDivisor(E,L),$[E]=L)}function g(){const E=s.newAttributes,L=s.enabledAttributes;for(let H=0,V=L.length;H<V;H++)L[H]!==E[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function v(E,L,H,V,$,Z,Y){Y===!0?t.vertexAttribIPointer(E,L,H,$,Z):t.vertexAttribPointer(E,L,H,V,$,Z)}function y(E,L,H,V){M();const $=V.attributes,Z=H.getAttributes(),Y=L.defaultAttributeValues;for(const ee in Z){const I=Z[ee];if(I.location>=0){let X=$[ee];if(X===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const J=X.normalized,se=X.itemSize,Me=e.get(X);if(Me===void 0)continue;const $e=Me.buffer,W=Me.type,ne=Me.bytesPerElement,ue=W===t.INT||W===t.UNSIGNED_INT||X.gpuType===Zf;if(X.isInterleavedBufferAttribute){const ae=X.data,Ae=ae.stride,Pe=X.offset;if(ae.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)u(I.location+ze,ae.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ze=0;ze<I.locationSize;ze++)x(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ze=0;ze<I.locationSize;ze++)v(I.location+ze,se/I.locationSize,W,J,Ae*ne,(Pe+se/I.locationSize*ze)*ne,ue)}else{if(X.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)u(I.location+ae,X.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ae=0;ae<I.locationSize;ae++)x(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ae=0;ae<I.locationSize;ae++)v(I.location+ae,se/I.locationSize,W,J,se*ne,se/I.locationSize*ae*ne,ue)}}else if(Y!==void 0){const J=Y[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}g()}function N(){C();for(const E in i){const L=i[E];for(const H in L){const V=L[H];for(const $ in V)d(V[$].object),delete V[$];delete L[H]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const H in L){const V=L[H];for(const $ in V)d(V[$].object),delete V[$];delete L[H]}delete i[E.id]}function A(E){for(const L in i){const H=i[L];if(H[E.id]===void 0)continue;const V=H[E.id];for(const $ in V)d(V[$].object),delete V[$];delete H[E.id]}}function C(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:x,disableUnusedAttributes:g}}function NE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,p){p!==0&&(t.drawArraysInstanced(i,c,d,p),n.update(d,i,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];n.update(m,i,1)}function l(c,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,p);let _=0;for(let M=0;M<p;M++)_+=d[M]*f[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Vn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:N,maxSamples:R}}function LE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!x)s?d(null):c();else{const g=s?0:i,v=g*4;let y=u.clippingState||null;l.value=y,y=d(_,f,v,m);for(let N=0;N!==v;++N)y[N]=n[N];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,_){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=l.value,_!==!0||x===null){const u=m+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<u)&&(x=new Float32Array(u));for(let v=0,y=m;v!==M;++v,y+=4)a.copy(p[v]).applyMatrix4(g,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function IE(t){let e=new WeakMap;function n(a,o){return o===yd?a.mapping=Cs:o===Md&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yd||o===Md)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bx extends Ex{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,nm=[.125,.215,.35,.446,.526,.582],mr=20,au=new bx,im=new De;let ou=null,lu=0,cu=0,uu=!1;const hr=(1+Math.sqrt(5))/2,$r=1/hr,rm=[new D(-hr,$r,0),new D(hr,$r,0),new D(-$r,0,hr),new D($r,0,hr),new D(0,hr,-$r),new D(0,hr,$r),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ya,format:Vn,colorSpace:Os,depthBuffer:!1},r=am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(s)),this._blurMaterial=UE(s,e,n)}return r}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,au)}_sceneToCubeUV(e,n,i,r){const o=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(im),d.toneMapping=$i,d.autoClear=!1;const m=new _x({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new tn(new Za,m);let M=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,M=!0):(m.color.copy(im),M=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Oo(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),M&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rm[(r-s-1)%rm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new tn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mr-1),M=s/_,x=isFinite(s)?1+Math.floor(d*M):mr;x>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${mr}`);const u=[];let g=0;for(let A=0;A<mr;++A){const C=A/M,T=Math.exp(-C*C/2);u.push(T),A===0?g+=T:A<x&&(g+=2*T)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],N=3*y*(r>v-ds?r-v+ds:0),R=4*(this._cubeSize-y);Oo(n,N,R,3*y,2*y),l.setRenderTarget(n),l.render(p,au)}}function DE(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+nm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ds?l=nm[a-t+ds-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,M=3,x=2,u=1,g=new Float32Array(M*_*m),v=new Float32Array(x*_*m),y=new Float32Array(u*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,C=R>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];g.set(T,M*_*R),v.set(f,x*_*R);const E=[R,R,R,R,R,R];y.set(E,u*_*R)}const N=new $t;N.setAttribute("position",new Rn(g,M)),N.setAttribute("uv",new Rn(v,x)),N.setAttribute("faceIndex",new Rn(y,u)),e.push(N),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function am(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UE(t,e,n){const i=new Float32Array(mr),r=new D(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function om(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function lm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yd||l===Md,d=l===Cs||l===Ns;if(c||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new sm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new sm(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function OE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kE(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let x=0,u=M.length;x<u;x++)e.remove(M[x])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const M=m[_];for(let x=0,u=M.length;x<u;x++)e.update(M[x],t.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,_=p.attributes.position;let M=0;if(m!==null){const g=m.array;M=m.version;for(let v=0,y=g.length;v<y;v+=3){const N=g[v+0],R=g[v+1],A=g[v+2];f.push(N,R,R,A,A,N)}}else if(_!==void 0){const g=_.array;M=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const N=v+0,R=v+1,A=v+2;f.push(N,R,R,A,A,N)}}else return;const x=new(mx(f)?Mx:yx)(f,1);x.version=M;const u=s.get(p);u&&e.remove(u),s.set(p,x)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function zE(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let x=0;for(let u=0;u<_;u++)x+=m[u];n.update(x,i,1)}function p(f,m,_,M){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],M[u]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g]*M[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function BE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VE(t,e,n){const i=new WeakMap,r=new st;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),x===!0&&(y=3);let N=o.attributes.position.count*y,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*R*4*p),C=new xx(A,N,R,p);C.type=pi,C.needsUpdate=!0;const T=y*4;for(let L=0;L<p;L++){const H=u[L],V=g[L],$=v[L],Z=N*R*4*L;for(let Y=0;Y<H.count;Y++){const ee=Y*T;_===!0&&(r.fromBufferAttribute(H,Y),A[Z+ee+0]=r.x,A[Z+ee+1]=r.y,A[Z+ee+2]=r.z,A[Z+ee+3]=0),M===!0&&(r.fromBufferAttribute(V,Y),A[Z+ee+4]=r.x,A[Z+ee+5]=r.y,A[Z+ee+6]=r.z,A[Z+ee+7]=0),x===!0&&(r.fromBufferAttribute($,Y),A[Z+ee+8]=r.x,A[Z+ee+9]=r.y,A[Z+ee+10]=r.z,A[Z+ee+11]=$.itemSize===4?r.w:1)}}f={count:p,texture:C,size:new Xe(N,R)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function GE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Ax extends ln{constructor(e,n,i,r,s,a,o,l,c,d=_s){if(d!==_s&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===_s&&(i=Cr),i===void 0&&d===Ls&&(i=Ps),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rx=new ln,cm=new Ax(1,1),Cx=new xx,Nx=new RM,Px=new wx,um=[],dm=[],fm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=um[r];if(s===void 0&&(s=new Float32Array(r),um[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lc(t,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;pm.set(i),t.uniformMatrix2fv(this.addr,!1,pm),Ct(n,i)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;hm.set(i),t.uniformMatrix3fv(this.addr,!1,hm),Ct(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;fm.set(i),t.uniformMatrix4fv(this.addr,!1,fm),Ct(n,i)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cm.compareFunction=px,s=cm):s=Rx,n.setTexture2D(e||s,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nx,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Px,r)}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cx,r)}function lw(t){switch(t){case 5126:return HE;case 35664:return jE;case 35665:return WE;case 35666:return XE;case 35674:return YE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return ow}}function cw(t,e){t.uniform1fv(this.addr,e)}function uw(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function dw(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function fw(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function hw(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pw(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mw(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gw(t,e){t.uniform1iv(this.addr,e)}function xw(t,e){t.uniform2iv(this.addr,e)}function vw(t,e){t.uniform3iv(this.addr,e)}function _w(t,e){t.uniform4iv(this.addr,e)}function yw(t,e){t.uniform1uiv(this.addr,e)}function Mw(t,e){t.uniform2uiv(this.addr,e)}function Sw(t,e){t.uniform3uiv(this.addr,e)}function Ew(t,e){t.uniform4uiv(this.addr,e)}function ww(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Rx,s[a])}function Tw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Nx,s[a])}function bw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Px,s[a])}function Aw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Cx,s[a])}function Rw(t){switch(t){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return xw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return Mw;case 36295:return Sw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Aw}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lw(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rw(n.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function mm(t,e){t.seq.push(e),t.map[e.id]=e}function Lw(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mm(n,c===void 0?new Cw(o,t,e):new Nw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Pw(o),mm(n,p)),n=p}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Lw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Iw=37297;let Dw=0;function Uw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const xm=new ke;function Fw(t){Ze._getMatrix(xm,Ze.workingColorSpace,t);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case sc:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Uw(t.getShaderSource(e),a)}else return r}function Ow(t,e){const n=Fw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kw(t,e){let n;switch(e){case Vy:n="Linear";break;case Gy:n="Reinhard";break;case Hy:n="Cineon";break;case tx:n="ACESFilmic";break;case Wy:n="AgX";break;case Xy:n="Neutral";break;case jy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new D;function zw(){Ze.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Vw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function _m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(Hw,Ww)}const jw=new Map;function Ww(t,e){let n=Ve[e];if(n===void 0){const i=jw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(t){return t.replace(Xw,Yw)}function Yw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Ns:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Zw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case By:e="ENVMAP_BLENDING_ADD";break}return e}function Qw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Jw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=qw(n),c=$w(n),d=Kw(n),p=Zw(n),f=Qw(n),m=Bw(n),_=Vw(s),M=r.createProgram();let x,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(la).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(la).join(`
`),u.length>0&&(u+=`
`)):(x=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),u=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Ve.tonemapping_pars_fragment:"",n.toneMapping!==$i?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ow("linearToOutputTexel",n.outputColorSpace),zw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Kd(a),a=_m(a,n),a=ym(a,n),o=Kd(o),o=_m(o,n),o=ym(o,n),a=Mm(a),o=Mm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+x+a,y=g+u+o,N=gm(r,r.VERTEX_SHADER,v),R=gm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,N),r.attachShader(M,R),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(M).trim(),V=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(R).trim();let Z=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,N,R);else{const ee=vm(r,N,"vertex"),I=vm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:Z,programLog:H,vertexShader:{log:V,prefix:x},fragmentShader:{log:$,prefix:u}})}r.deleteShader(N),r.deleteShader(R),C=new cl(r,M),T=Gw(r,M)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(M,Iw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=R,this}let eT=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nT(e),n.set(e,i)),i}}class nT{constructor(e){this.id=eT++,this.code=e,this.usedTimes=0}}function iT(t,e,n,i,r,s,a){const o=new rh,l=new tT,c=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,E,L,H,V){const $=H.fog,Z=V.geometry,Y=T.isMeshStandardMaterial?H.environment:null,ee=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),I=ee&&ee.mapping===rc?ee.image.height:null,X=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const J=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=J!==void 0?J.length:0;let Me=0;Z.morphAttributes.position!==void 0&&(Me=1),Z.morphAttributes.normal!==void 0&&(Me=2),Z.morphAttributes.color!==void 0&&(Me=3);let $e,W,ne,ue;if(X){const nt=$n[X];$e=nt.vertexShader,W=nt.fragmentShader}else $e=T.vertexShader,W=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),ue=l.getFragmentShaderID(T);const ae=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Pe=V.isInstancedMesh===!0,ze=V.isBatchedMesh===!0,ot=!!T.map,qe=!!T.matcap,mt=!!ee,P=!!T.aoMap,Ue=!!T.lightMap,Ce=!!T.bumpMap,be=!!T.normalMap,ge=!!T.displacementMap,He=!!T.emissiveMap,ve=!!T.metalnessMap,b=!!T.roughnessMap,S=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,q=T.iridescence>0,G=T.sheen>0,xe=T.transmission>0,oe=S&&!!T.anisotropyMap,pe=k&&!!T.clearcoatMap,We=k&&!!T.clearcoatNormalMap,ie=k&&!!T.clearcoatRoughnessMap,_e=q&&!!T.iridescenceMap,Ne=q&&!!T.iridescenceThicknessMap,Le=G&&!!T.sheenColorMap,ye=G&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Be=!!T.specularColorMap,lt=!!T.specularIntensityMap,U=xe&&!!T.transmissionMap,ce=xe&&!!T.thicknessMap,j=!!T.gradientMap,Q=!!T.alphaMap,he=T.alphaTest>0,de=!!T.alphaHash,Fe=!!T.extensions;let yt=$i;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=t.toneMapping);const zt={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:W,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ze,batchingColor:ze&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Os,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:qe,envMap:mt,envMapMode:mt&&ee.mapping,envMapCubeUVHeight:I,aoMap:P,lightMap:Ue,bumpMap:Ce,normalMap:be,displacementMap:f&&ge,emissiveMap:He,normalMapObjectSpace:be&&T.normalMapType===Ky,normalMapTangentSpace:be&&T.normalMapType===hx,metalnessMap:ve,roughnessMap:b,anisotropy:S,anisotropyMap:oe,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:We,clearcoatRoughnessMap:ie,dispersion:K,iridescence:q,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:G,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:Ke,specularColorMap:Be,specularIntensityMap:lt,transmission:xe,transmissionMap:U,thicknessMap:ce,gradientMap:j,opaque:T.transparent===!1&&T.blending===vs&&T.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:de,combine:T.combine,mapUv:ot&&M(T.map.channel),aoMapUv:P&&M(T.aoMap.channel),lightMapUv:Ue&&M(T.lightMap.channel),bumpMapUv:Ce&&M(T.bumpMap.channel),normalMapUv:be&&M(T.normalMap.channel),displacementMapUv:ge&&M(T.displacementMap.channel),emissiveMapUv:He&&M(T.emissiveMap.channel),metalnessMapUv:ve&&M(T.metalnessMap.channel),roughnessMapUv:b&&M(T.roughnessMap.channel),anisotropyMapUv:oe&&M(T.anisotropyMap.channel),clearcoatMapUv:pe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&M(T.sheenRoughnessMap.channel),specularMapUv:Ke&&M(T.specularMap.channel),specularColorMapUv:Be&&M(T.specularColorMap.channel),specularIntensityMapUv:lt&&M(T.specularIntensityMap.channel),transmissionMapUv:U&&M(T.transmissionMap.channel),thicknessMapUv:ce&&M(T.thicknessMap.channel),alphaMapUv:Q&&M(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(be||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(ot||Q),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ae,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:He&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===on,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(g(E,T),v(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function v(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const E=_[T.type];let L;if(E){const H=$n[E];L=BM.clone(H.uniforms)}else L=T.uniforms;return L}function N(T,E){let L;for(let H=0,V=d.length;H<V;H++){const $=d[H];if($.cacheKey===E){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Jw(t,E,T,s),d.push(L)),L}function R(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:y,acquireProgram:N,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:C}}function rT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Em(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,_,M,x){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:M,group:x},t[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=M,u.group=x),e++,u}function o(p,f,m,_,M,x){const u=a(p,f,m,_,M,x);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(p,f,m,_,M,x){const u=a(p,f,m,_,M,x);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,f){n.length>1&&n.sort(p||sT),i.length>1&&i.sort(f||Em),r.length>1&&r.sort(f||Em)}function d(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function aT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new wm,t.set(i,[a])):r>=s.length?(a=new wm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new De};break;case"SpotLight":n={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function lT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cT=0;function uT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dT(t){const e=new oT,n=lT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new at,a=new at;function o(c){let d=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,M=0,x=0,u=0,g=0,v=0,y=0,N=0,R=0,A=0;c.sort(uT);for(let T=0,E=c.length;T<E;T++){const L=c[T],H=L.color,V=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*V,p+=H.g*V,f+=H.b*V;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);A++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(V),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[M]=Y;const ee=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,ee.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[M]=ee.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.spotShadow[M]=I,i.spotShadowMap[M]=Z,y++}M++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(H).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=Y,x++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const ee=L.shadow,I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V),Y.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[u]=Y,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==M||C.rectAreaLength!==x||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==N||C.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=x,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,C.directionalLength=m,C.pointLength=_,C.spotLength=M,C.rectAreaLength=x,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=N,C.numLightProbes=A,i.version=cT++)}function l(c,d){let p=0,f=0,m=0,_=0,M=0;const x=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),p++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),a.identity(),s.copy(v.matrixWorld),s.premultiply(x),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),f++}else if(v.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(x),M++}}}return{setup:o,setupView:l,state:i}}function Tm(t){const e=new dT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tm(t),e.set(r,[o])):s>=a.length?(o=new Tm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class hT extends Ir{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends Ir{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xT(t,e,n){let i=new sh;const r=new Xe,s=new Xe,a=new st,o=new hT({depthPacking:$y}),l=new pT,c={},d=n.maxTextureSize,p={[Qi]:on,[on]:Qi,[di]:di},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new tn(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let u=this.type;this.render=function(R,A,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=u!==li&&this.type===li,$=u===li&&this.type!==li;for(let Z=0,Y=R.length;Z<Y;Z++){const ee=R[Z],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const X=I.getFrameExtents();if(r.multiply(X),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null||V===!0||$===!0){const se=this.type!==li?{minFilter:jn,magFilter:jn}:{};I.map!==null&&I.map.dispose(),I.map=new Nr(r.x,r.y,se),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let se=0;se<J;se++){const Me=I.getViewport(se);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),H.viewport(a),I.updateMatrices(ee,se),i=I.getFrustum(),y(A,C,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===li&&g(I,C),I.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(T,E,L)};function g(R,A){const C=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,C,f,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,C,m,M,null)}function v(R,A,C,T){let E=null;const L=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)E=L;else if(E=C.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=E.uuid,V=A.uuid;let $=c[H];$===void 0&&($={},c[H]=$);let Z=$[V];Z===void 0&&(Z=E.clone(),$[V]=Z,A.addEventListener("dispose",N)),E=Z}if(E.visible=A.visible,E.wireframe=A.wireframe,T===li?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:p[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=t.properties.get(E);H.light=C}return E}function y(R,A,C,T,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const V=e.update(R),$=R.material;if(Array.isArray($)){const Z=V.groups;for(let Y=0,ee=Z.length;Y<ee;Y++){const I=Z[Y],X=$[I.materialIndex];if(X&&X.visible){const J=v(R,X,T,E);R.onBeforeShadow(t,R,A,C,V,J,I),t.renderBufferDirect(C,null,V,J,R,I),R.onAfterShadow(t,R,A,C,V,J,I)}}}else if($.visible){const Z=v(R,$,T,E);R.onBeforeShadow(t,R,A,C,V,Z,null),t.renderBufferDirect(C,null,V,Z,R,null),R.onAfterShadow(t,R,A,C,V,Z,null)}}const H=R.children;for(let V=0,$=H.length;V<$;V++)y(H[V],A,C,T,E)}function N(R){R.target.removeEventListener("dispose",N);for(const C in c){const T=c[C],E=R.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const vT={[hd]:pd,[md]:vd,[gd]:_d,[Rs]:xd,[pd]:hd,[vd]:md,[_d]:gd,[xd]:Rs};function _T(t,e){function n(){let U=!1;const ce=new st;let j=null;const Q=new st(0,0,0,0);return{setMask:function(he){j!==he&&!U&&(t.colorMask(he,he,he,he),j=he)},setLocked:function(he){U=he},setClear:function(he,de,Fe,yt,zt){zt===!0&&(he*=yt,de*=yt,Fe*=yt),ce.set(he,de,Fe,yt),Q.equals(ce)===!1&&(t.clearColor(he,de,Fe,yt),Q.copy(ce))},reset:function(){U=!1,j=null,Q.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,j=null,Q=null,he=null;return{setReversed:function(de){if(ce!==de){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const yt=he;he=null,this.setClear(yt)}ce=de},getReversed:function(){return ce},setTest:function(de){de?ae(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(de){j!==de&&!U&&(t.depthMask(de),j=de)},setFunc:function(de){if(ce&&(de=vT[de]),Q!==de){switch(de){case hd:t.depthFunc(t.NEVER);break;case pd:t.depthFunc(t.ALWAYS);break;case md:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case gd:t.depthFunc(t.EQUAL);break;case xd:t.depthFunc(t.GEQUAL);break;case vd:t.depthFunc(t.GREATER);break;case _d:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=de}},setLocked:function(de){U=de},setClear:function(de){he!==de&&(ce&&(de=1-de),t.clearDepth(de),he=de)},reset:function(){U=!1,j=null,Q=null,he=null,ce=!1}}}function r(){let U=!1,ce=null,j=null,Q=null,he=null,de=null,Fe=null,yt=null,zt=null;return{setTest:function(nt){U||(nt?ae(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,Pn,ti){(j!==nt||Q!==Pn||he!==ti)&&(t.stencilFunc(nt,Pn,ti),j=nt,Q=Pn,he=ti)},setOp:function(nt,Pn,ti){(de!==nt||Fe!==Pn||yt!==ti)&&(t.stencilOp(nt,Pn,ti),de=nt,Fe=Pn,yt=ti)},setLocked:function(nt){U=nt},setClear:function(nt){zt!==nt&&(t.clearStencil(nt),zt=nt)},reset:function(){U=!1,ce=null,j=null,Q=null,he=null,de=null,Fe=null,yt=null,zt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},f=new WeakMap,m=[],_=null,M=!1,x=null,u=null,g=null,v=null,y=null,N=null,R=null,A=new De(0,0,0),C=0,T=!1,E=null,L=null,H=null,V=null,$=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(I)[1]),Y=ee>=1):I.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Y=ee>=2);let X=null,J={};const se=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),$e=new st().fromArray(se),W=new st().fromArray(Me);function ne(U,ce,j,Q){const he=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<j;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return de}const ue={};ue[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),a.setFunc(Rs),Ce(!1),be(Cp),ae(t.CULL_FACE),P(qi);function ae(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function Ae(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Pe(U,ce){return p[U]!==ce?(t.bindFramebuffer(U,ce),p[U]=ce,U===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ze(U,ce){let j=m,Q=!1;if(U){j=f.get(ce),j===void 0&&(j=[],f.set(ce,j));const he=U.textures;if(j.length!==he.length||j[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Fe=he.length;de<Fe;de++)j[de]=t.COLOR_ATTACHMENT0+de;j.length=he.length,Q=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,Q=!0);Q&&t.drawBuffers(j)}function ot(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const qe={[pr]:t.FUNC_ADD,[Sy]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};qe[wy]=t.MIN,qe[Ty]=t.MAX;const mt={[by]:t.ZERO,[Ay]:t.ONE,[Ry]:t.SRC_COLOR,[dd]:t.SRC_ALPHA,[Dy]:t.SRC_ALPHA_SATURATE,[Ly]:t.DST_COLOR,[Ny]:t.DST_ALPHA,[Cy]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[Iy]:t.ONE_MINUS_DST_COLOR,[Py]:t.ONE_MINUS_DST_ALPHA,[Uy]:t.CONSTANT_COLOR,[Fy]:t.ONE_MINUS_CONSTANT_COLOR,[Oy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function P(U,ce,j,Q,he,de,Fe,yt,zt,nt){if(U===qi){M===!0&&(Ae(t.BLEND),M=!1);return}if(M===!1&&(ae(t.BLEND),M=!0),U!==My){if(U!==x||nt!==T){if((u!==pr||y!==pr)&&(t.blendEquation(t.FUNC_ADD),u=pr,y=pr),nt)switch(U){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,v=null,N=null,R=null,A.set(0,0,0),C=0,x=U,T=nt}return}he=he||ce,de=de||j,Fe=Fe||Q,(ce!==u||he!==y)&&(t.blendEquationSeparate(qe[ce],qe[he]),u=ce,y=he),(j!==g||Q!==v||de!==N||Fe!==R)&&(t.blendFuncSeparate(mt[j],mt[Q],mt[de],mt[Fe]),g=j,v=Q,N=de,R=Fe),(yt.equals(A)===!1||zt!==C)&&(t.blendColor(yt.r,yt.g,yt.b,zt),A.copy(yt),C=zt),x=U,T=!1}function Ue(U,ce){U.side===di?Ae(t.CULL_FACE):ae(t.CULL_FACE);let j=U.side===on;ce&&(j=!j),Ce(j),U.blending===vs&&U.transparent===!1?P(qi):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function be(U){U!==vy?(ae(t.CULL_FACE),U!==L&&(U===Cp?t.cullFace(t.BACK):U===_y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),L=U}function ge(U){U!==H&&(Y&&t.lineWidth(U),H=U)}function He(U,ce,j){U?(ae(t.POLYGON_OFFSET_FILL),(V!==ce||$!==j)&&(t.polygonOffset(ce,j),V=ce,$=j)):Ae(t.POLYGON_OFFSET_FILL)}function ve(U){U?ae(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function b(U){U===void 0&&(U=t.TEXTURE0+Z-1),X!==U&&(t.activeTexture(U),X=U)}function S(U,ce,j){j===void 0&&(X===null?j=t.TEXTURE0+Z-1:j=X);let Q=J[j];Q===void 0&&(Q={type:void 0,texture:void 0},J[j]=Q),(Q.type!==U||Q.texture!==ce)&&(X!==j&&(t.activeTexture(j),X=j),t.bindTexture(U,ce||ue[U]),Q.type=U,Q.texture=ce)}function k(){const U=J[X];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){$e.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),$e.copy(U))}function ye(U){W.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function Ke(U,ce){let j=c.get(ce);j===void 0&&(j=new WeakMap,c.set(ce,j));let Q=j.get(U);Q===void 0&&(Q=t.getUniformBlockIndex(ce,U.name),j.set(U,Q))}function Be(U,ce){const Q=c.get(ce).get(U);l.get(ce)!==Q&&(t.uniformBlockBinding(ce,Q,U.__bindingPointIndex),l.set(ce,Q))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,J={},p={},f=new WeakMap,m=[],_=null,M=!1,x=null,u=null,g=null,v=null,y=null,N=null,R=null,A=new De(0,0,0),C=0,T=!1,E=null,L=null,H=null,V=null,$=null,$e.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ae,bindFramebuffer:Pe,drawBuffers:ze,useProgram:ot,setBlending:P,setMaterial:Ue,setFlipSided:Ce,setCullFace:be,setLineWidth:ge,setPolygonOffset:He,setScissorTest:ve,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:q,texImage2D:_e,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:We,texStorage3D:ie,texSubImage2D:G,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Le,viewport:ye,reset:lt}}function bm(t,e,n,i){const r=yT(i);switch(n){case ax:return t*e;case lx:return t*e;case cx:return t*e*2;case ux:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case dx:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case ox:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:case Ad:return Math.max(t,16)*Math.max(e,8)/4;case wd:case bd:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case Wd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fx:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yT(t){switch(t){case Si:case ix:return{byteLength:1,components:1};case Ba:case rx:case Ya:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case Cr:case Zf:case pi:return{byteLength:4,components:1};case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function MT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return m?new OffscreenCanvas(b,S):Fl("canvas")}function M(b,S,k){let K=1;const q=ve(b);if((q.width>k||q.height>k)&&(K=k/Math.max(q.width,q.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(K*q.width),xe=Math.floor(K*q.height);p===void 0&&(p=_(G,xe));const oe=S?_(G,xe):p;return oe.width=G,oe.height=xe,oe.getContext("2d").drawImage(b,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+G+"x"+xe+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function x(b){return b.generateMipmaps}function u(b){t.generateMipmap(b)}function g(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(b,S,k,K,q=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=S;if(S===t.RED&&(k===t.FLOAT&&(G=t.R32F),k===t.HALF_FLOAT&&(G=t.R16F),k===t.UNSIGNED_BYTE&&(G=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(G=t.R8UI),k===t.UNSIGNED_SHORT&&(G=t.R16UI),k===t.UNSIGNED_INT&&(G=t.R32UI),k===t.BYTE&&(G=t.R8I),k===t.SHORT&&(G=t.R16I),k===t.INT&&(G=t.R32I)),S===t.RG&&(k===t.FLOAT&&(G=t.RG32F),k===t.HALF_FLOAT&&(G=t.RG16F),k===t.UNSIGNED_BYTE&&(G=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(G=t.RG8UI),k===t.UNSIGNED_SHORT&&(G=t.RG16UI),k===t.UNSIGNED_INT&&(G=t.RG32UI),k===t.BYTE&&(G=t.RG8I),k===t.SHORT&&(G=t.RG16I),k===t.INT&&(G=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(G=t.RGB8UI),k===t.UNSIGNED_SHORT&&(G=t.RGB16UI),k===t.UNSIGNED_INT&&(G=t.RGB32UI),k===t.BYTE&&(G=t.RGB8I),k===t.SHORT&&(G=t.RGB16I),k===t.INT&&(G=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),k===t.UNSIGNED_INT&&(G=t.RGBA32UI),k===t.BYTE&&(G=t.RGBA8I),k===t.SHORT&&(G=t.RGBA16I),k===t.INT&&(G=t.RGBA32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),S===t.RGBA){const xe=q?sc:Ze.getTransfer(K);k===t.FLOAT&&(G=t.RGBA32F),k===t.HALF_FLOAT&&(G=t.RGBA16F),k===t.UNSIGNED_BYTE&&(G=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(b,S){let k;return b?S===null||S===Cr||S===Ps?k=t.DEPTH24_STENCIL8:S===pi?k=t.DEPTH32F_STENCIL8:S===Ba&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Cr||S===Ps?k=t.DEPTH_COMPONENT24:S===pi?k=t.DEPTH_COMPONENT32F:S===Ba&&(k=t.DEPTH_COMPONENT16),k}function N(b,S){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==Zn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){const S=b.target;S.removeEventListener("dispose",R),C(S),S.isVideoTexture&&d.delete(S)}function A(b){const S=b.target;S.removeEventListener("dispose",A),E(S)}function C(b){const S=i.get(b);if(S.__webglInit===void 0)return;const k=b.source,K=f.get(k);if(K){const q=K[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(b),Object.keys(K).length===0&&f.delete(k)}i.remove(b)}function T(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const k=b.source,K=f.get(k);delete K[S.__cacheKey],a.memory.textures--}function E(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let q=0;q<S.__webglFramebuffer[K].length;q++)t.deleteFramebuffer(S.__webglFramebuffer[K][q]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,q=k.length;K<q;K++){const G=i.get(k[K]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(k[K])}i.remove(b)}let L=0;function H(){L=0}function V(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function $(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function Z(b,S){const k=i.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,b,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function Y(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){W(k,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function ee(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){W(k,b,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function I(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ne(k,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const X={[Sd]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},J={[jn]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[kc]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},se={[Zy]:t.NEVER,[iM]:t.ALWAYS,[Qy]:t.LESS,[px]:t.LEQUAL,[Jy]:t.EQUAL,[nM]:t.GEQUAL,[eM]:t.GREATER,[tM]:t.NOTEQUAL};function Me(b,S){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zn||S.magFilter===kc||S.magFilter===vo||S.magFilter===yr||S.minFilter===Zn||S.minFilter===kc||S.minFilter===vo||S.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,X[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,X[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,X[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==vo&&S.minFilter!==yr||S.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $e(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let q=f.get(K);q===void 0&&(q={},f.set(K,q));const G=$(S);if(G!==b.__cacheKey){q[G]===void 0&&(q[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),q[G].usedTimes++;const xe=q[b.__cacheKey];xe!==void 0&&(q[b.__cacheKey].usedTimes--,xe.usedTimes===0&&T(S)),b.__cacheKey=G,b.__webglTexture=q[G].texture}return k}function W(b,S,k){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);const q=$e(b,S),G=S.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+k);const xe=i.get(G);if(G.version!==xe.__version||q===!0){n.activeTexture(t.TEXTURE0+k);const oe=Ze.getPrimaries(Ze.workingColorSpace),pe=S.colorSpace===Oi?null:Ze.getPrimaries(S.colorSpace),We=S.colorSpace===Oi||oe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ie=M(S.image,!1,r.maxTextureSize);ie=He(S,ie);const _e=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let Le=v(S.internalFormat,_e,Ne,S.colorSpace,S.isVideoTexture);Me(K,S);let ye;const Ke=S.mipmaps,Be=S.isVideoTexture!==!0,lt=xe.__version===void 0||q===!0,U=G.dataReady,ce=N(S,ie);if(S.isDepthTexture)Le=y(S.format===Ls,S.type),lt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,Ne,null));else if(S.isDataTexture)if(Ke.length>0){Be&&lt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,Ke[0].width,Ke[0].height);for(let j=0,Q=Ke.length;j<Q;j++)ye=Ke[j],Be?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Ne,ye.data):n.texImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,_e,Ne,ye.data);S.generateMipmaps=!1}else Be?(lt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,Ne,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,Ne,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,Ke[0].width,Ke[0].height,ie.depth);for(let j=0,Q=Ke.length;j<Q;j++)if(ye=Ke[j],S.format!==Vn)if(_e!==null)if(Be){if(U)if(S.layerUpdates.size>0){const he=bm(ye.width,ye.height,S.format,S.type);for(const de of S.layerUpdates){const Fe=ye.data.subarray(de*he/ye.data.BYTES_PER_ELEMENT,(de+1)*he/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,de,ye.width,ye.height,1,_e,Fe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ie.depth,_e,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ie.depth,_e,Ne,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,ie.depth,0,_e,Ne,ye.data)}else{Be&&lt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,Ke[0].width,Ke[0].height);for(let j=0,Q=Ke.length;j<Q;j++)ye=Ke[j],S.format!==Vn?_e!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Ne,ye.data):n.texImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,_e,Ne,ye.data)}else if(S.isDataArrayTexture)if(Be){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){const j=bm(ie.width,ie.height,S.format,S.type);for(const Q of S.layerUpdates){const he=ie.data.subarray(Q*j/ie.data.BYTES_PER_ELEMENT,(Q+1)*j/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,_e,Ne,he)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ne,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,_e,Ne,ie.data);else if(S.isData3DTexture)Be?(lt&&n.texStorage3D(t.TEXTURE_3D,ce,Le,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ne,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,_e,Ne,ie.data);else if(S.isFramebufferTexture){if(lt)if(Be)n.texStorage2D(t.TEXTURE_2D,ce,Le,ie.width,ie.height);else{let j=ie.width,Q=ie.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Le,j,Q,0,_e,Ne,null),j>>=1,Q>>=1}}else if(Ke.length>0){if(Be&&lt){const j=ve(Ke[0]);n.texStorage2D(t.TEXTURE_2D,ce,Le,j.width,j.height)}for(let j=0,Q=Ke.length;j<Q;j++)ye=Ke[j],Be?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e,Ne,ye):n.texImage2D(t.TEXTURE_2D,j,Le,_e,Ne,ye);S.generateMipmaps=!1}else if(Be){if(lt){const j=ve(ie);n.texStorage2D(t.TEXTURE_2D,ce,Le,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ne,ie)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,Ne,ie);x(S)&&u(K),xe.__version=G.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ne(b,S,k){if(S.image.length!==6)return;const K=$e(b,S),q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+k);const G=i.get(q);if(q.version!==G.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const xe=Ze.getPrimaries(Ze.workingColorSpace),oe=S.colorSpace===Oi?null:Ze.getPrimaries(S.colorSpace),pe=S.colorSpace===Oi||xe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!We&&!ie?_e[Q]=M(S.image[Q],!0,r.maxCubemapSize):_e[Q]=ie?S.image[Q].image:S.image[Q],_e[Q]=He(S,_e[Q]);const Ne=_e[0],Le=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),Ke=v(S.internalFormat,Le,ye,S.colorSpace),Be=S.isVideoTexture!==!0,lt=G.__version===void 0||K===!0,U=q.dataReady;let ce=N(S,Ne);Me(t.TEXTURE_CUBE_MAP,S);let j;if(We){Be&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ke,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){j=_e[Q].mipmaps;for(let he=0;he<j.length;he++){const de=j[he];S.format!==Vn?Le!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,Le,ye,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ke,de.width,de.height,0,Le,ye,de.data)}}}else{if(j=S.mipmaps,Be&&lt){j.length>0&&ce++;const Q=ve(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Le,ye,_e[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,_e[Q].width,_e[Q].height,0,Le,ye,_e[Q].data);for(let he=0;he<j.length;he++){const Fe=j[he].image[Q].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Fe.width,Fe.height,Le,ye,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ke,Fe.width,Fe.height,0,Le,ye,Fe.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ye,_e[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,Le,ye,_e[Q]);for(let he=0;he<j.length;he++){const de=j[he];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Le,ye,de.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ke,Le,ye,de.image[Q])}}}x(S)&&u(t.TEXTURE_CUBE_MAP),G.__version=q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ue(b,S,k,K,q,G){const xe=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),pe=v(k.internalFormat,xe,oe,k.colorSpace),We=i.get(S),ie=i.get(k);if(ie.__renderTarget=S,!We.__hasExternalTextures){const _e=Math.max(1,S.width>>G),Ne=Math.max(1,S.height>>G);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,G,pe,_e,Ne,S.depth,0,xe,oe,null):n.texImage2D(q,G,pe,_e,Ne,0,xe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),be(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,q,ie.__webglTexture,0,Ce(S)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,q,ie.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(b,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){const K=S.depthTexture,q=K&&K.isDepthTexture?K.type:null,G=y(S.stencilBuffer,q),xe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Ce(S);be(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,G,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,G,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,G,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,b)}else{const K=S.textures;for(let q=0;q<K.length;q++){const G=K[q],xe=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),pe=v(G.internalFormat,xe,oe,G.colorSpace),We=Ce(S);k&&be(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,pe,S.width,S.height):be(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,pe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const q=K.__webglTexture,G=Ce(S);if(S.depthTexture.format===_s)be(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===Ls)be(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",q)};K.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=K}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),ae(S.__webglDepthbuffer[K],b,!1);else{const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,G)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ae(S.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(b,S,k){const K=i.get(b);S!==void 0&&ue(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Pe(b)}function ot(b){const S=b.texture,k=i.get(b),K=i.get(S);b.addEventListener("dispose",A);const q=b.textures,G=b.isWebGLCubeRenderTarget===!0,xe=q.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,a.memory.textures++),G){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let pe=0;pe<S.mipmaps.length;pe++)k.__webglFramebuffer[oe][pe]=t.createFramebuffer()}else k.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)k.__webglFramebuffer[oe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(xe)for(let oe=0,pe=q.length;oe<pe;oe++){const We=i.get(q[oe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&be(b)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<q.length;oe++){const pe=q[oe];k.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const We=s.convert(pe.format,pe.colorSpace),ie=s.convert(pe.type),_e=v(pe.internalFormat,We,ie,pe.colorSpace,b.isXRRenderTarget===!0),Ne=Ce(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,_e,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Me(t.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ue(k.__webglFramebuffer[oe][pe],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ue(k.__webglFramebuffer[oe],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let oe=0,pe=q.length;oe<pe;oe++){const We=q[oe],ie=i.get(We);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),Me(t.TEXTURE_2D,We),ue(k.__webglFramebuffer,b,We,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),x(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,K.__webglTexture),Me(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ue(k.__webglFramebuffer[pe],b,S,t.COLOR_ATTACHMENT0,oe,pe);else ue(k.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,oe,0);x(S)&&u(oe),n.unbindTexture()}b.depthBuffer&&Pe(b)}function qe(b){const S=b.textures;for(let k=0,K=S.length;k<K;k++){const q=S[k];if(x(q)){const G=g(b),xe=i.get(q).__webglTexture;n.bindTexture(G,xe),u(G),n.unbindTexture()}}}const mt=[],P=[];function Ue(b){if(b.samples>0){if(be(b)===!1){const S=b.textures,k=b.width,K=b.height;let q=t.COLOR_BUFFER_BIT;const G=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(b),oe=S.length>1;if(oe)for(let pe=0;pe<S.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const We=i.get(S[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,k,K,0,0,k,K,q,t.NEAREST),l===!0&&(mt.length=0,P.length=0,mt.push(t.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(G),P.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<S.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const We=i.get(S[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ce(b){return Math.min(r.maxSamples,b.samples)}function be(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(b){const S=a.render.frame;d.get(b)!==S&&(d.set(b,S),b.update())}function He(b,S){const k=b.colorSpace,K=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Os&&k!==Oi&&(Ze.getTransfer(k)===rt?(K!==Vn||q!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function ve(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=I,this.rebindTextures=ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=be}function ST(t,e){function n(i,r=Oi){let s;const a=Ze.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===Qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ix)return t.BYTE;if(i===rx)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===Zf)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Ya)return t.HALF_FLOAT;if(i===ax)return t.ALPHA;if(i===ox)return t.RGB;if(i===Vn)return t.RGBA;if(i===lx)return t.LUMINANCE;if(i===cx)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===ux)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===dx)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===rl||i===sl||i===al||i===ol)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Td||i===bd||i===Ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Cd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rd||i===Cd)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pd||i===Ld||i===Id||i===Dd||i===Ud||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===Vd||i===Gd||i===Hd||i===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ld)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Od)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Wd||i===Xd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fx||i===Yd||i===qd||i===$d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ET extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const x=n.getJointPose(M,i),u=this._getHandJoint(c,M);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:TT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RT extends ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,m=null,_=null;const M=new AT,x=n.getContextAttributes();let u=null,g=null;const v=[],y=[],N=new Xe;let R=null;const A=new pn;A.viewport=new st;const C=new pn;C.viewport=new st;const T=[A,C],E=new ET;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=v[W];return ne===void 0&&(ne=new fu,v[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=v[W];return ne===void 0&&(ne=new fu,v[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=v[W];return ne===void 0&&(ne=new fu,v[W]=ne),ne.getHandSpace()};function V(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const ue=v[ne];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||a),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<v.length;W++){const ne=y[W];ne!==null&&(y[W]=null,v[W].disconnect(ne))}L=null,H=null,M.reset(),e.setRenderTarget(u),m=null,f=null,p=null,r=null,g=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ne={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Nr(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ne=null,ue=null,ae=null;x.depth&&(ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=x.stencil?Ls:_s,ue=x.stencil?Ps:Cr);const Ae={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Nr(f.textureWidth,f.textureHeight,{format:Vn,type:Si,depthTexture:new Ax(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(W){for(let ne=0;ne<W.removed.length;ne++){const ue=W.removed[ne],ae=y.indexOf(ue);ae>=0&&(y[ae]=null,v[ae].disconnect(ue))}for(let ne=0;ne<W.added.length;ne++){const ue=W.added[ne];let ae=y.indexOf(ue);if(ae===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=y.length){y.push(ue),ae=Pe;break}else if(y[Pe]===null){y[Pe]=ue,ae=Pe;break}if(ae===-1)break}const Ae=v[ae];Ae&&Ae.connect(ue)}}const Y=new D,ee=new D;function I(W,ne,ue){Y.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);const ae=Y.distanceTo(ee),Ae=ne.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),qe=(Ae[9]+1)/Ae[5],mt=(Ae[9]-1)/Ae[5],P=(Ae[8]-1)/Ae[0],Ue=(Pe[8]+1)/Pe[0],Ce=ze*P,be=ze*Ue,ge=ae/(-P+Ue),He=ge*-P;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ve=ze+ge,b=ot+ge,S=Ce-He,k=be+(ae-He),K=qe*ot/b*ve,q=mt*ot/b*ve;W.projectionMatrix.makePerspective(S,k,K,q,ve,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function X(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,ue=W.far;M.texture!==null&&(M.depthNear>0&&(ne=M.depthNear),M.depthFar>0&&(ue=M.depthFar)),E.near=C.near=A.near=ne,E.far=C.far=A.far=ue,(L!==E.near||H!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,H=E.far),A.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,E.layers.mask=A.layers.mask|C.layers.mask;const ae=W.parent,Ae=E.cameras;X(E,ae);for(let Pe=0;Pe<Ae.length;Pe++)X(Ae[Pe],ae);Ae.length===2?I(E,A,C):E.projectionMatrix.copy(A.projectionMatrix),J(W,E,ae)};function J(W,ne,ue){ue===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Va*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let se=null;function Me(W,ne){if(d=ne.getViewerPose(c||a),_=ne,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;ue.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Pe=0;Pe<ue.length;Pe++){const ze=ue[Pe];let ot=null;if(m!==null)ot=m.getViewport(ze);else{const mt=p.getViewSubImage(f,ze);ot=mt.viewport,Pe===0&&(e.setRenderTargetTextures(g,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(g))}let qe=T[Pe];qe===void 0&&(qe=new pn,qe.layers.enable(Pe),qe.viewport=new st,T[Pe]=qe),qe.matrix.fromArray(ze.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ze.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ot.x,ot.y,ot.width,ot.height),Pe===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(qe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=p.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&M.init(e,Pe,r.renderState)}}for(let ue=0;ue<v.length;ue++){const ae=y[ue],Ae=v[ue];ae!==null&&Ae!==void 0&&Ae.update(ae,ne,c||a)}se&&se(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const $e=new Tx;$e.setAnimationLoop(Me),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const cr=new ei,CT=new at;function NT(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Sx(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(x,u):u.isMeshToonMaterial?(s(x,u),p(x,u)):u.isMeshPhongMaterial?(s(x,u),d(x,u)):u.isMeshStandardMaterial?(s(x,u),f(x,u),u.isMeshPhysicalMaterial&&m(x,u,y)):u.isMeshMatcapMaterial?(s(x,u),_(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),M(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,g,v):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===on&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===on&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,y=g.envMapRotation;v&&(x.envMap.value=v,cr.copy(y),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),x.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(cr)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,g,v){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*g,x.scale.value=v*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function d(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function p(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function f(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,g){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,u){u.matcap&&(x.matcap.value=u.matcap)}function M(x,u){const g=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(_(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",x));const N=v.program;i.updateUBOMapping(g,N);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function d(g){const v=p();g.__bindingPointIndex=v;const y=t.createBuffer(),N=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,N,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function p(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],y=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=y.length;R<A;R++){const C=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,E=C.length;T<E;T++){const L=C[T];if(m(L,R,T,N)===!0){const H=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let Z=0;Z<V.length;Z++){const Y=V[Z],ee=M(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,H+$,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,$),$+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,y,N){const R=g.value,A=v+"_"+y;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const C=N[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return N[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function _(g){const v=g.uniforms;let y=0;const N=16;for(let A=0,C=v.length;A<C;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,L=T.length;E<L;E++){const H=T[E],V=Array.isArray(H.value)?H.value:[H.value];for(let $=0,Z=V.length;$<Z;$++){const Y=V[$],ee=M(Y),I=y%N,X=I%ee.boundary,J=I+X;y+=X,J!==0&&N-J<ee.storage&&(y+=N-J),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ee.storage}}}const R=y%N;return R>0&&(y+=N-R),g.__size=y,g.__cache={},this}function M(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function x(g){const v=g.target;v.removeEventListener("dispose",x);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class LT{constructor(e={}){const{canvas:n=yM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let x=null,u=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=$i,this.toneMappingExposure=1;const y=this;let N=!1,R=0,A=0,C=null,T=-1,E=null;const L=new st,H=new st;let V=null;const $=new De(0);let Z=0,Y=n.width,ee=n.height,I=1,X=null,J=null;const se=new st(0,0,Y,ee),Me=new st(0,0,Y,ee);let $e=!1;const W=new sh;let ne=!1,ue=!1;const ae=new at,Ae=new at,Pe=new D,ze=new st,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function mt(){return C===null?I:1}let P=i;function Ue(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",de,!1),P===null){const F="webgl2";if(P=Ue(F,w),P===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,be,ge,He,ve,b,S,k,K,q,G,xe,oe,pe,We,ie,_e,Ne,Le,ye,Ke,Be,lt,U;function ce(){Ce=new OE(P),Ce.init(),Be=new ST(P,Ce),be=new PE(P,Ce,e,Be),ge=new _T(P,Ce),be.reverseDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),He=new BE(P),ve=new rT,b=new MT(P,Ce,ge,ve,be,Be,He),S=new IE(y),k=new FE(y),K=new YM(P),lt=new CE(P,K),q=new kE(P,K,He,lt),G=new GE(P,q,K,He),Le=new VE(P,be,b),ie=new LE(ve),xe=new iT(y,S,k,Ce,be,lt,ie),oe=new NT(y,ve),pe=new aT,We=new fT(Ce),Ne=new RE(y,S,k,ge,G,m,l),_e=new xT(y,G,be),U=new PT(P,He,be,ge),ye=new NE(P,Ce,He),Ke=new zE(P,Ce,He),He.programs=xe.programs,y.capabilities=be,y.extensions=Ce,y.properties=ve,y.renderLists=pe,y.shadowMap=_e,y.state=ge,y.info=He}ce();const j=new RT(y,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(Y,ee,!1))},this.getSize=function(w){return w.set(Y,ee)},this.setSize=function(w,F,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,ee=F,n.width=Math.floor(w*I),n.height=Math.floor(F*I),z===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*I,ee*I).floor()},this.setDrawingBufferSize=function(w,F,z){Y=w,ee=F,I=z,n.width=Math.floor(w*z),n.height=Math.floor(F*z),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,F,z,B){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,F,z,B),ge.viewport(L.copy(se).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,F,z,B){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,F,z,B),ge.scissor(H.copy(Me).multiplyScalar(I).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){ge.setScissorTest($e=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(w=!0,F=!0,z=!0){let B=0;if(w){let O=!1;if(C!==null){const re=C.texture.format;O=re===nh||re===th||re===eh}if(O){const re=C.texture.type,fe=re===Si||re===Cr||re===Ba||re===Ps||re===Qf||re===Jf,Se=Ne.getClearColor(),Ee=Ne.getClearAlpha(),Ie=Se.r,Oe=Se.g,we=Se.b;fe?(_[0]=Ie,_[1]=Oe,_[2]=we,_[3]=Ee,P.clearBufferuiv(P.COLOR,0,_)):(M[0]=Ie,M[1]=Oe,M[2]=we,M[3]=Ee,P.clearBufferiv(P.COLOR,0,M))}else B|=P.COLOR_BUFFER_BIT}F&&(B|=P.DEPTH_BUFFER_BIT),z&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),We.dispose(),ve.dispose(),S.dispose(),k.dispose(),G.dispose(),lt.dispose(),U.dispose(),xe.dispose(),j.dispose(),j.removeEventListener("sessionstart",fh),j.removeEventListener("sessionend",hh),ir.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=He.autoReset,F=_e.enabled,z=_e.autoUpdate,B=_e.needsUpdate,O=_e.type;ce(),He.autoReset=w,_e.enabled=F,_e.autoUpdate=z,_e.needsUpdate=B,_e.type=O}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const F=w.target;F.removeEventListener("dispose",Fe),yt(F)}function yt(w){zt(w),ve.remove(w)}function zt(w){const F=ve.get(w).programs;F!==void 0&&(F.forEach(function(z){xe.releaseProgram(z)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,z,B,O,re){F===null&&(F=ot);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Se=zx(w,F,z,B,O);ge.setMaterial(B,fe);let Ee=z.index,Ie=1;if(B.wireframe===!0){if(Ee=q.getWireframeAttribute(z),Ee===void 0)return;Ie=2}const Oe=z.drawRange,we=z.attributes.position;let Je=Oe.start*Ie,ct=(Oe.start+Oe.count)*Ie;re!==null&&(Je=Math.max(Je,re.start*Ie),ct=Math.min(ct,(re.start+re.count)*Ie)),Ee!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Ee.count)):we!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,we.count));const dt=ct-Je;if(dt<0||dt===1/0)return;lt.setup(O,B,Se,z,Ee);let Jt,et=ye;if(Ee!==null&&(Jt=K.get(Ee),et=Ke,et.setIndex(Jt)),O.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*mt()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(O.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*mt()),O.isLineSegments?et.setMode(P.LINES):O.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else O.isPoints?et.setMode(P.POINTS):O.isSprite&&et.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,ni=O._multiDrawCounts,tt=O._multiDrawCount,Ln=Ee?K.get(Ee).bytesPerElement:1,Dr=ve.get(B).currentProgram.getUniforms();for(let un=0;un<tt;un++)Dr.setValue(P,"_gl_DrawID",un),et.render(Te[un]/Ln,ni[un])}else if(O.isInstancedMesh)et.renderInstances(Je,dt,O.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ni=Math.min(z.instanceCount,Te);et.renderInstances(Je,dt,ni)}else et.render(Je,dt)};function nt(w,F,z){w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Ja(w,F,z),w.side=Qi,w.needsUpdate=!0,Ja(w,F,z),w.side=di):Ja(w,F,z)}this.compile=function(w,F,z=null){z===null&&(z=w),u=We.get(z),u.init(F),v.push(u),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),w!==z&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const B=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Se=re[fe];nt(Se,z,O),B.add(Se)}else nt(re,z,O),B.add(re)}),v.pop(),u=null,B},this.compileAsync=function(w,F,z=null){const B=this.compile(w,F,z);return new Promise(O=>{function re(){if(B.forEach(function(fe){ve.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){O(w);return}setTimeout(re,10)}Ce.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Pn=null;function ti(w){Pn&&Pn(w)}function fh(){ir.stop()}function hh(){ir.start()}const ir=new Tx;ir.setAnimationLoop(ti),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(w){Pn=w,j.setAnimationLoop(w),w===null?ir.stop():ir.start()},j.addEventListener("sessionstart",fh),j.addEventListener("sessionend",hh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,C),u=We.get(w,v.length),u.init(F),v.push(u),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(Ae),ue=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,ue),x=pe.get(w,g.length),x.init(),g.push(x),j.enabled===!0&&j.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&uc(re,F,-1/0,y.sortObjects)}uc(w,F,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(X,J),qe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,qe&&Ne.addToRenderList(x,w),this.info.render.frame++,ne===!0&&ie.beginShadows();const z=u.state.shadowsArray;_e.render(z,w,F),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,O=x.transmissive;if(u.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let fe=0,Se=re.length;fe<Se;fe++){const Ee=re[fe];mh(B,O,w,Ee)}qe&&Ne.render(w);for(let fe=0,Se=re.length;fe<Se;fe++){const Ee=re[fe];ph(x,w,Ee,Ee.viewport)}}else O.length>0&&mh(B,O,w,F),qe&&Ne.render(w),ph(x,w,F);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,F),lt.resetDefaultState(),T=-1,E=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&ie.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function uc(w,F,z,B){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){B&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const fe=G.update(w),Se=w.material;Se.visible&&x.push(w,fe,Se,z,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const fe=G.update(w),Se=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ze.copy(fe.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Se)){const Ee=fe.groups;for(let Ie=0,Oe=Ee.length;Ie<Oe;Ie++){const we=Ee[Ie],Je=Se[we.materialIndex];Je&&Je.visible&&x.push(w,fe,Je,z,ze.z,we)}}else Se.visible&&x.push(w,fe,Se,z,ze.z,null)}}const re=w.children;for(let fe=0,Se=re.length;fe<Se;fe++)uc(re[fe],F,z,B)}function ph(w,F,z,B){const O=w.opaque,re=w.transmissive,fe=w.transparent;u.setupLightsView(z),ne===!0&&ie.setGlobalState(y.clippingPlanes,z),B&&ge.viewport(L.copy(B)),O.length>0&&Qa(O,F,z),re.length>0&&Qa(re,F,z),fe.length>0&&Qa(fe,F,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function mh(w,F,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Nr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Ya:Si,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=u.state.transmissionRenderTarget[B.id],fe=B.viewport||L;re.setSize(fe.z,fe.w);const Se=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Ne.render(z);const Ee=y.toneMapping;y.toneMapping=$i;const Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),ne===!0&&ie.setGlobalState(y.clippingPlanes,B),Qa(w,z,B),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let we=0,Je=F.length;we<Je;we++){const ct=F[we],dt=ct.object,Jt=ct.geometry,et=ct.material,Te=ct.group;if(et.side===di&&dt.layers.test(B.layers)){const ni=et.side;et.side=on,et.needsUpdate=!0,gh(dt,z,B,Jt,et,Te),et.side=ni,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}y.setRenderTarget(Se),y.setClearColor($,Z),Ie!==void 0&&(B.viewport=Ie),y.toneMapping=Ee}function Qa(w,F,z){const B=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=w.length;O<re;O++){const fe=w[O],Se=fe.object,Ee=fe.geometry,Ie=B===null?fe.material:B,Oe=fe.group;Se.layers.test(z.layers)&&gh(Se,F,z,Ee,Ie,Oe)}}function gh(w,F,z,B,O,re){w.onBeforeRender(y,F,z,B,O,re),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,z,B,w,re),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,y.renderBufferDirect(z,F,B,O,w,re),O.side=Qi,O.needsUpdate=!0,y.renderBufferDirect(z,F,B,O,w,re),O.side=di):y.renderBufferDirect(z,F,B,O,w,re),w.onAfterRender(y,F,z,B,O,re)}function Ja(w,F,z){F.isScene!==!0&&(F=ot);const B=ve.get(w),O=u.state.lights,re=u.state.shadowsArray,fe=O.state.version,Se=xe.getParameters(w,O.state,re,F,z),Ee=xe.getProgramCacheKey(Se);let Ie=B.programs;B.environment=w.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Fe),Ie=new Map,B.programs=Ie);let Oe=Ie.get(Ee);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===fe)return vh(w,Se),Oe}else Se.uniforms=xe.getUniforms(w),w.onBeforeCompile(Se,y),Oe=xe.acquireProgram(Se,Ee),Ie.set(Ee,Oe),B.uniforms=Se.uniforms;const we=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ie.uniform),vh(w,Se),B.needsLights=Vx(w),B.lightsStateVersion=fe,B.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Oe,B.uniformsList=null,Oe}function xh(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=cl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function vh(w,F){const z=ve.get(w);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function zx(w,F,z,B,O){F.isScene!==!0&&(F=ot),b.resetTextureUnits();const re=F.fog,fe=B.isMeshStandardMaterial?F.environment:null,Se=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Os,Ee=(B.isMeshStandardMaterial?k:S).get(B.envMap||fe),Ie=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let dt=$i;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=y.toneMapping);const Jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=Jt!==void 0?Jt.length:0,Te=ve.get(B),ni=u.state.lights;if(ne===!0&&(ue===!0||w!==E)){const yn=w===E&&B.id===T;ie.setState(B,w,yn)}let tt=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ni.state.version||Te.outputColorSpace!==Se||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==Ee||B.fog===!0&&Te.fog!==re||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Ie||Te.vertexTangents!==Oe||Te.morphTargets!==we||Te.morphNormals!==Je||Te.morphColors!==ct||Te.toneMapping!==dt||Te.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Te.__version=B.version);let Ln=Te.currentProgram;tt===!0&&(Ln=Ja(B,F,O));let Dr=!1,un=!1,Vs=!1;const ft=Ln.getUniforms(),Xn=Te.uniforms;if(ge.useProgram(Ln.program)&&(Dr=!0,un=!0,Vs=!0),B.id!==T&&(T=B.id,un=!0),Dr||E!==w){ge.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),SM(ae),EM(ae),ft.setValue(P,"projectionMatrix",ae)):ft.setValue(P,"projectionMatrix",w.projectionMatrix),ft.setValue(P,"viewMatrix",w.matrixWorldInverse);const wi=ft.map.cameraPosition;wi!==void 0&&wi.setValue(P,Pe.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,un=!0,Vs=!0)}if(O.isSkinnedMesh){ft.setOptional(P,O,"bindMatrix"),ft.setOptional(P,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),ft.setValue(P,"boneTexture",yn.boneTexture,b))}O.isBatchedMesh&&(ft.setOptional(P,O,"batchingTexture"),ft.setValue(P,"batchingTexture",O._matricesTexture,b),ft.setOptional(P,O,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",O._indirectTexture,b),ft.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",O._colorsTexture,b));const Gs=z.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Le.update(O,z,Ln),(un||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,ft.setValue(P,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xn.envMap.value=Ee,Xn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&F.environment!==null&&(Xn.envMapIntensity.value=F.environmentIntensity),un&&(ft.setValue(P,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Bx(Xn,Vs),re&&B.fog===!0&&oe.refreshFogUniforms(Xn,re),oe.refreshMaterialUniforms(Xn,B,I,ee,u.state.transmissionRenderTarget[w.id]),cl.upload(P,xh(Te),Xn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cl.upload(P,xh(Te),Xn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(P,"center",O.center),ft.setValue(P,"modelViewMatrix",O.modelViewMatrix),ft.setValue(P,"normalMatrix",O.normalMatrix),ft.setValue(P,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const yn=B.uniformsGroups;for(let wi=0,Ti=yn.length;wi<Ti;wi++){const _h=yn[wi];U.update(_h,Ln),U.bind(_h,Ln)}}return Ln}function Bx(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Vx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,F,z){ve.get(w.texture).__webglTexture=F,ve.get(w.depthTexture).__webglTexture=z;const B=ve.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const z=ve.get(w);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,z=0){C=w,R=F,A=z;let B=!0,O=null,re=!1,fe=!1;if(w){const Ee=ve.get(w);if(Ee.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Ee.__hasExternalTextures)b.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&ve.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Oe=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][z]:O=Oe[F],re=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?O=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[z]:O=Oe,L.copy(w.viewport),H.copy(w.scissor),V=w.scissorTest}else L.copy(se).multiplyScalar(I).floor(),H.copy(Me).multiplyScalar(I).floor(),V=$e;if(ge.bindFramebuffer(P.FRAMEBUFFER,O)&&B&&ge.drawBuffers(w,O),ge.viewport(L),ge.scissor(H),ge.setScissorTest(V),re){const Ee=ve.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,z)}else if(fe){const Ee=ve.get(w.texture),Ie=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Ie)}T=-1},this.readRenderTargetPixels=function(w,F,z,B,O,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ge.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Ee=w.texture,Ie=Ee.format,Oe=Ee.type;if(!be.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-B&&z>=0&&z<=w.height-O&&P.readPixels(F,z,B,O,Be.convert(Ie),Be.convert(Oe),re)}finally{const Ee=C!==null?ve.get(C).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,F,z,B,O,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){const Ee=w.texture,Ie=Ee.format,Oe=Ee.type;if(!be.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-B&&z>=0&&z<=w.height-O){ge.bindFramebuffer(P.FRAMEBUFFER,Se);const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(F,z,B,O,Be.convert(Ie),Be.convert(Oe),0);const Je=C!==null?ve.get(C).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Je);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await MM(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(we),P.deleteSync(ct),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,z=0){w.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const B=Math.pow(2,-z),O=Math.floor(w.image.width*B),re=Math.floor(w.image.height*B),fe=F!==null?F.x:0,Se=F!==null?F.y:0;b.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,fe,Se,O,re),ge.unbindTexture()},this.copyTextureToTexture=function(w,F,z=null,B=null,O=0){w.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,z=null);let re,fe,Se,Ee,Ie,Oe,we,Je,ct;const dt=w.isCompressedTexture?w.mipmaps[O]:w.image;z!==null?(re=z.max.x-z.min.x,fe=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ie=z.min.y,Oe=z.isBox3?z.min.z:0):(re=dt.width,fe=dt.height,Se=dt.depth||1,Ee=0,Ie=0,Oe=0),B!==null?(we=B.x,Je=B.y,ct=B.z):(we=0,Je=0,ct=0);const Jt=Be.convert(F.format),et=Be.convert(F.type);let Te;F.isData3DTexture?(b.setTexture3D(F,0),Te=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),Te=P.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),Te=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const ni=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Dr=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Oe);const Vs=w.isDataArrayTexture||w.isData3DTexture,ft=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Xn=ve.get(w),Gs=ve.get(F),yn=ve.get(Xn.__renderTarget),wi=ve.get(Gs.__renderTarget);ge.bindFramebuffer(P.READ_FRAMEBUFFER,yn.__webglFramebuffer),ge.bindFramebuffer(P.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ti=0;Ti<Se;Ti++)Vs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,O,Oe+Ti),w.isDepthTexture?(ft&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(F).__webglTexture,O,ct+Ti),P.blitFramebuffer(Ee,Ie,re,fe,we,Je,re,fe,P.DEPTH_BUFFER_BIT,P.NEAREST)):ft?P.copyTexSubImage3D(Te,O,we,Je,ct+Ti,Ee,Ie,re,fe):P.copyTexSubImage2D(Te,O,we,Je,ct+Ti,Ee,Ie,re,fe);ge.bindFramebuffer(P.READ_FRAMEBUFFER,null),ge.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ft?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Te,O,we,Je,ct,re,fe,Se,Jt,et,dt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,O,we,Je,ct,re,fe,Se,Jt,dt.data):P.texSubImage3D(Te,O,we,Je,ct,re,fe,Se,Jt,et,dt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,we,Je,re,fe,Jt,et,dt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,we,Je,dt.width,dt.height,Jt,dt.data):P.texSubImage2D(P.TEXTURE_2D,O,we,Je,re,fe,Jt,et,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ni),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),O===0&&F.generateMipmaps&&P.generateMipmap(Te),ge.unbindTexture()},this.copyTextureToTexture3D=function(w,F,z=null,B=null,O=0){return w.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,z,B,O)},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,ge.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class oh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=n}clone(){return new oh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class IT extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qr extends Ir{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new D,kl=new D,Am=new at,ta=new ac,zo=new Ka,hu=new D,Rm=new D;class pu extends Ut{constructor(e=new $t,n=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ol.fromBufferAttribute(n,r-1),kl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ol.distanceTo(kl);e.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;Am.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Am);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let M=m,x=_-1;M<x;M+=c){const u=d.getX(M),g=d.getX(M+1),v=Bo(this,e,ta,l,u,g);v&&n.push(v)}if(this.isLineLoop){const M=d.getX(_-1),x=d.getX(m),u=Bo(this,e,ta,l,M,x);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=m,x=_-1;M<x;M+=c){const u=Bo(this,e,ta,l,M,M+1);u&&n.push(u)}if(this.isLineLoop){const M=Bo(this,e,ta,l,_-1,m);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ol.fromBufferAttribute(a,r),kl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ol,kl,hu,Rm)>i)return;hu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(hu);if(!(l<e.near||l>e.far))return{distance:l,point:Rm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class Lx extends Ir{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cm=new at,Zd=new ac,Vo=new Ka,Go=new D;class DT extends Ut{constructor(e=new $t,n=new Lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;Cm.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(Cm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,M=m;_<M;_++){const x=c.getX(_);Go.fromBufferAttribute(p,x),Nm(Go,x,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=f,M=m;_<M;_++)Go.fromBufferAttribute(p,_),Nm(Go,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nm(t,e,n,i,r,s,a){const o=Zd.distanceSqToPoint(t);if(o<n){const l=new D;Zd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class UT{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],f=i[r+1]-d,m=(a-d)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Xe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],a=[],o=new D,l=new at;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(It(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(It(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class FT extends UT{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cc extends $t{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new D,y=new D,N=new D;for(let R=0;R<n.length;R+=3)m(n[R+0],v),m(n[R+1],y),m(n[R+2],N),l(v,y,N,g)}function l(g,v,y,N){const R=N+1,A=[];for(let C=0;C<=R;C++){A[C]=[];const T=g.clone().lerp(y,C/R),E=v.clone().lerp(y,C/R),L=R-C;for(let H=0;H<=L;H++)H===0&&C===R?A[C][H]=T:A[C][H]=T.clone().lerp(E,H/L)}for(let C=0;C<R;C++)for(let T=0;T<2*(R-C)-1;T++){const E=Math.floor(T/2);T%2===0?(f(A[C][E+1]),f(A[C+1][E]),f(A[C][E])):(f(A[C][E+1]),f(A[C+1][E+1]),f(A[C+1][E]))}}function c(g){const v=new D;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(g),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const g=new D;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const y=x(g)/2/Math.PI+.5,N=u(g)/Math.PI+.5;a.push(y,1-N)}_(),p()}function p(){for(let g=0;g<a.length;g+=6){const v=a[g+0],y=a[g+2],N=a[g+4],R=Math.max(v,y,N),A=Math.min(v,y,N);R>.9&&A<.1&&(v<.2&&(a[g+0]+=1),y<.2&&(a[g+2]+=1),N<.2&&(a[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function m(g,v){const y=g*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const g=new D,v=new D,y=new D,N=new D,R=new Xe,A=new Xe,C=new Xe;for(let T=0,E=0;T<s.length;T+=9,E+=6){g.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),R.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),C.set(a[E+4],a[E+5]),N.copy(g).add(v).add(y).divideScalar(3);const L=x(N);M(R,E+0,g,L),M(A,E+2,v,L),M(C,E+4,y,L)}}function M(g,v,y,N){N<0&&g.x===1&&(a[v]=g.x-1),y.x===0&&y.z===0&&(a[v]=N/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.vertices,e.indices,e.radius,e.details)}}class lh extends cc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lh(e.radius,e.detail)}}class ch extends cc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ch(e.radius,e.detail)}}class zl extends $t{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new D,f=new D,m=[],_=[],M=[],x=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let y=0;u===0&&a===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let N=0;N<=n;N++){const R=N/n;p.x=-e*Math.cos(r+R*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+R*s)*Math.sin(a+v*o),_.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),x.push(R+y,1-v),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=d[u][g+1],y=d[u][g],N=d[u+1][g],R=d[u+1][g+1];(u!==0||a>0)&&m.push(v,y,R),(u!==i-1||l<Math.PI)&&m.push(y,N,R)}this.setIndex(m),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(M,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ca extends Ir{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OT extends ca{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uh extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const mu=new at,Pm=new D,Lm=new D;class Ix{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Im=new at,na=new D,gu=new D;class kT extends Ix{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),gu.copy(i.position),gu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gu),i.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),Im.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Im)}}class zT extends uh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BT extends Ix{constructor(){super(new bx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VT extends uh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new BT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class GT extends uh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class HT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dm(){return performance.now()}const Um=new at;class jT{constructor(e,n,i=0,r=1/0){this.ray=new ac(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,i=[]){return Qd(e,this,i,n),i.sort(Fm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Qd(e[r],this,i,n);return i.sort(Fm),i}}function Fm(t,e){return t.distance-e.distance}function Qd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Qd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const Tt={name:"SARTHAK SHARMA",role:"Chief Marketing Officer",company:"Arvinex Venture Private Limited",positioning:"MARKETING THAT MOVES BUSINESS.",subPositioning:"CMO / MARKETING / WEB / GROWTH",manifestoSummary:"Turning attention into strategy, strategy into execution, and execution into measurable business growth.",mindset:"Curious about business. Obsessed with better execution. Focused on turning ideas into professional, market-ready experiences.",profileText:"Sarthak Sharma is a marketing professional focused on helping businesses build visibility, communicate their value and create meaningful customer connections. His work combines online and offline marketing, professional website design, lead generation and practical business-focused strategy. As Chief Marketing Officer at Arvinex Venture Private Limited, he works at the intersection of marketing, creativity and business growth.",visionText:"My goal is to build brands and marketing systems that do more than look professional — they create trust, attract customers and contribute to real business growth.",philosophyBody:"I believe effective marketing starts with understanding the business, identifying the right audience and communicating the right value — clearly and consistently.",pdfDeckUrl:"/Sarthak_Sharma_CMO_Portfolio.pdf"},Om=[{id:"work",label:"WORK",href:"#work"},{id:"strategy",label:"STRATEGY",href:"#strategy"},{id:"responsibilities",label:"EXPERIENCE",href:"#responsibilities"},{id:"capabilities",label:"CAPABILITIES",href:"#capabilities"},{id:"about",label:"ABOUT",href:"#about"},{id:"contact",label:"CONTACT",href:"#contact"}],ul=[{id:"marketing",label:"MARKETING",subtitle:"Omni-Channel Visibility",description:"Combining high-impact digital campaigns with targeted offline marketing to establish commanding brand presence across all customer touchpoints.",position:[2.8,1.2,0],color:"#00F0FF"},{id:"branding",label:"BRANDING",subtitle:"Market Positioning & Trust",description:"Engineering sharp, differentiated market positioning that communicates uncompromising value and earns deep customer credibility.",position:[2.8,-1.2,0],color:"#0066FF"},{id:"web",label:"WEB DESIGN",subtitle:"High-Conversion Digital Assets",description:"Architecting bespoke, modern digital interfaces engineered for friction-free credibility, fast engagement, and qualified lead conversion.",position:[0,-3,0],color:"#38BDF8"},{id:"growth",label:"GROWTH",subtitle:"Commercial Expansion",description:"Aligning creative direction with concrete commercial mechanics to drive repeatable and compounding business growth.",position:[-2.8,-1.2,0],color:"#60A5FA"},{id:"lead_gen",label:"LEAD GENERATION",subtitle:"Quality Business Inquiries",description:"Precision-targeted acquisition funnels focused on capturing qualified decision-makers rather than vanity metrics.",position:[-2.8,1.2,0],color:"#00E5FF"},{id:"customer_acq",label:"CUSTOMER ACQUISITION",subtitle:"Full-Funnel Conversion",description:"End-to-end customer journey optimization from initial market awareness to committed, long-term commercial relationships.",position:[0,3,0],color:"#2563EB"}],WT=[{id:"resp-1",number:"01",title:"Marketing Strategy",shortDesc:"Formulating comprehensive market positioning frameworks that bridge business goals with actionable campaigns.",tag:"STRATEGY",iconName:"Compass"},{id:"resp-2",number:"02",title:"Online Marketing",shortDesc:"Executing performance-driven digital initiatives across search, social, performance ads, and organic channels.",tag:"DIGITAL",iconName:"Globe"},{id:"resp-3",number:"03",title:"Offline Marketing",shortDesc:"Deploying high-impact physical activations, retail collateral, and localized visibility campaigns.",tag:"PHYSICAL",iconName:"Building2"},{id:"resp-4",number:"04",title:"Lead Generation",shortDesc:"Architecting multi-stage acquisition funnels designed specifically to generate high-intent business enquiries.",tag:"CONVERSION",iconName:"Filter"},{id:"resp-5",number:"05",title:"Customer Acquisition",shortDesc:"Optimizing the entire conversion lifecycle from first impression to closed deal and retention.",tag:"GROWTH",iconName:"UserCheck"},{id:"resp-6",number:"06",title:"Brand Positioning",shortDesc:"Defining distinct market identity, value propositions, and core messaging that cut through industry noise.",tag:"IDENTITY",iconName:"Award"},{id:"resp-7",number:"07",title:"Website Planning + Design",shortDesc:"Designing and engineering modern, credible, and conversion-optimized web experiences.",tag:"EXPERIENCE",iconName:"Layout"},{id:"resp-8",number:"08",title:"Marketing Communication",shortDesc:"Crafting precise, value-driven messaging that speaks directly to customer needs and aspirations.",tag:"MESSAGING",iconName:"MessageSquare"},{id:"resp-9",number:"09",title:"Creative Direction",shortDesc:"Leading cohesive visual, aesthetic, and conceptual standards across all brand and campaign touchpoints.",tag:"CREATIVE",iconName:"Sparkles"}],Ho=[{id:"cap-1",number:"01",title:"MARKETING STRATEGY",tagline:"Turning business objectives into practical marketing direction.",description:"Every engagement begins with deep commercial alignment. I analyze market dynamics, competitor positioning, and customer psychology to map out clear, actionable execution paths that drive real business outcomes.",visualMetaphor:"Structured Geometric Grid + Shifting Strategic Nodes",deliverables:["Market Research & Competitor Audits","Core Value Proposition Definition","Multi-Channel Go-To-Market Plans","Quarterly Growth Roadmaps"]},{id:"cap-2",number:"02",title:"DIGITAL MARKETING",tagline:"Building visibility and customer reach across digital channels.",description:"Deploying integrated digital ecosystems that capture demand where it lives. Through coordinated organic presence, targeted paid campaigns, and engaging content systems, I build lasting digital authority.",visualMetaphor:"Connected Neural Network of Particles & Data Pulses",deliverables:["Performance Ad Campaigns","Social Media Architecture","Search & Content Strategy","Audience Retargeting Frameworks"]},{id:"cap-3",number:"03",title:"OFFLINE MARKETING",tagline:"Using local and physical marketing to create real-world visibility.",description:"Digital alone is not enough for true market dominance. I craft physical brand moments—from striking billboard displays to retail activations and print collateral—that establish unmissable physical credibility.",visualMetaphor:"Spatial 3D Billboard Planes & Perspective Environment",deliverables:["Retail Signage & Point-of-Sale Collateral","Large-Format Print & Billboards","Local Business Activations","Print & Brand Collateral"]},{id:"cap-4",number:"04",title:"WEBSITE DESIGN",tagline:"Professional sites that communicate clearly and credibly.",description:"A website is often the first serious interaction between a business and a potential customer. I engineer clean, modern, and business-oriented websites that establish instant trust and guide visitors toward decisive action.",visualMetaphor:"Floating Glass 3D Browser Viewports with Interactive UI",deliverables:["Full Website Architecture & Design","High-Converting Landing Pages","Mobile-First UX & UI Systems","Speed & Conversion Optimization"]},{id:"cap-5",number:"05",title:"LEAD GENERATION",tagline:"Approaches focused on quality business enquiries.",description:"Forget vanity traffic. I build high-intent acquisition pipelines that filter for genuine commercial prospects, turning fleeting digital attention into high-value inquiries and predictable sales conversations.",visualMetaphor:"Converging Multi-Stream Funnel Funnels with High-Value Targets",deliverables:["Inquiry Capture Systems","Lead Magnets & Value Drivers","CRM & Pipeline Integration","Conversion Funnel Diagnostics"]}],Pt={title:"Adhyayan Academy — Shahpur",client:"Adhyayan Academy — Shahpur",objective:"Increase visibility and generate relevant enquiries.",contribution:"Marketing strategy and lead-generation focused execution.",outcome:"Quality leads generated through the marketing efforts.",liveUrl:"https://sarthaks1236.github.io/adhyayan-academy-mfile/"},Kr={title:"Arvinex Venture — Digital Platform",client:"Arvinex Venture Private Limited",objective:"Build high-throughput commercial and wholesale customer experience.",liveUrl:"https://www.arvinex.store/"},jo={clientName:"Sarla's Food & Fashion",description:"Developed a repeat-customer relationship through consistent service, professional communication and dedicated business support.",quote:"Long-term client relationships are built through reliability — not just one successful project.",principles:["Uncompromising communication rhythm","Continuous commercial & marketing advisory","Reliable execution on every campaign milestone","Proactive problem-solving for sustainable growth"]},XT=[{id:"marketing-pillar",title:"MARKETING",subtitle:"Online + Offline",description:"Harmonizing digital performance with tangible real-world market presence for 360-degree brand visibility.",highlight:"Full-Spectrum Reach"},{id:"web-pillar",title:"WEB",subtitle:"Professional Website Design",description:"Designing credibility-anchored digital platforms tailored for modern businesses and decisive conversions.",highlight:"Digital Headquarters"},{id:"growth-pillar",title:"GROWTH",subtitle:"Lead Generation + Acquisition",description:"Constructing predictable, high-intent lead pipelines that translate directly into top-line revenue expansion.",highlight:"Commercial Engine"},{id:"creative-pillar",title:"CREATIVE",subtitle:"Branding + Communication",description:"Shaping memorable visual identities and razor-sharp messaging that cuts through competitive market noise.",highlight:"Unmissable Identity"}],km={clientsServed:"100+",clientsDetail:"Clients served with a focus on trust, quality and professional delivery."},Sn={email:"ssarthak558@gmail.com",phone:"+91 78763 37056",whatsappUrl:"https://wa.me/917876337056?text="+encodeURIComponent("Hi Sarthak, I explored your 3D digital experience and would like to discuss a marketing project for my business."),instagram:"@arvinex.sarthak"},YT=[{label:"TRUST",desc:"The bedrock of every enduring commercial relationship."},{label:"VALUE",desc:"Communicating undeniable clarity and competitive advantage."},{label:"CUSTOMERS",desc:"Connecting businesses with their ideal, high-lifetime-value audience."},{label:"GROWTH",desc:"The ultimate convergence where strategic marketing moves business."}],qT=({scrollProgress:t,activeSection:e,onHoverStrategyNode:n,hoveredStrategyNode:i,easterEggActive:r})=>{const s=Ge.useRef(null),a=Ge.useRef({x:0,y:0,targetX:0,targetY:0}),o=Ge.useRef({scrollProgress:t,activeSection:e,hoveredStrategyNode:i,easterEggActive:r});return Ge.useEffect(()=>{o.current={scrollProgress:t,activeSection:e,hoveredStrategyNode:i,easterEggActive:r}},[t,e,i,r]),Ge.useEffect(()=>{const l=s.current;if(!l)return;const c=new IT;c.fog=new oh(263432,.035);const d=new pn(55,window.innerWidth/window.innerHeight,.1,100);d.position.set(0,0,8);const p=new LT({antialias:!0,alpha:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(window.innerWidth,window.innerHeight),p.toneMapping=tx,p.toneMappingExposure=1.2,l.appendChild(p.domElement);const f=new GT(857383,2);c.add(f);const m=new zT(26367,5,25);m.position.set(0,0,0),c.add(m);const _=new VT(61695,2.5);_.position.set(5,5,5),c.add(_);const M=new Mr;c.add(M);const x=new ch(1.35,2),u=new ca({color:527380,metalness:.95,roughness:.15,emissive:8806,emissiveIntensity:.6}),g=new tn(x,u);M.add(g);const v=new lh(2,1),y=new ca({color:61695,wireframe:!0,transparent:!0,opacity:.35,emissive:26367,emissiveIntensity:.8}),N=new tn(v,y);M.add(N);const R=new OT({color:659485,metalness:.1,roughness:.1,transmission:.7,transparent:!0,opacity:.45,reflectivity:.9}),A=new tn(v,R);M.add(A);const C=[new Qr({color:61695,transparent:!0,opacity:.7}),new Qr({color:26367,transparent:!0,opacity:.6}),new Qr({color:3718648,transparent:!0,opacity:.5})],T=[];[2.6,3.1,3.6].forEach((P,Ue)=>{const Ce=new $t,be=[],ge=64;for(let ve=0;ve<=ge;ve++){const b=ve/ge*Math.PI*2;be.push(new D(Math.cos(b)*P,Math.sin(b)*P,0))}Ce.setFromPoints(be);const He=new pu(Ce,C[Ue]);He.rotation.x=Ue*.7+.3,He.rotation.y=Ue*.5+.2,T.push(He),M.add(He)});const L=3500,H=new $t,V=new Float32Array(L*3),$=new Float32Array(L*3),Z=new Float32Array(L*3),Y=new De(26367),ee=new De(61695),I=new De(16777215);for(let P=0;P<L;P++){const Ue=P*3,Ce=2.5+Math.random()*18,be=Math.random()*Math.PI*2,ge=Math.acos(Math.random()*2-1),He=Ce*Math.sin(ge)*Math.cos(be),ve=Ce*Math.sin(ge)*Math.sin(be),b=Ce*Math.cos(ge);V[Ue]=He,V[Ue+1]=ve,V[Ue+2]=b,$[Ue]=He,$[Ue+1]=ve,$[Ue+2]=b;const S=Math.random(),k=S<.6?Y:S<.9?ee:I;Z[Ue]=k.r,Z[Ue+1]=k.g,Z[Ue+2]=k.b}H.setAttribute("position",new Rn(V,3)),H.setAttribute("color",new Rn(Z,3));const X=new Lx({size:.05,vertexColors:!0,transparent:!0,opacity:.85,blending:ud}),J=new DT(H,X);c.add(J);const se=new Mr;se.position.set(0,-25,0),c.add(se);const Me=new zl(1,32,32),$e=new ca({color:61695,emissive:26367,emissiveIntensity:.9,roughness:.2,metalness:.8}),W=new tn(Me,$e);se.add(W);const ne=[];ul.forEach(P=>{const Ue=new zl(.45,24,24),Ce=new ca({color:new De(P.color),emissive:new De(P.color),emissiveIntensity:.7,roughness:.3,metalness:.7}),be=new tn(Ue,Ce);be.position.set(P.position[0],P.position[1],P.position[2]),be.userData={id:P.id,label:P.label},se.add(be),ne.push(be);const He=new FT(new D(0,0,0),new D(P.position[0],P.position[1],P.position[2])).getPoints(20),ve=new $t().setFromPoints(He),b=new Qr({color:new De(P.color),transparent:!0,opacity:.6}),S=new pu(ve,b);se.add(S)});const ue=new Mr;ue.position.set(0,-50,0),c.add(ue);for(let P=0;P<18;P++){const Ue=new $t,Ce=[],be=32,ge=3.5+Math.sin(P*.4)*.5;for(let b=0;b<=be;b++){const S=b/be*Math.PI*2;Ce.push(new D(Math.cos(S)*ge,Math.sin(S)*ge,-P*3.5))}Ue.setFromPoints(Ce);const He=new Qr({color:P%2===0?61695:26367,transparent:!0,opacity:.35+(18-P)*.03}),ve=new pu(Ue,He);ue.add(ve)}const ae=new jT,Ae=new Xe,Pe=P=>{if(a.current.targetX=P.clientX/window.innerWidth*2-1,a.current.targetY=-(P.clientY/window.innerHeight)*2+1,Ae.x=P.clientX/window.innerWidth*2-1,Ae.y=-(P.clientY/window.innerHeight)*2+1,o.current.activeSection==="strategy"){ae.setFromCamera(Ae,d);const Ue=ae.intersectObjects(ne);if(Ue.length>0){const Ce=Ue[0].object.userData.id;n&&n(Ce)}}};window.addEventListener("mousemove",Pe);const ze=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",ze);let ot;const qe=new HT,mt=()=>{ot=requestAnimationFrame(mt);const P=qe.getElapsedTime(),{scrollProgress:Ue,hoveredStrategyNode:Ce,easterEggActive:be}=o.current;a.current.x+=(a.current.targetX-a.current.x)*.05,a.current.y+=(a.current.targetY-a.current.y)*.05;const ge=-Ue*65,He=8+Math.sin(Ue*Math.PI*4)*2-(Ue>.85?(Ue-.85)*15:0),ve=a.current.x*.8+Math.sin(Ue*Math.PI*2)*.5;d.position.x+=(ve-d.position.x)*.06,d.position.y+=(ge-d.position.y)*.06,d.position.z+=(He-d.position.z)*.06,d.rotation.y=-a.current.x*.1,d.rotation.x=a.current.y*.08;const b=be?3:.6;M.rotation.y=P*.3*b,M.rotation.x=Math.sin(P*.2)*.2,g.rotation.y=-P*.5*b,N.rotation.z=P*.2*b,T.forEach((q,G)=>{q.rotation.z=P*(.4+G*.2)*(G%2===0?1:-1)*b}),M.position.set(a.current.x*.5,Math.sin(P*.8)*.15,0);const S=.2;se.rotation.y=P*S,se.rotation.z=Math.sin(P*.2)*.1,ne.forEach(q=>{const G=q.userData.id===Ce,xe=G?1.5:1;q.scale.lerp(new D(xe,xe,xe),.1),G&&(q.rotation.y+=.04)}),ue.rotation.z=P*.1;const k=H.attributes.position.array,K=H.attributes.color.array;for(let q=0;q<L;q++){const G=q*3,xe=$[G],oe=$[G+1],pe=$[G+2];if(be)k[G]=xe+Math.sin(P*8+q)*1.5,k[G+1]=oe+Math.cos(P*8+q)*1.5,k[G+2]=pe+Math.sin(P*10)*3,K[G]=0,K[G+1]=1,K[G+2]=1;else if(Ue>.9){const We=(Ue-.9)*10;k[G]=zc.lerp(xe,(Math.random()-.5)*1.5,We),k[G+1]=zc.lerp(oe+ge,ge+(Math.random()-.5)*1.5,We),k[G+2]=zc.lerp(pe,(Math.random()-.5)*1.5,We)}else k[G]=xe+Math.sin(P*.5+q)*.3,k[G+1]=oe+Math.cos(P*.4+q)*.3,k[G+2]=pe+Math.sin(P*.3+q*.5)*.3}H.attributes.position.needsUpdate=!0,be&&(H.attributes.color.needsUpdate=!0),m.intensity=4+Math.sin(P*3)*1.5,m.position.y=ge,p.render(c,d)};return mt(),()=>{cancelAnimationFrame(ot),window.removeEventListener("mousemove",Pe),window.removeEventListener("resize",ze),l.contains(p.domElement)&&l.removeChild(p.domElement),p.dispose()}},[]),h.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",style:{opacity:.95}})},$T=({cursorText:t="",cursorVariant:e="default"})=>{const[n,i]=Ge.useState({x:-100,y:-100}),[r,s]=Ge.useState(!1),[a,o]=Ge.useState(!1);if(Ge.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){s(!0);return}const c=f=>{i({x:f.clientX,y:f.clientY}),a||o(!0)},d=()=>o(!1),p=()=>o(!0);return window.addEventListener("mousemove",c),document.addEventListener("mouseleave",d),document.addEventListener("mouseenter",p),()=>{window.removeEventListener("mousemove",c),document.removeEventListener("mouseleave",d),document.removeEventListener("mouseenter",p)}},[a]),r||!a)return null;const l=!!t||e!=="default";return h.jsx("div",{className:"fixed pointer-events-none z-50 transition-transform duration-75 ease-out",style:{left:`${n.x}px`,top:`${n.y}px`,transform:"translate(-50%, -50%)"},children:h.jsx("div",{className:`rounded-full transition-all duration-300 ${l?"w-16 h-16 bg-brand-cyan/15 border border-brand-cyan/60 backdrop-blur-sm":"w-3 h-3 bg-brand-cyan shadow-[0_0_15px_#00F0FF]"} flex items-center justify-center`,children:t&&h.jsx("span",{className:"text-[9px] font-mono font-bold tracking-widest text-brand-cyan uppercase select-none px-1 text-center leading-none animate-pulse",children:t})})})};class KT{constructor(){dc(this,"ctx",null);dc(this,"isMuted",!0)}getContext(){if(typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted||this.playClick(),this.isMuted}getMuted(){return this.isMuted}playHover(e=880){if(this.isMuted)return;const n=this.getContext();if(n)try{const i=n.createOscillator(),r=n.createGain();i.type="sine",i.frequency.setValueAtTime(e,n.currentTime),i.frequency.exponentialRampToValueAtTime(e*1.5,n.currentTime+.05),r.gain.setValueAtTime(.02,n.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.05),i.connect(r),r.connect(n.destination),i.start(),i.stop(n.currentTime+.05)}catch{}}playClick(){if(this.isMuted)return;const e=this.getContext();if(e)try{const n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(600,e.currentTime),n.frequency.exponentialRampToValueAtTime(200,e.currentTime+.08),i.gain.setValueAtTime(.04,e.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.08),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.08)}catch{}}playWhoosh(){if(this.isMuted)return;const e=this.getContext();if(e)try{const n=e.sampleRate*.15,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=Math.random()*2-1;const s=e.createBufferSource();s.buffer=i;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(400,e.currentTime),a.frequency.exponentialRampToValueAtTime(1600,e.currentTime+.15),a.Q.value=3;const o=e.createGain();o.gain.setValueAtTime(.02,e.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.15),s.connect(a),a.connect(o),o.connect(e.destination),s.start()}catch{}}playPulse(){if(this.isMuted)return;const e=this.getContext();if(e)try{const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(110,e.currentTime),n.frequency.exponentialRampToValueAtTime(55,e.currentTime+.4),i.gain.setValueAtTime(.05,e.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.4),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.4)}catch{}}playEnergySurge(){if(this.isMuted)return;const e=this.getContext();if(e)try{const n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(200,e.currentTime),n.frequency.exponentialRampToValueAtTime(1200,e.currentTime+.6),i.gain.setValueAtTime(.04,e.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.6),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.6)}catch{}}}const Re=new KT;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=Ge.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Ge.createElement("svg",{ref:l,...QT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Dx("lucide",r),...o},[...a.map(([c,d])=>Ge.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(t,e)=>{const n=Ge.forwardRef(({className:i,...r},s)=>Ge.createElement(JT,{ref:s,iconNode:e,className:Dx(`lucide-${ZT(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=je("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=je("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=je("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=je("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=je("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=je("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=je("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=je("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=je("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=je("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=je("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=je("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=je("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=je("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=je("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=je("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=je("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=je("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=je("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=je("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=je("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=je("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=je("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=je("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=je("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=je("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=je("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=je("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=je("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=je("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=je("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=je("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=je("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=je("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=je("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=je("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=je("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=je("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Tb=()=>{const[t,e]=Ge.useState(Re.getMuted()),n=()=>{const i=Re.toggleMute();e(i)};return h.jsx("button",{onClick:n,title:t?"Enable Atmospheric Sound":"Mute Sound",className:`p-2 rounded-full transition-all duration-300 border flex items-center space-x-1.5 ${t?"bg-white/5 border-white/10 text-gray-400 hover:text-white":"bg-brand-cyan/15 border-brand-cyan/50 text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]"}`,children:t?h.jsxs(h.Fragment,{children:[h.jsx(wb,{className:"w-4 h-4"}),h.jsx("span",{className:"hidden xl:inline-block text-[10px] font-mono tracking-widest text-gray-400",children:"SOUND OFF"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Eb,{className:"w-4 h-4"}),h.jsx("span",{className:"hidden xl:inline-block text-[10px] font-mono tracking-widest uppercase",children:"AUDIO ON"}),h.jsxs("div",{className:"flex items-center space-x-0.5 h-3",children:[h.jsx("span",{className:"w-0.5 h-2 bg-brand-cyan animate-pulse"}),h.jsx("span",{className:"w-0.5 h-3 bg-brand-cyan animate-pulse delay-75"}),h.jsx("span",{className:"w-0.5 h-1.5 bg-brand-cyan animate-pulse delay-150"})]})]})})},bb=({activeSection:t,onEasterEggTrigger:e})=>{const[n,i]=Ge.useState(!1),[r,s]=Ge.useState(!1),[a,o]=Ge.useState(0);Ge.useEffect(()=>{const d=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const l=()=>{Re.playClick();const d=a+1;o(d),d>=3&&(Re.playEnergySurge(),e(),o(0))},c=d=>{Re.playWhoosh(),s(!1);const p=document.querySelector(d);p&&p.scrollIntoView({behavior:"smooth"})};return h.jsxs(h.Fragment,{children:[h.jsx("header",{className:`fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-500 ${n?"py-3":"py-6"}`,children:h.jsxs("div",{className:`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${n?"bg-[#0a0d14]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]":"bg-transparent border border-transparent"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("button",{onClick:l,onMouseEnter:()=>Re.playHover(900),title:"Sarthak Sharma — Click 3x for secret mode",className:"group flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-cyan/40 transition-all",children:[h.jsx("span",{className:"font-display font-extrabold text-sm tracking-wider text-brand-cyan group-hover:scale-110 transition-transform",children:"SS"}),h.jsx("span",{className:"hidden md:inline-block text-[11px] font-mono text-gray-400 tracking-widest uppercase",children:"SARTHAK SHARMA"})]}),h.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-mono text-brand-cyan",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"}),h.jsx("span",{children:"CMO • ARVINEX VENTURE"})]})]}),h.jsx("nav",{className:"hidden md:flex items-center space-x-1 sm:space-x-2",children:Om.map(d=>{const p=t===d.id;return h.jsx("button",{onClick:()=>c(d.href),onMouseEnter:()=>Re.playHover(),className:`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${p?"text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:d.label},d.id)})}),h.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[h.jsxs("a",{href:Tt.pdfDeckUrl,download:"Sarthak_Sharma_CMO_Portfolio.pdf",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(1e3),className:"hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-300 hover:text-white transition-all group",title:"Download Executive Portfolio PDF Deck",children:[h.jsx(Bl,{className:"w-3.5 h-3.5 text-brand-cyan group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"PDF DECK"})]}),h.jsx(Tb,{}),h.jsxs("button",{onClick:()=>c("#contact"),onMouseEnter:()=>Re.playHover(1100),className:"hidden sm:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-cyan text-white text-xs font-mono font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] group",children:[h.jsx("span",{children:"START A PROJECT"}),h.jsx(Ma,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsx("button",{onClick:()=>{Re.playClick(),s(!r)},className:"md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white","aria-label":"Toggle Menu",children:r?h.jsx(Vl,{className:"w-5 h-5"}):h.jsx(fb,{className:"w-5 h-5"})})]})]})}),r&&h.jsxs("div",{className:"fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8 space-y-6 animate-fadeIn",children:[h.jsxs("div",{className:"text-center space-y-2 mb-4",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan tracking-widest uppercase",children:Tt.role}),h.jsx("div",{className:"text-2xl font-display font-black text-white",children:Tt.name}),h.jsx("div",{className:"text-xs text-gray-400 font-mono",children:Tt.company})]}),h.jsxs("div",{className:"flex flex-col space-y-3",children:[Om.map(d=>h.jsxs("button",{onClick:()=>c(d.href),className:"text-left py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-base font-mono text-gray-200 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all flex items-center justify-between",children:[h.jsx("span",{children:d.label}),h.jsx(Ma,{className:"w-4 h-4 text-gray-500"})]},d.id)),h.jsxs("a",{href:Tt.pdfDeckUrl,download:"Sarthak_Sharma_CMO_Portfolio.pdf",className:"py-3 px-4 rounded-xl bg-white/5 border border-brand-cyan/30 text-base font-mono text-brand-cyan flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(Bl,{className:"w-4 h-4"}),h.jsx("span",{children:"DOWNLOAD PDF DECK"})]}),h.jsx("span",{className:"text-xs text-gray-400",children:"PDF"})]})]}),h.jsx("button",{onClick:()=>c("#contact"),className:"w-full py-3.5 rounded-xl bg-brand-blue text-white font-mono font-bold tracking-wider text-center shadow-[0_0_25px_rgba(0,102,255,0.6)]",children:"LET'S TALK ↗"})]})]})},Ab=({onComplete:t})=>{const[e,n]=Ge.useState(0);return Ge.useEffect(()=>{Re.playPulse();const i=setTimeout(()=>{n(1),Re.playHover(600)},700),r=setTimeout(()=>{n(2),Re.playHover(900)},1500),s=setTimeout(()=>{n(3),Re.playWhoosh()},2400),a=setTimeout(()=>{t()},2900);return()=>{clearTimeout(i),clearTimeout(r),clearTimeout(s),clearTimeout(a)}},[t]),h.jsxs("div",{className:`fixed inset-0 z-50 bg-[#040508] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none select-none ${e===3?"opacity-0":"opacity-100"}`,children:[h.jsxs("div",{className:"relative flex items-center justify-center",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_30px_#00F0FF] animate-ping"}),h.jsx("div",{className:"absolute w-20 h-20 rounded-full border border-brand-blue/30 animate-spin"}),h.jsx("div",{className:"absolute w-36 h-36 rounded-full border border-brand-cyan/20 animate-reverse-spin"})]}),h.jsxs("div",{className:"mt-8 text-center space-y-2 px-4",children:[h.jsx("div",{className:`text-xs sm:text-sm font-mono tracking-[0.3em] text-gray-400 transition-all duration-700 ${e>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"SARTHAK SHARMA"}),h.jsx("div",{className:`text-sm sm:text-base font-mono tracking-[0.25em] text-brand-cyan font-bold transition-all duration-700 delay-100 ${e>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"CMO / MARKETING / WEB / GROWTH"})]})]})},Rb=({isOpen:t,onClose:e})=>t?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-2xl animate-fadeIn",children:h.jsxs("div",{className:"relative max-w-lg w-full p-8 rounded-3xl bg-gradient-to-b from-[#0a1224] to-[#050811] border border-brand-cyan/50 shadow-[0_0_60px_rgba(0,240,255,0.3)] text-white",children:[h.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white",children:h.jsx(Vl,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center space-x-2 text-brand-cyan mb-4",children:[h.jsx(kx,{className:"w-6 h-6 animate-pulse"}),h.jsx("span",{className:"text-xs font-mono font-bold tracking-widest uppercase",children:"EASTER EGG PROTOCOL UNLOCKED"})]}),h.jsx("h3",{className:"text-3xl font-display font-black tracking-tight text-white mb-2",children:"ARVINEX VENTURE"}),h.jsx("p",{className:"text-sm font-mono text-brand-cyan mb-6",children:"QUANTUM GROWTH CORE INITIALIZED"}),h.jsxs("div",{className:"space-y-4 text-sm text-gray-300 leading-relaxed font-sans mb-6",children:[h.jsx("p",{children:"You discovered the secret interaction! The 3D particle system has transitioned into hyper-drive mode with maximum energy surge."}),h.jsx("div",{className:"p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30 font-mono text-xs text-brand-cyan",children:'"Marketing is not just about making noise — it is the systemic science of connecting business value with real human demand."'})]}),h.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold tracking-wider hover:opacity-95 transition-opacity",children:"RESUME EXPERIENCE"})]})}):null,Cb=({isOpen:t,onClose:e,title:n,url:i,client:r})=>{const[s,a]=Ge.useState("desktop"),[o,l]=Ge.useState(0);if(!t)return null;const c=()=>{Re.playClick(),l(p=>p+1)},d=()=>{switch(s){case"mobile":return"max-w-sm";case"tablet":return"max-w-2xl";case"desktop":default:return"max-w-6xl"}};return h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-obsidian/95 backdrop-blur-3xl animate-fadeIn",children:h.jsxs("div",{className:`w-full ${d()} h-[92vh] flex flex-col rounded-3xl bg-[#090d16] border-2 border-brand-cyan/50 shadow-[0_0_80px_rgba(0,240,255,0.35)] overflow-hidden transition-all duration-500`,children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-[#050811] border-b border-white/10 select-none",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center transition-colors group",children:h.jsx(Vl,{className:"w-2 h-2 text-black opacity-0 group-hover:opacity-100"})}),h.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-yellow-500/80"}),h.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-green-500/80"}),h.jsxs("div",{className:"hidden sm:flex items-center space-x-2 ml-4",children:[h.jsx("span",{className:"text-xs font-display font-bold text-white tracking-wider",children:n}),h.jsx("span",{className:"text-xs text-gray-500 font-mono",children:"•"}),h.jsx("span",{className:"text-[11px] font-mono text-brand-cyan",children:r})]})]}),h.jsxs("div",{className:"hidden md:flex items-center space-x-1 p-1 rounded-xl bg-white/5 border border-white/10",children:[h.jsx("button",{onClick:()=>{Re.playClick(),a("desktop")},className:`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition-all ${s==="desktop"?"bg-brand-blue text-white shadow-[0_0_10px_rgba(0,102,255,0.5)]":"text-gray-400 hover:text-white"}`,title:"Desktop View",children:h.jsx(hb,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:()=>{Re.playClick(),a("tablet")},className:`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition-all ${s==="tablet"?"bg-brand-blue text-white shadow-[0_0_10px_rgba(0,102,255,0.5)]":"text-gray-400 hover:text-white"}`,title:"Tablet View",children:h.jsx(yb,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:()=>{Re.playClick(),a("mobile")},className:`p-1.5 rounded-lg text-xs font-mono flex items-center space-x-1 transition-all ${s==="mobile"?"bg-brand-blue text-white shadow-[0_0_10px_rgba(0,102,255,0.5)]":"text-gray-400 hover:text-white"}`,title:"Mobile View",children:h.jsx(_b,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("button",{onClick:c,className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors",title:"Reload Preview",children:h.jsx(gb,{className:"w-3.5 h-3.5"})}),h.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playWhoosh(),className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-blue/20 hover:bg-brand-blue/40 border border-brand-cyan/40 text-brand-cyan text-xs font-mono font-semibold transition-all group",children:[h.jsx("span",{children:"OPEN NEW TAB"}),h.jsx(Jd,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors ml-1",children:h.jsx(Vl,{className:"w-4 h-4"})})]})]}),h.jsx("div",{className:"flex-1 bg-white relative overflow-hidden",children:h.jsx("iframe",{src:i,title:n,className:"w-full h-full border-0",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms"},o)})]})})},Nb=()=>h.jsx("aside",{"aria-label":"Direct WhatsApp Contact",className:"fixed bottom-6 right-6 z-40",children:h.jsxs("a",{href:Sn.whatsappUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(1050),className:"group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-300",title:`Chat on WhatsApp with Sarthak Sharma (${Sn.phone})`,children:[h.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 animate-ping"}),h.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-obsidian"}),h.jsx(ef,{className:"w-6 h-6 text-white group-hover:rotate-12 transition-transform"}),h.jsxs("div",{className:"absolute right-full mr-3 hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#0a121e]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-[0_5px_20px_rgba(0,0,0,0.8)]",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{children:"CHAT ON WHATSAPP (+91 78763 37056)"})]})]})}),Pb=({onHoverStateChange:t})=>h.jsxs("section",{id:"hero",className:"relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 max-w-7xl mx-auto select-none",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#00F0FF] animate-pulse"}),h.jsx("span",{className:"text-xs font-mono tracking-widest text-brand-cyan uppercase",children:Tt.role}),h.jsx("span",{className:"text-xs text-gray-500 font-mono",children:"/"}),h.jsx("span",{className:"text-xs font-mono text-gray-300 uppercase",children:Tt.company})]}),h.jsx("div",{className:"flex items-center space-x-3",children:h.jsxs("a",{href:Tt.pdfDeckUrl,download:"Sarthak_Sharma_CMO_Portfolio.pdf",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(980),className:"flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-mono transition-all group",children:[h.jsx(Bl,{className:"w-3.5 h-3.5 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"EXECUTIVE PITCH DECK (PDF)"})]})})]}),h.jsx("div",{className:"my-auto py-12 relative z-10",children:h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-mono tracking-wider mb-2",children:[h.jsx(dh,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"INTERACTIVE 3D EXPERIENCE"})]}),h.jsx("h1",{className:"kinetic-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-white uppercase leading-[0.85]",onMouseEnter:()=>t==null?void 0:t("GROWTH"),onMouseLeave:()=>t==null?void 0:t(""),children:"MARKETING"}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 sm:gap-8",children:[h.jsx("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase leading-[0.85]",onMouseEnter:()=>t==null?void 0:t("THAT"),onMouseLeave:()=>t==null?void 0:t(""),children:"THAT MOVES"}),h.jsxs("div",{className:"hidden lg:block max-w-xs p-4 rounded-2xl glass-panel text-xs text-gray-300 font-sans border-l-2 border-brand-cyan",children:[h.jsx("span",{className:"font-mono text-brand-cyan font-bold block mb-1",children:"CORE POSITIONING"}),Tt.manifestoSummary]})]}),h.jsx("h1",{className:"kinetic-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-brand-cyan uppercase leading-[0.85] text-glow-cyan",onMouseEnter:()=>t==null?void 0:t("BUSINESS"),onMouseLeave:()=>t==null?void 0:t(""),children:"BUSINESS."})]})}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-6",children:[h.jsxs("div",{className:"flex items-center space-x-6",children:[h.jsxs("div",{className:"text-left",children:[h.jsx("div",{className:"text-[10px] font-mono text-gray-500 tracking-widest uppercase",children:"DISCIPLINE"}),h.jsx("div",{className:"text-sm font-display font-bold text-gray-200",children:"Growth & Brand Systems"})]}),h.jsx("div",{className:"h-8 w-px bg-white/10"}),h.jsxs("div",{className:"text-left",children:[h.jsx("div",{className:"text-[10px] font-mono text-gray-500 tracking-widest uppercase",children:"CURRENT MANDATE"}),h.jsx("div",{className:"text-sm font-display font-bold text-brand-cyan",children:"CMO @ Arvinex Venture"})]})]}),h.jsxs("div",{className:"flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-brand-cyan/40 transition-all cursor-pointer group",onMouseEnter:()=>t==null?void 0:t("DRAG"),onMouseLeave:()=>t==null?void 0:t(""),onClick:()=>{var e;Re.playWhoosh(),(e=document.querySelector("#profile"))==null||e.scrollIntoView({behavior:"smooth"})},children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan animate-ping"}),h.jsx("span",{children:"DRAG 3D CORE • SCROLL TO EXPLORE"}),h.jsx(Ux,{className:"w-4 h-4 text-brand-cyan group-hover:translate-y-1 transition-transform"})]})]})]}),Lb="/assets/profile_sarthak_978x1304-Chh3Km-m.png",Ib=({onHoverStateChange:t})=>h.jsxs("section",{id:"profile",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(dh,{className:"w-4 h-4"}),h.jsx("span",{children:"PROFILE / 02"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["MORE THAN ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white",children:"MARKETING."})]}),h.jsx("div",{className:"p-6 sm:p-8 rounded-3xl glass-panel-active border-l-4 border-brand-cyan space-y-4",children:h.jsx("p",{className:"text-lg sm:text-xl text-gray-200 leading-relaxed font-sans font-light",children:Tt.profileText})}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx(Mb,{className:"w-5 h-5 text-brand-cyan mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"FOCUS"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Business Visibility"})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx(Ox,{className:"w-5 h-5 text-brand-blue mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"OUTCOME"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Lead Generation"})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1",children:[h.jsx(sb,{className:"w-5 h-5 text-cyan-400 mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"EXECUTION"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Online + Offline"})]})]})]}),h.jsx("div",{className:"lg:col-span-5 relative group",children:h.jsx("div",{className:"relative rounded-3xl overflow-hidden glass-panel border border-brand-blue/30 shadow-[0_0_50px_rgba(0,102,255,0.2)] p-2",children:h.jsxs("div",{className:"relative rounded-2xl overflow-hidden aspect-[4/5] bg-obsidian",children:[h.jsx("img",{src:Lb,alt:"Sarthak Sharma Marketing Profile",className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent"}),h.jsxs("div",{className:"absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian/80 backdrop-blur-md border border-white/10",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan tracking-wider uppercase mb-1",children:"LEADERSHIP"}),h.jsx("div",{className:"text-base font-bold text-white",children:"Chief Marketing Officer"}),h.jsx("div",{className:"text-xs text-gray-400 font-mono",children:"Arvinex Venture Private Limited"})]})]})})})]})]}),Db=({selectedNodeId:t,onSelectNode:e,onHoverStateChange:n})=>{const i=ul.find(a=>a.id===t)||ul[0],r=a=>{Re.playClick(),e(a)},s=a=>{Re.playHover(780),e(a),n==null||n("INSPECT")};return h.jsxs("section",{id:"strategy",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(nb,{className:"w-4 h-4 animate-spin"}),h.jsx("span",{children:"SIGNATURE 3D ENGINE / 03"})]}),h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["THE STRATEGY ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"OPERATING SYSTEM."})]}),h.jsx("p",{className:"text-sm font-mono text-gray-400 mt-2 max-w-xl",children:"A cohesive strategic engine connecting core marketing pillars with commercial acquisition mechanics."})]}),h.jsxs("div",{className:"text-xs font-mono text-gray-300 px-4 py-2 rounded-full bg-white/5 border border-brand-cyan/30 self-start md:self-auto flex items-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.15)]",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan animate-pulse"}),h.jsx("span",{children:"CLICK OR HOVER TABS TO INSPECT"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[h.jsx("div",{className:"lg:col-span-5 space-y-3",children:ul.map(a=>{const o=a.id===i.id;return h.jsxs("button",{type:"button",onClick:()=>r(a.id),onMouseEnter:()=>s(a.id),onMouseLeave:()=>n==null?void 0:n(""),className:`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between group ${o?"bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.3)] translate-x-2":"bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-cyan/40"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3.5",children:[h.jsx("div",{className:"w-3.5 h-3.5 rounded-full transition-transform duration-300 group-hover:scale-125",style:{backgroundColor:a.color,boxShadow:o?`0 0 15px ${a.color}`:`0 0 5px ${a.color}`}}),h.jsxs("div",{children:[h.jsx("div",{className:"text-sm sm:text-base font-mono font-bold text-white tracking-wider group-hover:text-brand-cyan transition-colors",children:a.label}),h.jsx("div",{className:"text-xs text-gray-400 font-mono",children:a.subtitle})]})]}),h.jsx(Fx,{className:`w-5 h-5 transition-all duration-300 ${o?"text-brand-cyan translate-x-1":"text-gray-600 group-hover:text-gray-300"}`})]},a.id)})}),h.jsx("div",{className:"lg:col-span-7 sticky top-28",children:h.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_50px_rgba(0,102,255,0.35)] space-y-6 animate-fadeIn",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"}),h.jsx("span",{className:"text-xs font-mono text-brand-cyan font-bold tracking-widest uppercase",children:"NODE SPECIFICATION"})]}),h.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[10px] font-mono text-brand-cyan uppercase",children:"STATUS: ACTIVE"})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-3xl sm:text-5xl font-display font-black text-white mb-2 tracking-tight",children:i.label}),h.jsx("p",{className:"text-sm sm:text-base font-mono text-brand-cyan font-semibold",children:i.subtitle})]}),h.jsx("p",{className:"text-base sm:text-lg text-gray-200 leading-relaxed font-sans font-light",children:i.description}),h.jsxs("div",{className:"p-4 rounded-xl bg-obsidian/80 border border-white/10 flex items-center justify-between text-xs font-mono text-gray-400",children:[h.jsx("span",{children:"ORBITAL 3D COORDINATES"}),h.jsxs("span",{className:"text-brand-cyan font-bold",children:["[",i.position.join(", "),"]"]})]})]})})]})]})},Ub=({onHoverStateChange:t})=>h.jsxs("section",{id:"responsibilities",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(cb,{className:"w-4 h-4"}),h.jsx("span",{children:"ROLE & RESPONSIBILITY / 04"})]}),h.jsxs("div",{className:"mb-14",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["WHERE STRATEGY ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue",children:"MEETS EXECUTION."})]}),h.jsx("p",{className:"text-sm font-mono text-gray-400 mt-3 max-w-2xl",children:"CHIEF MARKETING OFFICER — ARVINEX VENTURE PRIVATE LIMITED. The 9 strategic pillars executed across online, offline, and brand channels."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:WT.map(e=>h.jsxs("div",{onMouseEnter:()=>{Re.playHover(820),t==null||t(e.number)},onMouseLeave:()=>t==null?void 0:t(""),className:"p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50 hover:-translate-y-1 relative overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-2xl font-display font-black text-brand-cyan group-hover:scale-110 transition-transform",children:e.number}),h.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-[10px] font-mono text-brand-cyan uppercase",children:e.tag})]}),h.jsx("h3",{className:"text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors mb-2",children:e.title}),h.jsx("p",{className:"text-sm text-gray-300 leading-relaxed font-sans font-light",children:e.shortDesc})]},e.id))})]}),Fb=({onHoverStateChange:t})=>{const[e,n]=Ge.useState(Ho[0].id),i=Ho.find(r=>r.id===e)||Ho[0];return h.jsxs("section",{id:"capabilities",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(kx,{className:"w-4 h-4"}),h.jsx("span",{children:"CAPABILITIES / 05"})]}),h.jsxs("div",{className:"mb-14",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["WHAT I BRING ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"TO THE TABLE."})]}),h.jsx("p",{className:"text-sm font-mono text-gray-400 mt-3 max-w-xl",children:"Five specialized marketing disciplines unified into one comprehensive commercial engine."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[h.jsx("div",{className:"lg:col-span-5 space-y-3",children:Ho.map(r=>{const s=r.id===e;return h.jsxs("button",{onClick:()=>{Re.playClick(),n(r.id)},onMouseEnter:()=>{Re.playHover(860),t==null||t("EXPLORE")},onMouseLeave:()=>t==null?void 0:t(""),className:`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${s?"bg-brand-blue/20 border-brand-cyan shadow-[0_0_25px_rgba(0,240,255,0.25)] translate-x-2":"bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"text-xs font-mono text-brand-cyan font-bold mb-1",children:[r.number," — CAPABILITY"]}),h.jsx("div",{className:"text-lg font-display font-bold text-white",children:r.title})]}),h.jsx(Fx,{className:`w-5 h-5 ${s?"text-brand-cyan":"text-gray-600"}`})]},r.id)})}),h.jsx("div",{className:"lg:col-span-7",children:h.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_40px_rgba(0,102,255,0.3)] space-y-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[h.jsxs("span",{className:"text-xs font-mono text-brand-cyan font-bold tracking-widest",children:["DISCIPLINE: ",i.number]}),h.jsx("span",{className:"px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[11px] font-mono text-brand-cyan",children:i.visualMetaphor})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-3xl sm:text-4xl font-display font-black text-white mb-2",children:i.title}),h.jsxs("p",{className:"text-base sm:text-lg font-sans text-brand-cyan font-medium",children:['"',i.tagline,'"']})]}),h.jsx("p",{className:"text-base text-gray-200 leading-relaxed font-sans",children:i.description}),h.jsxs("div",{className:"border-t border-white/10 pt-6",children:[h.jsx("div",{className:"text-xs font-mono text-gray-400 tracking-wider uppercase mb-4",children:"CORE DELIVERABLES & ARTIFACTS"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:i.deliverables.map((r,s)=>h.jsxs("div",{className:"flex items-center space-x-2 p-3 rounded-xl bg-white/5 border border-white/10",children:[h.jsx(Sa,{className:"w-4 h-4 text-brand-cyan shrink-0"}),h.jsx("span",{className:"text-xs font-mono text-gray-200",children:r})]},s))})]})]})})]})]})},Ob="/assets/adhyayan_academy_device_1229x820-B42sbGFf.png",kb="/assets/adhyayan_academy_casestudy_1600x912-DRwPGG4e.png",zb=({onOpenLivePreview:t,onHoverStateChange:e})=>{const n=(i,r,s)=>{Re.playEnergySurge(),t?t(i,r,s):window.open(r,"_blank")};return h.jsxs("section",{id:"work",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"mb-24",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(lb,{className:"w-4 h-4"}),h.jsx("span",{children:"DIGITAL EXPERIENCE / 06"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["WEBSITES SHOULD ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue",children:"WORK HARDER."})]}),h.jsx("p",{className:"text-lg sm:text-xl text-gray-200 leading-relaxed font-sans font-light",children:"A website is often the first serious interaction between a business and a potential customer. Sarthak focuses on creating professional, modern and business-oriented websites that communicate value, build credibility and support customer acquisition."}),h.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:["Professional Website Design","Business Websites","Landing Pages","Conversion-Focused Structure","Brand-Aligned Digital Presence"].map((i,r)=>h.jsx("span",{className:"px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:i},r))}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-4",children:[h.jsxs("button",{onClick:()=>n(Pt.title,Pt.liveUrl,Pt.client),onMouseEnter:()=>{Re.playHover(900),e==null||e("PREVIEW")},onMouseLeave:()=>e==null?void 0:e(""),className:"flex items-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all group",children:[h.jsx(Wo,{className:"w-4 h-4 fill-white group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"INTERACTIVE LIVE PREVIEW"})]}),h.jsxs("a",{href:Pt.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(950),className:"flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-200 hover:text-white transition-all group",children:[h.jsx("span",{children:"VISIT LIVE HOSTED SITE"}),h.jsx(Jd,{className:"w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]})]}),h.jsx("div",{className:"lg:col-span-5 relative group cursor-pointer",onClick:()=>n(Pt.title,Pt.liveUrl,Pt.client),children:h.jsxs("div",{className:"relative rounded-3xl overflow-hidden glass-panel border border-brand-cyan/40 p-2 shadow-[0_0_50px_rgba(0,240,255,0.25)]",children:[h.jsx("img",{src:Ob,alt:"Adhyayan Academy Device View",className:"w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition-transform duration-700"}),h.jsx("div",{className:"absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl",children:h.jsxs("div",{className:"px-5 py-2.5 rounded-full bg-brand-cyan text-black font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_#00F0FF] flex items-center space-x-2",children:[h.jsx(Wo,{className:"w-3.5 h-3.5 fill-black"}),h.jsx("span",{children:"CLICK TO LAUNCH PREVIEW"})]})})]})})]})]}),h.jsxs("div",{className:"p-8 sm:p-12 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_60px_rgba(0,102,255,0.3)] mb-12",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan tracking-widest uppercase mb-1",children:"PRIMARY CASE STUDY"}),h.jsx("h3",{className:"text-3xl sm:text-5xl font-display font-black text-white",children:Pt.title})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("button",{onClick:()=>n(Pt.title,Pt.liveUrl,Pt.client),className:"flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-cyan/15 hover:bg-brand-cyan/30 border border-brand-cyan/50 text-xs font-mono text-brand-cyan font-bold transition-all",children:[h.jsx(Wo,{className:"w-3.5 h-3.5 fill-brand-cyan"}),h.jsx("span",{children:"TEST LIVE INTERACTION"})]}),h.jsxs("div",{className:"hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue/20 border border-brand-cyan/40 text-xs font-mono text-brand-cyan",children:[h.jsx(vb,{className:"w-4 h-4"}),h.jsx("span",{children:"VERIFIED PORTFOLIO CASE"})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8",children:[h.jsx("div",{className:"lg:col-span-6 space-y-6",children:h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase mb-1",children:"THE CLIENT"}),h.jsx("div",{className:"text-base font-bold text-white",children:Pt.client})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase mb-1",children:"THE OBJECTIVE"}),h.jsx("div",{className:"text-base text-gray-200",children:Pt.objective})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase mb-1",children:"THE CONTRIBUTION"}),h.jsx("div",{className:"text-base text-gray-200",children:Pt.contribution})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-brand-blue/20 border border-brand-cyan/40",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase mb-1",children:"THE OUTCOME"}),h.jsx("div",{className:"text-base font-bold text-white",children:Pt.outcome})]})]})}),h.jsxs("div",{className:"lg:col-span-6 relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer group",onClick:()=>n(Pt.title,Pt.liveUrl,Pt.client),children:[h.jsx("img",{src:kb,alt:"Adhyayan Academy Case Study Visual",className:"w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"}),h.jsx("div",{className:"absolute inset-0 bg-obsidian/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:h.jsx("div",{className:"px-4 py-2 rounded-full bg-brand-cyan text-black font-mono font-bold text-xs tracking-wider uppercase",children:"CLICK TO LAUNCH LIVE PREVIEW"})})]})]})]}),h.jsxs("div",{className:"p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase",children:"ENTERPRISE DIGITAL ASSET"}),h.jsx("h4",{className:"text-2xl font-display font-bold text-white",children:Kr.title}),h.jsx("p",{className:"text-sm text-gray-400 font-sans max-w-xl",children:Kr.objective})]}),h.jsxs("div",{className:"flex items-center space-x-3 w-full md:w-auto",children:[h.jsxs("button",{onClick:()=>n(Kr.title,Kr.liveUrl,Kr.client),className:"flex-1 md:flex-initial flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-brand-cyan/15 hover:bg-brand-cyan/30 border border-brand-cyan/40 text-brand-cyan font-mono font-bold text-xs tracking-wider transition-all",children:[h.jsx(Wo,{className:"w-3.5 h-3.5 fill-brand-cyan"}),h.jsx("span",{children:"LIVE PREVIEW"})]}),h.jsx("a",{href:Kr.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors",title:"Open Arvinex Platform in New Tab",children:h.jsx(Jd,{className:"w-4 h-4"})})]})]})]})},Bb="/assets/sarla_food_fashion_vision_1600x912-DJwRsLyk.png",Vb=({onHoverStateChange:t})=>h.jsxs("section",{className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(ab,{className:"w-4 h-4"}),h.jsx("span",{children:"CLIENT RELATIONSHIPS / 07"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["TRUST IS BUILT ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue",children:"THROUGH CONSISTENCY."})]}),h.jsxs("div",{className:"p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2",children:[h.jsxs("div",{className:"text-xs font-mono text-brand-cyan tracking-wider uppercase",children:["CLIENT PARTNERSHIP: ",jo.clientName]}),h.jsx("p",{className:"text-base sm:text-lg text-gray-200 leading-relaxed font-sans",children:jo.description})]}),h.jsxs("div",{className:"p-6 rounded-2xl glass-panel-active border-l-4 border-brand-cyan relative",children:[h.jsx(mb,{className:"w-8 h-8 text-brand-cyan/30 absolute top-4 right-4"}),h.jsxs("p",{className:"text-lg sm:text-xl font-display font-medium text-white italic",children:['"',jo.quote,'"']})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:jo.principles.map((e,n)=>h.jsxs("div",{className:"flex items-center space-x-2 p-3 rounded-xl bg-white/5 border border-white/10",children:[h.jsx(Sa,{className:"w-4 h-4 text-brand-cyan shrink-0"}),h.jsx("span",{className:"text-xs font-mono text-gray-300",children:e})]},n))})]}),h.jsx("div",{className:"lg:col-span-5 relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_40px_rgba(0,102,255,0.2)]",children:h.jsx("img",{src:Bb,alt:"Sarla's Food & Fashion Client Story",className:"w-full h-auto object-cover rounded-2xl"})})]})]}),Gb=({onHoverStateChange:t})=>h.jsxs("section",{className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(Ox,{className:"w-4 h-4"}),h.jsx("span",{children:"IMPACT / 08"})]}),h.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14",children:[h.jsx("div",{children:h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["BUILT THROUGH ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"REAL WORK."})]})}),h.jsxs("div",{className:"p-6 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 flex items-center space-x-6",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-5xl sm:text-6xl font-display font-black text-brand-cyan",children:km.clientsServed}),h.jsx("div",{className:"text-xs font-mono text-gray-300 uppercase tracking-wider",children:"CLIENTS SERVED"})]}),h.jsx("div",{className:"h-12 w-px bg-white/20"}),h.jsx("p",{className:"text-xs font-sans text-gray-300 max-w-xs leading-relaxed",children:km.clientsDetail})]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:XT.map(e=>h.jsxs("div",{onMouseEnter:()=>{Re.playHover(890),t==null||t(e.title)},onMouseLeave:()=>t==null?void 0:t(""),className:"p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan font-bold tracking-widest uppercase mb-2",children:e.subtitle}),h.jsx("h3",{className:"text-2xl font-display font-black text-white group-hover:text-brand-cyan transition-colors mb-3",children:e.title}),h.jsx("p",{className:"text-xs text-gray-300 leading-relaxed font-sans font-light",children:e.description})]},e.id))}),h.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-blue/30 border border-brand-cyan/40 text-center flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4",children:[h.jsx(Ux,{className:"w-5 h-5 text-brand-cyan animate-bounce"}),h.jsx("span",{className:"text-sm font-mono font-bold tracking-widest text-white uppercase",children:"ALL 4 PILLARS CONVERGE INTO ONE OUTCOME:"}),h.jsx("span",{className:"text-lg font-display font-black text-brand-cyan tracking-wider uppercase",children:"BUSINESS GROWTH"})]})]}),Hb=({onHoverStateChange:t})=>h.jsxs("section",{id:"about",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 select-none",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(rb,{className:"w-4 h-4 text-brand-cyan animate-pulse"}),h.jsx("span",{children:"PHILOSOPHY / 09"})]}),h.jsxs("div",{className:"space-y-4 mb-12",children:[h.jsx("div",{className:"text-xs sm:text-sm font-mono tracking-[0.25em] text-gray-400 uppercase",children:"GOOD MARKETING IS NOT NOISE."}),h.jsxs("div",{className:"space-y-1",children:[h.jsx("h2",{className:"kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white uppercase",onMouseEnter:()=>t==null?void 0:t("CLARITY"),onMouseLeave:()=>t==null?void 0:t(""),children:"CLARITY."}),h.jsx("h2",{className:"kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white uppercase",onMouseEnter:()=>t==null?void 0:t("POSITIONING"),onMouseLeave:()=>t==null?void 0:t(""),children:"POSITIONING."}),h.jsx("h2",{className:"kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-brand-cyan uppercase text-glow-cyan",onMouseEnter:()=>t==null?void 0:t("ACTION"),onMouseLeave:()=>t==null?void 0:t(""),children:"ACTION."})]})]}),h.jsxs("div",{className:"max-w-4xl p-8 sm:p-12 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_50px_rgba(0,102,255,0.3)]",children:[h.jsxs("p",{className:"text-xl sm:text-2xl md:text-3xl text-gray-100 font-display font-light leading-relaxed",children:['"',Tt.philosophyBody,'"']}),h.jsxs("div",{className:"mt-6 flex items-center space-x-3 text-xs font-mono text-brand-cyan",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan animate-ping"}),h.jsx("span",{children:"SARTHAK SHARMA — MARKETING MANIFESTO"})]})]})]}),jb="/assets/profile_sarthak_978x1304-Chh3Km-m.png",Wb=({onHoverStateChange:t})=>h.jsxs("section",{className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(Sb,{className:"w-4 h-4"}),h.jsx("span",{children:"PERSON / 10"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsx("div",{className:"lg:col-span-5 relative group order-2 lg:order-1",children:h.jsx("div",{className:"relative rounded-3xl overflow-hidden glass-panel border-2 border-brand-cyan/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] p-2",children:h.jsxs("div",{className:"relative rounded-2xl overflow-hidden aspect-[4/5] bg-obsidian",children:[h.jsx("img",{src:jb,alt:"Sarthak Sharma Portrait",className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"})]})})}),h.jsxs("div",{className:"lg:col-span-7 space-y-8 order-1 lg:order-2",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["BEYOND ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"THE TITLE."})]}),h.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3",children:[h.jsx("span",{className:"text-lg sm:text-xl font-display font-bold text-white",children:Tt.name}),h.jsx("span",{className:"px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-xs font-mono text-brand-cyan",children:Tt.subPositioning})]})]}),h.jsx("div",{className:"p-8 rounded-3xl glass-panel-active border-l-4 border-brand-cyan space-y-4",children:h.jsxs("p",{className:"text-xl sm:text-2xl text-gray-100 font-display font-light leading-relaxed",children:['"',Tt.mindset,'"']})}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx(tb,{className:"w-5 h-5 text-brand-cyan mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"ORIENTATION"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Business Mindset"})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx(dh,{className:"w-5 h-5 text-brand-blue mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"DISCIPLINE"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Obsessive Execution"})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[h.jsx(ub,{className:"w-5 h-5 text-cyan-400 mb-2"}),h.jsx("div",{className:"text-xs font-mono text-gray-400",children:"DELIVERY"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Market-Ready UI"})]})]})]})]})]}),Xb=({onHoverStateChange:t})=>h.jsxs("section",{className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(ib,{className:"w-4 h-4"}),h.jsx("span",{children:"VISION / 11"})]}),h.jsxs("div",{className:"mb-14",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]",children:["WHERE I'M ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"HEADING."})]}),h.jsx("p",{className:"text-lg sm:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed font-sans font-light",children:Tt.visionText})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:YT.map((e,n)=>h.jsxs("div",{onMouseEnter:()=>{Re.playHover(900+n*50),t==null||t(e.label)},onMouseLeave:()=>t==null?void 0:t(""),className:"p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50 relative overflow-hidden",children:[h.jsxs("div",{className:"text-3xl font-display font-black text-brand-cyan mb-2 group-hover:scale-110 transition-transform",children:["0",n+1]}),h.jsx("h3",{className:"text-2xl font-display font-black text-white mb-2",children:e.label}),h.jsx("p",{className:"text-xs text-gray-300 font-sans leading-relaxed",children:e.desc})]},n))})]}),Yb=({onHoverStateChange:t})=>{const[e,n]=Ge.useState({name:"",email:"",company:"",projectType:"Marketing Strategy",message:""}),[i,r]=Ge.useState(null),[s,a]=Ge.useState(!1),[o,l]=Ge.useState(!1),c=(f,m)=>{Re.playClick(),navigator.clipboard.writeText(f),r(m),setTimeout(()=>r(null),2500)},d=f=>{f.preventDefault(),Re.playEnergySurge(),l(!0),setTimeout(()=>{l(!1),a(!0);const m=encodeURIComponent(`Executive Project Enquiry for Sarthak Sharma: ${e.projectType} (${e.name})`),_=encodeURIComponent(`Name: ${e.name}
Email: ${e.email}
Company: ${e.company}
Project Scope: ${e.projectType}

Message Details:
${e.message}`);window.location.href=`mailto:${Sn.email}?subject=${m}&body=${_}`},600)},p=()=>{Re.playClick();const f=encodeURIComponent(`Hi Sarthak, my name is ${e.name||"a visitor"} (${e.email||"Email"}). I am reaching out regarding ${e.projectType}: "${e.message||"I would like to discuss working together on marketing strategy."}"`);window.open(`https://wa.me/917876337056?text=${f}`,"_blank")};return h.jsxs("section",{id:"contact",className:"py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4",children:[h.jsx(Bm,{className:"w-4 h-4"}),h.jsx("span",{children:"CONTACT / 12"})]}),h.jsxs("div",{className:"mb-14",children:[h.jsxs("h2",{className:"kinetic-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.88]",children:["LET'S BUILD ",h.jsx("br",{}),"SOMETHING ",h.jsx("br",{}),h.jsx("span",{className:"text-brand-cyan text-glow-cyan",children:"THAT GROWS."})]}),h.jsx("p",{className:"text-base sm:text-lg font-mono text-gray-300 mt-4 max-w-xl",children:"Direct engagement channel for CMO advisory, marketing strategy, and high-performance digital asset engineering."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[h.jsxs("a",{href:Sn.whatsappUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(900),className:"p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-green-900/30 to-emerald-950/40 hover:from-emerald-900/60 hover:to-green-900/50 transition-all duration-300 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-center justify-between group",children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-emerald-500/20 text-emerald-400",children:h.jsx(ef,{className:"w-6 h-6 group-hover:scale-110 transition-transform"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"text-xs font-mono text-emerald-400 font-bold uppercase flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),h.jsx("span",{children:"1-CLICK DIRECT WHATSAPP"})]}),h.jsx("div",{className:"text-base font-bold text-white group-hover:text-emerald-300 transition-colors",children:Sn.phone})]})]}),h.jsx(Ma,{className:"w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]}),h.jsxs("div",{className:"p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 border border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-brand-blue/20 text-brand-cyan",children:h.jsx(Bm,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-mono text-gray-400 uppercase",children:"EMAIL"}),h.jsx("a",{href:`mailto:${Sn.email}`,className:"text-base font-bold text-white hover:text-brand-cyan transition-colors",children:Sn.email})]})]}),h.jsx("button",{onClick:()=>c(Sn.email,"email"),className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white",title:"Copy Email",children:i==="email"?h.jsx(Sa,{className:"w-4 h-4 text-green-400"}):h.jsx(zm,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 border border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan",children:h.jsx(pb,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-mono text-gray-400 uppercase",children:"DIRECT PHONE"}),h.jsx("a",{href:`tel:${Sn.phone.replace(/\s+/g,"")}`,className:"text-base font-bold text-white hover:text-brand-cyan transition-colors",children:Sn.phone})]})]}),h.jsx("button",{onClick:()=>c(Sn.phone,"phone"),className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white",title:"Copy Phone",children:i==="phone"?h.jsx(Sa,{className:"w-4 h-4 text-green-400"}):h.jsx(zm,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("a",{href:"https://instagram.com/arvinex.sarthak",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>Re.playHover(950),className:"p-5 rounded-2xl glass-panel hover:glass-panel-active transition-all border border-white/10 flex items-center justify-between group",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(ob,{className:"w-5 h-5 text-pink-400"}),h.jsx("span",{className:"text-xs font-mono font-bold text-white",children:Sn.instagram})]}),h.jsx(Ma,{className:"w-4 h-4 text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsxs("a",{href:"https://linkedin.com/in/sarthaksharma",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>Re.playHover(950),className:"p-5 rounded-2xl glass-panel hover:glass-panel-active transition-all border border-white/10 flex items-center justify-between group",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(db,{className:"w-5 h-5 text-blue-400"}),h.jsx("span",{className:"text-xs font-mono font-bold text-white",children:"LinkedIn"})]}),h.jsx(Ma,{className:"w-4 h-4 text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),h.jsxs("div",{className:"p-6 rounded-3xl glass-panel border border-brand-cyan/30 flex items-center justify-between",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsx("div",{className:"text-xs font-mono text-brand-cyan uppercase",children:"OFFICIAL ASSET"}),h.jsx("div",{className:"text-sm font-bold text-white",children:"Executive Portfolio Deck"}),h.jsx("div",{className:"text-xs text-gray-400 font-mono",children:"12-Page Complete Strategy Profile"})]}),h.jsxs("a",{href:Tt.pdfDeckUrl,download:"Sarthak_Sharma_CMO_Portfolio.pdf",onClick:()=>Re.playClick(),className:"flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-brand-blue hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]",children:[h.jsx(Bl,{className:"w-4 h-4"}),h.jsx("span",{children:"DOWNLOAD"})]})]})]}),h.jsx("div",{className:"lg:col-span-7",children:h.jsxs("form",{onSubmit:d,className:"p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_50px_rgba(0,102,255,0.3)] space-y-6",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-gray-400 uppercase",children:"NAME *"}),h.jsx("input",{type:"text",required:!0,value:e.name,onChange:f=>n({...e,name:f.target.value}),placeholder:"Your Name",className:"w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-gray-400 uppercase",children:"EMAIL *"}),h.jsx("input",{type:"email",required:!0,value:e.email,onChange:f=>n({...e,email:f.target.value}),placeholder:"name@company.com",className:"w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-gray-400 uppercase",children:"COMPANY / BRAND"}),h.jsx("input",{type:"text",value:e.company,onChange:f=>n({...e,company:f.target.value}),placeholder:"Company Name",className:"w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-gray-400 uppercase",children:"PROJECT SCOPE"}),h.jsxs("select",{value:e.projectType,onChange:f=>n({...e,projectType:f.target.value}),className:"w-full px-4 py-3 rounded-xl bg-[#0a0d14] border border-white/10 text-white focus:outline-none focus:border-brand-cyan text-sm font-sans",children:[h.jsx("option",{value:"Marketing Strategy",children:"Marketing Strategy & Direction"}),h.jsx("option",{value:"Online + Offline Marketing",children:"Online + Offline Marketing"}),h.jsx("option",{value:"Website Planning & Design",children:"Website Planning & Design"}),h.jsx("option",{value:"Lead Generation System",children:"Lead Generation System"}),h.jsx("option",{value:"CMO Advisory",children:"CMO Advisory / Long-Term Mandate"})]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-gray-400 uppercase",children:"MESSAGE DETAILS *"}),h.jsx("textarea",{required:!0,rows:4,value:e.message,onChange:f=>n({...e,message:f.target.value}),placeholder:"Tell me about your commercial objectives, timeline, and goals...",className:"w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[h.jsxs("button",{type:"submit",disabled:o,onMouseEnter:()=>{Re.playHover(1100),t==null||t("SEND")},onMouseLeave:()=>t==null?void 0:t(""),className:"flex-1 w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-mono font-bold tracking-wider hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center space-x-2 group disabled:opacity-50",children:[h.jsx("span",{children:o?"PREPARING ENQUIRY...":"START THE CONVERSATION"}),h.jsx(xb,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),h.jsxs("button",{type:"button",onClick:p,className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/50 text-emerald-300 font-mono font-bold text-xs tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]",title:"Send Enquiry Directly to WhatsApp",children:[h.jsx(ef,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"WHATSAPP INSTEAD"})]})]}),s&&h.jsxs("div",{className:"p-4 rounded-xl bg-green-950/50 border border-green-500/50 text-green-300 text-xs font-mono text-center space-y-2 animate-fadeIn",children:[h.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[h.jsx(Sa,{className:"w-4 h-4 text-green-400"}),h.jsx("span",{className:"font-bold",children:"ENQUIRY PREPARED FOR SARTHAK SHARMA!"})]}),h.jsx("p",{className:"text-gray-300 text-[11px]",children:'Your mail client has been opened. You can also click the "WhatsApp Instead" button above to send it instantly via WhatsApp!'})]})]})})]})]})},qb=()=>{const t=()=>{Re.playWhoosh(),window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("footer",{className:"border-t border-white/10 py-12 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 select-none",children:[h.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[h.jsxs("div",{className:"text-center md:text-left space-y-1",children:[h.jsx("div",{className:"text-lg font-display font-black text-white tracking-wider",children:Tt.name}),h.jsxs("div",{className:"text-xs font-mono text-gray-400",children:[Tt.role," — ",Tt.company]}),h.jsx("div",{className:"text-[11px] font-mono text-brand-cyan",children:Tt.positioning})]}),h.jsxs("button",{onClick:t,onMouseEnter:()=>Re.playHover(900),className:"flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-300 hover:text-white transition-all",children:[h.jsx("span",{children:"BACK TO TOP"}),h.jsx(eb,{className:"w-4 h-4 text-brand-cyan"})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500",children:[h.jsxs("div",{children:["© ",new Date().getFullYear()," SARTHAK SHARMA. ALL RIGHTS RESERVED."]}),h.jsxs("div",{className:"flex items-center space-x-2 text-brand-cyan",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"}),h.jsx("span",{children:"ATTENTION → STRATEGY → EXECUTION → GROWTH"})]})]})]})},$b=()=>{const[t,e]=Ge.useState(!1),[n,i]=Ge.useState(0),[r,s]=Ge.useState("hero"),[a,o]=Ge.useState("marketing"),[l,c]=Ge.useState(""),[d,p]=Ge.useState(!1),[f,m]=Ge.useState(!1),[_,M]=Ge.useState({isOpen:!1,title:"",url:"",client:""});Ge.useEffect(()=>{const v=()=>{const y=document.documentElement.scrollHeight-window.innerHeight,N=y>0?window.scrollY/y:0;i(N);const R=["hero","profile","strategy","responsibilities","capabilities","work","about","contact"];for(const A of R){const C=document.getElementById(A);if(C){const T=C.getBoundingClientRect();if(T.top<=window.innerHeight*.4&&T.bottom>=window.innerHeight*.2){s(A);break}}}};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[]);const x=()=>{p(!0),m(!0)},u=(v,y,N)=>{M({isOpen:!0,title:v,url:y,client:N})},g=()=>{M(v=>({...v,isOpen:!1}))};return h.jsxs("div",{className:"relative min-h-screen bg-[#040508] text-white selection:bg-[#0066FF] selection:text-white",children:[!t&&h.jsx(Ab,{onComplete:()=>e(!0)}),h.jsx(qT,{scrollProgress:n,activeSection:r,hoveredStrategyNode:a,onHoverStrategyNode:o,easterEggActive:d}),h.jsx($T,{cursorText:l}),h.jsx(bb,{activeSection:r,onEasterEggTrigger:x}),h.jsx(Rb,{isOpen:f,onClose:()=>m(!1)}),h.jsx(Cb,{isOpen:_.isOpen,onClose:g,title:_.title,url:_.url,client:_.client}),h.jsx(Nb,{}),h.jsxs("main",{className:"relative z-10",children:[h.jsx(Pb,{onHoverStateChange:c}),h.jsx(Ib,{onHoverStateChange:c}),h.jsx(Db,{selectedNodeId:a,onSelectNode:o,onHoverStateChange:c}),h.jsx(Ub,{onHoverStateChange:c}),h.jsx(Fb,{onHoverStateChange:c}),h.jsx(zb,{onOpenLivePreview:u,onHoverStateChange:c}),h.jsx(Vb,{onHoverStateChange:c}),h.jsx(Gb,{onHoverStateChange:c}),h.jsx(Hb,{onHoverStateChange:c}),h.jsx(Wb,{onHoverStateChange:c}),h.jsx(Xb,{onHoverStateChange:c}),h.jsx(Yb,{onHoverStateChange:c}),h.jsx(qb,{})]})]})};xu.createRoot(document.getElementById("root")).render(h.jsx(av.StrictMode,{children:h.jsx($b,{})}));
