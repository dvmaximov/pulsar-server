import{c as A,d as u,h as k,e as ee,r as S,i as qe,o as j,f as U,n as ze,g as Y,j as R,l as de,k as he,m as Q,p as te,w as y,q as Ue,s as Ke,t as pe,u as xe,v as Ge,x as J,y as Je,z as Xe,A as _e,_ as Be,B as fe,C as N,D as Z,E as _,F as x,Q as Ye,G as Ze,H as ve,I as ke,J as et,K as tt,L as at,M as nt,N as ot,O as lt,P as it}from"./index.15b9951e.js";import{Q as ut}from"./QList.21d24a21.js";import{u as rt,a as st,b as ct,c as dt,d as ft,e as vt,g as mt,f as ht,h as gt,i as se}from"./use-timeout.0e8e4d2e.js";import{u as bt,a as yt}from"./use-dark.26ee888f.js";import{T as ce}from"./TouchPan.19affcf3.js";import{b as X,Q as Se,a as Ce,c as wt}from"./QItem.5935a0e0.js";import{u as pt,a as kt}from"./socket.store.3597d18b.js";var St=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const n=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:n.value},ee(v.default))}}),Ct=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const n=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:n.value,role:"toolbar"},ee(v.default))}});function Lt(){const e=S(!qe.value);return e.value===!1&&j(()=>{e.value=!0}),e}const Oe=typeof ResizeObserver!="undefined",Le=Oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var me=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let n=null,o,l={width:-1,height:-1};function r(c){c===!0||e.debounce===0||e.debounce==="0"?m():n===null&&(n=setTimeout(m,e.debounce))}function m(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:c,offsetHeight:d}=o;(c!==l.width||d!==l.height)&&(l={width:c,height:d},v("resize",l))}}const{proxy:w}=R();if(Oe===!0){let c;const d=a=>{o=w.$el.parentNode,o?(c=new ResizeObserver(r),c.observe(o),m()):a!==!0&&Y(()=>{d(!0)})};return j(()=>{d()}),U(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),ze}else{let a=function(){n!==null&&(clearTimeout(n),n=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",r,de.passive),d=void 0)},$=function(){a(),o&&o.contentDocument&&(d=o.contentDocument.defaultView,d.addEventListener("resize",r,de.passive),m())};const c=Lt();let d;return j(()=>{Y(()=>{o=w.$el,o&&$()})}),U(a),w.trigger=r,()=>{if(c.value===!0)return k("object",{style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:$})}}}}),$t=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:n}){const{proxy:{$q:o}}=R(),l=he(te,Q);if(l===Q)return console.error("QHeader needs to be child of QLayout"),Q;const r=S(parseInt(e.heightHint,10)),m=S(!0),w=u(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||o.platform.is.ios&&l.isContainer.value===!0),c=u(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return m.value===!0?r.value:0;const i=r.value-l.scroll.value.position;return i>0?i:0}),d=u(()=>e.modelValue!==!0||w.value===!0&&m.value!==!0),a=u(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),$=u(()=>"q-header q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=u(()=>{const i=l.rows.value.top,T={};return i[0]==="l"&&l.left.space===!0&&(T[o.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),i[2]==="r"&&l.right.space===!0&&(T[o.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),T});function h(i,T){l.update("header",i,T)}function g(i,T){i.value!==T&&(i.value=T)}function O({height:i}){g(r,i),h("size",i)}function L(i){a.value===!0&&g(m,!0),n("focusin",i)}y(()=>e.modelValue,i=>{h("space",i),g(m,!0),l.animate()}),y(c,i=>{h("offset",i)}),y(()=>e.reveal,i=>{i===!1&&g(m,e.modelValue)}),y(m,i=>{l.animate(),n("reveal",i)}),y(l.scroll,i=>{e.reveal===!0&&g(m,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const b={};return l.instances.header=b,e.modelValue===!0&&h("size",r.value),h("space",e.modelValue),h("offset",c.value),U(()=>{l.instances.header===b&&(l.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const i=Ue(v.default,[]);return e.elevated===!0&&i.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(k(me,{debounce:0,onResize:O})),k("header",{class:$.value,style:C.value,onFocusin:L},i)}}});const $e=150;var Tt=A({name:"QDrawer",inheritAttrs:!1,props:{...rt,...bt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"onLayout","miniState"],setup(e,{slots:v,emit:n,attrs:o}){const l=R(),{proxy:{$q:r}}=l,m=yt(e,r),{preventBodyScroll:w}=vt(),{registerTimeout:c,removeTimeout:d}=ct(),a=he(te,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let $,C=null,h;const g=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),O=u(()=>e.mini===!0&&g.value!==!0),L=u(()=>O.value===!0?e.miniWidth:e.width),b=S(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),i=u(()=>e.persistent!==!0&&(g.value===!0||De.value===!0));function T(t,s){if(E(),t!==!1&&a.animate(),B(0),g.value===!0){const q=a.instances[K.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),P(1),a.isContainer.value!==!0&&w(!0)}else P(0),t!==!1&&ie(!1);c(()=>{t!==!1&&ie(!0),s!==!0&&n("show",t)},$e)}function f(t,s){W(),t!==!1&&a.animate(),P(0),B(F.value*L.value),ue(),s!==!0?c(()=>{n("hide",t)},$e):d()}const{show:p,hide:z}=dt({showing:b,hideOnRouteChange:i,handleShow:T,handleHide:f}),{addToHistory:E,removeFromHistory:W}=ft(b,z,i),V={belowBreakpoint:g,hide:z},D=u(()=>e.side==="right"),F=u(()=>(r.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),ge=S(0),H=S(!1),ae=S(!1),be=S(L.value*F.value),K=u(()=>D.value===!0?"left":"right"),ne=u(()=>b.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),oe=u(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(D.value?"R":"L")>-1||r.platform.is.ios===!0&&a.isContainer.value===!0),I=u(()=>e.overlay===!1&&b.value===!0&&g.value===!1),De=u(()=>e.overlay===!0&&b.value===!0&&g.value===!1),Qe=u(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&H.value===!1?" hidden":"")),Pe=u(()=>({backgroundColor:`rgba(0,0,0,${ge.value*.4})`})),ye=u(()=>D.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Me=u(()=>D.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ae=u(()=>{const t={};return a.header.space===!0&&ye.value===!1&&(oe.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Me.value===!1&&(oe.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Ee=u(()=>{const t={width:`${L.value}px`,transform:`translateX(${be.value}px)`};return g.value===!0?t:Object.assign(t,Ae.value)}),Ve=u(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Fe=u(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(m.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(oe.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ye.value===!0?" q-drawer--top-padding":""))),He=u(()=>{const t=r.lang.rtl===!0?e.side:K.value;return[[ce,Ne,void 0,{[t]:!0,mouse:!0}]]}),Re=u(()=>{const t=r.lang.rtl===!0?K.value:e.side;return[[ce,we,void 0,{[t]:!0,mouse:!0}]]}),We=u(()=>{const t=r.lang.rtl===!0?K.value:e.side;return[[ce,we,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function le(){je(g,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}y(g,t=>{t===!0?($=b.value,b.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&$!==!1&&(b.value===!0?(B(0),P(0),ue()):p(!1))}),y(()=>e.side,(t,s)=>{a.instances[s]===V&&(a.instances[s]=void 0,a[s].space=!1,a[s].offset=0),a.instances[t]=V,a[t].size=L.value,a[t].space=I.value,a[t].offset=ne.value}),y(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&le()}),y(()=>e.behavior+e.breakpoint,le),y(a.isContainer,t=>{b.value===!0&&w(t!==!0),t===!0&&le()}),y(a.scrollbarWidth,()=>{B(b.value===!0?0:void 0)}),y(ne,t=>{M("offset",t)}),y(I,t=>{n("onLayout",t),M("space",t)}),y(D,()=>{B()}),y(L,t=>{B(),re(e.miniToOverlay,t)}),y(()=>e.miniToOverlay,t=>{re(t,L.value)}),y(()=>r.lang.rtl,()=>{B()}),y(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ie(),a.animate())}),y(O,t=>{n("miniState",t)});function B(t){t===void 0?Y(()=>{t=b.value===!0?0:L.value,B(F.value*t)}):(a.isContainer.value===!0&&D.value===!0&&(g.value===!0||Math.abs(t)===L.value)&&(t+=F.value*a.scrollbarWidth.value),be.value=t)}function P(t){ge.value=t}function ie(t){const s=t===!0?"remove":a.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Ie(){C!==null&&clearTimeout(C),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,C=setTimeout(()=>{C=null,ae.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(t){if(b.value!==!1)return;const s=L.value,q=X(t.distance.x,0,s);if(t.isFinal===!0){q>=Math.min(75,s)===!0?p():(a.animate(),P(0),B(F.value*s)),H.value=!1;return}B((r.lang.rtl===!0?D.value!==!0:D.value)?Math.max(s-q,0):Math.min(0,q-s)),P(X(q/s,0,1)),t.isFirst===!0&&(H.value=!0)}function we(t){if(b.value!==!0)return;const s=L.value,q=t.direction===e.side,G=(r.lang.rtl===!0?q!==!0:q)?X(t.distance.x,0,s):0;if(t.isFinal===!0){Math.abs(G)<Math.min(75,s)===!0?(a.animate(),P(1),B(0)):z(),H.value=!1;return}B(F.value*G),P(X(1-G/s,0,1)),t.isFirst===!0&&(H.value=!0)}function ue(){w(!1),ie(!0)}function M(t,s){a.update(e.side,t,s)}function je(t,s){t.value!==s&&(t.value=s)}function re(t,s){M("size",t===!0?e.miniWidth:s)}return a.instances[e.side]=V,re(e.miniToOverlay,L.value),M("space",I.value),M("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),j(()=>{n("onLayout",I.value),n("miniState",O.value),$=e.showIfAbove===!0;const t=()=>{(b.value===!0?T:f)(!1,!0)};if(a.totalWidth.value!==0){Y(t);return}h=y(a.totalWidth,()=>{h(),h=void 0,b.value===!1&&e.showIfAbove===!0&&g.value===!1?p(!1):t()})}),U(()=>{h!==void 0&&h(),C!==null&&(clearTimeout(C),C=null),b.value===!0&&ue(),a.instances[e.side]===V&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const t=[];g.value===!0&&(e.noSwipeOpen===!1&&t.push(Ke(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),He.value)),t.push(pe("div",{ref:"backdrop",class:Qe.value,style:Pe.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>We.value)));const s=O.value===!0&&v.mini!==void 0,q=[k("div",{...o,key:""+s,class:[Ve.value,o.class]},s===!0?v.mini():ee(v.default))];return e.elevated===!0&&b.value===!0&&q.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(pe("aside",{ref:"content",class:Fe.value,style:Ee.value},q,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Re.value)),k("div",{class:"q-drawer-container"},t)}}}),qt=A({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:n}}=R(),o=he(te,Q);if(o===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;xe(Ge,!0);const l=u(()=>{const r={};return o.header.space===!0&&(r.paddingTop=`${o.header.size}px`),o.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(r.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),r});return()=>k("div",{class:"q-page-container",style:l.value},ee(v.default))}});const{passive:Te}=de,zt=["both","horizontal","vertical"];var xt=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>zt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,l,r;y(()=>e.scrollTarget,()=>{c(),w()});function m(){o!==null&&o();const $=Math.max(0,ht(l)),C=gt(l),h={top:$-n.position.top,left:C-n.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const g=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:$,left:C},n.directionChanged=n.direction!==g,n.delta=h,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),v("scroll",{...n})}function w(){l=mt(r,e.scrollTarget),l.addEventListener("scroll",d,Te),d(!0)}function c(){l!==void 0&&(l.removeEventListener("scroll",d,Te),l=void 0)}function d($){if($===!0||e.debounce===0||e.debounce==="0")m();else if(o===null){const[C,h]=e.debounce?[setTimeout(m,e.debounce),clearTimeout]:[requestAnimationFrame(m),cancelAnimationFrame];o=()=>{h(C),o=null}}}const{proxy:a}=R();return y(()=>a.$q.lang.rtl,m),j(()=>{r=a.$el.parentNode,w()}),U(()=>{o!==null&&o(),c()}),Object.assign(a,{trigger:d,getPosition:()=>n}),ze}}),_t=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:n}){const{proxy:{$q:o}}=R(),l=S(null),r=S(o.screen.height),m=S(e.container===!0?0:o.screen.width),w=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),d=S(qe.value===!0?0:se()),a=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=u(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),C=u(()=>d.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),h=u(()=>d.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function g(f){if(e.container===!0||document.qScrollPrevented!==!0){const p={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};w.value=p,e.onScroll!==void 0&&n("scroll",p)}}function O(f){const{height:p,width:z}=f;let E=!1;r.value!==p&&(E=!0,r.value=p,e.onScrollHeight!==void 0&&n("scrollHeight",p),b()),m.value!==z&&(E=!0,m.value=z),E===!0&&e.onResize!==void 0&&n("resize",f)}function L({height:f}){c.value!==f&&(c.value=f,b())}function b(){if(e.container===!0){const f=r.value>c.value?se():0;d.value!==f&&(d.value=f)}}let i=null;const T={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:l,height:r,containerHeight:c,scrollbarWidth:d,totalWidth:u(()=>m.value+d.value),rows:u(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:w,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(f,p,z){T[f][p]=z}};if(xe(te,T),se()>0){let z=function(){f=null,p.classList.remove("hide-scrollbar")},E=function(){if(f===null){if(p.scrollHeight>o.screen.height)return;p.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(z,300)},W=function(V){f!==null&&V==="remove"&&(clearTimeout(f),z()),window[`${V}EventListener`]("resize",E)},f=null;const p=document.body;y(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),Je(()=>{W("remove")})}return()=>{const f=Xe(v.default,[k(xt,{onScroll:g}),k(me,{onResize:O})]),p=k("div",{class:a.value,style:$.value,ref:e.container===!0?void 0:l,tabindex:-1},f);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:l},[k(me,{onResize:L}),k("div",{class:"absolute-full",style:C.value},[k("div",{class:"scroll",style:h.value},[p])])]):p}}});const Bt=_e({name:"AppLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(){return{hover:S(!1)}}});function Ot(e,v,n,o,l,r){const m=fe("router-link");return N(),Z(m,{to:e.link,class:"link"},{default:_(()=>[x(wt,{class:et({"link-hover":e.hover}),onMouseover:v[0]||(v[0]=w=>e.hover=!0),onMouseleave:v[1]||(v[1]=w=>e.hover=!1)},{default:_(()=>[e.icon?(N(),Z(Se,{key:0,avatar:"",class:"text-info"},{default:_(()=>[x(Ye,{name:e.icon},null,8,["name"])]),_:1})):Ze("",!0),x(Se,null,{default:_(()=>[x(Ce,null,{default:_(()=>[ve(ke(e.title),1)]),_:1}),x(Ce,{caption:""},{default:_(()=>[ve(ke(e.caption),1)]),_:1})]),_:1})]),_:1},8,["class"])]),_:1},8,["to"])}var Dt=Be(Bt,[["render",Ot],["__scopeId","data-v-55c6a2d0"]]);const Qt=[{title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",caption:"\u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439",icon:"home",link:"/"},{title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",caption:"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",icon:"settings",link:"/settings"},{title:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",caption:"\u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C",icon:"work",link:"/programs"},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",caption:"\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C",icon:"category",link:"/categories"}],Pt=_e({name:"MainLayout",components:{AppLink:Dt},setup(){const e=S(!0),v=pt(),n=kt();v.connect().then(async()=>{await n.getWorkstations()});const{socketConnected:o}=tt(v);return v.connect(),{essentialLinks:Qt,leftDrawerOpen:e,socketConnected:o,toggleLeftDrawer(){e.value=!e.value}}}});function Mt(e,v,n,o,l,r){const m=fe("AppLink"),w=fe("router-view");return N(),Z(_t,{view:"lHh Lpr lFf"},{default:_(()=>[x($t,{elevated:""},{default:_(()=>[x(Ct,null,{default:_(()=>[x(at,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),x(St,null,{default:_(()=>[ve(" Pulsar Server ")]),_:1})]),_:1})]),_:1}),x(Tt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":v[0]||(v[0]=c=>e.leftDrawerOpen=c),bordered:""},{default:_(()=>[x(ut,{class:"q-mt-lg"},{default:_(()=>[(N(!0),nt(lt,null,ot(e.essentialLinks,c=>(N(),Z(m,it({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),x(qt,null,{default:_(()=>[x(w)]),_:1})]),_:1})}var Nt=Be(Pt,[["render",Mt]]);export{Nt as default};