import{_ as c,r as e,o as n,c as l,a as o,w as r,b as s,d as t,e as v,F as h}from"./index-a2a28a1a.js";const m={data(){return{}}},$={class:"background-image-layout p-4 d-flex justify-content-center align-items-center"},x=t("br",null,null,-1);function k(d,i,_,u,p,b){const a=e("router-link");return n(),l("div",$,[o(a,{class:"text-white fw-bold fs--20 text-center p-5 border rounded-5 border-5",to:"/products"},{default:r(()=>[s("おいしいです "),x,s(" 來去點餐!")]),_:1})])}const w=c(m,[["render",k]]),N={data(){return{}}},B={class:"navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top navbar-dark bg-dark border-bottom border-warning"},y={class:"container-fluid"},P=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},I={class:"navbar-nav"},j={class:"nav-item"},C={class:"nav-item"};function F(d,i,_,u,p,b){const a=e("router-link");return n(),l("nav",B,[t("div",y,[t("h1",null,[o(a,{to:"/",class:"navbar-brand fw-bold fs--14 text-white"},{default:r(()=>[s(" Sushi-酯")]),_:1})]),P,t("div",V,[t("ul",I,[t("li",j,[o(a,{to:"/products",class:"nav-link fw-bold me-lg-4","aria-current":"page"},{default:r(()=>[s("產品列表")]),_:1})]),t("li",C,[o(a,{class:"nav-link fw-bold me-lg-4","aria-current":"page",to:"/cart"},{default:r(()=>[s("購物車")]),_:1})])])])])])}const T=c(N,[["render",F]]),E={components:{NavBar:T,IndexPage:w}},H={class:"pt-8"};function S(d,i,_,u,p,b){const a=e("NavBar"),f=e("IndexPage"),g=e("router-view");return n(),l(h,null,[t("header",null,[o(a)]),t("main",H,[this.$route.fullPath==="/"?(n(),v(f,{key:0})):(n(),v(g,{key:1}))])],64)}const z=c(E,[["render",S]]);export{z as default};