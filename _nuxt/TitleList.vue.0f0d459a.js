import{_ as F}from"./BaseTitleFrame.7d6aaabf.js";import{_}from"./nuxt-link.026b96dd.js";import{d as T,r as C,V,l as R,o as a,e as u,h as P,w as L,L as z,Q as g,g as p,G as b,a3 as I,a4 as $,t as N,f as m,F as B,ac as G,k as S,ad as q,ae as j,af as A,ag as H,ah as M,ai as O,$ as Z,u as D,U as Q}from"./entry.386a7022.js";import{_ as U}from"./ContentPop-v2.vue.e003b151.js";const J={key:0},K={key:1},W={key:2},X={key:3},Y=T({__name:"BasePagination",props:{maxPage:{default:1},yield:{type:Boolean},selectedPage:{default:1},isLoading:{type:Boolean}},emits:["pageChanged"],setup(e,{emit:x}){const l=e,r=C(1);async function d(c){l.yield||r.value===c||(await new Promise(o=>setTimeout(o,25)),r.value=c,x("pageChanged",c))}function i(){return r.value<=3?3:r.value}function f(c){const o=[];for(const h of c)h>0&&h<=l.maxPage&&o.push(h);return o}function s(){const c=[i()-2,i()-1,i(),i()+1,i()+2];if(c.length===5&&l.maxPage===5)return f([1,2,3,4,5]);for(const o in c)if(c[o]>=l.maxPage){if(o==="3")return f([i()-3,i()-2,i()-1,i(),i()+1]);if(o==="2")return f([i()-4,i()-3,i()-2,i()-1,i()])}return c}return V(()=>l.selectedPage,()=>{r.value=l.selectedPage}),R(()=>r.value=l.selectedPage),(c,o)=>{const h=_;return a(),u("ul",{class:g(["local-numbers flex flex-row items-center gap-1 text-base",{"disable-block":e.isLoading}]),dir:"ltr"},[s()[0]>1?(a(),u("li",J,[P(h,{class:g(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl py-1 px-2 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":p(r)===1}]),to:{query:{...c.$route.query,page:1}},onClick:o[0]||(o[0]=t=>d(1))},{default:L(()=>[z(" 1 ")]),_:1},8,["class","to"])])):b("",!0),s()[0]>1?(a(),u("li",K," ... ")):b("",!0),(a(!0),u(I,null,$(s(),t=>(a(),u("li",{key:t.id},[P(h,{class:g(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl py-1 px-2 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":p(r)===t}]),to:{query:{...c.$route.query,page:t}},onClick:n=>d(t)},{default:L(()=>[z(N(t.toString()),1)]),_:2},1032,["class","to","onClick"])]))),128)),p(r)+2<e.maxPage&&e.maxPage>5?(a(),u("li",W," ... ")):b("",!0),p(r)+2<e.maxPage&&e.maxPage>5?(a(),u("li",X,[P(h,{class:g(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl py-1 px-2 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":p(r)===e.maxPage}]),to:{query:{...c.$route.query,page:e.maxPage}},onClick:o[1]||(o[1]=t=>d(e.maxPage))},{default:L(()=>[z(N(e.maxPage.toString()),1)]),_:1},8,["class","to"])])):b("",!0)],2)}}}),ee={class:"titles-renderer-group"},te={role:"none",class:"pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 ltr:-left-8 rtl:-right-8"},ne=m("path",{d:"M0 30.5C9.52005 21.5889 4.18533 11.5501 0 8V30.5Z"},null,-1),ae=m("path",{d:"M3 11.5C2 10.3333 0 6.4 0 0V8L3 11.5Z"},null,-1),le=m("path",{d:"M3 27C2 28.1667 0 32 0 38V30.5L3 27Z"},null,-1),se=[ne,ae,le],re={class:"local-numbers absolute top-1/2 z-10 -translate-y-1/2 text-2xl font-semibold ltr:left-0 rtl:right-0"},ie=T({__name:"TitlesRendererGroup",props:{isLoading:{type:Boolean},visible:{type:Boolean},transparent:{type:Boolean},page:null,items:null},emits:["onInView","reachedEnd"],setup(e,{emit:x}){const l=e,r=C({firstEntry:l.items[0],lastEntry:l.items[l.items.length-1],entries:l.items.slice(1,l.items.length-1)}),d=C(null),i=C(null),f=C(null),s=new IntersectionObserver(t=>t.map(c),{threshold:0});function c(t){if(t.target.getAttribute("data-is-skeleton"))return t.isIntersecting?x("onInView"):null;t.target.getAttribute("data-is-first")&&(t.positionInGroup="start"),t.target.getAttribute("data-is-last")&&(t.positionInGroup="end"),t.isIntersecting&&t.positionInGroup==="end"&&x("reachedEnd")}async function o(){var t,n;f.value&&(s==null||s.unobserve(f.value)),await G(),d.value&&(s==null||s.observe((t=d.value)==null?void 0:t.$el)),i.value&&(s==null||s.observe((n=i.value)==null?void 0:n.$el))}async function h(){var t,n;d.value&&(s==null||s.unobserve((t=d.value)==null?void 0:t.$el)),i.value&&(s==null||s.unobserve((n=i.value)==null?void 0:n.$el)),await G(),f.value&&(s==null||s.observe(f.value))}return R(()=>{l.isLoading?h():o()}),V(()=>l.isLoading,t=>{t?h():o()}),(t,n)=>{const y=F;return a(),u("div",ee,[m("div",{class:g(["relative flex h-24 w-full items-center px-6",{invisible:e.page===1}])},[m("span",te,[(a(),u("svg",{role:"none",class:g(["fill-bg-12 h-full w-8 transform-gpu will-change-transform rtl:rotate-180",{hidden:e.transparent}]),viewBox:"0 0 6 38",xmlns:"http://www.w3.org/2000/svg"},se,2)),m("span",re,N(e.page),1)]),m("span",{class:g(["bg-bg-12 block h-2 w-[10%] overflow-hidden rounded-full ltr:origin-left rtl:origin-right",{"!bg-bg-11":e.transparent}])},null,2)],2),e.isLoading?(a(),u("div",{key:1,ref_key:"skeletonComponent",ref:f,class:g([{"-translate-y-24":e.page===1},"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"]),"data-is-skeleton":"true"},[(a(!0),u(I,null,$(e.items.length,v=>(a(),B(y,{key:v,size:"medium","is-loading":""}))),128))],2)):(a(),u("div",{key:0,class:g([{"-translate-y-24":e.page===1},"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"])},[P(y,{ref_key:"firstTitleComponent",ref:d,size:"medium","data-is-first":"true",data:p(r).firstEntry},null,8,["data"]),(a(!0),u(I,null,$(p(r).entries,(v,w)=>(a(),B(y,{key:w,size:"medium",data:v},null,8,["data"]))),128)),e.items.length>1?(a(),B(y,{key:0,ref_key:"lastTitleComponent",ref:i,size:"medium","data-is-last":"true",data:p(r).lastEntry},null,8,["data"])):b("",!0)],2))])}}}),oe=T({__name:"TitlesRenderer",props:{maxPage:null,data:null,transparent:{type:Boolean},isLoading:{type:Boolean}},emits:["loadNextPage"],setup(e,{emit:x}){const l=e,r=S(()=>{const n=Object.keys(l.data).map(y=>Number(y));return n.length?Math.max(...n):0}),d=S(()=>{const n=[];for(let y=1;y<=r.value;y++)n.push(l.data[y]);return n});function i(n){n>=l.maxPage||l.data[n+1]||x("loadNextPage",n+1)}const f=C(1496);function s(){const n=document.querySelectorAll(".titles-renderer-group");return n.length?n[n.length-1].clientHeight:0}function c(){r.value>=l.maxPage||l.isLoading||x("loadNextPage",r.value+1)}let{list:o,containerProps:h,wrapperProps:t}=q(d,{itemHeight:f.value,overscan:3});return j(window,"resize",A(()=>f.value=s(),1e3)),V(f,()=>{const n=q(d,{itemHeight:f.value});o=n.list,h=n.containerProps,t=n.wrapperProps}),R(async()=>{await G(),f.value=s()}),(n,y)=>{const v=ie;return a(),u("div",null,[m("div",O(p(h),{class:"hide-scrollbar h-full transform-gpu p-8"}),[m("div",H(M(p(t))),[(a(!0),u(I,null,$(p(o),w=>(a(),B(v,{key:w.index,transparent:e.transparent,page:Number(w.index+1),items:w.data,onReachedEnd:E=>i(Number(w.index+1))},null,8,["transparent","page","items","onReachedEnd"]))),128)),p(r)<e.maxPage?(a(),B(v,{key:0,page:p(r)+1,transparent:e.transparent,items:Array(24).fill({}),"is-loading":!0,onOnInView:c},null,8,["page","transparent","items"])):b("",!0)],16)],16)])}}}),ue={class:"flex w-full flex-col"},de={key:0,class:"flex w-full pb-24"},ce={key:0,class:"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"},ge={key:1,class:"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"},ye=T({__name:"TitleList",props:{title:null,icon:null,style:null,aligned:{type:Boolean},transparent:{type:Boolean},secondaryTitleType:{type:Boolean},data:null,resultInfo:null,isLoading:{type:Boolean}},emits:["pageChanged"],setup(e){const x=Z(),{infiniteScrolling:l}=D();return V(()=>x.query.page,r=>{var d;l.value||(d=document.getElementById("main-content-app"))==null||d.scrollIntoView({behavior:"smooth"})}),(r,d)=>{var o,h;const i=F,f=Y,s=oe,c=U;return a(),u("div",{id:"title-list-result",class:g(["mt-[-2.4rem] flex w-full flex-shrink-0 flex-col gap-20",{"!mt-[-4.7rem]":e.aligned}])},[P(c,{title:e.title,foreground:(o=e.style)==null?void 0:o.foreground,"shadow-background":(h=e.style)==null?void 0:h.shadowFore,transparent:e.transparent,"secondary-title-type":e.secondaryTitleType,icon:e.icon,class:"h-[calc(100%_+_3.1rem)]"},{header:L(()=>[Q(r.$slots,"header")]),content:L(()=>{var t,n,y,v,w,E;return[m("div",ue,[p(l)?b("",!0):(a(),u("div",de,[e.isLoading?(a(),u("div",ce,[(a(),u(I,null,$(24,k=>P(i,{key:k,"is-loading":"",size:"medium"})),64))])):(a(),u("div",ge,[(a(!0),u(I,null,$(e.resultInfo?e.data[e.resultInfo.page]:[],k=>(a(),B(i,{key:k.id,size:"medium",data:k},null,8,["data"]))),128))]))])),!p(l)&&e.resultInfo?(a(),u("div",{key:1,class:g(["absolute bottom-0 left-1/2 flex h-12 -translate-x-1/2 justify-center px-8",(t=e.style)==null?void 0:t.background])},[m("span",{class:g([{hidden:e.transparent},"absolute top-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:left-0 rtl:right-0"])},[m("span",{class:g(["absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0",(n=e.style)==null?void 0:n.shadowFore])},null,2)],2),m("span",{class:g([{hidden:e.transparent},"absolute top-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:right-0 rtl:left-0"])},[m("span",{class:g(["absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0",(y=e.style)==null?void 0:y.shadowFore])},null,2)],2),m("span",{class:g([{hidden:e.transparent},"absolute bottom-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:right-full rtl:left-full"])},[m("span",{class:g(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0",(v=e.style)==null?void 0:v.shadowBack])},null,2)],2),m("span",{class:g([{hidden:e.transparent},"absolute bottom-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:left-full rtl:right-full"])},[m("span",{class:g(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0",(w=e.style)==null?void 0:w.shadowBack])},null,2)],2),P(f,{"max-page":e.resultInfo.pages,"is-loading":e.isLoading,"selected-page":e.resultInfo.page,onPageChanged:d[0]||(d[0]=k=>r.$emit("pageChanged",k))},null,8,["max-page","is-loading","selected-page"])],2)):b("",!0),p(l)?(a(),B(s,{key:2,class:g(["h-[calc(100vh_-_11.4em_-_1.5em_-_var(--header-size)_*_1px)]",{"!h-[calc(100vh_-_11.4em_+_2.3em_-_var(--header-size)_*_1px)]":e.aligned}]),"is-loading":e.isLoading,transparent:e.transparent,data:e.data,"max-page":((E=e.resultInfo)==null?void 0:E.pages)||1,onLoadNextPage:d[1]||(d[1]=k=>r.$emit("pageChanged",k))},null,8,["class","is-loading","transparent","data","max-page"])):b("",!0)])]}),_:3},8,["title","foreground","shadow-background","transparent","secondary-title-type","icon"])],2)}}});export{ye as _};
