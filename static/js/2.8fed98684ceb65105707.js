webpackJsonp([2],{"2ckC":function(t,n,i){var e=i("8Sw7");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("8bSs")("2260464f",e,!0)},"8Sw7":function(t,n,i){(t.exports=i("BkJT")(!0)).push([t.i,"\n.music-list[data-v-4495e98a] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n}\n.music-list .back[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-4495e98a] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #31c27c;\n}\n.music-list .title[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.music-list .bg-image[data-v-4495e98a] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-4495e98a] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-4495e98a] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #31c27c;\n  color: #31c27c;\n  border-radius: 100px;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-4495e98a] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-4495e98a] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .layer[data-v-4495e98a] {\n  position: relative;\n  height: 100%;\n  background-color: #fff;\n}\n.music-list .list[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n}\n.music-list .list .song-list-wrapper[data-v-4495e98a] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-wrapper[data-v-4495e98a] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}","",{version:3,sources:["C:/Users/G/Desktop/the new/v-music/src/components/music-list/music-list.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,aAAa;EACb,OAAO;EACP,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,YAAY;CACb;AACD;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,8BAA8B;UACtB,sBAAsB;EAC9B,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;CACb;AACD;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,aAAa;EACb,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;EACf,qBAAqB;CACtB;AACD;EACE,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,8BAA8B;CAC/B;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-4495e98a] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n}\n.music-list .back[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-4495e98a] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #31c27c;\n}\n.music-list .title[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.music-list .bg-image[data-v-4495e98a] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-4495e98a] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-4495e98a] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #31c27c;\n  color: #31c27c;\n  border-radius: 100px;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-4495e98a] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-4495e98a] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .layer[data-v-4495e98a] {\n  position: relative;\n  height: 100%;\n  background-color: #fff;\n}\n.music-list .list[data-v-4495e98a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n}\n.music-list .list .song-list-wrapper[data-v-4495e98a] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-wrapper[data-v-4495e98a] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},BRgg:function(t,n,i){"use strict";n.b=function(){var t=s()({},o.b,{uin:0,needNewCode:1,platform:"h5"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,o.c)},n.a=function(t){var n=s()({},o.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,o.c)};var e=i("aA9S"),s=i.n(e),a=i("Gak4"),o=i("T452")},VWDs:function(t,n,i){var e=i("eXW/");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("8bSs")("a1fd23a6",e,!0)},Wdqz:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("4YfN"),s=i.n(e),a=i("HVJf"),o=i("BRgg"),l=i("T452"),r=i("PvFA"),A=i("kvay"),c={data:function(){return{songs:[],ranking:!0}},created:function(){this._getRankDetail()},computed:s()({title:function(){return this.rank.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(a.c)(["rank"])),methods:{_getRankDetail:function(){var t=this;this.rank.id||this.$router.push("/rank"),Object(o.a)(this.rank.id).then(function(n){n.code===l.a&&(t.songs=t._normalizeSongs(n.songlist))})},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var i=t.data;n.push(Object(r.a)(i))}),n}},components:{MusicList:A.a}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.ranking,title:this.title,image:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},d=i("/Xao")(c,p,!1,function(t){i("VWDs")},"data-v-1f851316",null);n.default=d.exports},"eXW/":function(t,n,i){(t.exports=i("BkJT")(!0)).push([t.i,"\n.slide-enter[data-v-1f851316],\n.slide-leave-to[data-v-1f851316] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.slide-enter-active[data-v-1f851316],\n.slide-leave-active[data-v-1f851316] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}","",{version:3,sources:["C:/Users/G/Desktop/the new/v-music/src/components/rank-detail/rank-detail.vue"],names:[],mappings:";AACA;;EAEE,2CAA2C;UACnC,mCAAmC;CAC5C;AACD;;EAEE,6BAA6B;EAC7B,qBAAqB;CACtB",file:"rank-detail.vue",sourcesContent:["\n.slide-enter[data-v-1f851316],\n.slide-leave-to[data-v-1f851316] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.slide-enter-active[data-v-1f851316],\n.slide-leave-active[data-v-1f851316] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}"],sourceRoot:""}])},kvay:function(t,n,i){"use strict";var e=i("4YfN"),s=i.n(e),a=i("qwAB"),o=i("ZV4u"),l=i("3Q4o"),r=i("y/jF"),A=i("HVJf"),c=i("F4+m"),p=Object(l.b)("transform"),d={mixins:[c.b],props:{songs:{type:Array,default:[]},title:{type:String,default:""},image:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{probeType:3,listenScroll:!0,scrollY:0}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minScroll=40-this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:s()({back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,n){this.selectPlay({list:this.songs,index:n})},ranPlay:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.musicList.style.bottom=n,this.$refs.list.refresh()}},Object(A.b)(["selectPlay","randomPlay"])),computed:{bgStyle:function(){return"background-image:url("+this.image+")"}},watch:{scrollY:function(t){var n=Math.max(this.minScroll,t),i=0,e=1,s=Math.abs(t/this.imageHeight);this.$refs.layer.style[p]="translate3d(0,"+n+"px,0)",t>0&&(e=1+s,i=10),this.$refs.bgImage.style[p]="scale("+e+")",t<this.minScroll?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.play.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.play.style.display=""),this.$refs.bgImage.style.zIndex=i}},components:{Scroll:a.a,SongList:o.a,Loading:r.a}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"musicList",staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:this.back}},[n("i",{staticClass:"icon-back iconfont"},[this._v("")])]),this._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:this._s(this.title)}}),this._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:this.bgStyle},[n("div",{staticClass:"filter"}),this._v(" "),n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.songs.length,expression:"songs.length"}],ref:"play",staticClass:"play",on:{click:this.ranPlay}},[n("i",{staticClass:"iconfont"},[this._v("")]),this._v(" "),n("span",[this._v("随机播放全部")])])])]),this._v(" "),n("div",{ref:"layer",staticClass:"layer"}),this._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{data:this.songs,probeType:this.probeType,listenScroll:this.listenScroll},on:{scroll:this.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:this.songs,rank:this.rank},on:{select:this.selectItem}})],1),this._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!this.songs.length,expression:"!songs.length"}],staticClass:"loading-wrapper"},[n("loading")],1)])],1)},staticRenderFns:[]},m=i("/Xao")(d,g,!1,function(t){i("2ckC")},"data-v-4495e98a",null);n.a=m.exports}});
//# sourceMappingURL=2.8fed98684ceb65105707.js.map