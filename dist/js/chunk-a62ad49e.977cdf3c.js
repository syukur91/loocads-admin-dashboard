(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a62ad49e","chunk-733852d6"],{1795:function(t,e,a){},"3d86":function(t,e,a){},6527:function(t,e,a){"use strict";var n=a("1795"),i=a.n(n);i.a},"81f8":function(t,e,a){"use strict";var n=a("3d86"),i=a.n(n);i.a},a84e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"circle",class:t.classObject})},i=[],s=(a("c5f6"),a("cadf"),a("551c"),a("097d"),{name:"badgeColumn",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{classObject:function(){return{"badge-warning":this.rowIndex%6===0,"badge-primary":this.rowIndex%6===1,"badge-danger":this.rowIndex%6===2,"badge-info":this.rowIndex%6===3,"badge-violet":this.rowIndex%6===4,"badge-dark-blue":this.rowIndex%6===5}}}}),r=s,d=(a("81f8"),a("2877")),o=Object(d["a"])(r,n,i,!1,null,"6fba8cbd",null);o.options.__file="BadgeColumn.vue";e["default"]=o.exports},dff7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-tab dashboard-tab"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("vuestic-widget",{attrs:{headerText:t.$t("tables.advanced")}},[a("vuestic-data-table",{attrs:{apiUrl:t.apiUrl,tableFields:t.tableFields,itemsPerPage:t.itemsPerPage,defaultPerPage:t.defaultTablePerPage,sortFunctions:t.sortFunctions,apiMode:t.apiMode,paginationPath:t.paginationPath,queryParams:t.queryParams}},[a("spring-spinner",{attrs:{slot:"loading","animation-duration":2500,size:70,color:"#4ae387"},slot:"loading"})],1)],1)],1)])])},i=[],s=(a("cadf"),a("551c"),a("097d"),a("a026")),r=a("a84e"),d={tableFields:[{name:"__component:badge-column",title:"",dataClass:"text-center",width:"4%"},{name:"campaignName",title:"Campaign Name",sortField:"campaignName",width:"24%"},{name:"campaignType",title:"Campaign Type",width:"24%"},{name:"latitude",title:"Latitude",width:"24%"},{name:"longitude",title:"Longitude",width:"24%"},{name:"quantity",title:"Quantity",width:"24%"},{name:"radius",title:"Radius",width:"24%"}],sortFunctions:{amountSpent:function(t,e){return t>=e?1:-1},impressions:function(t,e){return t>=e?1:-1}}},o=a("6086"),l=a("5e62"),u=a("4583");s["a"].component("badge-column",r["default"]);var c={name:"list-tab",components:{SpringSpinner:u["SpringSpinner"]},data:function(){return{apiUrl:"http://45.76.178.16:4443/adlist",apiMode:!0,tableFields:d.tableFields,itemsPerPage:o["a"].itemsPerPage,sortFunctions:d.sortFunctions,paginationPath:"",defaultTablePerPage:3,queryParams:l["a"]}}},p=c,m=(a("6527"),a("2877")),g=Object(m["a"])(p,n,i,!1,null,"76b785d7",null);g.options.__file="List.vue";e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-a62ad49e.977cdf3c.js.map