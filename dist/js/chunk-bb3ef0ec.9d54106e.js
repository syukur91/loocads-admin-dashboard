(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb3ef0ec","chunk-299afcf5"],{2873:function(e,t,a){"use strict";var n=a("e004"),i=a.n(n);i.a},"42eb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"campaigns-tab dashboard-tab"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("vuestic-widget",{attrs:{headerText:e.$t("tables.advanced")}},[a("vuestic-data-table",{attrs:{apiUrl:e.apiUrl,tableFields:e.tableFields,itemsPerPage:e.itemsPerPage,defaultPerPage:e.defaultTablePerPage,sortFunctions:e.sortFunctions,apiMode:e.apiMode,paginationPath:e.paginationPath,queryParams:e.queryParams}},[a("spring-spinner",{attrs:{slot:"loading","animation-duration":2500,size:70,color:"#4ae387"},slot:"loading"})],1)],1)],1)])])},i=[],s=(a("cadf"),a("551c"),a("097d"),a("a026")),r=a("493c"),o={tableFields:[{name:"__component:badge-column",title:"",dataClass:"text-center",width:"4%"},{name:"amountSpent",title:"Amount Spent",sortField:"amountSpent",width:"24%"},{name:"budget",title:"Budget",width:"24%"},{name:"campaignName",title:"Campaign Name",width:"24%"},{name:"costPerResult",title:"Cost Per Result",width:"24%"},{name:"impressions",title:"Impressions",width:"24%"}],sortFunctions:{amountSpent:function(e,t){return e>=t?1:-1},impressions:function(e,t){return e>=t?1:-1}}},c=a("6086"),l=a("5e62");a("4583");s["a"].component("badge-column",r["default"]);var d={name:"campaigns-tab",data:function(){return{apiUrl:"http://45.76.178.16:4443/campaigns",apiMode:!0,tableFields:o.tableFields,itemsPerPage:c["a"].itemsPerPage,sortFunctions:o.sortFunctions,paginationPath:"",defaultTablePerPage:3,queryParams:l["a"]}}},u=d,m=(a("2873"),a("2877")),p=Object(m["a"])(u,n,i,!1,null,"26007ab1",null);p.options.__file="Campaigns.vue";t["default"]=p.exports},4509:function(e,t,a){},"493c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"circle",class:e.classObject})},i=[],s=(a("c5f6"),{name:"badgeColumn",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{classObject:function(){return{"badge-warning":this.rowIndex%6===0,"badge-primary":this.rowIndex%6===1,"badge-danger":this.rowIndex%6===2,"badge-info":this.rowIndex%6===3,"badge-violet":this.rowIndex%6===4,"badge-dark-blue":this.rowIndex%6===5}}}}),r=s,o=(a("c2d6"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"06b6e608",null);c.options.__file="BadgeColumn.vue";t["default"]=c.exports},c2d6:function(e,t,a){"use strict";var n=a("4509"),i=a.n(n);i.a},e004:function(e,t,a){}}]);
//# sourceMappingURL=chunk-bb3ef0ec.9d54106e.js.map