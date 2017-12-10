webpackJsonp([1],{"0IpB":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),r=e("Sgn/"),o=(e("m40h"),e("0aAL")),a=e("qwAB"),c=e("y/jF"),l={props:{data:{type:Array,default:[]}},data:function(){return{currentGroup:0,touch:{},probeType:3,listenScroll:!0,scrollY:0,listHeight:[]}},activated:function(){var t=this;setTimeout(function(){t.$refs.singerList&&t.$refs.singerList.refresh()},20)},methods:{onTouchstart:function(t){var n=t.target.getAttribute("index"),e=t.touches[0];this.touch.y1=e.pageY,this.touch.anchorIndex=n,this.scrollTo(n)},onTouchmove:function(t){var n=t.touches[0];this.touch.y2=n.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,i=parseInt(this.touch.anchorIndex)+e;this.scrollTo(i)},scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.$refs.singerList.scrollToElement(this.$refs.singerGroup[t],0),this.scrollY=this.$refs.singerList.scroll.y)},calculateHeight:function(){this.listHeight=[];var t=this.$refs.singerGroup,n=0;this.listHeight.push(n);for(var e=0;e<t.length;e++){n+=t[e].clientHeight,this.listHeight.push(n)}},scroll:function(t){this.scrollY=t.y},selectSinger:function(t){this.$emit("select",t)},refresh:function(){this.$refs.singerList.refresh()}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})}},watch:{data:function(){var t=this;setTimeout(function(){t.calculateHeight()},20)},scrollY:function(t){var n=this.listHeight;if(t>0)this.currentGroup=0;else{for(var e=0;e<n.length-1;e++){var i=n[e],s=n[e+1];if(-t>=i&&-t<s)return void(this.currentGroup=e)}this.currentGroup=n.length-2}}},components:{Scroll:a.a,Loading:c.a}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("scroll",{ref:"singerList",staticClass:"singer-list",attrs:{tag:"div",data:t.data,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(n){return e("li",{ref:"singerGroup",refInFor:!0,staticClass:"singer-group"},[e("uL",t._l(n.items,function(n){return e("li",{staticClass:"singer-group-item",on:{click:function(e){t.selectSinger(n)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.src,expression:"item.src"}],staticClass:"icon"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(n.name))])])}))],1)})),t._v(" "),e("div",{staticClass:"shortcut",on:{touchstart:function(n){n.stopPropagation(),n.preventDefault(),t.onTouchstart(n)},touchmove:function(n){n.stopPropagation(),n.preventDefault(),t.onTouchmove(n)}}},[e("ul",t._l(t.shortcutList,function(n,i){return e("li",{staticClass:"shortcut-item",class:{current:t.currentGroup===i},attrs:{index:i}},[t._v("\n        "+t._s(n)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-wrapper"},[e("loading")],1)])},staticRenderFns:[]},g=e("/Xao")(l,u,!1,function(t){e("sGPq")},"data-v-c0091608",null).exports,A=e("HVJf"),h={mixins:[e("F4+m").b],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:s()({_getSingerList:function(){var t=this;Object(r.b)().then(function(n){t.singers=t._normalizeSingerList(n.data.list)})},_normalizeSingerList:function(t){var n={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&n.hot.items.push(new o.a({name:t.Fsinger_name,id:t.Fsinger_mid})),n[t.Findex]||(n[t.Findex]={title:t.Findex,items:[]}),n[t.Findex].items.push(new o.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var e=[],i=[];for(var s in n){var r=n[s];r.title.match(/[a-zA-Z]/)?i.push(r):"热门"===r.title&&e.push(r)}return i.sort(function(t,n){return t.title.charCodeAt(0)-n.title.charCodeAt(0)}),e.concat(i)},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.singer.style.bottom=n,this.$refs.singerList.refresh()}},Object(A.d)({setSinger:"SET_SINGER"})),components:{SingerList:g}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"singer",staticClass:"singer"},[n("singer-list",{ref:"singerList",attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]},d=e("/Xao")(h,p,!1,function(t){e("qIf3")},"data-v-f9c6cdfa",null);n.default=d.exports},A1D2:function(t,n,e){(t.exports=e("BkJT")(!0)).push([t.i,"\n.singer-list[data-v-c0091608] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fafafb;\n}\n.singer-list .singer-group .singer-group-item[data-v-c0091608] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0 10px 10px;\n  margin: 1px 20px 1px 0;\n  background-color: #fff;\n}\n.singer-list .singer-group .singer-group-item .icon[data-v-c0091608] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.singer-list .singer-group .singer-group-item .name[data-v-c0091608] {\n  margin-left: 20px;\n  color: #000;\n  font-size: 14px;\n}\n.singer-list .shortcut[data-v-c0091608] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 10px 0;\n  border-radius: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid rgba(0,0,0,0.5);\n  font-family: Helvetica;\n}\n.singer-list .shortcut .shortcut-item[data-v-c0091608] {\n  text-align: center;\n  padding: 3px;\n  line-height: 1;\n  color: rgba(0,0,0,0.5);\n  font-size: 12px;\n}\n.singer-list .shortcut .shortcut-item.current[data-v-c0091608] {\n  color: #31c27c;\n}\n.singer-list .loading-wrapper[data-v-c0091608] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}","",{version:3,sources:["C:/Users/G/Desktop/the new/v-music/src/base/singer-list/singer-list.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;EAC1B,uBAAuB;EACvB,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;EACpC,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,+BAA+B;UACvB,uBAAuB;EAC/B,kCAAkC;EAClC,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC",file:"singer-list.vue",sourcesContent:["\n.singer-list[data-v-c0091608] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fafafb;\n}\n.singer-list .singer-group .singer-group-item[data-v-c0091608] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0 10px 10px;\n  margin: 1px 20px 1px 0;\n  background-color: #fff;\n}\n.singer-list .singer-group .singer-group-item .icon[data-v-c0091608] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.singer-list .singer-group .singer-group-item .name[data-v-c0091608] {\n  margin-left: 20px;\n  color: #000;\n  font-size: 14px;\n}\n.singer-list .shortcut[data-v-c0091608] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 10px 0;\n  border-radius: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid rgba(0,0,0,0.5);\n  font-family: Helvetica;\n}\n.singer-list .shortcut .shortcut-item[data-v-c0091608] {\n  text-align: center;\n  padding: 3px;\n  line-height: 1;\n  color: rgba(0,0,0,0.5);\n  font-size: 12px;\n}\n.singer-list .shortcut .shortcut-item.current[data-v-c0091608] {\n  color: #31c27c;\n}\n.singer-list .loading-wrapper[data-v-c0091608] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},o.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,o.c)},n.a=function(t){var n=s()({},o.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,o.c)};var i=e("aA9S"),s=e.n(i),r=e("Gak4"),o=e("T452")},"i6q+":function(t,n,e){(t.exports=e("BkJT")(!0)).push([t.i,"\n.singer[data-v-f9c6cdfa] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}","",{version:3,sources:["C:/Users/G/Desktop/the new/v-music/src/components/singer/singer.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,YAAY;CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-f9c6cdfa] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},m40h:function(t,n,e){"use strict";n.a=function(){var t=r()({},o.b,{platform:"h5",uin:0,needNewCode:1});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,o.c)};var i=e("rVsN"),s=(e.n(i),e("aA9S")),r=e.n(s),o=e("T452"),a=e("Gak4"),c=e("BMa3");e.n(c)},qIf3:function(t,n,e){var i=e("i6q+");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("0f2615c2",i,!0)},sGPq:function(t,n,e){var i=e("A1D2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("d52bd074",i,!0)}});
//# sourceMappingURL=1.cca4232bd2951693c019.js.map