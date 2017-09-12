webpackJsonp([1],[,,,,,,,,,function(t,i,s){"use strict";function n(t,i){return new a.a(function(s,n){r.a.get(t,{params:i}).then(function(t){s(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}var e=s(181),a=s.n(e),o=s(73),r=s.n(o),c=s(183);s.n(c);r.a.defaults.timeout=5e3,r.a.defaults.baseURL="http://localhost:3000",i.a={PopularList:function(){return n("/playlist/detail",{id:3778678})},MusicUrl:function(t){return n("/music/url",{id:t})},MusicLyric:function(t){return n("/lyric",{id:t})},MusicSearch:function(t){return n("/search",{keywords:t})},MusicRank:function(t){return n("/top/list",{idx:t})}}},,,,,,,,,,,,,,,,,,function(t,i,s){function n(t){s(129)}var e=s(0)(s(194),s(115),n,"data-v-667bb8d4",null);t.exports=e.exports},,,,,,,,,,,,,,,,,,,,,function(t,i,s){function n(t){s(131)}var e=s(0)(s(195),s(117),n,"data-v-9eeda624",null);t.exports=e.exports},,,,,,,,,,,,,,,,,,,,function(t,i,s){"use strict";s.d(i,"k",function(){return n}),s.d(i,"l",function(){return e}),s.d(i,"d",function(){return a}),s.d(i,"e",function(){return o}),s.d(i,"f",function(){return r}),s.d(i,"h",function(){return c}),s.d(i,"g",function(){return l}),s.d(i,"i",function(){return u}),s.d(i,"j",function(){return d}),s.d(i,"a",function(){return f}),s.d(i,"c",function(){return v}),s.d(i,"b",function(){return h}),s.d(i,"m",function(){return m}),s.d(i,"n",function(){return p}),s.d(i,"o",function(){return _});var n="GET_MUSIC_LYRIC",e="GET_MUSIC_TIME",a="GET_POPULAR_LISTS",o="SET_AUDIO",r="SET_AUDIO_URL",c="SET_PREV_AUDIO",l="SET_NEXT_AUDIO",u="SET_PLAYING",d="DELETE_MUSIC",f="ADD_LISTEN_LISTS",v="ADD_ALL_TO_LISTEN_LISTS",h="REMOVE_LISTEN_LISTS",m="COM_SHOW_PERSONAL",p="COM_SHOW_PLAY",_="COM_SHOW_LISTEN_LIST"},function(t,i,s){function n(t){s(128)}var e=s(0)(s(186),s(114),n,null,null);t.exports=e.exports},function(t,i,s){"use strict";var n=s(15),e=s(175),a=s(95),o=s.n(a),r=s(103),c=s.n(r),l=s(48),u=s.n(l),d=s(104),f=s.n(d),v=s(99),h=s.n(v),m=s(102),p=s.n(m);n.a.use(e.a),i.a=new e.a({linkActiveClass:"active",routes:[{path:"/",component:h.a},{path:"/recommend",name:"recommend",component:c.a},{path:"/charts",name:"charts",component:o.a},{path:"/personal",name:"personal",component:u.a},{path:"/search",name:"search",component:f.a},{path:"/mine",name:"mine",component:h.a},{path:"/rank",name:"rank",component:p.a}]})},function(t,i,s){"use strict";var n=s(15),e=s(5),a=s(202),o=s(203);n.a.use(e.b),i.a=new e.b.Store({modules:{com:a.a,music:o.a}})},,,,,,,,,,,,,,,,,,,,function(t,i,s){t.exports=s.p+"static/img/timg.7f73e56.jpg"},,function(t,i,s){function n(t){s(132)}var e=s(0)(s(187),s(118),n,"data-v-c67a7814",null);t.exports=e.exports},function(t,i,s){function n(t){s(121)}var e=s(0)(s(188),s(107),n,"data-v-296cc6ae",null);t.exports=e.exports},function(t,i,s){function n(t){s(125)}var e=s(0)(s(189),s(111),n,"data-v-46be668e",null);t.exports=e.exports},function(t,i,s){function n(t){s(124)}var e=s(0)(s(190),s(110),n,"data-v-3a8aa640",null);t.exports=e.exports},function(t,i,s){function n(t){s(123)}var e=s(0)(s(191),s(109),n,"data-v-378410e4",null);t.exports=e.exports},function(t,i,s){function n(t){s(122)}var e=s(0)(s(192),s(108),n,"data-v-3176d06e",null);t.exports=e.exports},function(t,i,s){function n(t){s(126)}var e=s(0)(s(193),s(112),n,null,null);t.exports=e.exports},function(t,i,s){function n(t){s(130)}var e=s(0)(s(196),s(116),n,"data-v-74018bee",null);t.exports=e.exports},function(t,i,s){var n=s(0)(s(197),s(105),null,null,null);t.exports=n.exports},function(t,i,s){function n(t){s(127)}var e=s(0)(s(198),s(113),n,"data-v-61743224",null);t.exports=e.exports},function(t,i,s){function n(t){s(133)}var e=s(0)(s(199),s(119),n,"data-v-fd7457b0",null);t.exports=e.exports},function(t,i,s){function n(t){s(120)}var e=s(0)(s(200),s(106),n,"data-v-2904f9a4",null);t.exports=e.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("v-music-list",{attrs:{"music-lists":t.popularLists}})},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"search"},[s("div",{staticClass:"head"},[t.show?s("div",{staticClass:"h-icon",on:{click:function(i){t._show()}}},[s("i",{staticClass:"iconfont"},[t._v("")])]):s("div",{staticClass:"h-icon",on:{click:t.back}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"text",placeholder:"搜索音乐、歌手"},domProps:{value:t.keywords},on:{input:function(i){i.target.composing||(t.keywords=i.target.value)}}})]),t._v(" "),s("div",{staticClass:"h-icon",on:{click:function(i){t.search()}}},[s("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),s("div",{staticClass:"search-list"},[t.show?s("v-music-list",{attrs:{"music-lists":t.searchLists}}):s("div",{staticClass:"hot-key"},[s("div",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("div",{staticClass:"hot-list"},[s("ul",t._l(t.hotList,function(i){return s("li",{key:i.value,on:{click:function(s){t.search(i)}}},[t._v(t._s(i))])}))]),t._v(" "),s("div",{staticClass:"search-history"},[s("transition-group",{staticClass:"list-wrapper",attrs:{name:"slide",tag:"div"}},t._l(t.searchHistory,function(i,n){return s("div",{key:"a"+n,staticClass:"item"},[s("p",{on:{click:function(s){t.search(i)}}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",[t._v(t._s(i))])]),t._v(" "),s("div",{staticClass:"delete",on:{click:function(i){t._delete(n)}}},[s("i",{staticClass:"iconfont"},[t._v("")])])])}))],1)])],1)])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",{staticClass:"banner"},[t._l(t.image,function(i,n){return s("li",{class:[t.move[n]]},[s("v-touch",{staticClass:"vuetouch",on:{swipeleft:t.nextPic,swiperight:t.prePic}},["object"==typeof i?[s("img",{attrs:{src:i.src},on:{click:function(i){t.target(n)}}}),t._v(" "),s("span",{class:{tag:i.tagName},style:i.tagStyle},[t._v(t._s(i.tagName))])]:t._e(),t._v(" "),"string"==typeof i?[s("img",{attrs:{src:i},on:{click:function(i){t.target(n)}}})]:t._e()],2)],1)}),t._v(" "),s("li",{staticClass:"button"},t._l(t.image,function(i,n){return s("em",{class:[t.move[n]],on:{click:function(i){t.target(n)}}})}))],2)},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"listen-list"},[s("div",{staticClass:"list"},t._l(t.listenLists,function(i,n){return s("div",{key:i.value,staticClass:"item"},[s("div",{staticClass:"avatar",on:{click:function(s){t._play(i)}}},[s("img",{attrs:{src:i.al.picUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info",class:{current:t.currentIndex==n},on:{click:function(s){t._play(i)}}},[s("div",{staticClass:"music-name"},[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"singer"},[t._v(t._s(i.ar[0].name))])]),t._v(" "),s("div",{staticClass:"delete",on:{click:function(i){t._delete(n)}}},[s("i",{staticClass:"iconfont"},[t._v("")])])])}))])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"header"},[s("div",{staticClass:"side",on:{click:t.showPersonal}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/mine"}},[t._v("\n        我的\n      ")])],1),t._v(" "),s("div",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/recommend"}},[t._v("\n        推荐\n      ")])],1),t._v(" "),s("div",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/charts"}},[t._v("\n        排行榜\n      ")])],1)]),t._v(" "),s("div",{staticClass:"side"},[s("router-link",{attrs:{to:"/search"}},[s("i",{staticClass:"iconfont"},[t._v("")])])],1)])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"footer"},[s("div",{staticClass:"footer-play"},[s("div",{staticClass:"music-image",on:{click:t.showPlay}},[s("img",{attrs:{src:t.audio[0].al.picUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"music-info",on:{click:t.showPlay}},[s("div",{staticClass:"music-name"},[t._v(t._s(t.audio[0].name))]),t._v(" "),s("div",{staticClass:"author"},[t._v(t._s(t.audio[0].ar[0].name))])]),t._v(" "),s("div",{staticClass:"music-play"},[t.playing?s("i",{staticClass:"iconfont",on:{click:function(i){t.pause()}}},[t._v("")]):s("i",{staticClass:"iconfont",on:{click:function(i){t.play()}}},[t._v("")])]),t._v(" "),s("div",{staticClass:"music-list"},[s("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"play",style:{width:100*(t.now/t.duration).toFixed(3)+"%"}})]),t._v(" "),s("audio",{ref:"myAudio",attrs:{preload:"",src:t.audio[0].url},on:{ended:function(i){t.next()}}})])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"charts"},[s("div",{staticClass:"charts-list"},[s("router-link",{attrs:{to:{name:"rank",params:{idx:3}}}},[s("div",{staticClass:"item blue"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:"http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150",alt:""}})]),t._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("云音乐飙升榜")]),t._v(" "),s("div",{staticClass:"say"},[t._v("每天更新")])])])]),t._v(" "),s("router-link",{attrs:{to:{name:"rank",params:{idx:0}}}},[s("div",{staticClass:"item green"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:"http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150",alt:""}})]),t._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("云音乐新歌榜")]),t._v(" "),s("div",{staticClass:"say"},[t._v("每天更新")])])])]),t._v(" "),s("router-link",{attrs:{to:{name:"rank",params:{idx:2}}}},[s("div",{staticClass:"item red"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:"http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150",alt:""}})]),t._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("网易原创歌曲榜")]),t._v(" "),s("div",{staticClass:"say"},[t._v("每周四更新")])])])]),t._v(" "),s("router-link",{attrs:{to:{name:"rank",params:{idx:1}}}},[s("div",{staticClass:"item moccasin"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:"http://p3.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150",alt:""}})]),t._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("云音乐热歌榜")]),t._v(" "),s("div",{staticClass:"say"},[t._v("每周四更新")])])])])],1)])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("v-listen-list")},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"search"},[s("div",{staticClass:"head"},[s("div",{staticClass:"h-icon",on:{click:t.back}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rankLists.length>0,expression:"rankLists.length>0"}],staticClass:"h-icon right-c",on:{click:t.addAll}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("播放全部\n        ")])]),t._v(" "),s("div",{staticClass:"search-list"},[s("v-music-list",{attrs:{"music-lists":t.rankLists}}),t._v(" "),s("div",{staticClass:"more"})],1)])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("v-header"),t._v(" "),s("router-view"),t._v(" "),s("v-footer"),t._v(" "),s("v-personal"),t._v(" "),s("transition",{attrs:{name:"foldIn"}},[s("v-play",{directives:[{name:"show",rawName:"v-show",value:t.showPlay,expression:"showPlay"}]})],1)],1)},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"music-list"},t._l(t.musicLists,function(i,n){return s("div",{key:i.value,staticClass:"list-item"},[s("div",{staticClass:"avatar",on:{click:function(s){t._play(i)}}},[s("img",{attrs:{src:i.al.picUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info",on:{click:function(s){t._play(i)}}},[s("div",{staticClass:"music-name"},[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"singer"},[t._v(t._s(i.ar[0].name))])]),t._v(" "),s("div",{staticClass:"operation",on:{click:function(i){t.showOperation(n)}}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("animation-menu",{attrs:{item:i,index:n}})],1)}))},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"play"},[s("div",{staticClass:"head"},[s("div",{staticClass:"back",on:{click:t.hidePlay}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"music-info"},[s("div",{staticClass:"music-name"},[t._v(t._s(t.audio[0].name))]),t._v(" "),s("div",{staticClass:"author"},[t._v(t._s(t.audio[0].ar[0].name))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"lyrics"},[s("div",{staticClass:"lyric"},[s("div",{ref:"lyric",staticClass:"roll-lyric",domProps:{innerHTML:t._s(t.lyrics)}})])]),t._v(" "),s("div",{staticClass:"timing"},[s("div",{staticClass:"now"},[t._v(t._s(t.nowTime))]),t._v(" "),s("div",{staticClass:"total"},[t._v(t._s(t.totalTime))])]),t._v(" "),s("div",{staticClass:"control"},[s("div",[t._m(1),t._v(" "),s("div",{staticClass:"prev",on:{click:function(i){t.prev()}}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"playing"},[t.playing?s("i",{staticClass:"iconfont",on:{click:function(i){t.pause()}}},[t._v("")]):s("i",{staticClass:"iconfont",on:{click:function(i){t.play()}}},[t._v("")])]),t._v(" "),s("div",{staticClass:"next",on:{click:function(i){t.next()}}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),t._m(2)])]),t._v(" "),s("div",{staticClass:"background"},[s("img",{attrs:{src:t.audio[0].al.picUrl,width:"100%",height:"100%",alt:""}})])])},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"share"},[s("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"loop"},[s("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"music-list"},[s("i",{staticClass:"iconfont"},[t._v("")])])}]}},function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"fadeIn"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPersonal,expression:"showPersonal"}],staticClass:"personal"},[n("div",{staticClass:"sidebar-con"},[n("div",{staticClass:"head"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:s(91),alt:""}})]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n          飘飖流风\n        ")])]),t._v(" "),n("div",{staticClass:"menu"},[n("ul",[n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("我的消息")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("商城")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("我的好友")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("附近的人")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("听歌识曲")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("定时停止播放")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("设置")])])],1),t._v(" "),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:""}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("关于我")])])],1)])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPersonal,expression:"showPersonal"}],staticClass:"mask",on:{click:t.hidePersonal}})])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.item.menuShow,expression:"item.menuShow"}],staticClass:"menu"},[s("div",{staticClass:"inner inner-1",on:{"~click":function(i){t._add(t.index)}}},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"inner inner-2"},[s("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),s("div",{staticClass:"inner inner-3"},[s("i",{staticClass:"iconfont"},[t._v("")])])])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"recommend"},[s("v-banner",{attrs:{image:t.image}}),t._v(" "),s("v-popular")],1)},staticRenderFns:[]}},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(97),o=s.n(a),r=s(48),c=s.n(r),l=s(96),u=s.n(l),d=s(100),f=s.n(d),v=s(5),h=s(9);i.default={name:"app",components:{"v-header":o.a,"v-personal":c.a,"v-footer":u.a,"v-play":f.a},created:function(){var t=this;this.audioUrl||h.a.MusicUrl(this.audio[0].id).then(function(i){t.$store.dispatch("setAudioUrl",i.data[0].url)}),this.$store.dispatch("getMusicInfo",this.audio[0].id)},data:function(){return{}},computed:e()({},s.i(v.a)(["showPersonal","showPlay","audio","audioUrl","showPlayLoading"]))}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(15),o=s(5);i.default={props:{item:Object,index:Number},data:function(){return{}},computed:e()({},s.i(o.a)(["listenLists"])),methods:{_add:function(t){var i=this;-1!==this.listenLists.findIndex(function(t){return i.item.ar?t.name==i.item.name&&t.ar[0].name==i.item.ar[0].name:t.ar?t.name==i.item.name&&t.ar[0].name==i.item.artists[0].name:t.name==i.item.name&&t.artists[0].name==i.item.artists[0].name})?(_.toast("试听列表中已存在"),a.a.set(this.item,"menuShow",!1)):(_.toast("已添加到试听列表"),this.$store.dispatch("addListenLists",this.item),a.a.set(this.item,"menuShow",!1))}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"banner",props:{image:{require:!0,type:Array,validator:function(t){return t.length>=3}},interval:{default:5e3},autoRoll:{default:!0},direction:{default:"left"}},created:function(){for(var t=3;t<this.image.length;t++)this.move[t]="wait";this.autoRoll&&("left"===this.direction?setInterval(this.nextPic,this.interval):setInterval(this.prePic,this.interval))},data:function(){return{move:["left","center","right"]}},methods:{nextPic:function(t){var i=this.move.pop();this.move.unshift(i)},prePic:function(t){var i=this.move.shift();this.move.push(i)},target:function(t){for(var i=this.image.length,s=0;s<i;s++)this.move[s]="wait";this.move[t]="center",this.move[t+1<i?t+1:0]="right",this.move[t-1==-1?i-1:t-1]="left",this.move=this.move.concat()}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(5),o=s(9);i.default={data:function(){return{now:"",duration:"200.045714"}},computed:e()({},s.i(a.a)(["audio","audioUrl","playing","size"])),mounted:function(){var t=this,i=void 0;this.$refs.myAudio.addEventListener("play",function(){i=setInterval(function(){t.duration=t.$refs.myAudio.duration,t.now=t.$refs.myAudio.currentTime},1e3)}),this.$refs.myAudio.addEventListener("pause",function(){clearInterval(i)})},methods:{play:function(){this.$store.dispatch("setPlaying",!0)},pause:function(){this.$store.dispatch("setPlaying",!1)},showPlay:function(){this.$store.dispatch("setShowPlay",!0)},next:function(){var t=this;this.$store.dispatch("setPlaying",!1);for(var i=0;i<this.listenLists.length;i++)if(this.listenLists[i].name===this.audio[0].name){this.$store.dispatch("setNextAudio",i);break}this.audio[0].mp3Url?this.$store.dispatch("setAudioUrl",this.audio[0].mp3Url):o.a.MusicUrl(this.audio[0].id).then(function(i){t.$store.dispatch("setAudioUrl",i.data[0].url)})}},watch:{playing:function(){this.playing?this.$refs.myAudio.play():this.$refs.myAudio.pause()},audio:function(){this.$store.dispatch("getMusicInfo",this.audio[0].id),this.now=0}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{showPersonal:function(){this.$store.dispatch("setShowPersonal",!0)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(5),o=s(9);i.default={data:function(){return{}},methods:{_play:function(t){var i=this;this.$store.dispatch("setPlaying",!0),this.$store.dispatch("setAudio",t),o.a.MusicUrl(t.id).then(function(t){i.$store.dispatch("setAudioUrl",t.data[0].url)}),document.querySelector("audio").addEventListener("loadedmetadata",function(){i.$store.dispatch("getMusicInfo",t.id)})},_delete:function(t){this.currentIndex!==t&&this.$store.dispatch("deleteMusic",t)}},computed:e()({},s.i(a.a)(["listenLists","audio","showListenList"]),{currentIndex:function(){for(var t=0;t<this.listenLists.length;t++)if(this.listenLists[t].name===this.audio[0].name)return t}})}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(98),e=s.n(n);i.default={components:{"v-listen-list":e.a},data:function(){return{}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(63),e=s.n(n),a=s(7),o=s.n(a),r=s(93),c=s.n(r),l=s(15),u=s(5),d=s(9);i.default={components:{animationMenu:c.a},props:{musicLists:Array},data:function(){return{}},computed:o()({},s.i(u.a)(["listenLists"])),methods:{_play:function(t){var i=this;this.$store.dispatch("setPlaying",!1),this.$store.dispatch("setAudio",t),-1===this.listenLists.findIndex(function(i){return i.ar&&t.ar?i.name==t.name&&i.ar[0].name==t.ar[0].name:i.artists&&t.artists?i.name==t.name&&i.artists[0].name==t.artists[0].name:void 0})&&this.$store.dispatch("addListenLists",t),t.mp3Url?this.$store.dispatch("setAudioUrl",t.mp3Url):d.a.MusicUrl(t.id).then(function(t){i.$store.dispatch("setAudioUrl",t.data[0].url)})},showOperation:function(t){for(var i=0;i<this.musicLists.length;i++)i!==t&&(this.musicLists[i].menuShow=!1);this.musicLists[t].menuShow=!this.musicLists[t].menuShow}},watch:{musicLists:function(){var t=!0,i=!1,s=void 0;try{for(var n,a=e()(this.musicLists);!(t=(n=a.next()).done);t=!0){var o=n.value;l.a.set(o,"menuShow",!1)}}catch(t){i=!0,s=t}finally{try{!t&&a.return&&a.return()}finally{if(i)throw s}}}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(5);i.default={data:function(){return{}},methods:{hidePersonal:function(){this.$store.dispatch("setShowPersonal",!1)}},computed:e()({},s.i(a.a)(["showPersonal"]))}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(42),e=s.n(n),a=s(63),o=s.n(a),r=s(7),c=s.n(r),l=(s(15),s(5)),u=s(9);i.default={data:function(){return{now:"",lyricArr:[],pDom:[],deg:"",translateX:""}},computed:c()({},s.i(l.a)(["audio","playing","lyric","size","listenLists"]),{lyrics:function(){var t="";if(this.lyricArr=[],this.lyric){var i=this.lyric.split("\n"),s=!0,n=!1,e=void 0;try{for(var a,r=o()(i);!(s=(a=r.next()).done);s=!0){var c=a.value;if(c){var l=c.split("]");this.lyricArr.push(60*l[0].substring(1,3)+1*l[0].substring(4)),l&&(t+="<p class='lyrichook' style='margin: 10px 0'>"+l[1]+"</p>")}}}catch(t){n=!0,e=t}finally{try{!s&&r.return&&r.return()}finally{if(n)throw e}}}else t="暂无歌词~";return t},totalTime:function(){var t=void 0,i=void 0;return t=Math.floor(this.size/60),t=1==t.toString().length?"0"+t:t,i=Math.floor(this.size-60*t),i=1==i.toString().length?"0"+i:i,t+":"+i},nowTime:function(){var t=void 0,i=void 0;return t=Math.floor(this.now/60),t=1==t.toString().length?"0"+t:t,i=Math.floor(this.now-60*t),i=1==i.toString().length?"0"+i:i,t+":"+i}}),created:function(){this.resize()},mounted:function(){var t=this,i=void 0,s=document.querySelector("audio");s.addEventListener("play",function(){t.pDOM=[].concat(e()(document.querySelectorAll(".lyrichook"))),i=setInterval(function(){t.now=s.currentTime,t.lyricArr.forEach(function(i,s){parseInt(i)==parseInt(t.now)&&(t.pDOM.forEach(function(t){t.style.color="rgba(255,255,255,.8)"}),t.pDOM[s].style.color="#f12c61",t.$refs.lyric.style.transform="translateY(-"+25*(s-7)+"px)")})},1e3)}),s.addEventListener("pause",function(){clearInterval(i)}),window.addEventListener("resize",function(){t.resize()})},methods:{play:function(){this.$store.dispatch("setPlaying",!0)},pause:function(){this.$store.dispatch("setPlaying",!1)},prev:function(){var t=this;this.$store.dispatch("setPlaying",!0);for(var i=0;i<this.listenLists.length;i++)if(this.listenLists[i].name===this.audio[0].name){this.$store.dispatch("setPrevAudio",i);break}this.audio[0].url?this.$store.dispatch("setAudioUrl",this.audio[0].url):u.a.MusicUrl(this.audio[0].id).then(function(i){t.$store.dispatch("setAudioUrl",i.data[0].url)})},next:function(){var t=this;this.$store.dispatch("setPlaying",!0);for(var i=0;i<this.listenLists.length;i++)if(this.listenLists[i].name===this.audio[0].name){this.$store.dispatch("setNextAudio",i);break}this.audio[0].url?this.$store.dispatch("setAudioUrl",this.audio[0].url):u.a.MusicUrl(this.audio[0].id).then(function(i){t.$store.dispatch("setAudioUrl",i.data[0].url)})},hidePlay:function(){this.$store.dispatch("setShowPlay",!1)},resize:function(){460===document.body.clientWidth?(this.translateX="-3.73333rem",this.deg="-523"):(this.translateX="-2.98667rem",this.deg="-527")}},watch:{size:function(){this.$refs.lyric.style.transform="translateY(0px)"},lyrics:function(){var t=this;this.$nextTick(function(){t.pDOM=[].concat(e()(document.querySelectorAll(".lyrichook")))})}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(27),o=s.n(a),r=s(5);i.default={components:{"v-music-list":o.a},data:function(){return{}},computed:e()({},s.i(r.a)(["popularLists"])),created:function(){0==this.popularLists.length&&this.$store.dispatch("getPopularLists")}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(7),e=s.n(n),a=s(27),o=s.n(a),r=s(5),c=s(9);i.default={components:{"v-music-list":o.a},data:function(){return{idx:0,rankLists:[]}},beforeRouteEnter:function(t,i,s){s(function(i){i.idx=t.params.idx})},mounted:function(){var t=this;c.a.MusicRank(this.idx).then(function(i){t.rankLists=i.result.tracks})},computed:e()({},s.i(r.a)(["audio"]),{title:function(){switch(this.idx){case 0:return"云音乐新歌榜";case 1:return"云音乐热歌榜";case 2:return"网易原创歌曲榜";case 3:return"云音乐飙升榜"}}}),methods:{back:function(){window.history.back()},addAll:function(){this.$store.dispatch("addAllToListenLists",this.rankLists)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(94),e=s.n(n),a=s(101),o=s.n(a);i.default={components:{"v-banner":e.a,"v-popular":o.a},data:function(){return{image:["http://p1.music.126.net/mbRxUqCs_6EeFeKkyw0Z8A==/19151293532940624.jpg","http://p1.music.126.net/U0sEPM5E1D0Q0ZQxrhh65g==/18532268488212334.jpg","http://p1.music.126.net/wVVVi0-fXuSkwh-W0ypUNA==/19116109160858845.jpg","http://p1.music.126.net/QQfToiIhH10VDisFIrH-vA==/19065531625970905.jpg","http://p1.music.126.net/FIF6LFp39gap8-QFGQkShg==/18800549325378652.jpg"],fixed:!1}},mounted:function(){var t=this,i=document.querySelector("audio");i.addEventListener("loadedmetadata",function(){t.$store.dispatch("setPlaying",!0),t.$store.dispatch("getMusicTime",i.duration)})}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(42),e=s.n(n),a=s(182),o=s.n(a),r=s(64),c=s.n(r),l=s(27),u=s.n(l),d=(s(5),s(9));i.default={components:{"v-music-list":u.a},data:function(){return{show:!1,keywords:"",searchLists:[],hotLists:["爱在记忆中找你","吴哥窟","可乐","想对你说","故乡的原风景","成全","给你们","Fade","I Am You","倾城","林峯","毛不易","王嘉尔","林俊杰","周杰伦"],searchHistory:localStorage.searchHistory?JSON.parse(localStorage.searchHistory):["梁朝伟","女儿情","阿楚姑娘"]}},created:function(){if(!localStorage.searchHistory){var t=["梁朝伟","女儿情","阿楚姑娘"];localStorage.searchHistory=c()(t)}},computed:{hotList:function(){for(var t=new o.a,i=0;i<6;i++){var s=Math.floor(Math.random()*this.hotLists.length);t.add(this.hotLists[s])}return[].concat(e()(t))},searchHistorys:function(){return localStorage.searchHistory?JSON.parse(localStorage.searchHistory):["梁朝伟","女儿情","阿楚姑娘"]}},methods:{back:function(){window.history.back()},_show:function(){this.show=!1},search:function(t){var i=this;this.show=!0,this.keywords&&(localStorage.searchHistory=c()([this.keywords].concat(e()(JSON.parse(localStorage.searchHistory)))));var s=JSON.parse(localStorage.searchHistory);-1===s.findIndex(function(i){return i===t})&&(localStorage.searchHistory=c()([t].concat(e()(s)))),this.searchLists=[];var n=t||this.keywords;d.a.MusicSearch(n).then(function(t){console.log(t),i.searchLists=t.result.songs})},_delete:function(t){var i=JSON.parse(localStorage.searchHistory);i.forEach(function(s,n){t===n&&i.splice(t,1)}),localStorage.searchHistory=c()(i),this.searchHistory.splice(t,1)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(15),e=s(69),a=s.n(e),o=s(70),r=s(71);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:a.a}})},function(t,i,s){"use strict";var n,e=s(65),a=s.n(e),o=s(68),r={showListenList:!1,showPersonal:!1,showPlay:!1},c={setShowPersonal:function(t,i){(0,t.commit)(o.m,i)},setShowPlay:function(t,i){(0,t.commit)(o.n,i)},setShowListenList:function(t,i){(0,t.commit)(o.o,i)}},l={showPersonal:function(t){return t.showPersonal},showPlay:function(t){return t.showPlay},showListenList:function(t){return t.showListenList}},u=(n={},a()(n,o.m,function(t,i){t.showPersonal=i}),a()(n,o.n,function(t,i){t.showPlay=i}),a()(n,o.o,function(t,i){t.showListenList=i}),n);i.a={state:r,actions:c,getters:l,mutations:u}},function(t,i,s){"use strict";var n,e=s(65),a=s.n(e),o=s(42),r=s.n(o),c=s(64),l=s.n(c),u=s(9),d=s(68),f={popularLists:[],classicalLists:[],lightLists:[],radioLists:[],listenLists:localStorage.musiclists?JSON.parse(localStorage.musiclists):[{name:"可乐",id:29759733,url:"http://m10.music.126.net/20170911103412/489017ed2da9661543066ef9e933fdbd/ymusic/a530/f2cc/c82e/b8b5b240d9fce9ac549b3649464926a9.mp3",ar:[{id:1038040,name:"赵紫骅"}],al:{id:3056891,name:"赵浴辰原创demo精选",picUrl:"http://p1.music.126.net/qOfVT6izV4mBe4IyQn489Q==/18190320370401891.jpg"}},{name:"爱的故事(上)",id:147030,url:"http://m10.music.126.net/20170908173621/548ef8ea443b86f588ae7dc3a57f980e/ymusic/9b2e/6082/d139/3e5b1e9d57c61a5ed494dce0ad069cd4.mp3",ar:[{id:4947,name:"孙耀威"}],al:{id:14707,name:"爱的故事(上集)",picUrl:"http://p1.music.126.net/xKKcN1WJZwqKk1VBZhtMvA==/67070209310501.jpg"}},{name:"阿楚姑娘",id:407759451,url:"http://m10.music.126.net/20170908173655/e6a1158bdf6a8e8ff93a3b13d0cefd7c/ymusic/02ed/0616/a292/dfeece1ca78cc375e37fe9c1fc95c36a.mp3",ar:[{id:4213,name:"梁凡"}],al:{id:34594188,name:"阿楚姑娘",picUrl:"http://p1.music.126.net/XxKhyage6x5cOvYAT30nKQ==/17680146974797288.jpg"}},{name:"想对你说",id:26075534,url:"http://m10.music.126.net/20170908173736/eb5061a302eea0db47fd1958a1a6cb65/ymusic/3cae/2d94/5d00/1595b4e7846a1631374ff848dba82bc3.mp3",ar:[{id:6066,name:"杨宗纬"}],al:{id:2321001,name:"初·爱",picUrl:"http://p1.music.126.net/LvDBXsBEuGK-ZNVs3XmRVg==/7926379325753599.jpg"}},{name:"再见二丁目",id:316938,url:"http://m10.music.126.net/20170908173753/43236451d00e69db89e9018b275dbab7/ymusic/1dff/aea7/bfef/83cd887ff1f38b99c2a2253b139e8d8c.mp3",ar:[{id:10204,name:"杨千嬅"}],al:{id:31386,name:"Miriam's Melodies",picUrl:"http://p1.music.126.net/afjQwekhKMBiLOOQz56TLA==/7836219371362214.jpg"}}],audio:localStorage.musiclists?JSON.parse(localStorage.musiclists).slice(0,1):[{name:"再见二丁目",id:316938,url:"http://m10.music.126.net/20170908173753/43236451d00e69db89e9018b275dbab7/ymusic/1dff/aea7/bfef/83cd887ff1f38b99c2a2253b139e8d8c.mp3",ar:[{id:10204,name:"杨千嬅"}],al:{id:31386,name:"Miriam's Melodies",picUrl:"http://p1.music.126.net/afjQwekhKMBiLOOQz56TLA==/7836219371362214.jpg"}}],audioUrl:"",lyric:"",size:"",playing:!1},v={addListenLists:function(t,i){(0,t.commit)(d.a,i)},removeListenLists:function(t){(0,t.commit)(d.b)},addAllToListenLists:function(t,i){(0,t.commit)(d.c,i)},getPopularLists:function(t){var i=t.commit;if("[]"!==localStorage.popularmusics&&localStorage.popularmusics)return void setTimeout(function(){i(d.d,JSON.parse(localStorage.popularmusics))},500);u.a.PopularList().then(function(t){i(d.d,t.playlist.tracks),localStorage.popularmusics=l()(t.playlist.tracks.slice(0,30))})},setAudio:function(t,i){(0,t.commit)(d.e,i)},setAudioUrl:function(t,i){(0,t.commit)(d.f,i)},setNextAudio:function(t,i){(0,t.commit)(d.g,i)},setPreAudio:function(t,i){(0,t.commit)(d.h,i)},setPlaying:function(t,i){(0,t.commit)(d.i,i)},deleteMusic:function(t,i){(0,t.commit)(d.j,i)},getMusicInfo:function(t,i){var s=t.commit;u.a.MusicLyric({id:i}).then(function(t){t.lrc?s(d.k,t.lrc.lyric):s(d.k,"")})},getMusicTime:function(t,i){(0,t.commit)(d.l,i)}},h={listenLists:function(t){return t.listenLists},audio:function(t){return t.audio},audioUrl:function(t){return t.audioUrl},playing:function(t){return t.playing},lyric:function(t){return t.lyric},size:function(t){return t.size}},m=(n={},a()(n,d.a,function(t,i){t.listenLists.push(i),localStorage.musiclists=l()(t.listenLists)}),a()(n,d.b,function(t){t.listenLists=[],localStorage.musiclists=[]}),a()(n,d.c,function(t,i){t.listenLists=[].concat(r()(t.listenLists),r()(i)),localStorage.musiclists=l()(t.listenLists)}),a()(n,d.e,function(t,i){t.audio=[i]}),a()(n,d.f,function(t,i){t.audioUrl=i}),a()(n,d.g,function(t,i){var s=i===t.listenLists.length-1?0:++i;t.audio=[t.listenLists[s]]}),a()(n,d.h,function(t,i){var s=0===i?t.listenLists.length-1:--i;t.audio=[t.listenLists[s]]}),a()(n,d.i,function(t,i){t.playing=i}),a()(n,d.j,function(t,i){t.listenLists.splice(i,1)}),a()(n,d.k,function(t,i){t.lyric=i}),a()(n,d.l,function(t,i){t.size=i}),n);i.a={state:f,actions:v,getters:h,mutations:m}}],[201]);
//# sourceMappingURL=app.997f819288aa645a7fc0.js.map