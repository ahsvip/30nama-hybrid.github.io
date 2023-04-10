import{d as B,o as s,e as a,s as C,w as _,f as e,t as o,v as c,h as g,E as R,O as N,ae as V,V as M,W as T,m as j,R as E,p as P,z as q,b as z,c as A,l as b,r as y,B as U,J as Z,G,C as O,g as v,K as k,L as $}from"./entry.95f381ee.js";import{_ as D}from"./nuxt-link.b23469bb.js";/* empty css                                  */import{_ as F}from"./ContentPop-v2.vue.6eb5320d.js";import{u as L}from"./useBackground.145b7faf.js";const H=""+globalThis.__publicAssetsURL("images/scores/subscene.png"),J=""+globalThis.__publicAssetsURL("images/scores/30nama.png"),h=t=>(M("data-v-ea21afb0"),t=t(),T(),t),K={key:0,class:"__skeleton-2 bg-bg-10 h-[3.5em] w-full rounded-xl"},W=h(()=>e("div",{class:"absolute top-1/2 flex h-full -translate-y-1/2 items-center justify-center gap-2"},[e("svg",{class:"fill-bg-11 h-[70%] max-h-[12em] ltr:left-0 ltr:rotate-180 rtl:right-0",viewBox:"0 0 4 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4 4.34215C-3.15591 9.50124 0.854026 15.3132 4 17.3685L4 4.34215Z"}),e("path",{d:"M1.745 15.3421C2.49667 16.0175 4 18.2947 4 22L4 17.3684L1.745 15.3421Z"}),e("path",{d:"M1.745 6.36853C2.49666 5.69309 4 3.47378 4 7.77245e-05L4 4.3422L1.745 6.36853Z"})]),e("span",{class:"bg-secondary-500 shadow-secondary-500 group-hover:!shadow-secondary-500 h-[50%] max-h-[6em] w-1 rounded-full shadow-[0_0_8px_0] transition-all ltr:group-hover:shadow-[4px_0_20px_2px] rtl:group-hover:shadow-[-4px_0_20px_2px]"})],-1)),Q={class:"flex w-full gap-4 ltr:pl-8 rtl:pr-8"},X={class:"flex flex-1 flex-row flex-wrap gap-8 text-sm"},Y={key:0,class:"flex flex-row items-center gap-2"},ee={class:"text-primary-500 font-semibold"},te={key:1,class:"flex flex-row items-center gap-2"},se={class:"text-primary-500 font-semibold"},ae={key:2,class:"flex flex-row items-center gap-2"},le={class:"text-primary-500 font-semibold"},oe={key:3,class:"flex flex-row items-center gap-2"},ne={class:"text-primary-500 font-semibold"},ie={class:"flex flex-row items-center gap-2 px-4"},re=h(()=>e("li",null,[e("div",{class:"w-6 overflow-hidden rounded-lg border-2 border-transparent"},[e("img",{src:H,alt:"30nama"})])],-1)),ce={key:0},ue=h(()=>e("div",{class:"border-primary-500/50 w-6 overflow-hidden rounded-lg border-2"},[e("img",{src:J,alt:"30nama"})],-1)),de=B({__name:"SinglePageSubtitleBar",props:{data:null,isLoading:{type:Boolean}},setup(t){return(l,x)=>{var n;const p=V,d=D;return s(),a("li",{class:N(["link flex min-w-[48%] flex-row items-center gap-2",{"w-full":(n=t.data)==null?void 0:n.single}])},[t.isLoading?(s(),a("div",K)):t.data?(s(),C(d,{key:1,external:!0,class:"bg-bg-12/50 hover:bg-bg-12 just group relative flex w-full min-w-[16em] max-w-full rounded-xl py-4 transition-all",target:"_blank",to:t.data.link},{default:_(()=>[W,e("div",Q,[e("ul",X,[t.data.season?(s(),a("li",Y,[e("p",ee,o(l.$t("season"))+":",1),e("p",null,o(t.data.season),1)])):c("",!0),t.data.language?(s(),a("li",te,[e("p",se,o(l.$t("language"))+":",1),e("p",null,o(t.data.language),1)])):c("",!0),t.data.quality?(s(),a("li",ae,[e("p",le,o(l.$t("quality"))+":",1),e("p",null,o(t.data.quality),1)])):c("",!0),t.data.type?(s(),a("li",oe,[e("p",ne,o(t.data.type==="sync"?l.$t("sync"):t.data.type==="exclusive"?l.$t("exclusive"):""),1)])):c("",!0)]),e("ul",ie,[re,t.data.single?(s(),a("li",ce,[ue,g(p,{class:"z-10",placement:"top"},{default:_(()=>[R(o(l.$t("exclusive")),1)]),_:1})])):c("",!0)])])]),_:1},8,["to"])):c("",!0)],2)}}}),fe=j(de,[["__scopeId","data-v-ea21afb0"]]),pe={"aria-label":"subtitle links",class:"flex min-h-full w-full flex-col"},me={class:"mt-[-3.25rem] h-full"},_e={class:"min-h-full w-full"},ge={class:"flex min-h-full w-full flex-col py-12"},he={key:0,class:"flex flex-row flex-wrap justify-center gap-4 px-6"},xe={key:1,class:"flex flex-row flex-wrap justify-center gap-4 px-6"},$e=B({__name:"subtitles",setup(t){const l=E(),x=P(),p=q(),{t:d}=z();A({title:()=>`${d("seo.30nama")} | ${d("seo.subtitleLinks")}`});const n=b(()=>l.params.id);typeof n.value!="string"&&x.replace("/");const r=y(),w=y(!0),S=b(()=>{var i;return(i=r.value)==null?void 0:i.result.subtitle});return U(async()=>{var i,m,u;typeof n.value=="string"&&(r.value=await Z("SINGLE::"+n.value,()=>G.API.actions.single(Number(n.value))),w.value=!1,(i=r.value)!=null&&i.error&&p(r.value.msg,"ERROR"),(u=(m=r.value)==null?void 0:m.result)!=null&&u.image.cover.webp&&L(r.value.result.image.cover.webp))}),O(()=>L("")),(i,m)=>{const u=fe,I=F;return s(),a("section",pe,[e("div",me,[g(I,{icon:"ph:download-simple-fill",title:i.$t("sidebar.tree.single.panel.subtitles"),"shadow-background":"shadow-bg-11",foreground:"bg-bg-11","wide-background":"",class:"h-[calc(100%_+_3.1rem)]"},{content:_(()=>[e("div",_e,[e("section",ge,[v(w)?(s(),a("ul",he,[(s(),a(k,null,$(12,f=>g(u,{key:f,"is-loading":""})),64))])):(s(),a("ul",xe,[(s(!0),a(k,null,$(v(S),f=>(s(),C(u,{key:f.link,data:f},null,8,["data"]))),128))]))])])]),_:1},8,["title"])])])}}});export{$e as default};
