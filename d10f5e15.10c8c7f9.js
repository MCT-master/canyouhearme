(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),l=(n(0),n(88)),o=n(93),c={id:"iperf",title:"Zoom",sidebar_label:"iperf",hide_title:!0},i={unversionedId:"tools/iperf",id:"tools/iperf",isDocsHomePage:!1,title:"Zoom",description:"<WikiEntry",source:"@site/docs/tools/iperf.mdx",slug:"/tools/iperf",permalink:"/canyouhearme/docs/tools/iperf",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/docs/tools/iperf.mdx",version:"current",sidebar_label:"iperf",sidebar:"wiki",previous:{title:"OBS",permalink:"/canyouhearme/docs/video/obs"},next:{title:"Jack",permalink:"/canyouhearme/docs/tools/jack"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",null,Object(l.b)(o.a,{title:"",pic_url:"",description:"",developer:"",website:"",support:"",protocol:"",os_support:"",pricing:"",sign_up:"",hosting:"",rec_speed:"",req_speed:"",max_qual:"",latency:"",last_update:"",open_source:"",repo:"",ease:"",issues:"",info:"",caution:"",mdxType:"WikiEntry"})))}p.isMDXComponent=!0},84:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var r=n(84),a=n(87);function l(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,c=void 0!==o&&o,i=l.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},86:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},87:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},90:function(e,t,n){"use strict";var r=n(0),a=n(89);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(90),o=n(86),c=n(47),i=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,m=e.groupId,d=Object(l.a)(),f=d.tabGroupChoices,E=d.setTabGroupChoices,h=Object(r.useState)(c),v=h[0],b=h[1],g=Object(r.useState)(!1),y=g[0],w=g[1];if(null!=m){var _=f[m];null!=_&&_!==v&&p.some((function(e){return e.value===_}))&&b(_)}var O=function(e){b(e),null!=m&&E(m,e)},j=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",k)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e),x(e)},onFocus:function(){return O(t)},onClick:function(){O(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},92:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},93:function(e,t,n){"use strict";var r=n(3),a=n(0),l=n.n(a),o=(n(85),n(91)),c=n(92),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"avatar avatar--vertical"},this.props.pic_url.length>0&&l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:this.props.pic_url}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h1",{class:"avatar__name"},this.props.title),l.a.createElement("h4",{class:"avatar_links"},l.a.createElement("a",{href:this.props.website},"Official website"),this.props.support.length>0&&l.a.createElement("span",null," - ",l.a.createElement("a",{href:this.props.support},"Support link"))),l.a.createElement("medium",{class:"avatar__subtitle"},this.props.description))),l.a.createElement("hr",null),l.a.createElement(o.a,{defaultValue:"column",values:[{label:"Column",value:"column"},{label:"Table",value:"table"}]},l.a.createElement(c.a,{value:"column"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Basic information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Developer: "),this.props.developer),l.a.createElement("p",null,l.a.createElement("strong",null,"Protocol: "),this.props.protocol),l.a.createElement("p",null,l.a.createElement("strong",null,"OS Supported: ")," ",this.props.os_support),l.a.createElement("p",null,l.a.createElement("strong",null,"Pricing: "),this.props.pricing),l.a.createElement("p",null,l.a.createElement("strong",null,"Requires sign-up?: "),this.props.sign_up),l.a.createElement("p",null,l.a.createElement("strong",null,"Website: "),l.a.createElement("a",{href:this.props.website},this.props.website))),l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Detailed information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Self-hosted?: "),this.props.hosting),l.a.createElement("p",null,l.a.createElement("strong",null,"Recommended net-speed: "),this.props.rec_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Required net-speed: "),this.props.req_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Max quality: "),this.props.max_qual),l.a.createElement("p",null,l.a.createElement("strong",null,"Latency (estimate): "),this.props.latency),l.a.createElement("p",null,l.a.createElement("strong",null,"Last update: "),this.props.last_update),l.a.createElement("p",null,l.a.createElement("strong",null,"Open source?: "),this.props.open_source),this.props.repo.length>0&&l.a.createElement("p",null,l.a.createElement("strong",null,"Repo: "),l.a.createElement("a",{href:this.props.repo},this.props.repo)))))),l.a.createElement(c.a,{value:"table"},l.a.createElement("div",{class:"spec-table"},l.a.createElement("h2",null,"Overview of technical specifications"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Detail"),l.a.createElement("th",null,"Value")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Developer:")),l.a.createElement("td",null,this.props.developer)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Protocol:")),l.a.createElement("td",null,this.props.protocol)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"OS Supported:")),l.a.createElement("td",null,this.props.os_support)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Self-hosted?:")),l.a.createElement("td",null,this.props.hosting)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Recommended net-speed:")),l.a.createElement("td",null,this.props.rec_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Required net-speed:")),l.a.createElement("td",null,this.props.req_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Max quality:")),l.a.createElement("td",null,this.props.max_qual)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Latency (estimate):")),l.a.createElement("td",null,this.props.latency)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Last update:")),l.a.createElement("td",null,this.props.last_update)))))),l.a.createElement("hr",null),l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Ease of use")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.ease)))),l.a.createElement("br",null),this.props.issues.length>0&&l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Issues")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.issues)))),l.a.createElement("br",null),this.props.info.length>0&&l.a.createElement("div",{class:"admonition admonition-info alert alert--info"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.info))),this.props.caution.length>0&&l.a.createElement("div",{class:"admonition admonition-caution alert alert--warning"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.caution))))},t}(l.a.Component);i.defaultProps={title:"",pic_url:"",description:"",developer:"",website:"",support:"",protocol:"",os_support:"",pricing:"",sign_up:"",hosting:"",rec_speed:"Flexible",req_speed:"Unknown",max_qual:"Unknown",latency:"Unknown",last_update:"Unknown",open_source:"",repo:"",ease:"",issues:"",info:"",caution:""},t.a=i}}]);