(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={2:0},o=[];function i(e){return s.p+"js/"+({1:"pdfjs-dist"}[e]||e)+"."+{1:"5905c3bf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,u.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-pdfjs-demo/",s.oe=function(e){throw console.error(e),e};var u=this["webpackJsonp"]=this["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;o.push([9,0]),n()})({"2pwl":function(e,t,n){"use strict";var r=n("O7jP"),a=n.n(r);a.a},"4IhJ":function(e,t,n){"use strict";var r=n("6YYa"),a=n.n(r);a.a},"6YYa":function(e,t,n){},"7eyz":function(e,t,n){"use strict";var r=n("D7LO"),a=n.n(r);a.a},9:function(e,t,n){e.exports=n("Vtdi")},D7LO:function(e,t,n){},DtXK:function(e,t,n){},EDI0:function(e,t,n){},O7jP:function(e,t,n){},VMW6:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M29 36.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h24.2c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H29z"}})])},r=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-out.svg"};e.exports={render:n,toString:r}},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r,a=n("Kw5r"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("PDFViewer",e._b({on:{"document-errored":e.onDocumentErrored}},"PDFViewer",{url:e.url},!1),[e.enableUploader?n("PDFUploader",{staticClass:"header-item",attrs:{slot:"header",documentError:e.documentError},on:{updated:e.urlUpdated},slot:"header"}):e._e()],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pdf-uploader form"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.openPicker(t)}}},[e._v("Upload")]),n("span",[e._v("or")]),n("label",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{placeholder:"Enter a PDF url"},domProps:{value:e.url},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.validateUrl(t):null},blur:e.validateUrl,input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e.error?n("p",{staticClass:"error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e()])},u=[],c=n("k5N+");function l(){return r?Promise.resolve(r):n.e(0).then(n.bind(null,"b4d3")).then(function(e){var t=e.default;return t.init(Object({VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILESTACK_KEY)})}var d={props:{documentError:{type:String,default:""}},data:function(){return{url:void 0,urlError:void 0}},watch:{},computed:{error:function(){return this.documentError||this.urlError}},methods:{openPicker:function(){var e=this;l().then(function(t){t.pick({fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],accept:[".pdf"],maxFiles:1,maxSize:1024e4}).then(function(t){return e.onFilestack(t)})})},onFilestack:function(e){if(e.filesUploaded.length>0){var t=Object(c["a"])(e.filesUploaded,1),n=t[0];this.url=n.url,this.$emit("updated",this.url)}},validateUrl:function(){var e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;e.exec(this.url)?(this.urlError=void 0,this.$emit("updated",this.url)):this.urlError="Please enter a valid url"}}},p=d,h=(n("4IhJ"),n("KHd+")),g=Object(h["a"])(p,s,u,!1,null,"4532bb32",null),f=g.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-viewer"},[n("header",{staticClass:"box-shadow"},[n("PDFZoom",{staticClass:"header-item",attrs:{scale:e.scale},on:{change:e.updateScale}}),n("PDFPaginator",{staticClass:"header-item",attrs:{pageCount:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._t("header")],2),n("PDFDocumentProxy",{attrs:{url:e.url},on:{"page-count":e.updatePageCount,"page-focus":e.updateCurrentPage,"document-rendered":e.onDocumentRendered,"document-errored":e.onDocumentErrored},scopedSlots:e._u([{key:"preview",fn:function(t){var r=t.pages;return n("PDFPreview",e._b({},"PDFPreview",{pages:r,scale:e.scale,currentPage:e.currentPage,pageCount:e.pageCount},!1))}},{key:"document",fn:function(t){var r=t.pages;return n("PDFDocument",e._b({on:{"scale-change":e.updateScale}},"PDFDocument",{pages:r,scale:e.scale,currentPage:e.currentPage,pageCount:e.pageCount},!1))}}])})],1)},v=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({directives:[{name:"resize",rawName:"v-resize",value:e.updateScale,expression:"updateScale"}],staticClass:"pdf-document preview-enabled",attrs:{"enable-page-jump":!0},on:{"page-jump":e.onPageJump,"pages-fetch":e.onPagesFetch,"pages-reset":e.updateScale},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.page,a=t.isElementVisible,o=t.isPageFocused,i=t.isElementFocused;return n("PDFPage",e._b({on:{"page-rendered":e.onPageRendered,"page-errored":e.onPageErrored,"page-focus":e.onPageFocused}},"PDFPage",{scale:e.scale,page:r,isElementVisible:a,isPageFocused:o,isElementFocused:i},!1))}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},b=[],w=(n("xfY5"),n("NOtv")),y=n.n(w),E=window.devicePixelRatio||1,D=n("oyJW");function F(){var e,t=480,n=768,r=1024,a=(e={},Object(D["a"])(e,r,.95),Object(D["a"])(e,n,.85),Object(D["a"])(e,t,.75),e),o=document.body.clientWidth;return o>t?a[t]:o>n?a[n]:a[r]}n("rGqo"),n("yt8O"),n("EK0E");var _=n("DzJC"),$=n.n(_),x=new WeakMap;function C(e,t){var n=t.value,r=$()(n,300);if(x.has(e))throw new Error("Tried to add multiple resize directives for ".concat(e));x.set(e,r),window.addEventListener("resize",r,!0)}function j(e){if(x.has(e)){var t=x.get(e);x.delete(e),window.removeEventListener("resize",t,!0)}}var S={inserted:C,unbind:j},O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"bottom",rawName:"v-bottom.immediate",value:e.fetchPages,expression:"fetchPages",modifiers:{immediate:!0}},{name:"scroll",rawName:"v-scroll.immediate",value:e.updateScrollBounds,expression:"updateScrollBounds",modifiers:{immediate:!0}}],staticClass:"scrolling-document"},e._l(e.pages,function(t){return n("ScrollingPage",e._b({key:t.pageNumber,on:{"page-jump":e.onPageJump},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.page,r=t.isElementVisible,a=t.isPageFocused,o=t.isElementFocused;return[e._t("default",null,null,{page:n,isElementVisible:r,isPageFocused:a,isElementFocused:o})]}}])},"ScrollingPage",{page:t,scrollBounds:e.scrollBounds,focusedPage:e.focusedPage,enablePageJump:e.enablePageJump},!1))}))},k=[],T=new WeakMap;function N(e){var t=e.scrollTop,n=e.clientHeight,r=e.scrollHeight;return t+n>=r}function V(e,t){var n=t.value,r=function(){N(e)&&n()};t.modifiers.immediate&&r();var a=$()(r,300);if(e.addEventListener("scroll",a,!0),window.addEventListener("resize",a,!0),T.has(e))throw new Error("Tried to add multiple resize directives for ".concat(e));T.set(e,a)}function B(e){if(T.has(e)){var t=T.get(e);T.delete(e),window.removeEventListener("resize",t,!0)}}var z={inserted:V,unbind:B};function U(e,t){var n=t.value;t.modifiers.immediate&&n();var r=$()(n,300);e.addEventListener("scroll",r,!0)}var L,M,R,J,q={inserted:U},K={name:"ScrollingPage",props:{page:{type:Object,required:!0},focusedPage:{type:Number,default:void 0},scrollBounds:{type:Object,default:function(){return{}}},enablePageJump:{type:Boolean,default:!1}},data:function(){return{elementBounds:{}}},computed:{isPageFocused:function(){return this.page.pageNumber===this.focusedPage},isElementFocused:function(){var e=this.elementBounds,t=e.top,n=e.bottom,r=e.height;if(r){var a=this.scrollBounds,o=a.top,i=a.height,s=r/2,u=i/2,c=r>=u?u:s,l=o+c;return t<l&&n>=l}},isElementVisible:function(){var e=this.elementBounds,t=e.top,n=e.bottom,r=e.height;if(r){var a=this.scrollBounds,o=a.top,i=a.bottom;return t<i&&n>o}}},methods:{jumpToPage:function(){if(this.enablePageJump&&!this.isElementFocused&&this.isPageFocused){var e=this.elementBounds.top;this.$emit("page-jump",e)}},updateElementBounds:function(){var e=this.$el,t=e.offsetTop,n=e.clientHeight;this.elementBounds={top:t,bottom:t+n,height:n}}},watch:{scrollBounds:"updateElementBounds",isPageFocused:"jumpToPage"},created:function(){this.$on("update-visibility",this.updateElementBounds)},mounted:function(){this.updateElementBounds()},render:function(e){var t=this.page,n=this.isElementVisible,r=this.isPageFocused,a=this.isElementFocused;return e("div",{class:"scrolling-page"},[this.$scopedSlots.default({page:t,isElementVisible:n,isPageFocused:r,isElementFocused:a})])}},A=K,I=Object(h["a"])(A,L,M,!1,null,null,null),Z=I.exports,H={components:{ScrollingPage:Z},directives:{bottom:z,scroll:q},props:{pages:{required:!0},enablePageJump:{type:Boolean,default:!1},currentPage:{type:Number,default:1}},data:function(){return{focusedPage:void 0,scrollBounds:{}}},computed:{pagesLength:function(){return this.pages.length}},methods:{fetchPages:function(e){this.$emit("pages-fetch",e)},onPageJump:function(e){this.$emit("page-jump",e)},updateScrollBounds:function(){var e=this.$el,t=e.scrollTop,n=e.clientHeight;this.scrollBounds={top:t,bottom:t+n,height:n}}},watch:{pagesLength:function(e,t){var n=this;0===t&&this.$emit("pages-reset"),this.$nextTick(function(){n.focusedPage=n.currentPage})},currentPage:function(e){e>this.pages.length?this.fetchPages(e):this.focusedPage=e}}},W=H,X=Object(h["a"])(W,O,k,!1,null,null,null),Y=X.exports,G=y()("app:components/PDFPage"),Q={name:"PDFPage",props:{page:{type:Object,required:!0},scale:{type:Number,required:!0},isPageFocused:{type:Boolean,default:!1},isElementVisible:{type:Boolean,default:!1},isElementFocused:{type:Boolean,default:!1}},computed:{actualSizeViewport:function(){return this.viewport.clone({scale:this.scale})},canvasStyle:function(){var e=this.actualSizeViewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e/E)}),a=Object(c["a"])(r,2),o=a[0],i=a[1];return"width: ".concat(o,"px; height: ").concat(i,"px;")},canvasAttrs:function(){var e=this.viewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e)}),a=Object(c["a"])(r,2);t=a[0],n=a[1];var o=this.canvasStyle;return{width:t,height:n,style:o,class:"pdf-page box-shadow"}},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.isPageFocused||this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=this.$el.getContext("2d"),r={canvasContext:n,viewport:t};this.renderTask=this.page.render(r),this.renderTask.then(function(){e.$emit("page-rendered",{page:e.page,text:"Rendered page ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("page-errored",{response:t,page:e.page,text:"Failed to render page ".concat(e.pageNumber)})})}},updateVisibility:function(){this.$parent.$emit("update-visibility")},destroyPage:function(e,t){t&&t._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)}},watch:{page:"destroyPage",scale:"updateVisibility",isElementFocused:function(e){e&&this.focusPage()},isElementVisible:function(e){e&&this.drawPage()}},created:function(){this.viewport=this.page.getViewport(this.scale)},mounted:function(){G("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(void 0,this.page)},render:function(e){var t=this.canvasAttrs;return e("canvas",{attrs:t})}},ee=Q,te=(n("pN7y"),Object(h["a"])(ee,R,J,!1,null,null,null)),ne=te.exports,re=y()("app:components/PDFDocument"),ae={name:"PDFDocument",components:{ScrollingDocument:Y,PDFPage:ne},directives:{resize:S},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1}},methods:{updateScale:function(){if(this.pages.length){var e=Object(c["a"])(this.pages,1),t=e[0],n=this.$el.clientWidth,r=t.getViewport(1),a=n*E*F()/r.width;re("calculating initial scale",n,r.width,a),this.$emit("scale-change",a)}},onPageJump:function(e){this.$el.scrollTop=e},onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},onPageRendered:function(e){this.$parent.$emit("page-rendered",e)},onPageErrored:function(e){this.$parent.$emit("page-errored",e)}},watch:{pageCount:"updateScale"}},oe=ae,ie=(n("yJHj"),Object(h["a"])(oe,P,b,!1,null,null,null)),se=ie.exports,ue=n("iv4g"),ce=(n("91GP"),n("WjpJ")),le=n.n(ce),de=y()("app:components/PDFDocumentProxy");function pe(e){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,"+6Tl",7)).then(function(t){return t.getDocument(e)})}function he(e,t,n){var r=le()(t,n+1).map(function(t){return e.getPage(t)});return Promise.all(r)}var ge=5;function fe(){return{pages:[],cursor:0}}var me,ve,Pe={name:"PDFDocumentProxy",props:{url:{type:String,required:!0}},data:function(){return Object.assign(fe(),{pdf:void 0})},watch:{url:{handler:function(e){var t=this;pe(e).then(function(e){return t.pdf=e}).catch(function(e){t.$emit("document-errored",{text:"Failed to retrieve PDF",response:e}),de("Failed to retrieve PDF",e)})},immediate:!0},pdf:function(e,t){e&&(t&&Object.assign(this,fe()),this.$emit("page-count",this.pageCount),this.fetchPages())}},computed:{pageCount:function(){return this.pdf?this.pdf.numPages:0}},methods:{fetchPages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.pdf&&!(this.pageCount>0&&this.pages.length===this.pageCount)){var n=this.pages.length;if(!(this.cursor>n)){var r=n+1,a=Math.min(Math.max(t,n+ge),this.pageCount);this.cursor=a,de("Fetching pages ".concat(r," to ").concat(a)),he(this.pdf,r,a).then(function(t){var r,a=0;return(r=e.pages).splice.apply(r,[n,a].concat(Object(ue["a"])(t))),e.pages}).catch(function(t){e.$emit("document-errored",{text:"Failed to retrieve pages",response:t}),de("Failed to retrieve pages",t)})}}},onPageRendered:function(e){var t=e.text,n=e.page;de(t,n)},onPageErrored:function(e){var t=e.text,n=e.response,r=e.page;de("Error!",t,n,r)}},created:function(){this.$on("page-rendered",this.onPageRendered),this.$on("page-errored",this.onPageErrored),this.$on("pages-fetch",this.fetchPages)},render:function(e){return e("div",[this.$scopedSlots.preview({pages:this.pages}),this.$scopedSlots.document({pages:this.pages})])}},be=Pe,we=Object(h["a"])(be,me,ve,!1,null,null,null),ye=we.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-paginator"},[e.pageCount?[n("input",{attrs:{min:"1",max:e.pageCount,type:"number"},domProps:{value:e.value},on:{input:e.input}}),e._v(" / "),n("span",[e._v(e._s(e.pageCount))])]:n("input",{attrs:{type:"number"}})],2)},De=[],Fe={name:"PDFPaginator",props:{value:Number,pageCount:Number},methods:{input:function(e){this.$emit("input",parseInt(e.target.value,10))}},watch:{pageCount:function(){this.$emit("input",1)}}},_e=Fe,$e=(n("2pwl"),Object(h["a"])(_e,Ee,De,!1,null,null,null)),xe=$e.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({staticClass:"pdf-preview",on:{"pages-fetch":e.onPagesFetch},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.page,a=t.isElementVisible,o=t.isPageFocused;return n("PDFThumbnail",e._b({on:{"thumbnail-rendered":e.thumbnailRendered,"thumbnail-errored":e.thumbnailErrored,"page-focus":e.onPageFocused}},"PDFThumbnail",{scale:e.scale,page:r,isElementVisible:a,isPageFocused:o},!1))}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},je=[],Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-thumbnail",class:{focused:e.isPageFocused},on:{click:e.focusPage}},[e.src?n("img",{staticClass:"box-shadow",attrs:{src:e.src}}):n("div",{staticClass:"placeholder box-shadow"},[n("div",{staticClass:"content"},[e._v("\n      Loading\n    ")])]),n("span",{staticClass:"page-number"},[e._v(e._s(e.pageNumber))])])},Oe=[],ke=y()("app:components/PDFThumbnail"),Te={name:"PDFThumbnail",props:{page:{type:Object,required:!0},scale:{required:!0},isPageFocused:{type:Boolean,default:!1},isElementVisible:{type:Boolean,default:!1}},data:function(){return{src:void 0}},computed:{viewport:function(){return this.page.getViewport(1)},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=document.createElement("canvas"),r=n.getContext("2d"),a={canvasContext:r,viewport:t};n.height=t.height,n.width=t.width,this.renderTask=this.page.render(a),this.renderTask.then(function(){e.src=n.toDataURL(),n.width=0,n.height=0}).then(function(){e.$emit("thumbnail-rendered",{page:e.page,text:"Rendered thumbnail ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("thumbnail-errored",{response:t,page:e.page,text:"Failed to render thumbnail ".concat(e.pageNumber)})})}},destroyPage:function(e,t){t&&t._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)},updateVisibility:function(){this.$parent.$emit("update-visibility")}},watch:{page:"destroyPage",src:"updateVisibility",scale:"updateVisibility",isElementVisible:function(e){e&&this.drawPage()}},mounted:function(){ke("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(void 0,this.page)}},Ne=Te,Ve=(n("cUEJ"),Object(h["a"])(Ne,Se,Oe,!1,null,"75681f36",null)),Be=Ve.exports,ze={name:"PDFPreview",components:{ScrollingDocument:Y,PDFThumbnail:Be},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1}},methods:{onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},thumbnailRendered:function(e){this.$el.dispatchEvent(new Event("scroll")),this.$parent.$emit("thumbnail-rendered",e)},thumbnailErrored:function(e){this.$parent.$emit("thumbnail-errored",e)}}},Ue=ze,Le=(n("obNt"),Object(h["a"])(Ue,Ce,je,!1,null,"96111126",null)),Me=Le.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-zoom"},[n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomIn(t)}}},[n("ZoomInIcon")],1),n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomOut(t)}}},[n("ZoomOutIcon")],1)])},Je=[],qe=n("uud7"),Ke=n.n(qe),Ae=n("VMW6"),Ie=n.n(Ae),Ze={name:"PDFZoom",components:{ZoomInIcon:Ke.a,ZoomOutIcon:Ie.a},props:{scale:{type:Number},increment:{type:Number,default:.25}},computed:{isDisabled:function(){return!this.scale}},methods:{zoomIn:function(){this.$emit("change",this.scale+this.increment)},zoomOut:function(){this.scale<=this.increment||this.$emit("change",this.scale-this.increment)}}},He=Ze,We=(n("cTUT"),Object(h["a"])(He,Re,Je,!1,null,null,null)),Xe=We.exports;function Ye(e,t){var n=Math.pow(10,t||0);return Math.round(e*n)/n}var Ge={name:"PDFViewer",components:{PDFDocument:se,PDFDocumentProxy:ye,PDFPaginator:xe,PDFPreview:Me,PDFZoom:Xe},props:{url:String},data:function(){return{scale:void 0,currentPage:1,pageCount:void 0}},methods:{onDocumentRendered:function(){this.$emit("document-errored",this.url)},onDocumentErrored:function(e){this.$emit("document-errored",e)},updateScale:function(e){this.scale=Ye(e,1)},updatePageCount:function(e){this.pageCount=e},updateCurrentPage:function(e){this.currentPage=e}},watch:{url:function(){this.currentPage=void 0}},mounted:function(){document.body.classList.add("overflow-hidden")}},Qe=Ge,et=(n("7eyz"),Object(h["a"])(Qe,m,v,!1,null,"65d94aba",null)),tt=et.exports,nt={name:"app",components:{PDFUploader:f,PDFViewer:tt},data:function(){return{url:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",documentError:void 0,enableUploader:"true"===Object({VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_UPLOAD_ENABLED}},methods:{urlUpdated:function(e){this.documentError=void 0,this.url=e},onDocumentErrored:function(e){this.documentError=e.text}}},rt=nt,at=(n("ZL7j"),Object(h["a"])(rt,o,i,!1,null,null,null)),ot=at.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ot)}}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),a=n.n(r);a.a},bVHx:function(e,t,n){},cTUT:function(e,t,n){"use strict";var r=n("DtXK"),a=n.n(r);a.a},cUEJ:function(e,t,n){"use strict";var r=n("bVHx"),a=n.n(r);a.a},nfMK:function(e,t,n){},o0dZ:function(e,t,n){},obNt:function(e,t,n){"use strict";var r=n("tPq7"),a=n.n(r);a.a},pN7y:function(e,t,n){"use strict";var r=n("o0dZ"),a=n.n(r);a.a},tPq7:function(e,t,n){},uud7:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M53.1 36.5h-7.6v-7.6c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5v7.6H29c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h7.6v7.6c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-7.6h7.6c2.5 0 4.5-2 4.5-4.5s-2.1-4.5-4.6-4.5z"}})])},r=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-in.svg"};e.exports={render:n,toString:r}},yJHj:function(e,t,n){"use strict";var r=n("nfMK"),a=n.n(r);a.a}});
//# sourceMappingURL=app.fe58a0e0.js.map