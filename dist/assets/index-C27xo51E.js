import{r as a,j as e}from"./index-5lFW-7Db.js";import{_ as l}from"./react-apexcharts.min-BUvr6ZIa.js";import{u as i}from"./useGetAllDailyStream-CKG1Je1Z.js";import{u as n}from"./useGetAllMonthlyStream-CQM8bQ6u.js";import{u as c}from"./useGetAllUsers-pVPKmv6R.js";import{u as d}from"./useGetSubscriptionPlans-BUsy5GRF.js";import"./index-BKNjMPK8.js";const m={colors:["#0284c7"],theme:{mode:"dark"},chart:{type:"bar",height:350,stacked:!1,toolbar:{show:!1},zoom:{enabled:!1},background:"transparent"},responsive:[{breakpoint:1024,options:{chart:{height:300}}},{breakpoint:1366,options:{chart:{height:350}}}],plotOptions:{bar:{horizontal:!0,columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],title:{text:"Numbers"}},yaxis:{title:{text:"Months"}},fill:{opacity:1}},x=()=>{const t=a.useMemo(()=>({series:[{data:[400,430,448,470,540,580,690,1100,1200,1380,450,900]}]}),[]);return e.jsxs("div",{className:"w-full flex flex-col gap-3 font-barlow",children:[e.jsx("h1",{className:"md:text-xl text-base text-gray-300",children:"Activity Analysis"}),e.jsx(l,{options:m,series:t.series,type:"bar",height:350})]})},h={chart:{type:"pie",background:"transparent"},stroke:{width:.5},theme:{mode:"dark"},colors:["#0284c7","#059669"],labels:["Daily Salary Streams","Monthly Salary Streams"],legend:{show:!0,position:"bottom",horizontalAlign:"center"},plotOptions:{pie:{donut:{size:"55%",background:"transparent"}}},dataLabels:{enabled:!0},responsive:[{breakpoint:1024,options:{chart:{height:300}}},{breakpoint:1366,options:{chart:{height:350}}}]},p=()=>{const t=i(),s=n(),[r,o]=a.useState({series:[0,0]});return a.useEffect(()=>{t&&s&&o({series:[t.length,s.length]})},[t,s]),e.jsxs("div",{className:"w-full flex flex-col gap-3 font-barlow",children:[e.jsx("h1",{className:"md:text-xl text-base text-gray-300",children:"Salary Stream Analysis"}),e.jsx(l,{options:h,series:r.series,type:"pie"})]})},w=()=>{const t=c(),s=d();return e.jsxs("section",{className:"w-full flex flex-col gap-4",children:[e.jsxs("main",{className:"w-full grid md:grid-cols-2 gap-4 mt-4",children:[e.jsx("div",{className:"flex flex-col gap-5 bg-gray-800 rounded-lg p-6",children:e.jsxs("div",{className:"w-full flex flex-col gap-1",children:[e.jsx("h4",{className:"text-gray-300 font-barlow",children:"No. of Users"}),e.jsx("h1",{className:"md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium",children:t==null?void 0:t.length})]})}),e.jsx("div",{className:"flex flex-col gap-5 bg-gray-800 rounded-lg p-6",children:e.jsxs("div",{className:"w-full flex flex-col gap-1",children:[e.jsx("h4",{className:"text-gray-300 font-barlow",children:"No. of Subscription Plan"}),e.jsx("h1",{className:"md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium",children:s==null?void 0:s.length})]})})]}),e.jsxs("section",{className:"w-full grid lg:grid-cols-5 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"w-full p-4 lg:col-span-3 flex flex-col items-center rounded-md bg-gray-800",children:e.jsx(x,{})}),e.jsx("div",{className:"w-full p-4 lg:col-span-2 flex flex-col items-center rounded-md bg-gray-800",children:e.jsx(p,{})})]})]})};export{w as default};
