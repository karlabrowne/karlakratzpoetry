import{y as t,S as e,i as n,s as o,l,g as r,m as a,e as s,t as c,c as f,a as i,b as u,d as h,f as d,h as m,j as g,k as p,n as v,o as x,p as P,q as y,E,r as w,v as b,w as j,x as k}from"./client.814cb2a9.js";function q(t,e,n){const o=t.slice();return o[1]=e[n].children,o}function B(t,e,n){const o=t.slice();return o[4]=e[n].text,o}function M(t){let e,n,o,l,a=t[4]+"";return{c(){e=s("p"),n=c(a),this.h()},l(t){e=f(t,"P",{class:!0});var o=i(e);n=u(o,a),o.forEach(h),this.h()},h(){d(e,"class","svelte-9fg21f")},m(t,o){r(t,e,o),m(e,n),l=!0},p(t,e){(!l||1&e)&&a!==(a=t[4]+"")&&g(n,a)},i(t){l||(b((()=>{o||(o=p(e,j,{},!0)),o.run(1)})),l=!0)},o(t){o||(o=p(e,j,{},!1)),o.run(0),l=!1},d(t){t&&h(e),t&&o&&o.end()}}}function $(t){let e,n,o=t[1],s=[];for(let e=0;e<o.length;e+=1)s[e]=M(B(t,o,e));const c=t=>v(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=l()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=l()},m(t,o){for(let e=0;e<s.length;e+=1)s[e].m(t,o);r(t,e,o),n=!0},p(t,n){if(1&n){let l;for(o=t[1],l=0;l<o.length;l+=1){const r=B(t,o,l);s[l]?(s[l].p(r,n),a(s[l],1)):(s[l]=M(r),s[l].c(),a(s[l],1),s[l].m(e.parentNode,e))}for(k(),l=o.length;l<s.length;l+=1)c(l);x()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)a(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)v(s[t]);n=!1},d(t){P(s,t),t&&h(e)}}}function _(t){let e,n,o,l,B,M,_,D=t[0].name+"",H=t[0].content,I=[];for(let e=0;e<H.length;e+=1)I[e]=$(q(t,H,e));const N=t=>v(I[t],1,1,(()=>{I[t]=null}));return{c(){e=y(),n=s("div"),o=s("h1"),l=c(D),M=y();for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){E('[data-svelte="svelte-1qupx5s"]',document.head).forEach(h),e=w(t),n=f(t,"DIV",{id:!0,class:!0});var r=i(n);o=f(r,"H1",{class:!0});var a=i(o);l=u(a,D),a.forEach(h),M=w(r);for(let t=0;t<I.length;t+=1)I[t].l(r);r.forEach(h),this.h()},h(){document.title="Poems",d(o,"class","poem-title"),d(n,"id","content"),d(n,"class","svelte-9fg21f")},m(t,a){r(t,e,a),r(t,n,a),m(n,o),m(o,l),m(n,M);for(let t=0;t<I.length;t+=1)I[t].m(n,null);_=!0},p(t,[e]){if((!_||1&e)&&D!==(D=t[0].name+"")&&g(l,D),1&e){let o;for(H=t[0].content,o=0;o<H.length;o+=1){const l=q(t,H,o);I[o]?(I[o].p(l,e),a(I[o],1)):(I[o]=$(l),I[o].c(),a(I[o],1),I[o].m(n,null))}for(k(),o=H.length;o<I.length;o+=1)N(o);x()}},i(t){if(!_){b((()=>{B||(B=p(o,j,{},!0)),B.run(1)}));for(let t=0;t<H.length;t+=1)a(I[t]);_=!0}},o(t){B||(B=p(o,j,{},!1)),B.run(0),I=I.filter(Boolean);for(let t=0;t<I.length;t+=1)v(I[t]);_=!1},d(t){t&&h(e),t&&h(n),t&&B&&B.end(),P(I,t)}}}var D=function(t,e,n,o){return new(n||(n=Promise))((function(l,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?l(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))};function H(){return D(this,void 0,void 0,(function*(){const e=yield t.fetch("*[_type == 'poem' && featured]{_id, slug, name, content, background}");return{featuredPoem:e[Math.floor(Math.random()*e.length)]}}))}function I(t,e,n){let{featuredPoem:o}=e;return t.$$set=t=>{"featuredPoem"in t&&n(0,o=t.featuredPoem)},[o]}export default class extends e{constructor(t){super(),n(this,t,I,_,o,{featuredPoem:0})}}export{H as preload};