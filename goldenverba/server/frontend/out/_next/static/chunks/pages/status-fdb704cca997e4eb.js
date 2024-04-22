(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{39377:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status",function(){return a(34510)}])},34510:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return i}});var l=a(85893),t=a(67294),r=a(36267),n=a(19954);function i(){let e=(0,n.getApiHost)(),[s,a]=(0,t.useState)(""),[i,o]=(0,t.useState)("Offline"),[c,d]=(0,t.useState)({}),[b,h]=(0,t.useState)({}),[u,x]=(0,t.useState)({}),[m,p]=(0,t.useState)(!1),[g,f]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{fetch(e+"/api/get_status").then(e=>e.json()).then(e=>{a(e.type),d(e.libraries),h(e.variables),x(e.schemas),o("Online")}).catch(e=>{console.error("Error fetching the data:",e)})},[]),(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-gray-900",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,l.jsx)("div",{className:"flex-none",children:(0,l.jsx)("div",{className:"bg-yellow-200 border-2 border-gray-800 rounded-lg shadow-lg animate-pop-in hover-container mr-4 ",children:(0,l.jsx)("img",{src:"".concat("static/","verba.png"),alt:"Verba Logo",className:" w-24 h-24 shadow-lg"})})}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h1",{className:" text-6xl font-bold",children:"Verba"}),(0,l.jsxs)("div",{className:"flex text-lg",children:[(0,l.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,l.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Golden"}),(0,l.jsx)("span",{className:"bg-yellow-200 rounded px-2 py-1 hover-container animate-pop-more-late",children:"RAGtriever"})]})]})]})}),(0,l.jsxs)("div",{className:"flex mt-16 space-x-4 w-full justify-center items-start",children:[" ",(0,l.jsxs)("div",{className:"flex-1 border-2 border-black bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,l.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDC15 Verba Status"}),(0,l.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This view shows whether your Verba Client is connected to the Backend and which Deployment of Weaviate you are using"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[(0,l.jsx)(r.Z,{main:"Backend",sub:i,clipboard:"Online"==i,subBgColor:"Online"==i?"green":"red",onClick:()=>console.log("Connected button clicked")}),(0,l.jsx)(r.Z,{main:s||"Weaviate",sub:i,clipboard:"Online"==i,subBgColor:"Online"==i?"green":"red",onClick:()=>console.log("Type button clicked")})]})]}),(0,l.jsxs)("div",{className:"flex-1 border-2 border-black bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 overflow-y-auto w-full animate-pop-in",children:[(0,l.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDCDA Libraries & Variables"}),(0,l.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This view shows the available libraries and set variables"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[Object.entries(c).map(e=>{let[s,a]=e;return(0,l.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:a?"green":"red",sub:a?"Library Installed":"Library not installed",onClick:()=>console.log("".concat(s," button clicked"))},s)}),Object.entries(b).map(e=>{let[s,a]=e;return(0,l.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:a?"green":"red",sub:a?"Variable Available":"Variable not set",onClick:()=>console.log("".concat(s," button clicked"))},s)})]})]}),(0,l.jsxs)("div",{className:"flex-1 bg-white border-2 border-black bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[" ",(0,l.jsx)("h2",{className:"text-lg font-bold",children:"\uD83D\uDCDD Schemas & Objects"}),(0,l.jsx)("button",{onClick:()=>p(!0),className:"text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg",children:"❌ Reset Verba"})]}),(0,l.jsx)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:"This view shows all schemas and their object count"}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:Object.entries(u).map(e=>{let[s,a]=e;return(0,l.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:"yellow",sub:a+" objects",onClick:()=>console.log("".concat(s," button clicked"))},s)})})]})]})]}),m&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,l.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,l.jsx)("p",{children:"Are you sure? This will remove all existing data."}),(0,l.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,l.jsx)("button",{onClick:()=>p(!1),className:"mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded",children:"No"}),(0,l.jsxs)("button",{onClick:()=>{f(!0),fetch(e+"/api/reset").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),p(!1),f(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),f(!1)})},className:"px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded",children:[g?"Resetting...":"Yes"," "]})]})]})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=39377)}),_N_E=e.O()}]);