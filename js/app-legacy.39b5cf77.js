(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function o(t){return r.p+"js/"+({"client-form":"client-form",forms:"forms","full-page":"full-page",profile:"profile",tables:"tables"}[t]||t)+"-legacy."+{"client-form":"9dfea4eb",forms:"d465169e","full-page":"e185b916",profile:"751dd2e7",tables:"444c05ca"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/admin-one-vue-bulma-dashboard/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e1d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-info",attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"}},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[t._v("Star on GitHub")])],1)])])])])])},s=[],n={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=n,r=a("2877"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},"226e":function(t,e,a){t.exports=a.p+"img/justboil-logo.7298fabb.svg"},"2b9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[t.hasRightSlot?t._t("right"):a("b-button",{attrs:{"native-type":"button",type:"is-white",size:"is-small"},on:{click:t.dismiss}},[t._v(" Dismiss ")])],2)])])},s=[],n={name:"Notification",data:function(){return{isDismissed:!1}},computed:{hasRightSlot:function(){return this.$slots.right}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},o=n,r=a("2877"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},"503b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},s=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n,r=a("2877"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("99af"),a("b107");var i,s,n=a("2b0e"),o=a("289d"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",{attrs:{"has-right-visible":!1}},[t._v(" Dashboard ")]),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[t._v(" Please star this project on GitHub "),a("a",{staticClass:"button is-white is-small",attrs:{slot:"right",href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"},slot:"right"},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[t._v("GitHub")])],1)]),a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":t.fillChartData}},[t.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":t.chartData,"extra-options":t.chartOptions}})],1):t._e()]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients"}},[a("clients-table-sample")],1)],1)],1)},c=[],u={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},d={maintainAspectRatio:!1,legend:{display:!1},responsive:!0,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}},m=function(t){for(var e=[],a=0;a<t;a++)e.push(Math.round(200*Math.random()));return e},f=function(t,e){return{fill:!1,borderColor:u.default[t],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:u.default[t],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:u.default[t],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:m(e),tension:.5,cubicInterpolationMode:"default"}},p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=[],a=1;a<=t;a++)e.push("0".concat(a));return{labels:e,datasets:[f("primary",t),f("info",t),f("danger",t)]}},b=a("1e1d"),h=a("503b"),v=a("9e7c"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[t._v(" "+t._s(t.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:t.number,prefix:t.prefix,suffix:t.suffix}})],1)])]),t.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:t.icon,size:"is-large",type:t.type}})],1)]):t._e()])])},C=[],_=(a("a9e3"),a("6df7")),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(t._s(t.prefix)+t._s(t.newValueFormatted)+t._s(t.suffix))])},y=[],k=a("6612"),x=a.n(k),O={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:x()(this.newValue).format("0,0")}},watch:{value:function(){this.growInit()}},mounted:function(){this.growInit()},methods:{grow:function(t){var e=this,a=Math.ceil(this.newValue+t);if(a>this.value)return this.newValue=this.value,!1;this.newValue=a,setTimeout((function(){e.grow(t)}),25)},growInit:function(){this.grow(this.value/(this.duration/25))}}},A=O,D=a("2877"),M=Object(D["a"])(A,w,y,!1,null,null,null),j=M.exports,S={name:"CardWidget",components:{GrowingNumber:j,CardComponent:_["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},E=S,$=Object(D["a"])(E,g,C,!1,null,null,null),B=$.exports,T=a("1fca"),N={name:"LineChart",extends:T["a"],mixins:[T["b"].reactiveProp],props:{extraOptions:{type:Object,default:void 0}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,a){a||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},P=N,L=Object(D["a"])(P,i,s,!1,null,null,null),z=L.exports,V=a("7080"),I=a("2b9d"),F={name:"Home",components:{ClientsTableSample:V["a"],LineChart:z,CardComponent:_["a"],CardWidget:B,Tiles:v["a"],HeroBar:h["a"],TitleBar:b["a"],Notification:I["a"]},data:function(){return{titleStack:["Admin","Dashboard"],chartOptions:d,chartData:null}},mounted:function(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{fillChartData:function(){this.chartData=p()}}},H=F,R=Object(D["a"])(H,l,c,!1,null,null,null),G=R.exports;n["a"].use(r["a"]);var q=[{meta:{title:"Dashboard"},path:"/",name:"home",component:G},{meta:{title:"Tables"},path:"/tables",name:"tables",component:function(){return a.e("tables").then(a.bind(null,"8840"))}},{meta:{title:"Forms"},path:"/forms",name:"forms",component:function(){return a.e("forms").then(a.bind(null,"0894"))}},{meta:{title:"Profile"},path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:function(){return a.e("client-form").then(a.bind(null,"e96b"))}},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:function(){return a.e("client-form").then(a.bind(null,"e96b"))},props:!0},{path:"/full-page",component:function(){return a.e("full-page").then(a.bind(null,"559f"))},children:[{meta:{title:"Login"},path:"/login",name:"login",component:function(){return a.e("full-page").then(a.bind(null,"3ca3d"))}}]}],J=new r["a"]({routes:q,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),W=J;a("b0c0");var U=a("2f62"),Y=a("bc3a"),K=a.n(Y);n["a"].use(U["a"]);var Q=new U["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1,clients:[]},mutations:{basic:function(t,e){t[e.key]=e.value},user:function(t,e){e.name&&(t.userName=e.name),e.email&&(t.userEmail=e.email),e.avatar&&(t.userAvatar=e.avatar)},asideMobileStateToggle:function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="has-aside-mobile-expanded";e=null!==a?a:!t.isAsideMobileExpanded,e?document.documentElement.classList.add(i):document.documentElement.classList.remove(i),t.isAsideMobileExpanded=e},fullPage:function(t,e){t.isNavBarVisible=!e,t.isAsideVisible=!e,t.isFooterBarVisible=!e}},actions:{asideDesktopOnlyToggle:function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(a){case!0:e="add";break;case!1:e="remove";break;default:e="toggle"}document.documentElement.classList[e]("has-aside-desktop-only-visible")},toggleFullPage:function(t,e){var a=t.commit;a("fullPage",e),document.documentElement.classList[e?"remove":"add"]("has-aside-left","has-navbar-fixed-top")},fetch:function(t,e){var a=t.commit;K.a.get("data-sources/".concat(e,".json")).then((function(t){t.data&&t.data.data&&a("basic",{key:e,value:t.data.data})})).catch((function(t){alert(t.message)}))}}}),X=Q;var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:t.menu}}),a("router-view"),a("footer-bar")],1)},tt=[],et=["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"}],"Examples",[{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{to:"/login",label:"Login",icon:"lock"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}],"About",[{href:"https://justboil.me/bulma-admin-template/one/",label:"Premium",icon:"monitor",target:"_blank"},{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",label:"GitHub",icon:"github-circle",target:"_blank"}]],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"show",rawName:"v-show",value:t.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(e){return e.preventDefault(),t.asideToggleMobile.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:t.asideMobileIcon}})],1),a("a",{staticClass:"navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only",on:{click:function(e){return e.preventDefault(),t.asideDesktopOnlyToggle.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:"menu"}})],1),t._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(e){return e.preventDefault(),t.menuToggle.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:t.menuToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":t.isMenuActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[t._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[t._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[t._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log Out")])],1)],1)],1),a("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[a("user-avatar"),a("div",{staticClass:"is-user-name"},[a("span",[t._v(t._s(t.userName))])]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[t._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[t._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log Out")])],1)],1)],1),a("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",title:"GitHub"}},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[t._v("GitHub")])],1),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:t.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log out")])],1)],1)])])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item has-control no-left-space-touch no-left-space-desktop-only"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search everywhere..."}})])])}],st=a("5530"),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"root",staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":t.isHoverable,"is-active":t.isDropdownActive},on:{click:t.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[t._t("default"),a("b-icon",{attrs:{icon:t.dropdownIcon,"custom-size":"default"}})],2),t._t("dropdown")],2)},ot=[],rt={name:"NavBarMenu",props:{isHoverable:Boolean},data:function(){return{isDropdownActive:!1}},computed:{dropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable&&(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(t){this.$refs.root.value.contains(t.target)||(this.isDropdownActive=!1)}}},lt=rt,ct=Object(D["a"])(lt,nt,ot,!1,null,null,null),ut=ct.exports,dt=a("808f"),mt={name:"NavBar",components:{UserAvatar:dt["a"],NavBarMenu:ut},data:function(){return{isMenuActive:!1}},computed:Object(st["a"])({asideMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"},menuToggleIcon:function(){return this.isMenuActive?"close":"dots-vertical"}},Object(U["b"])(["isAsideMobileExpanded","isNavBarVisible","userName"])),mounted:function(){var t=this;this.$router.afterEach((function(){t.isMenuActive=!1}))},methods:{asideToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},asideDesktopOnlyToggle:function(){this.$store.dispatch("asideDesktopOnlyToggle")},menuToggle:function(){this.isMenuActive=!this.isMenuActive},logout:function(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},ft=mt,pt=Object(D["a"])(ft,at,it,!1,null,null,null),bt=pt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{directives:[{name:"show",rawName:"v-show",value:t.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left"},[a("div",{staticClass:"aside-tools"},[a("a",{staticClass:"navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only",on:{click:t.asideToggleDesktopOnly}},[a("b-icon",{attrs:{icon:"menu"}})],1),t._m(0)]),a("div",{staticClass:"menu is-menu-main"},[t._l(t.menu,(function(e,i){return["string"===typeof e?a("p",{key:i,staticClass:"menu-label"},[t._v(" "+t._s(e)+" ")]):a("aside-menu-list",{key:i,attrs:{menu:e},on:{"menu-click":t.menuClick}})]}))],2)])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-tools-label"},[a("span",[a("b",[t._v("Admin")]),t._v(" One")])])}],gt=a("9a7b"),Ct={name:"AsideMenu",components:{AsideMenuList:gt["default"]},props:{menu:{type:Array,default:function(){return[]}}},computed:Object(st["a"])({},Object(U["b"])(["isAsideVisible"])),mounted:function(){var t=this;this.$router.afterEach((function(){t.$store.dispatch("asideDesktopOnlyToggle",!1)}))},methods:{asideToggleDesktopOnly:function(){this.$store.dispatch("asideDesktopOnlyToggle")},menuClick:function(t){}}},_t=Ct,wt=Object(D["a"])(_t,ht,vt,!1,null,null,null),yt=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{directives:[{name:"show",rawName:"v-show",value:t.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[t._v("© "+t._s(t.year)+", JustBoil.me")]),t._v(". "),a("a",{attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"}},[t._v("GitHub")])])])]),t._m(0)])])])},xt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-right"},[i("div",{staticClass:"level-item"},[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"https://justboil.me",target:"_blank"}},[i("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],Ot={name:"FooterBar",data:function(){return{year:(new Date).getFullYear()}},computed:Object(st["a"])({},Object(U["b"])(["isFooterBarVisible"]))},At=Ot,Dt=Object(D["a"])(At,kt,xt,!1,null,null,null),Mt=Dt.exports,jt={name:"Home",components:{FooterBar:Mt,AsideMenu:yt,NavBar:bt},data:function(){return{menu:et}},created:function(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/v2/gridy/John-Doe.svg"})}},St=jt,Et=Object(D["a"])(St,Z,tt,!1,null,null,null),$t=Et.exports;X.dispatch("fetch","clients");var Bt="Admin One Bulma Buefy";W.afterEach((function(t){X.commit("asideMobileStateToggle",!1),t.meta&&t.meta.title?document.title="".concat(t.meta.title," — ").concat(Bt):document.title=Bt})),n["a"].config.productionTip=!1,n["a"].use(o["a"]),new n["a"]({router:W,store:X,render:function(t){return t($t)}}).$mount("#app")},"6df7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t.icon?a("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v(" "+t._s(t.title)+" ")],1),t.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),a("div",{staticClass:"card-content"},[t._t("default")],2)])},s=[],n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},emits:["header-icon-click"],methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},o=n,r=a("2877"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},7080:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObject?t.trashObject.name:null},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,paginated:t.paginated,"per-page":t.perPage,data:t.clients,"default-sort":"name",striped:"",hoverable:""},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}}},[a("b-table-column",{attrs:{"cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar}})])]}}])}),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.company)+" ")]}}])}),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.city)+" ")]}}])}),a("b-table-column",{attrs:{"cell-class":"is-progress-col",label:"Progress",field:"progress",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:e.row.progress}},[t._v(" "+t._s(e.row.progress)+" ")])]}}])}),a("b-table-column",{attrs:{label:"Created"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created}},[t._v(t._s(e.row.created))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons is-right no-wrap"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:e.row.id}}}},[a("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),a("b-button",{attrs:{type:"is-danger",size:"is-small"},on:{click:function(a){return a.preventDefault(),t.trashModalOpen(e.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])])])],1)],1)},s=[],n=a("5530"),o=(a("a9e3"),a("2f62")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(" Confirm action ")]),a("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.cancel}})]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v(" This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{"native-type":"button",type:"is-danger",outlined:""},on:{click:t.cancel}},[t._v(" Cancel ")]),a("b-button",{attrs:{type:"is-danger"},on:{click:t.confirm}},[t._v(" Delete ")])],1)])])},l=[],c={name:"ModalBox",props:{isActive:Boolean,trashObjectName:{type:String,default:null}},emits:["cancel","confirm"],computed:{isModalActive:{get:function(){return this.isActive},set:function(t){t||this.cancel()}}},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),f=m.exports,p={name:"ClientsTableSample",components:{ModalBox:f},props:{checkable:Boolean,isEmpty:Boolean,perPage:{type:Number,default:10}},data:function(){return{checkedRows:[],isModalActive:!1,trashObject:null}},computed:Object(n["a"])({paginated:function(){return this.clients.length>this.perPage}},Object(o["b"])(["clients"])),methods:{trashModalOpen:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},b=p,h=Object(d["a"])(b,i,s,!1,null,null,null);e["a"]=h.exports},"808f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:t.newAvatar}})])},s=[],n={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:{newAvatar:function(){return this.avatar?this.avatar:this.$store.state.userAvatar}}},o=n,r=a("2877"),l=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},"9a7b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{class:{"menu-list":!t.isSubmenuList}},t._l(t.menu,(function(e,i){return a("aside-menu-item",{key:i,attrs:{item:e},on:{"menu-click":t.menuClick}})})),1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{"is-active":t.isDropdownActive}},[a(t.componentIs,{tag:"component",class:{"has-icon":!!t.item.icon,"has-dropdown-icon":t.hasDropdown},attrs:{to:t.item.to,href:t.item.href,target:t.item.target,"exact-active-class":"is-active"},on:{click:t.menuClick}},[t.item.icon?a("b-icon",{class:{"has-update-mark":t.item.updateMark},attrs:{icon:t.item.icon,"custom-size":"default"}}):t._e(),t.item.label?a("span",{class:{"menu-item-label":!!t.item.icon}},[t._v(" "+t._s(t.item.label)+" ")]):t._e(),t.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:t.dropdownIcon,"custom-size":"default"}})],1):t._e()],1),t.hasDropdown?a("aside-menu-list",{attrs:{menu:t.item.menu,"is-submenu-list":""}}):t._e()],1)},o=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),{name:"AsideMenuItem",components:{AsideMenuList:function(){return Promise.resolve().then(a.bind(null,"9a7b"))}},props:{item:{type:Object,required:!0}},emits:["menu-click"],data:function(){return{isDropdownActive:!1}},computed:{componentIs:function(){return this.item.to?"router-link":"a"},hasDropdown:function(){return!!this.item.menu},dropdownIcon:function(){return this.isDropdownActive?"minus":"plus"}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}}}),l=r,c=a("2877"),u=Object(c["a"])(l,n,o,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:Boolean,menu:{type:Array,default:function(){return[]}}},emits:["menu-click"],methods:{menuClick:function(t){this.$emit("menu-click",t)}}},f=m,p=Object(c["a"])(f,i,s,!1,null,null,null);e["default"]=p.exports},"9e7c":function(t,e,a){"use strict";a("a9e3"),a("d81d");var i,s,n=a("91c8"),o=a.n(n),r={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},render:function(t){var e=function(e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(e){return t("div",{attrs:{class:"tile is-parent"}},[e])})))};return this.$slots.default.length<=this.maxPerRow?e(this.$slots.default):t("div",{attrs:{class:"is-tiles-wrapper"}},o()(this.$slots.default,this.maxPerRow).map((function(t){return e(t)})))}},l=r,c=a("2877"),u=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=u.exports},b107:function(t,e,a){},c32d:function(t,e){if("undefined"===typeof moment){var a=new Error("Cannot find module 'moment'");throw a.code="MODULE_NOT_FOUND",a}t.exports=moment}});
//# sourceMappingURL=app-legacy.39b5cf77.js.map