import{R as a}from"./index.df10e98b.js";import{u,a as n}from"./socket.store.b3d4d7a9.js";const c=a("station-works",{state:()=>({worksList:[]}),getters:{works:t=>o=>{let s=[];return o===""?s=t.worksList:s=t.worksList.filter(e=>e.item.name.toLowerCase().includes(o.toLowerCase())),s}},actions:{init(){const t=u();t.on("stationWorks",async o=>{const s=o.message;this.worksList=s.message}),t.on("stationWorksDeleted",async()=>{this.getWorks()}),t.on("stationWorksCreated",async()=>{console.log("created")})},async createWork(t){const o=u(),e=n().getCurrentStation();o.emit("createStationWorks",e,{work:t})},async getWorks(){const t=u(),s=n().getCurrentStation();!s||t.emit("getStationWorks",s,{message:"getStationWorks"})},async deleteWork(t){const o=u(),e=n().getCurrentStation();o.emit("deleteStationWorks",e,{id:t})}}}),r={STATUS_WAIT:1,STATUS_RUN:2,STATUS_DONE:3,STATUS_EXPIRED:4,STATUS_STOPPED:5},k=[{id:r.STATUS_WAIT,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},{id:r.STATUS_RUN,name:"\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435"},{id:r.STATUS_DONE,name:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"},{id:r.STATUS_EXPIRED,name:"\u043F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043E"},{id:r.STATUS_STOPPED,name:"\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}];export{r as S,k as s,c as u};