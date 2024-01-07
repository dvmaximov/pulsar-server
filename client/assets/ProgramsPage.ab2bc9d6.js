import{Q as h}from"./QSelect.4b2e4248.js";import{A as E,ai as F,r as v,w as V,_ as S,C as m,D,E as o,F as u,af as i,L as c,K as Q,M as k,N as X,O as P,I as Y,H as w,ay as A,az as I,ae as Z,B as $,aj as y}from"./index.df10e98b.js";import{C as x,Q as ee,a as ue}from"./ConfirmDialog.c3761c06.js";import{Q as L}from"./QInput.50e8e8ea.js";import{u as oe}from"./programs.store.2a858748.js";import{a as g,Q as T}from"./QCard.0b87b1f9.js";import{Q as N}from"./QCardActions.84632647.js";import{Q as O}from"./QDialog.d36aee92.js";import{a as se}from"./socket.store.b3d4d7a9.js";import"./use-timeout.8f187d26.js";import"./QItem.f7ec7451.js";import"./use-dark.4b9f6681.js";import"./QSeparator.8fa89e8e.js";import"./QList.552a34e1.js";const ae=E({name:"ProgramEdit",props:{isShow:{type:Boolean,default:!1},task:{type:Object}},components:{},setup(e,s){const r=F(()=>e.isShow),n=v();return V(()=>r.value,a=>{a&&(e.task?n.value={...e.task}:n.value={name:"\u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E",description:"",actions:[]})}),{showing:r,taskToEdit:n,cancel:()=>{s.emit("cancel")},save:()=>{s.emit("ok",n.value)}}}}),te=i("div",null,null,-1),le={class:"q-ml-sm"};function ne(e,s,r,n,p,d){return m(),D(O,{modelValue:e.showing,"onUpdate:modelValue":s[1]||(s[1]=a=>e.showing=a),persistent:""},{default:o(()=>[u(T,{style:{width:"300px"}},{default:o(()=>[u(g,{class:"row items-center"},{default:o(()=>[te]),_:1}),u(g,{class:"q-mr-md"},{default:o(()=>[i("div",null,[i("div",le,[u(L,{class:"q-mb-md",outlined:"",autofocus:"",modelValue:e.taskToEdit.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.taskToEdit.name=a),label:"\u0418\u043C\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"},null,8,["modelValue"])])])]),_:1}),u(N,{align:"right"},{default:o(()=>[u(c,{flat:"",label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary",onClick:e.cancel},null,8,["onClick"]),u(c,{flat:"",label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",color:"primary",onClick:e.save},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var ie=S(ae,[["render",ne]]);const re=E({name:"StationGet",props:{isShow:{type:Boolean,default:!1}},components:{},setup(e,s){const r=F(()=>e.isShow),n=se(),{workstations:p}=Q(n);return V(()=>r.value,f=>{}),{showing:r,workstations:p,cancel:()=>{s.emit("cancel")},choice:f=>{s.emit("ok",f)}}}}),de=e=>(A("data-v-36eb24dd"),e=e(),I(),e),ce=de(()=>i("div",null,"\u0412\u044B\u0431\u043E\u0440 \u0441\u0442\u0430\u043D\u0446\u0438\u0438",-1)),me={key:0,class:"q-ml-sm"};function fe(e,s,r,n,p,d){return m(),D(O,{modelValue:e.showing,"onUpdate:modelValue":s[0]||(s[0]=a=>e.showing=a),persistent:""},{default:o(()=>[u(T,{style:{width:"300px"}},{default:o(()=>[u(g,{class:"row items-center"},{default:o(()=>[ce]),_:1}),u(g,{class:"q-mr-md"},{default:o(()=>[i("div",null,[e.workstations.length===0?(m(),k("div",me," \u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439 ")):(m(),D(T,{key:1},{default:o(()=>[(m(!0),k(P,null,X(e.workstations,a=>(m(),D(g,{class:"flex justify-between items-center",key:a.name},{default:o(()=>[i("div",null,Y(a.name),1),u(c,{class:"q-mr-sm item-control",size:"12px",flat:"",dense:"",round:"",icon:`arrow_circle_right
`,onClick:f=>e.choice(a)},{default:o(()=>[u(h,null,{default:o(()=>[w("\u0412\u044B\u0431\u0440\u0430\u0442\u044C")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}))])]),_:1}),u(N,{align:"right"},{default:o(()=>[u(c,{flat:"",label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary",onClick:e.cancel},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var pe=S(re,[["render",fe],["__scopeId","data-v-36eb24dd"]]);const ve=[{name:"name",required:!0,label:"\u0418\u043C\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"id",required:!0,label:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",align:"right",field:e=>e.id,format:e=>`${e}`,sortable:!1}],Ce=E({name:"ProgramsList",components:{ProgramEdit:ie,ConfirmDialog:x,StationGet:pe},setup(){const e=oe(),{tasks:s,loading:r}=Q(e),n=v(""),p=Z(),d=v(!1),a=v(!1),f=v(!1),C=v(null),t=v(null),_=v(0),B=async()=>{await e.getTasks()},j=l=>{_.value=l,a.value=!0},G=async()=>{await e.delete(_.value),b()},b=()=>{_.value=0,a.value=!1},z=l=>{p.push({path:"program-actions",query:{id:l.id,type:"server"}})},M=l=>{t.value=l,f.value=!0},U=l=>{C.value=l,d.value=!0},R=()=>{C.value=null,d.value=!0},H=async l=>{l.name!==""&&(C.value?await e.update(l):await e.insert(l)),d.value=!1},K=()=>{C.value=null,d.value=!1},q=()=>{f.value=!1},W=l=>{const J=t.value;e.moveToStation(l,J),t.value=null,q()};return B(),{tasks:s,columns:ve,searchByName:n,loading:r,isEditShow:d,isShowDeleteDialog:a,isShowGetDialog:f,editTask:C,refreshTasks:B,confirmDelete:j,confirmMoveToStation:M,showActions:z,showEdit:U,addTask:R,closeEdit:K,saveTask:H,deleteTask:G,closeDeleteDialog:b,closeMove:q,moveTaskToStation:W}}}),_e=e=>(A("data-v-59204ca7"),e=e(),I(),e),ke={class:"flex justify-evenly full-width q-pa-md"},he=_e(()=>i("div",{class:"text-h6 full-width q-ma-md"},"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",-1)),we={key:0,class:"full-width"},ge={class:"row justify-end"},ye={class:"flex justify-end item-control"},De={class:"q-gutter-xs"},$e={key:1};function Ee(e,s,r,n,p,d){const a=$("ProgramEdit"),f=$("ConfirmDialog"),C=$("StationGet");return m(),k(P,null,[i("section",ke,[he,e.loading?(m(),k("div",$e,"Loading")):(m(),k("div",we,[u(ue,{flat:"",bordered:"","virtual-scroll":"",rows:e.tasks(e.searchByName),columns:e.columns,"row-key":"name","rows-per-page-options":[15,20,25,50,0]},{"body-cell-id":o(t=>[u(ee,{props:t},{default:o(()=>[i("div",ge,[i("div",ye,[i("div",De,[u(c,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"edit",onClickCapture:y(_=>e.showEdit(t.row),["stop"])},{default:o(()=>[u(h,null,{default:o(()=>[w("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")]),_:1})]),_:2},1032,["onClickCapture"]),u(c,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"login",onClickCapture:y(_=>e.showActions(t.row),["stop"])},{default:o(()=>[u(h,null,{default:o(()=>[w("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")]),_:1})]),_:2},1032,["onClickCapture"]),u(c,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"download",onClickCapture:y(_=>e.confirmMoveToStation(t.row),["stop"])},{default:o(()=>[u(h,null,{default:o(()=>[w("\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0430\u043D\u0446\u0438\u044E")]),_:1})]),_:2},1032,["onClickCapture"]),u(c,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClickCapture:y(_=>e.confirmDelete(t.row.id),["stop"])},{default:o(()=>[u(h,null,{default:o(()=>[w("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435")]),_:1})]),_:2},1032,["onClickCapture"])])])])]),_:2},1032,["props"])]),"top-left":o(()=>[u(L,{debounce:"300",outlined:"",modelValue:e.searchByName,"onUpdate:modelValue":s[0]||(s[0]=t=>e.searchByName=t),label:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438"},null,8,["modelValue"])]),"top-right":o(()=>[i("div",null,[u(c,{outline:"",color:"primary",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:s[1]||(s[1]=t=>e.addTask()),class:"q-mr-xs"}),u(c,{outline:"",color:"primary",label:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",onClick:s[2]||(s[2]=t=>e.refreshTasks())})])]),_:1},8,["rows","columns"])]))]),u(a,{isShow:e.isEditShow,task:e.editTask,onCancel:e.closeEdit,onOk:e.saveTask},null,8,["isShow","task","onCancel","onOk"]),u(f,{isShow:e.isShowDeleteDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435?",onOk:e.deleteTask,onCancel:e.closeDeleteDialog},null,8,["isShow","onOk","onCancel"]),u(C,{isShow:e.isShowGetDialog,onCancel:e.closeMove,onOk:e.moveTaskToStation},null,8,["isShow","onCancel","onOk"])],64)}var Se=S(Ce,[["render",Ee],["__scopeId","data-v-59204ca7"]]);const Te=E({name:"ProgramsPage",components:{ProgramsList:Se},setup(){return{}}}),Be={class:"flex justify-evenly"};function be(e,s,r,n,p,d){const a=$("ProgramsList");return m(),k("section",Be,[u(a)])}var Ue=S(Te,[["render",be]]);export{Ue as default};