(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{241:function(t,e,n){"use strict";e.a={computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}}},247:function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("1acfffde",content,!0,{sourceMap:!1})},248:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("69991307",content,!0,{sourceMap:!1})},253:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("4b6e2ff1",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("7a4e671f",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("15b10e06",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n.r(e);n(35),n(22),n(175),n(24),n(53),n(23);var r={props:{text:String,time:Number,delay:{type:Number,default:.05},from:String,opacity:Boolean,letterSpacing:{type:Number,default:0},show:Boolean},data:function(){return{step:.05,animationTime:.3,translateSize:1,timingFunction:"cubic-bezier(0.18, 0.89, 0.32, 1.28)",directionMap:{l:function(i){return"translate(-"+i+"em)"},r:function(i){return"translate("+i+"em)"},t:function(i){return"translate(0,-"+i+"em)"},b:function(i){return"translate(0,"+i+"em)"}}}},computed:{symbolsArray:function(){var t=[];return this.text.split(" ").forEach((function(e){(t=t.concat(e.split(""))).push(" ")})),t},transformation:function(){return this.directionMap[this.from](this.translateSize)},visibility:function(){return this.opacity?0:1},activate:function(){return this.show},transitionStyle:function(){return this.activate?{transform:"translate(0)",opacity:1}:{transform:this.transformation,opacity:this.visibility}},style:function(){return{marginRight:this.letterSpacing+"rem"}}},mounted:function(){for(;this.time-this.step*this.symbolsArray.length<this.animationTime;)this.step-=1e-4}},o=(n(283),n(55)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text_wrapper"},t._l(t.symbolsArray,(function(e,i){return n("span",{key:i,class:{space:" "==e},style:Object.assign({},t.transitionStyle,t.style,{transition:"transform "+t.animationTime+"s "+t.timingFunction+" "+(t.step*i+t.delay)+"s, opacity "+t.animationTime/2+"s ease-out "+(t.step*i+t.delay)+"s"})},[t._v(t._s(e))])})),0)}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(247)},262:function(t,e,n){(e=n(63)(!1)).push([t.i,".shadowHeader{box-shadow:0 2px 31px rgba(5,5,5,.06)}",""]),t.exports=e},263:function(t,e,n){"use strict";n(248)},264:function(t,e,n){(e=n(63)(!1)).push([t.i,".translatePerspective{height:calc(var(--container-height)*0.8);perspective-origin:var(--perspective-x) 50%}.stopAnimation{-webkit-animation-iteration-count:0!important;animation-iteration-count:0!important}.icon_down{position:absolute!important;bottom:3.5%;transition:opacity .3s ease;opacity:0;-webkit-animation:jump_icon 1s ease 3s infinite;animation:jump_icon 1s ease 3s infinite}@-webkit-keyframes jump_icon{0%{transform:translateY(-1rem);opacity:1}to{transform:translateY(0);opacity:0}}@keyframes jump_icon{0%{transform:translateY(-1rem);opacity:1}to{transform:translateY(0);opacity:0}}",""]),t.exports=e},281:function(t,e,n){"use strict";n(253)},282:function(t,e,n){(e=n(63)(!1)).push([t.i,".move_cards{transform:translateY(0)!important}",""]),t.exports=e},283:function(t,e,n){"use strict";n(254)},284:function(t,e,n){(e=n(63)(!1)).push([t.i,".text_wrapper{margin:0;padding:0}.text_wrapper span{display:block;float:left;position:relative}.text_wrapper .space{width:.25em!important;height:1em!important}",""]),t.exports=e},294:function(t,e,n){"use strict";n(256)},295:function(t,e,n){(e=n(63)(!1)).push([t.i,".sheet[data-v-e534af0c]{position:relative;right:-90%;background:transparent!important}.translateContacts[data-v-e534af0c]{transform:translateY(-7.5rem) scale(1)!important}.translateHeaders[data-v-e534af0c]{transform:rotate(-90deg) translateX(0) scale(1)!important}.contact-h[data-v-e534af0c]{position:absolute;font-size:10rem;transform-origin:0;transform:rotate(-90deg) translateX(-7.5rem) scale(.95);color:#fff;bottom:-40%;white-space:nowrap;text-shadow:-3px 0 3px rgba(0,0,0,.2),-3px 0 4px rgba(0,0,0,.14),-1px 0 8px rgba(0,0,0,.12)}.contact-h.first[data-v-e534af0c]{left:25%;transition:transform .3s cubic-bezier(.18,.89,.32,1.28)}.contact-h.second[data-v-e534af0c]{left:40%;transition:transform .3s cubic-bezier(.18,.89,.32,1.28) .1s}.contact_card[data-v-e534af0c]{transition:transform .2s ease}.contact_card[data-v-e534af0c]:hover{transform:translateX(-.5rem)}@media screen and (max-device-width:600px){.sheet[data-v-e534af0c]{right:-40%}}",""]),t.exports=e},299:function(t,e,n){"use strict";n.r(e);n(175);var r=[{title:"Me",head:"HUMAN",text:"My name is Arseny Likhachev",height:"10vh",width:"10vw",icon:{name:"mdi-account",color:"#1E88E5"}},{title:"Living",head:"PERM",text:"I am living in Perm",height:"20vh",width:"10vw",icon:{name:"mdi-city",color:"#FB8C00"}},{title:"Skills",head:"FRONTEND",text:"Develop web-applicatons!",height:"10vh",width:"20vw",icon:{name:"mdi-monitor-dashboard",color:"#66BB6A"}},{title:"Love",head:"CODING",text:"Code everything!",height:"10vh",width:"20vw",icon:{name:"mdi-code-json",color:"#00E5FF"}},{title:"Wish",head:"TO IMPROVE",text:"Follow your dream!",height:"20vh",width:"20vw",icon:{name:"mdi-book-open-page-variant",color:"#5E35B1"}}],o={name:"About",props:{scroll:Number,height:Number},data:function(){return{temp:!1,list:[]}},computed:{moveCards:function(){return this.scroll/this.height>.6}},mounted:function(){this.list=r}},c=(n(281),n(55)),l=n(123),m=n.n(l),h=n(257),d=n(239),f=n(306),v=n(305),_=n(307),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticStyle:{"min-height":"100vh"},attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{attrs:{md:"10",sm:"12"}},[n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},t._l(t.list,(function(e,i){return n("v-col",{key:e.title,attrs:{cols:"12",md:"6",lg:"4"}},[n("v-card",{staticClass:"ma-md-1 ma-sm-auto",class:{move_cards:t.moveCards},style:{transform:"translateY(5rem)",transition:"transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) "+(.05*i+.1)+"s"},attrs:{"min-height":e.height,"min-width":e.width,elevation:2,color:e.icon.color,tile:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between",style:{color:"white"}},[n("div",[n("v-card-title",[n("TextAppearence",{attrs:{text:e.title,time:.75,delay:.1,from:"b",opacity:!0,show:t.moveCards}})],1),t._v(" "),n("v-card-text",{staticClass:"d-flex flex-column"},[n("TextAppearence",{staticClass:"display-1 mb-2 bold",attrs:{text:e.head,time:.75,delay:.1,from:"b",opacity:!0,show:t.moveCards}}),t._v(" "),n("TextAppearence",{staticClass:"body-1 my-2",style:{fontSize:"1.5rem !important"},attrs:{text:e.text,time:.75,delay:.01,from:"l",opacity:!0,show:t.moveCards}})],1)],1),t._v(" "),n("v-icon",{staticClass:"ma-5",attrs:{large:"",color:"white"}},[t._v("\n                            "+t._s(e.icon.name)+"\n                        ")])],1)])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{TextAppearence:n(258).default}),m()(component,{VCard:h.a,VCardText:d.a,VCardTitle:d.b,VCol:f.a,VIcon:v.a,VRow:_.a})},300:function(t,e,n){"use strict";n.r(e);n(175);var r=[{title:"VK",ref:"https://vk.com/sennery",icon:{name:"mdi-vk",color:""}},{title:"Telegram",ref:"https://t.me/sennery",icon:{name:"mdi-telegram",color:""}},{title:"GitHub",ref:"https://github.com/sennery",icon:{name:"mdi-github",color:""}},{title:"Email",ref:"mailto:mac452ares@gmail.com",icon:{name:"mdi-at",color:""}}],o=n(241),c={props:{scroll:Number,height:Number},mixins:[o.a],data:function(){return{contacts:[]}},computed:{activate:function(){return this.scroll/this.height>.45}},mounted:function(){this.contacts=r}},l=(n(294),n(55)),m=n(123),h=n.n(m),d=n(257),f=n(239),v=n(306),_=n(305),y=n(307),x=n(259),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticStyle:{height:"100vh",overflow:"hidden"},attrs:{justify:"start",align:"center","no-gutters":"",elevation:"10"}},[n("v-col",{staticClass:"pa-0",attrs:{justify:"center",align:"center",sm:"12",md:"4"}},[n("v-card",{attrs:{color:"#1E88E5",elevation:"2","max-height":"50vh","min-width":"50vw"}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between bold"},[n("p",{staticClass:"contact-h first",class:{translateHeaders:t.activate}},[t._v("\n                    CONTACT\n                ")]),t._v(" "),n("p",{staticClass:"contact-h second d-none d-md-flex",class:{translateHeaders:t.activate}},[t._v("\n                    ME, FRIEND\n                ")]),t._v(" "),n("v-sheet",{staticClass:"sheet",attrs:{"max-width":"50%"}},[n("v-row",{staticClass:"mr-0",attrs:{"no-gutters":""}},t._l(t.contacts,(function(e,i){return n("v-col",{key:e.title,staticClass:"ma-2 pa-0 contact_card",attrs:{cols:"auto"}},[n("v-card",{class:{translateContacts:t.activate},style:{transform:"translateY(2rem) scale(0.9)",transition:"transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) "+(.05*i+.1)+"s",background:t.$vuetify.theme.themes[t.theme].background},attrs:{tile:"",ripple:"","min-height":"10vh","min-width":"30rem",elevation:"2",target:"_blank",href:e.ref}},[n("v-card-title",{staticClass:"display-1"},[n("TextAppearence",{attrs:{text:e.title,time:.75,delay:.1,from:"b",opacity:!0,show:t.activate}})],1),t._v(" "),n("v-icon",{staticClass:"ma-md-5 ma-xs-3",attrs:{large:"",color:e.icon.color}},[t._v("\n                                    "+t._s(e.icon.name)+"\n                                ")])],1)],1)})),1)],1)],1)])],1)],1)}),[],!1,null,"e534af0c",null);e.default=component.exports;h()(component,{TextAppearence:n(258).default}),h()(component,{VCard:d.a,VCardTitle:f.b,VCol:v.a,VIcon:_.a,VRow:y.a,VSheet:x.a})},301:function(t,e,n){"use strict";n.r(e);n(175);var r=n(241),o={props:{scroll:Number,height:Number},mixins:[r.a],computed:{pointPassed:function(){return this.scroll>.5*this.height},menuRotate:function(){return this.scroll>2.5*this.height?"other":this.scroll>1.5*this.height?"contact":this.scroll>.5*this.height?"about":"face"}}},c=(n(261),n(55)),l=n(123),m=n.n(l),h=n(311),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"start pa-0 ma-0",class:{"elevation-2":this.pointPassed},style:{background:this.$vuetify.theme.themes[this.theme].background},attrs:{fluid:""}},[e("Logo",{attrs:{title:this.menuRotate,pointPassed:this.pointPassed}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Logo:n(302).default}),m()(component,{VContainer:h.a})},302:function(t,e,n){"use strict";n.r(e);var r=n(241),o={name:"Logo",props:{title:String,pointPassed:Boolean},mixins:[r.a],data:function(){return{rotationMap:{face:0,about:-90,contact:-180,other:-270}}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},computed:{rotation:function(){return 0!=this.rotationMap[this.title]?{transform:"rotateX("+this.rotationMap[this.title]+"deg) scale3d(0.5,0.5,0.5) translateX(var(--translate-header)"}:null}}},c=(n(263),n(55)),l=n(123),m=n.n(l),h=n(310),d=n(305),f=n(308),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"face",class:{translatePerspective:t.pointPassed},style:{background:t.$vuetify.theme.themes[t.theme].background}},[n("div",{staticClass:"navigation",style:t.rotation},[n("div",{staticClass:"wrapper out",class:{stopAnimation:t.pointPassed}},[n("div",{staticClass:"wrapper in",class:{stopAnimation:t.pointPassed}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:".float-right",attrs:{icon:"",absolute:"",right:"",top:!t.pointPassed},on:{click:t.changeTheme}},"v-btn",o,!1),r),[n("v-icon",[t._v(" mdi-theme-light-dark ")])],1),t._v(" "),n("v-icon",{class:{icon_down:!0,stopAnimation:t.pointPassed}},[t._v("\n                mdi-chevron-down\n            ")])]}}])},[t._v(" "),n("span",[t._v("Change color theme")])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side front"},[n("div",{staticClass:"containerm main"},[n("span",[t._v("S")]),t._v(" "),n("span",[t._v("E")]),t._v(" "),n("span",[t._v("N")]),t._v(" "),n("span",[t._v("N")]),t._v(" "),n("span",[t._v("E")]),t._v(" "),n("span",[t._v("R")]),t._v(" "),n("span",[t._v("Y")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side back"},[e("div",{staticClass:"containerm"},[e("div",{staticClass:"text"},[this._v("CONTACTS")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side top"},[e("div",{staticClass:"containerm"},[e("div",{staticClass:"text"},[this._v("ABOUT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side bottom"},[e("div",{staticClass:"containerm"},[e("div",{staticClass:"text"})])])}],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VIcon:d.a,VTooltip:f.a})},309:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scrollHeight:null,clientHeight:null,scroll:null}},methods:{onScroll:function(){this.scroll=window.scrollY},onResize:function(){this.clientHeight=document.documentElement.clientHeight,this.scrollHeight=document.body.scrollHeight}},mounted:function(){this.clientHeight=document.documentElement.clientHeight},beforeMount:function(){var t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.$vuetify.theme.dark=t}},o=n(55),c=n(123),l=n.n(c),m=n(306),h=n(307),d=n(296),f=n.n(d),v=n(297),_=n(298),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[n("Start",{attrs:{scroll:t.scroll,height:t.clientHeight}}),t._v(" "),n("About",{attrs:{scroll:t.scroll,height:t.clientHeight}}),t._v(" "),n("Contacts",{attrs:{scroll:t.scroll,height:t.scrollHeight}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Start:n(301).default,About:n(299).default,Contacts:n(300).default}),l()(component,{VCol:m.a,VRow:h.a}),f()(component,{Resize:v.a,Scroll:_.a})}}]);