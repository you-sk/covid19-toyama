(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{406:function(t,e,r){var content=r(517);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("c3fd38c4",content,!1,{sourceMap:!1})},412:function(t){t.exports=JSON.parse('{"date":"2020/03/19 11:00","data":{"PCR検査数(県実施分)":[0,5,4,6,10,0,4,3,0,13,19,9,152,78,27,40,96,119,62,62,18,24,44,58,110,90,69,18,48,79,113,111,137,109,0,35,81,124,95,69,80,0,31,84,112],"PCR検査数(医療機関実施分)":[0,0,29,48,0,0,0,0,0,0,1,2,4,0,3,4,0,17,37,81,11,0,0,1,81,24,10,1,39,38,6,25,14,12,0,13,12,11,5,5,7,0,2,1,6],"抗原検査数(医療機関実施分)":[0,0,29,48,0,0,0,0,0,0,1,2,4,0,3,4,0,17,37,81,11,0,0,1,81,24,10,1,39,38,6,25,14,12,0,13,12,11,5,5,7,0,2,1,6]},"labels":["2/3","2/4","2/5","2/6","2/7","2/8","2/9","2/10","2/11","2/12","2/13","2/14","2/15","2/16","2/17","2/18","2/19","2/20","2/21","2/22","2/23","2/24","2/25","2/26","2/27","2/28","2/29","3/1","3/2","3/3","3/4","3/5","3/6","3/7","3/8","3/9","3/10","3/11","3/12","3/13","3/14","3/15","3/16","3/17","3/18"]}')},516:function(t,e,r){"use strict";var n=r(406),o=r.n(n);e.default=o.a},517:function(t,e,r){(e=r(10)(!1)).push([t.i,".GraphDesc_o77VL{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.DataViewDesc_wvmsK{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_o77VL",DataViewDesc:"DataViewDesc_wvmsK"},t.exports=e},521:function(t,e,r){"use strict";r.r(e);var n=r(350),o=r(411),c=r(412),d=r(415),l=r(424),h=r(416),m=r(419),f=r(418),y=r(417),v=r(426),$=r(425),x=r(414),D=r(420),_=r(423),C=r(20),k=r(104),S=r(2),w=r(355),L=r(407),I=r(408),P=r(357),R=r(358),T={created:function(){this.canvas=!0,this.sliderUpdate([0,this.sliderMax])},components:{DataView:w.a,DataSelector:L.a,DateSelectSlider:I.a,DataViewBasicInfoPanel:P.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},url:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0,graphRange:[0,1]}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=[{left:0,top:1,right:0,bottom:0},{left:0,top:0,right:0,bottom:0}];return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:r,backgroundColor:R.c[n],borderColor:"#ffffff",borderWidth:e[n]}}))}:{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:t.cumulative(r),backgroundColor:R.c[n],borderColor:"#ffffff",borderWidth:e[n]}}))}},tableHeaders:function(){return[{text:"",value:"text"}].concat(Object(k.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(k.a)(t.items.map((function(e,r){return Object(C.a)({},r,t.displayData.datasets[r].data[i])})))))}))},options:function(){var t=this,e=this.unit,r=this.eachArraySum(this.chartData),data=this.chartData,n=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(n),c={tooltips:{displayColors:!1,callbacks:{label:function(c){var d,l;return"transition"===t.dataKind?(d=r[c.index].toLocaleString(),l=data[c.datasetIndex][c.index].toLocaleString()):(d=o[c.index].toLocaleString(),l=n[c.datasetIndex][c.index].toLocaleString()),"".concat(t.dataLabels[c.datasetIndex],": ").concat(l," ").concat(e," (").concat(t.$t("合計"),": ").concat(d," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!1},ticks:{fontColor:"#808080",maxRotation:60,minRotation:0,max:this.labels[this.labels.length-1],min:this.labels[0]}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(c,{animation:{duration:0}}),c},sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1}},methods:{cumulative:function(t){var e=[],r=0;return t.forEach((function(t){r+=t,e.push(r)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]+t[2][i]);return e},sliderUpdate:function(t){this.graphRange=t}}},A=S.default.extend(T),j=r(516),N=r(4);var O={components:{TimeStackedBarChart:Object(N.a)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[r("ul",{class:t.$style.GraphDesc},[r("li",[t._v("\n        "+t._s(t.$t("（注）日付は検査結果判明日を基準にしている"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）2/27には、2/26までの累計数を含む"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）県実施分には、退院時の検査などは含まれない"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）把握には一定の期間を要しており、更新日の情報とは異なる場合あり"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),r("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),r("bar",{style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}}),t._v(" "),r("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),r("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2),t._v(" "),r("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}})],1)}),[],!1,(function(t){this.$style=j.default.locals||j.default}),null,null).exports},data:function(){var t=[c.data["PCR検査数(県実施分)"],c.data["PCR検査数(医療機関実施分)"],c.data["抗原検査数(医療機関実施分)"]],e=[this.$t("PCR検査数(県実施分)"),this.$t("PCR検査数(医療機関実施分)"),this.$t("抗原検査数(医療機関実施分)")],r=c.labels,n=[this.$t("PCR検査数(県実施分)"),this.$t("PCR検査数(医療機関実施分)"),this.$t("抗原検査数(医療機関実施分)")],data={Data:c,inspectionsGraph:t,inspectionsItems:e,inspectionsLabels:r,inspectionsDataLabels:n};return data}},K=Object(N.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-stacked-bar-chart",{attrs:{title:this.$t("検査実施数"),"title-id":"number-of-tested","chart-id":"number-of-tested","chart-data":this.inspectionsGraph,date:this.Data.date,items:this.inspectionsItems,labels:this.inspectionsLabels,unit:this.$t("人"),"data-labels":this.inspectionsDataLabels,url:"http://opendata.pref.toyama.jp/dataset/covid19"}})],1)}),[],!1,null,null,null).exports,V=r(422),E=r(427),G=r(421),M={components:{ConfirmedCasesDetailsCard:d.a,ConfirmedCasesNumberCard:l.a,ConfirmedCasesAttributesCard:h.a,PatientsByResidenceCard:m.a,PatientsByAgeCard:f.a,PatientsByGenderCard:y.a,DeadPersonsNumberCard:v.a,DischargedPersonsNumberCard:$.a,TestedCasesDetailsCard:x.a,PositiveRateCard:D.a,InspectionPersonsNumberCard:_.a,TestedNumberCard:K,TelephoneAdvisoryReportsNumberCard:V.a,ConsultationDeskReportsNumberCard:E.a,PopulationCard:G.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=n.main_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=n.patients_summary.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=n.patients.date;break;case"patients-by-residence":title=this.$t("陽性患者数(居住地別)"),t=n.patients_by_residence.date;break;case"patients-by-age":title=this.$t("陽性患者数(年代別)"),t=n.patients_by_age.date;break;case"patients-by-gender":title=this.$t("陽性患者数(性別)"),t=n.patients_by_gender.date;break;case"number-of-dead-persons":title=this.$t("死亡者数"),t=n.dead_persons.date;break;case"number-of-discharged-persons":title=this.$t("退院者数"),t=n.discharged_persons.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=n.inspection_status_summary.date;break;case"rate-of-confirmed-cases":title=this.$t("検査陽性率"),t=n.positive_rate.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=n.inspection_persons.date;break;case"number-of-tested":title=this.$t("検査実施数"),t=c.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナウイルス感染症に関する一般相談件数"),t=n.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("帰国者・接触者相談センターへの相談件数"),t=n.querents.date;break;case"changes-of-population-around-toyama-station":title=this.$t("富山駅周辺の人口の推移（参考値）"),t=o.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19-toyama.netlify.app/",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("富山県公認")+" "+this.$t("新型コロナウイルス感染症")+" "+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:"https://raw.githubusercontent.com/Terachan0117/covid19-toyama/development/static/ogp.png"},{hid:"twitter:image",name:"twitter:image",content:r}]}}},B=Object(N.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-confirmed-cases-by-residence"==this.$route.params.card?e("patients-by-residence-card"):"number-of-confirmed-cases-by-age"==this.$route.params.card?e("patients-by-age-card"):"number-of-confirmed-cases-by-gender"==this.$route.params.card?e("patients-by-gender-card"):"number-of-dead-persons"==this.$route.params.card?e("dead-persons-number-card"):"number-of-discharged-persons"==this.$route.params.card?e("discharged-persons-number-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"rate-of-confirmed-cases"==this.$route.params.card?e("positive-rate-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"changes-of-population-around-toyama-station"==this.$route.params.card?e("population-card"):this._e()],1)}),[],!1,null,null,null);e.default=B.exports}}]);