import{$ as r,Ab as z,Ca as j,Fa as x,Ga as g,Ha as h,Ia as v,L as C,M as _,Oa as w,Pa as s,Qa as L,Ta as T,Vb as B,Ya as S,Z as l,aa as y,bb as E,cb as M,ea as p,ja as d,kd as A,ld as F,ma as u,md as N,nb as U,oa as D,qa as k,rc as H,sa as I,xa as a,ya as i,za as f}from"./chunk-TC4ZNBMW.js";var m={name:"coreui-free-angular-admin-template",version:"5.3.2",copyright:"Copyright 2024 creativeLabs \u0141ukasz Holeczek",license:"MIT",author:"The CoreUI Team (https://github.com/orgs/coreui/people) and contributors",homepage:"https://coreui.io/angular",config:{theme:"default",coreui_library_short_version:"5.3",coreui_library_docs_url:"https://coreui.io/angular/docs/"},scripts:{ng:"ng",start:"ng serve -o",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test"},private:!0,dependencies:{"@angular/animations":"^19.0.1","@angular/cdk":"^19.0.1","@angular/common":"^19.0.1","@angular/compiler":"^19.0.1","@angular/core":"^19.0.1","@angular/forms":"^19.0.1","@angular/language-service":"^19.0.1","@angular/platform-browser":"^19.0.1","@angular/platform-browser-dynamic":"^19.0.1","@angular/router":"^19.0.1","@coreui/angular":"~5.3.2","@coreui/angular-chartjs":"~5.3.2","@coreui/chartjs":"~4.0.0","@coreui/coreui":"~5.2.0","@coreui/icons":"^3.0.1","@coreui/icons-angular":"~5.3.2","@coreui/utils":"^2.0.2","@supabase/supabase-js":"^2.46.2","angular2-notifications":"^16.0.1","chart.js":"^4.4.6","lodash-es":"^4.17.21","ngx-scrollbar":"^13.0.3",rxjs:"~7.8.1",tslib:"^2.8.1","zone.js":"~0.15.0"},devDependencies:{"@angular-devkit/build-angular":"^19.0.2","@angular/cli":"^19.0.2","@angular/compiler-cli":"^19.0.1","@angular/localize":"^19.0.1","@types/jasmine":"^5.1.5","@types/lodash-es":"^4.17.12","@types/node":"^20.17.9","angular-cli-ghpages":"^2.0.3","jasmine-core":"^5.4.0",karma:"^6.4.4","karma-chrome-launcher":"^3.2.0","karma-coverage":"^2.2.1","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.1.0",typescript:"~5.5.4"},engines:{node:"^18.19.1 || ^20.11.1",npm:">= 9"}};var V=["*"],$=()=>[],P=(()=>{class t{constructor(e){this.changeDetectorRef=e,this._href="https://coreui.io/angular/docs/"}get exampleClass(){return!0}get href(){return this._href}set href(e){let n=m?.config?.coreui_library_short_version,o=m?.config?.coreui_library_docs_url??"https://coreui.io/angular/";this._href=`${o}${e}`}ngAfterContentInit(){}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}static{this.\u0275fac=function(n){return new(n||t)(y(M))}}static{this.\u0275cmp=p({type:t,selectors:[["app-docs-example"]],hostVars:2,hostBindings:function(n,o){n&2&&D("example",o.exampleClass)},inputs:{fragment:"fragment",href:"href"},ngContentSelectors:V,decls:12,vars:5,consts:[["variant","underline-border",1,"border-bottom","w-100"],["cNavLink","",3,"active","fragment","routerLink"],["cIcon","","name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["cIcon","","name","cilCode",1,"me-2"],[1,"tab-content","rounded-bottom"],[1,"tab-pane","active","show","p-3","preview","fade"]],template:function(n,o){n&1&&(g(),a(0,"c-nav",0)(1,"c-nav-item")(2,"a",1),C(),f(3,"svg",2),s(4," Preview "),i()(),_(),a(5,"c-nav-item")(6,"a",3),C(),f(7,"svg",4),s(8," Code "),i()()(),_(),a(9,"div",5)(10,"div",6),h(11),i()()),n&2&&(r(2),u("active",!0)("fragment",o.fragment)("routerLink",S(4,$)),r(4),u("href",o.href,l))},dependencies:[N,F,A,z,B],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}return t})();var q=(()=>{class t{constructor(){this.href="https://coreui.io/angular/docs/"}get hostClasses(){return{"float-end":!0}}ngOnInit(){this.href=this.name?`https://coreui.io/angular/docs/components/${this.name}`:this.href}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-docs-link"]],hostVars:2,hostBindings:function(n,o){n&2&&k(o.hostClasses)},inputs:{href:"href",name:"name",text:"text"},decls:4,vars:2,consts:[[1,"float-end"],["rel","noreferrer noopener","target","_blank",1,"card-header-action",3,"href"],[1,"text-body-secondary"]],template:function(n,o){if(n&1&&(a(0,"div",0)(1,"a",1)(2,"small",2),s(3),i()()()),n&2){let c;r(),v("href",o.href,l),r(2),L((c=o.text)!==null&&c!==void 0?c:"docs")}},encapsulation:2})}}return t})();var G=["*"];function J(t,b){t&1&&j(0)}function K(t,b){if(t&1&&(a(0,"p"),s(1),i()),t&2){let e=x(2);r(),T(" An Angular ",e.name," component",e.plural?"s":""," ",e.plural?"have":"has"," been created as a native Angular version of Bootstrap ",e.name,". ",e.name," ",e.plural?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements. ")}}function Q(t,b){if(t&1&&(d(0,K,2,6,"p"),h(1),f(2,"br"),s(3," For more information please visit our official "),a(4,"a",3),s(5,"documentation of CoreUI Components Library for Angular."),i()),t&2){let e=x();I(e.name?0:-1),r(4),v("href",e.href,l)}}var W=(()=>{class t{constructor(){this.name="",this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(e){let n=m?.config?.coreui_library_short_version,o=m?.config?.coreui_library_docs_url??"https://coreui.io/angular/",c=e;this._href=`${o}${c}`}get plural(){return this.name?.slice(-1)==="s"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-docs-callout"]],inputs:{name:"name",href:"href"},ngContentSelectors:G,decls:4,vars:1,consts:[["default",""],["color","info",1,"bg-white:dark:bg-transparent"],[4,"ngTemplateOutlet"],["target","_blank",3,"href"]],template:function(n,o){if(n&1&&(g(),a(0,"c-callout",1),d(1,J,1,0,"ng-container",2),i(),d(2,Q,6,2,"ng-template",null,0,E)),n&2){let c=w(3);r(),u("ngTemplateOutlet",c)}},dependencies:[H,U],encapsulation:2})}}return t})();export{W as a,P as b,q as c};