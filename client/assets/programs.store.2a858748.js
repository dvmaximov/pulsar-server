import{R as k,S as o}from"./index.df10e98b.js";import{u as r,a as i}from"./socket.store.b3d4d7a9.js";const g=k("station-tasks",{state:()=>({tasksList:[]}),getters:{tasks:s=>t=>{let e=[];return t===""?e=s.tasksList:e=s.tasksList.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())),e}},actions:{init(){const s=r();s.on("stationTasks",async t=>{const e=t.message;this.tasksList=e.message}),s.on("stationTaskDeleted",async()=>{this.getTasks()}),s.on("stationTaskUpdated",async t=>{const a=t.message.message;this.tasksList=this.tasksList.map(n=>n.id===a.id?a:n)}),s.on("stationTaskMoved",async t=>{console.log(t)})},async getTasks(){const s=r(),e=i().getCurrentStation();!e||s.emit("getStationTasks",e,{message:"getStationTasks"})},async deleteTask(s){const t=r(),a=i().getCurrentStation();t.emit("deleteStationTask",a,{id:s})},async updateTask(s){const t=r(),a=i().getCurrentStation();t.emit("updateStationTask",a,{task:s})},async moveTaskToStation(s,t){const e=r(),{id:a,...n}=t;e.emit("moveStationTask",s,{task:n})},getTaskById(s){return this.tasksList.find(t=>t.id===s)}}}),m=s=>{const t=JSON.parse(s.content);return t.id=s.id,t},c=s=>{const{id:t,...e}=s;return{id:t,content:JSON.stringify(e)}},T=k("programs",{state:()=>({tasksList:[],loading:!1}),getters:{tasks:s=>t=>{let e=[];return t===""?e=s.tasksList:e=s.tasksList.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())),e}},actions:{async getTasks(){this.loading=!0,this.tasksList=[];try{const s=await o.fetch("programs");s.error||(s.result||[]).forEach(e=>{this.tasksList.push(m(e))})}catch{}this.loading=!1},async moveToServer(s){if(!s)return;const t=c(s);await o.insert("programs",{record:t})},async insert(s){const t=c(s);(await o.insert("programs",{record:t})).result&&this.tasksList.push(s)},async update(s){const t=c(s);(await o.update("programs",{record:t})).result&&(this.tasksList=this.tasksList.map(a=>a.id===s.id?{...s}:a))},async delete(s){(await o.remove("programs",s)).result&&(this.tasksList=this.tasksList.filter(e=>e.id!==s))},getTaskById(s){return this.tasksList.find(t=>t.id===s)},moveToStation(s,t){g().moveTaskToStation(s,t)}}});export{g as a,T as u};