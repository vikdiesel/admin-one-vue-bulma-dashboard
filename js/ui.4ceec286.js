"use strict";(self["webpackChunkadmin_one_vue_bulma_dashboard"]=self["webpackChunkadmin_one_vue_bulma_dashboard"]||[]).push([[522],{1901:function(l,t,e){e.d(t,{Z:function(){return S}});var n=e(6252),o=e(3577);const i={class:"jb-bottom-section-text is-github-line"},a=(0,n._)("span",{class:"is-github-line-prefix-label"},"Please star this project on",-1),u={href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",class:"is-github-line-link",target:"_blank"},s=(0,n._)("span",null,"GitHub",-1),c={class:"jb-bottom-section-text"},m=(0,n.Uk)(" Check out other components and layouts at"),r=(0,n._)("br",null,null,-1),d=(0,n.Uk)(", "),b=(0,n._)("br",null,null,-1),p=(0,n.Uk)(" screen samples "),f=(0,n._)("h1",{class:"jb-bottom-section-text"},[(0,n.Uk)(" Get more with "),(0,n._)("a",{href:"https://justboil.me/bulma-admin-template/one/",target:"_blank"},"Premium version")],-1);function h(l,t,e,h,w,_){const W=(0,n.up)("icon"),g=(0,n.up)("router-link"),O=(0,n.up)("titled-section");return(0,n.wg)(),(0,n.j4)(O,{last:""},{default:(0,n.w5)((()=>[(0,n._)("h1",i,[a,(0,n._)("a",u,[(0,n.Wm)(W,{path:h.mdiGithub,size:"36"},null,8,["path"]),s])]),(0,n._)("h1",c,[m,r,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.screens,((l,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:l.path},[(0,n.Wm)(g,{to:l.path},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(l.title),1)])),_:2},1032,["to"]),t+1<h.screens.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[d],64)):(0,n.kq)("",!0)],64)))),128)),b,p]),f])),_:1})}var w=e(2119),_=e(5317),W=e(5066),g=e(8662),O={name:"BottomOtherPagesSection",components:{TitledSection:W.Z,Icon:g.Z},setup(){const l=(0,w.tv)(),t=l.getRoutes(),e=[];for(const n in t){const l=t[n].path,o=t[n].meta&&t[n].meta.title?t[n].meta.title:null;o&&e.push({path:l,title:o})}return{screens:e,mdiGithub:_.LcO}}},k=e(3744);const v=(0,k.Z)(O,[["render",h]]);var S=v},7560:function(l,t,e){e.d(t,{Z:function(){return p}});var n=e(6252),o=e(3577),i=e(9963);const a=["type","name","value"],u=(0,n._)("span",{class:"check"},null,-1),s={class:"control-label"};function c(l,t,e,c,m,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["jb-check-radio-switch-group",{"is-grouped-column":e.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,((l,m)=>((0,n.wg)(),(0,n.iD)("label",{key:m,class:(0,o.C_)([e.type,"jb-label-wrap"])},[(0,n.wy)((0,n._)("input",{type:c.inputType,name:e.name,"onUpdate:modelValue":t[0]||(t[0]=l=>c.computedValue=l),value:m},null,8,a),[[i.YZ,c.computedValue]]),u,(0,n._)("span",s,(0,o.zw)(l),1)],2)))),128))],2)}var m=e(2262),r={name:"CheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup(l,{emit:t}){const e=(0,m.Fl)({get:()=>l.modelValue,set:l=>{t("update:modelValue",l)}}),n=(0,m.Fl)((()=>"radio"===l.type?"radio":"checkbox"));return{computedValue:e,inputType:n}}},d=e(3744);const b=(0,d.Z)(r,[["render",c]]);var p=b},8121:function(l,t,e){e.d(t,{Z:function(){return b}});var n=e(6252),o=e(3577);const i={class:"jb-field"},a={key:0,class:"jb-label"},u={key:1,class:"jb-field-help"};function s(l,t,e,s,c,m){return(0,n.wg)(),(0,n.iD)("div",i,[e.label?((0,n.wg)(),(0,n.iD)("label",a,(0,o.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,o.C_)(s.wrapperClass)},[(0,n.WI)(l.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",u,(0,o.zw)(e.help),1)):(0,n.kq)("",!0)])}var c=e(2262),m={name:"Field",props:{label:String,help:String},setup(l,{slots:t}){const e=(0,c.Fl)((()=>{const l=["jb-field-control-wrapper"],e=t.default().length;return e>1&&l.push("has-one-slot-plus"),2===e&&l.push("has-two-slots"),l}));return{wrapperClass:e}}},r=e(3744);const d=(0,r.Z)(m,[["render",s]]);var b=d},5066:function(l,t,e){e.d(t,{Z:function(){return m}});var n=e(6252),o=e(3577);const i={key:1,class:"jb-titled-section-title"};function a(l,t,e,a,u,s){return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.C_)(["jb-titled-section",{"is-first":e.first,"is-last":e.last,"is-default":!e.first&&!e.last}])},[e.custom?(0,n.WI)(l.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",i,[(0,n.WI)(l.$slots,"default")]))],2)}var u={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},s=e(3744);const c=(0,s.Z)(u,[["render",a]]);var m=c},7947:function(l,t,e){e.r(t),e.d(t,{default:function(){return tl}});var n=e(6252);const o=(0,n._)("p",null,"This is sample modal",-1),i=(0,n._)("p",null,"This is sample modal",-1),a=(0,n._)("p",null,"This is sample modal",-1),u=(0,n.Uk)("UI Components"),s=(0,n.Uk)(" Dark mode "),c={class:"jb-card-content-center-wrap"},m=(0,n.Uk)(" Modal examples "),r={class:"has-spaced-elements"},d=(0,n._)("div",{class:"jb-card-modal-content"},[(0,n._)("p",null,"Click to see in action")],-1),b=(0,n._)("div",{class:"jb-card-modal-content"},[(0,n._)("h1",null,"Unhandled exception"),(0,n._)("p",null,"Click to see in action")],-1),p=(0,n._)("div",{class:"jb-card-modal-content"},[(0,n._)("h1",null,"Success"),(0,n._)("p",null,"Click to see in action")],-1),f=(0,n._)("h1",{class:"jb-titled-section-title"}," Notifications ",-1),h={class:"jb-titled-section-control"},w=(0,n._)("b",null,"Info state",-1),_=(0,n.Uk)(". Notification "),W=(0,n._)("b",null,"Success state",-1),g=(0,n.Uk)(". Notification "),O=(0,n._)("b",null,"Warning state",-1),k=(0,n.Uk)(". Notification "),v=(0,n._)("b",null,"Danger state",-1),S=(0,n.Uk)(". Notification "),C=(0,n._)("b",null,"White",-1),B=(0,n.Uk)(". Notification "),I=(0,n._)("b",null,"Light",-1),N=(0,n.Uk)(". Notification "),U=(0,n.Uk)("Buttons"),j=(0,n.Uk)("Cards"),Z={class:"jb-grid is-cards-grid has-mb"},y=(0,n._)("div",{class:"jb-card-content-center-wrap"},"With title",-1),T=(0,n._)("div",{class:"jb-card-content-center-wrap"},"With title & icons",-1);function V(l,t,e,V,A,D){const M=(0,n.up)("modal-box"),x=(0,n.up)("title-bar"),H=(0,n.up)("hero-bar"),F=(0,n.up)("titled-section"),P=(0,n.up)("jb-button"),z=(0,n.up)("card-component"),Y=(0,n.up)("main-section"),q=(0,n.up)("divider"),R=(0,n.up)("jb-buttons"),G=(0,n.up)("check-radio-picker"),L=(0,n.up)("notification"),$=(0,n.up)("field"),E=(0,n.up)("title-sub-bar"),J=(0,n.up)("bottom-other-pages-section");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(M,{modelValue:V.modalOneActive,"onUpdate:modelValue":t[0]||(t[0]=l=>V.modalOneActive=l),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,n.w5)((()=>[o])),_:1},8,["modelValue"]),(0,n.Wm)(M,{modelValue:V.modalTwoActive,"onUpdate:modelValue":t[1]||(t[1]=l=>V.modalTwoActive=l),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,n.w5)((()=>[i])),_:1},8,["modelValue"]),(0,n.Wm)(M,{modelValue:V.modalThreeActive,"onUpdate:modelValue":t[2]||(t[2]=l=>V.modalThreeActive=l),"large-title":"Success",button:"success"},{default:(0,n.w5)((()=>[a])),_:1},8,["modelValue"]),(0,n.Wm)(x,{"title-stack":V.titleStack},null,8,["title-stack"]),(0,n.Wm)(H,null,{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)(F,{first:""},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(z,{class:"is-aligned-card"},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(P,{label:"Toggle",onClick:V.darkModeToggle,outline:""},null,8,["onClick"])])])),_:1})])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(z,{title:"Confirm modal","header-icon":V.mdiClose,onClick:t[3]||(t[3]=l=>V.modalOneActive=!0),class:"cursor-pointer is-aligned-card",hoverable:""},{default:(0,n.w5)((()=>[d,(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{label:"Confirm",color:"info"}),(0,n.Wm)(P,{label:"Cancel",color:"info",outline:""})])),_:1})])),_:1},8,["header-icon"]),(0,n.Wm)(z,{onClick:t[4]||(t[4]=l=>V.modalTwoActive=!0),class:"cursor-pointer is-aligned-card",hoverable:""},{default:(0,n.w5)((()=>[b,(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{label:"Done",color:"danger"})])),_:1})])),_:1}),(0,n.Wm)(z,{onClick:t[5]||(t[5]=l=>V.modalThreeActive=!0),class:"cursor-pointer is-aligned-card",hoverable:""},{default:(0,n.w5)((()=>[p,(0,n.Wm)(q),(0,n.Wm)(P,{label:"Done",color:"success"})])),_:1})])])),_:1}),(0,n.Wm)(F,{custom:""},{default:(0,n.w5)((()=>[f,(0,n._)("div",h,[(0,n.Wm)(G,{type:"switch",name:"notifications-switch",options:{outline:"Outline"},modelValue:V.notificationSettingsModel,"onUpdate:modelValue":t[6]||(t[6]=l=>V.notificationSettingsModel=l)},null,8,["modelValue"])])])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{color:"info",icon:V.mdiInformationOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"info",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[w,_])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"success",icon:V.mdiCheckCircleOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"success",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[W,g])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"warning",icon:V.mdiAlertCircleOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"warning",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[O,k])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"danger",icon:V.mdiAlertCircle,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"danger",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[v,S])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"white",icon:V.mdiSelectColor,outline:V.notificationsOutline},{default:(0,n.w5)((()=>[C,B])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"light",icon:V.mdiFeather,outline:V.notificationsOutline},{default:(0,n.w5)((()=>[I,N])),_:1},8,["icon","outline"])])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Wm)($,{label:"Settings"},{default:(0,n.w5)((()=>[(0,n.Wm)(G,{name:"buttons-switch",type:"switch",modelValue:V.buttonSettingsModel,"onUpdate:modelValue":t[7]||(t[7]=l=>V.buttonSettingsModel=l),options:{outline:"Outline",small:"Small"}},null,8,["modelValue"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"light",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"info",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"success",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"warning",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"danger",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"light",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"info",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"success",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"warning",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"danger",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"light",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"info",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"success",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"warning",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"danger",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])])),_:1})])),_:1})])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[j])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n.Wm)(z,{title:"With Title"},{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Wm)(z,{title:"Title & Icons",icon:V.mdiMonitorCellphone,"header-icon":V.mdiClose},{default:(0,n.w5)((()=>[T])),_:1},8,["icon","header-icon"])]),(0,n.Wm)(E,{icon:V.mdiAlertCircle,title:"Empty variation"},null,8,["icon"]),(0,n.Wm)(z,{empty:""})])),_:1}),(0,n.Wm)(J)],64)}var A=e(2262),D=e(8637),M=e(5317),x=e(7798),H=e(7588),F=e(2151),P=e(1635),z=e(9275),Y=e(5167),q=e(9361),R=e(8996),G=e(7460),L=e(5066),$=e(8121),E=e(7560),J=e(1901),K=e(5632),Q={name:"Ui",components:{TitleSubBar:K.Z,MainSection:x.Z,HeroBar:H.Z,TitleBar:F.Z,CardComponent:P.Z,JbButtons:z.Z,JbButton:Y.Z,Notification:q.Z,Divider:R.Z,ModalBox:G.Z,TitledSection:L.Z,CheckRadioPicker:E.Z,Field:$.Z,BottomOtherPagesSection:J.Z},setup(){const l=(0,A.iH)(["Admin","UI Components"]),t=(0,A.iH)(!1),e=(0,A.iH)(!1),n=(0,A.iH)(!1),o=(0,A.iH)([]),i=(0,A.Fl)((()=>o.value.indexOf("outline")>-1)),a=(0,A.iH)([]),u=(0,A.Fl)((()=>a.value.indexOf("outline")>-1)),s=(0,A.Fl)((()=>a.value.indexOf("small")>-1)),c=(0,D.oR)(),m=()=>{c.dispatch("darkMode")};return{titleStack:l,modalOneActive:t,modalTwoActive:e,modalThreeActive:n,notificationSettingsModel:o,notificationsOutline:i,buttonSettingsModel:a,buttonsOutline:u,buttonsSmall:s,darkModeToggle:m,mdiMonitorCellphone:M.qOQ,mdiSelectColor:M.ghH,mdiFeather:M.zuO,mdiInformationOutline:M.EaN,mdiCheckCircleOutline:M.k6A,mdiAlertCircle:M.fr4,mdiAlertCircleOutline:M._gM,mdiOpenInNew:M.fOx,mdiReload:M.vS,mdiPlusCircle:M.kQ,mdiBroadcast:M.O9b,mdiLifebuoy:M.azf,mdiClose:M.r5M}}},X=e(3744);const ll=(0,X.Z)(Q,[["render",V]]);var tl=ll}}]);
//# sourceMappingURL=ui.4ceec286.js.map