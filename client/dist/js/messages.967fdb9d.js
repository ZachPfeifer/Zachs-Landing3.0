(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["messages"],{"7ea8":function(s,e,t){"use strict";var a=t("9736"),o=t.n(a);o.a},9736:function(s,e,t){},eaad:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"Messages"},[t("h1",[s._v("Recieved Messages")]),t("div",{staticClass:"row"},s._l(s.messages,(function(s){return t("Message",{key:s._id,staticClass:"col-4",attrs:{messageProp:s}})})),1)])},o=[],r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"Message"},[t("section",{staticClass:"cards-wrapper"},[t("div",{staticClass:"card-grid-space"},[t("a",{staticClass:"card",staticStyle:{"--bg-img":"url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)"},attrs:{href:"https://codetheweb.blog/2017/10/06/html-syntax/"}},[t("div",[t("h1",[s._v(" "+s._s(s.messageProp.name)+" "),t("br"),s._v(" from "+s._s(s.messageProp.company)+" ")]),t("p",{staticClass:"card-body"},[s._v(s._s(s.messageProp.message))]),t("br"),t("p",{staticClass:"card-footer"},[s._v("Contact: "+s._s(s.messageProp.email))]),t("div",{staticClass:"date"},[s._v(s._s(s.messageProp.timestamps))])])])])])])},c=[],n={name:"Message",props:["messageProp"],data(){return{}},mounted(){},computed:{},created(){},methods:{},components:{}},i=n,m=(t("7ea8"),t("2877")),l=Object(m["a"])(i,r,c,!1,null,"2a632463",null),p=l.exports,d={name:"Messages",data(){return{}},mounted(){this.$store.dispatch("getMessages")},computed:{messages(){return this.$store.state.messages}},methods:{},components:{Message:p}},g=d,u=Object(m["a"])(g,a,o,!1,null,"64df8998",null);e["default"]=u.exports}}]);
//# sourceMappingURL=messages.967fdb9d.js.map