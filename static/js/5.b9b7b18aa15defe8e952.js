webpackJsonp([5],{"0Gh8":function(t,e,n){var i=n("Xh16");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("b2b4b9ce",i,!0)},BRgg:function(t,e,n){"use strict";function i(){var t=a()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function o(t){var e=a()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,l.c)}e.b=i,e.a=o;var A=n("aA9S"),a=n.n(A),s=n("Gak4"),l=n("T452")},Kjo5:function(t,e,n){"use strict";function i(t){n("0Gh8")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("4YfN"),A=n.n(o),a=n("qwAB"),s=n("y/jF"),l=n("BRgg"),r=n("T452"),p=n("F4+m"),c=n("HVJf"),d={mixins:[p.b],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:A()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;Object(l.b)().then(function(e){e.code===r.a&&(t.topList=e.data.topList)})}},Object(c.d)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:a.a,Loading:s.a}},B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,function(e){return n("li",{staticClass:"item",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,i){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(i+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},C=[],f={render:B,staticRenderFns:C},x=f,b=n("/Xao"),h=i,m=b(d,x,!1,h,"data-v-be833660",null);e.default=m.exports},Xh16:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,".rank[data-v-be833660]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-be833660]{height:100%;overflow:hidden}.rank .toplist .item[data-v-be833660]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-be833660]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-be833660]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-be833660]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-be833660]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-be833660]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/G/Desktop/vue-music-master1/vue-music-master/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-be833660] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-be833660] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-be833660] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-be833660]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-be833660] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-be833660] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-be833660] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-be833660] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])}});
//# sourceMappingURL=5.b9b7b18aa15defe8e952.js.map