import{p as Te,e as le,I as Fe,c as be}from"../chunks/Icon.fd3b375b.js";import{H as ze}from"../chunks/control.f5b05b5f.js";import{s as Ae,o as Re,p as xe,n as pe,d as qe}from"../chunks/scheduler.435e299d.js";import{S as Me,i as Je,r as ae,s as H,u as ne,c as S,v as re,a as O,d as Z,t as se,f,w as oe,g as _,m as Y,h as m,j as g,n as K,k as h,A as r,o as Q,F as _e,C as ee,l as Ee,B as Oe,p as Be,b as Ge,L as Ce}from"../chunks/index.8252da32.js";import{F as Ne,S as me}from"../chunks/SubSection.c9689de4.js";/* empty css                      */import{T as we}from"../chunks/Tooltip.e324a080.js";function Ye(n,e){return new ze(n,e)}new TextEncoder;async function Ke({params:n}){const e=n.slug,l=Te.find(t=>t.slug===e);if(!l)throw Ye(404,{message:"Project not found"});return{project:l}}const dt=Object.freeze(Object.defineProperty({__proto__:null,load:Ke},Symbol.toStringTag,{value:"Module"}));function De(n,e,l){const t=n.slice();return t[4]=e[l],t}function Ie(n,e,l){const t=n.slice();return t[7]=e[l],t}function ke(n,e,l){const t=n.slice();return t[10]=e[l],t}function Ve(n,e,l){const t=n.slice();return t[13]=e[l],t[15]=l,t}function je(n,e,l){const t=n.slice();return t[16]=e[l],t}function Qe(n){let e,l;return e=new Fe({props:{type:"github",size:"lg",iconClass:"hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"}}),{c(){ae(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,s){re(e,t,s),l=!0},p:pe,i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){se(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function We(n){let e,l;return e=new Fe({props:{type:"deployed",size:"lg",iconClass:"hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"}}),{c(){ae(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,s){re(e,t,s),l=!0},p:pe,i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){se(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Xe(n){var V;let e,l,t,s,i,c,u,I,E,R=`${ve(n[0].date)} - ${ve((V=n[0].roadmap[0])==null?void 0:V.releaseDate)??""}`,o,v,q,P,j=n[0].title+"",J,T,U,z=n[0].description+"",k,A,C,M,L=n[0].details+"",d,y,a,D,b,B,G,F,$,W,w;return b=new we({props:{content:"Repository",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),$=new we({props:{content:"Demo",$$slots:{default:[We]},$$scope:{ctx:n}}}),{c(){e=_("div"),l=_("figure"),t=_("img"),c=H(),u=_("div"),I=_("div"),E=_("time"),o=Y(R),q=H(),P=_("h1"),J=Y(j),T=H(),U=_("p"),k=Y(z),A=H(),C=_("div"),M=_("p"),d=Y(L),y=H(),a=_("div"),D=_("a"),ae(b.$$.fragment),G=H(),F=_("a"),ae($.$$.fragment),this.h()},l(x){e=m(x,"DIV",{class:!0});var p=g(e);l=m(p,"FIGURE",{class:!0});var X=g(l);t=m(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(f),c=S(p),u=m(p,"DIV",{class:!0});var N=g(u);I=m(N,"DIV",{class:!0});var te=g(I);E=m(te,"TIME",{datetime:!0});var ue=g(E);o=K(ue,R),ue.forEach(f),te.forEach(f),q=S(N),P=m(N,"H1",{class:!0});var ce=g(P);J=K(ce,j),ce.forEach(f),T=S(N),U=m(N,"P",{class:!0});var de=g(U);k=K(de,z),de.forEach(f),A=S(N),C=m(N,"DIV",{class:!0});var fe=g(C);M=m(fe,"P",{});var he=g(M);d=K(he,L),he.forEach(f),fe.forEach(f),y=S(N),a=m(N,"DIV",{class:!0});var ie=g(a);D=m(ie,"A",{type:!0,href:!0,class:!0});var ge=g(D);ne(b.$$.fragment,ge),ge.forEach(f),G=S(ie),F=m(ie,"A",{href:!0,type:!0,class:!0});var $e=g(F);ne($.$$.fragment,$e),$e.forEach(f),ie.forEach(f),N.forEach(f),p.forEach(f),this.h()},h(){xe(t.src,s=n[0].imgUrl)||h(t,"src",s),h(t,"alt",i=n[0].title),h(t,"class","rounded-lg shadow-md w-full h-auto object-cover mb-4 md:mb-0"),h(l,"class","flex-grow-0 flex-shrink-0 md:flex-grow md:flex-shrink w-full md:w-3/5"),h(E,"datetime",v=n[0].date),h(I,"class","text-sm text-gray-300 mb-2"),h(P,"class","text-4xl font-bold mb-4 accent-color transition duration-300"),h(U,"class","text-base mb-4 leading-relaxed"),h(C,"class","text-sm text-gray-300 mb-6"),h(D,"type","button"),h(D,"href",B=n[0].repoUrl),h(D,"class",""),h(F,"href",W=n[0].liveDemo),h(F,"type","button"),h(F,"class",""),h(a,"class","flex justify-center md:justify-start gap-4"),h(u,"class","flex-grow md:w-[37.5%] text-center md:text-left md:ml-6"),h(e,"class","w-full mx-auto flex flex-col md:flex-row p-4 items-center")},m(x,p){O(x,e,p),r(e,l),r(l,t),r(e,c),r(e,u),r(u,I),r(I,E),r(E,o),r(u,q),r(u,P),r(P,J),r(u,T),r(u,U),r(U,k),r(u,A),r(u,C),r(C,M),r(M,d),r(u,y),r(u,a),r(a,D),re(b,D,null),r(a,G),r(a,F),re($,F,null),w=!0},p(x,p){var te;(!w||p&1&&!xe(t.src,s=x[0].imgUrl))&&h(t,"src",s),(!w||p&1&&i!==(i=x[0].title))&&h(t,"alt",i),(!w||p&1)&&R!==(R=`${ve(x[0].date)} - ${ve((te=x[0].roadmap[0])==null?void 0:te.releaseDate)??""}`)&&Q(o,R),(!w||p&1&&v!==(v=x[0].date))&&h(E,"datetime",v),(!w||p&1)&&j!==(j=x[0].title+"")&&Q(J,j),(!w||p&1)&&z!==(z=x[0].description+"")&&Q(k,z),(!w||p&1)&&L!==(L=x[0].details+"")&&Q(d,L);const X={};p&524288&&(X.$$scope={dirty:p,ctx:x}),b.$set(X),(!w||p&1&&B!==(B=x[0].repoUrl))&&h(D,"href",B);const N={};p&524288&&(N.$$scope={dirty:p,ctx:x}),$.$set(N),(!w||p&1&&W!==(W=x[0].liveDemo))&&h(F,"href",W)},i(x){w||(Z(b.$$.fragment,x),Z($.$$.fragment,x),w=!0)},o(x){se(b.$$.fragment,x),se($.$$.fragment,x),w=!1},d(x){x&&f(e),oe(b),oe($)}}}function Le(n){let e,l,t,s,i="Development Journey",c,u,I=n[13].developmentJourney+"",E,R,o,v,q="Feature Focus",P,j,J,T,U,z="Technical Challenges",k,A,C=n[13].technicalChallenges+"",M,L,d,y,a="Learning and Skills Acquired",D,b,B=n[13].skillsLearned+"",G,F,$,W=le(n[13].featureFocus),w=[];for(let V=0;V<W.length;V+=1)w[V]=He(je(n,W,V));return{c(){e=_("div"),l=_("div"),t=_("div"),s=_("h5"),s.textContent=i,c=H(),u=_("p"),E=Y(I),R=H(),o=_("div"),v=_("h5"),v.textContent=q,P=H(),j=_("ul");for(let V=0;V<w.length;V+=1)w[V].c();J=H(),T=_("div"),U=_("h5"),U.textContent=z,k=H(),A=_("p"),M=Y(C),L=H(),d=_("div"),y=_("h5"),y.textContent=a,D=H(),b=_("p"),G=Y(B),this.h()},l(V){e=m(V,"DIV",{class:!0});var x=g(e);l=m(x,"DIV",{class:!0});var p=g(l);t=m(p,"DIV",{});var X=g(t);s=m(X,"H5",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-1hvh0xc"&&(s.textContent=i),c=S(X),u=m(X,"P",{class:!0});var N=g(u);E=K(N,I),N.forEach(f),X.forEach(f),R=S(p),o=m(p,"DIV",{});var te=g(o);v=m(te,"H5",{class:!0,"data-svelte-h":!0}),ee(v)!=="svelte-rj8u5b"&&(v.textContent=q),P=S(te),j=m(te,"UL",{class:!0});var ue=g(j);for(let ie=0;ie<w.length;ie+=1)w[ie].l(ue);ue.forEach(f),te.forEach(f),J=S(p),T=m(p,"DIV",{});var ce=g(T);U=m(ce,"H5",{class:!0,"data-svelte-h":!0}),ee(U)!=="svelte-1noniny"&&(U.textContent=z),k=S(ce),A=m(ce,"P",{class:!0});var de=g(A);M=K(de,C),de.forEach(f),ce.forEach(f),L=S(p),d=m(p,"DIV",{});var fe=g(d);y=m(fe,"H5",{class:!0,"data-svelte-h":!0}),ee(y)!=="svelte-1gx0by4"&&(y.textContent=a),D=S(fe),b=m(fe,"P",{class:!0});var he=g(b);G=K(he,B),he.forEach(f),fe.forEach(f),p.forEach(f),x.forEach(f),this.h()},h(){h(s,"class","font-semibold text-amber-300"),h(u,"class","text-gray-300"),h(v,"class","font-semibold text-amber-300"),h(j,"class","list-disc pl-5 text-gray-300"),h(U,"class","font-semibold text-amber-300"),h(A,"class","text-gray-300"),h(y,"class","font-semibold text-amber-300"),h(b,"class","text-gray-300"),h(l,"class","space-y-4"),h(e,"class","mt-2 bg-gray-800 p-4 rounded-lg shadow-lg")},m(V,x){O(V,e,x),r(e,l),r(l,t),r(t,s),r(t,c),r(t,u),r(u,E),r(l,R),r(l,o),r(o,v),r(o,P),r(o,j);for(let p=0;p<w.length;p+=1)w[p]&&w[p].m(j,null);r(l,J),r(l,T),r(T,U),r(T,k),r(T,A),r(A,M),r(l,L),r(l,d),r(d,y),r(d,D),r(d,b),r(b,G),$=!0},p(V,x){if((!$||x&1)&&I!==(I=V[13].developmentJourney+"")&&Q(E,I),x&1){W=le(V[13].featureFocus);let p;for(p=0;p<W.length;p+=1){const X=je(V,W,p);w[p]?w[p].p(X,x):(w[p]=He(X),w[p].c(),w[p].m(j,null))}for(;p<w.length;p+=1)w[p].d(1);w.length=W.length}(!$||x&1)&&C!==(C=V[13].technicalChallenges+"")&&Q(M,C),(!$||x&1)&&B!==(B=V[13].skillsLearned+"")&&Q(G,B)},i(V){$||(V&&qe(()=>{$&&(F||(F=Ce(e,be,{},!0)),F.run(1))}),$=!0)},o(V){V&&(F||(F=Ce(e,be,{},!1)),F.run(0)),$=!1},d(V){V&&f(e),_e(w,V),V&&F&&F.end()}}}function He(n){let e,l=n[16]+"",t;return{c(){e=_("li"),t=Y(l)},l(s){e=m(s,"LI",{});var i=g(e);t=K(i,l),i.forEach(f)},m(s,i){O(s,e,i),r(e,t)},p(s,i){i&1&&l!==(l=s[16]+"")&&Q(t,l)},d(s){s&&f(e)}}}function Se(n){let e,l,t,s=n[13].version+"",i,c,u,I=n[13].status+"",E,R,o,v,q,P,j,J=n[13].description+"",T,U,z,k=n[13].isExpanded?"Hide Details":"View Details",A,C,M,L,d;function y(){return n[3](n[15])}let a=n[13].isExpanded&&Le(n);return{c(){e=_("div"),l=_("div"),t=_("h4"),i=Y(s),c=H(),u=_("span"),E=Y(I),R=H(),o=_("div"),v=_("div"),q=_("div"),P=H(),j=_("p"),T=Y(J),U=H(),z=_("button"),A=Y(k),C=H(),a&&a.c(),M=H(),this.h()},l(D){e=m(D,"DIV",{class:!0});var b=g(e);l=m(b,"DIV",{class:!0});var B=g(l);t=m(B,"H4",{class:!0});var G=g(t);i=K(G,s),G.forEach(f),c=S(B),u=m(B,"SPAN",{class:!0});var F=g(u);E=K(F,I),F.forEach(f),B.forEach(f),R=S(b),o=m(b,"DIV",{class:!0});var $=g(o);v=m($,"DIV",{class:!0});var W=g(v);q=m(W,"DIV",{class:!0,style:!0}),g(q).forEach(f),W.forEach(f),P=S($),j=m($,"P",{class:!0});var w=g(j);T=K(w,J),w.forEach(f),U=S($),z=m($,"BUTTON",{class:!0});var V=g(z);A=K(V,k),V.forEach(f),C=S($),a&&a.l($),$.forEach(f),M=S(b),b.forEach(f),this.h()},h(){h(t,"class","text-xl font-bold text-white"),h(u,"class","text-sm text-gray-300"),h(l,"class","flex justify-between items-center"),h(q,"class","bg-amber-300 h-2 rounded-full"),Ee(q,"width",n[13].progress+"%"),h(v,"class","h-2 bg-gray-500 rounded-full"),h(j,"class","text-gray-200 mt-2"),h(z,"class","accent-color text-sm mt-2"),h(o,"class","mt-2"),h(e,"class","mb-8")},m(D,b){O(D,e,b),r(e,l),r(l,t),r(t,i),r(l,c),r(l,u),r(u,E),r(e,R),r(e,o),r(o,v),r(v,q),r(o,P),r(o,j),r(j,T),r(o,U),r(o,z),r(z,A),r(o,C),a&&a.m(o,null),r(e,M),L||(d=Oe(z,"click",y),L=!0)},p(D,b){n=D,b&1&&s!==(s=n[13].version+"")&&Q(i,s),b&1&&I!==(I=n[13].status+"")&&Q(E,I),b&1&&Ee(q,"width",n[13].progress+"%"),b&1&&J!==(J=n[13].description+"")&&Q(T,J),b&1&&k!==(k=n[13].isExpanded?"Hide Details":"View Details")&&Q(A,k),n[13].isExpanded?a?(a.p(n,b),b&1&&Z(a,1)):(a=Le(n),a.c(),Z(a,1),a.m(o,null)):a&&(Be(),se(a,1,1,()=>{a=null}),Ge())},d(D){D&&f(e),a&&a.d(),L=!1,d()}}}function Ze(n){let e,l=le(n[0].roadmap),t=[];for(let s=0;s<l.length;s+=1)t[s]=Se(Ve(n,l,s));return{c(){e=_("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var i=g(e);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(f),this.h()},h(){h(e,"class","container mx-auto")},m(s,i){O(s,e,i);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(s,i){if(i&3){l=le(s[0].roadmap);let c;for(c=0;c<l.length;c+=1){const u=Ve(s,l,c);t[c]?t[c].p(u,i):(t[c]=Se(u),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=l.length}},d(s){s&&f(e),_e(t,s)}}}function ye(n){let e,l=n[10]+"",t;return{c(){e=_("li"),t=Y(l),this.h()},l(s){e=m(s,"LI",{class:!0});var i=g(e);t=K(i,l),i.forEach(f),this.h()},h(){h(e,"class","my-[6px] text-sm")},m(s,i){O(s,e,i),r(e,t)},p(s,i){i&1&&l!==(l=s[10]+"")&&Q(t,l)},d(s){s&&f(e)}}}function Pe(n){let e,l=n[7]+"",t;return{c(){e=_("li"),t=Y(l),this.h()},l(s){e=m(s,"LI",{class:!0});var i=g(e);t=K(i,l),i.forEach(f),this.h()},h(){h(e,"class","my-[6px] text-sm")},m(s,i){O(s,e,i),r(e,t)},p(s,i){i&1&&l!==(l=s[7]+"")&&Q(t,l)},d(s){s&&f(e)}}}function Ue(n){let e,l=n[4]+"",t;return{c(){e=_("li"),t=Y(l),this.h()},l(s){e=m(s,"LI",{class:!0});var i=g(e);t=K(i,l),i.forEach(f),this.h()},h(){h(e,"class","my-[6px] text-sm")},m(s,i){O(s,e,i),r(e,t)},p(s,i){i&1&&l!==(l=s[4]+"")&&Q(t,l)},d(s){s&&f(e)}}}function et(n){let e,l,t,s="Stack",i,c,u,I,E,R="Concepts",o,v,q,P,j,J="Libraries",T,U,z=le(n[0].stack),k=[];for(let d=0;d<z.length;d+=1)k[d]=ye(ke(n,z,d));let A=le(n[0].concepts),C=[];for(let d=0;d<A.length;d+=1)C[d]=Pe(Ie(n,A,d));let M=le(n[0].libraries),L=[];for(let d=0;d<M.length;d+=1)L[d]=Ue(De(n,M,d));return{c(){e=_("div"),l=_("div"),t=_("h3"),t.textContent=s,i=H(),c=_("ul");for(let d=0;d<k.length;d+=1)k[d].c();u=H(),I=_("div"),E=_("h3"),E.textContent=R,o=H(),v=_("ul");for(let d=0;d<C.length;d+=1)C[d].c();q=H(),P=_("div"),j=_("h3"),j.textContent=J,T=H(),U=_("ul");for(let d=0;d<L.length;d+=1)L[d].c();this.h()},l(d){e=m(d,"DIV",{class:!0});var y=g(e);l=m(y,"DIV",{class:!0});var a=g(l);t=m(a,"H3",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-dfwifl"&&(t.textContent=s),i=S(a),c=m(a,"UL",{class:!0});var D=g(c);for(let $=0;$<k.length;$+=1)k[$].l(D);D.forEach(f),a.forEach(f),u=S(y),I=m(y,"DIV",{class:!0});var b=g(I);E=m(b,"H3",{class:!0,"data-svelte-h":!0}),ee(E)!=="svelte-16qwmeo"&&(E.textContent=R),o=S(b),v=m(b,"UL",{class:!0});var B=g(v);for(let $=0;$<C.length;$+=1)C[$].l(B);B.forEach(f),b.forEach(f),q=S(y),P=m(y,"DIV",{class:!0});var G=g(P);j=m(G,"H3",{class:!0,"data-svelte-h":!0}),ee(j)!=="svelte-1mfv98u"&&(j.textContent=J),T=S(G),U=m(G,"UL",{class:!0});var F=g(U);for(let $=0;$<L.length;$+=1)L[$].l(F);F.forEach(f),G.forEach(f),y.forEach(f),this.h()},h(){h(t,"class","text-gray-50 font-bold uppercase"),h(c,"class","text-gray-300"),h(l,"class","mb-6 md:w-[47%]"),h(E,"class","text-gray-50 font-bold uppercase"),h(v,"class","text-gray-300"),h(I,"class","mb-6 md:w-[47%]"),h(j,"class","text-gray-50 font-bold uppercase"),h(U,"class","text-gray-300"),h(P,"class","mb-6 md:w-[47%]"),h(e,"class","flex justify-between flex-wrap md:flex-nowrap")},m(d,y){O(d,e,y),r(e,l),r(l,t),r(l,i),r(l,c);for(let a=0;a<k.length;a+=1)k[a]&&k[a].m(c,null);r(e,u),r(e,I),r(I,E),r(I,o),r(I,v);for(let a=0;a<C.length;a+=1)C[a]&&C[a].m(v,null);r(e,q),r(e,P),r(P,j),r(P,T),r(P,U);for(let a=0;a<L.length;a+=1)L[a]&&L[a].m(U,null)},p(d,y){if(y&1){z=le(d[0].stack);let a;for(a=0;a<z.length;a+=1){const D=ke(d,z,a);k[a]?k[a].p(D,y):(k[a]=ye(D),k[a].c(),k[a].m(c,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=z.length}if(y&1){A=le(d[0].concepts);let a;for(a=0;a<A.length;a+=1){const D=Ie(d,A,a);C[a]?C[a].p(D,y):(C[a]=Pe(D),C[a].c(),C[a].m(v,null))}for(;a<C.length;a+=1)C[a].d(1);C.length=A.length}if(y&1){M=le(d[0].libraries);let a;for(a=0;a<M.length;a+=1){const D=De(d,M,a);L[a]?L[a].p(D,y):(L[a]=Ue(D),L[a].c(),L[a].m(U,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=M.length}},d(d){d&&f(e),_e(k,d),_e(C,d),_e(L,d)}}}function tt(n){let e,l="Screenshots (expandable)",t,s,i="REPLs";return{c(){e=_("div"),e.textContent=l,t=H(),s=_("div"),s.textContent=i},l(c){e=m(c,"DIV",{"data-svelte-h":!0}),ee(e)!=="svelte-gg4230"&&(e.textContent=l),t=S(c),s=m(c,"DIV",{"data-svelte-h":!0}),ee(s)!=="svelte-r00vzs"&&(s.textContent=i)},m(c,u){O(c,e,u),O(c,t,u),O(c,s,u)},p:pe,d(c){c&&(f(e),f(t),f(s))}}}function lt(n){let e,l="Screenshots (expandable)",t,s,i="REPLs";return{c(){e=_("div"),e.textContent=l,t=H(),s=_("div"),s.textContent=i},l(c){e=m(c,"DIV",{"data-svelte-h":!0}),ee(e)!=="svelte-gg4230"&&(e.textContent=l),t=S(c),s=m(c,"DIV",{"data-svelte-h":!0}),ee(s)!=="svelte-r00vzs"&&(s.textContent=i)},m(c,u){O(c,e,u),O(c,t,u),O(c,s,u)},p:pe,d(c){c&&(f(e),f(t),f(s))}}}function st(n){let e,l,t,s,i,c,u,I,E,R;return e=new Ne({props:{id:"project-start",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),t=new me({props:{id:"project-roadmap",heading:"Roadmap",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),i=new me({props:{id:"project-tech",heading:"Technology",$$slots:{default:[et]},$$scope:{ctx:n}}}),u=new me({props:{id:"project-highlights",heading:"Highlights",$$slots:{default:[tt]},$$scope:{ctx:n}}}),E=new me({props:{id:"project-highlights",heading:"Highlights",$$slots:{default:[lt]},$$scope:{ctx:n}}}),{c(){ae(e.$$.fragment),l=H(),ae(t.$$.fragment),s=H(),ae(i.$$.fragment),c=H(),ae(u.$$.fragment),I=H(),ae(E.$$.fragment)},l(o){ne(e.$$.fragment,o),l=S(o),ne(t.$$.fragment,o),s=S(o),ne(i.$$.fragment,o),c=S(o),ne(u.$$.fragment,o),I=S(o),ne(E.$$.fragment,o)},m(o,v){re(e,o,v),O(o,l,v),re(t,o,v),O(o,s,v),re(i,o,v),O(o,c,v),re(u,o,v),O(o,I,v),re(E,o,v),R=!0},p(o,[v]){const q={};v&524289&&(q.$$scope={dirty:v,ctx:o}),e.$set(q);const P={};v&524289&&(P.$$scope={dirty:v,ctx:o}),t.$set(P);const j={};v&524289&&(j.$$scope={dirty:v,ctx:o}),i.$set(j);const J={};v&524288&&(J.$$scope={dirty:v,ctx:o}),u.$set(J);const T={};v&524288&&(T.$$scope={dirty:v,ctx:o}),E.$set(T)},i(o){R||(Z(e.$$.fragment,o),Z(t.$$.fragment,o),Z(i.$$.fragment,o),Z(u.$$.fragment,o),Z(E.$$.fragment,o),R=!0)},o(o){se(e.$$.fragment,o),se(t.$$.fragment,o),se(i.$$.fragment,o),se(u.$$.fragment,o),se(E.$$.fragment,o),R=!1},d(o){o&&(f(l),f(s),f(c),f(I)),oe(e,o),oe(t,o),oe(i,o),oe(u,o),oe(E,o)}}}function ve(n){const e=new Date(n);return`${e.toLocaleString("default",{month:"long"})} ${e.getDate()}, ${e.getFullYear()}`}function at(n,e,l){let{data:t}=e,s=t.project;Re(()=>{l(0,s.roadmap[0].isExpanded=!0,s)});function i(u){l(0,s.roadmap[u].isExpanded=!s.roadmap[u].isExpanded,s)}const c=u=>i(u);return n.$$set=u=>{"data"in u&&l(2,t=u.data)},[s,i,t,c]}class ht extends Me{constructor(e){super(),Je(this,e,at,st,Ae,{data:2})}}export{ht as component,dt as universal};
