import{Q as c,a as d}from"./QCard.68e529c7.js";import{Q as p}from"./QInput.b75c9e6e.js";import{_ as m,A as f,ae as _,r as g,T as v,C as h,M as S,af as a,F as u,E as o,aj as y,L as w,ay as x,az as Q}from"./index.057df2d4.js";import{Q as b}from"./QForm.c4a6f71b.js";import{u as C}from"./use-quasar.85ad5d58.js";import"./use-dark.ea34e692.js";const E=f({name:"LoginPage",setup(){const e=C(),t=_(),s=g(""),r=v();return{doSubmit:()=>{if(!s.value){e.notify({type:"negative",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"});return}r.login(s.value).then(n=>{n?t.push("/"):e.notify({type:"negative",message:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"})})},password:s}}}),B=e=>(x("data-v-0de22de2"),e=e(),Q(),e),I={class:"row flex-center login"},L={class:"col-xs-8 col-sm-5 col-lg-3 q-pa-md content-center"},V=B(()=>a("div",{class:"text-h5"},"\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 PULSAR",-1)),$={class:"q-gutter-md"};function A(e,t,s,r,l,n){return h(),S("section",I,[a("div",L,[u(c,null,{default:o(()=>[u(d,{class:"flex flex-center"},{default:o(()=>[V]),_:1}),u(d,{class:"flex flex-center"},{default:o(()=>[u(b,{onSubmit:y(e.doSubmit,["prevent"])},{default:o(()=>[a("div",$,[u(p,{autofocus:"",outlined:"",label:"\u041F\u0430\u0440\u043E\u043B\u044C",type:"password",modelValue:e.password,"onUpdate:modelValue":t[0]||(t[0]=i=>e.password=i)},null,8,["modelValue"]),a("div",null,[u(w,{class:"full-width",color:"primary",rounded:"",type:"submit",label:"\u0412\u043E\u0439\u0442\u0438"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}var R=m(E,[["render",A],["__scopeId","data-v-0de22de2"]]);export{R as default};
