(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2da0cf8"],{1276:function(t,i,e){"use strict";var a=e("d784"),n=e("44e7"),s=e("825a"),o=e("1d80"),r=e("4840"),c=e("8aa5"),l=e("50c4"),u=e("14c3"),d=e("9263"),p=e("d039"),h=[].push,g=Math.min,f=4294967295,v=!p((function(){return!RegExp(f,"y")}));a("split",2,(function(t,i,e){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var a=String(o(this)),s=void 0===e?f:e>>>0;if(0===s)return[];if(void 0===t)return[a];if(!n(t))return i.call(a,t,s);var r,c,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,p+"g");while(r=d.call(v,a)){if(c=v.lastIndex,c>g&&(u.push(a.slice(g,r.index)),r.length>1&&r.index<a.length&&h.apply(u,r.slice(1)),l=r[0].length,g=c,u.length>=s))break;v.lastIndex===r.index&&v.lastIndex++}return g===a.length?!l&&v.test("")||u.push(""):u.push(a.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,e){var n=o(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,n,e):a.call(String(n),i,e)},function(t,n){var o=e(a,t,this,n,a!==i);if(o.done)return o.value;var d=s(t),p=String(this),h=r(d,RegExp),m=d.unicode,k=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new h(v?d:"^(?:"+d.source+")",k),x=void 0===n?f:n>>>0;if(0===x)return[];if(0===p.length)return null===u(b,p)?[p]:[];var C=0,_=0,$=[];while(_<p.length){b.lastIndex=v?_:0;var y,S=u(b,v?p:p.slice(_));if(null===S||(y=g(l(b.lastIndex+(v?0:_)),p.length))===C)_=c(p,_,m);else{if($.push(p.slice(C,_)),$.length===x)return $;for(var L=1;L<=S.length-1;L++)if($.push(S[L]),$.length===x)return $;_=C=y}}return $.push(p.slice(C)),$}]}),!v)},a15b:function(t,i,e){"use strict";var a=e("23e7"),n=e("44ad"),s=e("fc6a"),o=e("a640"),r=[].join,c=n!=Object,l=o("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a640:function(t,i,e){"use strict";var a=e("d039");t.exports=function(t,i){var e=[][t];return!!e&&a((function(){e.call(null,i||function(){throw 1},1)}))}},c84b:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail"},[e("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.back}}),e("div",[e("div",[e("img",{staticClass:"auto-img",attrs:{src:t.productDetail.large_img,alt:""}})]),e("div",{staticClass:"pro-info-box"},[e("div",{staticClass:"pro-info"},[e("div",{staticClass:"clearfix pro-box"},[e("div",{staticClass:"fl"},[e("div",{staticClass:"pro-name"},[t._v(t._s(t.productDetail.name))]),e("div",{staticClass:"pro-enname"},[t._v(t._s(t.productDetail.enname))])]),e("div",{staticClass:"fr pro-price"},[t._v("￥"+t._s(t.productDetail.price))])]),e("div",[e("div",{staticClass:"rule-box"},t._l(t.productDetail.rules,(function(i,a){return e("div",{key:a,staticClass:"rule-items clearfix"},[e("div",{staticClass:"fl rule-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"fl"},t._l(i.rule,(function(a,n){return e("div",{key:n,staticClass:"fl r-item",class:{active:i.ruleIndex==n,"large-text":a.title.length>=4},on:{click:function(e){return t.toggleRule(i,n)}}},[t._v(t._s(a.title))])})),0)])})),0),e("div",{staticClass:"clearfix c-box"},[e("div",{staticClass:"fl select-count"},[t._v("选择数量")]),e("div",{staticClass:"fr count-box"},[e("van-stepper",{attrs:{theme:"round","button-size":"22","disable-input":""},model:{value:t.product.count,callback:function(i){t.$set(t.product,"count",i)},expression:"product.count"}})],1)]),e("div",{staticClass:"desc-box"},[e("div",{staticClass:"pro-desc"},[t._v("商品描述")]),e("div",{staticClass:"desc-text"},t._l(t.productDetail.desc,(function(i,a){return e("div",{key:a,staticClass:"text-item"},[t._v(t._s(a+1)+"、"+t._s(i))])})),0)])])])])]),e("van-goods-action",[e("van-goods-action-icon",{attrs:{to:{name:"Shopbag"},icon:"bag",text:"购物袋",badge:0==t.bagCount?"":t.bagCount,color:t.bagCount>0?"#0C34BA":"#646566"}}),e("van-goods-action-icon",{attrs:{icon:"like",text:t.isLike?"已收藏":"未收藏",color:t.isLike?"#0C34BA":"#646566"},on:{click:t.toggleLikeProduct}}),e("van-goods-action-button",{attrs:{text:"加入购物袋",color:"#6A91EC"},on:{click:function(i){return t.addShopbag()}}}),e("van-goods-action-button",{attrs:{text:"立即购买",color:"#0C34BA"},on:{click:function(i){return t.buy(!0)}}})],1)],1)},n=[],s=(e("a15b"),e("d81d"),e("ac1f"),e("1276"),e("eadb"),{name:"Detail",data:function(){return{pid:"",product:{count:1},bagCount:0,productDetail:{},isLike:!1}},created:function(){this.pid=this.$route.params.pid,this.getProductDetail(),this.findLike(),this.shopBagCount()},methods:{getProductDetail:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/productDetail",params:{appkey:this.appkey,pid:this.pid}}).then((function(i){if(t.$toast.clear(),600==i.data.code){var e=i.data.result[0];e.desc=e.desc.split(/\n/);var a=[],n=["tem","sugar","milk","cream"];n.map((function(t){var i={};i.title=e[t+"_desc"],i.ruleIndex=0,i.rule=[];var n=e[t].split("/");n.map((function(t){""!=t&&i.rule.push({title:t})})),i.rule.length>0&&a.push(i)})),e.rules=a,t.productDetail=e}})).catch((function(i){t.$toast.clear()}))},back:function(){this.$router.go(-1)},toggleRule:function(t,i){t.ruleIndex!=i&&(t.ruleIndex=i)},findLike:function(){var t=this,i=localStorage.getItem("__tk");i&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findlike",params:{appkey:this.appkey,pid:this.pid,tokenString:i}}).then((function(i){t.$toast.clear(),1e3==i.data.code&&i.data.result.length>0&&(t.isLike=!0)})).catch((function(i){t.$toast.clear()})))},toggleLikeProduct:function(){var t=this,i=localStorage.getItem("__tk");if(!i)return this.$toast("请先登录"),this.$router.push({name:"Login"});var e=this.isLike?"/notlike":"/like";this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:e,data:{appkey:this.appkey,pid:this.pid,tokenString:i}}).then((function(i){t.$toast.clear(),700==i.data.code?t.$router.push({name:"Login"}):800==i.data.code?t.isLike=!0:900==i.data.code&&(t.isLike=!1),t.$toast(i.data.msg)})).catch((function(i){t.$toast.clear()}))},shopBagCount:function(){var t=this,i=localStorage.getItem("__tk");i&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/shopcartRows",params:{appkey:this.appkey,tokenString:i}}).then((function(i){t.$toast.clear(),8e3==i.data.code&&(t.bagCount=i.data.result)})).catch((function(i){t.$toast.clear()})))},addShopbag:function(t){var i=this,e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});var a={tokenString:e,appkey:this.appkey,count:this.product.count,pid:this.pid},n=[];this.productDetail.rules.map((function(t){n.push(t.rule[t.ruleIndex].title)})),a.rule=n.join("/"),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/addShopcart",data:a}).then((function(e){i.$toast.clear(),700==e.data.code?i.$router.push({name:"Login"}):3e3==e.data.code&&(t?i.$router.push({name:"Pay",query:{sids:e.data.sid}}):1==e.data.status&&i.bagCount++),i.$toast(e.data.msg)})).catch((function(t){i.$toast.clear()}))},buy:function(t){this.addShopbag(t)}}}),o=s,r=e("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);i["default"]=c.exports},d81d:function(t,i,e){"use strict";var a=e("23e7"),n=e("b727").map,s=e("1dde"),o=e("ae40"),r=s("map"),c=o("map");a({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},eadb:function(t,i,e){}}]);
//# sourceMappingURL=chunk-e2da0cf8.4af9e809.js.map