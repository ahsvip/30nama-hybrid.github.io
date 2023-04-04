import{_ as Yt}from"./FormInput.cb969cbe.js";import{d as St,r as U,b as Nt,E as Mt,o as D,F as lt,g as I,G as Tt,T as Ot,H as Jt,c as Ht,I as zt,j as qt,J as Wt,l as Xt,m as Zt,e as G,h as L,w as j,f as F,K as Ct,L as $t,t as nt,M as Bt,N as ot,O as te,P as ee}from"./entry.386a7022.js";import{_ as ne}from"./nuxt-link.026b96dd.js";import{_ as oe}from"./ContentPop.vue.6c9514b1.js";/* empty css                       *//* empty css                           *//* empty css                             */import"./TitleSlider.vue.e81776af.js";/* empty css                             */import"./SidebarMain.vue.f11432f7.js";import{R as re}from"./welcome.vue.55b1dffd.js";/* empty css                              *//* empty css                                  *//* empty css                    */var ie=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Pt={},S={};let mt;const se=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];S.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};S.getSymbolTotalCodewords=function(t){return se[t]};S.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};S.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');mt=t};S.isKanjiModeEnabled=function(){return typeof mt<"u"};S.toSJIS=function(t){return mt(t)};var X={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(X);function Rt(){this.buffer=[],this.length=0}Rt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ae=Rt;function J(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}J.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};J.prototype.get=function(e,t){return this.data[e*this.size+t]};J.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};J.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ue=J,Lt={};(function(e){const t=S.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,u=[n-7];for(let a=1;a<o-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||o.push([n[u],n[a]]);return o}})(Lt);var Dt={};const le=S.getSymbolSize,At=7;Dt.getPositions=function(t){const i=le(t);return[[0,0],[i-At,0],[0,i-At]]};var vt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,u=0,a=0,f=null,d=null;for(let B=0;B<n;B++){u=a=0,f=d=null;for(let l=0;l<n;l++){let g=o.get(B,l);g===f?u++:(u>=5&&(s+=t.N1+(u-5)),f=g,u=1),g=o.get(l,B),g===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=g,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const f=o.get(u,a)+o.get(u,a+1)+o.get(u+1,a)+o.get(u+1,a+1);(f===4||f===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,u=0,a=0;for(let f=0;f<n;f++){u=a=0;for(let d=0;d<n;d++)u=u<<1&2047|o.get(f,d),d>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|o.get(d,f),d>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,i(o,a,u))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let f=0;f<s;f++){n(f),e.applyMask(f,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(f,o),d<a&&(a=d,u=f)}return u}})(vt);var Z={};const v=X,H=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,i){switch(i){case v.L:return H[(t-1)*4+0];case v.M:return H[(t-1)*4+1];case v.Q:return H[(t-1)*4+2];case v.H:return H[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,i){switch(i){case v.L:return z[(t-1)*4+0];case v.M:return z[(t-1)*4+1];case v.Q:return z[(t-1)*4+2];case v.H:return z[(t-1)*4+3];default:return}};var kt={},$={};const Y=new Uint8Array(512),q=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Y[i]=t,q[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Y[i]=Y[i-255]})();$.log=function(t){if(t<1)throw new Error("log("+t+")");return q[t]};$.exp=function(t){return Y[t]};$.mul=function(t,i){return t===0||i===0?0:Y[q[t]+q[i]]};(function(e){const t=$;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let u=0;u<o.length;u++)n[s+u]^=t.mul(r[s],o[u]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(kt);const Ft=kt;function wt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}wt.prototype.initialize=function(t){this.degree=t,this.genPoly=Ft.generateECPolynomial(this.degree)};wt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Ft.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var ce=wt,Ut={},k={},pt={};pt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var T={};const Vt="[0-9]+",fe="[A-Z $%*+\\-./:]+";let O="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";O=O.replace(/u/g,"\\u");const de="(?:(?![A-Z0-9 $%*+\\-./:]|"+O+`)(?:.|[\r
]))+`;T.KANJI=new RegExp(O,"g");T.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");T.BYTE=new RegExp(de,"g");T.NUMERIC=new RegExp(Vt,"g");T.ALPHANUMERIC=new RegExp(fe,"g");const ge=new RegExp("^"+O+"$"),he=new RegExp("^"+Vt+"$"),me=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");T.testKanji=function(t){return ge.test(t)};T.testNumeric=function(t){return he.test(t)};T.testAlphanumeric=function(t){return me.test(t)};(function(e){const t=pt,i=T;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(k);(function(e){const t=S,i=Z,r=X,o=k,n=pt,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(s);function a(l,g,y){for(let E=1;E<=40;E++)if(g<=e.getCapacity(E,y,l))return E}function f(l,g){return o.getCharCountIndicator(l,g)+4}function d(l,g){let y=0;return l.forEach(function(E){const w=f(E.mode,g);y+=w+E.getBitsLength()}),y}function B(l,g){for(let y=1;y<=40;y++)if(d(l,y)<=e.getCapacity(y,g,o.MIXED))return y}e.from=function(g,y){return n.isValid(g)?parseInt(g,10):y},e.getCapacity=function(g,y,E){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof E>"u"&&(E=o.BYTE);const w=t.getSymbolTotalCodewords(g),c=i.getTotalCodewordsCount(g,y),p=(w-c)*8;if(E===o.MIXED)return p;const m=p-f(E,g);switch(E){case o.NUMERIC:return Math.floor(m/10*3);case o.ALPHANUMERIC:return Math.floor(m/11*2);case o.KANJI:return Math.floor(m/13);case o.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(g,y){let E;const w=r.from(y,r.M);if(Array.isArray(g)){if(g.length>1)return B(g,w);if(g.length===0)return 1;E=g[0]}else E=g;return a(E.mode,E.getLength(),w)},e.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let y=g<<12;for(;t.getBCHDigit(y)-u>=0;)y^=s<<t.getBCHDigit(y)-u;return g<<12|y}})(Ut);var xt={};const ct=S,Kt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,we=1<<14|1<<12|1<<10|1<<4|1<<1,It=ct.getBCHDigit(Kt);xt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ct.getBCHDigit(o)-It>=0;)o^=Kt<<ct.getBCHDigit(o)-It;return(r<<10|o)^we};var _t={};const pe=k;function V(e){this.mode=pe.NUMERIC,this.data=e.toString()}V.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var ye=V;const Ee=k,rt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function x(e){this.mode=Ee.ALPHANUMERIC,this.data=e}x.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=rt.indexOf(this.data[i])*45;r+=rt.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(rt.indexOf(this.data[i]),6)};var Ce=x,Be=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Ae=Be,Ie=k;function K(e){this.mode=Ie.BYTE,typeof e=="string"&&(e=Ae(e)),this.data=new Uint8Array(e)}K.getBitsLength=function(t){return t*8};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var be=K;const Se=k,Ne=S;function _(e){this.mode=Se.KANJI,this.data=e}_.getBitsLength=function(t){return t*13};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Ne.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Me=_,ft={},Te={get exports(){return ft},set exports(e){ft=e}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var u=t.PriorityQueue.make();u.push(r,0);for(var a,f,d,B,l,g,y,E,w;!u.empty();){a=u.pop(),f=a.value,B=a.cost,l=i[f]||{};for(d in l)l.hasOwnProperty(d)&&(g=l[d],y=B+g,E=s[d],w=typeof s[d]>"u",(w||E>y)&&(s[d]=y,u.push(d,y),n[d]=f))}if(typeof o<"u"&&typeof s[o]>"u"){var c=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(c)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Te);(function(e){const t=k,i=ye,r=Ce,o=be,n=Me,s=T,u=S,a=ft;function f(c){return unescape(encodeURIComponent(c)).length}function d(c,p,m){const h=[];let C;for(;(C=c.exec(m))!==null;)h.push({data:C[0],index:C.index,mode:p,length:C[0].length});return h}function B(c){const p=d(s.NUMERIC,t.NUMERIC,c),m=d(s.ALPHANUMERIC,t.ALPHANUMERIC,c);let h,C;return u.isKanjiModeEnabled()?(h=d(s.BYTE,t.BYTE,c),C=d(s.KANJI,t.KANJI,c)):(h=d(s.BYTE_KANJI,t.BYTE,c),C=[]),p.concat(m,h,C).sort(function(A,N){return A.index-N.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function l(c,p){switch(p){case t.NUMERIC:return i.getBitsLength(c);case t.ALPHANUMERIC:return r.getBitsLength(c);case t.KANJI:return n.getBitsLength(c);case t.BYTE:return o.getBitsLength(c)}}function g(c){return c.reduce(function(p,m){const h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}function y(c){const p=[];for(let m=0;m<c.length;m++){const h=c[m];switch(h.mode){case t.NUMERIC:p.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:p.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:p.push([h,{data:h.data,mode:t.BYTE,length:f(h.data)}]);break;case t.BYTE:p.push([{data:h.data,mode:t.BYTE,length:f(h.data)}])}}return p}function E(c,p){const m={},h={start:{}};let C=["start"];for(let b=0;b<c.length;b++){const A=c[b],N=[];for(let R=0;R<A.length;R++){const M=A[R],Q=""+b+R;N.push(Q),m[Q]={node:M,lastCount:0},h[Q]={};for(let et=0;et<C.length;et++){const P=C[et];m[P]&&m[P].node.mode===M.mode?(h[P][Q]=l(m[P].lastCount+M.length,M.mode)-l(m[P].lastCount,M.mode),m[P].lastCount+=M.length):(m[P]&&(m[P].lastCount=M.length),h[P][Q]=l(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,p))}}C=N}for(let b=0;b<C.length;b++)h[C[b]].end=0;return{map:h,table:m}}function w(c,p){let m;const h=t.getBestModeForData(c);if(m=t.from(p,h),m!==t.BYTE&&m.bit<h.bit)throw new Error('"'+c+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(h));switch(m===t.KANJI&&!u.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new i(c);case t.ALPHANUMERIC:return new r(c);case t.KANJI:return new n(c);case t.BYTE:return new o(c)}}e.fromArray=function(p){return p.reduce(function(m,h){return typeof h=="string"?m.push(w(h,null)):h.data&&m.push(w(h.data,h.mode)),m},[])},e.fromString=function(p,m){const h=B(p,u.isKanjiModeEnabled()),C=y(h),b=E(C,m),A=a.find_path(b.map,"start","end"),N=[];for(let R=1;R<A.length-1;R++)N.push(b.table[A[R]].node);return e.fromArray(g(N))},e.rawSplit=function(p){return e.fromArray(B(p,u.isKanjiModeEnabled()))}})(_t);const tt=S,it=X,Pe=ae,Re=ue,Le=Lt,De=Dt,dt=vt,gt=Z,ve=ce,W=Ut,ke=xt,Fe=k,st=_t;function Ue(e,t){const i=e.size,r=De.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||i<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function Ve(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function xe(e,t){const i=Le.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(o+s,n+u,!0,!0):e.set(o+s,n+u,!1,!0)}}function Ke(e,t){const i=e.size,r=W.getEncodedBits(t);let o,n,s;for(let u=0;u<18;u++)o=Math.floor(u/3),n=u%3+i-8-3,s=(r>>u&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function at(e,t,i){const r=e.size,o=ke.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function _e(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let u=i-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,u-a)){let f=!1;s<t.length&&(f=(t[s]>>>n&1)===1),e.set(o,u-a,f),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Qe(e,t,i){const r=new Pe;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Fe.getCharCountIndicator(a.mode,e)),a.write(r)});const o=tt.getSymbolTotalCodewords(e),n=gt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const u=(s-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return Ge(r,e,t)}function Ge(e,t,i){const r=tt.getSymbolTotalCodewords(t),o=gt.getTotalCodewordsCount(t,i),n=r-o,s=gt.getBlocksCount(t,i),u=r%s,a=s-u,f=Math.floor(r/s),d=Math.floor(n/s),B=d+1,l=f-d,g=new ve(l);let y=0;const E=new Array(s),w=new Array(s);let c=0;const p=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const N=A<a?d:B;E[A]=p.slice(y,y+N),w[A]=g.encode(E[A]),y+=N,c=Math.max(c,N)}const m=new Uint8Array(r);let h=0,C,b;for(C=0;C<c;C++)for(b=0;b<s;b++)C<E[b].length&&(m[h++]=E[b][C]);for(C=0;C<l;C++)for(b=0;b<s;b++)m[h++]=w[b][C];return m}function je(e,t,i,r){let o;if(Array.isArray(e))o=st.fromArray(e);else if(typeof e=="string"){let f=t;if(!f){const d=st.rawSplit(e);f=W.getBestVersionForData(d,i)}o=st.fromString(e,f||40)}else throw new Error("Invalid data");const n=W.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Qe(t,i,o),u=tt.getSymbolSize(t),a=new Re(u);return Ue(a,t),Ve(a),xe(a,t),at(a,i,0),t>=7&&Ke(a,t),_e(a,s),isNaN(r)&&(r=dt.getBestMask(a,at.bind(null,a,i))),dt.applyMask(r,a),at(a,i,r),{modules:a,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Pt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=it.M,o,n;return typeof i<"u"&&(r=it.from(i.errorCorrectionLevel,it.M),o=W.from(i.version),n=dt.from(i.maskPattern),i.toSJISFunc&&tt.setToSJISFunction(i.toSJISFunc)),je(t,o,r,n)};var Qt={},yt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,u=o.modules.data,a=e.getScale(s,n),f=Math.floor((s+n.margin*2)*a),d=n.margin*a,B=[n.color.light,n.color.dark];for(let l=0;l<f;l++)for(let g=0;g<f;g++){let y=(l*f+g)*4,E=n.color.light;if(l>=d&&g>=d&&l<f-d&&g<f-d){const w=Math.floor((l-d)/a),c=Math.floor((g-d)/a);E=B[u[w*s+c]?1:0]}r[y++]=E.r,r[y++]=E.g,r[y++]=E.b,r[y]=E.a}}})(yt);(function(e){const t=yt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,f=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(f=r()),a=t.getOptions(a);const d=t.getImageWidth(n.modules.size,a),B=f.getContext("2d"),l=B.createImageData(d,d);return t.qrToImageData(l.data,n,a),i(B,f,d),B.putImageData(l,0,0),f},e.renderToDataURL=function(n,s,u){let a=u;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const f=e.render(n,s,a),d=a.type||"image/png",B=a.rendererOpts||{};return f.toDataURL(d,B.quality)}})(Qt);var Gt={};const Ye=yt;function bt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ut(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Oe(e,t,i){let r="",o=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),f=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(r+=n?ut("M",a+i,.5+f+i):ut("m",o,0),o=0,n=!1),a+1<t&&e[u+1]||(r+=ut("h",s),s=0)):o++}return r}Gt.render=function(t,i,r){const o=Ye.getOptions(i),n=t.modules.size,s=t.modules.data,u=n+o.margin*2,a=o.color.light.a?"<path "+bt(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+bt(o.color.dark,"stroke")+' d="'+Oe(s,n,o.margin)+'"/>',d='viewBox="0 0 '+u+" "+u+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+f+`</svg>
`;return typeof r=="function"&&r(null,l),l};const Je=ie,ht=Pt,jt=Qt,He=Gt;function Et(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!Je())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(a,f){try{const d=ht.create(i,r);a(e(d,t,r))}catch(d){f(d)}})}try{const a=ht.create(i,r);o(null,e(a,t,r))}catch(a){o(a)}}ht.create;Et.bind(null,jt.render);var ze=Et.bind(null,jt.renderToDataURL);Et.bind(null,function(e,t,i){return He.render(e,i)});const qe=St({__name:"CaptchaRecaptcha",emits:["update:modelValue"],setup(e,{expose:t,emit:i}){const r=U(),{locale:o}=Nt(),n=Mt("theme","dark"),s=U(""),u=U(!0);function a(){var l;s.value="",(l=r.value)==null||l.execute()}function f(){var l;(l=r.value)==null||l.reset()}function d(l){s.value=l,i("update:modelValue",l)}async function B(){for(a();!s.value;)await new Promise(l=>setTimeout(l,100));return s.value}return t({getResponse:B,execute:a,reset:f}),(l,g)=>(D(),lt(Ot,{to:"body"},[I(u)?(D(),lt(I(re),{key:0,ref_key:"captcha",ref:r,theme:I(n),language:I(o),size:"invisible",sitekey:"6LdwF4MaAAAAAArTIa8nL8MfBlo062N3qRkhl0S1",onExpired:f,onVerify:d},null,8,["theme","language"])):Tt("",!0)]))}}),We={class:"test flex h-full items-center justify-center"},Xe={class:"flex w-full flex-row flex-wrap items-center justify-center gap-20 text-base xl:gap-40"},Ze=["onSubmit"],$e={key:0,class:"mt-4 text-center text-sm text-red-400"},tn={class:"flex flex-col items-center justify-center gap-8"},en={class:"relative flex h-[200px] w-[200px]"},nn=["src"],on=["onDrag"],rn={class:"relative flex h-8 w-[7em] text-center"},sn={key:0,class:"absolute w-full select-text text-center font-mono text-2xl"},an={key:1,class:"absolute w-full text-center font-mono text-2xl blur-[8px]"},An=St({__name:"login",setup(e){const{loadUserData:t}=Jt(),{t:i}=Nt();Ht({title:()=>`${i("seo.30nama")} | ${i("seo.login")}`});const r=zt(),o=qt(),n=Wt(),s=U({user:{value:"",isValid:!1},password:{value:"",isValid:!1},isSubmitting:!1,msg:""}),u=U();async function a(w){r.token=w,n(i("welcome"),"SUCCESS"),Mt("session","").value=w,await t(),s.value.isSubmitting=!1,o.replace("/menu/dashboard")}async function f(){var p,m,h;if(!s.value.user.isValid||!s.value.password.isValid)return;s.value.msg="",s.value.isSubmitting=!0;const w=await((p=u.value)==null?void 0:p.getResponse()),c=await ot.API.actions.login(s.value.user.value,s.value.password.value,w);if(c!=null&&c.success&&((m=c.result)!=null&&m.token))return a(c.result.token);s.value.isSubmitting=!1,(h=u.value)==null||h.reset(),s.value.msg=(c==null?void 0:c.msg)||""}function d(w){if(w.length<3)return i("auth.login.invalidIdentification")}function B(w){if(w.length<6)return i("auth.login.invalidPassword")}const l=U({code:"",url:"",image:""});let g;async function y(){const w=await ot.API.actions.qrlogin_code();console.warn({qrLoginCode:w}),!(!(w!=null&&w.success)||!w.result)&&(l.value.code=w.result.code,l.value.url=w.result.url,l.value.image=await ze(w.result.url,{width:200,margin:2}))}async function E(){var c;const w=await ot.API.actions.qrlogin_login(l.value.code);!w||!w.success||(c=w.result)!=null&&c.token&&(clearInterval(g),a(w.result.token))}return Xt(async()=>{await y(),g=setInterval(E,2500)}),Zt(()=>{clearInterval(g)}),(w,c)=>{const p=Yt,m=te,h=ee,C=ne,b=oe;return D(),G("div",We,[L(b,{foreground:"bg-bg-11",background:"bg-bg-12",title:w.$t("auth.login.title")},{default:j(()=>[F("div",Xe,[F("form",{action:"#",class:"flex min-w-[12em] flex-col xl:min-w-[18em]",onSubmit:Ct(f,["prevent"])},[L(p,{modelValue:I(s).user.value,"onUpdate:modelValue":c[0]||(c[0]=A=>I(s).user.value=A),"is-valid":I(s).user.isValid,"onUpdate:isValid":c[1]||(c[1]=A=>I(s).user.isValid=A),label:w.$t("auth.login.identification"),"label-bg":"bg-bg-11",icon:"ph:fingerprint-fill",type:"text",disable:I(s).isSubmitting,name:"identification",required:"",rules:[d]},null,8,["modelValue","is-valid","label","disable","rules"]),L(p,{modelValue:I(s).password.value,"onUpdate:modelValue":c[2]||(c[2]=A=>I(s).password.value=A),"is-valid":I(s).password.isValid,"onUpdate:isValid":c[3]||(c[3]=A=>I(s).password.isValid=A),label:w.$t("auth.shared.password"),disable:I(s).isSubmitting,"label-bg":"bg-bg-11",icon:"ph:lock-fill",type:"password",name:"password",required:"",rules:[B]},null,8,["modelValue","is-valid","label","disable","rules"]),L(h,{class:"btn-primary mt-2 text-sm",disable:!I(s).password.isValid||!I(s).user.isValid,loading:I(s).isSubmitting,type:"submit"},{default:j(()=>[L(m,{name:"ph:sign-in-fill"}),$t(" "+nt(w.$t("auth.login.login")),1)]),_:1},8,["disable","loading"]),I(s).msg?(D(),G("h4",$e,nt(I(s).msg),1)):Tt("",!0),L(I(qe),{ref_key:"captcha",ref:u},null,512)],40,Ze),F("div",tn,[F("div",en,[L(Bt,{name:"fade-preset"},{default:j(()=>[I(l).image?(D(),lt(C,{key:0,draggable:"false",to:I(l).url,external:"","aria-label":"qr url",target:"_blank"},{default:j(()=>[F("img",{class:"absolute flex h-[200px] w-[200px] rounded-xl bg-white",draggable:"false",src:I(l).image,alt:"qr-code"},null,8,nn)]),_:1},8,["to"])):(D(),G("img",{key:1,class:"pointer-events-none absolute flex h-[200px] w-[200px] rounded-xl bg-white blur-[8px]",src:"data:image/png;base64,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",alt:"qr-code-loading",onDrag:Ct(A=>"",["prevent"])},null,40,on))]),_:1})]),F("div",rn,[L(Bt,{name:"fade-preset"},{default:j(()=>[I(l).code?(D(),G("span",sn,nt(I(l).code),1)):(D(),G("span",an," 12345678 "))]),_:1})])])])]),_:1},8,["title"])])}}});export{An as default};
