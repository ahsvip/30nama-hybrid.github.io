import{d,A as _,B as f,k as o,o as x,e as z,C as S,g as c,D as I}from"./entry.386a7022.js";/* empty css                    */const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var a;const n=l;_(s=>({"71ded496":c(m)}));const e=f();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),r=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:S({width:c(r),height:c(r)})},null,4))}}),v=I(y,[["__scopeId","data-v-11604bcf"]]);export{v as default};
