import{Q as f,a as m}from"./QCard.0b87b1f9.js";import{Q as p}from"./QSeparator.8fa89e8e.js";import{_,A as h,K as k,ae as y,C as e,D as c,E as s,af as n,M as r,N as C,O as D,F as u,I as Q,L as w,H as B}from"./index.df10e98b.js";import{Q as S}from"./QCardActions.84632647.js";import{Q as g}from"./QPage.5a17a53f.js";import{a as x}from"./socket.store.b3d4d7a9.js";import"./use-dark.4b9f6681.js";const E=h({name:"MainPage",setup(){const t=x(),{workstations:i}=k(t),l=y();return{workstations:i,toStationInfo:a=>{t.setCurrentStation(a),l.push({path:"/workstation/state",query:{name:a.name}})}}}}),v={class:"full-width"},F={key:0,class:"text-center"},$={key:1,class:"text-center"},A={class:"full-width flex justify-evenly"},I={class:"text-subtitle2"};function N(t,i,l,d,a,q){return e(),c(g,{class:"flex q-pt-lg justify-evenly"},{default:s(()=>[n("section",v,[t.workstations.length===0?(e(),r("h6",F," \u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439 ")):(e(),r("h6",$,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438")),n("div",A,[(e(!0),r(D,null,C(t.workstations,o=>(e(),c(f,{class:"q-ma-sm bg-secondary text-white",style:{width:"30%"},key:o.uuid},{default:s(()=>[u(m,null,{default:s(()=>[n("div",I,Q(o.name),1)]),_:2},1024),u(p,{dark:""}),u(S,null,{default:s(()=>[u(w,{flat:"",onClick:M=>t.toStationInfo(o)},{default:s(()=>[B("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])])]),_:1})}var H=_(E,[["render",N]]);export{H as default};
