(window["webpackJsonpeverest-web-app"]=window["webpackJsonpeverest-web-app"]||[]).push([[0],{127:function(e,t,n){e.exports=n.p+"static/media/EverestPerson.b83557ef.svg"},138:function(e,t,n){e.exports=n(279)},143:function(e,t,n){},144:function(e,t,n){},277:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(126),o=n.n(l),i=(n(143),n(19)),c=n(22),s=(n(144),function(e){var t=e.twitter,n=e.website,a=e.name,l=e.description,o="https://twitter.com/".concat(t),i="@".concat(t);return r.a.createElement("div",null,r.a.createElement("h2",null,"Everest"===a?"About":a),r.a.createElement("p",null,r.a.createElement("b",null,"Description:")," ",l),r.a.createElement("p",null,r.a.createElement("b",null,"Website:")," ","Everest"===a?"You're on it dummy":r.a.createElement("a",{className:"App-link",href:n,target:"_blank",rel:"noopener noreferrer"},n)),r.a.createElement("p",null,r.a.createElement("b",null,"Twitter:")," ",r.a.createElement("a",{className:"App-link",href:o,target:"_blank",rel:"noopener noreferrer"},i)))}),m={name:"Everest",description:"universally shared \u2018yellowpages\u2019 registry for eth community. we use fancy tech like TCRs and bonding curves. we\u2019re hiring. dm @EverestProject. we probably won\u2019t respond. if we collaborate, we can line up all our ducks in a row.",twitter:"EverestProject",website:"",tagline:"",type:""};function p(){return r.a.createElement(s,{name:m.name,tagline:m.tagline,website:m.website,twitter:m.twitter,description:m.description,type:m.type})}var u=n(127),d=n.n(u);function b(e){return r.a.createElement("b",null,r.a.createElement(i.b,{className:"App-link",to:e.to},e.label))}function E(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Everest"),r.a.createElement("img",{src:d.a,className:"App-logo",alt:"Person on Everest"}),r.a.createElement("h3",null,r.a.createElement(b,{to:"/applications",label:"Applications"})),r.a.createElement("h3",null,r.a.createElement(b,{to:"/infrastructure",label:"Infrastructure"})),r.a.createElement("h3",null,r.a.createElement(b,{to:"/services",label:"Services"})),r.a.createElement("h3",null,r.a.createElement(b,{to:"/content",label:"Content"})))}var g=n(15),h=n(36),w=(n(277),function(e){return r.a.createElement("div",{className:"container"},e.children)}),f=h.object().shape({name:h.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),website:h.string().url().required("Required"),twitter:h.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),description:h.string().min(2,"Too Short!").max(1e3,"Too Long!")}),y=function(){return r.a.createElement(w,null,r.a.createElement(g.d,{initialValues:{name:"",website:"https://",twitter:"",description:"",type:"",tagline:""},validationSchema:f,onSubmit:function(e,t){console.log({values:e,actions:t}),alert(JSON.stringify(e,null,2)),t.setSubmitting(!1)},render:function(e){var t=e.status,n=e.isSubmitting;return r.a.createElement(g.c,null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement(g.b,{type:"text",id:"name",name:"name",placeholder:"Name"}),r.a.createElement(g.a,{name:"name",component:"div"}),r.a.createElement("label",{htmlFor:"website"},"Website"),r.a.createElement(g.b,{type:"text",id:"website",name:"website",placeholder:"https://"}),r.a.createElement(g.a,{name:"website",component:"div"}),r.a.createElement("label",{htmlFor:"twitter"},"twitter"),r.a.createElement(g.b,{type:"text",id:"twitter",name:"twitter",placeholder:"@jack"}),r.a.createElement(g.a,{name:"twitter",component:"div"}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement(g.b,{type:"text",component:"textarea",id:"description",name:"description",placeholder:"This project..."}),r.a.createElement(g.a,{name:"name",component:"div"}),t&&t.msg&&r.a.createElement("div",null,t.msg),r.a.createElement("button",{type:"submit",disabled:n},"Submit"))}}))};function v(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Create a listing"),r.a.createElement(y,null))}var k=["DeFi","DAOs","games","social","DEX","collectibles"],O=["development framework","sidechains","user authentication","state channels","onboarding","testing"],D=["audits","development","legal","design","accounting","PR"],A=["podcasts","wikis","events","forums","news"],j=[{name:"MetaCartel DAO",type:"DAO",tagline:"we like dapps",website:"https://www.metacartel.org/",twitter:"meta_cartel",description:"we like dapps"},{name:"PokeMol",type:"DAO",tagline:"pocket moloch",website:"",twitter:"PocketMoloch",description:"Open Source Mobile-first @MolochDAO frontend with @abridged_io contract wallets ftw. By @odyssyautomaton"},{name:"Compound",type:"DeFi",tagline:"Interest and borrowing, for the open financial system.",website:"https://compound.finance/",twitter:"compoundfinance",description:"Compound is an open-source, autonomous protocol built for developers, to unlock a universe of new financial applications. Interest and borrowing, for the open financial system."},{name:"Mintbase",type:"collectibles",tagline:"Digital assets minted and backed by you",website:"https://mintbase.io/",twitter:"mintbase",description:"Digital assets minted and backed by you"},{name:"Pepper 4D",type:"games",tagline:"gang gang gang",website:"",twitter:"",description:""},{name:"FrAnK",type:"social",tagline:"what you looking at bish",website:"",twitter:"",description:""},{name:"YoloRekt",type:"games",tagline:"we're definitely a finance game, not a casino",website:"",twitter:"",description:""}],P=[{name:"MetaCartel DAO",type:"DAO",tagline:"we like dapps",website:"https://www.metacartel.org/",twitter:"meta_cartel",description:"we like dapps"},{name:"PokeMol",type:"DAO",tagline:"pocket moloch",website:"",twitter:"PocketMoloch",description:"Open Source Mobile-first @MolochDAO frontend with @abridged_io contract wallets ftw. By @odyssyautomaton"}],x=[{name:"The Graph",type:"indexing",tagline:"A query protocol for blockchains",website:"https://thegraph.com/",twitter:"graphprotocol",description:"A query protocol for blockchains"}],S=[{name:"EthHub",type:"information",tagline:"EthHub provides research and resources to learn about Ethereum",website:"https://ethhub.io/",twitter:"ethhub_io",description:"EthHub provides research and resources to learn about Ethereum"}],F=[{name:"OpenZeppelin",type:"audits",tagline:"Security audits for distributed systems",website:"https://openzeppelin.com/security-audits/",twitter:"openzeppelin",description:"OpenZeppelin verifies that your distributed systems work as intended by performing an audit. Our engineers fully review your system\u2019s architecture and codebase, and then write a thorough report that includes actionable feedback for every issue found. "}];function I(){var e=Object(c.f)().slug;console.log({slug:e});var t=parseInt(e||"0");console.log({arrayIndex:t});var n=P[t];return console.log(n),r.a.createElement(s,{name:n.name,tagline:n.tagline,website:n.website,twitter:n.twitter,description:n.description,type:n.type})}function C(e){e.match;return r.a.createElement("div",null,r.a.createElement("h1",null,"Proposals"),P.map((function(e,t){var n=e.name;return r.a.createElement("p",{key:t},r.a.createElement(b,{to:"/proposals/".concat(t),label:n}))})))}var N=n(137),T=n(131);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(T.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={DeFi:!0,DAOs:!0,games:!0,social:!0,DEX:!0,collectibles:!0};function R(e,t){switch(t.type){case"DeFi":return q({},e,{},{DeFi:!e.DeFi});case"DAOs":return q({},e,{},{DAOs:!e.DAOs});case"games":return q({},e,{},{games:!e.games});case"DEX":return q({},e,{},{DEX:!e.DEX});case"social":return q({},e,{},{social:!e.social});case"collectibles":return q({},e,{},{collectibles:!e.collectibles});default:throw new Error}}function _(e){e.match;var t=Object(a.useReducer)(R,L),n=Object(N.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Applications"),j.map((function(e,t){var n=e.name;return r.a.createElement("p",{key:t},r.a.createElement(b,{to:"/applications/".concat(t),label:n}))})),r.a.createElement("h3",null,"Filters"),r.a.createElement("form",null,k.map((function(e,t){return r.a.createElement("label",{key:t},e,r.a.createElement("input",{name:e,type:"checkbox",checked:l[e],onChange:function(t){console.log(t.target);"".concat(e);o({type:e})}}))}))))}function X(){var e=Object(c.f)().slug;console.log({slug:e});var t=parseInt(e||"0");console.log({arrayIndex:t});var n=j[t];return console.log(n),r.a.createElement(s,{name:n.name,tagline:n.tagline,website:n.website,twitter:n.twitter,description:n.description,type:n.type})}function B(e){e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Services"),F.map((function(e,t){var n=e.name;return r.a.createElement("p",{key:t},r.a.createElement(b,{to:"/services/".concat(t),label:n}))})),r.a.createElement("h3",null,"Filters"),D.map((function(e,t){var n=e.toLowerCase();return r.a.createElement("p",{key:e},r.a.createElement(b,{to:"/services?type=".concat(n),label:e}))})))}function H(){var e=Object(c.f)().slug;console.log({slug:e});var t=parseInt(e||"0");console.log({arrayIndex:t});var n=F[t];return console.log(n),r.a.createElement(s,{name:n.name,tagline:n.tagline,website:n.website,twitter:n.twitter,description:n.description,type:n.type})}function W(e){e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Infrastructure"),x.map((function(e,t){var n=e.name;return r.a.createElement("p",{key:t},r.a.createElement(b,{to:"/infrastructure/".concat(t),label:n}))})),r.a.createElement("h3",null,"Filters"),O.map((function(e,t){var n=e.toLowerCase();return r.a.createElement("p",{key:e},r.a.createElement(b,{to:"/infrastructure?type=".concat(n),label:e}))})))}function G(){var e=Object(c.f)().slug;console.log({slug:e});var t=parseInt(e||"0");console.log({arrayIndex:t});var n=x[t];return console.log(n),r.a.createElement(s,{name:n.name,tagline:n.tagline,website:n.website,twitter:n.twitter,description:n.description,type:n.type})}function J(e){e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Content"),S.map((function(e,t){var n=e.name;return r.a.createElement("p",{key:t},r.a.createElement(b,{to:"/content/".concat(t),label:n}))})),r.a.createElement("h3",null,"Filters"),A.map((function(e,t){var n=e.toLowerCase();return r.a.createElement("p",{key:e},r.a.createElement(b,{to:"/content?type=".concat(n),label:e}))})))}function z(){var e=Object(c.f)().slug;console.log({slug:e});var t=parseInt(e||"0");console.log({arrayIndex:t});var n=S[t];return console.log(n),r.a.createElement(s,{name:n.name,tagline:n.tagline,website:n.website,twitter:n.twitter,description:n.description,type:n.type})}var V=n(132),Y=n(78),Z=n(59);function K(){var e=Object(V.a)(["\n  {\n    domains(first: 10) {\n      name\n    }\n  }\n"]);return K=function(){return e},e}var $=Object(Z.b)(K());function Q(){var e=Object(Y.a)($),t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error :("):a.domains.map((function(e){var t=e.name;return r.a.createElement("div",{key:t},r.a.createElement("p",null,t))}))}function U(){return r.a.createElement("div",null,r.a.createElement("h2",null,"ENS names from The Graph"),r.a.createElement(Q,null))}var ee=n(10),te=new Z.a({uri:"https://api.thegraph.com/subgraphs/name/ensdomains/ens"});var ne=function(){return r.a.createElement(ee.a,{client:te},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("p",null,r.a.createElement(b,{to:"/",label:"Home"})),r.a.createElement("p",null,r.a.createElement(b,{to:"/create-listing/",label:"Create a listing"})),r.a.createElement("p",null,r.a.createElement(b,{to:"/proposals",label:"View proposals"})),r.a.createElement("p",null,r.a.createElement(b,{to:"/about/",label:"About"})),r.a.createElement("p",null,r.a.createElement(b,{to:"/ens/",label:"ENS data from The Graph"}))),r.a.createElement("header",{className:"App-header"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:E}),r.a.createElement(c.a,{path:"/create-listing/",component:v}),r.a.createElement(c.a,{path:"/proposals/:slug",component:I}),r.a.createElement(c.a,{path:"/proposals/",component:C}),r.a.createElement(c.a,{path:"/applications/:slug",component:X}),r.a.createElement(c.a,{path:"/applications/",component:_}),r.a.createElement(c.a,{path:"/services/:slug",component:H}),r.a.createElement(c.a,{path:"/services/",component:B}),r.a.createElement(c.a,{path:"/infrastructure/:slug",component:G}),r.a.createElement(c.a,{path:"/infrastructure/",component:W}),r.a.createElement(c.a,{path:"/content/:slug",component:z}),r.a.createElement(c.a,{path:"/content/",component:J}),r.a.createElement(c.a,{path:"/about/",component:p}),r.a.createElement(c.a,{path:"/ens/",component:U}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[138,1,2]]]);
//# sourceMappingURL=main.fd06816a.chunk.js.map