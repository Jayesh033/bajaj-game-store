import{r as a,j as I}from"./index-BhdZ_x03.js";import{M as G,i as P,u as T,P as W,a as z,b as F,L as H}from"./proxy-RLRfWYYX.js";function E(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function D(...e){return t=>{let s=!1;const n=e.map(i=>{const o=E(i,t);return!s&&typeof o=="function"&&(s=!0),o});if(s)return()=>{for(let i=0;i<n.length;i++){const o=n[i];typeof o=="function"?o():E(e[i],null)}}}}function K(...e){return a.useCallback(D(...e),e)}class J extends a.Component{getSnapshotBeforeUpdate(t){const s=this.props.childRef.current;if(s&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=s.offsetParent,i=P(n)&&n.offsetWidth||0,o=P(n)&&n.offsetHeight||0,r=this.props.sizeRef.current;r.height=s.offsetHeight||0,r.width=s.offsetWidth||0,r.top=s.offsetTop,r.left=s.offsetLeft,r.right=i-r.width-r.left,r.bottom=o-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function X({children:e,isPresent:t,anchorX:s,anchorY:n,root:i,pop:o}){var l;const r=a.useId(),p=a.useRef(null),C=a.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=a.useContext(G),u=((l=e.props)==null?void 0:l.ref)??(e==null?void 0:e.ref),b=K(p,u);return a.useInsertionEffect(()=>{const{width:f,height:d,top:_,left:w,right:j,bottom:L}=C.current;if(t||o===!1||!p.current||!f||!d)return;const A=s==="left"?`left: ${w}`:`right: ${j}`,h=n==="bottom"?`bottom: ${L}`:`top: ${_}`;p.current.dataset.motionPopId=r;const g=document.createElement("style");y&&(g.nonce=y);const x=i??document.head;return x.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${d}px !important;
            ${A}px !important;
            ${h}px !important;
          }
        `),()=>{x.contains(g)&&x.removeChild(g)}},[t]),I.jsx(J,{isPresent:t,childRef:p,sizeRef:C,pop:o,children:o===!1?e:a.cloneElement(e,{ref:b})})}const Z=({children:e,initial:t,isPresent:s,onExitComplete:n,custom:i,presenceAffectsLayout:o,mode:r,anchorX:p,anchorY:C,root:y})=>{const u=T(V),b=a.useId();let l=!0,f=a.useMemo(()=>(l=!1,{id:b,initial:t,isPresent:s,custom:i,onExitComplete:d=>{u.set(d,!0);for(const _ of u.values())if(!_)return;n&&n()},register:d=>(u.set(d,!1),()=>u.delete(d))}),[s,u,n]);return o&&l&&(f={...f}),a.useMemo(()=>{u.forEach((d,_)=>u.set(_,!1))},[s]),a.useEffect(()=>{!s&&!u.size&&n&&n()},[s]),e=I.jsx(X,{pop:r==="popLayout",isPresent:s,anchorX:p,anchorY:C,root:y,children:e}),I.jsx(W.Provider,{value:f,children:e})};function V(){return new Map}const k=e=>e.key||"";function S(e){const t=[];return a.Children.forEach(e,s=>{a.isValidElement(s)&&t.push(s)}),t}const ie=({children:e,custom:t,initial:s=!0,onExitComplete:n,presenceAffectsLayout:i=!0,mode:o="sync",propagate:r=!1,anchorX:p="left",anchorY:C="top",root:y})=>{const[u,b]=z(r),l=a.useMemo(()=>S(e),[e]),f=r&&!u?[]:l.map(k),d=a.useRef(!0),_=a.useRef(l),w=T(()=>new Map),j=a.useRef(new Set),[L,A]=a.useState(l),[h,g]=a.useState(l);F(()=>{d.current=!1,_.current=l;for(let m=0;m<h.length;m++){const c=k(h[m]);f.includes(c)?(w.delete(c),j.current.delete(c)):w.get(c)!==!0&&w.set(c,!1)}},[h,f.length,f.join("-")]);const x=[];if(l!==L){let m=[...l];for(let c=0;c<h.length;c++){const R=h[c],$=k(R);f.includes($)||(m.splice(c,0,R),x.push(R))}return o==="wait"&&x.length&&(m=x),g(S(m)),A(l),null}const{forceRender:v}=a.useContext(H);return I.jsx(I.Fragment,{children:h.map(m=>{const c=k(m),R=r&&!u?!1:l===h||f.includes(c),$=()=>{if(j.current.has(c))return;if(j.current.add(c),w.has(c))w.set(c,!0);else return;let M=!0;w.forEach(B=>{B||(M=!1)}),M&&(v==null||v(),g(_.current),r&&(b==null||b()),n&&n())};return I.jsx(Z,{isPresent:R,initial:!d.current||s?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:y,onExitComplete:R?void 0:$,anchorX:p,anchorY:C,children:m},c)})})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(...e)=>e.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,n)=>n?n.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>{const t=q(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:r,...p},C)=>a.createElement("svg",{ref:C,...Q,width:t,height:t,stroke:e,strokeWidth:n?Number(s)*24/Number(t):s,className:U("lucide",i),...!o&&!ee(p)&&{"aria-hidden":"true"},...p},[...r.map(([y,u])=>a.createElement(y,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(e,t)=>{const s=a.forwardRef(({className:n,...i},o)=>a.createElement(te,{ref:o,iconNode:t,className:U(`lucide-${Y(N(e))}`,`lucide-${e}`,n),...i}));return s.displayName=N(e),s};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ae=O("check",se);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ce=O("x",ne),ue=async e=>{const t="https://bjuat.bajajlife.com/BalicLmsUtil/whatsappInhouse",s=new URLSearchParams(window.location.search),n=s.get("userId")||"",i=s.get("gameId")||"",o={cust_name:e.name||e.fullName||"",mobile_no:e.mobile_no||e.contact_number||"",dob:"",gender:"M",pincode:"",email_id:e.email_id||"",life_goal_category:"",investment_amount:"",product_id:"",p_source:"Marketing Assist",p_data_source:"GAMIFICATION",pasa_amount:"",product_name:"",pasa_product:"",associated_rider:"",customer_app_product:"",p_data_medium:" GAMIFICATION ",utmSource:"",userId:n,gameID:i,remarks:`Game: ${i}${e.score!=null?` | Score: ${e.score}`:""} | ${e.summary_dtls||"Retirement Sudoku Lead"}`,appointment_date:"",appointment_time:""};console.log("[API] Submitting lead to WhatsApp Inhouse API:",o);try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),p=await r.json().catch(()=>({}));return{success:r.ok,...p}}catch(r){return console.error("LMS Submission Error:",r),{success:!1,error:r.message}}},le=async(e,t)=>{const s="https://bjuat.bajajlife.com/BalicLmsUtil/updateLeadNew",n={leadNo:e,tpa_user_id:"",miscObj1:{stringval1:"",stringval2:t.name||t.firstName||"",stringval3:t.lastName||"",stringval4:t.date||"",stringval5:t.time||"",stringval6:t.remarks||"Slot Booking via Game",stringval7:"GAMIFICATION",stringval9:t.mobile||""}};try{const i=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),o=await i.json().catch(()=>({}));return{success:i.ok,...o}}catch(i){return console.error("updateLeadNew Submission Error:",i),{success:!1,error:i.message}}};export{ie as A,ae as C,ce as X,O as c,ue as s,le as u};
