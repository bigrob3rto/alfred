import{a as I,b as H}from"./chunk-C7XZ7IYY.js";import{$ as p,Ga as g,Ha as y,Pa as l,aa as s,ca as h,cd as T,dd as D,ea as c,jb as b,kb as v,ma as C,na as f,sc as x,tc as E,wc as w,xa as r,ya as i,za as u}from"./chunk-DKATF27P.js";import{a,b as m}from"./chunk-Q7L6LLAK.js";var M=["*"],A=(()=>{class t{constructor(o,e){this.document=o,this.renderer=e}themeColors(){Array.from(this.document.querySelectorAll(".theme-color")).forEach(o=>{let e=o,n=I("background-color",e)??"#fff",d=this.renderer.createElement("table");d.innerHTML=`
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${H(n)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${n}</td>
            </tr>
          </table>
        `,this.renderer.appendChild(e.parentNode,d)})}ngOnInit(){}ngAfterViewInit(){this.themeColors()}static{this.\u0275fac=function(e){return new(e||t)(s(b),s(h))}}static{this.\u0275cmp=c({type:t,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"mb-4"]],template:function(e,n){e&1&&(r(0,"c-card",0)(1,"c-card-header"),l(2," Editor "),i(),r(3,"c-card-body")(4,"c-row")(5,"p"),l(6,"Works!"),i()()()())},dependencies:()=>[x,w,E,D],encapsulation:2})}}return t})(),N=(()=>{class t{constructor(){this.color="",this.colorClasses={"theme-color w-75 rounded mb-3":!0},this.display="contents"}ngOnInit(){this.colorClasses=m(a({},this.colorClasses),{[`bg-${this.color}`]:!!this.color})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-theme-color"]],hostVars:2,hostBindings:function(e,n){e&2&&f("display",n.display)},inputs:{color:"color"},ngContentSelectors:M,decls:3,vars:1,consts:[["xl","2","md","4","sm","6","xs","12",1,"my-4","ms-4"],[2,"padding-top","75%",3,"ngClass"]],template:function(e,n){e&1&&(g(),r(0,"c-col",0),u(1,"div",1),y(2),i()),e&2&&(p(),C("ngClass",n.colorClasses))},dependencies:[T,v],encapsulation:2})}}return t})();export{A as EditorComponent,N as ThemeColorComponent};
