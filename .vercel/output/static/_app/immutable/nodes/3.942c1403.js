import{p as Le,F as Te,S as ue}from"../chunks/SubSection.fd5bad6b.js";import{s as Ue,m as me,n as je,d as Pe}from"../chunks/scheduler.bc02f4d4.js";import{S as Fe,i as He,r as le,s as V,u as se,c as j,v as ae,a as q,d as ee,t as te,f as d,w as ne,g as p,m as G,h as m,j as g,n as K,k as _,A as a,o as M,F as ie,C as W,l as _e,B as Oe,p as Be,b as ze,L as ge}from"../chunks/index.b7cc0d67.js";import{e as Q,c as be}from"../chunks/MenuIcon.svelte_svelte_type_style_lang.8c767792.js";async function Je({params:i}){const e=Number(i.id);return{project:Le[e-1]}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Je},Symbol.toStringTag,{value:"Module"}));function $e(i,e,l){const t=i.slice();return t[4]=e[l],t}function xe(i,e,l){const t=i.slice();return t[7]=e[l],t}function Ee(i,e,l){const t=i.slice();return t[10]=e[l],t}function Ce(i,e,l){const t=i.slice();return t[13]=e[l],t[15]=l,t}function we(i,e,l){const t=i.slice();return t[16]=e[l],t}function Re(i){let e,l,t,s,r,u,h,x,E=i[0].title+"",B,n,v,F=i[0].description+"",P,k,H,L,U=i[0].details+"",J,b,S,C,O=i[0].date+"",I;return{c(){e=p("div"),l=p("figure"),t=p("img"),u=V(),h=p("div"),x=p("h1"),B=G(E),n=V(),v=p("p"),P=G(F),k=V(),H=p("div"),L=p("p"),J=G(U),b=V(),S=p("time"),C=G("Date: "),I=G(O),this.h()},l(o){e=m(o,"DIV",{class:!0});var f=g(e);l=m(f,"FIGURE",{class:!0});var c=g(l);t=m(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(d),u=j(f),h=m(f,"DIV",{class:!0});var w=g(h);x=m(w,"H1",{class:!0});var D=g(x);B=K(D,E),D.forEach(d),n=j(w),v=m(w,"P",{class:!0});var A=g(v);P=K(A,F),A.forEach(d),k=j(w),H=m(w,"DIV",{class:!0});var N=g(H);L=m(N,"P",{class:!0});var R=g(L);J=K(R,U),R.forEach(d),N.forEach(d),b=j(w),S=m(w,"TIME",{class:!0});var $=g(S);C=K($,"Date: "),I=K($,O),$.forEach(d),w.forEach(d),f.forEach(d),this.h()},h(){me(t.src,s=i[0].imgUrl)||_(t,"src",s),_(t,"alt",r=i[0].title),_(t,"class","rounded-lg shadow-md mb-4 md:mb-0 object-fit"),_(l,"class","flex"),_(x,"class","text-4xl font-bold mb-2 accent-color"),_(v,"class","text-lg mb-2"),_(L,"class","text-gray-300"),_(H,"class","container mx-auto text-base mb-4"),_(S,"class","text-sm text-gray-300"),_(h,"class","text-center md:text-left md:ml-6"),_(e,"class","w-full mx-auto flex flex-col md:flex-row p-4")},m(o,f){q(o,e,f),a(e,l),a(l,t),a(e,u),a(e,h),a(h,x),a(x,B),a(h,n),a(h,v),a(v,P),a(h,k),a(h,H),a(H,L),a(L,J),a(h,b),a(h,S),a(S,C),a(S,I)},p(o,f){f&1&&!me(t.src,s=o[0].imgUrl)&&_(t,"src",s),f&1&&r!==(r=o[0].title)&&_(t,"alt",r),f&1&&E!==(E=o[0].title+"")&&M(B,E),f&1&&F!==(F=o[0].description+"")&&M(P,F),f&1&&U!==(U=o[0].details+"")&&M(J,U),f&1&&O!==(O=o[0].date+"")&&M(I,O)},d(o){o&&d(e)}}}function Ie(i){let e,l,t,s,r="Development Journey",u,h,x=i[13].developmentJourney+"",E,B,n,v,F="Feature Focus",P,k,H,L,U,J="Technical Challenges",b,S,C=i[13].technicalChallenges+"",O,I,o,f,c="Learning and Skills Acquired",w,D,A=i[13].skillsLearned+"",N,R,$,Y=Q(i[13].featureFocus),z=[];for(let y=0;y<Y.length;y+=1)z[y]=De(we(i,Y,y));return{c(){e=p("div"),l=p("div"),t=p("div"),s=p("h5"),s.textContent=r,u=V(),h=p("p"),E=G(x),B=V(),n=p("div"),v=p("h5"),v.textContent=F,P=V(),k=p("ul");for(let y=0;y<z.length;y+=1)z[y].c();H=V(),L=p("div"),U=p("h5"),U.textContent=J,b=V(),S=p("p"),O=G(C),I=V(),o=p("div"),f=p("h5"),f.textContent=c,w=V(),D=p("p"),N=G(A),this.h()},l(y){e=m(y,"DIV",{class:!0});var X=g(e);l=m(X,"DIV",{class:!0});var T=g(l);t=m(T,"DIV",{});var Z=g(t);s=m(Z,"H5",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-1hvh0xc"&&(s.textContent=r),u=j(Z),h=m(Z,"P",{class:!0});var de=g(h);E=K(de,x),de.forEach(d),Z.forEach(d),B=j(T),n=m(T,"DIV",{});var re=g(n);v=m(re,"H5",{class:!0,"data-svelte-h":!0}),W(v)!=="svelte-rj8u5b"&&(v.textContent=F),P=j(re),k=m(re,"UL",{class:!0});var he=g(k);for(let fe=0;fe<z.length;fe+=1)z[fe].l(he);he.forEach(d),re.forEach(d),H=j(T),L=m(T,"DIV",{});var oe=g(L);U=m(oe,"H5",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-1noniny"&&(U.textContent=J),b=j(oe),S=m(oe,"P",{class:!0});var ve=g(S);O=K(ve,C),ve.forEach(d),oe.forEach(d),I=j(T),o=m(T,"DIV",{});var ce=g(o);f=m(ce,"H5",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-1gx0by4"&&(f.textContent=c),w=j(ce),D=m(ce,"P",{class:!0});var pe=g(D);N=K(pe,A),pe.forEach(d),ce.forEach(d),T.forEach(d),X.forEach(d),this.h()},h(){_(s,"class","font-semibold text-amber-300"),_(h,"class","text-gray-300"),_(v,"class","font-semibold text-amber-300"),_(k,"class","list-disc pl-5 text-gray-300"),_(U,"class","font-semibold text-amber-300"),_(S,"class","text-gray-300"),_(f,"class","font-semibold text-amber-300"),_(D,"class","text-gray-300"),_(l,"class","space-y-4"),_(e,"class","mt-4 bg-gray-800 p-4 rounded-lg shadow-lg")},m(y,X){q(y,e,X),a(e,l),a(l,t),a(t,s),a(t,u),a(t,h),a(h,E),a(l,B),a(l,n),a(n,v),a(n,P),a(n,k);for(let T=0;T<z.length;T+=1)z[T]&&z[T].m(k,null);a(l,H),a(l,L),a(L,U),a(L,b),a(L,S),a(S,O),a(l,I),a(l,o),a(o,f),a(o,w),a(o,D),a(D,N),$=!0},p(y,X){if((!$||X&1)&&x!==(x=y[13].developmentJourney+"")&&M(E,x),X&1){Y=Q(y[13].featureFocus);let T;for(T=0;T<Y.length;T+=1){const Z=we(y,Y,T);z[T]?z[T].p(Z,X):(z[T]=De(Z),z[T].c(),z[T].m(k,null))}for(;T<z.length;T+=1)z[T].d(1);z.length=Y.length}(!$||X&1)&&C!==(C=y[13].technicalChallenges+"")&&M(O,C),(!$||X&1)&&A!==(A=y[13].skillsLearned+"")&&M(N,A)},i(y){$||(y&&Pe(()=>{$&&(R||(R=ge(e,be,{},!0)),R.run(1))}),$=!0)},o(y){y&&(R||(R=ge(e,be,{},!1)),R.run(0)),$=!1},d(y){y&&d(e),ie(z,y),y&&R&&R.end()}}}function De(i){let e,l=i[16]+"",t;return{c(){e=p("li"),t=G(l)},l(s){e=m(s,"LI",{});var r=g(e);t=K(r,l),r.forEach(d)},m(s,r){q(s,e,r),a(e,t)},p(s,r){r&1&&l!==(l=s[16]+"")&&M(t,l)},d(s){s&&d(e)}}}function ke(i){let e,l,t,s=i[13].version+"",r,u,h,x=i[13].status+"",E,B,n,v,F,P,k,H=i[13].description+"",L,U,J,b,S=i[13].isExpanded?"Hide Details":"View Details",C,O,I,o,f=i[13].isExpanded&&Ie(i);function c(){return i[3](i[15])}return{c(){e=p("div"),l=p("div"),t=p("h4"),r=G(s),u=V(),h=p("span"),E=G(x),B=V(),n=p("div"),v=p("div"),F=p("div"),P=V(),k=p("p"),L=G(H),U=V(),f&&f.c(),J=V(),b=p("button"),C=G(S),O=V(),this.h()},l(w){e=m(w,"DIV",{class:!0});var D=g(e);l=m(D,"DIV",{class:!0});var A=g(l);t=m(A,"H4",{class:!0});var N=g(t);r=K(N,s),N.forEach(d),u=j(A),h=m(A,"SPAN",{class:!0});var R=g(h);E=K(R,x),R.forEach(d),A.forEach(d),B=j(D),n=m(D,"DIV",{class:!0});var $=g(n);v=m($,"DIV",{class:!0});var Y=g(v);F=m(Y,"DIV",{class:!0,style:!0}),g(F).forEach(d),Y.forEach(d),P=j($),k=m($,"P",{class:!0});var z=g(k);L=K(z,H),z.forEach(d),U=j($),f&&f.l($),J=j($),b=m($,"BUTTON",{class:!0});var y=g(b);C=K(y,S),y.forEach(d),$.forEach(d),O=j(D),D.forEach(d),this.h()},h(){_(t,"class","text-xl font-bold text-white"),_(h,"class","text-sm text-gray-300"),_(l,"class","flex justify-between items-center"),_(F,"class","bg-amber-300 h-2 rounded-full"),_e(F,"width",i[13].progress+"%"),_(v,"class","h-2 bg-gray-500 rounded-full"),_(k,"class","text-gray-200 mt-2"),_(b,"class","accent-color text-sm mt-2"),_(n,"class","mt-2"),_(e,"class","mb-8")},m(w,D){q(w,e,D),a(e,l),a(l,t),a(t,r),a(l,u),a(l,h),a(h,E),a(e,B),a(e,n),a(n,v),a(v,F),a(n,P),a(n,k),a(k,L),a(n,U),f&&f.m(n,null),a(n,J),a(n,b),a(b,C),a(e,O),I||(o=Oe(b,"click",c),I=!0)},p(w,D){i=w,D&1&&s!==(s=i[13].version+"")&&M(r,s),D&1&&x!==(x=i[13].status+"")&&M(E,x),D&1&&_e(F,"width",i[13].progress+"%"),D&1&&H!==(H=i[13].description+"")&&M(L,H),i[13].isExpanded?f?(f.p(i,D),D&1&&ee(f,1)):(f=Ie(i),f.c(),ee(f,1),f.m(n,J)):f&&(Be(),te(f,1,1,()=>{f=null}),ze()),D&1&&S!==(S=i[13].isExpanded?"Hide Details":"View Details")&&M(C,S)},d(w){w&&d(e),f&&f.d(),I=!1,o()}}}function qe(i){let e,l=Q(i[0].roadmap),t=[];for(let s=0;s<l.length;s+=1)t[s]=ke(Ce(i,l,s));return{c(){e=p("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var r=g(e);for(let u=0;u<t.length;u+=1)t[u].l(r);r.forEach(d),this.h()},h(){_(e,"class","container mx-auto")},m(s,r){q(s,e,r);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null)},p(s,r){if(r&3){l=Q(s[0].roadmap);let u;for(u=0;u<l.length;u+=1){const h=Ce(s,l,u);t[u]?t[u].p(h,r):(t[u]=ke(h),t[u].c(),t[u].m(e,null))}for(;u<t.length;u+=1)t[u].d(1);t.length=l.length}},d(s){s&&d(e),ie(t,s)}}}function ye(i){let e,l=i[10]+"",t;return{c(){e=p("li"),t=G(l),this.h()},l(s){e=m(s,"LI",{class:!0});var r=g(e);t=K(r,l),r.forEach(d),this.h()},h(){_(e,"class","my-[6px] text-sm")},m(s,r){q(s,e,r),a(e,t)},p(s,r){r&1&&l!==(l=s[10]+"")&&M(t,l)},d(s){s&&d(e)}}}function Se(i){let e,l=i[7]+"",t;return{c(){e=p("li"),t=G(l),this.h()},l(s){e=m(s,"LI",{class:!0});var r=g(e);t=K(r,l),r.forEach(d),this.h()},h(){_(e,"class","my-[6px] text-sm")},m(s,r){q(s,e,r),a(e,t)},p(s,r){r&1&&l!==(l=s[7]+"")&&M(t,l)},d(s){s&&d(e)}}}function Ve(i){let e,l=i[4]+"",t;return{c(){e=p("li"),t=G(l),this.h()},l(s){e=m(s,"LI",{class:!0});var r=g(e);t=K(r,l),r.forEach(d),this.h()},h(){_(e,"class","my-[6px] text-sm")},m(s,r){q(s,e,r),a(e,t)},p(s,r){r&1&&l!==(l=s[4]+"")&&M(t,l)},d(s){s&&d(e)}}}function Ae(i){let e,l,t,s="Stack",r,u,h,x,E,B="Concepts",n,v,F,P,k,H="Libraries",L,U,J=Q(i[0].stack),b=[];for(let o=0;o<J.length;o+=1)b[o]=ye(Ee(i,J,o));let S=Q(i[0].concept),C=[];for(let o=0;o<S.length;o+=1)C[o]=Se(xe(i,S,o));let O=Q(i[0].libraries),I=[];for(let o=0;o<O.length;o+=1)I[o]=Ve($e(i,O,o));return{c(){e=p("div"),l=p("div"),t=p("h3"),t.textContent=s,r=V(),u=p("ul");for(let o=0;o<b.length;o+=1)b[o].c();h=V(),x=p("div"),E=p("h3"),E.textContent=B,n=V(),v=p("ul");for(let o=0;o<C.length;o+=1)C[o].c();F=V(),P=p("div"),k=p("h3"),k.textContent=H,L=V(),U=p("ul");for(let o=0;o<I.length;o+=1)I[o].c();this.h()},l(o){e=m(o,"DIV",{class:!0});var f=g(e);l=m(f,"DIV",{class:!0});var c=g(l);t=m(c,"H3",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-dfwifl"&&(t.textContent=s),r=j(c),u=m(c,"UL",{class:!0});var w=g(u);for(let $=0;$<b.length;$+=1)b[$].l(w);w.forEach(d),c.forEach(d),h=j(f),x=m(f,"DIV",{class:!0});var D=g(x);E=m(D,"H3",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-16qwmeo"&&(E.textContent=B),n=j(D),v=m(D,"UL",{class:!0});var A=g(v);for(let $=0;$<C.length;$+=1)C[$].l(A);A.forEach(d),D.forEach(d),F=j(f),P=m(f,"DIV",{class:!0});var N=g(P);k=m(N,"H3",{class:!0,"data-svelte-h":!0}),W(k)!=="svelte-1mfv98u"&&(k.textContent=H),L=j(N),U=m(N,"UL",{class:!0});var R=g(U);for(let $=0;$<I.length;$+=1)I[$].l(R);R.forEach(d),N.forEach(d),f.forEach(d),this.h()},h(){_(t,"class","text-gray-50 font-bold uppercase"),_(u,"class","text-gray-300"),_(l,"class","mb-6 md:w-[47%]"),_(E,"class","text-gray-50 font-bold uppercase"),_(v,"class","text-gray-300"),_(x,"class","mb-6 md:w-[47%]"),_(k,"class","text-gray-50 font-bold uppercase"),_(U,"class","text-gray-300"),_(P,"class","mb-6 md:w-[47%]"),_(e,"class","flex justify-between flex-wrap md:flex-nowrap")},m(o,f){q(o,e,f),a(e,l),a(l,t),a(l,r),a(l,u);for(let c=0;c<b.length;c+=1)b[c]&&b[c].m(u,null);a(e,h),a(e,x),a(x,E),a(x,n),a(x,v);for(let c=0;c<C.length;c+=1)C[c]&&C[c].m(v,null);a(e,F),a(e,P),a(P,k),a(P,L),a(P,U);for(let c=0;c<I.length;c+=1)I[c]&&I[c].m(U,null)},p(o,f){if(f&1){J=Q(o[0].stack);let c;for(c=0;c<J.length;c+=1){const w=Ee(o,J,c);b[c]?b[c].p(w,f):(b[c]=ye(w),b[c].c(),b[c].m(u,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=J.length}if(f&1){S=Q(o[0].concept);let c;for(c=0;c<S.length;c+=1){const w=xe(o,S,c);C[c]?C[c].p(w,f):(C[c]=Se(w),C[c].c(),C[c].m(v,null))}for(;c<C.length;c+=1)C[c].d(1);C.length=S.length}if(f&1){O=Q(o[0].libraries);let c;for(c=0;c<O.length;c+=1){const w=$e(o,O,c);I[c]?I[c].p(w,f):(I[c]=Ve(w),I[c].c(),I[c].m(U,null))}for(;c<I.length;c+=1)I[c].d(1);I.length=O.length}},d(o){o&&d(e),ie(b,o),ie(C,o),ie(I,o)}}}function Ge(i){let e,l="Screenshots (expandable)",t,s,r="REPLs";return{c(){e=p("div"),e.textContent=l,t=V(),s=p("div"),s.textContent=r},l(u){e=m(u,"DIV",{"data-svelte-h":!0}),W(e)!=="svelte-gg4230"&&(e.textContent=l),t=j(u),s=m(u,"DIV",{"data-svelte-h":!0}),W(s)!=="svelte-r00vzs"&&(s.textContent=r)},m(u,h){q(u,e,h),q(u,t,h),q(u,s,h)},p:je,d(u){u&&(d(e),d(t),d(s))}}}function Ke(i){let e,l="Git Statistics";return{c(){e=p("div"),e.textContent=l,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1vp2r5g"&&(e.textContent=l),this.h()},h(){_(e,"class","mb-20")},m(t,s){q(t,e,s)},p:je,d(t){t&&d(e)}}}function Ne(i){let e,l,t,s,r,u,h,x,E,B;return e=new Te({props:{id:"project-start",$$slots:{default:[Re]},$$scope:{ctx:i}}}),t=new ue({props:{id:"project-roadmap",heading:"Roadmap",$$slots:{default:[qe]},$$scope:{ctx:i}}}),r=new ue({props:{id:"project-tech",heading:"Technology",$$slots:{default:[Ae]},$$scope:{ctx:i}}}),h=new ue({props:{id:"project-highlights",heading:"Highlights",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),E=new ue({props:{id:"project-stats",heading:"Statistics",$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){le(e.$$.fragment),l=V(),le(t.$$.fragment),s=V(),le(r.$$.fragment),u=V(),le(h.$$.fragment),x=V(),le(E.$$.fragment)},l(n){se(e.$$.fragment,n),l=j(n),se(t.$$.fragment,n),s=j(n),se(r.$$.fragment,n),u=j(n),se(h.$$.fragment,n),x=j(n),se(E.$$.fragment,n)},m(n,v){ae(e,n,v),q(n,l,v),ae(t,n,v),q(n,s,v),ae(r,n,v),q(n,u,v),ae(h,n,v),q(n,x,v),ae(E,n,v),B=!0},p(n,[v]){const F={};v&524289&&(F.$$scope={dirty:v,ctx:n}),e.$set(F);const P={};v&524289&&(P.$$scope={dirty:v,ctx:n}),t.$set(P);const k={};v&524289&&(k.$$scope={dirty:v,ctx:n}),r.$set(k);const H={};v&524288&&(H.$$scope={dirty:v,ctx:n}),h.$set(H);const L={};v&524288&&(L.$$scope={dirty:v,ctx:n}),E.$set(L)},i(n){B||(ee(e.$$.fragment,n),ee(t.$$.fragment,n),ee(r.$$.fragment,n),ee(h.$$.fragment,n),ee(E.$$.fragment,n),B=!0)},o(n){te(e.$$.fragment,n),te(t.$$.fragment,n),te(r.$$.fragment,n),te(h.$$.fragment,n),te(E.$$.fragment,n),B=!1},d(n){n&&(d(l),d(s),d(u),d(x)),ne(e,n),ne(t,n),ne(r,n),ne(h,n),ne(E,n)}}}function Me(i,e,l){let{data:t}=e,s={id:1,date:"11/10/2021",title:"Personal Blog",description:"Dive into my personal musings on life, technology, and continuous learning.",details:"This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.",concept:["User-friendly UI","Intuitive Navigation","Engaging Content"],stack:["SvelteKit","TailwindCSS","SEO Auditing Tools"],libraries:["DaisyUI","Chart.js"],roadmap:[{version:"v2",description:"Interactive Features",status:"In Progress",releaseDate:"06/30/2023",progress:60,isExpanded:!0,developmentJourney:"The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.",featureFocus:["Real-Time Commenting System","User Polls","Performance Optimization"],technicalChallenges:"Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.",skillsLearned:"Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws."},{version:"v1",description:"Initial Launch",status:"Completed",releaseDate:"01/02/2022",progress:100,isExpanded:!1,developmentJourney:"Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.",featureFocus:["Basic Blogging Functionality","Responsive Design","SEO Foundations"],technicalChallenges:"Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.",skillsLearned:"Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles."}],imgUrl:"https://source.unsplash.com/random/600x400/?website",repoUrl:"https://github.com/yourusername/personal-blog",isExpanded:!1,liveDemo:"https://yourpersonalblog.com"};function r(h){l(0,s.roadmap[h].isExpanded=!s.roadmap[h].isExpanded,s)}const u=h=>r(h);return i.$$set=h=>{"data"in h&&l(2,t=h.data)},[s,r,t,u]}class et extends Fe{constructor(e){super(),He(this,e,Me,Ne,Ue,{data:2})}}export{et as component,Ze as universal};
