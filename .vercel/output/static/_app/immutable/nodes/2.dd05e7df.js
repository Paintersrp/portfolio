import{n as X,h as jt,s as ae,o as Mt,j as Pt,f as Re,c as Lt,u as At,g as Ot,d as Ut,k as ye,l as tt,m as kt,r as Ne,i as zt,e as Bt}from"../chunks/scheduler.fe6f3ea4.js";import{F as Rt,G as Nt,H as Ft,I as Gt,S as pe,i as ge,e as st,a as H,p as Fe,t as O,b as Ge,d as j,f as g,g as v,m as ne,h as _,j as $,n as le,k as f,A as d,o as me,D as Ct,E as It,x as nt,y as lt,s as C,J as B,c as I,l as qt,z as q,B as $e,C as it,r as Q,u as J,v as W,w as Y,K as at}from"../chunks/index.9bacf490.js";import{a as Dt,d as rt,c as Kt,f as ot,e as he,u as Vt,g as Qt,h as Jt,m as Wt,I as ze,i as Yt,b as ct,s as ut}from"../chunks/Scroller.svelte_svelte_type_style_lang.3207ef9e.js";function Xt(n,e,t,s){if(!e)return X;const l=n.getBoundingClientRect();if(e.left===l.left&&e.right===l.right&&e.top===l.top&&e.bottom===l.bottom)return X;const{delay:a=0,duration:i=300,easing:r=jt,start:o=Rt()+a,end:x=o+i,tick:h=X,css:m}=t(n,{from:e,to:l},s);let c=!0,u=!1,b;function V(){m&&(b=Ft(n,0,1,i,a,r,m)),a||(u=!0)}function w(){m&&Gt(n,b),c=!1}return Nt(p=>{if(!u&&p>=o&&(u=!0),u&&p>=x&&(h(1,0),w()),!c)return!1;if(u){const y=p-o,E=0+1*r(y/i);h(E,1-E)}return!0}),V(),h(0,1),w}function Zt(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,l=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,es(n,l)}}function es(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),l=s.transform==="none"?"":s.transform;n.style.transform=`${l} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function dt(n){let e,t=n[0][n[2]]+"",s,l,a,i;return{c(){e=v("h1"),s=ne(t),this.h()},l(r){e=_(r,"H1",{class:!0});var o=$(e);s=le(o,t),o.forEach(g),this.h()},h(){f(e,"class",n[1])},m(r,o){H(r,e,o),d(e,s),i=!0},p(r,o){(!i||o&5)&&t!==(t=r[0][r[2]]+"")&&me(s,t),(!i||o&2)&&f(e,"class",r[1])},i(r){i||(r&&Re(()=>{i&&(a&&a.end(1),l=Ct(e,rt,{duration:400,delay:400,easing:Dt}),l.start())}),i=!0)},o(r){l&&l.invalidate(),r&&(a=It(e,rt,{duration:400,easing:Kt})),i=!1},d(r){r&&g(e),r&&a&&a.end()}}}function ts(n){let e=n[2],t,s=dt(n);return{c(){s.c(),t=st()},l(l){s.l(l),t=st()},m(l,a){s.m(l,a),H(l,t,a)},p(l,[a]){a&4&&ae(e,e=l[2])?(Fe(),O(s,1,1,X),Ge(),s=dt(l),s.c(),j(s,1),s.m(t.parentNode,t)):s.p(l,a)},i(l){j(s)},o(l){O(s)},d(l){l&&g(t),s.d(l)}}}function ss(n,e,t){let{messages:s}=e,{textClass:l=""}=e,{duration:a=2e3}=e,i=0,r;return Mt(()=>{r=setInterval(()=>{i===s.length-1?t(2,i=0):t(2,i++,i)},a)}),Pt(()=>{clearInterval(r)}),n.$$set=o=>{"messages"in o&&t(0,s=o.messages),"textClass"in o&&t(1,l=o.textClass),"duration"in o&&t(3,a=o.duration)},[s,l,i,a]}class ns extends pe{constructor(e){super(),ge(this,e,ss,ts,ae,{messages:0,textClass:1,duration:3})}}function ls(n){let e,t,s;return{c(){e=nt("svg"),t=nt("path"),this.h()},l(l){e=lt(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,class:!0});var a=$(e);t=lt(a,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),$(t).forEach(g),a.forEach(g),this.h()},h(){f(t,"stroke-linecap","round"),f(t,"stroke-linejoin","round"),f(t,"stroke-width","2"),f(t,"d","M19 9l-7 7-7-7"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"fill","none"),f(e,"viewBox","0 0 24 24"),f(e,"stroke","currentColor"),f(e,"class",s=`w-10 h-10 accent-color-hover ${n[0]==="up"?"rotate-180":""}`)},m(l,a){H(l,e,a),d(e,t)},p(l,[a]){a&1&&s!==(s=`w-10 h-10 accent-color-hover ${l[0]==="up"?"rotate-180":""}`)&&f(e,"class",s)},i:X,o:X,d(l){l&&g(e)}}}function is(n,e,t){let{point:s="down"}=e;return n.$$set=l=>{"point"in l&&t(0,s=l.point)},[s]}class ft extends pe{constructor(e){super(),ge(this,e,is,ls,ae,{point:0})}}function as(n){let e,t,s,l;const a=n[3].default,i=Lt(a,n,n[2],null);return{c(){e=v("div"),i&&i.c(),this.h()},l(r){e=_(r,"DIV",{class:!0});var o=$(e);i&&i.l(o),o.forEach(g),this.h()},h(){f(e,"class","flex-grow flex flex-col items-center justify-center max-w-full mx-auto overflow-x-hidden overflow-y-hidden w-full")},m(r,o){H(r,e,o),i&&i.m(e,null),l=!0},p(r,[o]){n=r,i&&i.p&&(!l||o&4)&&At(i,a,n,n[2],l?Ut(a,n[2],o,null):Ot(n[2]),null)},i(r){l||(j(i,r),r&&Re(()=>{l&&(s&&s.end(1),t=Ct(e,ot,{y:n[0],duration:500,delay:700}),t.start())}),l=!0)},o(r){O(i,r),t&&t.invalidate(),r&&(s=It(e,ot,{y:n[1],duration:500})),l=!1},d(r){r&&g(e),i&&i.d(r),r&&s&&s.end()}}}function rs(n,e,t){let{$$slots:s={},$$scope:l}=e,{yIn:a}=e,{yOut:i}=e;return n.$$set=r=>{"yIn"in r&&t(0,a=r.yIn),"yOut"in r&&t(1,i=r.yOut),"$$scope"in r&&t(2,l=r.$$scope)},[a,i,l,s]}class os extends pe{constructor(e){super(),ge(this,e,rs,as,ae,{yIn:0,yOut:1})}}function cs(n){return n()}function us(n){n.forEach(cs)}const Te=[],ht=[],je=[],mt=[],St=Promise.resolve();let Be=!1;function ds(){Be||(Be=!0,St.then(ms))}function fs(){return ds(),St}function hs(n){je.push(n)}const Ue=new Set;let He=0;function ms(){do{for(;He<Te.length;){const n=Te[He];He++,ps(n.$$)}for(Te.length=0,He=0;ht.length;)ht.pop()();for(let n=0;n<je.length;n+=1){const e=je[n];Ue.has(e)||(Ue.add(e),e())}je.length=0}while(Te.length);for(;mt.length;)mt.pop()();Be=!1,Ue.clear()}function ps(n){if(n.fragment!==null){n.update(),us(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(hs)}}const gs={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},fe=(n,e)=>new CustomEvent(n,{detail:e});function Tt(n,e={}){const{root:t,rootMargin:s,threshold:l,unobserveOnEnter:a}=Object.assign(Object.assign({},gs),e);let i={x:void 0,y:void 0},r={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&n){const o=new IntersectionObserver((x,h)=>{x.forEach(m=>{i.y>m.boundingClientRect.y?r.vertical="up":r.vertical="down",i.x>m.boundingClientRect.x?r.horizontal="left":r.horizontal="right",i={y:m.boundingClientRect.y,x:m.boundingClientRect.x};const c={inView:m.isIntersecting,entry:m,scrollDirection:r,node:n,observer:h};n.dispatchEvent(fe("inview_change",c)),n.dispatchEvent(fe("change",c)),m.isIntersecting?(n.dispatchEvent(fe("inview_enter",c)),n.dispatchEvent(fe("enter",c)),a&&h.unobserve(n)):(n.dispatchEvent(fe("inview_leave",c)),n.dispatchEvent(fe("leave",c)))})},{root:t,rootMargin:s,threshold:l});return fs().then(()=>{n.dispatchEvent(fe("inview_init",{observer:o,node:n})),n.dispatchEvent(fe("init",{observer:o,node:n}))}),o.observe(n),{destroy(){o.unobserve(n)}}}}const vs=[{id:1,date:"11/10/2021",title:"Personal Blog",description:"Dive into my personal musings on life, technology, and continuous learning.",details:"This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.",features:["Responsive Design","SEO-Friendly","Light/Dark Mode"],technologies:["SvelteKit","TailwindCSS","SEO Auditing Tools"],imgUrl:"https://source.unsplash.com/random/600x400/?website",repoUrl:"https://github.com/yourusername/personal-blog",liveDemo:"https://yourpersonalblog.com"},{id:2,date:"11/11/2021",title:"Basketball Predictor",description:"Harnessing the power of machine learning to forecast sports event results with enhanced accuracy.",details:"A sophisticated machine learning model trained on a rich dataset of historical sports statistics. It combines Scikit-learn’s robust algorithms with Python’s computing power to predict game outcomes, providing insights to sports enthusiasts and bettors.",features:["Data Visualization","Statistical Analysis","Predictive Modeling"],technologies:["Python","Scikit-learn","Pandas"],imgUrl:"https://source.unsplash.com/random/600x400/?predictor",repoUrl:"https://github.com/yourusername/sports-predictor",liveDemo:"https://yoursportspredictor.com"},{id:3,date:"11/12/2021",title:"Sales Forecaster",description:"Optimize your inventory with our AI-powered sales forecasting tool.",details:"Designed to assist businesses in predicting future sales, managing inventory, and optimizing supply chain operations. It leverages state-of-the-art machine learning algorithms to analyze sales data and make precise demand forecasts.",features:["Inventory Management","Trend Analysis","Machine Learning Predictions"],technologies:["TensorFlow","Keras","NumPy","Matplotlib"],imgUrl:"https://source.unsplash.com/random/600x400/?forecast",repoUrl:"https://github.com/yourusername/sales-forecaster",liveDemo:"https://yoursalesforecaster.com"},{id:4,date:"11/13/2021",title:"API Gateway",description:"A robust API gateway to streamline your services and data flow.",details:"Central hub for managing, routing, and scaling microservices. It includes advanced anomaly detection to safeguard against unexpected traffic spikes and potential threats, ensuring reliable and secure service operations.",features:["Load Balancing","Anomaly Detection","Rate Limiting"],technologies:["Node.js","Express","Elasticsearch"],imgUrl:"https://source.unsplash.com/random/600x400/?api",repoUrl:"https://github.com/yourusername/api-gateway",liveDemo:"https://yourapigateway.com"}],_s=[{text:"NodeJS",icon:"node",isExpanded:!0,description:"Content Here"},{text:"Machine Learning",icon:"database",isExpanded:!1,description:"Content Here"},{text:"Git",icon:"github",isExpanded:!1,description:"Content Here"},{text:"JavaScript",icon:"javascript",isExpanded:!0,description:"Content Here"},{text:"Python",icon:"python",isExpanded:!1,description:"Content Here"},{text:"Django",icon:"django",isExpanded:!1,description:"Content Here"},{text:"SQL / NoSQL",icon:"database",isExpanded:!0,description:"Content Here"},{text:"Express / Koa",icon:"express",isExpanded:!1,description:"Content Here"},{text:"Docker",icon:"docker",isExpanded:!1,description:"Content Here"},{text:"React",icon:"react",isExpanded:!0,description:"Content Here"},{text:"Svelte",icon:"svelte",isExpanded:!1,description:"Content Here"},{text:"Vue",icon:"vue",isExpanded:!1,description:"Content Here"},{text:"HTML",icon:"html",isExpanded:!1,description:"Content Here"},{text:"CSS",icon:"css",isExpanded:!1,description:"Content Here"}];function pt(n,e,t){const s=n.slice();return s[3]=e[t],s[5]=t,s}function gt(n,e,t){const s=n.slice();return s[6]=e[t],s}function vt(n,e,t){const s=n.slice();return s[9]=e[t],s}function _t(n){let e,t=n[9]+"",s;return{c(){e=v("li"),s=ne(t)},l(l){e=_(l,"LI",{});var a=$(e);s=le(a,t),a.forEach(g)},m(l,a){H(l,e,a),d(e,s)},p(l,a){a&1&&t!==(t=l[9]+"")&&me(s,t)},d(l){l&&g(e)}}}function xt(n){let e,t=n[6]+"",s;return{c(){e=v("li"),s=ne(t)},l(l){e=_(l,"LI",{});var a=$(e);s=le(a,t),a.forEach(g)},m(l,a){H(l,e,a),d(e,s)},p(l,a){a&1&&t!==(t=l[6]+"")&&me(s,t)},d(l){l&&g(e)}}}function bt(n,e){let t,s,l,a,i=e[3].date+"",r,o,x,h,m,c,u,b,V,w,p=e[3].title+"",y,E,T,ie=e[3].description+"",R,_e,N,U,Z,xe="Features",K,ee,re,F,te,z="Technologies",oe,G,ce,M,P,Me,Ee,Pe,ue,Le,ke,Ce,Ae,Oe,qe,be=he(e[3].features),L=[];for(let D=0;D<be.length;D+=1)L[D]=_t(vt(e,be,D));let we=he(e[3].technologies),A=[];for(let D=0;D<we.length;D+=1)A[D]=xt(gt(e,we,D));function Ht(...D){return e[2](e[5],...D)}return{key:n,first:null,c(){t=v("div"),s=v("div"),l=v("div"),a=v("time"),r=ne(i),x=C(),h=v("div"),m=v("div"),c=v("img"),V=C(),w=v("h3"),y=ne(p),E=C(),T=v("p"),R=ne(ie),_e=C(),N=v("div"),U=v("div"),Z=v("h4"),Z.textContent=xe,K=C(),ee=v("ul");for(let D=0;D<L.length;D+=1)L[D].c();re=C(),F=v("div"),te=v("h4"),te.textContent=z,oe=C(),G=v("ul");for(let D=0;D<A.length;D+=1)A[D].c();ce=C(),M=v("div"),P=v("a"),Me=ne("GitHub"),Pe=C(),ue=v("a"),Le=ne("Live Demo"),Ae=C(),this.h()},l(D){t=_(D,"DIV",{class:!0});var S=$(t);s=_(S,"DIV",{class:!0});var k=$(s);l=_(k,"DIV",{class:!0,style:!0});var de=$(l);a=_(de,"TIME",{});var Ke=$(a);r=le(Ke,i),Ke.forEach(g),de.forEach(g),x=I(k),h=_(k,"DIV",{class:!0});var se=$(h);m=_(se,"DIV",{class:!0});var Qe=$(m);c=_(Qe,"IMG",{class:!0,src:!0,alt:!0}),Qe.forEach(g),V=I(se),w=_(se,"H3",{class:!0});var Je=$(w);y=le(Je,p),Je.forEach(g),E=I(se),T=_(se,"P",{class:!0});var We=$(T);R=le(We,ie),We.forEach(g),_e=I(se),N=_(se,"DIV",{class:!0});var Ie=$(N);U=_(Ie,"DIV",{class:!0});var De=$(U);Z=_(De,"H4",{class:!0,"data-svelte-h":!0}),B(Z)!=="svelte-1tompzy"&&(Z.textContent=xe),K=I(De),ee=_(De,"UL",{class:!0});var Ye=$(ee);for(let ve=0;ve<L.length;ve+=1)L[ve].l(Ye);Ye.forEach(g),De.forEach(g),re=I(Ie),F=_(Ie,"DIV",{class:!0});var Ve=$(F);te=_(Ve,"H4",{class:!0,"data-svelte-h":!0}),B(te)!=="svelte-1mqtj3d"&&(te.textContent=z),oe=I(Ve),G=_(Ve,"UL",{class:!0});var Xe=$(G);for(let ve=0;ve<A.length;ve+=1)A[ve].l(Xe);Xe.forEach(g),Ve.forEach(g),Ie.forEach(g),ce=I(se),M=_(se,"DIV",{class:!0});var Se=$(M);P=_(Se,"A",{href:!0,class:!0});var Ze=$(P);Me=le(Ze,"GitHub"),Ze.forEach(g),Pe=I(Se),ue=_(Se,"A",{href:!0,class:!0});var et=$(ue);Le=le(et,"Live Demo"),et.forEach(g),Se.forEach(g),se.forEach(g),k.forEach(g),Ae=I(S),S.forEach(g),this.h()},h(){f(l,"class",o=ye(`absolute top-0 w-20 h-10 bg-cyan-700 text-white flex items-center justify-center text-xs rounded-lg font-bold ${wt(e[5])}`)+" svelte-9llim8"),qt(l,"transform","translateY(-50%)"),f(c,"class","w-3/4 h-32 md:h-64 object-cover rounded shadow mx-auto"),tt(c.src,u=e[3].imgUrl)||f(c,"src",u),f(c,"alt",b=e[3].title),f(m,"class","flex justify-center mb-4"),f(w,"class","text-lg font-bold mb-3"),f(T,"class","mb-4"),f(Z,"class","text-md font-semibold text-center mb-1"),f(ee,"class","list-disc list-inside"),f(U,"class","tech-features mb-4"),f(te,"class","text-md font-semibold text-center mb-1"),f(G,"class","list-disc list-inside"),f(F,"class","tech-features mb-4"),f(N,"class","flex justify-evenly w-full gap-4"),f(P,"href",Ee=e[3].repoUrl),f(P,"class","px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md"),f(ue,"href",ke=e[3].liveDemo),f(ue,"class","px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md"),f(M,"class","flex justify-between"),f(h,"class","content bg-white bg-opacity-20 text-white shadow-lg rounded-lg p-4 transform transition duration-500 svelte-9llim8"),f(s,"class",Ce=ye(`timeline-item rounded-lg shadow-lg ${e[5]%2===0?"left":"right"} `)+" svelte-9llim8"),q(s,"left-in",e[3].isVisible&&e[5]%2===0),q(s,"left-out",!e[3].isVisible&&e[5]%2===0),q(s,"right-in",e[3].isVisible&&e[5]%2===1),q(s,"right-out",!e[3].isVisible&&e[5]%2===1),f(t,"class","w-full"),this.first=t},m(D,S){H(D,t,S),d(t,s),d(s,l),d(l,a),d(a,r),d(s,x),d(s,h),d(h,m),d(m,c),d(h,V),d(h,w),d(w,y),d(h,E),d(h,T),d(T,R),d(h,_e),d(h,N),d(N,U),d(U,Z),d(U,K),d(U,ee);for(let k=0;k<L.length;k+=1)L[k]&&L[k].m(ee,null);d(N,re),d(N,F),d(F,te),d(F,oe),d(F,G);for(let k=0;k<A.length;k+=1)A[k]&&A[k].m(G,null);d(h,ce),d(h,M),d(M,P),d(P,Me),d(M,Pe),d(M,ue),d(ue,Le),d(t,Ae),Oe||(qe=[kt(Tt.call(null,t,{threshold:.35,unobserveOnEnter:!0})),$e(t,"inview_change",Ht)],Oe=!0)},p(D,S){if(e=D,S&1&&i!==(i=e[3].date+"")&&me(r,i),S&1&&o!==(o=ye(`absolute top-0 w-20 h-10 bg-cyan-700 text-white flex items-center justify-center text-xs rounded-lg font-bold ${wt(e[5])}`)+" svelte-9llim8")&&f(l,"class",o),S&1&&!tt(c.src,u=e[3].imgUrl)&&f(c,"src",u),S&1&&b!==(b=e[3].title)&&f(c,"alt",b),S&1&&p!==(p=e[3].title+"")&&me(y,p),S&1&&ie!==(ie=e[3].description+"")&&me(R,ie),S&1){be=he(e[3].features);let k;for(k=0;k<be.length;k+=1){const de=vt(e,be,k);L[k]?L[k].p(de,S):(L[k]=_t(de),L[k].c(),L[k].m(ee,null))}for(;k<L.length;k+=1)L[k].d(1);L.length=be.length}if(S&1){we=he(e[3].technologies);let k;for(k=0;k<we.length;k+=1){const de=gt(e,we,k);A[k]?A[k].p(de,S):(A[k]=xt(de),A[k].c(),A[k].m(G,null))}for(;k<A.length;k+=1)A[k].d(1);A.length=we.length}S&1&&Ee!==(Ee=e[3].repoUrl)&&f(P,"href",Ee),S&1&&ke!==(ke=e[3].liveDemo)&&f(ue,"href",ke),S&1&&Ce!==(Ce=ye(`timeline-item rounded-lg shadow-lg ${e[5]%2===0?"left":"right"} `)+" svelte-9llim8")&&f(s,"class",Ce),S&1&&q(s,"left-in",e[3].isVisible&&e[5]%2===0),S&1&&q(s,"left-out",!e[3].isVisible&&e[5]%2===0),S&1&&q(s,"right-in",e[3].isVisible&&e[5]%2===1),S&1&&q(s,"right-out",!e[3].isVisible&&e[5]%2===1)},d(D){D&&g(t),it(L,D),it(A,D),Oe=!1,Ne(qe)}}}function xs(n){let e,t,s='<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2> <p class="text-lg text-white">Here&#39;s a selection of some recent work. For more details, click on each project.</p>',l,a,i,r,o=[],x=new Map,h=he(n[0]);const m=c=>c[5];for(let c=0;c<h.length;c+=1){let u=pt(n,h,c),b=m(u);x.set(b,o[c]=bt(b,u))}return{c(){e=v("section"),t=v("div"),t.innerHTML=s,l=C(),a=v("div"),i=v("div"),r=C();for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=_(c,"SECTION",{id:!0,class:!0});var u=$(e);t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-ldme5o"&&(t.innerHTML=s),l=I(u),a=_(u,"DIV",{class:!0});var b=$(a);i=_(b,"DIV",{class:!0}),$(i).forEach(g),r=I(b);for(let V=0;V<o.length;V+=1)o[V].l(b);b.forEach(g),u.forEach(g),this.h()},h(){f(t,"class","text-center mb-10"),f(i,"class","absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-cyan-100 h-full hidden lg:block"),f(a,"class","relative"),f(e,"id","projects"),f(e,"class","container mx-20 px-4 py-10")},m(c,u){H(c,e,u),d(e,t),d(e,l),d(e,a),d(a,i),d(a,r);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(a,null)},p(c,[u]){u&3&&(h=he(c[0]),o=Vt(o,u,m,1,c,h,x,a,Qt,bt,null,pt))},i:X,o:X,d(c){c&&g(e);for(let u=0;u<o.length;u+=1)o[u].d()}}}function wt(n){return n%2===0?"right-[-30px] lg:right-[-40px]":"left-[-30px] lg:left-[-40px]"}function bs(n,e,t){let s=vs.map(i=>({...i,isVisible:!1}));function l(i,r){t(0,s=s.map((o,x)=>x===r?{...o,isVisible:i.detail.inView}:o))}return[s,l,(i,r)=>l(r,i)]}class ws extends pe{constructor(e){super(),ge(this,e,bs,xs,ae,{})}}function ys(n,{from:e,to:t},s={}){const l=getComputedStyle(n),a=l.transform==="none"?"":l.transform,[i,r]=l.transformOrigin.split(" ").map(parseFloat),o=e.left+e.width*i/t.width-(t.left+i),x=e.top+e.height*r/t.height-(t.top+r),{delay:h=0,duration:m=u=>Math.sqrt(u)*120,easing:c=Jt}=s;return{delay:h,duration:zt(m)?m(Math.sqrt(o*o+x*x)):m,easing:c,css:(u,b)=>{const V=b*o,w=b*x,p=u+b*e.width/t.width,y=u+b*e.height/t.height;return`transform: ${a} translate(${V}px, ${w}px) scale(${p}, ${y});`}}}function yt(n,e,t){const s=n.slice();return s[6]=e[t],s}function $t(n){let e,t,s=n[6].description+"",l,a,i;return{c(){e=v("div"),t=v("p"),l=ne(s),this.h()},l(r){e=_(r,"DIV",{class:!0});var o=$(e);t=_(o,"P",{class:!0});var x=$(t);l=le(x,s),x.forEach(g),o.forEach(g),this.h()},h(){f(t,"class","text-sm"),f(e,"class","skill-details m-auto svelte-1f52etf")},m(r,o){H(r,e,o),d(e,t),d(t,l),i=!0},p(r,o){(!i||o&2)&&s!==(s=r[6].description+"")&&me(l,s)},i(r){i||(r&&Re(()=>{i&&(a||(a=at(e,ct,{delay:0},!0)),a.run(1))}),i=!0)},o(r){r&&(a||(a=at(e,ct,{delay:0},!1)),a.run(0)),i=!1},d(r){r&&g(e),r&&a&&a.end()}}}function Et(n,e){let t,s,l,a,i=e[6].text+"",r,o,x,h,m,c=X,u,b,V;s=new ze({props:{size:e[6].isExpanded?"3xl":e[0],type:e[6].icon,iconClass:"accent-color mb-3"}});let w=e[6].isExpanded&&$t(e);function p(){return e[5](e[6])}return{key:n,first:null,c(){t=v("button"),Q(s.$$.fragment),l=C(),a=v("span"),r=ne(i),x=C(),w&&w.c(),h=C(),this.h()},l(y){t=_(y,"BUTTON",{class:!0});var E=$(t);J(s.$$.fragment,E),l=I(E),a=_(E,"SPAN",{class:!0});var T=$(a);r=le(T,i),T.forEach(g),x=I(E),w&&w.l(E),h=I(E),E.forEach(g),this.h()},h(){f(a,"class",o=ye(`font-semibold ${e[6].isExpanded?"text-xl":" text-sm"}`)+" svelte-1f52etf"),f(t,"class","skill-card bg-white bg-opacity-20 p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-30 relative svelte-1f52etf"),q(t,"expanded",e[6].isExpanded),this.first=t},m(y,E){H(y,t,E),W(s,t,null),d(t,l),d(t,a),d(a,r),d(t,x),w&&w.m(t,null),d(t,h),u=!0,b||(V=$e(t,"click",p),b=!0)},p(y,E){e=y;const T={};E&3&&(T.size=e[6].isExpanded?"3xl":e[0]),E&2&&(T.type=e[6].icon),s.$set(T),(!u||E&2)&&i!==(i=e[6].text+"")&&me(r,i),(!u||E&2&&o!==(o=ye(`font-semibold ${e[6].isExpanded?"text-xl":" text-sm"}`)+" svelte-1f52etf"))&&f(a,"class",o),e[6].isExpanded?w?(w.p(e,E),E&2&&j(w,1)):(w=$t(e),w.c(),j(w,1),w.m(t,h)):w&&(Fe(),O(w,1,1,()=>{w=null}),Ge()),(!u||E&2)&&q(t,"expanded",e[6].isExpanded)},r(){m=t.getBoundingClientRect()},f(){Zt(t),c()},a(){c(),c=Xt(t,m,ys,{duration:400,easing:Dt})},i(y){u||(j(s.$$.fragment,y),j(w),u=!0)},o(y){O(s.$$.fragment,y),O(w),u=!1},d(y){y&&g(t),Y(s),w&&w.d(),b=!1,V()}}}function $s(n){let e,t,s='<h2 class="text-4xl md:text-5xl font-bold mb-4">My Skills</h2> <p class="text-xl font-light accent-color">Click on a skill to see more details</p>',l,a,i=[],r=new Map,o,x=he(n[1]);const h=m=>m[6].text;for(let m=0;m<x.length;m+=1){let c=yt(n,x,m),u=h(c);r.set(u,i[m]=Et(u,c))}return{c(){e=v("section"),t=v("div"),t.innerHTML=s,l=C(),a=v("div");for(let m=0;m<i.length;m+=1)i[m].c();this.h()},l(m){e=_(m,"SECTION",{id:!0,class:!0});var c=$(e);t=_(c,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-mau96"&&(t.innerHTML=s),l=I(c),a=_(c,"DIV",{class:!0});var u=$(a);for(let b=0;b<i.length;b+=1)i[b].l(u);u.forEach(g),c.forEach(g),this.h()},h(){f(t,"class","text-center mb-12"),f(a,"class","skills-grid svelte-1f52etf"),f(e,"id","skills"),f(e,"class","w-screen pt-16 px-4 md:px-16 text-white py-10")},m(m,c){H(m,e,c),d(e,t),d(e,l),d(e,a);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(a,null);o=!0},p(m,[c]){if(c&11){x=he(m[1]),Fe();for(let u=0;u<i.length;u+=1)i[u].r();i=Vt(i,c,h,1,m,x,r,a,Yt,Et,null,yt);for(let u=0;u<i.length;u+=1)i[u].a();Ge()}},i(m){if(!o){for(let c=0;c<x.length;c+=1)j(i[c]);o=!0}},o(m){for(let c=0;c<i.length;c+=1)O(i[c]);o=!1},d(m){m&&g(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Es(n,e,t){let s;const l=Wt("(max-width: 600px)");Bt(n,l,x=>t(4,s=x));let a,i=_s;const r=x=>{t(1,i=i.map(h=>h.text===x.text?{...h,isExpanded:!h.isExpanded}:h))},o=x=>r(x);return n.$$.update=()=>{n.$$.dirty&16&&t(0,a=s?"md":"lg")},[a,i,l,r,s,o]}class ks extends pe{constructor(e){super(),ge(this,e,Es,$s,ae,{})}}function Cs(n){let e,t,s,l='<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">More About Me</h2> <p class="text-lg sm:text-xl font-light accent-color mb-8">Discover my journey, interests, and achievements</p>',a,i,r,o,x,h,m='<img src="https://source.unsplash.com/random/600x400/?code" alt="Project" class="w-full lg:w-full h-64 object-fit rounded shadow mx-auto"/>',c,u,b="Professional Background",V,w,p=`With a strong foundation in TypeScript, Python, and React, I've contributed to numerous\r
          projects ranging from web applications to data-driven platforms.`,y,E,T,ie,R,_e='<img src="https://source.unsplash.com/random/600x400/?hiking" alt="Project" class="w-full h-64 object-cover rounded shadow mx-auto"/>',N,U,Z="Personal Interests",xe,K,ee=`Outside of coding, I'm passionate about hiking, open-source contribution, and exploring\r
          new technologies.`,re,F,te;return o=new ze({props:{size:"lg",type:"code",iconClass:"accent-color mb-3 mt-3"}}),T=new ze({props:{size:"lg",type:"landscape",iconClass:"accent-color mb-3"}}),{c(){e=v("section"),t=v("div"),s=v("div"),s.innerHTML=l,a=C(),i=v("div"),r=v("div"),Q(o.$$.fragment),x=C(),h=v("figure"),h.innerHTML=m,c=C(),u=v("h3"),u.textContent=b,V=C(),w=v("p"),w.textContent=p,y=C(),E=v("div"),Q(T.$$.fragment),ie=C(),R=v("figure"),R.innerHTML=_e,N=C(),U=v("h3"),U.textContent=Z,xe=C(),K=v("p"),K.textContent=ee,this.h()},l(z){e=_(z,"SECTION",{id:!0,class:!0});var oe=$(e);t=_(oe,"DIV",{class:!0});var G=$(t);s=_(G,"DIV",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-1f60zs1"&&(s.innerHTML=l),a=I(G),i=_(G,"DIV",{class:!0});var ce=$(i);r=_(ce,"DIV",{class:!0});var M=$(r);J(o.$$.fragment,M),x=I(M),h=_(M,"FIGURE",{class:!0,"data-svelte-h":!0}),B(h)!=="svelte-7maof0"&&(h.innerHTML=m),c=I(M),u=_(M,"H3",{class:!0,"data-svelte-h":!0}),B(u)!=="svelte-1hpxqur"&&(u.textContent=b),V=I(M),w=_(M,"P",{class:!0,"data-svelte-h":!0}),B(w)!=="svelte-1dnsil9"&&(w.textContent=p),M.forEach(g),y=I(ce),E=_(ce,"DIV",{class:!0});var P=$(E);J(T.$$.fragment,P),ie=I(P),R=_(P,"FIGURE",{class:!0,"data-svelte-h":!0}),B(R)!=="svelte-14crj29"&&(R.innerHTML=_e),N=I(P),U=_(P,"H3",{class:!0,"data-svelte-h":!0}),B(U)!=="svelte-kc27y3"&&(U.textContent=Z),xe=I(P),K=_(P,"P",{class:!0,"data-svelte-h":!0}),B(K)!=="svelte-7edlow"&&(K.textContent=ee),P.forEach(g),ce.forEach(g),G.forEach(g),oe.forEach(g),this.h()},h(){f(s,"class","text-center mb-12"),f(h,"class","px-0 sm:px-6"),f(u,"class","text-lg lg:text-xl font-semibold mt-3 mb-3 accent-color"),f(w,"class","text-sm lg:text-base text-white mb-4 font-light"),f(r,"class","flex-1 px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20 max-w-[550px] mb-4 md:mb-0"),f(R,"class","px-0 sm:px-6"),f(U,"class","text-lg lg:text-xl font-semibold mt-3 mb-3 accent-color"),f(K,"class","text-sm lg:text-base text-white mb-4 font-light"),f(E,"class","flex-1 px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20 max-w-[550px]"),f(i,"class","flex flex-col lg:flex-row justify-center mb-10 gap-6 md:gap-8 items-center md:items-start"),f(t,"class","container mx-auto px-4 sm:px-6 lg:px-8"),f(e,"id","about"),f(e,"class","text-white py-10 px-2 md:px-0")},m(z,oe){H(z,e,oe),d(e,t),d(t,s),d(t,a),d(t,i),d(i,r),W(o,r,null),d(r,x),d(r,h),d(r,c),d(r,u),d(r,V),d(r,w),d(i,y),d(i,E),W(T,E,null),d(E,ie),d(E,R),d(E,N),d(E,U),d(E,xe),d(E,K),re=!0,F||(te=[kt(Tt.call(null,e,{threshold:.1})),$e(e,"inview_change",n[1])],F=!0)},p:X,i(z){re||(j(o.$$.fragment,z),j(T.$$.fragment,z),re=!0)},o(z){O(o.$$.fragment,z),O(T.$$.fragment,z),re=!1},d(z){z&&g(e),Y(o),Y(T),F=!1,Ne(te)}}}function Is(n,e,t){let{handleAboutInView:s}=e;const l=a=>s(a);return n.$$set=a=>{"handleAboutInView"in a&&t(0,s=a.handleAboutInView)},[s,l]}class Ds extends pe{constructor(e){super(),ge(this,e,Is,Cs,ae,{handleAboutInView:0})}}function Vs(n){let e,t,s,l='Steven <br class="block lg:hidden"/> Painter',a,i,r='<p class="accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">Fullstack <br/> Developer</p> <p class="accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">Data <br/> Enthusiast</p> <p class="hidden md:block accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">Tech <br/> Explorer</p>',o,x,h,m;return h=new ns({props:{messages:n[0],textClass:"text-3xl md:text-4xl lg:text-5xl font-bold"}}),{c(){e=v("section"),t=v("div"),s=v("h1"),s.innerHTML=l,a=C(),i=v("div"),i.innerHTML=r,o=C(),x=v("div"),Q(h.$$.fragment),this.h()},l(c){e=_(c,"SECTION",{id:!0,class:!0});var u=$(e);t=_(u,"DIV",{class:!0});var b=$(t);s=_(b,"H1",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-1o6ayxk"&&(s.innerHTML=l),a=I(b),i=_(b,"DIV",{class:!0,"data-svelte-h":!0}),B(i)!=="svelte-w8hewp"&&(i.innerHTML=r),o=I(b),x=_(b,"DIV",{class:!0});var V=$(x);J(h.$$.fragment,V),V.forEach(g),b.forEach(g),u.forEach(g),this.h()},h(){f(s,"class","text-7xl md:text-8xl font-bold text-white leading-none shadow-text w-full text-center whitespace-nowrap text-in-expand mb-5"),f(i,"class","w-full md:w-1/2 flex flex-row md:justify-evenly justify-center items-center md:space-x-8"),f(x,"class","container text-in-blur min-h-[50px]"),f(t,"class","text-center space-y-2 md:space-y-4 accent-color mb-5 w-full flex flex-col justify-center items-center"),f(e,"id","landing"),f(e,"class","min-h-screen flex flex-col justify-center items-center space-y-4 w-full")},m(c,u){H(c,e,u),d(e,t),d(t,s),d(t,a),d(t,i),d(t,o),d(t,x),W(h,x,null),m=!0},p:X,i(c){m||(j(h.$$.fragment,c),m=!0)},o(c){O(h.$$.fragment,c),m=!1},d(c){c&&g(e),Y(h)}}}function Ss(n,e,t){return[["TypeScript","Python","React","Svelte","Backend Systems","Cloud Services","Database Management","RESTful & GraphQL APIs","Progressive Web Apps","Machine Learning","Data Engineering","Data Visualization"]]}class Ts extends pe{constructor(e){super(),ge(this,e,Ss,Vs,ae,{messagesToAnimate:0})}get messagesToAnimate(){return this.$$.ctx[0]}}function Hs(n){let e,t,s,l,a,i,r,o,x,h,m,c,u,b,V,w;return e=new Ts({}),l=new ft({}),i=new Ds({props:{handleAboutInView:n[1]}}),o=new ks({}),h=new ws({}),u=new ft({props:{point:"up"}}),{c(){Q(e.$$.fragment),t=C(),s=v("button"),Q(l.$$.fragment),a=C(),Q(i.$$.fragment),r=C(),Q(o.$$.fragment),x=C(),Q(h.$$.fragment),m=C(),c=v("button"),Q(u.$$.fragment),this.h()},l(p){J(e.$$.fragment,p),t=I(p),s=_(p,"BUTTON",{class:!0});var y=$(s);J(l.$$.fragment,y),y.forEach(g),a=I(p),J(i.$$.fragment,p),r=I(p),J(o.$$.fragment,p),x=I(p),J(h.$$.fragment,p),m=I(p),c=_(p,"BUTTON",{class:!0});var E=$(c);J(u.$$.fragment,E),E.forEach(g),this.h()},h(){f(s,"class","animate-bounce absolute bottom-5 transform -translate-x-1/2 text-white hover:accent-color"),q(s,"hidden",n[0]),f(c,"class","animate-bounce transform text-white hover:accent-color")},m(p,y){W(e,p,y),H(p,t,y),H(p,s,y),W(l,s,null),H(p,a,y),W(i,p,y),H(p,r,y),W(o,p,y),H(p,x,y),W(h,p,y),H(p,m,y),H(p,c,y),W(u,c,null),b=!0,V||(w=[$e(s,"click",n[2]),$e(c,"click",n[3])],V=!0)},p(p,y){(!b||y&1)&&q(s,"hidden",p[0])},i(p){b||(j(e.$$.fragment,p),j(l.$$.fragment,p),j(i.$$.fragment,p),j(o.$$.fragment,p),j(h.$$.fragment,p),j(u.$$.fragment,p),b=!0)},o(p){O(e.$$.fragment,p),O(l.$$.fragment,p),O(i.$$.fragment,p),O(o.$$.fragment,p),O(h.$$.fragment,p),O(u.$$.fragment,p),b=!1},d(p){p&&(g(t),g(s),g(a),g(r),g(x),g(m),g(c)),Y(e,p),Y(l),Y(i,p),Y(o,p),Y(h,p),Y(u),V=!1,Ne(w)}}}function js(n){let e,t;return e=new os({props:{yIn:-750,yOut:-750,$$slots:{default:[Hs]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,l){W(e,s,l),t=!0},p(s,[l]){const a={};l&17&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Ms(n,e,t){let s=!1;function l(r){t(0,s=r.detail.inView)}return[s,l,()=>ut("about"),()=>ut("landing")]}class Os extends pe{constructor(e){super(),ge(this,e,Ms,js,ae,{})}}export{Os as component};