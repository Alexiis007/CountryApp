import{M as f,N as l,O as d,Q as u,T as a,U as h,V as C,W as g,Z as M,_ as b,g as r,i as c,j as i,r as m,s as p,t as s}from"./chunk-ZODLYQAM.js";var j=[{path:"home",component:h},{path:"about",component:C},{path:"contact",component:g},{path:"countries",loadChildren:()=>import("./chunk-27JHF4AJ.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(j),a]});let o=t;return o})();var w=(()=>{let t=class t{constructor(){this.title="CountryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,x){e&1&&(m(0,"div",0)(1,"div",1),s(2,"shared-sidebar"),p(),m(3,"div",2),s(4,"router-outlet"),p()())},dependencies:[u,M]});let o=t;return o})();var N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[w]}),t.\u0275inj=r({imports:[d,v,b,f]});let o=t;return o})();l().bootstrapModule(N).catch(o=>console.error(o));