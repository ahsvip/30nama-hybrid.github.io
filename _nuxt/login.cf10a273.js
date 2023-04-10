import{_ as Yt}from"./FormInput.637f8e2e.js";import{d as St,r as U,b as Nt,q as Mt,o as D,s as lt,g as B,v as Tt,T as Jt,x as Ot,c as Ht,y as zt,p as qt,z as Wt,A as Xt,B as Zt,C as $t,e as G,h as L,w as j,f as F,D as Et,E as te,t as nt,F as Bt,G as ot,H as ee,I as ne,J as oe}from"./entry.95f381ee.js";import{_ as re}from"./nuxt-link.b23469bb.js";import{_ as ie}from"./ContentPop.vue.38f7e5c5.js";/* empty css                       *//* empty css                           */import{R as se}from"./welcome.vue.1c65ae5a.js";/* empty css                               */import"./splide-extension-grid.esm.3d826a4c.js";/* empty css                        *//* empty css                             */import"./SidebarMain.vue.f7d3a02d.js";/* empty css                              *//* empty css                                  *//* empty css                    */var ae=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Pt={},N={};let mt;const ue=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return ue[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');mt=t};N.isKanjiModeEnabled=function(){return typeof mt<"u"};N.toSJIS=function(t){return mt(t)};var X={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(X);function Rt(){this.buffer=[],this.length=0}Rt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var le=Rt;function O(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}O.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};O.prototype.get=function(e,t){return this.data[e*this.size+t]};O.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};O.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ce=O,Lt={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),a=n===145?26:Math.ceil((n-13)/(2*o-2))*2,s=[n-7];for(let u=1;u<o-1;u++)s[u]=s[u-1]-a;return s.push(6),s.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),a=n.length;for(let s=0;s<a;s++)for(let u=0;u<a;u++)s===0&&u===0||s===0&&u===a-1||s===a-1&&u===0||o.push([n[s],n[u]]);return o}})(Lt);var Dt={};const fe=N.getSymbolSize,At=7;Dt.getPositions=function(t){const i=fe(t);return[[0,0],[i-At,0],[0,i-At]]};var vt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let a=0,s=0,u=0,c=null,f=null;for(let E=0;E<n;E++){s=u=0,c=f=null;for(let h=0;h<n;h++){let d=o.get(E,h);d===c?s++:(s>=5&&(a+=t.N1+(s-5)),c=d,s=1),d=o.get(h,E),d===f?u++:(u>=5&&(a+=t.N1+(u-5)),f=d,u=1)}s>=5&&(a+=t.N1+(s-5)),u>=5&&(a+=t.N1+(u-5))}return a},e.getPenaltyN2=function(o){const n=o.size;let a=0;for(let s=0;s<n-1;s++)for(let u=0;u<n-1;u++){const c=o.get(s,u)+o.get(s,u+1)+o.get(s+1,u)+o.get(s+1,u+1);(c===4||c===0)&&a++}return a*t.N2},e.getPenaltyN3=function(o){const n=o.size;let a=0,s=0,u=0;for(let c=0;c<n;c++){s=u=0;for(let f=0;f<n;f++)s=s<<1&2047|o.get(c,f),f>=10&&(s===1488||s===93)&&a++,u=u<<1&2047|o.get(f,c),f>=10&&(u===1488||u===93)&&a++}return a*t.N3},e.getPenaltyN4=function(o){let n=0;const a=o.data.length;for(let u=0;u<a;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/a/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const a=n.size;for(let s=0;s<a;s++)for(let u=0;u<a;u++)n.isReserved(u,s)||n.xor(u,s,i(o,u,s))},e.getBestMask=function(o,n){const a=Object.keys(e.Patterns).length;let s=0,u=1/0;for(let c=0;c<a;c++){n(c),e.applyMask(c,o);const f=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),f<u&&(u=f,s=c)}return s}})(vt);var Z={};const v=X,H=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,i){switch(i){case v.L:return H[(t-1)*4+0];case v.M:return H[(t-1)*4+1];case v.Q:return H[(t-1)*4+2];case v.H:return H[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,i){switch(i){case v.L:return z[(t-1)*4+0];case v.M:return z[(t-1)*4+1];case v.Q:return z[(t-1)*4+2];case v.H:return z[(t-1)*4+3];default:return}};var kt={},$={};const Y=new Uint8Array(512),q=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Y[i]=t,q[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Y[i]=Y[i-255]})();$.log=function(t){if(t<1)throw new Error("log("+t+")");return q[t]};$.exp=function(t){return Y[t]};$.mul=function(t,i){return t===0||i===0?0:Y[q[t]+q[i]]};(function(e){const t=$;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let a=0;a<r.length;a++)for(let s=0;s<o.length;s++)n[a+s]^=t.mul(r[a],o[s]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const a=n[0];for(let u=0;u<o.length;u++)n[u]^=t.mul(o[u],a);let s=0;for(;s<n.length&&n[s]===0;)s++;n=n.slice(s)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(kt);const Ft=kt;function wt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}wt.prototype.initialize=function(t){this.degree=t,this.genPoly=Ft.generateECPolynomial(this.degree)};wt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Ft.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var de=wt,Ut={},k={},pt={};pt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var T={};const Vt="[0-9]+",ge="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const he="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;T.KANJI=new RegExp(J,"g");T.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");T.BYTE=new RegExp(he,"g");T.NUMERIC=new RegExp(Vt,"g");T.ALPHANUMERIC=new RegExp(ge,"g");const me=new RegExp("^"+J+"$"),we=new RegExp("^"+Vt+"$"),pe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");T.testKanji=function(t){return me.test(t)};T.testNumeric=function(t){return we.test(t)};T.testAlphanumeric=function(t){return pe.test(t)};(function(e){const t=pt,i=T;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,a){if(e.isValid(n))return n;try{return r(n)}catch{return a}}})(k);(function(e){const t=N,i=Z,r=X,o=k,n=pt,a=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,s=t.getBCHDigit(a);function u(h,d,p){for(let y=1;y<=40;y++)if(d<=e.getCapacity(y,p,h))return y}function c(h,d){return o.getCharCountIndicator(h,d)+4}function f(h,d){let p=0;return h.forEach(function(y){const S=c(y.mode,d);p+=S+y.getBitsLength()}),p}function E(h,d){for(let p=1;p<=40;p++)if(f(h,p)<=e.getCapacity(p,d,o.MIXED))return p}e.from=function(d,p){return n.isValid(d)?parseInt(d,10):p},e.getCapacity=function(d,p,y){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const S=t.getSymbolTotalCodewords(d),l=i.getTotalCodewordsCount(d,p),g=(S-l)*8;if(y===o.MIXED)return g;const m=g-c(y,d);switch(y){case o.NUMERIC:return Math.floor(m/10*3);case o.ALPHANUMERIC:return Math.floor(m/11*2);case o.KANJI:return Math.floor(m/13);case o.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(d,p){let y;const S=r.from(p,r.M);if(Array.isArray(d)){if(d.length>1)return E(d,S);if(d.length===0)return 1;y=d[0]}else y=d;return u(y.mode,y.getLength(),S)},e.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let p=d<<12;for(;t.getBCHDigit(p)-s>=0;)p^=a<<t.getBCHDigit(p)-s;return d<<12|p}})(Ut);var Kt={};const ct=N,xt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ye=1<<14|1<<12|1<<10|1<<4|1<<1,It=ct.getBCHDigit(xt);Kt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ct.getBCHDigit(o)-It>=0;)o^=xt<<ct.getBCHDigit(o)-It;return(r<<10|o)^ye};var Qt={};const Ce=k;function V(e){this.mode=Ce.NUMERIC,this.data=e.toString()}V.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var Ee=V;const Be=k,rt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function K(e){this.mode=Be.ALPHANUMERIC,this.data=e}K.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=rt.indexOf(this.data[i])*45;r+=rt.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(rt.indexOf(this.data[i]),6)};var Ae=K,Ie=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var a=t.charCodeAt(o+1);a>=56320&&a<=57343&&(n=(n-55296)*1024+a-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const be=Ie,Se=k;function x(e){this.mode=Se.BYTE,typeof e=="string"&&(e=be(e)),this.data=new Uint8Array(e)}x.getBitsLength=function(t){return t*8};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ne=x;const Me=k,Te=N;function Q(e){this.mode=Me.KANJI,this.data=e}Q.getBitsLength=function(t){return t*13};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Te.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Pe=Q,ft={},Re={get exports(){return ft},set exports(e){ft=e}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},a={};a[r]=0;var s=t.PriorityQueue.make();s.push(r,0);for(var u,c,f,E,h,d,p,y,S;!s.empty();){u=s.pop(),c=u.value,E=u.cost,h=i[c]||{};for(f in h)h.hasOwnProperty(f)&&(d=h[f],p=E+d,y=a[f],S=typeof a[f]>"u",(S||y>p)&&(a[f]=p,s.push(f,p),n[f]=c))}if(typeof o<"u"&&typeof a[o]>"u"){var l=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(l)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Re);(function(e){const t=k,i=Ee,r=Ae,o=Ne,n=Pe,a=T,s=N,u=ft;function c(l){return unescape(encodeURIComponent(l)).length}function f(l,g,m){const w=[];let C;for(;(C=l.exec(m))!==null;)w.push({data:C[0],index:C.index,mode:g,length:C[0].length});return w}function E(l){const g=f(a.NUMERIC,t.NUMERIC,l),m=f(a.ALPHANUMERIC,t.ALPHANUMERIC,l);let w,C;return s.isKanjiModeEnabled()?(w=f(a.BYTE,t.BYTE,l),C=f(a.KANJI,t.KANJI,l)):(w=f(a.BYTE_KANJI,t.BYTE,l),C=[]),g.concat(m,w,C).sort(function(I,b){return I.index-b.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function h(l,g){switch(g){case t.NUMERIC:return i.getBitsLength(l);case t.ALPHANUMERIC:return r.getBitsLength(l);case t.KANJI:return n.getBitsLength(l);case t.BYTE:return o.getBitsLength(l)}}function d(l){return l.reduce(function(g,m){const w=g.length-1>=0?g[g.length-1]:null;return w&&w.mode===m.mode?(g[g.length-1].data+=m.data,g):(g.push(m),g)},[])}function p(l){const g=[];for(let m=0;m<l.length;m++){const w=l[m];switch(w.mode){case t.NUMERIC:g.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:g.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:g.push([w,{data:w.data,mode:t.BYTE,length:c(w.data)}]);break;case t.BYTE:g.push([{data:w.data,mode:t.BYTE,length:c(w.data)}])}}return g}function y(l,g){const m={},w={start:{}};let C=["start"];for(let A=0;A<l.length;A++){const I=l[A],b=[];for(let R=0;R<I.length;R++){const M=I[R],_=""+A+R;b.push(_),m[_]={node:M,lastCount:0},w[_]={};for(let et=0;et<C.length;et++){const P=C[et];m[P]&&m[P].node.mode===M.mode?(w[P][_]=h(m[P].lastCount+M.length,M.mode)-h(m[P].lastCount,M.mode),m[P].lastCount+=M.length):(m[P]&&(m[P].lastCount=M.length),w[P][_]=h(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,g))}}C=b}for(let A=0;A<C.length;A++)w[C[A]].end=0;return{map:w,table:m}}function S(l,g){let m;const w=t.getBestModeForData(l);if(m=t.from(g,w),m!==t.BYTE&&m.bit<w.bit)throw new Error('"'+l+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(w));switch(m===t.KANJI&&!s.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new i(l);case t.ALPHANUMERIC:return new r(l);case t.KANJI:return new n(l);case t.BYTE:return new o(l)}}e.fromArray=function(g){return g.reduce(function(m,w){return typeof w=="string"?m.push(S(w,null)):w.data&&m.push(S(w.data,w.mode)),m},[])},e.fromString=function(g,m){const w=E(g,s.isKanjiModeEnabled()),C=p(w),A=y(C,m),I=u.find_path(A.map,"start","end"),b=[];for(let R=1;R<I.length-1;R++)b.push(A.table[I[R]].node);return e.fromArray(d(b))},e.rawSplit=function(g){return e.fromArray(E(g,s.isKanjiModeEnabled()))}})(Qt);const tt=N,it=X,Le=le,De=ce,ve=Lt,ke=Dt,dt=vt,gt=Z,Fe=de,W=Ut,Ue=Kt,Ve=k,st=Qt;function Ke(e,t){const i=e.size,r=ke.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],a=r[o][1];for(let s=-1;s<=7;s++)if(!(n+s<=-1||i<=n+s))for(let u=-1;u<=7;u++)a+u<=-1||i<=a+u||(s>=0&&s<=6&&(u===0||u===6)||u>=0&&u<=6&&(s===0||s===6)||s>=2&&s<=4&&u>=2&&u<=4?e.set(n+s,a+u,!0,!0):e.set(n+s,a+u,!1,!0))}}function xe(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Qe(e,t){const i=ve.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?e.set(o+a,n+s,!0,!0):e.set(o+a,n+s,!1,!0)}}function _e(e,t){const i=e.size,r=W.getEncodedBits(t);let o,n,a;for(let s=0;s<18;s++)o=Math.floor(s/3),n=s%3+i-8-3,a=(r>>s&1)===1,e.set(o,n,a,!0),e.set(n,o,a,!0)}function at(e,t,i){const r=e.size,o=Ue.getEncodedBits(t,i);let n,a;for(n=0;n<15;n++)a=(o>>n&1)===1,n<6?e.set(n,8,a,!0):n<8?e.set(n+1,8,a,!0):e.set(r-15+n,8,a,!0),n<8?e.set(8,r-n-1,a,!0):n<9?e.set(8,15-n-1+1,a,!0):e.set(8,15-n-1,a,!0);e.set(r-8,8,1,!0)}function Ge(e,t){const i=e.size;let r=-1,o=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(s===6&&s--;;){for(let u=0;u<2;u++)if(!e.isReserved(o,s-u)){let c=!1;a<t.length&&(c=(t[a]>>>n&1)===1),e.set(o,s-u,c),n--,n===-1&&(a++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function je(e,t,i){const r=new Le;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Ve.getCharCountIndicator(u.mode,e)),u.write(r)});const o=tt.getSymbolTotalCodewords(e),n=gt.getTotalCodewordsCount(e,t),a=(o-n)*8;for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const s=(a-r.getLengthInBits())/8;for(let u=0;u<s;u++)r.put(u%2?17:236,8);return Ye(r,e,t)}function Ye(e,t,i){const r=tt.getSymbolTotalCodewords(t),o=gt.getTotalCodewordsCount(t,i),n=r-o,a=gt.getBlocksCount(t,i),s=r%a,u=a-s,c=Math.floor(r/a),f=Math.floor(n/a),E=f+1,h=c-f,d=new Fe(h);let p=0;const y=new Array(a),S=new Array(a);let l=0;const g=new Uint8Array(e.buffer);for(let I=0;I<a;I++){const b=I<u?f:E;y[I]=g.slice(p,p+b),S[I]=d.encode(y[I]),p+=b,l=Math.max(l,b)}const m=new Uint8Array(r);let w=0,C,A;for(C=0;C<l;C++)for(A=0;A<a;A++)C<y[A].length&&(m[w++]=y[A][C]);for(C=0;C<h;C++)for(A=0;A<a;A++)m[w++]=S[A][C];return m}function Je(e,t,i,r){let o;if(Array.isArray(e))o=st.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const f=st.rawSplit(e);c=W.getBestVersionForData(f,i)}o=st.fromString(e,c||40)}else throw new Error("Invalid data");const n=W.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const a=je(t,i,o),s=tt.getSymbolSize(t),u=new De(s);return Ke(u,t),xe(u),Qe(u,t),at(u,i,0),t>=7&&_e(u,t),Ge(u,a),isNaN(r)&&(r=dt.getBestMask(u,at.bind(null,u,i))),dt.applyMask(r,u),at(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Pt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=it.M,o,n;return typeof i<"u"&&(r=it.from(i.errorCorrectionLevel,it.M),o=W.from(i.version),n=dt.from(i.maskPattern),i.toSJISFunc&&tt.setToSJISFunction(i.toSJISFunc)),Je(t,o,r,n)};var _t={},yt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:n,scale:n?4:a,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const a=o.modules.size,s=o.modules.data,u=e.getScale(a,n),c=Math.floor((a+n.margin*2)*u),f=n.margin*u,E=[n.color.light,n.color.dark];for(let h=0;h<c;h++)for(let d=0;d<c;d++){let p=(h*c+d)*4,y=n.color.light;if(h>=f&&d>=f&&h<c-f&&d<c-f){const S=Math.floor((h-f)/u),l=Math.floor((d-f)/u);y=E[s[S*a+l]?1:0]}r[p++]=y.r,r[p++]=y.g,r[p++]=y.b,r[p]=y.a}}})(yt);(function(e){const t=yt;function i(o,n,a){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=a,n.width=a,n.style.height=a+"px",n.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,a,s){let u=s,c=a;typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),a||(c=r()),u=t.getOptions(u);const f=t.getImageWidth(n.modules.size,u),E=c.getContext("2d"),h=E.createImageData(f,f);return t.qrToImageData(h.data,n,u),i(E,c,f),E.putImageData(h,0,0),c},e.renderToDataURL=function(n,a,s){let u=s;typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),u||(u={});const c=e.render(n,a,u),f=u.type||"image/png",E=u.rendererOpts||{};return c.toDataURL(f,E.quality)}})(_t);var Gt={};const Oe=yt;function bt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ut(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function He(e,t,i){let r="",o=0,n=!1,a=0;for(let s=0;s<e.length;s++){const u=Math.floor(s%t),c=Math.floor(s/t);!u&&!n&&(n=!0),e[s]?(a++,s>0&&u>0&&e[s-1]||(r+=n?ut("M",u+i,.5+c+i):ut("m",o,0),o=0,n=!1),u+1<t&&e[s+1]||(r+=ut("h",a),a=0)):o++}return r}Gt.render=function(t,i,r){const o=Oe.getOptions(i),n=t.modules.size,a=t.modules.data,s=n+o.margin*2,u=o.color.light.a?"<path "+bt(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+bt(o.color.dark,"stroke")+' d="'+He(a,n,o.margin)+'"/>',f='viewBox="0 0 '+s+" "+s+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+f+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const ze=ae,ht=Pt,jt=_t,qe=Gt;function Ct(e,t,i,r,o){const n=[].slice.call(arguments,1),a=n.length,s=typeof n[a-1]=="function";if(!s&&!ze())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(o=i,i=t,t=r=void 0):a===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=t,t=r=void 0):a===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,c){try{const f=ht.create(i,r);u(e(f,t,r))}catch(f){c(f)}})}try{const u=ht.create(i,r);o(null,e(u,t,r))}catch(u){o(u)}}ht.create;Ct.bind(null,jt.render);var We=Ct.bind(null,jt.renderToDataURL);Ct.bind(null,function(e,t,i){return qe.render(e,i)});const Xe=St({__name:"CaptchaRecaptcha",emits:["update:modelValue"],setup(e,{expose:t,emit:i}){const r=U(),{locale:o}=Nt(),n=Mt("theme","dark"),a=U(""),s=U(!0);function u(){var h;a.value="",(h=r.value)==null||h.execute()}function c(){var h;(h=r.value)==null||h.reset()}function f(h){a.value=h,i("update:modelValue",h)}async function E(){for(u();!a.value;)await new Promise(h=>setTimeout(h,100));return a.value}return t({getResponse:E,execute:u,reset:c}),(h,d)=>(D(),lt(Jt,{to:"body"},[B(s)?(D(),lt(B(se),{key:0,ref_key:"captcha",ref:r,theme:B(n),language:B(o),size:"invisible",sitekey:"6LdwF4MaAAAAAArTIa8nL8MfBlo062N3qRkhl0S1",onExpired:c,onVerify:f},null,8,["theme","language"])):Tt("",!0)]))}}),Ze={class:"test flex h-full items-center justify-center"},$e={class:"flex w-full flex-row flex-wrap items-center justify-center gap-20 text-base xl:gap-40"},tn=["onSubmit"],en={key:0,class:"mt-4 text-center text-sm text-red-400"},nn={class:"flex flex-col items-center justify-center gap-8"},on={class:"relative flex h-[12.5rem] w-[12.5rem]"},rn=["src"],sn=["onDrag"],an={class:"relative flex h-8 w-[7em] text-center"},un={key:0,class:"absolute w-full select-text text-center font-mono text-2xl"},ln={key:1,class:"absolute w-full text-center font-mono text-2xl blur-[8px]"},Sn=St({__name:"login",setup(e){const{loadUserData:t}=Ot(),{t:i}=Nt();Ht({title:()=>`${i("seo.30nama")} | ${i("seo.login")}`});const r=zt(),o=qt(),n=Wt(),{updateVisitorData:a}=Xt(),s=U({user:{value:"",isValid:!1},password:{value:"",isValid:!1},isSubmitting:!1,msg:""}),u=U();async function c(l){oe("CLEAR_CACHE"),r.token=l,n(i("welcome"),"SUCCESS"),Mt("session","").value=l,await t(),a(),s.value.isSubmitting=!1,o.replace("/menu/dashboard")}async function f(){var m,w,C;if(!s.value.user.isValid||!s.value.password.isValid)return;s.value.msg="",s.value.isSubmitting=!0;const l=await((m=u.value)==null?void 0:m.getResponse()),g=await ot.API.actions.login(s.value.user.value,s.value.password.value,l);if(g!=null&&g.success&&((w=g.result)!=null&&w.token))return c(g.result.token);s.value.isSubmitting=!1,(C=u.value)==null||C.reset(),s.value.msg=(g==null?void 0:g.msg)||""}function E(l){if(l.length<3)return i("auth.login.invalidIdentification")}function h(l){if(l.length<6)return i("auth.login.invalidPassword")}const d=U({code:"",url:"",image:""});let p;async function y(){const l=await ot.API.actions.qrlogin_code();console.warn({qrLoginCode:l}),!(!(l!=null&&l.success)||!l.result)&&(d.value.code=l.result.code,d.value.url=l.result.url,d.value.image=await We(l.result.url,{width:200,margin:2}))}async function S(){var g;const l=await ot.API.actions.qrlogin_login(d.value.code);!l||!l.success||(g=l.result)!=null&&g.token&&(clearInterval(p),c(l.result.token))}return Zt(async()=>{await y(),p=setInterval(S,2500)}),$t(()=>{clearInterval(p)}),(l,g)=>{const m=Yt,w=ee,C=ne,A=re,I=ie;return D(),G("div",Ze,[L(I,{foreground:"bg-bg-11",background:"bg-bg-12",title:l.$t("auth.login.title")},{default:j(()=>[F("div",$e,[F("form",{action:"#",class:"flex min-w-[12em] flex-col xl:min-w-[18em]",onSubmit:Et(f,["prevent"])},[L(m,{modelValue:B(s).user.value,"onUpdate:modelValue":g[0]||(g[0]=b=>B(s).user.value=b),"is-valid":B(s).user.isValid,"onUpdate:isValid":g[1]||(g[1]=b=>B(s).user.isValid=b),label:l.$t("auth.login.identification"),"label-bg":"bg-bg-11",icon:"ph:fingerprint-fill",type:"text",disable:B(s).isSubmitting,name:"identification",required:"",rules:[E]},null,8,["modelValue","is-valid","label","disable","rules"]),L(m,{modelValue:B(s).password.value,"onUpdate:modelValue":g[2]||(g[2]=b=>B(s).password.value=b),"is-valid":B(s).password.isValid,"onUpdate:isValid":g[3]||(g[3]=b=>B(s).password.isValid=b),label:l.$t("auth.shared.password"),disable:B(s).isSubmitting,"label-bg":"bg-bg-11",icon:"ph:lock-fill",type:"password",name:"password",required:"",rules:[h]},null,8,["modelValue","is-valid","label","disable","rules"]),L(C,{class:"btn-primary mt-2 text-sm",disable:!B(s).password.isValid||!B(s).user.isValid,loading:B(s).isSubmitting,type:"submit"},{default:j(()=>[L(w,{name:"ph:sign-in-fill"}),te(" "+nt(l.$t("auth.login.login")),1)]),_:1},8,["disable","loading"]),B(s).msg?(D(),G("h4",en,nt(B(s).msg),1)):Tt("",!0),L(B(Xe),{ref_key:"captcha",ref:u},null,512)],40,tn),F("div",nn,[F("div",on,[L(Bt,{name:"fade-preset"},{default:j(()=>[B(d).image?(D(),lt(A,{key:0,draggable:"false",to:B(d).url,external:"","aria-label":"qr url",target:"_blank"},{default:j(()=>[F("img",{class:"absolute flex h-[12.5rem] w-[12.5rem] rounded-xl bg-white",draggable:"false",src:B(d).image,alt:"qr-code"},null,8,rn)]),_:1},8,["to"])):(D(),G("img",{key:1,class:"pointer-events-none absolute flex h-[12.5rem] w-[12.5rem] rounded-xl bg-white blur-[8px]",src:"data:image/png;base64,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",alt:"qr-code-loading",onDrag:Et(b=>"",["prevent"])},null,40,sn))]),_:1})]),F("div",an,[L(Bt,{name:"fade-preset"},{default:j(()=>[B(d).code?(D(),G("span",un,nt(B(d).code),1)):(D(),G("span",ln," 12345678 "))]),_:1})])])])]),_:1},8,["title"])])}}});export{Sn as default};
