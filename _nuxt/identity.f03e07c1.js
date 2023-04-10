import{d as v,y as B,p as k,b as C,c as I,o as d,e as f,f as s,g as t,t as o,O as N,E as x,v as S,h as g,w as V,G as j,q as y,H as E,I as T}from"./entry.95f381ee.js";const z={"aria-label":"profile section",class:"flex justify-center"},H={class:"bg-bg-11 flex w-full flex-row flex-wrap items-center justify-center gap-8 rounded-2xl p-4 md:justify-between xl:max-w-[48em]"},P={class:"flex items-center gap-4"},q=["src"],A={class:"flex flex-col flex-nowrap gap-1"},D={class:"line-clamp-1 max-w-[12em] break-all text-xl",dir:"ltr"},G={key:0,class:"text-fonts-200 flex flex-col items-center gap-2 text-sm"},L={class:"text-primary-400 text-xl font-semibold"},J=v({__name:"identity",setup(O){const e=B(),h=k(),{t:n}=C();I({title:()=>`${n("seo.30nama")} | ${n("seo.myProfile")}`});function b(){j.API.actions.logout(),e.logout(),y("session","").value="",y("user","").value="",h.replace("/menu/home")}return(a,R)=>{var l,r,i,c,u,p,_,m;const w=E,$=T;return d(),f("section",z,[s("div",H,[s("div",P,[s("img",{src:`/images/user-types/${(l=t(e).user)==null?void 0:l.user_type}.png`,class:"bg-bg-10 h-24 w-24 rounded-full",alt:"profile picture"},null,8,q),s("div",A,[s("h4",D,o((r=t(e).user)==null?void 0:r.user_name),1),s("p",{class:N(["text-fonts-200 text-sm capitalize",`${(i=t(e).user)==null?void 0:i.user_type}-text`])},o(a.$t(`userTypes.${(c=t(e).user)==null?void 0:c.user_type}`)),3)])]),(p=(u=t(e).user)==null?void 0:u.user_expire)!=null&&p.days?(d(),f("p",G,[x(o(a.$t("profile.daysTillExpire "))+": ",1),s("span",L,o((m=(_=t(e).user)==null?void 0:_.user_expire)==null?void 0:m.days),1)])):S("",!0),g($,{class:"btn-primary-outline text-sm",onClick:b},{default:V(()=>[g(w,{name:"ph:sign-out-fill"}),x(" "+o(a.$t("auth.shared.logout")),1)]),_:1})])])}}});export{J as default};
