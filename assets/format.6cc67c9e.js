import{c as P,V as z,j as m,n as D,W as S,O as h,X as y,S as k,Q as g,R as E,P as C,s as X}from"./index.cff86de7.js";import{i as _}from"./vm.da30f808.js";const R={dark:{type:Boolean,default:null}};function j(o,t){return P(()=>o.dark===null?t.dark.isActive:o.dark)}const w={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},O=Object.keys(w);w.all=!0;function A(o){const t={};for(const n of O)o[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?w:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const T=["INPUT","TEXTAREA"];function M(o,t){return t.event===void 0&&o.target!==void 0&&o.target.draggable!==!0&&typeof t.handler=="function"&&T.includes(o.target.nodeName.toUpperCase())===!1&&(o.qClonedBy===void 0||o.qClonedBy.indexOf(t.uid)===-1)}function B(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),z.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function b(o,t,n){const l=E(o);let e,r=l.left-t.event.x,i=l.top-t.event.y,a=Math.abs(r),s=Math.abs(i);const u=t.direction;u.horizontal===!0&&u.vertical!==!0?e=r<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=i<0?"up":"down":u.up===!0&&i<0?(e="up",a>s&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.down===!0&&i>0?(e="down",a>s&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.left===!0&&r<0?(e="left",a<s&&(u.up===!0&&i<0?e="up":u.down===!0&&i>0&&(e="down"))):u.right===!0&&r>0&&(e="right",a<s&&(u.up===!0&&i<0?e="up":u.down===!0&&i>0&&(e="down")));let v=!1;if(e===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};e=t.event.lastDir,v=!0,e==="left"||e==="right"?(l.left-=r,a=0,r=0):(l.top-=i,s=0,i=0)}return{synthetic:v,payload:{evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:l,direction:e,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:a,y:s},offset:{x:r,y:i},delta:{x:l.left-t.event.lastX,y:l.top-t.event.lastY}}}}let Y=0;var N=_({name:"touch-pan",beforeMount(o,{value:t,modifiers:n}){if(n.mouse!==!0&&m.has.touch!==!0)return;function l(r,i){n.mouse===!0&&i===!0?X(r):(n.stop===!0&&g(r),n.prevent===!0&&k(r))}const e={uid:"qvtp_"+Y++,handler:t,modifiers:n,direction:A(n),noop:D,mouseStart(r){M(r,e)&&S(r)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(M(r,e)){const i=r.target;h(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,i){if(m.is.firefox===!0&&y(o,!0),e.lastEvt=r,i===!0||n.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&k(u),r.cancelBubble===!0&&g(u),Object.assign(u,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:u}}g(r)}const{left:a,top:s}=E(r);e.event={x:a,y:s,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:s}},move(r){if(e.event===void 0)return;const i=E(r),a=i.left-e.event.x,s=i.top-e.event.y;if(a===0&&s===0)return;e.lastEvt=r;const u=e.event.mouse===!0,v=()=>{l(r,u);let d;n.preserveCursor!==!0&&n.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),B(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),u===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{q(),p()},50):q()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(r,e.event.mouse);const{payload:d,synthetic:p}=b(r,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=p===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){v(),e.event.detected=!0,e.move(r);return}const c=Math.abs(a),f=Math.abs(s);c!==f&&(e.direction.horizontal===!0&&c>f||e.direction.vertical===!0&&c<f||e.direction.up===!0&&c<f&&s<0||e.direction.down===!0&&c<f&&s>0||e.direction.left===!0&&c>f&&a<0||e.direction.right===!0&&c>f&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,i){if(e.event!==void 0){if(C(e,"temp"),m.is.firefox===!0&&y(o,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(b(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=b(r===void 0?e.lastEvt:r,e,!0),s=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(o.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";h(e,"main",[[o,"mousedown","mouseStart",`passive${r}`]])}m.has.touch===!0&&h(e,"main",[[o,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,t){const n=o.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=A(t.modifiers))},beforeUnmount(o){const t=o.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),C(t,"main"),C(t,"temp"),m.is.firefox===!0&&y(o,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete o.__qtouchpan)}});function U(o,t,n){return n<=t?t:Math.min(n,Math.max(t,o))}function x(o,t,n){if(n<=t)return t;const l=n-t+1;let e=t+(o-t)%l;return e<t&&(e=l+e),e===0?0:e}export{N as T,j as a,U as b,x as n,R as u};
