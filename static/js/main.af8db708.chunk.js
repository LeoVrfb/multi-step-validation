(this["webpackJsonpmulti-step-validation"]=this["webpackJsonpmulti-step-validation"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),s=n.n(i),a=(n(11),n(12),n(3)),r=n(2),l=(n(13),n.p+"static/media/healthy.6ccebc97.svg"),o=n.p+"static/media/love.eff86fb3.svg",j=n.p+"static/media/diet.96ec42f9.svg",d=n.p+"static/media/allergy.eab4a1e6.svg",u=n.p+"static/media/thumb.ca372aae.svg",b=n(0);function h(e){var t=e.formIndex;return Object(b.jsxs)("div",{className:"container-indicator",children:[Object(b.jsxs)("div",{className:"container-lines",children:[Object(b.jsx)("div",{className:"line upper-line",style:{width:1===t||2===t?"0%":3===t?"25%":4===t?"50%":5===t?"75%":6===t?"100%":""}}),Object(b.jsx)("div",{className:"line under-line"})]}),Object(b.jsxs)("div",{className:"container-img",children:[Object(b.jsx)("div",{className:"bloc-img",children:Object(b.jsx)("img",{src:l,alt:""})}),Object(b.jsx)("div",{className:"bloc-img",children:Object(b.jsx)("img",{src:o,alt:""})}),Object(b.jsx)("div",{className:"bloc-img",children:Object(b.jsx)("img",{src:d,alt:""})}),Object(b.jsx)("div",{className:"bloc-img",children:Object(b.jsx)("img",{src:j,alt:""})}),Object(b.jsx)("div",{className:"bloc-img",children:Object(b.jsx)("img",{src:u,alt:""})})]})]})}n(15),n(16);function x(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h1",{children:" \ud83c\udf63 Aide-nous \xe0 ravir tes papilles \ud83c\udf36\ufe0f"}),Object(b.jsx)("button",{onClick:function(){return e.modifyIndex(2)},children:"COMMENCER"})]})}function m(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h1",{children:" Bravissimo !"}),Object(b.jsx)("p",{children:"On peut mainteant te proposer des plats en fonction de  tes go\xfbts."}),Object(b.jsx)("button",{children:"COMMENCER"})]})}n(4);function f(e){var t=Object(c.useState)({dietForm:"nodiet"}),n=Object(r.a)(t,2),i=n[0],s=n[1],a=function(e){s({dietForm:e.target.value})};return Object(b.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"diet-form",children:[Object(b.jsx)("p",{children:"Quelle est ton r\xe9gime alimentaire ?"}),Object(b.jsx)("label",{htmlFor:"nodiet",children:"Pas de r\xe9gime en particulier"}),Object(b.jsx)("input",{type:"radio",name:"diet",id:"nodiet",value:"nodiet",onChange:a}),Object(b.jsx)("label",{htmlFor:"homnivorous",children:"Omnivore"}),Object(b.jsx)("input",{type:"radio",name:"diet",id:"homnivorous",value:"homnivorous",onChange:a}),Object(b.jsx)("label",{htmlFor:"vegetarian",children:"Vegetarien"}),Object(b.jsx)("input",{type:"radio",name:"diet",id:"vegetarian",value:"vegetarian",onChange:a}),Object(b.jsx)("label",{htmlFor:"vegan",children:"Vegan"}),Object(b.jsx)("input",{type:"radio",name:"diet",id:"vegan",value:"vegan",onChange:a}),Object(b.jsx)("button",{onClick:function(){return e.modifyIndex(3,i)},children:"Valider"})]})}function p(e){var t=Object(c.useRef)([]),n=function(e){e&&!t.current.includes(e)&&t.current.push(e)};return Object(b.jsxs)("form",{className:"checkbox-form",onSubmit:function(n){n.preventDefault();var c={foodStyle:[]};t.current.forEach((function(e){e.checked&&c.foodStyle.push(e.value)})),e.modifyIndex(4,c)},children:[Object(b.jsx)("p",{children:"Quelles sont tes cuisine pr\xe9f\xe9r\xe9es"}),Object(b.jsx)("span",{children:"Choix multiples."}),Object(b.jsx)("label",{htmlFor:"italian",children:"Italienne"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"italian",value:"italian"}),Object(b.jsx)("label",{htmlFor:"japanese",children:"japonaise"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"japanese",value:"japanese"}),Object(b.jsx)("label",{htmlFor:"indian",children:"Indienne"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"indian",value:"indian"}),Object(b.jsx)("label",{htmlFor:"tha\xef",children:"Tha\xeflandaise"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"tha\xef",value:"tha\xef"}),Object(b.jsx)("label",{htmlFor:"francaise",children:"Fran\xe7aise"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"francaise",value:"francaise"}),Object(b.jsx)("label",{htmlFor:"chinoise",children:"Chinoise"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"chinoise",value:"chinoise"}),Object(b.jsxs)("div",{className:"container-nav-btns",children:[Object(b.jsx)("button",{onClick:function(){e.modifyIndex(2)},type:"button",className:"prev",children:"Pr\xe9c\xe9dent"}),Object(b.jsx)("button",{children:"Valider"})]})]})}function O(e){var t=Object(c.useRef)([]),n=function(e){e&&!t.current.includes(e)&&t.current.push(e)};return Object(b.jsxs)("form",{className:"checkbox-form",onSubmit:function(n){n.preventDefault();var c={allergies:[]};t.current.forEach((function(e){e.checked&&c.allergies.push(e.value)})),e.modifyIndex(5,c)},children:[Object(b.jsx)("p",{children:"Quelles sont tes cuisine pr\xe9f\xe9r\xe9es"}),Object(b.jsx)("span",{children:"Choix multiples."}),Object(b.jsx)("label",{htmlFor:"milk",children:"Lait"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"milk",value:"milk"}),Object(b.jsx)("label",{htmlFor:"pollen",children:"Pollen"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"pollen",value:"pollen"}),Object(b.jsx)("label",{htmlFor:"nuts",children:"Noix"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"nuts",value:"nuts"}),Object(b.jsx)("label",{htmlFor:"eggs",children:"Oeufs"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"eggs",value:"eggs"}),Object(b.jsx)("label",{htmlFor:"shellfish",children:"Fruits de mer"}),Object(b.jsx)("input",{ref:n,type:"checkbox",id:"shellfish",value:"shellfish"}),Object(b.jsxs)("div",{className:"container-nav-btns",children:[Object(b.jsx)("button",{onClick:function(){e.modifyIndex(3)},type:"button",className:"prev",children:"Pr\xe9c\xe9dent"}),Object(b.jsx)("button",{children:"Valider"})]})]})}function v(e){var t=Object(c.useState)({prefs:{love:"",hate:""}}),n=Object(r.a)(t,2),i=n[0],s=n[1],l=function(e,t){"love"===t?s({prefs:Object(a.a)(Object(a.a)({},i.prefs),{},{love:e.target.value})}):"hate"===t&&s({prefs:Object(a.a)(Object(a.a)({},i.prefs),{},{hate:e.target.value})})};return Object(b.jsxs)("form",{className:"preferences-form",onSubmit:function(t){t.preventDefault(),e.modifyIndex(6,i)},children:[Object(b.jsx)("p",{children:"Parle-nous des aliments que tu pr\xe9f\xe8res et que tu d\xe9testes"}),Object(b.jsx)("label",{htmlFor:"prefered",children:"Tes aliments pr\xe9f\xe9r\xe9s, s\xe9par\xe9s par une virgule :"}),Object(b.jsx)("textarea",{id:"prefered",placeholder:"Un ou plusieurs, si tu en as",onChange:function(e){return l(e,"love")}}),Object(b.jsx)("label",{htmlFor:"hated",children:"Les aliments que tu ne supportent pas, s\xe9par\xe9s par une virgule :"}),Object(b.jsx)("textarea",{id:"hated",placeholder:"Un ou plusieurs, si tu en as",onChange:function(e){return l(e,"love")}}),Object(b.jsxs)("div",{className:"container-nav-btns",children:[Object(b.jsx)("button",{type:"button",onClick:function(){e.modifyIndex(4)},className:"prev",children:"Pr\xe9c\xe9dent"}),Object(b.jsx)("button",{children:"Valider"})]})]})}function g(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)({dietForm:"",foodStyle:[],allergies:[],prefs:{}}),l=Object(r.a)(s,2),o=l[0],j=l[1],d=function(e,t){if(i(e),t){var n=Object(a.a)({},o),c=Object.keys(t)[0];n[c]=t[c],j(n)}},u=[Object(b.jsx)(x,{modifyIndex:d}),Object(b.jsx)(f,{modifyIndex:d}),Object(b.jsx)(p,{modifyIndex:d}),Object(b.jsx)(O,{modifyIndex:d}),Object(b.jsx)(v,{modifyIndex:d}),Object(b.jsx)(m,{modifyIndex:d})];return Object(b.jsxs)("div",{className:"container-multiform",children:[Object(b.jsx)(h,{formIndex:n}),u.map((function(e,t){if(t+1===n)return u[t]}))]})}var y=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(g,{})})};s.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.af8db708.chunk.js.map