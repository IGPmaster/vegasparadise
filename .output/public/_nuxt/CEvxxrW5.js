import{r as h,c as o,a,F as m,j as x,u as c,P as f,W as g,B as y,o as r,t as v,p as d,C as u}from"./BavkqWwP.js";const b={class:"bg-white py-10"},C={class:"container mx-auto px-0"},w={class:"g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center"},k=["onClick"],B={class:"px-4"},L=["innerHTML"],P={__name:"index",setup(I){function _(e,t){return t[e]}async function l(e){try{return(await(await fetch(`${f}GetInfoContentByCode?whitelabelId=${g}&country=${y.value}&code=${e}`)).json())[0].Html}catch(t){console.error(t)}}const s=h("");(async()=>s.value=await l("aboutus"))();const p=async e=>{const t=_(e,u.value);s.value=await l(t)};return(e,t)=>(r(),o("div",null,[a("div",b,[a("div",C,[a("div",w,[(r(!0),o(m,null,x(c(u),(n,i)=>(r(),o("button",{key:i,onClick:$=>p(i),class:"h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base"},v(c(d)[n]?c(d)[n]:n),9,k))),128))]),a("div",B,[a("div",{class:"compliance text-black",innerHTML:s.value},null,8,L)])])])]))}};export{P as default};
