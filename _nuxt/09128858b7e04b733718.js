(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{349:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},351:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("15010084",content,!1,{sourceMap:!1})},352:function(t,e,n){"use strict";var o=n(349);n.n(o).a},353:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},354:function(t,e,n){"use strict";var o=n(2).default.extend({props:{icon:{type:String}}}),r=(n(352),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},358:function(t,e,n){"use strict";var o=n(351);n.n(o).a},359:function(t,e,n){(e=n(10)(!1)).push([t.i,'.StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:16px;font-size:1rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #008830}.StaticCard em{font-style:normal}.StaticCard a{font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a[target=_blank]::after{content:"󰏌";margin-left:.1em;margin-right:.2em;display:inline-block;text-decoration:none;font:normal normal normal 24px/1 "Material Design Icons";font-size:inherit;text-rendering:auto;line-height:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}',""]),t.exports=e},360:function(t,e,n){"use strict";var o=n(2).default.extend(),r=(n(358),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},384:function(t,e,n){var content=n(469);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("52c2f913",content,!1,{sourceMap:!1})},468:function(t,e,n){"use strict";var o=n(384);n.n(o).a},469:function(t,e,n){(e=n(10)(!1)).push([t.i,"\n.maps{\n  height:55vh;\n  width:100%;\n  border:none;\n}\n.note{\n  list-style-type: none;\n  padding-left: 0 !important;\n  font-size: 12px;\n  color: #707070;\n}\n.note>a{\n  text-decoration: none;\n}\n",""]),t.exports=e},530:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(360),d=n(354),l=o.default.extend({components:{PageHeader:d.a,StaticCard:r.a},head:function(){return{title:this.$t("県内の医療提供体制マップ")}}}),c=(n(468),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("県内の医療提供体制マップ"))+"\n  ")]),t._v(" "),n("StaticCard",[n("ul",{staticClass:"note"},[n("li",[t._v(t._s(t.$t("（注）すべての入院病床を有する医療機関の情報を網羅しているものではない")))]),t._v(" "),n("li",[t._v(t._s(t.$t("（注）把握には一定の期間を要しており、更新日の情報とは異なる場合あり")))])]),t._v(" "),n("iframe",{staticClass:"maps",attrs:{src:"https://tera-chan.com/covid19-toyama/maps/",allowfullscreen:""}}),t._v(" "),n("ul",{staticClass:"note"},[n("li",[n("a",{attrs:{href:"https://corona.go.jp/dashboard/",target:"_blank"}},[t._v(t._s(t.$t("[全国医療機関の医療提供体制の状況]内閣官房 新型コロナウイルス感染症対策推進室HP(https://corona.go.jp/dashboard/)を元に作成")))])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);