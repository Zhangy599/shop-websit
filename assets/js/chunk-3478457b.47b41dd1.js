(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3478457b"],{"0d83":function(t,e,i){"use strict";i.r(e);var s=i("8ccb"),r=i.n(s);for(var c in s)"default"!==c&&function(t){i.d(e,t,(function(){return s[t]}))}(c);e["default"]=r.a},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1427:function(t,e,i){"use strict";i.r(e);var s=i("5b61"),r=i("0d83");for(var c in r)"default"!==c&&function(t){i.d(e,t,(function(){return r[t]}))}(c);i("486f");var a=i("2877"),n=Object(a["a"])(r["default"],s["a"],s["b"],!1,null,"6887e15e",null);e["default"]=n.exports},"1aa2":function(t,e,i){t.exports=i.p+"assets/img/lazyImg.639beef7.jpg"},"27bb":function(t,e,i){},"2fcb":function(t,e,i){},"486f":function(t,e,i){"use strict";var s=i("ac8d"),r=i.n(s);r.a},"5b61":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show.show,expression:"show.show"}],staticClass:"search-component"},[i("div",{staticClass:"search-header"},[i("div",{staticClass:"close",on:{click:function(e){t.show.show=!1}}}),i("div",{staticClass:"search-wrap"},[i("div",{staticClass:"search-input-wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search",attrs:{type:"text",placeholder:"请输入宝贝名称"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("button",{staticClass:"search-btn",attrs:{type:"button"},on:{click:function(e){return t.goSearch()}}})])]),t.historyKeywords.length>0?i("div",{staticClass:"search-main"},[i("div",{staticClass:"search-title-wrap"},[i("div",{staticClass:"search-title"},[t._v("最近搜索")]),i("div",{staticClass:"bin",on:{click:function(e){return t.clearHistoryKeywords()}}})]),i("div",{staticClass:"search-keywords-wrap"},t._l(t.historyKeywords,(function(e,s){return i("div",{key:s,staticClass:"keywords",on:{click:function(i){return t.goSearch(e)}}},[t._v(t._s(e))])})),0)]):t._e(),i("div",{staticClass:"search-main"},[t._m(0),i("div",{staticClass:"search-keywords-wrap"},t._l(t.hotKeywords,(function(e,s){return i("div",{key:s,staticClass:"keywords",on:{click:function(i){return t.goSearch(e.title)}}},[t._v(t._s(e.title))])})),0)])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-title-wrap"},[i("div",{staticClass:"search-title"},[t._v("热门搜索")])])}];i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}))},"826f":function(t,e,i){"use strict";var s;(function(r,c,a){t.exports?t.exports=a(r,c):(s=function(){return a(r,c)}.call(e,i,e,t),void 0===s||(t.exports=s))})(window,document,(function(t,e){var i=function(){this.fnScrollBottom=null,this.eventScroll()};return i.prototype={init:function(t,e){t instanceof Object&&(this.opts=t,this.iMaxPage=this.opts.maxPage,this.fnCallback=e,this.iOffsetBottom=this.opts.offsetBottom,this.iCurPage=this.opts.curPage)},eventScroll:function(){var e=this;e.fnScrollBottom=e.scrollBottom().bind(this),t.addEventListener("scroll",e.fnScrollBottom,!1)},uneventSrcoll:function(){var e=this;t.removeEventListener("scroll",e.fnScrollBottom,!1)},scrollBottom:function(){var t=this,i=!0;return function(){if(i){i=!1;var s=null;clearTimeout(s),s=setTimeout((function(){var s=e.documentElement.scrollHeight||e.body.scrollHeight,r=e.documentElement.scrollTop||e.body.scrollTop,c=e.documentElement.clientHeight||e.body.clientHeight;s-(c+r)<=t.iOffsetBottom&&t.iCurPage<t.iMaxPage&&(t.iCurPage++,t.fnCallback(t.iCurPage)),i=!0}),300)}}}},i}))},"841c":function(t,e,i){"use strict";var s=i("d784"),r=i("825a"),c=i("1d80"),a=i("129f"),n=i("14c3");s("search",1,(function(t,e,i){return[function(e){var i=c(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i):new RegExp(e)[t](String(i))},function(t){var s=i(e,t,this);if(s.done)return s.value;var c=r(t),o=String(this),l=c.lastIndex;a(l,0)||(c.lastIndex=0);var u=n(c,o);return a(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]}))},8791:function(t,e,i){"use strict";var s=i("27bb"),r=i.n(s);r.a},"8ccb":function(t,e,i){"use strict";var s=i("1bd5");i("a4d3"),i("4de4"),i("4160"),i("a434"),i("e439"),i("dbb4"),i("b64b"),i("ac1f"),i("5319"),i("841c"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e17f");var r=s(i("2241")),c=s(i("2fa7")),a=i("2f62");i("b970");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){(0,c.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={name:"my-search",data:function(){return{keyword:""}},props:{show:{type:Object,default:{}},isLocal:{type:Boolean,default:!1}},created:function(){this.keywords=this.historyKeywords?this.historyKeywords:[],this.getHotKeyword()},computed:o({},(0,a.mapState)({historyKeywords:function(t){return t.search.historyKeywords},hotKeywords:function(t){return t.search.hotKeywords}})),methods:o({},(0,a.mapMutations)({SET_KEYWORDS:"search/SET_KEYWORDS",CLEAR_KEYWORDS:"search/CLEAR_KEYWORDS"}),{},(0,a.mapActions)({getHotKeyword:"search/getHotKeyword"}),{goSearch:function(t){var e=t||this.keyword||"";if(e){if(this.keywords.length>0)for(var i=0;i<this.keywords.length;i++)this.keywords[i]===e&&this.keywords.splice(i--,1);this.keywords.unshift(e),this.SET_KEYWORDS({historyKeywords:this.keywords})}this.show.show=!1,this.isLocal?this.$router.replace("/goods/search?keyword="+e):this.$router.push("/goods/search?keyword="+e)},clearHistoryKeywords:function(){var t=this;this.historyKeywords.length>0&&r.default.confirm({title:"",message:"确认要删除吗？"}).then((function(){t.CLEAR_KEYWORDS()})).catch((function(){}))}})};e.default=l},"9cdb":function(t,e,i){"use strict";i.r(e);var s=i("d476"),r=i("eeb2");for(var c in r)"default"!==c&&function(t){i.d(e,t,(function(){return r[t]}))}(c);i("8791");var a=i("2877"),n=Object(a["a"])(r["default"],s["a"],s["b"],!1,null,"b8cf3068",null);e["default"]=n.exports},ac8d:function(t,e,i){},d343:function(t,e,i){"use strict";var s=i("1bd5");i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("e25e"),i("ac1f"),i("841c"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,c=s(i("2fa7")),a=i("2f62"),n=s(i("1427")),o=s(i("28ba")),l=s(i("826f"));function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){(0,c.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"goods-search",data:function(){return{keyword:this.$route.query.keyword?this.$route.query.keyword:"",searchShow:{show:!1},isPriceOrder:!1,priceOrderList:[{otype:"all",title:"综合",active:!0},{otype:"up",title:"价格从低到高",active:!1},{otype:"down",title:"价格从高到低",active:!1}],isSalesOrder:!1,isScreen:!1,isClassify:!1}},components:{MySearch:n.default},computed:d({},(0,a.mapState)((r={classifys:function(t){return t.goods.classifys},priceData:function(t){return t.search.priceData},minPrice:function(t){return t.search.minPrice},maxPrice:function(t){return t.search.maxPrice},attrs:function(t){return t.search.attrs},searchData:function(t){return t.search.searchData},cid:function(t){return t.search.cid}},(0,c.default)(r,"attrs",(function(t){return t.search.attrs})),(0,c.default)(r,"params",(function(t){return t.search.params})),(0,c.default)(r,"total",(function(t){return t.search.total})),r))),created:function(){var t=this;this.otype="all",this.pullUp=new l.default,this.getClassify({success:function(){t.$nextTick((function(){t.myScroll.refresh()}))}}),this.resetScreen(),this.init(),this.getAttrs({keyword:this.keyword,success:function(){t.$nextTick((function(){t.myScroll.refresh()}))}})},mounted:function(){this.$refs["screen"].addEventListener("touchmove",this.disableScreenTochmove),this.myScroll=new o.default(this.$refs["screen"],{scrollX:!1,scrollY:!0,preventDefault:!1})},methods:d({},(0,a.mapActions)({getClassify:"goods/getClassify",selectClassify:"search/selectClassify",getSearch:"search/getSearch",getSearchPage:"search/getSearchPage",getAttrs:"search/getAttrs",resetScreen:"search/resetScreen"}),{},(0,a.mapMutations)({HIDE_PRICE:"search/HIDE_PRICE",SELECT_PRICE:"search/SELECT_PRICE",SET_MINPRICE:"search/SET_MINPRICE",SET_MAXPRICE:"search/SET_MAXPRICE",HIDE_ATTR:"search/HIDE_ATTR",SELECT_ATTR:"search/SELECT_ATTR",SET_PARAMS:"search/SET_PARAMS"}),{selectPrice:function(){this.isPriceOrder=!this.isPriceOrder},selectPriceOrder:function(t){if(this.priceOrderList.length>0){for(var e=0;e<this.priceOrderList.length;e++)if(this.priceOrderList[e].active){this.priceOrderList[e].active=!1;break}this.priceOrderList[t].active=!0,this.$set(this.priceOrderList,t,this.priceOrderList[t]),this.isSalesOrder=!1,this.otype=this.priceOrderList[t].otype,this.init()}},selectSales:function(){this.isSalesOrder=!0,this.isPriceOrder=!1;for(var t=0;t<this.priceOrderList.length;t++)if(this.priceOrderList[t].active){this.priceOrderList[t].active=!1;break}this.otype="sales",this.init()},disableScreenTochmove:function(t){t.preventDefault()},init:function(){var t=this,e={keyword:this.keyword,otype:this.otype,cid:this.cid,price1:this.minPrice,price2:this.maxPrice,param:JSON.stringify(this.params)};this.getSearch(d({},e,{success:function(i){t.$nextTick((function(){t.$utils.lazyImg()})),t.pullUp.init({curPage:1,maxPage:parseInt(i),offsetBottom:100},(function(i){t.getSearchPage(d({},e,{page:i}))}))}}))},sureSubmit:function(){this.isScreen=!1,this.SET_PARAMS(),this.init()}}),beforeRouteUpdate:function(t,e,i){var s=this;if(this.keyword=t.query.keyword,this.isPriceOrder=!1,this.priceOrderList.length>0)for(var r=0;r<this.priceOrderList.length;r++)if(this.priceOrderList[r].active){this.priceOrderList[r].active=!1;break}this.priceOrderList[0].active=!0,this.otype="all",this.isSalesOrder=!1,this.resetScreen(),this.init(),this.getAttrs({keyword:this.keyword,success:function(){s.$nextTick((function(){s.myScroll.refresh()}))}}),i()},beforeDestroy:function(){this.$refs["screen"].removeEventListener("touchmove",this.disableScreenTochmove),this.pullUp.uneventSrcoll()}};e.default=h},d476:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"search-top"},[s("div",{staticClass:"search-header"},[s("div",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"search-wrap",on:{click:function(e){t.searchShow.show=!0}}},[s("div",{staticClass:"search-icon"}),s("div",{staticClass:"search-text"},[t._v(t._s(t.keyword))])]),s("div",{staticClass:"screen-btn",on:{click:function(e){t.isScreen=!0}}},[t._v("筛选")])]),s("div",{staticClass:"order-main"},[s("div",{class:{"order-item":!0,active:t.isPriceOrder},on:{click:function(e){return t.selectPrice()}}},[s("div",{staticClass:"order-text"},[t._v("综合")]),s("div",{staticClass:"order-icon"}),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isPriceOrder,expression:"isPriceOrder"}],staticClass:"order-menu"},t._l(t.priceOrderList,(function(e,i){return s("li",{key:i,class:{active:e.active},on:{click:function(e){return t.selectPriceOrder(i)}}},[t._v(t._s(e.title))])})),0)]),s("div",{class:{"order-item":!0,active:t.isSalesOrder},on:{click:function(e){return t.selectSales()}}},[s("div",{staticClass:"order-text"},[t._v("销量")])])])]),s("div",{staticClass:"goods-main"},[t._l(t.searchData,(function(e,r){return s("div",{key:r,staticClass:"goods-list",on:{click:function(i){return t.$router.push("/goods/details?gid="+e.gid)}}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:i("1aa2"),"data-echo":e.image}})]),s("div",{staticClass:"goods-content"},[s("div",{staticClass:"goods-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"price"},[t._v("¥"+t._s(e.price))]),s("div",{staticClass:"sales"},[t._v("销量"),s("span",[t._v(t._s(e.sales))]),t._v("件")])])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchData.length<=0,expression:"searchData.length<=0"}],staticClass:"no-data"},[t._v("没有相关商品！")])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isScreen,expression:"isScreen"}],ref:"mask",staticClass:"mask",on:{click:function(e){t.isScreen=!1}}}),s("div",{ref:"screen",class:t.isScreen?"screen move":"screen unmove"},[s("div",[s("div",{staticClass:"attr-wrap"},[s("div",{staticClass:"attr-title-wrap",on:{click:function(e){t.isClassify=!t.isClassify}}},[s("div",{staticClass:"attr-name"},[t._v("分类")]),s("div",{class:{"attr-icon":!0,up:t.isClassify}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isClassify,expression:"!isClassify"}],staticClass:"item-wrap"},t._l(t.classifys,(function(e,i){return s("div",{key:i,class:{item:!0,active:e.active},on:{click:function(e){return t.selectClassify({index:i})}}},[t._v(t._s(e.title))])})),0)]),s("div",{staticStyle:{width:"100%",height:"1px",backgroundColor:"#EFEFEF"}}),s("div",{staticClass:"attr-wrap"},[s("div",{staticClass:"attr-title-wrap",on:{click:function(e){return t.HIDE_PRICE()}}},[s("div",{staticClass:"attr-name"},[t._v("价格区间")]),s("div",{staticClass:"price-wrap",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"price-input"},[s("input",{attrs:{type:"tel",placeholder:"最低价"},domProps:{value:t.minPrice},on:{input:function(e){return t.SET_MINPRICE({minPrice:e.target.value})}}})]),s("div",{staticClass:"price-line"}),s("div",{staticClass:"price-input"},[s("input",{attrs:{type:"tel",placeholder:"最高价"},domProps:{value:t.maxPrice},on:{input:function(e){return t.SET_MAXPRICE({maxPrice:e.target.value})}}})])]),s("div",{class:{"attr-icon":!0,up:t.priceData.isHide}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.priceData.isHide,expression:"!priceData.isHide"}],staticClass:"item-wrap"},t._l(t.priceData.items,(function(e,i){return s("div",{key:i,class:{item:!0,active:e.active},on:{click:function(e){return t.SELECT_PRICE({index:i})}}},[t._v(t._s(e.price1)+"-"+t._s(e.price2))])})),0)]),s("div",{staticStyle:{width:"100%",height:"0.3rem",backgroundColor:"#EFEFEF"}}),s("div",[t._l(t.attrs,(function(e,i){return s("div",{key:i,staticClass:"attr-wrap"},[s("div",{staticClass:"attr-title-wrap",on:{click:function(e){return t.HIDE_ATTR({index:i})}}},[s("div",{staticClass:"attr-name"},[t._v(t._s(e.title))]),s("div",{class:{"attr-icon":!0,up:e.isHide}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isHide,expression:"!item.isHide"}],staticClass:"item-wrap"},t._l(e.param,(function(e,r){return s("div",{key:r,class:{item:!0,active:e.active},on:{click:function(e){return t.SELECT_ATTR({index:i,index2:r})}}},[t._v(t._s(e.title))])})),0)])})),s("div",{staticStyle:{width:"100%",height:"1px",backgroundColor:"#EFEFEF"}})],2),s("div",{staticStyle:{width:"100%",height:"1.2rem"}})]),s("div",{staticClass:"handel-wrap"},[s("div",{staticClass:"item"},[t._v("共"),s("span",[t._v(t._s(t.total))]),t._v("件")]),s("div",{staticClass:"item reset",on:{click:function(e){return t.resetScreen()}}},[t._v("全部重置")]),s("div",{staticClass:"item sure",on:{click:function(e){return t.sureSubmit()}}},[t._v("确定")])])]),s("my-search",{attrs:{show:t.searchShow,isLocal:!0}})],1)},r=[];i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}))},e17f:function(t,e,i){"use strict";i.r(e);i("68ef"),i("4d75"),i("09fe"),i("2fcb")},eeb2:function(t,e,i){"use strict";i.r(e);var s=i("d343"),r=i.n(s);for(var c in s)"default"!==c&&function(t){i.d(e,t,(function(){return s[t]}))}(c);e["default"]=r.a}}]);
//# sourceMappingURL=chunk-3478457b.47b41dd1.js.map