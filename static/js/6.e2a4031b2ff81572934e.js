webpackJsonp([6],{PFJb:function(e,t,r){var s=r("mJAB");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("8bSs")("e93d2d06",s,!0)},YOyO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("4YfN"),n=r.n(s),a=r("2X+S"),o=r("8stH"),c=r("T452"),i=r("qwAB"),h=r("6Xyt"),A=r("HVJf"),p=r("vhoT"),l=r("F4+m"),u=r("XEAW"),f={mixins:[l.b,l.c],data:function(){return{hotKey:[],query:""}},created:function(){this._getHotKey()},methods:n()({_getHotKey:function(){var e=this;Object(o.a)().then(function(t){c.a===t.code&&(e.hotKey=t.data.hotkey.slice(0,10))})},handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.searchResult.style.bottom=t,this.$refs.suggest.refresh(),this.$refs.shortcutWrapper.style.bottom=t,this.$refs.scroll.refresh()},showConfirm:function(){this.$refs.confirm.show()}},Object(A.b)(["clearSearchHistory"])),computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},watch:{query:function(e){var t=this;e||setTimeout(function(){t.$refs.scroll.refresh()},20)}},components:{SearchBox:a.a,Scroll:i.a,Suggest:h.a,SearchList:p.a,Confirm:u.a}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"scroll",staticClass:"shortcut",attrs:{data:e.shortcut,refreshDelay:e.refreshDelay}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),r("ul",e._l(e.hotKey,function(t){return r("li",{staticClass:"item",on:{click:function(r){e.addQuery(t.k)}}},[r("span",[e._v(e._s(t.k))])])}))]),e._v(" "),r("div",{staticClass:"search-history"},[r("div",{staticClass:"title"},[r("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),r("div",{staticClass:"clear",on:{click:e.showConfirm}},[r("i",{staticClass:"iconfont"},[e._v("")])])]),e._v(" "),r("search-list",{attrs:{searches:e.searchHistory},on:{select:e.addQuery,delete:e.deleteSearchHistory}})],1)])])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:e.query},on:{listScroll:e.blurInput,select:e.saveSearch}})],1),e._v(" "),r("confirm",{ref:"confirm",attrs:{text:"是否清除全部历史"},on:{confirm:e.clearSearchHistory}}),e._v(" "),r("router-view")],1)},staticRenderFns:[]},d=r("/Xao")(f,C,!1,function(e){r("PFJb")},"data-v-5e85f3e4",null);t.default=d.exports},mJAB:function(e,t,r){(e.exports=r("BkJT")(!0)).push([e.i,"\n.search[data-v-5e85f3e4] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n  background-color: #fafafb;\n}\n.search .search-box-wrapper[data-v-5e85f3e4] {\n  margin: 20px;\n}\n.search .shortcut-wrapper[data-v-5e85f3e4] {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut[data-v-5e85f3e4] {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key[data-v-5e85f3e4] {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title[data-v-5e85f3e4] {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item[data-v-5e85f3e4] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: rgba(0,0,0,0.3);\n  font-size: 14px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .search-history[data-v-5e85f3e4] {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title[data-v-5e85f3e4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 16px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-5e85f3e4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .iconfont[data-v-5e85f3e4] {\n  font-size: 16px;\n  color: rgba(0,0,0,0.5);\n}\n.search .search-result[data-v-5e85f3e4] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}","",{version:3,sources:["C:/Users/G/Desktop/the new/v-music/src/components/search/search.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,YAAY;CACb;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,aAAa;EACb,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB;AACD;EACE,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,UAAU;CACX",file:"search.vue",sourcesContent:["\n.search[data-v-5e85f3e4] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n  background-color: #fafafb;\n}\n.search .search-box-wrapper[data-v-5e85f3e4] {\n  margin: 20px;\n}\n.search .shortcut-wrapper[data-v-5e85f3e4] {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut[data-v-5e85f3e4] {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key[data-v-5e85f3e4] {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title[data-v-5e85f3e4] {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item[data-v-5e85f3e4] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: rgba(0,0,0,0.3);\n  font-size: 14px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .search-history[data-v-5e85f3e4] {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title[data-v-5e85f3e4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 16px;\n  color: rgba(0,0,0,0.8);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-5e85f3e4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .iconfont[data-v-5e85f3e4] {\n  font-size: 16px;\n  color: rgba(0,0,0,0.5);\n}\n.search .search-result[data-v-5e85f3e4] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=6.e2a4031b2ff81572934e.js.map