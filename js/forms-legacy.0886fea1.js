(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms"],{"057f":function(t,e,n){var o=n("c6b6"),r=n("fc6a"),i=n("241c").f,a=n("4dae"),l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a(l)}};t.exports.f=function(t){return l&&"Window"==o(t)?s(t):i(r(t))}},"0894":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-bar",{attrs:{"title-stack":t.titleStack}}),n("hero-bar",[t._v(" Forms "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),n("section",{staticClass:"section is-main-section"},[n("card-component",{attrs:{title:"Forms",icon:"ballot"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.formAction.apply(null,arguments)}}},[n("b-field",{attrs:{label:"From",horizontal:""}},[n("b-field",[n("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-field",[n("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),n("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static"},[t._v(" +44 ")])]),n("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),n("b-field",{attrs:{label:"Department",horizontal:""}},[n("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}},t._l(t.departments,(function(e,o){return n("option",{key:o,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)],1),n("hr"),n("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),n("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[n("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("b-field",{attrs:{grouped:""}},[n("div",{staticClass:"control"},[n("b-button",{attrs:{"native-type":"submit",type:"is-info"}},[t._v(" Submit ")])],1),n("div",{staticClass:"control"},[n("b-button",{attrs:{type:"is-info is-outlined"},on:{click:function(e){return e.preventDefault(),t.formAction.apply(null,arguments)}}},[t._v(" Reset ")])],1)])],1)],1)]),n("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[n("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[n("checkbox-radio-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-info"},model:{value:t.customElementsForm.checkbox,callback:function(e){t.$set(t.customElementsForm,"checkbox",e)},expression:"customElementsForm.checkbox"}})],1),n("hr"),n("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[n("checkbox-radio-picker",{attrs:{options:{one:"One",two:"Two"},type:"is-info"},model:{value:t.customElementsForm.radio,callback:function(e){t.$set(t.customElementsForm,"radio",e)},expression:"customElementsForm.radio"}})],1),n("hr"),n("b-field",{attrs:{label:"Switch",horizontal:""}},[n("b-switch",{attrs:{type:"is-info"},model:{value:t.customElementsForm.switch,callback:function(e){t.$set(t.customElementsForm,"switch",e)},expression:"customElementsForm.switch"}},[t._v(" Default ")])],1),n("hr"),n("b-field",{attrs:{label:"File",horizontal:""}},[n("file-picker",{attrs:{type:"is-info"},model:{value:t.customElementsForm.file,callback:function(e){t.$set(t.customElementsForm,"file",e)},expression:"customElementsForm.file"}})],1)],1)],1)],1)},r=[],i=n("ed09"),a=n("1e1d"),l=n("6df7"),s=n("3b73"),c=n("503b"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{attrs:{grouped:"","group-multiline":""}},t._l(t.options,(function(e,o){return n("div",{key:o,staticClass:"control"},[n(t.componentIs,{tag:"component",attrs:{"native-value":o,type:t.type},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[t._v(" "+t._s(e)+" ")])],1)})),0)},f=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}n("a9e3");var b={name:"CheckboxRadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:[String,Number,Array],default:null}},emits:["input"],setup:function(t,e){var n=e.emit,o=Object(i["a"])({get:function(){return t.value},set:function(t){n("input",t)}}),r=Object(i["a"])((function(){return"object"===m(t.value)?"b-checkbox":"b-radio"}));return{newValue:o,componentIs:r}}},p=b,d=n("2877"),v=Object(d["a"])(p,u,f,!1,null,null,null),h=v.exports,y={name:"Forms",components:{CheckboxRadioPicker:h,HeroBar:c["a"],FilePicker:s["a"],CardComponent:l["a"],TitleBar:a["a"]},setup:function(t,e){var n=e.root.$buefy,o=["Admin","Forms"],r=["Business Development","Marketing","Sales"],a=Object(i["e"])({name:null,email:null,phone:null,department:null,subject:null,question:null}),l=Object(i["e"])({checkbox:["lorem"],radio:"one",switch:!0,file:null}),s=function(){n.snackbar.open({message:"Demo only",queue:!1})};return{titleStack:o,departments:r,form:a,customElementsForm:l,formAction:s}}},g=y,k=Object(d["a"])(g,o,r,!1,null,null,null);e["default"]=k.exports},"3b73":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("a",{staticClass:"button",class:t.type},[n("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),n("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?n("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},r=[],i=n("ed09"),a={name:"FilePicker",props:{accept:{type:String,default:null},type:{type:String,default:"is-primary"}},emits:["input"],setup:function(t,e){var n=e.emit,o=Object(i["a"])((function(){return r.value?"Pick another file":"Pick a file"})),r=Object(i["f"])(null),a=function(t){r.value=t,n("input",t)};return{buttonLabel:o,file:r,upload:a}}},l=a,s=n("2877"),c=Object(s["a"])(l,o,r,!1,null,null,null);e["a"]=c.exports},"428f":function(t,e,n){var o=n("da84");t.exports=o},"4dae":function(t,e,n){var o=n("da84"),r=n("23cb"),i=n("07fa"),a=n("8418"),l=o.Array,s=Math.max;t.exports=function(t,e,n){for(var o=i(t),c=r(e,o),u=r(void 0===n?o:n,o),f=l(s(u-c,0)),m=0;c<u;c++,m++)a(f,m,t[c]);return f.length=m,f}},"746f":function(t,e,n){var o=n("428f"),r=n("1a2d"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,n){"use strict";var o=n("23e7"),r=n("da84"),i=n("d066"),a=n("2ba4"),l=n("c65b"),s=n("e330"),c=n("c430"),u=n("83ab"),f=n("4930"),m=n("d039"),b=n("1a2d"),p=n("e8b5"),d=n("1626"),v=n("861d"),h=n("3a9b"),y=n("d9b5"),g=n("825a"),k=n("7b0b"),w=n("fc6a"),S=n("a04b"),x=n("577e"),O=n("5c6c"),j=n("7c73"),F=n("df75"),_=n("241c"),E=n("057f"),C=n("7418"),P=n("06cf"),$=n("9bf2"),z=n("37e8"),q=n("d1e7"),D=n("f36a"),N=n("6eeb"),A=n("5692"),I=n("f772"),J=n("d012"),M=n("90e3"),R=n("b622"),V=n("e538"),B=n("746f"),L=n("d44e"),T=n("69f3"),Q=n("b727").forEach,H=I("hidden"),W="Symbol",Y="prototype",G=R("toPrimitive"),K=T.set,U=T.getterFor(W),X=Object[Y],Z=r.Symbol,tt=Z&&Z[Y],et=r.TypeError,nt=r.QObject,ot=i("JSON","stringify"),rt=P.f,it=$.f,at=E.f,lt=q.f,st=s([].push),ct=A("symbols"),ut=A("op-symbols"),ft=A("string-to-symbol-registry"),mt=A("symbol-to-string-registry"),bt=A("wks"),pt=!nt||!nt[Y]||!nt[Y].findChild,dt=u&&m((function(){return 7!=j(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=rt(X,e);o&&delete X[e],it(t,e,n),o&&t!==X&&it(X,e,o)}:it,vt=function(t,e){var n=ct[t]=j(tt);return K(n,{type:W,tag:t,description:e}),u||(n.description=e),n},ht=function(t,e,n){t===X&&ht(ut,e,n),g(t);var o=S(e);return g(n),b(ct,o)?(n.enumerable?(b(t,H)&&t[H][o]&&(t[H][o]=!1),n=j(n,{enumerable:O(0,!1)})):(b(t,H)||it(t,H,O(1,{})),t[H][o]=!0),dt(t,o,n)):it(t,o,n)},yt=function(t,e){g(t);var n=w(e),o=F(n).concat(xt(n));return Q(o,(function(e){u&&!l(kt,n,e)||ht(t,e,n[e])})),t},gt=function(t,e){return void 0===e?j(t):yt(j(t),e)},kt=function(t){var e=S(t),n=l(lt,this,e);return!(this===X&&b(ct,e)&&!b(ut,e))&&(!(n||!b(this,e)||!b(ct,e)||b(this,H)&&this[H][e])||n)},wt=function(t,e){var n=w(t),o=S(e);if(n!==X||!b(ct,o)||b(ut,o)){var r=rt(n,o);return!r||!b(ct,o)||b(n,H)&&n[H][o]||(r.enumerable=!0),r}},St=function(t){var e=at(w(t)),n=[];return Q(e,(function(t){b(ct,t)||b(J,t)||st(n,t)})),n},xt=function(t){var e=t===X,n=at(e?ut:w(t)),o=[];return Q(n,(function(t){!b(ct,t)||e&&!b(X,t)||st(o,ct[t])})),o};if(f||(Z=function(){if(h(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=M(t),n=function(t){this===X&&l(n,ut,t),b(this,H)&&b(this[H],e)&&(this[H][e]=!1),dt(this,e,O(1,t))};return u&&pt&&dt(X,e,{configurable:!0,set:n}),vt(e,t)},tt=Z[Y],N(tt,"toString",(function(){return U(this).tag})),N(Z,"withoutSetter",(function(t){return vt(M(t),t)})),q.f=kt,$.f=ht,z.f=yt,P.f=wt,_.f=E.f=St,C.f=xt,V.f=function(t){return vt(R(t),t)},u&&(it(tt,"description",{configurable:!0,get:function(){return U(this).description}}),c||N(X,"propertyIsEnumerable",kt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),Q(F(bt),(function(t){B(t)})),o({target:W,stat:!0,forced:!f},{for:function(t){var e=x(t);if(b(ft,e))return ft[e];var n=Z(e);return ft[e]=n,mt[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(b(mt,t))return mt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),o({target:"Object",stat:!0,forced:!f,sham:!u},{create:gt,defineProperty:ht,defineProperties:yt,getOwnPropertyDescriptor:wt}),o({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:St,getOwnPropertySymbols:xt}),o({target:"Object",stat:!0,forced:m((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(k(t))}}),ot){var Ot=!f||m((function(){var t=Z();return"[null]"!=ot([t])||"{}"!=ot({a:t})||"{}"!=ot(Object(t))}));o({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,n){var o=D(arguments),r=e;if((v(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(d(r)&&(e=l(r,this,t,e)),!y(e))return e}),o[1]=e,a(ot,null,o)}})}if(!tt[G]){var jt=tt.valueOf;N(tt,G,(function(t){return l(jt,this)}))}L(Z,W),J[H]=!0},d28b:function(t,e,n){var o=n("746f");o("iterator")},e01a:function(t,e,n){"use strict";var o=n("23e7"),r=n("83ab"),i=n("da84"),a=n("e330"),l=n("1a2d"),s=n("1626"),c=n("3a9b"),u=n("577e"),f=n("9bf2").f,m=n("e893"),b=i.Symbol,p=b&&b.prototype;if(r&&s(b)&&(!("description"in p)||void 0!==b().description)){var d={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=c(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(d[e]=!0),e};m(v,b),v.prototype=p,p.constructor=v;var h="Symbol(test)"==String(b("test")),y=a(p.toString),g=a(p.valueOf),k=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),S=a("".slice);f(p,"description",{configurable:!0,get:function(){var t=g(this),e=y(t);if(l(d,t))return"";var n=h?S(e,7,-1):w(e,k,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:v})}},e538:function(t,e,n){var o=n("b622");e.f=o}}]);
//# sourceMappingURL=forms-legacy.0886fea1.js.map