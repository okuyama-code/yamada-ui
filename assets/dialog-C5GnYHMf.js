import{j as f,a as V,F as It}from"./jsx-runtime-5BUNAZ9W.js";import{u as Et}from"./index-l_LhqSw0.js";import{r as p,R as Nt}from"./index-4g5l5LRQ.js";import{c as Ie,a as St,u as Mt,R as At}from"./Combination-8oCz4vin.js";import{S as kt}from"./slide-Olt9M4RD.js";import{m as Ke}from"./motion-heeYkzTb.js";import{f as Bt}from"./fade-Bir3kWMp.js";import{f as b}from"./forward-ref-A-8Arhkk.js";import{aj as Tt,D as Lt,c as Ee,v as J,M as P,a as g,u as $,h as Xe,a1 as Ut,a2 as Wt,f as me}from"./factory-RgfxYELV.js";import{C as Ht}from"./close-button-5sZ9VOrD.js";import{u as Ne}from"./use-component-style-w5CKuE2B.js";import{o as Se}from"./theme-provider-3UPjg8SK.js";import{A as Gt}from"./index-eMn_GZVX.js";import{P as jt}from"./container-portal-tuyQ2qQu.js";import{_ as Rt,a as qt}from"./defineProperty-LCWoqsbB.js";import{_ as xe}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import{_ as Vt}from"./inheritsLoose-Y9jOMJLd.js";import{B as he}from"./button-Alg8QOdJ.js";import{s as te}from"./slide-fade-V6a0ZUeg.js";import{s as $t}from"./scale-fade-VKyRPcQ5.js";var _e="data-focus-lock",Ze="data-focus-lock-disabled",Yt="data-no-focus-lock",Kt="data-autofocus-inside",Xt="data-no-autofocus",pe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Je=Ie({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Qe=Ie(),Zt=Ie(),Jt=St({async:!0}),Qt=[],Me=p.forwardRef(function(t,r){var n,o=p.useState(),a=o[0],s=o[1],u=p.useRef(),c=p.useRef(!1),d=p.useRef(null),l=t.children,i=t.disabled,m=t.noFocusGuards,v=t.persistentFocus,h=t.crossFrame,y=t.autoFocus;t.allowTextSelection;var C=t.group,F=t.className,D=t.whiteList,x=t.hasPositiveIndices,N=t.shards,A=N===void 0?Qt:N,S=t.as,k=S===void 0?"div":S,E=t.lockProps,M=E===void 0?{}:E,B=t.sideCar,w=t.returnFocus,_=t.focusOptions,O=t.onActivation,U=t.onDeactivation,z=p.useState({}),le=z[0],de=p.useCallback(function(){d.current=d.current||document&&document.activeElement,u.current&&O&&O(u.current),c.current=!0},[O]),W=p.useCallback(function(){c.current=!1,U&&U(u.current)},[U]);p.useEffect(function(){i||(d.current=null)},[]);var H=p.useCallback(function(T){var K=d.current;if(K&&K.focus){var ve=typeof w=="function"?w(K):w;if(ve){var Ge=typeof ve=="object"?ve:void 0;d.current=null,T?Promise.resolve().then(function(){return K.focus(Ge)}):K.focus(Ge)}}},[w]),fe=p.useCallback(function(T){c.current&&Je.useMedium(T)},[]),ee=Qe.useMedium,_t=p.useCallback(function(T){u.current!==T&&(u.current=T,s(T))},[]),Ot=xe((n={},n[Ze]=i&&"disabled",n[_e]=C,n),M),He=m!==!0,Dt=He&&m!=="tail",Pt=Mt([r,_t]);return p.createElement(p.Fragment,null,He&&[p.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:i?-1:0,style:pe}),x?p.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:i?-1:1,style:pe}):null],!i&&p.createElement(B,{id:le,sideCar:Jt,observed:a,disabled:i,persistentFocus:v,crossFrame:h,autoFocus:y,whiteList:D,shards:A,onActivation:de,onDeactivation:W,returnFocus:H,focusOptions:_}),p.createElement(k,xe({ref:Pt},Ot,{className:F,onBlur:ee,onFocus:fe}),l),Dt&&p.createElement("div",{"data-focus-guard":!0,tabIndex:i?-1:0,style:pe}))});Me.propTypes={};Me.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const ze=Me;function zt(e,t){function r(n){return n.displayName||n.name||"Component"}return function(o){var a=[],s;function u(){s=e(a.map(function(d){return d.props})),t(s)}var c=function(d){Vt(l,d);function l(){return d.apply(this,arguments)||this}l.peek=function(){return s};var i=l.prototype;return i.componentDidMount=function(){a.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),u()},i.render=function(){return Nt.createElement(o,this.props)},l}(p.PureComponent);return Rt(c,"displayName","SideEffect("+r(o)+")"),c}}var I=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},oe=function(e){return Array.isArray(e)?e:[e]},et=function(e){return Array.isArray(e)?e[0]:e},er=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},tt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},rt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},tr=function(e,t){return!e||rt(e)||!er(e)&&t(tt(e))},nt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=tr(t,nt.bind(void 0,e));return e.set(t,n),n},rr=function(e,t){return e&&!rt(e)?ar(e)?t(tt(e)):!1:!0},ot=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=rr(t,ot.bind(void 0,e));return e.set(t,n),n},at=function(e){return e.dataset},nr=function(e){return e.tagName==="BUTTON"},st=function(e){return e.tagName==="INPUT"},ut=function(e){return st(e)&&e.type==="radio"},or=function(e){return!((st(e)||nr(e))&&(e.type==="hidden"||e.disabled))},ar=function(e){var t=e.getAttribute(Xt);return![!0,"true",""].includes(t)},Ae=function(e){var t;return!!(e&&(!((t=at(e))===null||t===void 0)&&t.focusGuard))},ae=function(e){return!Ae(e)},sr=function(e){return!!e},ur=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},it=function(e,t,r){return I(e).map(function(n,o){return{node:n,index:o,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(ur)},ir=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],ke=ir.join(","),cr="".concat(ke,", [data-focus-guard]"),ct=function(e,t){return I((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?cr:ke)?[n]:[],ct(n))},[])},lr=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ce([e.contentDocument.body],t):[e]},ce=function(e,t){return e.reduce(function(r,n){var o,a=ct(n,t),s=(o=[]).concat.apply(o,a.map(function(u){return lr(u,t)}));return r.concat(s,n.parentNode?I(n.parentNode.querySelectorAll(ke)).filter(function(u){return u===n}):[])},[])},dr=function(e){var t=e.querySelectorAll("[".concat(Kt,"]"));return I(t).map(function(r){return ce([r])}).reduce(function(r,n){return r.concat(n)},[])},Be=function(e,t){return I(e).filter(function(r){return nt(t,r)}).filter(function(r){return or(r)})},je=function(e,t){return t===void 0&&(t=new Map),I(e).filter(function(r){return ot(t,r)})},Oe=function(e,t,r){return it(Be(ce(e,r),t),!0,r)},Re=function(e,t){return it(Be(ce(e),t),!1)},fr=function(e,t){return Be(dr(e),t)},j=function(e,t){return e.shadowRoot?j(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:I(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var o=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return o?j(o,t):!1}return j(r,t)})},vr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var o=n+1;o<r;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(s,u){return!t.has(u)})},lt=function(e){return e.parentNode?lt(e.parentNode):e},Te=function(e){var t=oe(e);return t.filter(Boolean).reduce(function(r,n){var o=n.getAttribute(_e);return r.push.apply(r,o?vr(I(lt(n).querySelectorAll("[".concat(_e,'="').concat(o,'"]:not([').concat(Ze,'="disabled"])')))):[n]),r},[])},mr=function(e){try{return e()}catch{return}},X=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?X(t.shadowRoot):t instanceof HTMLIFrameElement&&mr(function(){return t.contentWindow.document})?X(t.contentWindow.document):t}},hr=function(e,t){return e===t},pr=function(e,t){return!!I(e.querySelectorAll("iframe")).some(function(r){return hr(r,t)})},dt=function(e,t){return t===void 0&&(t=X(et(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Te(e).some(function(r){return j(r,t)||pr(r,t)})},yr=function(e){e===void 0&&(e=document);var t=X(e);return t?I(e.querySelectorAll("[".concat(Yt,"]"))).some(function(r){return j(r,t)}):!1},br=function(e,t){return t.filter(ut).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Le=function(e,t){return ut(e)&&e.name?br(e,t):e},gr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Le(r,e))}),e.filter(function(r){return t.has(r)})},qe=function(e){return e[0]&&e.length>1?Le(e[0],e):e[0]},Ve=function(e,t){return e.length>1?e.indexOf(Le(e[t],e)):t},ft="NEW_FOCUS",Cr=function(e,t,r,n){var o=e.length,a=e[0],s=e[o-1],u=Ae(r);if(!(r&&e.indexOf(r)>=0)){var c=r!==void 0?t.indexOf(r):-1,d=n?t.indexOf(n):c,l=n?e.indexOf(n):-1,i=c-d,m=t.indexOf(a),v=t.indexOf(s),h=gr(t),y=r!==void 0?h.indexOf(r):-1,C=y-(n?h.indexOf(n):c),F=Ve(e,0),D=Ve(e,o-1);if(c===-1||l===-1)return ft;if(!i&&l>=0)return l;if(c<=m&&u&&Math.abs(i)>1)return D;if(c>=v&&u&&Math.abs(i)>1)return F;if(i&&Math.abs(C)>1)return l;if(c<=m)return D;if(c>v)return F;if(i)return Math.abs(i)>1?l:(o+l+i)%o}},wr=function(e){return function(t){var r,n=(r=at(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},Fr=function(e,t,r){var n=e.map(function(a){var s=a.node;return s}),o=je(n.filter(wr(r)));return o&&o.length?qe(o):qe(je(t))},De=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&De(e.parentNode.host||e.parentNode,t),t},ye=function(e,t){for(var r=De(e),n=De(t),o=0;o<r.length;o+=1){var a=r[o];if(n.indexOf(a)>=0)return a}return!1},vt=function(e,t,r){var n=oe(e),o=oe(t),a=n[0],s=!1;return o.filter(Boolean).forEach(function(u){s=ye(s||u,u)||s,r.filter(Boolean).forEach(function(c){var d=ye(a,c);d&&(!s||j(d,s)?s=d:s=ye(d,s))})}),s},xr=function(e,t){return e.reduce(function(r,n){return r.concat(fr(n,t))},[])},_r=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(sr)},Or=function(e,t){var r=X(oe(e).length>0?document:et(e).ownerDocument),n=Te(e).filter(ae),o=vt(r||e,e,n),a=new Map,s=Re(n,a),u=Oe(n,a).filter(function(v){var h=v.node;return ae(h)});if(!(!u[0]&&(u=s,!u[0]))){var c=Re([o],a).map(function(v){var h=v.node;return h}),d=_r(c,u),l=d.map(function(v){var h=v.node;return h}),i=Cr(l,c,r,t);if(i===ft){var m=Fr(s,l,xr(n,a));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return i===void 0?i:d[i]}},Dr=function(e){var t=Te(e).filter(ae),r=vt(e,e,t),n=new Map,o=Oe([r],n,!0),a=Oe(t,n).filter(function(s){var u=s.node;return ae(u)}).map(function(s){var u=s.node;return u});return o.map(function(s){var u=s.node,c=s.index;return{node:u,index:c,lockItem:a.indexOf(u)>=0,guard:Ae(u)}})},Pr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},be=0,ge=!1,mt=function(e,t,r){r===void 0&&(r={});var n=Or(e,t);if(!ge&&n){if(be>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ge=!0,setTimeout(function(){ge=!1},1);return}be++,Pr(n.node,r.focusOptions),be--}};function Ue(e){setTimeout(e,1)}var Ir=function(){return document&&document.activeElement===document.body},Er=function(){return Ir()||yr()},R=null,G=null,q=null,Z=!1,Nr=function(){return!0},Sr=function(t){return(R.whiteList||Nr)(t)},Mr=function(t,r){q={observerNode:t,portaledElement:r}},Ar=function(t){return q&&q.portaledElement===t};function $e(e,t,r,n){var o=null,a=e;do{var s=n[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=r)!==t);o&&(o.node.tabIndex=0)}var kr=function(t){return t&&"current"in t?t.current:t},Br=function(t){return t?!!Z:Z==="meanwhile"},Tr=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},Lr=function(t,r){return r.some(function(n){return Tr(t,n,n)})},se=function(){var t=!1;if(R){var r=R,n=r.observed,o=r.persistentFocus,a=r.autoFocus,s=r.shards,u=r.crossFrame,c=r.focusOptions,d=n||q&&q.portaledElement,l=document&&document.activeElement;if(d){var i=[d].concat(s.map(kr).filter(Boolean));if((!l||Sr(l))&&(o||Br(u)||!Er()||!G&&a)&&(d&&!(dt(i)||l&&Lr(l,i)||Ar(l))&&(document&&!G&&l&&!a?(l.blur&&l.blur(),document.body.focus()):(t=mt(i,G,{focusOptions:c}),q={})),Z=!1,G=document&&document.activeElement),document){var m=document&&document.activeElement,v=Dr(i),h=v.map(function(y){var C=y.node;return C}).indexOf(m);h>-1&&(v.filter(function(y){var C=y.guard,F=y.node;return C&&F.dataset.focusAutoGuard}).forEach(function(y){var C=y.node;return C.removeAttribute("tabIndex")}),$e(h,v.length,1,v),$e(h,-1,-1,v))}}}return t},ht=function(t){se()&&t&&(t.stopPropagation(),t.preventDefault())},We=function(){return Ue(se)},Ur=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Mr(n,r)},Wr=function(){return null},pt=function(){Z="just",Ue(function(){Z="meanwhile"})},Hr=function(){document.addEventListener("focusin",ht),document.addEventListener("focusout",We),window.addEventListener("blur",pt)},Gr=function(){document.removeEventListener("focusin",ht),document.removeEventListener("focusout",We),window.removeEventListener("blur",pt)};function jr(e){return e.filter(function(t){var r=t.disabled;return!r})}function Rr(e){var t=e.slice(-1)[0];t&&!R&&Hr();var r=R,n=r&&t&&t.id===r.id;R=t,r&&!n&&(r.onDeactivation(),e.filter(function(o){var a=o.id;return a===r.id}).length||r.returnFocus(!t)),t?(G=null,(!n||r.observed!==t.observed)&&t.onActivation(),se(),Ue(se)):(Gr(),G=null)}Je.assignSyncMedium(Ur);Qe.assignMedium(We);Zt.assignMedium(function(e){return e({moveFocusInside:mt,focusInside:dt})});const qr=zt(jr,Rr)(Wr);var yt=p.forwardRef(function(t,r){return p.createElement(ze,xe({sideCar:qr,ref:r},t))}),bt=ze.propTypes||{};bt.sideCar;qt(bt,["sideCar"]);yt.propTypes={};const Vr=yt,$r=Tt(Vr),Yr=({initialFocusRef:e,finalFocusRef:t,contentRef:r,restoreFocus:n,children:o,isDisabled:a,autoFocus:s,persistentFocus:u,lockFocusAcrossFrames:c})=>{const d=p.useCallback(()=>{e!=null&&e.current?e.current.focus():r!=null&&r.current&&Lt(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[e,r]),l=p.useCallback(()=>{var m;(m=t==null?void 0:t.current)==null||m.focus()},[t]);return f($r,{crossFrame:c,persistentFocus:u,autoFocus:s,disabled:a,onActivation:d,onDeactivation:l,returnFocus:n&&!t,children:o})},[Kr,Y]=Ee({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),Cn=b(({size:e,placement:t="right",...r},n)=>{const[o,a]=Ne("Drawer",{size:e,placement:t,...r}),{children:s,isOpen:u,onClose:c,onOverlayClick:d,onEsc:l,onCloseComplete:i,withCloseButton:m=!0,withOverlay:v=!0,allowPinchZoom:h,autoFocus:y,restoreFocus:C,initialFocusRef:F,finalFocusRef:D,blockScrollOnMount:x,closeOnOverlay:N,closeOnEsc:A,lockFocusAcrossFrames:S,duration:k={enter:.4,exit:.3},portalProps:E,...M}=Se(a),B=J(s),[w,..._]=P(B,Pe);return f(Kr,{value:o,children:V(Ct,{ref:n,isOpen:u,onClose:c,onOverlayClick:d,onEsc:l,onCloseComplete:i,withCloseButton:!1,withOverlay:!1,allowPinchZoom:h,autoFocus:y,restoreFocus:C,initialFocusRef:F,finalFocusRef:D,blockScrollOnMount:x,closeOnOverlay:N,closeOnEsc:A,lockFocusAcrossFrames:S,duration:k,portalProps:E,children:[w??(v?f(Pe,{}):null),f(gt,{withCloseButton:m,...M,placement:t,children:_})]})})}),gt=b(({className:e,children:t,placement:r,withCloseButton:n,...o},a)=>{const{isOpen:s,onClose:u,duration:c}=L(),d=Y(),l=J(t),[i,...m]=P(l,Ye),v={display:"flex",flexDirection:"column",width:"100%",outline:0,...d.container};return V(kt,{ref:a,className:g("ui-drawer",e),tabIndex:-1,isOpen:s,placement:r,duration:c,__css:v,...o,children:[i??(n&&u?f(Ye,{}):null),m]})}),Pe=b(({className:e,...t},r)=>{const o={...Y().overlay};return f(ue,{ref:r,className:g("ui-drawer__overlay",e),__css:o,...t})}),Ye=b(({className:e,...t},r)=>{const o={...Y().closeButton};return f(ie,{ref:r,className:g("ui-drawer__close-button",e),__css:o,...t})}),wn=b(({className:e,...t},r)=>{const o={...Y().header};return f(wt,{ref:r,className:g("ui-drawer__header",e),__css:o,...t})}),Fn=b(({className:e,...t},r)=>{const o={...Y().body};return f(Ft,{ref:r,className:g("ui-drawer__body",e),__css:o,...t})}),xn=b(({className:e,...t},r)=>{const o={...Y().footer};return f(xt,{ref:r,className:g("ui-drawer__footer",e),__css:o,...t})}),[Xr,L]=Ee({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),Ct=b(({size:e,...t},r)=>{const[n,o]=Ne("Modal",{size:e,...t}),{className:a,children:s,isOpen:u,onClose:c,onOverlayClick:d,onEsc:l,onCloseComplete:i,placement:m="center",outside:v="md",withCloseButton:h=!0,withOverlay:y=!0,allowPinchZoom:C=!1,scrollBehavior:F="inside",autoFocus:D,restoreFocus:x,initialFocusRef:N,finalFocusRef:A,blockScrollOnMount:S=!0,closeOnOverlay:k=!0,closeOnEsc:E=!0,lockFocusAcrossFrames:M=!0,animation:B="scale",duration:w,portalProps:_,...O}=Se(o),U=p.useCallback(ee=>{ee.key==="Escape"&&(ee.stopPropagation(),E&&(c==null||c()),l==null||l())},[E,c,l]),z=J(s),[le,...de]=P(z,ue,re,Pe);let[W]=P(z,gt);W&&(W=p.cloneElement(W,{onKeyDown:U}));const H=Et(m),fe={position:"fixed",top:0,left:0,zIndex:"jeice",w:"100vw",h:"100dvh",p:e!=="full"?v:void 0,display:"flex",justifyContent:H.includes("left")?"flex-start":H.includes("right")?"flex-end":"center",alignItems:H.includes("top")?"flex-start":H.includes("bottom")?"flex-end":"center"};return f(Xr,{value:{isOpen:u,onClose:c,onOverlayClick:d,withCloseButton:h,scrollBehavior:F,closeOnOverlay:k,animation:B,duration:w,styles:n},children:f(Gt,{onExitComplete:i,children:u?f(jt,{..._,children:f(Yr,{autoFocus:D,initialFocusRef:N,finalFocusRef:A,restoreFocus:x,lockFocusAcrossFrames:M,children:f(At,{allowPinchZoom:C,enabled:S,forwardProps:!0,children:V($.div,{__css:fe,children:[le??(y&&e!=="full"?f(ue,{}):null),W??f(Jr,{ref:r,className:a,onKeyDown:U,...O,children:de})]})})})}):null})})}),Zr=(e="scale",t)=>{switch(e){case"scale":return{...$t,custom:{scale:.95,reverse:!0,duration:t}};case"top":return{...te,custom:{offsetY:-16,reverse:!0,duration:t}};case"right":return{...te,custom:{offsetX:16,reverse:!0,duration:t}};case"left":return{...te,custom:{offsetX:-16,reverse:!0,duration:t}};case"bottom":return{...te,custom:{offsetY:16,reverse:!0,duration:t}}}},Jr=b(({className:e,children:t,__css:r,...n},o)=>{const{styles:a,scrollBehavior:s,withCloseButton:u,onClose:c,animation:d,duration:l}=L(),i=J(t),[m,...v]=P(i,ie,ne),h=d!=="none"?Zr(d,l):{},y={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:s==="inside"?"hidden":"auto",outline:0,...r||a.container};return V($.section,{as:Ke.section,ref:o,className:g("ui-modal",e),tabIndex:-1,__css:y,...h,...n,children:[m??(u&&c?f(ie,{}):null),v]})}),ue=b(({className:e,__css:t,onClick:r,...n},o)=>{const{styles:a,closeOnOverlay:s,onOverlayClick:u,onClose:c,animation:d,duration:l}=L(),i={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...t||a.overlay},m=d!=="none"?Bt:{};return f($.div,{as:Ke.div,ref:o,className:g("ui-modal__overlay",e),custom:{duration:l},__css:i,onClick:Xe(r,u,v=>{v.stopPropagation(),s&&(c==null||c())}),...m,...n})}),ie=b(({onClick:e,__css:t,...r},n)=>{const{styles:o,onClose:a}=L(),s={position:"absolute",...t||o.closeButton};return f(Ht,{ref:n,className:g("ui-modal__close-button"),__css:s,onClick:Xe(e,u=>{u.stopPropagation(),a==null||a()}),...r})}),wt=b(({className:e,__css:t,...r},n)=>{const{styles:o}=L(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...t||o.header};return f($.header,{ref:n,className:g("ui-modal__header",e),__css:a,...r})}),Ft=b(({className:e,__css:t,...r},n)=>{const{styles:o,scrollBehavior:a}=L(),s={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...t||o.body};return f($.main,{ref:n,className:g("ui-modal__body",e),__css:s,...r})}),xt=b(({className:e,__css:t,...r},n)=>{const{styles:o}=L(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...t||o.footer};return f($.footer,{ref:n,className:g("ui-modal__footer",e),__css:a,...r})}),[Qr,Q]=Ee({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),_n=b(({size:e,...t},r)=>{const[n,o]=Ne("Dialog",{size:e,...t}),{className:a,children:s,withOverlay:u=!0,withCloseButton:c=!0,header:d,footer:l,cancel:i,other:m,success:v,onClose:h,onCancel:y,onOther:C,onSuccess:F,...D}=Se(o),x=J(s),[N]=P(x,re),[A]=P(x,ne),[S]=P(x,Ce),[k]=P(x,we),[E]=P(x,Fe),M=Ut(x)?s:Wt(x,re,ne,Ce,we,Fe),B={...n.container},w=me(i)?{children:i}:i,_=me(m)?{children:m}:m,O=me(v)?{children:v}:v;return w&&!w.variant&&(w.variant="ghost"),_&&!_.colorScheme&&(_.colorScheme="secondary"),O&&!O.colorScheme&&(O.colorScheme="primary"),f(Qr,{value:n,children:V(Ct,{ref:r,className:g("ui-dialog",a),__css:B,size:e,onClose:h,withOverlay:!1,withCloseButton:!1,...D,children:[N??(u&&e!=="full"?f(re,{}):null),A??(c&&h?f(ne,{}):null),S??(d?f(Ce,{children:d}):null),k??(M?f(we,{children:M}):null),E??(l||w||_||O?f(Fe,{children:l??V(It,{children:[w?f(he,{onClick:()=>y==null?void 0:y(h),...w}):null,_?f(he,{onClick:()=>C==null?void 0:C(h),..._}):null,O?f(he,{onClick:()=>F==null?void 0:F(h),...O}):null]})}):null)]})})}),re=b(({className:e,...t},r)=>{const o={...Q().overlay};return f(ue,{ref:r,className:g("ui-dialog__overlay",e),__css:o,...t})}),ne=b(({className:e,...t},r)=>{const o={...Q().closeButton};return f(ie,{ref:r,className:g("ui-dialog__close-button",e),__css:o,...t})}),Ce=b(({className:e,...t},r)=>{const o={...Q().header};return f(wt,{ref:r,className:g("ui-dialog__header",e),__css:o,...t})}),we=b(({className:e,...t},r)=>{const o={...Q().body};return f(Ft,{ref:r,className:g("ui-dialog__body",e),__css:o,...t})}),Fe=b(({className:e,...t},r)=>{const o={...Q().footer};return f(xt,{ref:r,className:g("ui-dialog__footer",e),__css:o,...t})});export{_n as D,Ct as M,Ce as a,we as b,Fe as c,ne as d,re as e,Cn as f,wn as g,Fn as h,xn as i,Ye as j,Pe as k,wt as l,Ft as m,xt as n,ie as o,ue as p};
