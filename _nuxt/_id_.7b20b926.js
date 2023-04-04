import{d as z,b as G,k as N,r as L,o as g,e as T,f,h as F,g as w,a3 as M,a4 as U,t as O,L as pe,Q as q,R as Z,S as J,D as X,E as R,ae as le,aj as se,l as K,V as j,F as W,w as Y,G as H,M as oe,T as ee,af as fe,C as te,ap as ve,N as Q,O as ye,a9 as me,m as ne,aq as _e,I as ce,ar as be,j as ge,$ as he,J as xe,c as we,aa as ke,ac as Se,as as Te}from"./entry.386a7022.js";import{v as V,r as Pe,f as $e,n as Ee,s as Ce,q as Le,e as Ie,a as De,o as Ae}from"./welcome.vue.55b1dffd.js";import{_ as Ne}from"./FormDropdown.vue.bd7300b4.js";import{u as ue}from"./useBackground.9b9a7de9.js";/* empty css                       *//* empty css                           *//* empty css                             */import"./TitleSlider.vue.e81776af.js";/* empty css                             */import"./SidebarMain.vue.f11432f7.js";import"./FormInput.cb969cbe.js";/* empty css                              *//* empty css                                  *//* empty css                    */const ae=l=>(Z("data-v-229629f6"),l=l(),J(),l),Fe={id:"episode-section",class:"local-numbers my-12 flex min-h-full w-full cursor-default flex-col overflow-visible rounded-xl pb-32"},Oe={class:"relative z-10 -mb-20 flex w-full justify-end"},Be={class:"flex w-full flex-col flex-nowrap gap-12 overflow-y-auto px-2"},Re={class:"items- relative flex w-full flex-col flex-nowrap overflow-visible p-4"},je={class:"relative mx-4 flex items-center"},qe={class:"text-fonts-50 whitespace-nowrap rounded-xl rounded-b-none p-2 px-4 text-3xl font-semibold"},He={class:"text-fonts-50 relative flex text-3xl font-bold"},Ve=ae(()=>f("span",{class:"bg-bg-1 absolute top-1/3 h-3 w-3 rounded-full blur-lg rtl:right-1/2 rtl:left-full"},null,-1)),Me={class:"flex flex-row flex-wrap items-center gap-8 px-8 !text-base"},Ue=["onClick"],ze=ae(()=>f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0H0V30H8L8 8.34204L8 0ZM8 8.34204L7.99611 8.34485L7.99914 8.34212L7.99914 4C7.99914 6.92963 6.92984 8.96704 6.14398 9.93857C6.02543 10.063 5.91246 10.1875 5.80492 10.312C5.78418 10.3319 5.76392 10.3507 5.74418 10.3684L5.7979 10.3201C2.85283 13.7386 3.99163 17.1976 5.90023 19.4823L5.74423 19.3421C6.49593 20.0176 7.99914 22.2948 7.99914 25.9999L7.99914 21.3683L7.99706 21.3665L8 21.3684L8 8.34204Z"},null,-1)),We=[ze],Ge=ae(()=>f("span",{class:"bg-primary-500 shadow-primary-500 absolute top-1/2 h-[60%] w-[2px] -translate-y-1/2 rounded-full opacity-100 shadow-[0_0_8px_1px] ltr:left-1 rtl:right-1"},null,-1)),Qe=z({__name:"PlayerEpisode",props:{selectedEpisode:null,data:null},emits:["selected"],setup(l,{emit:k}){const t=l,{t:x}=G(),n=N(()=>{const v={};for(const a of t.data)a.season&&(v[a.season.toString()]||(v[a.season.toString()]=[]),v[a.season.toString()].push(a));return v}),s=N(()=>Object.keys(n.value).map(v=>({value:v,title:`${x("season")} ${v}`}))),d=L("ALL");return(v,a)=>{const i=Ne;return g(),T("div",Fe,[f("div",Oe,[F(i,{title:v.$t("season"),list:w(s),searchable:"","has-default-all":"",style:{foreground:"bg-bg-11"},onOnChange:a[0]||(a[0]=b=>d.value=b[0])},null,8,["title","list"])]),f("div",Be,[(g(!0),T(M,null,U(w(d)!="ALL"?{[w(d)]:w(n)[w(d)]}:w(n),(b,S)=>(g(),T("section",{key:S,"aria-label":"item",class:"flex w-full flex-col gap-8 text-base"},[f("header",Re,[f("div",je,[f("h6",qe,O(v.$t("season")),1),f("span",He,[pe(O(S)+" ",1),Ve])])]),f("ul",Me,[(g(!0),T(M,null,U(b,m=>(g(),T("li",{key:m.file_id,class:q(["bg-bg-11 hover:bg-bg-11 group relative flex min-w-[12em] !cursor-pointer justify-center rounded-xl py-3 opacity-90 transition-colors hover:opacity-100 ltr:rounded-l-none rtl:rounded-r-none",{"!bg-bg-9 selected-episode !cursor-default !opacity-100":m.file_id===l.selectedEpisode}]),onClick:C=>k("selected",m.file_id)},[(g(),T("svg",{class:q(["fill-bg-11 absolute top-0 h-full rounded-r-xl ltr:right-full ltr:translate-x-[1px] ltr:rotate-180 rtl:left-full rtl:translate-x-[-1px]",{"!fill-bg-9 ":m.file_id===l.selectedEpisode}]),viewBox:"0 0 8 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},We,2)),Ge,f("p",{class:q(["opacity-40 transition-opacity group-hover:opacity-80",{"!opacity-100":m.file_id===l.selectedEpisode}])},O(v.$t("episode"))+" "+O(m.episode_number),3)],10,Ue))),128))])]))),128))])])}}}),Xe=X(Qe,[["__scopeId","data-v-229629f6"]]),Ke=l=>(Z("data-v-368bdf5f"),l=l(),J(),l),Ze={key:0,title:"",class:"child-item auto-dir bg-bg-13/50 border-bg-1/10 absolute right-4 bottom-full z-20 mb-7 flex h-[12em] w-[28em] cursor-default rounded-xl border-2 p-4 backdrop-blur-lg"},Je={class:"flex flex-col flex-nowrap gap-8 overflow-y-auto px-2"},Ye=["aria-label"],et={class:"flex w-full flex-row flex-nowrap items-center gap-2"},tt={class:"!text-fonts-200 whitespace-nowrap font-semibold"},lt=Ke(()=>f("span",{class:"bg-bg-10 h-1 w-full rounded-full"},null,-1)),st={class:"flex flex-row flex-wrap items-center gap-4 !text-xs"},ot=["onClick"],nt=z({__name:"PlayerSubtitle",props:{playerData:null},setup(l){const k=l,{t}=G(),x=N(()=>[{title:t("subtitle.subtitle"),lable:"subtitle",selectedOption:n.value,select:c=>n.value=c,options:[{title:t("subtitle.persian"),value:"fa"},{title:t("subtitle.english"),value:"en"},{title:t("subtitle.persianAndEnglish"),value:"fa+en"},{title:t("subtitle.withoutSubtitle"),value:"none"}]},{title:t("subtitle.subtitleSize"),lable:"subtitle size",selectedOption:s.value,select:c=>s.value=c,options:[{title:t("subtitle.small"),value:"0.5"},{title:t("subtitle.medium"),value:"0.75"},{title:t("subtitle.huge"),value:"1.25"},{title:t("subtitle.veryHuge"),value:"1.50"}]},{title:t("subtitle.subtitleColor"),lable:"subtitle text color",selectedOption:d.value,select:c=>d.value=c,options:[{title:t("subtitle.yellow"),value:"#FF0"},{title:t("subtitle.white"),value:"#FFF"},{title:t("subtitle.cyan"),value:"#0FF"},{title:t("subtitle.purple"),value:"#F0F"}]},{title:t("subtitle.subtitleBackground"),lable:"subtitle background color",selectedOption:v.value,select:c=>v.value=c,options:[{title:t("subtitle.transparent"),value:"0"},{title:t("subtitle.acrylic"),value:"acrylic"},{title:t("subtitle.dimedBlack"),value:"0.5"},{title:t("subtitle.black"),value:"1"}]}]),n=R("preferredLanguage","fa"),s=R("preferredSize","0.75"),d=R("preferredColor","#FFF"),v=R("preferredBackground","acrylic"),a=".vjs-subtitle",i=L(!1),b=document.querySelector(a),S=document.querySelector(a+" .clickable-btn"),m=V.getAllPlayers()[0];le(S,"click",()=>i.value=!i.value),se(b,()=>i.value=!1),K(()=>{C(),h(),B(),$(),E()});function C(){k.playerData.subtitle.fa&&m.addRemoteTextTrack({kind:"subtitles",label:"فارسی",language:"fa",id:"track1",src:k.playerData.subtitle.fa,default:!0,mode:"showing"},!0),k.playerData.subtitle.en&&m.addRemoteTextTrack({kind:"subtitles",label:"انگلیسی",language:"en",id:"track2",src:k.playerData.subtitle.en,default:!1,mode:"showing"},!0)}function h(){try{const c=m.textTracks(),r=Array.from(c).filter(o=>o.label!=="segment-metadata");for(const o of r){const y=o.language===n.value||n.value==="fa+en";o.mode=y?"showing":"hidden"}m.textTrackSettings.updateDisplay()}catch(c){console.error("updateLanguage",c)}}function B(){try{m.textTrackSettings.setValues({color:d.value}),m.textTrackSettings.updateDisplay()}catch(c){console.error("updateLanguage",c)}}function $(){try{m.textTrackSettings.setValues({fontPercent:Number(s.value)}),m.textTrackSettings.updateDisplay()}catch(c){console.error("updateLanguage",c)}}function E(){var c,r;try{v.value!=="acrylic"?((c=document.querySelector(".vjs-text-track-display"))==null||c.classList.remove("acrylic"),m.textTrackSettings.setValues({backgroundOpacity:v.value})):((r=document.querySelector(".vjs-text-track-display"))==null||r.classList.add("acrylic"),m.textTrackSettings.setValues({backgroundOpacity:"0"})),m.textTrackSettings.updateDisplay()}catch(o){console.error("updateLanguage",o)}}return j(n,()=>h()),j(d,()=>B()),j(s,()=>$()),j(v,()=>E()),(c,r)=>(g(),W(ee,{to:a},[F(oe,{name:"player-options"},{default:Y(()=>[w(i)?(g(),T("div",Ze,[f("div",Je,[(g(!0),T(M,null,U(w(x),o=>(g(),T("section",{key:o.lable,"aria-label":o.lable,class:"flex w-full flex-col gap-8 text-base"},[f("header",et,[f("h6",tt,O(o.title),1),lt]),f("ul",st,[(g(!0),T(M,null,U(o.options,y=>(g(),T("li",{key:y.title,class:q(["bg-bg-11/50 hover:bg-bg-11 flex min-w-[9em] !cursor-pointer justify-center rounded-xl p-2 transition-colors",{"!bg-primary-500 !hover:bg-bg-primary-500 !cursor-default":o.selectedOption===y.value}]),onClick:P=>o.select(y.value)},O(y.title),11,ot))),128))])],8,Ye))),128))])])):H("",!0)]),_:1})]))}}),at=X(nt,[["__scopeId","data-v-368bdf5f"]]),it=l=>(Z("data-v-dff35305"),l=l(),J(),l),rt={key:0,title:"",class:"child-item auto-dir bg-bg-13/50 border-bg-1/10 absolute right-4 bottom-full z-20 mb-7 flex h-[12em] w-[28em] cursor-default rounded-xl border-2 p-4 backdrop-blur-lg"},ut={class:"flex flex-col flex-nowrap gap-8 overflow-y-auto px-2"},ct=["aria-label"],dt={class:"flex w-full flex-row flex-nowrap items-center gap-2"},pt={class:"!text-fonts-200 whitespace-nowrap font-semibold"},ft=it(()=>f("span",{class:"bg-bg-10 h-1 w-full rounded-full"},null,-1)),vt={class:"flex flex-row flex-wrap items-center gap-4 !text-xs"},yt=["onClick"],mt=z({__name:"PlayerSettings",emits:["reloadPlayer"],setup(l,{emit:k}){const{t}=G(),x=N(()=>[{title:t("playerSettings.audioChannels"),lable:"Audio channel",selectedOption:n.value,select:h=>n.value=h,options:[{title:t("playerSettings.auto"),value:"default"},{title:t("playerSettings.6Channels"),value:"2ch"},{title:t("playerSettings.2Channels"),value:"6ch"}]},{title:t("playerSettings.playbackSpeed"),lable:"Playback speed",selectedOption:s.value,select:h=>s.value=h,options:[{title:"0.5",value:"0.5"},{title:t("playerSettings.normal"),value:"1"},{title:"1.5",value:"1.5"},{title:"2",value:"2"}]},{title:t("playerSettings.bufferTime"),lable:"Buffer time",selectedOption:d.value,select:h=>d.value=h,options:[{title:`1 ${t("playerSettings.minutes")}`,value:"60"},{title:`2.5 ${t("playerSettings.minutes",{Pluralization:"s"})}`,value:"150"},{title:`5 ${t("playerSettings.minutes",{Pluralization:"s"})}`,value:"300"}]}]),n=R("preferredAudioChannel","default"),s=R("preferredPlaybackSpeed","1"),d=R("preferredbufferTime","60"),v=".vjs-settings",a=L(!1),i=document.querySelector(v),b=document.querySelector(v+" .clickable-btn");le(b,"click",()=>a.value=!a.value),se(i,()=>a.value=!1);const S=V.getAllPlayers()[0];K(()=>{m(),C()});function m(){try{S.playbackRate(Number(s.value))}catch(h){console.error("updatePlaybackSpeed",h)}}async function C(){try{for(;!S.tech({IWillNotUseThisInPlugins:!0}).vhs;)await new Promise(h=>setTimeout(h,100));S.tech({IWillNotUseThisInPlugins:!0}).vhs.options_.externVhs.MAX_GOAL_BUFFER_LENGTH=parseInt(d.value),S.tech({IWillNotUseThisInPlugins:!0}).vhs.options_.externVhs.GOAL_BUFFER_LENGTH=parseInt(d.value)}catch(h){console.error("updateBufferTime",h)}}return j(n,()=>setTimeout(()=>k("reloadPlayer"),100)),j(s,()=>m()),j(d,()=>C()),(h,B)=>(g(),W(ee,{to:v},[F(oe,{name:"player-options"},{default:Y(()=>[w(a)?(g(),T("div",rt,[f("div",ut,[(g(!0),T(M,null,U(w(x),$=>(g(),T("section",{key:$.lable,"aria-label":$.lable,class:"flex w-full flex-col gap-8 text-base"},[f("header",dt,[f("h6",pt,O($.title),1),ft]),f("ul",vt,[(g(!0),T(M,null,U($.options,E=>(g(),T("li",{key:E.title,class:q(["local-numbers bg-bg-11/50 hover:bg-bg-11 flex min-w-[9em] !cursor-pointer justify-center rounded-xl p-2 transition-colors",{"!bg-primary-500 !hover:bg-bg-primary-500 !cursor-default":$.selectedOption===E.value}]),onClick:c=>$.select(E.value)},O(E.title),11,yt))),128))])],8,ct))),128))])])):H("",!0)]),_:1})]))}}),_t=X(mt,[["__scopeId","data-v-dff35305"]]),ie=l=>(Z("data-v-b00900f7"),l=l(),J(),l),bt={class:"absolute bottom-24 right-4 flex flex-col gap-2"},gt=ie(()=>f("span",{class:"shadow"},null,-1)),ht={class:"content"},xt=ie(()=>f("span",{class:"shadow"},null,-1)),wt={class:"content"},kt=ie(()=>f("span",{class:"shadow"},null,-1)),St={class:"content"},Tt={class:"content"},Pt=z({__name:"PlayerSideActions",props:{options:null},emits:["play-next-episode"],setup(l,{emit:k}){const t=l,x=V.getAllPlayers()[0],n=N(()=>{if(t.options.intro_start)return m(t.options.intro_start)}),s=N(()=>{if(t.options.intro_end)return m(t.options.intro_end)}),d=N(()=>{if(t.options.previously_start)return m(t.options.previously_start)}),v=N(()=>{if(t.options.previously_end)return m(t.options.previously_end)}),a=N(()=>{if(t.options.end)return m(t.options.end)}),i=L({visible:!1,progress:0}),b=L({visible:!1,progress:0}),S=L({visible:!1,progress:0});K(()=>x.on("timeupdate",fe(()=>C(Math.floor(x.currentTime())),1e3)));function m(r){const[o,y,P]=r.split(":");return parseInt(o)*3600+parseInt(y)*60+parseInt(P)}function C(r){typeof n.value=="number"&&typeof s.value=="number"&&(r>=n.value&&r<=s.value?(i.value.visible=!0,i.value.progress=(r-n.value)/(s.value-n.value)):i.value.visible=!1),typeof d.value=="number"&&typeof v.value=="number"&&(r>=d.value&&r<=v.value?(b.value.visible=!0,b.value.progress=(r-d.value)/(v.value-d.value)):b.value.visible=!1),typeof a.value=="number"&&(r>=a.value?B():S.value.visible=!1)}const h=L({token:t.options.token,cancelled:!1,busy:!1});async function B(){if(!(h.value.busy||h.value.cancelled)){S.value.visible=!0,h.value.busy=!0;for(let r=0;r<50;r++){if(h.value.cancelled){S.value.progress=0,h.value.busy=!1;return}await Q.core.delay(100),S.value.progress=r/50}if(h.value.cancelled){S.value.progress=0,h.value.busy=!1;return}await Q.core.delay(1100),k("play-next-episode")}}function $(){typeof s.value=="number"&&x.currentTime(s.value)}function E(){typeof v.value=="number"&&x.currentTime(v.value)}function c(){typeof a.value=="number"&&k("play-next-episode")}return(r,o)=>{const y=ye;return g(),W(ee,{to:"#player"},[f("div",bt,[F(ve,{name:"actions",appear:""},{default:Y(()=>[w(i).visible?(g(),T("span",{key:"intro",class:"action",onClick:$},[f("span",{class:"bar",style:te(`transform: scaleX(${w(i).progress})`)},null,4),gt,f("div",ht,[F(y,{name:"ph:arrow-clockwise-bold"}),f("p",null,O(r.$t("skipIntro")),1)])])):H("",!0),w(b).visible?(g(),T("span",{key:"previous",class:"action",onClick:E},[f("span",{class:"bar",style:te(`transform: scaleX(${w(b).progress})`)},null,4),xt,f("div",wt,[F(y,{name:"ph:arrow-clockwise-bold"}),f("p",null,O(r.$t("skipPreviously")),1)])])):H("",!0),w(S).visible?(g(),T("span",{key:"next-episode",class:"action",onClick:c,onMouseenter:o[0]||(o[0]=P=>w(h).cancelled=!0)},[f("span",{class:q(["bar",{"!hidden":w(h).cancelled===!0}]),style:te(`transform: scaleX(${w(S).progress})`)},null,6),kt,f("div",St,[F(y,{name:"ph:skip-forward-bold"}),f("p",Tt,O(r.$t("nextEpisode")),1)])],32)):H("",!0)]),_:1})])])}}}),$t=X(Pt,[["__scopeId","data-v-b00900f7"]]),Et={key:0,title:"",class:"child-item auto-dir bg-bg-13/50 border-bg-1/10 absolute right-4 bottom-full z-20 mb-7 flex min-h-[12em] w-[10em] cursor-default rounded-xl border-2 py-4 backdrop-blur-lg"},Ct={class:"felx w-full flex-col flex-nowrap gap-8 overflow-y-auto"},Lt={class:"flex w-full flex-col gap-4 text-base"},It={class:"flex flex-col gap-2"},Dt=["onClick"],At={class:"relative"},Nt=z({__name:"PlayerQuality",props:{playerData:null},emits:["reloadPlayer"],setup(l,{emit:k}){const t=l,{t:x}=G(),n=V.getAllPlayers()[0],s=R("preferredAudioChannel","default"),d=R("preferredQuality","AUTO"),v=L(0),a=N(()=>t.playerData.file.m3u8.map(c=>{const r=c.label.replace("خودکار","AUTO");return{label:r,src:c[s.value],selected:r===d.value,height:Number(c.label.replace("p",""))}}));me(()=>{var o;const c=((o=a.value.find(y=>y.selected))==null?void 0:o.label)||"AUTO",r=document.querySelector(".selected-quality-label");c==="AUTO"?r.innerHTML=x("auto"):r.innerHTML=""});let i="";i&&clearInterval(i),i=setInterval(()=>{var r,o,y,P;const c=(y=(o=(r=(n==null?void 0:n.tech({IWillNotUseThisInPlugins:!0})).vhs)==null?void 0:r.selectPlaylist)==null?void 0:o.call(r))==null?void 0:y.attributes.RESOLUTION.height;v.value=c||((P=a.value.find(I=>I.selected))==null?void 0:P.height)||a.value[1].height},2e3),ne(()=>{i&&clearInterval(i)});function b(c){if(C.value=!1,c.selected||!n)return;d.value=c.label;const r=n.paused(),o=n.currentTime(),y=n.playbackRate();n.src(c.src),n.ready(()=>{r||n.play(),n.playbackRate(y),n.currentTime(o)})}function S(){const c=n.tech({IWillNotUseThisInPlugins:!0});let r=0,o=0,y=0;const P=I=>{var e;console.warn(I);const _=n.buffered().end(0);if((_>y+y*.25||_<y-y*.25)&&(o=0,r=0),r<2)r++;else{if(o>=2)return;const u=n.currentTime();n.src(((e=a.value.find(p=>p.selected))==null?void 0:e.src)||a.value[0].src),n.currentTime(u),n.play(),r=0,o++,k("reloadPlayer")}y=Number(_)};c.on("retryplaylist",()=>{P("retryplaylist")}),c.on("blacklistplaylist",()=>{P("blacklistplaylist")}),n.on("seeking",function(){o=0,r=0})}const m=".vjs-quality-selector",C=L(!1),h=document.querySelector(m),B=document.querySelector(m+" .clickable-btn");le(B,"click",()=>C.value=!C.value),se(h,()=>C.value=!1);const $=document.querySelector(".quality-display");$.innerHTML="720p",j(v,()=>$.innerHTML=v.value+"p");const E=a.value.find(c=>c.selected);return n.src((E==null?void 0:E.src)||a.value[0].src),S(),(c,r)=>(g(),W(ee,{to:m},[F(oe,{name:"player-options"},{default:Y(()=>[w(C)?(g(),T("div",Et,[f("div",Ct,[f("section",Lt,[f("ul",It,[(g(!0),T(M,null,U(w(a),o=>(g(),T("li",{key:o.label,class:q(["hover:bg-bg-1/10 hover:!text-fonts-50 !text-fonts-200 relative flex w-full min-w-[9em] cursor-pointer items-center justify-center gap-2 p-3 transition-colors",{"!bg-bg-1/10 !hover:bg-bg-1/20 !text-fonts-50 !cursor-default":o.selected}]),onClick:y=>b(o)},[f("span",{class:q(["bg-primary-500 shadow-primary-500 absolute top-1/2 left-2 h-1/2 w-[2px] -translate-y-1/2 rounded-full opacity-0 shadow-[0_0_8px_1px]",{"!opacity-100":o.selected}])},null,2),f("div",At,O(o.label.replace("AUTO",c.$t("auto"))),1)],10,Dt))),128))])])])])):H("",!0)]),_:1})]))}}),Ft=X(Nt,[["__scopeId","data-v-2e325605"]]),Ot=l=>{l.on("error",async function(k){k.stopImmediatePropagation();const t=this.player().error(),x=(s,d)=>{switch(s){case 200:return"لطفا صبر کنید...";case 404:return"فایل پیدا نشد";case 403:return d.includes("Disable VPN")?"وی پی ان خود را خاموش کنید":d.includes("Not Allowed")?"اشتراک شما به پایان رسیده":d.includes("Banned Account")?"حساب شما مسدود شده":d.includes("Banned IP")?"آی پی شما مسدود شده":"شما مجاز به تماشای این عنوان نیستید";case 406:return"شما بیش از سقف مجاز اشتراک خود تماشا کردید";case 503:return"تماشای این عنوان موقتا غیر فعال شده";case 400:return"درخواست غیر مجاز";default:return"ارور: "+s}},n=s=>{const d=document.querySelector(".vjs-modal-dialog-content");d.innerHTML=s};if(t.code===4){n("");try{const s=await _e(l.currentSrc()),d=x(0,s.data);if(n(d),console.warn({exactError:d}),s.status===200){window.location.reload();return}}catch(s){console.log(s.response);const d=x(s.response.status,s.response.data);n(d),console.warn({exactError:d})}}})},Bt=[Pe,$e,Ee,Ce,Le,Ie,De],Rt=(l,k,{playerData:t,$emit:x,t:n})=>{let s=[];s=Bt;for(const d of s){const v=d({player:l,playerData:t,$emit:x,t:n});v&&(k.registerComponent(v.config.name,v.button),l.getChild("controlBar").addChild(v.config.name,{},v.config.index))}},jt=l=>{window.addEventListener("keydown",t);const k=document.querySelector(".vjs-volume-panel");k&&k.addEventListener("wheel",x);function t(s){s.key==="Tab"&&s.preventDefault(),s.key===" "&&(s.preventDefault(),l.paused()?l.play():l.pause()),s.key==="k"&&(s.preventDefault(),l.paused()?l.play():l.pause()),s.key==="Enter"&&(document.fullscreenElement?l.exitFullscreen():l.requestFullscreen()),s.key==="f"&&(document.fullscreenElement?l.exitFullscreen():l.requestFullscreen()),s.key==="m"&&(l.muted()?l.muted(!1):l.muted(!0)),s.key==="ArrowRight"&&l.currentTime(l.currentTime()+5),s.key==="ArrowLeft"&&l.currentTime(l.currentTime()-5),s.key==="ArrowUp"&&(s.preventDefault(),l.volume(l.volume()+.05)),s.key==="ArrowDown"&&(s.preventDefault(),l.volume(l.volume()-.05))}function x(s){return Math.sign(s.deltaY)<0?l.volume(l.volume()+.05):l.volume(l.volume()-.05),s.preventDefault(),!1}return()=>{window&&window.removeEventListener("keydown",t),k&&k.removeEventListener("wheel",x)}},qt={class:"h-full w-full"},Ht=["poster"],Vt={key:0},Mt=z({__name:"PlayerMain",props:{playerData:null,overlayPlayer:{type:Boolean}},emits:["onVideoEnded","onProgress","onPlay","onPause","onSeek","onPlayerReady","reloadPlayer","playNextEpisode"],setup(l,{expose:k,emit:t}){const x=l,n=ce(),{locale:s,t:d}=G(),v=N(()=>x.playerData.image.cover_webp||x.playerData.image.cover),a=L(!1);let i,b;function S(){i&&(console.log("30nama Player v5.0.0"),m(),C(),x.playerData.info.time&&i.currentTime(x.playerData.info.time),a.value=!0,t("onPlayerReady"))}K(()=>{var P;V.log.level(((P=n.user)!=null&&P.is_admin,"off"));const o={...Ae},y=!!x.playerData.file.m3u8[0].default;o.html5.vhs.experimentalBufferBasedABR=y,o.language=s.value,i=V("player",o,S),i.on("ended",()=>t("onVideoEnded")),i.on("play",()=>t("onPlay")),i.on("pause",()=>t("onPause")),i.on("seeking",I=>t("onSeek",I.target.player.currentTime())),i.on("timeupdate",()=>t("onProgress",i.currentTime(),i)),b=jt(i),Ot(i),Rt(i,V,{playerData:x.playerData,$emit:t,t:d})}),ne(()=>{b&&b(),i&&i.dispose()});function m(){document.querySelectorAll(".vjs-time-control").forEach(y=>{y.addEventListener("click",()=>{const P=document.querySelector(".vjs-remaining-time");if(!P)return;const I=document.querySelector(".vjs-remaining-time"),_=document.querySelector(".vjs-current-time"),e=document.querySelector(".vjs-time-divider"),u=document.querySelector(".vjs-duration");P.style.display===""||P.style.display==="none"?(I.style.display="block",_.style.display="none",e.style.display="none",u.style.display="none"):(I.style.display="none",_.style.display="block",e.style.display="block",u.style.display="block")})})}function C(){const o=i.el().appendChild(document.createElement("div"));o.className="video-title",o.innerHTML=x.playerData.info.title}function h(){i.play()}function B(){i.pause()}function $(o){i.currentTime(o)}function E(){var o;(o=document.getElementById("player"))==null||o.scrollIntoView({behavior:"smooth"})}function c(){return i.isFullscreen_}function r(){i.requestFullscreen()}return k({play:h,pause:B,seek:$,scrollToView:E,isFullscreen:c,fullscreen:r}),(o,y)=>{const P=at,I=_t,_=$t,e=Ft;return g(),T("div",qt,[f("video",{id:"player",class:"video-js h-full w-full",poster:w(v),playsinline:""},null,8,Ht),w(a)?(g(),T("span",Vt,[F(P,{"player-data":l.playerData},null,8,["player-data"]),F(I,{onReloadPlayer:y[0]||(y[0]=u=>t("reloadPlayer"))}),F(_,{options:l.playerData.options,onPlayNextEpisode:y[1]||(y[1]=u=>t("playNextEpisode"))},null,8,["options"]),F(e,{"player-data":l.playerData,onReloadPlayer:y[2]||(y[2]=u=>t("reloadPlayer"))},null,8,["player-data"])])):H("",!0)])}}}),Ut={class:"relative flex h-full w-full items-center justify-center"},zt={key:0,class:"h-full w-full"},Wt={key:1,class:"absolute flex flex-col items-center gap-2 text-2xl"},Gt=f("span",{class:"cover-2 bg-bg-12 absolute inset-0 z-40 opacity-0"},null,-1),rl=z({__name:"[id]",setup(l){const k=ce(),t=be(),x=ge(),n=he(),{t:s}=G(),d=xe(),v=N(()=>n.params.id),a=L(),i=L(!0),b=L(),S=L();let m=!1;we({title:()=>{var _,e;return`${s("seo.30nama")} | ${(_=a.value)!=null&&_.result.info.title?(e=a.value)==null?void 0:e.result.info.title.local:""}`}});function C(_){var u;const e=(u=a.value)==null?void 0:u.result;if(e!=null&&e.continue_watching)if(_){let p=e.hls.find(D=>{var A;return D.info.file_id===((A=e.continue_watching)==null?void 0:A.file_id)});return p||(p=e.hls[0]),{image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:p.info.episode_name||e.info.title.local||e.info.title.english,title:p.info.episode_name||e.info.title.local||e.info.title.english,file_id:p.info.file_id,post_id:e.info.post_id,isSeries:_,time:e.continue_watching.time},options:{intro_end:p.options.intro_end,intro_start:p.options.intro_start,previously_start:p.options.previously_start,previously_end:p.options.previously_end,end:p.options.end,token:p.options.token},subtitle:{...p.file.subtitle},file:{m3u8:p.file.m3u8}}}else{const p=e.hls[0];return{image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:e.info.title.local||e.info.title.english,title:e.info.title.local||e.info.title.english,file_id:p.info.file_id,post_id:e.info.post_id,isSeries:_,time:e.continue_watching.time},options:{intro_end:p.options.intro_end,intro_start:p.options.intro_start,previously_start:p.options.previously_start,previously_end:p.options.previously_end,end:p.options.end,token:p.options.token},subtitle:{...p.file.subtitle},file:{m3u8:p.file.m3u8}}}}function h(_){var p;const e=(p=a.value)==null?void 0:p.result;if(!e)return;const u=e.hls[0];return{image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:e.info.title.local||e.info.title.english,title:e.info.title.local||e.info.title.english,file_id:u.info.file_id,post_id:e.info.post_id,isSeries:_,time:0},options:{intro_end:u.options.intro_end,intro_start:u.options.intro_start,previously_start:u.options.previously_start,previously_end:u.options.previously_end,end:u.options.end,token:u.options.token},subtitle:{...u.file.subtitle},file:{m3u8:u.file.m3u8}}}function B(_){var p,D;const e=(p=a.value)==null?void 0:p.result;if(!e)return;const u=e.hls.find(A=>A.info.file_id===_);u&&((D=S.value)==null||D.scrollToView(),b.value={image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:e.info.title.local||e.info.title.english,title:e.info.title.local||e.info.title.english,file_id:u.info.file_id,post_id:e.info.post_id,isSeries:!0,time:0},options:{intro_end:u.options.intro_end,intro_start:u.options.intro_start,previously_start:u.options.previously_start,previously_end:u.options.previously_end,end:u.options.end,token:u.options.token},subtitle:{...u.file.subtitle},file:{m3u8:u.file.m3u8}},Se(()=>{var A;return(A=S.value)==null?void 0:A.play()}))}function $(_,e){var A;if(e.paused()||!b.value||!e)return;const u=b.value.info.file_id,p=b.value.info.post_id,D=(A=b.value)==null?void 0:A.options.token;P(p,u,Math.floor(_),Math.floor(e.duration()),D)}function E(){var D,A,re;const _=(D=b.value)==null?void 0:D.info.file_id,e=(A=a.value)==null?void 0:A.result;if(!e)return;const u=e.hls.find(de=>de.info.file_id===_);if(!u)return;const p=e.hls[e.hls.indexOf(u)+1];p&&(m=(re=S.value)==null?void 0:re.isFullscreen(),B(p.info.file_id))}function c(){var _;m&&((_=S.value)==null||_.fullscreen())}async function r(){i.value=!0,await Q.core.delay(750),i.value=!1}let o=!1,y=0;function P(_,e,u,p,D){o||u===y||u%30===0&&u>0&&(y=u,o=!0,Q.API.actions.observer(_,e,k.user.user_id,u,p,D),o=!1)}K(async()=>{var u,p;const _=n.query.free==="true";if(!_&&!k.user){t.ignoreNextRoute(),x.push("/auth/login");return}if(a.value=await ke("STREAM::"+v.value,()=>Q.API.actions.stream(Number(v.value),_)),i.value=!1,(u=a.value)!=null&&u.error&&d(a.value.msg,"ERROR"),!((p=a.value)!=null&&p.result))return;a.value.result.image.cover.webp&&ue(a.value.result.image.cover.webp);const e=a.value.result.hls.length>1;a.value.result.continue_watching?b.value=C(e):b.value=h(e)}),ne(()=>ue(""));const I=N(()=>{var _;return(_=a.value)==null?void 0:_.result.hls.map(e=>e.info)});return(_,e)=>{const u=Mt,p=Xe,D=Te;return g(),T("div",Ut,[!w(i)&&w(b)?(g(),T("div",zt,[(g(),W(u,{key:w(b).info.file_id,ref_key:"player",ref:S,"player-data":w(b),onOnProgress:$,onReloadPlayer:r,onPlayNextEpisode:E,onOnVideoEnded:E,onOnPlayerReady:c},null,8,["player-data"])),w(b).info.isSeries&&w(I)?(g(),W(p,{key:0,data:w(I),"selected-episode":Number(w(b).info.file_id),onSelected:B},null,8,["data","selected-episode"])):H("",!0)])):(g(),T("div",Wt,[Gt,f("span",null,[F(D,{class:"flex",type:"triangle"})]),f("p",null,O(_.$t("loading")),1)]))])}}});export{rl as default};
