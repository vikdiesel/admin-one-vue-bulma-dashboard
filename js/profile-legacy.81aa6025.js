"use strict";(self["webpackChunkadmin_one_vue_bulma_dashboard"]=self["webpackChunkadmin_one_vue_bulma_dashboard"]||[]).push([[845],{1901:function(e,t,n){n.d(t,{Z:function(){return V}});var o=n(6252),r=n(3577),l={class:"jb-bottom-section-text is-github-line"},a=(0,o._)("span",{class:"is-github-line-prefix-label"},"Please star this project on",-1),i={href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",class:"is-github-line-link",target:"_blank"},u=(0,o._)("span",null,"GitHub",-1),s={class:"jb-bottom-section-text"},c=(0,o.Uk)(" Check out other components and layouts at"),m=(0,o._)("br",null,null,-1),d=(0,o.Uk)(", "),p=(0,o._)("br",null,null,-1),f=(0,o.Uk)(" screen samples "),b=(0,o._)("h1",{class:"jb-bottom-section-text"},[(0,o.Uk)(" Get more with "),(0,o._)("a",{href:"https://justboil.me/bulma-admin-template/one/",target:"_blank"},"Premium version")],-1);function w(e,t,n,w,h,_){var v=(0,o.up)("icon"),k=(0,o.up)("router-link"),g=(0,o.up)("titled-section");return(0,o.wg)(),(0,o.j4)(g,{last:""},{default:(0,o.w5)((function(){return[(0,o._)("h1",l,[a,(0,o._)("a",i,[(0,o.Wm)(v,{path:w.mdiGithub,size:"36"},null,8,["path"]),u])]),(0,o._)("h1",s,[c,m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.screens,(function(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,{key:e.path},[(0,o.Wm)(k,{to:e.path},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,r.zw)(e.title),1)]})),_:2},1032,["to"]),t+1<w.screens.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[d],64)):(0,o.kq)("",!0)],64)})),128)),p,f]),b]})),_:1})}var h=n(2119),_=n(5317),v=n(5066),k=n(8662),g={name:"BottomOtherPagesSection",components:{TitledSection:v.Z,Icon:k.Z},setup:function(){var e=(0,h.tv)(),t=e.getRoutes(),n=[];for(var o in t){var r=t[o].path,l=t[o].meta&&t[o].meta.title?t[o].meta.title:null;l&&n.push({path:r,title:l})}return{screens:n,mdiGithub:_.LcO}}},W=n(3744);const y=(0,W.Z)(g,[["render",w]]);var V=y},7560:function(e,t,n){n.d(t,{Z:function(){return f}});n(8309);var o=n(6252),r=n(3577),l=n(9963),a=["type","name","value"],i=(0,o._)("span",{class:"check"},null,-1),u={class:"control-label"};function s(e,t,n,s,c,m){return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(["jb-check-radio-switch-group",{"is-grouped-column":n.column}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.options,(function(e,c){return(0,o.wg)(),(0,o.iD)("label",{key:c,class:(0,r.C_)([n.type,"jb-label-wrap"])},[(0,o.wy)((0,o._)("input",{type:s.inputType,name:n.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.computedValue=e}),value:c},null,8,a),[[l.YZ,s.computedValue]]),i,(0,o._)("span",u,(0,r.zw)(e),1)],2)})),128))],2)}n(9653);var c=n(2262),m={name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,o=(0,c.Fl)({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}}),r=(0,c.Fl)((function(){return"radio"===e.type?"radio":"checkbox"}));return{computedValue:o,inputType:r}}},d=n(3744);const p=(0,d.Z)(m,[["render",s]]);var f=p},8121:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(6252),r=n(3577),l={class:"jb-field"},a={key:0,class:"jb-label"},i={key:1,class:"jb-field-help"};function u(e,t,n,u,s,c){return(0,o.wg)(),(0,o.iD)("div",l,[n.label?((0,o.wg)(),(0,o.iD)("label",a,(0,r.zw)(n.label),1)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,r.C_)(u.wrapperClass)},[(0,o.WI)(e.$slots,"default")],2),n.help?((0,o.wg)(),(0,o.iD)("div",i,(0,r.zw)(n.help),1)):(0,o.kq)("",!0)])}var s=n(2262),c={name:"Field",props:{label:String,help:String},setup:function(e,t){var n=t.slots,o=(0,s.Fl)((function(){var e=["jb-field-control-wrapper"],t=n.default().length;return t>1&&e.push("has-one-slot-plus"),2===t&&e.push("has-two-slots"),e}));return{wrapperClass:o}}},m=n(3744);const d=(0,m.Z)(c,[["render",u]]);var p=d},5432:function(e,t,n){n.d(t,{Z:function(){return h}});n(8309);var o=n(6252),r=n(3577),l={class:"jb-file-picker"},a={class:"jb-file-picker-label"},i=["accept"],u={key:0},s={class:"jb-file-picker-file-name"};function c(e,t,n,c,m,d){var p=(0,o.up)("jb-button");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("label",a,[(0,o.Wm)(p,{as:"a",label:"Upload",icon:c.mdiUpload,color:"info",class:(0,r.C_)({"has-sibling-right":c.file})},null,8,["icon","class"]),(0,o._)("input",{type:"file",ref:"input",class:"jb-file-picker-input",accept:n.accept,onInput:t[0]||(t[0]=function(){return d.upload&&d.upload.apply(d,arguments)})},null,40,i)]),c.file?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("span",s,(0,r.zw)(c.file.name),1)])):(0,o.kq)("",!0)])}var m=n(2262),d=n(5317),p=n(5167),f={name:"FilePicker",components:{JbButton:p.Z},props:{modelValue:[Object,File,Array],label:String,icon:String,accept:{type:String,default:null}},emits:["update:modelValue"],setup:function(e){var t=(0,m.iH)(e.modelValue);return{file:t,mdiUpload:d.xyB}},methods:{upload:function(e){var t=e.target.files||e.dataTransfer.files;this.file=t[0],this.$emit("update:modelValue",this.file)}},watch:{modelValue:function(e){this.file=e,e||(this.$refs.input.value=null)}}},b=n(3744);const w=(0,b.Z)(f,[["render",c]]);var h=w},5066:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(6252),r=n(3577),l={key:1,class:"jb-titled-section-title"};function a(e,t,n,a,i,u){return(0,o.wg)(),(0,o.iD)("section",{class:(0,r.C_)(["jb-titled-section",{"is-first":n.first,"is-last":n.last,"is-default":!n.first&&!n.last}])},[n.custom?(0,o.WI)(e.$slots,"default",{key:0}):((0,o.wg)(),(0,o.iD)("h1",l,[(0,o.WI)(e.$slots,"default")]))],2)}var i={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},u=n(3744);const s=(0,u.Z)(i,[["render",a]]);var c=s},8801:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});n(8309);var o=n(6252),r=n(9963),l={class:"jb-grid is-cards-grid"};function a(e,t,n,a,i,u){var s=(0,o.up)("title-bar"),c=(0,o.up)("user-card"),m=(0,o.up)("file-picker"),d=(0,o.up)("field"),p=(0,o.up)("control"),f=(0,o.up)("divider"),b=(0,o.up)("jb-button"),w=(0,o.up)("jb-buttons"),h=(0,o.up)("card-component"),_=(0,o.up)("main-section"),v=(0,o.up)("bottom-other-pages-section");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{"title-stack":a.titleStack},null,8,["title-stack"]),(0,o.Wm)(c),(0,o.Wm)(_,null,{default:(0,o.w5)((function(){return[(0,o._)("div",l,[(0,o.Wm)(h,{title:"Edit Profile",icon:a.mdiAccountCircle,onSubmit:(0,r.iM)(a.submitProfile,["prevent"]),form:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{label:"Avatar",help:"Max 500kb"},{default:(0,o.w5)((function(){return[(0,o.Wm)(m)]})),_:1}),(0,o.Wm)(d,{label:"Name",help:"Required. Your name"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{icon:a.mdiAccount,modelValue:a.profileForm.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.profileForm.name=e}),name:"username",required:"",autocomplete:"username"},null,8,["icon","modelValue"])]})),_:1}),(0,o.Wm)(d,{label:"E-mail",help:"Required. Your e-mail"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{icon:a.mdiMail,type:"email",name:"email",modelValue:a.profileForm.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.profileForm.email=e}),required:"",autocomplete:"email"},null,8,["icon","modelValue"])]})),_:1}),(0,o.Wm)(f),(0,o.Wm)(w,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(b,{color:"info",type:"submit",label:"Submit"}),(0,o.Wm)(b,{color:"info",label:"Options",outline:""})]})),_:1})]})),_:1},8,["icon","onSubmit"]),(0,o.Wm)(h,{title:"Change Password",icon:a.mdiLock,onSubmit:(0,r.iM)(a.submitPass,["prevent"]),form:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{label:"Current password",help:"Required. Your current password"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{icon:a.mdiAsterisk,modelValue:a.passwordForm.password_current,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.passwordForm.password_current=e}),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["icon","modelValue"])]})),_:1}),(0,o.Wm)(f),(0,o.Wm)(d,{label:"New password",help:"Required. New password"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{icon:a.mdiFormTextboxPassword,modelValue:a.passwordForm.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordForm.password=e}),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["icon","modelValue"])]})),_:1}),(0,o.Wm)(d,{label:"Confirm password",help:"Required. New password one more time"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{icon:a.mdiFormTextboxPassword,modelValue:a.passwordForm.password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.passwordForm.password_confirmation=e}),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["icon","modelValue"])]})),_:1}),(0,o.Wm)(f),(0,o.Wm)(w,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(b,{type:"submit",color:"info",label:"Submit"}),(0,o.Wm)(b,{color:"info",label:"Options",outline:""})]})),_:1})]})),_:1},8,["icon","onSubmit"])])]})),_:1}),(0,o.Wm)(v)],64)}var i=n(2262),u=n(8637),s=n(5317),c=n(7798),m=n(1635),d=n(2151),p=n(8996),f=n(8121),b=n(2744),w=n(5432),h=n(5167),_=n(1901),v=n(9275),k=n(3577),g={class:"jb-user-info"},W={class:"jb-user-control"},y=(0,o.Uk)("Howdy, "),V=(0,o.Uk)("!"),Z=(0,o._)("p",null,[(0,o.Uk)("Last login "),(0,o._)("b",null,"12 mins ago"),(0,o.Uk)(" from "),(0,o._)("b",null,"127.0.0.1")],-1),j={class:"jb-user-checkmark"};function C(e,t,n,r,l,a){var i=(0,o.up)("user-avatar"),u=(0,o.up)("check-radio-picker"),s=(0,o.up)("pill"),c=(0,o.up)("level"),m=(0,o.up)("card-component");return(0,o.wg)(),(0,o.j4)(m,{rounded:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{type:"around"},{default:(0,o.w5)((function(){return[(0,o.Wm)(i,{class:"is-in-user-card"}),(0,o._)("div",g,[(0,o._)("div",W,[(0,o.Wm)(u,{name:"sample-switch",type:"switch",modelValue:r.userSwitchVal,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.userSwitchVal=e}),options:{one:"Notifications"}},null,8,["modelValue"])]),(0,o._)("h1",null,[y,(0,o._)("b",null,(0,k.zw)(r.userName),1),V]),Z,(0,o._)("div",j,[(0,o.Wm)(s,{text:"Verified",type:"info",icon:r.mdiCheckDecagram},null,8,["icon"])])])]})),_:1})]})),_:1})}var S=n(5102),F=n(1237),U=n(7560),P=n(8537),D={name:"UserCard",components:{Level:S.Z,UserAvatar:F.Z,CardComponent:m.Z,CheckRadioPicker:U.Z,Pill:P.Z},setup:function(){var e=(0,u.oR)(),t=(0,i.Fl)((function(){return e.state.userName})),n=(0,i.iH)([]);return{userName:t,userSwitchVal:n,mdiCheckDecagram:s.UY8}}},q=n(3744);const x=(0,q.Z)(D,[["render",C]]);var A=x,B={name:"Profile",components:{UserCard:A,JbButtons:v.Z,MainSection:c.Z,TitleBar:d.Z,CardComponent:m.Z,Divider:p.Z,Field:f.Z,Control:b.Z,FilePicker:w.Z,JbButton:h.Z,BottomOtherPagesSection:_.Z},setup:function(){var e=(0,u.oR)(),t=(0,i.iH)(["Admin","Profile"]),n=(0,i.qj)({name:e.state.userName,email:e.state.userEmail}),o=(0,i.qj)({password_current:"",password:"",password_confirmation:""}),r=function(){e.commit("user",n)},l=function(){};return{titleStack:t,profileForm:n,passwordForm:o,submitProfile:r,submitPass:l,mdiAccount:s.rI3,mdiAccountCircle:s.wJe,mdiLock:s.d5D,mdiMail:s.xaU,mdiAsterisk:s.AD$,mdiFormTextboxPassword:s.$_S}}};const H=(0,q.Z)(B,[["render",a]]);var N=H}}]);
//# sourceMappingURL=profile-legacy.81aa6025.js.map