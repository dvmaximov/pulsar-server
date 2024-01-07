import{c as A,d as s,h as o,e as W,j as Q,q as Ct,Q as Re,r as j,w as M,aA as Ue,o as Ke,ao as kt,a0 as Pt,f as We,l as Ee,z as pe,aB as Ge,aC as Je,aH as z,Z as je,V as xt,U as Ae,aI as xe,aJ as Qe,aK as Rt,g as Xe,aL as pt,am as X,L as K,A as Bt,ai as Tt,_ as Vt,C as Ot,D as $t,E as ue,F as U,aM as Ft,af as ke,I as Ie}from"./index.df10e98b.js";import{Q as Dt}from"./QSeparator.8fa89e8e.js";import{Q as Lt}from"./QList.552a34e1.js";import{u as de,a as ve}from"./use-dark.4b9f6681.js";import{u as Mt,a as Et,c as Ze,b as jt}from"./QSelect.4b2e4248.js";import{g as At}from"./use-timeout.8f187d26.js";import{f as Qt,j as It}from"./QInput.50e8e8ea.js";import{a as Nt,Q as Ht}from"./QCard.0b87b1f9.js";import{Q as zt}from"./QCardActions.84632647.js";import{Q as Ut}from"./QDialog.d36aee92.js";var Ql=A({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=Q(),c=s(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:c.value},W(a.default));const r=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return o("td",{class:c.value+v.__tdClass(i),style:v.__tdStyle(i)},W(a.default))}}}),Kt=A({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const c=Q(),{proxy:{$q:r}}=c,v=i=>{l("click",i)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},W(a.default));let i,d;const f=c.vnode.key;if(f){if(i=e.props.colsMap[f],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";d=Ct(a.default,[]),d[n](o(Re,{class:i.__iconClass,name:r.iconSet.table.arrowUp}))}else d=W(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),v(n)}};return o("th",m,d)}}});const Wt=["horizontal","vertical","cell","none"];var Gt=A({name:"QMarkupTable",props:{...de,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Wt.includes(e)}},setup(e,{slots:a}){const l=Q(),c=ve(e,l.proxy.$q),r=s(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:r.value},[o("table",{class:"q-table"},W(a.default))])}});function Ye(e,a){return o("div",e,[o("table",{class:"q-table"},a)])}const Jt={list:Lt,table:Gt},Xt=["list","table","__qtable"];var Zt=A({name:"QVirtualScroll",props:{...Mt,type:{type:String,default:"list",validator:e=>Xt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let c;const r=j(null),v=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:d,padVirtualScroll:f,onVirtualScrollEvt:m}=Et({virtualScrollLength:v,getVirtualScrollTarget:w,getVirtualScrollEl:C}),n=s(()=>{if(v.value===0)return[];const T=(O,x)=>({index:i.value.from+x,item:O});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(T):e.itemsFn(i.value.from,i.value.to-i.value.from).map(T)}),b=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(v,()=>{d()}),M(()=>e.scrollTarget,()=>{h(),y()});function C(){return r.value.$el||r.value}function w(){return c}function y(){c=At(C(),e.scrollTarget),c.addEventListener("scroll",m,Ee.passive)}function h(){c!==void 0&&(c.removeEventListener("scroll",m,Ee.passive),c=void 0)}function B(){let T=f(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(T=a.before().concat(T)),pe(a.after,T)}return Ue(()=>{d()}),Ke(()=>{y()}),kt(()=>{y()}),Pt(()=>{h()}),We(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ye({ref:r,class:"q-table__middle "+b.value},B()):o(Jt[e.type],{...l,ref:r,class:[l.class,b.value],...q.value},B)}}});const Yt={xs:2,sm:4,md:6,lg:10,xl:14};function Ne(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var el=A({name:"QLinearProgress",props:{...de,...Ge,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=Q(),c=ve(e,l.$q),r=Je(e,Yt),v=s(()=>e.indeterminate===!0||e.query===!0),i=s(()=>e.reverse!==e.query),d=s(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=s(()=>Ne(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=s(()=>Ne(v.value===!0?1:e.value,i.value,l.$q)),C=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),w=s(()=>({width:`${e.value*100}%`})),y=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[o("div",{class:b.value,style:m.value}),o("div",{class:C.value,style:q.value})];return e.stripe===!0&&v.value===!1&&h.push(o("div",{class:y.value,style:w.value})),o("div",{class:f.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},pe(a.default,h))}}});function tl(e,a){const l=j(null),c=s(()=>e.disable===!0?null:o("span",{ref:l,class:"no-outline",tabindex:-1}));function r(v){const i=a.value;v!==void 0&&v.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(v===void 0||i!==null&&i.contains(v.target)===!0)&&l.value.focus()}return{refocusTargetEl:c,refocusTarget:r}}var ll={xs:30,sm:35,md:40,lg:50,xl:60};const al={...de,...Ge,...Qt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},nl=["update:modelValue"];function ol(e,a){const{props:l,slots:c,emit:r,proxy:v}=Q(),{$q:i}=v,d=ve(l,i),f=j(null),{refocusTargetEl:m,refocusTarget:n}=tl(l,f),b=Je(l,ll),q=s(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=s(()=>{const k=z(l.val);return q.value===!0?l.modelValue.findIndex(F=>z(F)===k):-1}),w=s(()=>q.value===!0?C.value>-1:z(l.modelValue)===z(l.trueValue)),y=s(()=>q.value===!0?C.value===-1:z(l.modelValue)===z(l.falseValue)),h=s(()=>w.value===!1&&y.value===!1),B=s(()=>l.disable===!0?-1:l.tabindex||0),T=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(d.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),O=s(()=>{const k=w.value===!0?"truthy":y.value===!0?"falsy":"indet",F=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${F}`}),x=s(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":w.value,"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),k}),p=It(x),I=s(()=>{const k={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function G(k){k!==void 0&&(je(k),n(k)),l.disable!==!0&&r("update:modelValue",J(),k)}function J(){if(q.value===!0){if(w.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function Y(k){(k.keyCode===13||k.keyCode===32)&&je(k)}function $(k){(k.keyCode===13||k.keyCode===32)&&G(k)}const E=a(w,h);return Object.assign(v,{toggle:G}),()=>{const k=E();l.disable!==!0&&p(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const F=[o("div",{class:O.value,style:b.value,"aria-hidden":"true"},k)];m.value!==null&&F.push(m.value);const ee=l.label!==void 0?pe(c.default,[l.label]):W(c.default);return ee!==void 0&&F.push(o("div",{class:`q-${e}__label q-anchor--skip`},ee)),o("div",{ref:f,class:T.value,...I.value,onClick:G,onKeydown:Y,onKeyup:$},F)}}const rl=o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Pe=A({name:"QCheckbox",props:al,emits:nl,setup(e){function a(l,c){const r=s(()=>(l.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(Re,{class:"q-checkbox__icon",name:r.value})])]:[rl]}return ol("checkbox",a)}});let Z=0;const il={fullscreen:Boolean,noRouteFullscreenExit:Boolean},sl=["update:fullscreen","fullscreen"];function ul(){const e=Q(),{props:a,emit:l,proxy:c}=e;let r,v,i;const d=j(!1);xt(e)===!0&&M(()=>c.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),M(()=>a.fullscreen,b=>{d.value!==b&&f()}),M(d,b=>{l("update:fullscreen",b),l("fullscreen",b)});function f(){d.value===!0?n():m()}function m(){d.value!==!0&&(d.value=!0,i=c.$el.parentNode,i.replaceChild(v,c.$el),document.body.appendChild(c.$el),Z++,Z===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:n},Ae.add(r))}function n(){d.value===!0&&(r!==void 0&&(Ae.remove(r),r=void 0),i.replaceChild(c.$el,v),d.value=!1,Z=Math.max(0,Z-1),Z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Ue(()=>{v=document.createElement("span")}),Ke(()=>{a.fullscreen===!0&&m()}),We(n),Object.assign(c,{toggleFullscreen:f,setFullscreen:m,exitFullscreen:n}),{inFullscreen:d,toggleFullscreen:f}}function cl(e,a){return new Date(e)-new Date(a)}const dl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function vl(e,a,l,c){const r=s(()=>{const{sortBy:d}=a.value;return d&&l.value.find(f=>f.name===d)||null}),v=s(()=>e.sortMethod!==void 0?e.sortMethod:(d,f,m)=>{const n=l.value.find(C=>C.name===f);if(n===void 0||n.field===void 0)return d;const b=m===!0?-1:1,q=typeof n.field=="function"?C=>n.field(C):C=>C[n.field];return d.sort((C,w)=>{let y=q(C),h=q(w);return n.rawSort!==void 0?n.rawSort(y,h,C,w)*b:y==null?-1*b:h==null?1*b:n.sort!==void 0?n.sort(y,h,C,w)*b:xe(y)===!0&&xe(h)===!0?(y-h)*b:Qe(y)===!0&&Qe(h)===!0?cl(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(B=>(B+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(d){let f=e.columnSortOrder;if(Rt(d)===!0)d.sortOrder&&(f=d.sortOrder),d=d.name;else{const b=l.value.find(q=>q.name===d);b!==void 0&&b.sortOrder&&(f=b.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==d?(m=d,n=f==="da"):e.binaryStateSort===!0?n=!n:n===!0?f==="ad"?m=null:n=!1:f==="ad"?n=!0:m=null,c({sortBy:m,descending:n,page:1})}return{columnToSort:r,computedSortMethod:v,sort:i}}const fl={filter:[String,Object],filterMethod:Function};function gl(e,a){const l=s(()=>e.filterMethod!==void 0?e.filterMethod:(c,r,v,i)=>{const d=r?r.toLowerCase():"";return c.filter(f=>v.some(m=>{const n=i(m,f)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(d)!==-1}))});return M(()=>e.filter,()=>{Xe(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function bl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function He(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ml={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Sl(e,a){const{props:l,emit:c}=e,r=j(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),v=s(()=>{const n=l["onUpdate:pagination"]!==void 0?{...r.value,...l.pagination}:r.value;return He(n)}),i=s(()=>v.value.rowsNumber!==void 0);function d(n){f({pagination:n,filter:l.filter})}function f(n={}){Xe(()=>{c("request",{pagination:n.pagination||v.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,b){const q=He({...v.value,...n});if(bl(v.value,q)===!0){i.value===!0&&b===!0&&d(q);return}if(i.value===!0){d(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?c("update:pagination",q):r.value=q}return{innerPagination:r,computedPagination:v,isServerSide:i,requestServerInteraction:f,setPagination:m}}function hl(e,a,l,c,r,v){const{props:i,emit:d,proxy:{$q:f}}=e,m=s(()=>c.value===!0?l.value.rowsNumber||0:v.value),n=s(()=>{const{page:x,rowsPerPage:p}=l.value;return(x-1)*p}),b=s(()=>{const{page:x,rowsPerPage:p}=l.value;return x*p}),q=s(()=>l.value.page===1),C=s(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),w=s(()=>b.value===0?!0:l.value.page>=C.value),y=s(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(p=>({label:p===0?f.lang.table.allRows:""+p,value:p})));M(C,(x,p)=>{if(x===p)return;const I=l.value.page;x&&!I?r({page:1}):x<I&&r({page:x})});function h(){r({page:1})}function B(){const{page:x}=l.value;x>1&&r({page:x-1})}function T(){const{page:x,rowsPerPage:p}=l.value;b.value>0&&x*p<m.value&&r({page:x+1})}function O(){r({page:C.value})}return i["onUpdate:pagination"]!==void 0&&d("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:q,isLastPage:w,pagesNumber:C,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:B,nextPage:T,lastPage:O}}const yl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},_l=["update:selected","selection"];function wl(e,a,l,c){const r=s(()=>{const w={};return e.selected.map(c.value).forEach(y=>{w[y]=!0}),w}),v=s(()=>e.selection!=="none"),i=s(()=>e.selection==="single"),d=s(()=>e.selection==="multiple"),f=s(()=>l.value.length!==0&&l.value.every(w=>r.value[c.value(w)]===!0)),m=s(()=>f.value!==!0&&l.value.some(w=>r.value[c.value(w)]===!0)),n=s(()=>e.selected.length);function b(w){return r.value[w]===!0}function q(){a("update:selected",[])}function C(w,y,h,B){a("selection",{rows:y,added:h,keys:w,evt:B});const T=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter(O=>w.includes(c.value(O))===!1);a("update:selected",T)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:d,allRowsSelected:f,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:b,clearSelection:q,updateSelection:C}}function ze(e){return Array.isArray(e)?e.slice():[]}const ql={expanded:Array},Cl=["update:expanded"];function kl(e,a){const l=j(ze(e.expanded));M(()=>e.expanded,i=>{l.value=ze(i)});function c(i){return l.value.includes(i)}function r(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function v(i,d){const f=l.value.slice(),m=f.indexOf(i);d===!0?m===-1&&(f.push(i),r(f)):m!==-1&&(f.splice(m,1),r(f))}return{isRowExpanded:c,setExpanded:r,updateExpanded:v}}const Pl={visibleColumns:Array};function xl(e,a,l){const c=s(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(f=>({name:f,label:f.toUpperCase(),field:f,align:xe(d[f])?"right":"left",sortable:!0})):[]}),r=s(()=>{const{sortBy:d,descending:f}=a.value;return(e.visibleColumns!==void 0?c.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):c.value).map(n=>{const b=n.align||"right",q=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===d?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>q+" "+n.classes:C=>q+" "+n.classes(C):()=>q}})}),v=s(()=>{const d={};return r.value.forEach(f=>{d[f.name]=f}),d}),i=s(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(l.value===!0?1:0));return{colList:c,computedCols:r,computedColsMap:v,computedColspan:i}}const ce="q-table__bottom row items-center",et={};Ze.forEach(e=>{et[e]={}});var Il=A({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...et,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...de,...il,...Pl,...fl,...ml,...ql,...yl,...dl},emits:["request","virtualScroll",...sl,...Cl,..._l],setup(e,{slots:a,emit:l}){const c=Q(),{proxy:{$q:r}}=c,v=ve(e,r),{inFullscreen:i,toggleFullscreen:d}=ul(),f=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=j(null),n=j(null),b=s(()=>e.grid!==!0&&e.virtualScroll===!0),q=s(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),w=s(()=>C.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:B,requestServerInteraction:T,setPagination:O}=Sl(c,N),{computedFilterMethod:x}=gl(e,O),{isRowExpanded:p,setExpanded:I,updateExpanded:G}=kl(e,l),J=s(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:u,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,D.value,N)),at.value!==null&&(t=nt.value(e.rows===t?t.slice():t,u,g)),t}),Y=s(()=>J.value.length),$=s(()=>{let t=J.value;if(B.value===!0)return t;const{rowsPerPage:u}=h.value;return u!==0&&(le.value===0&&e.rows!==t?t.length>ae.value&&(t=t.slice(0,ae.value)):t=t.slice(le.value,ae.value)),t}),{hasSelectionMode:E,singleSelection:k,multipleSelection:F,allRowsSelected:ee,someRowsSelected:Be,rowsSelectedNumber:fe,isRowSelected:ge,clearSelection:tt,updateSelection:te}=wl(e,l,$,f),{colList:lt,computedCols:D,computedColsMap:Te,computedColspan:Ve}=xl(e,h,E),{columnToSort:at,computedSortMethod:nt,sort:be}=vl(e,h,lt,O),{firstRowIndex:le,lastRowIndex:ae,isFirstPage:me,isLastPage:Se,pagesNumber:ne,computedRowsPerPageOptions:ot,computedRowsNumber:oe,firstPage:he,prevPage:ye,nextPage:_e,lastPage:we}=hl(c,y,h,B,O,Y),rt=s(()=>$.value.length===0),it=s(()=>{const t={};return Ze.forEach(u=>{t[u]=e[u]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function st(){b.value===!0&&n.value.reset()}function ut(){if(e.grid===!0)return wt();const t=e.hideHeader!==!0?Le:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>$e(R.item,a.body,R.index)};if(g!==void 0){const R=o("tbody",g({cols:D.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>o("tbody",S({cols:D.value}))),o(Zt,{ref:n,class:e.tableClass,style:e.tableStyle,...it.value,scrollTarget:e.virtualScrollTarget,items:$.value,type:"__qtable",tableColspan:Ve.value,onVirtualScroll:dt},_)}const u=[vt()];return t!==null&&u.unshift(t()),Ye({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},u)}function ct(t,u){if(n.value!==null){n.value.scrollTo(t,u);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function dt(t){l("virtualScroll",t)}function Oe(){return[o(el,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function $e(t,u,g){const S=f.value(t),_=ge(S);if(u!==void 0)return u(Fe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=D.value.map(V=>{const ie=a[`body-cell-${V.name}`],se=ie!==void 0?ie:R;return se!==void 0?se(ft({key:S,row:t,pageIndex:g,col:V})):o("td",{class:V.__tdClass(t),style:V.__tdStyle(t)},N(V,t))});if(E.value===!0){const V=a["body-selection"],ie=V!==void 0?V(gt({key:S,row:t,pageIndex:g})):[o(Pe,{modelValue:_,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(se,qt)=>{te([S],[t],se,qt)}})];P.unshift(o("td",{class:"q-table--col-auto-width"},ie))}const L={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=V=>{l("RowClick",V,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=V=>{l("RowDblclick",V,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=V=>{l("RowContextmenu",V,t,g)}),o("tr",L,P)}function vt(){const t=a.body,u=a["top-row"],g=a["bottom-row"];let S=$.value.map((_,R)=>$e(_,t,R));return u!==void 0&&(S=u({cols:D.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:D.value}))),o("tbody",S)}function Fe(t){return qe(t),t.cols=t.cols.map(u=>X({...u},"value",()=>N(u,t.row))),t}function ft(t){return qe(t),X(t,"value",()=>N(t.col,t.row)),t}function gt(t){return qe(t),t}function qe(t){Object.assign(t,{cols:D.value,colsMap:Te.value,sort:be,rowIndex:le.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),E.value===!0&&X(t,"selected",()=>ge(t.key),(u,g)=>{te([t.key],[t.row],u,g)}),X(t,"expand",()=>p(t.key),u=>{G(t.key,u)})}function N(t,u){const g=typeof t.field=="function"?t.field(u):u[t.field];return t.format!==void 0?t.format(g,u):g}const H=s(()=>({pagination:h.value,pagesNumber:ne.value,isFirstPage:me.value,isLastPage:Se.value,firstPage:he,prevPage:ye,nextPage:_e,lastPage:we,inFullscreen:i.value,toggleFullscreen:d}));function bt(){const t=a.top,u=a["top-left"],g=a["top-right"],S=a["top-selection"],_=E.value===!0&&S!==void 0&&fe.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:R},[t(H.value)]);let P;if(_===!0?P=S(H.value).slice():(P=[],u!==void 0?P.push(o("div",{class:"q-table__control"},[u(H.value)])):e.title&&P.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(o("div",{class:"q-table__separator col"})),P.push(o("div",{class:"q-table__control"},[g(H.value)]))),P.length!==0)return o("div",{class:R},P)}const De=s(()=>Be.value===!0?null:ee.value);function Le(){const t=mt();return e.loading===!0&&a.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Ve.value},Oe())])),o("thead",t)}function mt(){const t=a.header,u=a["header-cell"];if(t!==void 0)return t(Ce({header:!0})).slice();const g=D.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:u,P=Ce({col:S});return R!==void 0?R(P):o(Kt,{key:S.name,props:P},()=>S.label)});if(k.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(F.value===!0){const S=a["header-selection"],_=S!==void 0?S(Ce({})):[o(Pe,{color:e.color,modelValue:De.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":Me})];g.unshift(o("th",{class:"q-table--col-auto-width"},_))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function Ce(t){return Object.assign(t,{cols:D.value,sort:be,colsMap:Te.value,color:e.color,dark:v.value,dense:e.dense}),F.value===!0&&X(t,"selected",()=>De.value,Me),t}function Me(t){Be.value===!0&&(t=!1),te($.value.map(f.value),$.value,t)}const re=s(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function St(){if(e.hideBottom===!0)return;if(rt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:r.iconSet.table.warning,filter:e.filter})]:[o(Re,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),g];return o("div",{class:ce+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return o("div",{class:ce},[t(H.value)]);const u=e.hideSelectedBanner!==!0&&E.value===!0&&fe.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(fe.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:ce+" justify-end"},yt(u));if(u.length!==0)return o("div",{class:ce},u)}function ht(t){O({page:1,rowsPerPage:t.value})}function yt(t){let u;const{rowsPerPage:g}=h.value,S=e.paginationLabel||r.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),R===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(jt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:ot.value,displayValue:g===0?r.lang.table.allRows:g,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ht})])),_!==void 0)u=_(H.value);else if(u=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(le.value+1,Math.min(ae.value,oe.value),oe.value):S(1,Y.value,oe.value)])],g!==0&&ne.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),ne.value>2&&u.push(o(K,{key:"pgFirst",...P,icon:re.value[0],disable:me.value,onClick:he})),u.push(o(K,{key:"pgPrev",...P,icon:re.value[1],disable:me.value,onClick:ye}),o(K,{key:"pgNext",...P,icon:re.value[2],disable:Se.value,onClick:_e})),ne.value>2&&u.push(o(K,{key:"pgLast",...P,icon:re.value[3],disable:Se.value,onClick:we}))}return t.push(o("div",{class:"q-table__control"},u)),t}function _t(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Le()])]:e.loading===!0&&a.loading===void 0?Oe():void 0;return o("div",{class:"q-table__middle"},t)}function wt(){const t=a.item!==void 0?a.item:u=>{const g=u.cols.map(_=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[_.label]),o("div",{class:"q-table__grid-item-value"},[_.value])]));if(E.value===!0){const _=a["body-selection"],R=_!==void 0?_(u):[o(Pe,{modelValue:u.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{te([u.key],[u.row],P,L)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},R),o(Dt,{dark:v.value}))}const S={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,u.row,u.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,u.row,u.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(u.selected===!0?" q-table__grid-item--selected":"")},[o("div",S,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},$.value.map((u,g)=>t(Fe({key:f.value(u),row:u,pageIndex:g}))))}return Object.assign(c.proxy,{requestServerInteraction:T,setPagination:O,firstPage:he,prevPage:ye,nextPage:_e,lastPage:we,isRowSelected:ge,clearSelection:tt,isRowExpanded:p,setExpanded:I,sort:be,resetVirtualScroll:st,scrollTo:ct,getCellValue:N}),pt(c.proxy,{filteredSortedRows:()=>J.value,computedRows:()=>$.value,computedRowsNumber:()=>oe.value}),()=>{const t=[bt()],u={ref:m,class:w.value};return e.grid===!0?t.push(_t()):Object.assign(u,{class:[u.class,e.cardClass],style:e.cardStyle}),t.push(ut(),St()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),o("div",u,t)}}});const Rl=Bt({name:"ConfirmDialog",props:{isShow:{type:Boolean,default:!1},message:{type:String,default:""},description:{type:String,default:""}},setup(e,a){return{showing:Tt(()=>e.isShow),sendOk:()=>{a.emit("ok")},sendCancel:()=>{a.emit("cancel")}}}}),pl={class:"q-ml-sm"},Bl={class:"q-ml-sm"};function Tl(e,a,l,c,r,v){return Ot(),$t(Ut,{modelValue:e.showing,"onUpdate:modelValue":a[0]||(a[0]=i=>e.showing=i),persistent:""},{default:ue(()=>[U(Ht,null,{default:ue(()=>[U(Nt,{class:"row items-center"},{default:ue(()=>[U(Ft,{icon:"delete",color:"primary","text-color":"white"}),ke("div",null,[ke("div",pl,Ie(e.description),1),ke("div",Bl,Ie(e.message),1)])]),_:1}),U(zt,{align:"right"},{default:ue(()=>[U(K,{flat:"",label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary",onClick:e.sendCancel},null,8,["onClick"]),U(K,{flat:"",label:"\u0414\u0430",color:"primary",onClick:e.sendOk},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Nl=Vt(Rl,[["render",Tl]]);export{Nl as C,Ql as Q,Il as a};
