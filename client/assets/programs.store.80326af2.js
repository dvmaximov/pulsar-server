import{X as e,Y as a}from"./index.350f355b.js";const n=s=>{const t=JSON.parse(s.content);return t.id=s.id,t},i=s=>{const{id:t,...r}=s;return{id:t,content:JSON.stringify(r)}},g=e("programs",{state:()=>({tasksList:[],loading:!1}),getters:{tasks:s=>t=>{let r=[];return t===""?r=s.tasksList:r=s.tasksList.filter(o=>o.name.toLowerCase().includes(t.toLowerCase())),r}},actions:{async getPrograms(){this.loading=!0,this.tasksList=[];try{const s=await a.fetch("programs");s.error||(s.result||[]).forEach(r=>{this.tasksList.push(n(r))})}catch{}this.loading=!1},async moveToServer(s){if(!s)return;const t=i(s);await a.insert("programs",{record:t})}}});export{g as u};
