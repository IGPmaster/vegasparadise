import{_ as L,r as y,n as v,E,o as e,c as o,a as t,M as N,F as _,q as x,u as i,A as p,z as f,p as w,t as a,y as d,b as g,w as k,B as j,N as B,O as M,Q as T,I as S,R as z,S as D,T as C}from"./Caal3ueE.js";import{_ as G}from"./D0de0Bmq.js";import{u as A}from"./D_0vxrYT.js";const F={key:0,class:"loading-placeholder"},V={class:"headWrap bg-tertiary_dark"},J={class:"w-full"},Y=["href"],q=["srcset","alt","title"],O=["src","alt","title"],Q={class:"container mx-auto text-center text-primary sig_terms lg:py-5 lg:w-3/4"},R=["innerHTML"],U={class:"container mx-auto"},W={class:"flex justify-center lg:pb-5 py-3"},X=["src"],K={__name:"MainBanner",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await E(),c.value=!1}catch(n){console.error("Error fetching promotions:",n)}c.value=!1,u("loaded")}),(n,l)=>(e(),o(_,null,[c.value?(e(),o("div",F,l[0]||(l[0]=[t("svg",{class:"spinner",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1)]))):N("",!0),t("div",V,[(e(!0),o(_,null,x(i(f),r=>(e(),o("div",{key:r.id},[t("div",J,[r.acf&&r.yoast_head_json?(e(),o("a",{key:0,href:i(p),style:{"margin-bottom":"-5px"}},[t("picture",null,[t("source",{media:"(min-width: 992px)",srcset:r.acf.image_full,alt:r.yoast_head_json.description,title:r.yoast_head_json.og_title},null,8,q),t("img",{src:r.acf.image_small,class:"w-full",alt:r.yoast_head_json.description,title:r.yoast_head_json.og_title,style:{"min-width":"100vw","padding-top":"6rem"},width:"1920",height:"400"},null,8,O)])],8,Y)):N("",!0)]),t("div",Q,[t("div",{class:"px-5",innerHTML:r.acf.sig_terms},null,8,R)]),l[1]||(l[1]=t("main",{class:"container mx-auto text-center py-4"},[t("h1",{class:"site_heading text-primary text-lg md:text-2xl lg:text-4xl font-bold"},"betDukes - Your Casino!")],-1)),t("div",U,[t("div",W,[t("img",{class:"lg:w-2/5 w-7/8 place-items-center",src:r.acf.trust_icons,alt:"100% Licensed and fast payouts"},null,8,X)])])]))),128))])],64))}},Z=L(K,[["__scopeId","data-v-83adeba2"]]),tt={class:"py-10 md:py-20 bg-primary_bg"},st={class:"lg:mb-4"},et={class:"container mx-auto px-4 sm:px-6 lg:px-8"},ot={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},it={class:"col-span-full lg:col-span-6"},nt={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},at={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},lt={class:"lg:col-span-2 p-4"},rt={class:"flex justify-between items-center"},ct={class:"text-center"},dt={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},_t={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},pt={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},mt={class:"show show-first relative"},xt=["href"],ht=["src","onError","alt","title"],ut={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},gt=["href"],ft={class:"gameDescr p-4 text-white text-center"},yt={key:0},vt={key:1,class:"material-icons text-4xl scale-150"},$t={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},bt={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},wt={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},kt=["href"],jt={__name:"NewGames",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await w()}catch(n){console.error("Error fetching promotions:",n)}finally{c.value=!1,u("loaded")}}),(n,l)=>{const r=G;return e(),o("div",tt,[t("div",st,[t("div",et,[t("div",ot,[t("div",it,[t("p",nt,a(i(d).new_games),1),(e(!0),o(_,null,x("promotionsPosts"in n?n.promotionsPosts:i(f),s=>(e(),o("div",{key:s.id},[t("p",at,a(s.acf.new_games_info),1)]))),128))]),t("div",lt,[t("div",rt,[g(r,{to:"all-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:k(()=>[t("span",ct,a(i(d).see_more),1),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),c.value?(e(),o("div",dt,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(e(),o("div",_t,[t("div",pt,[(e(!0),o(_,null,x(i(B).slice(-16).reverse(),s=>(e(),o("div",{key:s.id,class:j(["item-"+s.id,"shadow-lg rounded-md"])},[t("div",mt,[t("a",{href:i(p),target:"_blank"},[t("img",{class:"rounded-md w-full",src:s.image,onError:b=>s.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+s.gameName+" online slot. "+s.description,title:s.gameName+" - "+s.id,width:"200",height:"132"},null,40,ht)],8,xt),t("div",ut,[t("a",{href:i(p),target:"_blank"},[t("div",ft,[s!=null&&s.description?(e(),o("div",yt,a(s.description)+" from "+a(s.provider),1)):(e(),o("i",vt,"play_arrow"))])],8,gt)])])],2))),128))])])),t("div",$t,[t("div",bt,[t("div",wt,a(i(d).claim),1),t("a",{href:i(p),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},a(i(d).sign_up),9,kt)])])])}}},Gt={class:"py-10 md:py-20 bg-primary_bg"},Nt={class:"lg:mb-4"},Lt={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Et={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Pt={class:"col-span-full lg:col-span-6"},It={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},Ht={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Bt={class:"lg:col-span-2 p-4"},Mt={class:"flex justify-between items-center"},Tt={class:"text-center"},St={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},zt={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Dt={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},Ct={class:"show show-first relative"},At=["href"],Ft=["src","onError","alt","title"],Vt={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Jt=["href"],Yt={class:"gameDescr p-4 text-white text-center"},qt={key:0},Ot={key:1,class:"material-icons text-4xl scale-150"},Qt={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Rt={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Ut={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Wt=["href"],Xt={__name:"PopularGames",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await w()}catch(n){console.error("Error fetching promotions:",n)}finally{c.value=!1,u("loaded")}}),(n,l)=>{const r=G;return e(),o("div",Gt,[t("div",Nt,[t("div",Lt,[t("div",Et,[t("div",Pt,[t("p",It,a(i(d).popular_games),1),(e(!0),o(_,null,x("promotionsPosts"in n?n.promotionsPosts:i(f),s=>(e(),o("div",{key:s.id},[t("p",Ht,a(s.acf.popular_games_info),1)]))),128))]),t("div",Bt,[t("div",Mt,[g(r,{to:"popular-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:k(()=>[t("span",Tt,a(i(d).see_more),1),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),c.value?(e(),o("div",St,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(e(),o("div",zt,[t("div",Dt,[(e(!0),o(_,null,x(i(M).slice(-16).reverse(),s=>(e(),o("div",{key:s.id,class:j(["item-"+s.id,"shadow-lg rounded-md"])},[t("div",Ct,[t("a",{href:i(p),target:"_blank"},[t("img",{class:"rounded-md w-full",src:s.image,onError:b=>s.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+s.gameName+" online slot. "+s.description,title:s.gameName+" - "+s.id,width:"376",height:"250"},null,40,Ft)],8,At),t("div",Vt,[t("a",{href:i(p),target:"_blank"},[t("div",Yt,[s!=null&&s.description?(e(),o("div",qt,a(s.description),1)):(e(),o("i",Ot,"play_arrow"))])],8,Jt)])])],2))),128))])])),t("div",Qt,[t("div",Rt,[t("div",Ut,a(i(d).claim),1),t("a",{href:i(p),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},a(i(d).sign_up),9,Wt)])])])}}},Kt={class:"py-10 md:py-20 bg-primary_bg"},Zt={class:"lg:mb-4"},ts={class:"container mx-auto px-4 sm:px-6 lg:px-8"},ss={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},es={class:"col-span-full lg:col-span-6"},os={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},is={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},ns={class:"lg:col-span-2 p-4"},as={class:"flex justify-between items-center"},ls={class:"text-center"},rs={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},cs={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},ds={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},_s={class:"show show-first relative"},ps=["href"],ms=["src","onError","alt","title"],xs={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},hs=["href"],us={class:"gameDescr p-4 text-white text-center"},gs={key:0},fs={key:1,class:"material-icons text-4xl scale-150"},ys={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},vs={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},$s={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},bs=["href"],ws={__name:"SlotGames",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await w()}catch(n){console.error("Error fetching promotions:",n)}finally{c.value=!1,u("loaded")}}),(n,l)=>{const r=G;return e(),o("div",Kt,[t("div",Zt,[t("div",ts,[t("div",ss,[t("div",es,[t("p",os,a(i(d).slot_games),1),(e(!0),o(_,null,x("promotionsPosts"in n?n.promotionsPosts:i(f),s=>(e(),o("div",{key:s.id},[t("p",is,a(s.acf.slot_games_info),1)]))),128))]),t("div",ns,[t("div",as,[g(r,{to:"slot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:k(()=>[t("span",ls,a(i(d).see_more),1),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),c.value?(e(),o("div",rs,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(e(),o("div",cs,[t("div",ds,[(e(!0),o(_,null,x(i(T).slice(-16).reverse(),s=>(e(),o("div",{key:s.id,class:j(["item-"+s.id,"shadow-lg rounded-md"])},[t("div",_s,[t("a",{href:i(p),target:"_blank"},[t("img",{class:"rounded-md w-full",src:s.image,onError:b=>s.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+s.gameName+" online slot. "+s.description,title:s.gameName+" - "+s.id,width:"376",height:"250"},null,40,ms)],8,ps),t("div",xs,[t("a",{href:i(p),target:"_blank"},[t("div",us,[s!=null&&s.description?(e(),o("div",gs,a(s.description),1)):(e(),o("i",fs,"play_arrow"))])],8,hs)])])],2))),128))])])),t("div",ys,[t("div",vs,[t("div",$s,a(i(d).claim),1),t("a",{href:i(p),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},a(i(d).sign_up),9,bs)])])])}}},ks={class:"py-10 md:py-20 bg-primary_bg"},js={class:"lg:mb-4"},Gs={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Ns={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Ls={class:"col-span-full lg:col-span-6"},Es={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},Ps={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Is={class:"lg:col-span-2 p-4"},Hs={class:"flex justify-between items-center"},Bs={class:"text-center"},Ms={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Ts={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Ss={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},zs={class:"show show-first relative"},Ds=["href"],Cs=["src","onError","alt","title"],As={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Fs=["href"],Vs={class:"gameDescr p-4 text-white text-center"},Js={key:0},Ys={key:1,class:"material-icons text-4xl scale-150"},qs={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Os={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Qs={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Rs=["href"],Us={__name:"CasinoGames",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await w()}catch(n){console.error("Error fetching promotions:",n)}finally{c.value=!1,u("loaded")}}),(n,l)=>{const r=G;return e(),o("div",ks,[t("div",js,[t("div",Gs,[t("div",Ns,[t("div",Ls,[t("p",Es,a(i(d).casino_games),1),(e(!0),o(_,null,x("promotionsPosts"in n?n.promotionsPosts:i(f),s=>(e(),o("div",{key:s.id},[t("p",Ps,a(s.acf.casino_games_info),1)]))),128))]),t("div",Is,[t("div",Hs,[g(r,{to:"casino-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:k(()=>[t("span",Bs,a(i(d).see_more),1),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),c.value?(e(),o("div",Ms,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(e(),o("div",Ts,[t("div",Ss,[(e(!0),o(_,null,x(i(S).slice(-16).reverse(),s=>(e(),o("div",{key:s.id,class:j(["item-"+s.id,"shadow-lg rounded-md"])},[t("div",zs,[t("a",{href:i(p),target:"_blank"},[t("img",{class:"rounded-md w-full",src:s.image,onError:b=>s.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+s.gameName+" online slot. "+s.description,title:s.gameName+" - "+s.id,width:"376",height:"250"},null,40,Cs)],8,Ds),t("div",As,[t("a",{href:i(p),target:"_blank"},[t("div",Vs,[s!=null&&s.description?(e(),o("div",Js,a(s.description),1)):(e(),o("i",Ys,"play_arrow"))])],8,Fs)])])],2))),128))])])),t("div",qs,[t("div",Os,[t("div",Qs,a(i(d).claim),1),t("a",{href:i(p),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},a(i(d).sign_up),9,Rs)])])])}}},Ws={class:"py-10 md:py-20 bg-primary_bg"},Xs={class:"lg:mb-4"},Ks={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Zs={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},te={class:"col-span-full lg:col-span-6"},se={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},ee={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},oe={class:"lg:col-span-2 p-4"},ie={class:"flex justify-between items-center"},ne={class:"text-center"},ae={key:0,class:"loading-placeholder"},le={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},re={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},ce={class:"show show-first relative"},de=["href"],_e=["src","onError","alt","title"],pe={class:"mask"},me=["href"],xe={class:"gameDescr"},he={key:0},ue={key:1,class:"material-icons"},ge={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},fe={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},ye={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},ve=["href"],$e={__name:"JackpotGames",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return v(async()=>{try{await w(),c.value=!1}catch(n){console.error("Error fetching promotions:",n)}c.value=!1,u("loaded")}),(n,l)=>{const r=G;return e(),o("div",Ws,[t("div",Xs,[t("div",Ks,[t("div",Zs,[t("div",te,[t("p",se,a(i(d).jackpot_games),1),(e(!0),o(_,null,x("promotionsPosts"in n?n.promotionsPosts:i(f),s=>(e(),o("div",{key:s.id},[t("p",ee,a(s.acf.jackpot_games_info),1)]))),128))]),t("div",oe,[t("div",ie,[g(r,{to:"casino-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer"},{default:k(()=>[t("span",ne,a(i(d).see_more),1),l[0]||(l[0]=t("i",{class:"material-icons pl-2"},"arrow_forward",-1))]),_:1})])])])])]),c.value?(e(),o("div",ae,l[1]||(l[1]=[t("svg",{class:"spinner",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1)]))):(e(),o("div",le,[t("div",re,[(e(!0),o(_,null,x(i(z).slice(-16).reverse(),s=>(e(),o("div",{key:s.id,class:j(["item-"+s.id,"shadow-lg rounded-md"])},[t("div",ce,[t("a",{href:i(p),target:"_blank"},[t("img",{class:"rounded-md w-full",src:s.image,onError:b=>s.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+s.gameName+" online slot. "+s.description,title:s.gameName+" - "+s.id,width:"376",height:"250"},null,40,_e)],8,de),t("div",pe,[t("a",{href:i(p),target:"_blank"},[t("div",xe,[s!=null&&s.description?(e(),o("div",he,a(s.description),1)):(e(),o("i",ue,"play_arrow"))])],8,me)])])],2))),128))])])),t("div",ge,[t("div",fe,[t("div",ye,a(i(d).claim),1),t("a",{href:i(p),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary text-md md:text-xl xl:text-3xl"},a(i(d).sign_up),9,ve)])])])}}},be={class:"section px-5 bg-tertiary_dark"},we=["innerHTML"],ke={class:"container mx-auto py-5"},je={class:"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"},Ge={class:"card overflow-hidden rounded-lg leading-relaxed"},Ne={class:"card-image"},Le=["href"],Ee=["src","alt","title"],Pe={class:"py-10"},Ie=["innerHTML"],He={class:"container mx-auto py-10"},Be={class:"px-4"},Me={class:"text-sm text-primary"},Te=["innerHTML"],Se={__name:"index",emits:["loaded"],setup($,{emit:h}){const c=y(!0),u=h;return A(async()=>{await D()},"$PslAyef5YX"),v(async()=>{try{await E(),c.value=!1}catch(n){console.error("Error fetching promotions:",n)}c.value=!1,u("loaded")}),(n,l)=>{const r=Z,s=jt,b=Xt,P=ws,I=Us,H=$e;return e(),o(_,null,[g(r),g(s),t("div",be,[(e(!0),o(_,null,x(i(f),m=>(e(),o("div",{key:m.code,class:"container py-10 mx-auto text-primary"},[t("div",{innerHTML:m.acf.promo_over,class:"leading-relaxed"},null,8,we)]))),128)),t("div",ke,[t("div",je,[(e(!0),o(_,null,x("pp_promotions"in n?n.pp_promotions:i(C),m=>(e(),o("div",{key:m.code},[t("div",Ge,[t("div",Ne,[t("a",{href:i(p)},[t("img",{class:"activator w-full h-auto",src:m.bigImageUrl,loading:"lazy",alt:"Image of "+m.title+" promotion.",title:m.title+", "+m.subTitle},null,8,Ee)],8,Le)])])]))),128))])]),t("div",Pe,[(e(!0),o(_,null,x(i(f),m=>(e(),o("div",{key:m.code,class:"container mx-auto py-2 info_content hide_this"},[t("div",{class:"text-primary",innerHTML:m.acf.promo_under},null,8,Ie)]))),128))])]),g(b),g(P),g(I),g(H),t("div",He,[t("div",Be,[t("div",Me,[(e(!0),o(_,null,x(i(f),m=>(e(),o("div",{key:m.id},[(e(),o("div",{innerHTML:m.content.rendered,key:m.id},null,8,Te))]))),128))])])])],64)}}},Ae=L(Se,[["__scopeId","data-v-933a2f99"]]);export{Ae as default};