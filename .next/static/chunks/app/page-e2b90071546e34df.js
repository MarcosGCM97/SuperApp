(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6711:function(e,t,n){Promise.resolve().then(n.bind(n,752))},752:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(7437),l=n(2265);function s(e){let{toDo:t,onStart:n,onDeleteItem:l,name:s}=e;return(0,a.jsxs)("div",{style:{textDecoration:!1===t.start?"underline":"none",margin:"20px",border:"1px solid #ffffff",backgrondcolor:"#ccf7e3"},className:"relative rounded-xl h-auto xl:w-1/3 sm:w-2/3 p-3 text-xs flex flex-wrap items-center justify-center",children:[(0,a.jsx)("h2",{className:"font-bold text-sm p-2 w-4/4",children:t.task}),(0,a.jsx)("input",{className:"w-4",type:"checkbox",checked:t.completed,onChange:()=>n(t.id)}),(0,a.jsx)("button",{className:"absolute right-0 top-0 text-red-500 text-xs bg-black p-1 rounded-full",onClick:()=>l(t.id),children:"❌"}),!0===t.completed&&(0,a.jsx)("button",{className:"text-blue-500 bg-white p-1 ml-2 rounded-full",onClick:()=>l(t.id),children:"\uD83E\uDD73"})]})}var r=function(e){let{state:t,onStart:n,onDeleteItem:l,name:r}=e,o=t.filter(e=>!1===e.completed),c=t.filter(e=>!0===e.completed);return(0,a.jsx)("div",{className:"py-5 text-center flex flex-wrap items-center  justify-center",children:("start"===r?o:c).map((e,t)=>(0,a.jsx)(s,{toDo:e,onStart:n,onDeleteItem:l},t))})},o=function(e){let{addToDo:t}=e,[n,s]=(0,l.useState)("");return(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),""!==n.trim()&&(t(n),s(""))},className:"col-span-3 text-center",children:[(0,a.jsx)("input",{type:"text",value:n,onChange:e=>{s(e.target.value)},className:"shadow-xl"}),(0,a.jsx)("button",{className:"bg-gradient-to-r from-zinc-500 from-5% to-emerald-100 shadow-xl",children:"Add ToDo"})]})},c=n(2173);let i="http://localhost:3001/api/toDos";var d={getAll:()=>c.Z.get(i).then(e=>e.data),create:e=>c.Z.post(i,e).then(e=>e.data),update:(e,t)=>c.Z.put("".concat(i,"/").concat(e),t).then(e=>e.data),deleteNote:e=>c.Z.delete("".concat(i,"/").concat(e)).then(e=>e.data)},u=function(){let[e,t]=(0,l.useState)([]),[n,s]=(0,l.useState)([]);(0,l.useEffect)(()=>{d.getAll().then(e=>t(e))},[n]);let c=n=>{d.deleteNote(n,"toDo").then(t(e)).then(s("hola"))};return(0,a.jsxs)("div",{className:"rounded-sm w-1/2 h-1/2 mx-1",children:[(0,a.jsx)(o,{addToDo:n=>{let a={task:n,completed:!1};d.create(a,"toDo").then(n=>{t(e.concat(n))}).then(s(a))}}),(0,a.jsxs)("section",{className:"mt-2 h-full grid grid-cols-2 gap-2",children:[(0,a.jsxs)("div",{className:"col-span-1 bg-transparent text-center overflow-y-scroll border-2 border-red-400 rounded-sm",children:[(0,a.jsx)("h2",{className:"bg-amber-600 text-white",children:"To Do..."}),(0,a.jsx)(r,{state:e,name:"start",onStart:t=>{let n=e.find(e=>e.id===t),a={...n,completed:!n.start};d.update(t,a).then(e=>s(e))},onDeleteItem:c})]}),(0,a.jsxs)("div",{className:"col-span-1 bg-transparent text-center overflow-y-scroll border-2 border-lime-400 rounded-sm",children:[(0,a.jsx)("h2",{className:"bg-lime-600 text-white",children:"Finished!!!!"}),(0,a.jsx)(r,{state:e,name:"finish",onDeleteItem:c})]})]})]})};let m="http://localhost:3001/api/persons";var x={getAll:()=>c.Z.get(m).then(e=>e.data),create:e=>c.Z.post(m,e).then(e=>e.data),update:(e,t)=>c.Z.put("".concat(m,"/").concat(e),t).then(e=>e.data),deleteContact:e=>{let t=c.Z.delete("".concat(m,"/").concat(e));return console.log(t),t.then(e=>e.data)}},h=e=>{let{value:t,onChange:n,name:l}=e;return(0,a.jsxs)("label",{className:"relative text-left",children:[l,": ",(0,a.jsx)("input",{value:t,onChange:n,className:"absolute right-1"})]})},f=e=>{let{add:t,valueName:n,onChangeName:l,valueNumber:s,onChangeNumber:r}=e;return(0,a.jsxs)("form",{onSubmit:t,className:"ml-2 flex flex-col gap-2",children:[(0,a.jsx)(h,{name:"name",value:n,onChange:l}),(0,a.jsx)(h,{name:"number",value:s,onChange:r}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",className:"text-white bg-emerald-600 border-2 border-cyan-200 rounded-md px-1",children:"add"})})]})},p=e=>{let{contacts:t,onDelete:n}=e;return(0,a.jsx)("ul",{className:"flex flex-col text-left ml-2 overflow-y-scroll h-32 w-100",children:t.map((e,t)=>(0,a.jsxs)("li",{className:"flex justify-center items-center my-0.5 px-2 bg-cyan-200  rounded-xl",children:[(0,a.jsxs)("p",{children:[e.name," ",e.number]}),(0,a.jsx)("button",{className:"rounded-md text-base  ml-2 transition-all active:transform active:translate-y-0.5",children:"⚙"}),(0,a.jsx)("button",{className:"rounded-md  ml-2 justify-self-end transition-all   active:transform active:translate-y-0.5",onClick:n,children:"❌"})]},t))})},j=e=>{let{name:t,onChange:n}=e;return(0,a.jsxs)("div",{className:"my-2 bg-stone-200",children:[t," ",(0,a.jsx)("input",{className:"my-2 border-slate-500 border-2",onChange:n})]})},b=e=>{let{message:t}=e;return null===t?null:(0,a.jsx)("div",{className:"absolute bottom-0 flex justify-center items-center bg-emerald-100 w-full",children:t})},g=()=>{let[e,t]=(0,l.useState)([]),[n,s]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[c,i]=(0,l.useState)([...e]),[d,u]=(0,l.useState)(!0),[m,h]=(0,l.useState)(null),[g,v]=(0,l.useState)([]),N=d?e:c;return(0,l.useEffect)(()=>{x.getAll().then(e=>t(e))},[g]),(0,a.jsxs)("div",{className:"relative text-center text-xs divide-x-2 w-2/6 h-auto m-4",children:[(0,a.jsx)("h2",{className:"my-4 h-2 bg-white font-bold text-xl flex justify-center items-center",children:"Phonebook"}),(0,a.jsx)(j,{name:"Filter name...",onChange:t=>{i(e.filter(e=>e.name.toUpperCase().includes(t.target.value.toUpperCase()))),u(!1)}}),(0,a.jsx)("h2",{className:"text-left ml-2 underline",children:"Add a new contact"}),(0,a.jsx)(f,{add:l=>{l.preventDefault();let c={name:n,number:r};if(e.filter(e=>e.name===c.name).length>0){if(confirm("".concat(n," is already added to phonebook, want you edit this contact?"))){let t=e.filter(e=>e.name===c.name);c={...t[0],number:c.number,id:t[0].id},x.update(t[0].id,c).then(e=>v(e)).catch(e=>{console.log(e),h((0,a.jsxs)("p",{className:"messageError",children:[n," name contact non fund"]})),setTimeout(()=>{h(null)},2e3)})}else t(e)}else t(e.concat(c)),x.create(c).then(n=>{t(e.concat(n))}).then(e=>v(e)).then(h((0,a.jsxs)("p",{className:"messageAdd",children:["You`ve adeed to ",n]})),setTimeout(()=>{h(null)},2e3));s(""),o(""),u(!0)},valueName:n,onChangeName:e=>{s(e.target.value)},valueNumber:r,onChangeNumber:e=>{o(e.target.value)}}),(0,a.jsx)("h2",{className:"text-left ml-2 underline",children:"Contacts"}),(0,a.jsx)(p,{contacts:N,onDelete:t=>{let n=t.target.parentNode,a=e.filter(e=>n.innerText.includes(e.name));x.deleteContact(a[0].id).then(e=>v(e))}}),(0,a.jsx)(b,{message:m})]})};let v="http://localhost:3001/api/weathers";var N={getAll:async()=>(await c.Z.get(v)).data,create:async e=>(await c.Z.post(v,e)).data},w=function(e){let{onSubmit:t,onChange:n}=e;return(0,a.jsxs)("form",{onSubmit:t,className:"flex flex-col justify-around items-center gap-y-2",children:[(0,a.jsx)("label",{className:"text-sm",children:"Country or City Name:"}),(0,a.jsx)("input",{onChange:n,className:"rounded w-40 text-sm border-2 border-cyan-400",type:"text",placeholder:"Italy, Buenos Aires, Paris..."}),(0,a.jsx)("button",{className:"text-xs w-20 border-2 border-cyan-400 rounded",children:"Enter"})]})},y=function(e){var t,n,l,s,r;let{weather:o}=e;return(0,a.jsxs)("div",{className:"flex flex-row flex-wrap justify-around items-center bg-transparent text-center text-xs gap-y-2",children:[(0,a.jsx)("h2",{className:"w-44",children:null==o?void 0:null===(t=o.request)||void 0===t?void 0:t.query}),(0,a.jsxs)("p",{children:["Weather: ",null==o?void 0:null===(n=o.current)||void 0===n?void 0:n.temperature,"\xba ",null==o?void 0:null===(l=o.current)||void 0===l?void 0:l.weather_descriptions[0]]}),(0,a.jsx)("img",{width:50,src:null==o?void 0:null===(s=o.current)||void 0===s?void 0:s.weather_icons[0],alt:"Weather Icon"}),(0,a.jsx)("p",{children:null==o?void 0:null===(r=o.location)||void 0===r?void 0:r.localtime})]})},C=function(){let[e,t]=(0,l.useState)(null),[n,s]=(0,l.useState)(null),[r,o]=(0,l.useState)(""),c=n?(0,a.jsx)(y,{weather:e}):(0,a.jsx)(w,{onChange:e=>{o(e.target.value)},onSubmit:()=>{let e={newWeather:r};s(e),N.create(e),setTimeout(()=>{N.getAll().then(e=>t(e))},2e3)}});return(0,a.jsx)("section",{className:"w-48 h-32 flex flex-col justify-center items-center bg-transparent   border-2 border-emerald-500 rounded-md",children:c})},S=function(){return(0,a.jsxs)("div",{className:"w-screen h-screen bg-gradient-to-b from-slate-500 from-5% to-emerald-100 flex xl:flex-row flex-wrap justify-center items-center",children:[(0,a.jsx)("h1",{className:"h-10 w-screen text-xl col-span-full row-start-1 flex justify-center items-center bg-gradient-to-r from-zinc-400 from-5% to-emerald-100",children:"Organizate your life wiht this web page"}),(0,a.jsx)(u,{}),(0,a.jsx)(g,{}),(0,a.jsx)(C,{})]})}}},function(e){e.O(0,[580,971,938,744],function(){return e(e.s=6711)}),_N_E=e.O()}]);