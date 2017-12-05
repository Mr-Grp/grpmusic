webpackJsonp([1],{"0IpB":function(t,e,i){"use strict";function n(t){i("86cF")}function s(t){i("1R4w")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("4YfN"),r=i.n(a),o=i("qwAB"),l=i("y/jF"),A=i("3Q4o"),c={props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.probeType=3,this.listenScroll=!0,this.touch={},this.listHeight=[]},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=Object(A.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+i;this._scrollTo(n)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listHeight.push(e)}},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0),this.scrollY=this.$refs.listview.scroll.y)}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var i=0;i<e.length-1;i++){var n=e[i],s=e[i+1];if(-t>=n&&-t<s)return this.currentIndex=i,void(this.diff=s+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:o.a,Loading:l.a}},u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(e){return i("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("uL",t._l(e.items,function(e){return i("li",{staticClass:"list-group-item",on:{click:function(i){t.selectItem(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))],1)})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)},touchend:function(t){t.stopPropagation()}}},[i("ul",t._l(t.shortcutList,function(e,n){return i("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v(t._s(e)+"\n      ")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle)+" ")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("loading")],1)])},d=[],h={render:u,staticRenderFns:d},p=h,g=i("/Xao"),f=n,v=g(c,p,!1,f,"data-v-136ce5b2",null),C=v.exports,m=i("Sgn/"),B=i("T452"),x=i("0aAL"),b=i("HVJf"),w=i("F4+m"),_={mixins:[w.b],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:r()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singer.style.bottom=e,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(m.b)().then(function(e){e.code===B.a&&(t.singers=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(new x.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var n=t.Findex;e[n]||(e[n]={title:n,items:[]}),e[n].items.push(new x.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var i=[],n=[];for(var s in e){var a=e[s];a.title.match(/[a-zA-Z]/)?i.push(a):"热门"===a.title&&n.push(a)}return i.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(i)}},Object(b.d)({setSinger:"SET_SINGER"})),components:{ListView:C}},y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"singer",staticClass:"singer"},[i("list-view",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),i("router-view")],1)},k=[],S={render:y,staticRenderFns:k},Y=S,T=i("/Xao"),D=s,E=T(_,Y,!1,D,"data-v-16b6acec",null);e.default=E.exports},"1R4w":function(t,e,i){var n=i("tINw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("8bSs")("00b9c667",n,!0)},"86cF":function(t,e,i){var n=i("WmBx");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("8bSs")("44208f96",n,!0)},"Sgn/":function(t,e,i){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var e=r()({},l.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.c)}e.b=n,e.a=s;var a=i("aA9S"),r=i.n(a),o=i("Gak4"),l=i("T452")},WmBx:function(t,e,i){e=t.exports=i("BkJT")(!0),e.push([t.i,".listview[data-v-136ce5b2]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-136ce5b2]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-136ce5b2]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-136ce5b2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-136ce5b2]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-136ce5b2]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-136ce5b2]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-136ce5b2]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-136ce5b2]{color:#ffcd32}.listview .list-fixed[data-v-136ce5b2]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-136ce5b2]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-136ce5b2]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/G/Desktop/vue-music-master1/vue-music-master/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-136ce5b2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-136ce5b2] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-136ce5b2] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-136ce5b2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-136ce5b2] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-136ce5b2] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-136ce5b2] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-136ce5b2] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-136ce5b2] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-136ce5b2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-136ce5b2] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-136ce5b2] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},tINw:function(t,e,i){e=t.exports=i("BkJT")(!0),e.push([t.i,".singer[data-v-16b6acec]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["C:/Users/G/Desktop/vue-music-master1/vue-music-master/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-16b6acec] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.6072d8bb8007fa69bcee.js.map