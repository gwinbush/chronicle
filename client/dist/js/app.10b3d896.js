(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,v=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3b91":function(e,t,a){"use strict";var s=a("fcd0"),r=a.n(s);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"App",components:{},data:function(){return{}}},i=o,c=a("2877"),l=Object(c["a"])(i,r,n,!1,null,null,null),u=l.exports,d=a("ce5b"),v=a.n(d);a("bf40");s["default"].use(v.a);var m=new v.a({}),p=a("8c4f"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",[s("Navbar"),s("v-content",[s("h1",{staticClass:"header",attrs:{id:"chronicle"}},[e._v("Chronicle")]),s("p",{staticClass:"body"},[e._v('Welcome to chronicle, a platform for A/B Testing. To get started, open the "Create A/B Test" page and submit a test. ')]),s("center",[s("img",{staticStyle:{"max-width":"50%"},attrs:{src:a("724e")}})])],1)],1)])},f=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{color:"#013D5B",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("Chronicle A/B Testing Platform")])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"light-blue--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item",{attrs:{router:"",to:"/"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-item",{attrs:{router:"",to:"campaignAdd"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-email-newsletter")])],1),a("v-list-item-title",[e._v("Create A/B Test")])],1),a("v-list-item",{attrs:{router:"",to:"campaignsView"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-chart-areaspline")])],1),a("v-list-item-title",[e._v("View A/B Tests")])],1)],1)],1)],1)],1)},g=[],_={data:function(){return{drawer:!1}}},x=_,y=Object(c["a"])(x,b,g,!1,null,null,null),j=y.exports,w={name:"Home",components:{Navbar:j}},C=w,$=(a("a5b7"),Object(c["a"])(C,h,f,!1,null,"3a9b34ca",null)),k=$.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",[a("Navbar")],1),a("v-content",[a("div",{staticClass:"column",staticStyle:{"background-color":"#F5F5F5"}},[a("h1",{staticStyle:{"padding-top":"20px","padding-bottom":"20px","text-align":"center"}},[e._v("Create a new A/B Test")]),a("form",[a("v-text-field",{attrs:{"error-messages":e.nameErrors,label:"Subject",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.subject1,callback:function(t){e.subject1=t},expression:"subject1"}}),a("v-textarea",{attrs:{"error-messages":e.emailErrors,label:"Message Body",required:"",outlined:"",textarea:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.message1,callback:function(t){e.message1=t},expression:"message1"}})],1)]),a("div",{staticClass:"column",staticStyle:{"background-color":"#E3E3E3"}},[a("form",{staticStyle:{"padding-top":"87px"}},[a("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:10,label:"Subject",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.subject2,callback:function(t){e.subject2=t},expression:"subject2"}}),a("v-textarea",{attrs:{"error-messages":e.emailErrors,label:"Message Body",required:"",outlined:"",textarea:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.message2,callback:function(t){e.message2=t},expression:"message2"}}),a("v-select",{attrs:{items:Object.keys(e.cohorts),"error-messages":e.selectErrors,label:"Cohort feature",required:""},on:{change:[function(t){return e.$v.select.$touch()},e.updateSelectedCohort],blur:function(t){return e.$v.select.$touch()}},model:{value:e.selected_cohort,callback:function(t){e.selected_cohort=t},expression:"selected_cohort"}}),a("v-select",{attrs:{items:e.selected_cohort_values,"error-messages":e.selectErrors,label:"Cohort value",required:"","no-data-text":"Please select cohort feature"},on:{change:function(t){return e.$v.select.$touch()},blur:function(t){return e.$v.select.$touch()}},model:{value:e.selected_value,callback:function(t){e.selected_value=t},expression:"selected_value"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.submitTest}},[e._v("submit")])],1),a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v(" A/B Test Created ")]),a("v-divider"),a("v-card-text",[e._v(" Your test has been created."),a("br"),e._v(" The ID is: "+e._s(e.campaign_id)+". "),a("br"),e._v(' Go to the "View A/B Tests" page to see the results. ')]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1)],1)])],1)},S=[],O=(a("d3b7"),a("25f0"),a("bc3a")),E=a.n(O),A={name:"CampaignsView",components:{Navbar:j},data:function(){return{subject1:"",message1:"",subject2:"",message2:"",cohorts:{},selected_cohort:"",selected_cohort_values:[],selected_value:"",dialog:!1,campaign_id:""}},mounted:function(){var e=this;E()({method:"GET",url:"https://drtk2lbaij.execute-api.us-east-1.amazonaws.com/api/v1/features?user_group=group_0"}).then((function(t){e.cohorts=t.data}),(function(e){console.error(e)}))},methods:{clear:function(){this.subject1="",this.subject2="",this.message1="",this.message2="",this.selected_cohort="",this.selected_value=""},updateSelectedCohort:function(e){console.log(e),console.log(this.cohorts[e]),this.selected_cohort_values=this.cohorts[e]},submitTest:function(){this.dialog=!0;var e={distribution_channel:"EMAIL",cohort_name:this.selected_cohort,cohort_value:this.selected_value,subject1:this.subject1,message1:this.message1,subject2:this.subject2,message2:this.message2};console.log(JSON.stringify(e));var t=this;E.a.post("https://drtk2lbaij.execute-api.us-east-1.amazonaws.com/api/v1/campaign",JSON.stringify(e)).then((function(e){console.log(e["data"]["CampaignResponse"]["Id"]),t.campaign_id=e["data"]["CampaignResponse"]["Id"].toString()})).catch((function(e){console.log(e)})),this.clear()}}},B=A,M=(a("3b91"),Object(c["a"])(B,T,S,!1,null,"786ce5ea",null)),P=M.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",[a("Navbar")],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("h1",{staticStyle:{"padding-top":"20px","padding-bottom":"20px","text-align":"center"}},[e._v("View A/B Test Results")]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6",center:""}},[a("v-select",{attrs:{items:e.campaigns,label:"Test ID",solo:""},on:{change:e.updateMetrics}})],1)],1),a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-card-text",[a("div"),a("p",{staticClass:"display-1 text--primary"},[e._v("Test A")]),a("div",{staticClass:"text--primary"},[a("b",[e._v("Subject")])]),a("p",[e._v(e._s(e.metrics["0"]["subject"]))]),a("div",{staticClass:"text--primary"},[a("b",[e._v("Body")])]),a("p",[e._v(e._s(e.metrics["0"]["body"]))]),a("v-row",[a("v-col",[a("v-icon",[e._v("mdi-email-check")]),a("p",[e._v(e._s(e.metrics["0"]["emails_sent"])+" deliveries")])],1),a("v-col",[a("v-icon",[e._v("mdi-email-open")]),a("p",[e._v(e._s(e.metrics["0"]["emails_opened"])+" opens")])],1)],1)],1)],1)],1),a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-card-text",[a("div"),a("p",{staticClass:"display-1 text--primary"},[e._v("Test A")]),a("div",{staticClass:"text--primary"},[a("b",[e._v("Subject")])]),a("p",[e._v(e._s(e.metrics["1"]["subject"]))]),a("div",{staticClass:"text--primary"},[a("b",[e._v("Body")])]),a("p",[e._v(e._s(e.metrics["1"]["body"]))]),a("v-row",[a("v-col",[a("v-icon",[e._v("mdi-email-check")]),a("p",[e._v(e._s(e.metrics["1"]["emails_sent"])+" deliveries")])],1),a("v-col",[a("v-icon",[e._v("mdi-email-open")]),a("p",[e._v(e._s(e.metrics["1"]["emails_opened"])+" opens")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},q=[],V={name:"CampaignsAdd",components:{Navbar:j},data:function(){return{campaigns:[],metrics:{0:{subject:"",body:"",emails_sent:0,emails_opened:0},1:{subject:"",body:"",emails_sent:0,emails_opened:0}}}},mounted:function(){var e=this;E()({method:"GET",url:"https://drtk2lbaij.execute-api.us-east-1.amazonaws.com/api/v1/campaigns/list"}).then((function(t){e.campaigns=t.data["campaign_ids"]}),(function(e){console.error(e)}))},methods:{updateMetrics:function(e){var t=this;E()({method:"GET",url:"https://drtk2lbaij.execute-api.us-east-1.amazonaws.com/api/v1/metrics?campaign_id=".concat(e)}).then((function(e){t.metrics=e.data}),(function(e){console.error(e)}))}}},I=V,z=Object(c["a"])(I,N,q,!1,null,null,null),G=z.exports;s["default"].use(p["a"]);var J=[{path:"/",name:"home",component:k},{path:"/campaignAdd",name:"Campaign add",component:P},{path:"/campaignsView",name:"Campaigns view",component:G}],D=new p["a"]({mode:"history",base:"/",routes:J}),F=D;s["default"].config.productionTip=!1,s["default"].use(v.a),new s["default"]({vuetify:m,router:F,render:function(e){return e(u)}}).$mount("#app")},"724e":function(e,t,a){e.exports=a.p+"img/test.708a3596.jpg"},a5b7:function(e,t,a){"use strict";var s=a("ce61"),r=a.n(s);r.a},ce61:function(e,t,a){},fcd0:function(e,t,a){}});
//# sourceMappingURL=app.10b3d896.js.map