(this.webpackJsonpfacade=this.webpackJsonpfacade||[]).push([[0],{247:function(e,t,n){},249:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var r=n(165),a=n(0),c=n.n(a),i=n(44),s=n.n(i),o=(n(247),n(248),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,341)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),l=n(160),u=n(29),d=n(184),j=n(39),h=n(202),b=n(203);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.createElement("animate",{attributeName:"stroke-dasharray",values:"0%, 50%;25%, 25%; 25%, 25%;0%, 50%",dur:"3s",repeatCount:"indefinite"}),O=a.createElement("animate",{attributeName:"stroke-dashoffset",values:"-10%;-35%;-35%;-60%",dur:"3s",repeatCount:"indefinite"}),g=a.createElement("animate",{attributeName:"stroke-dasharray",values:"0%, 50%;25%, 25%;25%, 25%;0%, 50%;",dur:"3s",repeatCount:"indefinite"}),x=a.createElement("animate",{attributeName:"stroke-dashoffset",values:"-10%;-60%;-60%;-110.%",dur:"3s",repeatCount:"indefinite"}),v=a.createElement("animate",{attributeName:"stroke-dashoffset",values:"500%;0",dur:"12s",repeatCount:"indefinite"}),y=a.createElement("animate",{attributeName:"stroke-dashoffset",values:"300%;0",dur:"12s",repeatCount:"indefinite"});function k(e,t){var n=e.title,r=e.titleId,c=p(e,["title","titleId"]);return a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:116,height:116,viewBox:"-58 -58 116 116",className:"logoBox",preserveAspectRatio:"xMidYMid meet",style:{verticalAlign:"top"},ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,a.createElement("defs",null,a.createElement("polygon",{id:"center",points:"10.392304845413264,42 0,48 -10.392304845413264,42 -10.392304845413264,-42 0,-48 10.392304845413264,-42",style:{fill:"rgba(136, 50, 119, 0)",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"bevel"}}),a.createElement("polygon",{id:"right",points:"20.784609690826528,11.999999999999993 41.569219381653056,23.999999999999996 41.569219381653056,-23.999999999999996 20.784609690826528,-36",style:{fill:"rgba(136, 50, 119, 0)",stroke:"#fff045",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}}),a.createElement("polygon",{id:"left",points:"-20.784609690826528,36 -41.569219381653056,23.999999999999996 -41.569219381653056,-23.999999999999996 -20.784609690826528,-11.999999999999993",style:{fill:"rgba(136, 50, 119, 0)",stroke:"#fff045",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}})),a.createElement("use",{href:"#center",style:{stroke:"white"}},m,O),a.createElement("use",{href:"#center",style:{stroke:"#fff045",strokeWidth:9}},g,x),a.createElement("use",{href:"#right",style:{strokeDasharray:"100%, 80%"}},v),a.createElement("use",{href:"#left",style:{strokeDasharray:"100%, 80%"}},y))}var w=a.forwardRef(k),E=(n.p,n(337)),C=(n(249),n(110)),I=n(204),P=n(119),S=n(111);var L,q=n(8),M=S.a.div(L||(L=Object(C.a)(['\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    >svg>g.graph>*:first-child {\n        fill: transparent;\n    }\n    \n    .graph .edge path{\n      stroke-dasharray: 0 3;\n      animation: run 80s linear infinite;\n      stroke-width: 1px;\n      stroke-linecap: round;\n    }\n    \n    g.graph>g.node {\n        cursor: pointer;\n        \n        >path {\n            stroke-opacity: 0.8;\n            stroke-width: 1px;\n            &[fill="#017ec2"] {\n                stroke: #017ec2;\n                stroke: white;\n            }\n            &[fill="#b42366"] {\n                stroke: #b42366;\n                stroke: white;\n            }\n        }\n        \n        &:hover>path {\n            fill: #e77616;\n            stroke: #e7761680;\n            stroke-width: 12px;\n        }\n        \n    }\n']))),N=function(e){return function(t,n,r){var a=P.b(undefined);if("svg"===t.tag){var c=parseInt(t.attributes.width),i=parseInt(t.attributes.height),s=e.width,o=e.height,l=Math.floor((s-c)/2),u=Math.floor((o-i)/2);a.attr("width",s+"px").attr("height",o+"px").attr("viewBox",-l+" "+-u+" "+s+" "+o),t.attributes.width=s+"px",t.attributes.height=o+"px",t.attributes.viewBox=-l+" "+-u+" "+s+" "+o}}};function z(){return P.c("main").ease(P.a).delay(40).duration(300)}var A,F,T=function(e){var t=e.dots,n=e.onFocus,r=void 0===n?function(){}:n,c=Object(a.useRef)(),i=Object(a.useState)(null),s=Object(j.a)(i,2),o=s[0],l=s[1],u=function(){var e=Object(a.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useCallback)((function(){r({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})}),[]);return Object(a.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[c]),n}();return Object(a.useEffect)((function(){if(null==o)var e=Object(I.graphviz)(c.current).transition(z).zoom(!0).scale(1).tweenPaths(!0).tweenShapes(!0).growEnteringEdges(!0).attributer(N(u)).on("initEnd",(function(){e.dot(t.join("\n")).render((function(){return l(e)}))}));else o.attributer((function(e,t,n){var a=P.b(this);"svg"===e.tag?N(u)(e,t,n):"g"===e.tag&&a.classed("node")&&a.on("click",(function(){r(e.key)}))})).dot(t.join("\n")).render()}),[u,t,o,r]),Object(q.jsx)(M,{ref:c})},B=n(330),R=n(334),D=n(336),W=n(61),_=n(222),X=S.a.div(A||(A=Object(C.a)(["\n    position: fixed;\n    right: 2vmin;\n    top: 2vmin;\n    z-index: 1;\n    button.extra-plus svg>path{\n        color: white;\n    }\n"]))),H=S.a.a(F||(F=Object(C.a)(["\n    color: white;\n    font-size: 16px;\n    &:hover{\n    color: white;\n    }\n"]))),G=function(e){var t=e.genealogy,n=e.setGenealogy,r=e.children,c=Object(a.useState)([]),i=Object(j.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(Object(q.jsx)(W.a,{})),d=Object(j.a)(u,2),h=d[0],b=d[1];return Object(a.useEffect)((function(){fetch("/api/genealogy/").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=s.find((function(e){return e.uuid===t}));if(e){var n=Object(q.jsx)(B.a,{children:s.map((function(e){return Object(q.jsx)(B.a.Item,{children:Object(q.jsx)(l.b,{to:"/g/".concat(e.uuid),children:e.name})},e.uuid)}))});document.title=e.name+" \u5bb6\u4e58 -\u300a \u5927\u5bb6 \u300b",b(Object(q.jsx)(R.a,{overlay:n,children:Object(q.jsxs)(H,{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:[e.name," ",Object(q.jsx)(_.a,{})]})}))}else b(Object(q.jsx)(W.a,{}))}),[s,t,n]),Object(q.jsx)(X,{children:Object(q.jsxs)(D.b,{children:[h,r]})})},J=n(331),V=n(328),Y=n(80),U=n(335),Z=n(326),K=n(327),Q=n(332),$=n(329),ee=n(333),te=n(340),ne=n(338),re=J.a.Option,ae=function(e){var t=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],n=["","\u5341","\u767e"],r="",a=0;if(e>99){if(0===(a=e%100))return t[Math.floor(e/100)]+"\u767e";r=a<10?t[Math.floor(e/100)]+"\u767e\u96f6":a>10&&a<20?t[Math.floor(e/100)]+"\u767e\u4e00":t[Math.floor(e/100)]+"\u767e"}else a=e;return r+(a<10?t[a]:a%10===0?10===a&&e<99?n[1]:t[a/10]+n[1]:a<20?n[1]+t[a%10]:t[Math.floor(a/10)]+n[1]+t[a%10])},ce=function(e){var t=e.member,n=Object(a.useState)(!0),r=Object(j.a)(n,2),c=r[0],i=r[1],s=V.a.useForm(),o=Object(j.a)(s,1)[0],l=function(){i(!1)};return Object(a.useEffect)((function(){0!==t&&c&&fetch("/api/member/".concat(t)).then((function(e){return e.json()})).then((function(e){o.setFieldsValue(e)}))}),[t,c,o]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Y.a,{style:{position:"fixed",bottom:"4vmin",right:"3vmin"},type:"primary",size:"large",shape:"circle",onClick:function(){return i(!0)},children:Object(q.jsx)(te.a,{})}),Object(q.jsx)(U.a,{title:"\u6210\u5458\u4fe1\u606f",width:"50%",onClose:l,visible:c,bodyStyle:{paddingBottom:80},mask:!1,footer:Object(q.jsxs)("div",{style:{textAlign:"right"},children:[Object(q.jsx)(Y.a,{onClick:l,style:{marginRight:8},children:"Cancel"}),Object(q.jsx)(Y.a,{onClick:l,type:"primary",children:"Submit"})]}),children:Object(q.jsxs)(V.a,{layout:"vertical",hideRequiredMark:!0,form:o,children:[Object(q.jsxs)(Z.a,{gutter:16,children:[Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"name",label:"\u540d\u5b57",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u5b57"}],children:Object(q.jsx)(Q.a,{placeholder:"\u540d\u5b57"})})}),Object(q.jsx)(K.a,{span:6,children:Object(q.jsx)(V.a.Item,{name:"gender",label:"\u6027\u522b",rules:[{required:!0,message:"\u6027\u522b"}],children:Object(q.jsxs)(J.a,{placeholder:"\u6027\u522b",children:[Object(q.jsx)(re,{value:1,children:"\u7537"}),Object(q.jsx)(re,{value:0,children:"\u5973"})]})})}),Object(q.jsx)(K.a,{span:6,children:Object(q.jsx)(V.a.Item,{name:"generation",label:"\u4e16\u4ee3",rules:[{required:!0,message:"\u4e16\u4ee3"}],children:Object(q.jsxs)(J.a,{placeholder:"\u4e16\u4ee3",children:[Object(q.jsx)(re,{value:1,children:"\u59cb\u7956"}),new Array(99).fill(!1).map((function(e,t){return t+2})).map((function(e){return Object(q.jsxs)(re,{value:e,children:[ae(e),"\u4e16"]},e)}))]})})})]}),Object(q.jsxs)(Z.a,{gutter:16,children:[Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"alias",label:"\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d"}],children:Object(q.jsx)(Q.a,{placeholder:"\u540d\u5b57"})})}),Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"courtesyName",label:"\u5b57",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5b57"}],children:Object(q.jsx)(Q.a,{placeholder:"\u540d\u5b57"})})})]}),Object(q.jsxs)(Z.a,{gutter:16,children:[Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"parent",label:"\u7236\u4eb2",rules:[{required:!0,message:"Please select an owner"}],children:Object(q.jsxs)(J.a,{placeholder:"Please select an owner",children:[Object(q.jsx)(re,{value:"xiao",children:"Xiaoxiao Fu"}),Object(q.jsx)(re,{value:"mao",children:"Maomao Zhou"})]})})}),Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"mother",label:"\u6bcd\u4eb2",rules:[{required:!0,message:"Please choose the type"}],children:Object(q.jsxs)(J.a,{placeholder:"Please choose the type",children:[Object(q.jsx)(re,{value:"private",children:"Private"}),Object(q.jsx)(re,{value:"public",children:"Public"})]})})})]}),Object(q.jsxs)(Z.a,{gutter:16,children:[Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"approver",label:"Approver",rules:[{required:!0,message:"Please choose the approver"}],children:Object(q.jsxs)(J.a,{placeholder:"Please choose the approver",children:[Object(q.jsx)(re,{value:"jack",children:"Jack Ma"}),Object(q.jsx)(re,{value:"tom",children:"Tom Liu"})]})})}),Object(q.jsx)(K.a,{span:12,children:Object(q.jsx)(V.a.Item,{name:"dateTime",label:"\u751f\u65e5",rules:[{required:!0,message:"Please choose the dateTime"}],children:Object(q.jsx)($.a.RangePicker,{style:{width:"100%"},getPopupContainer:function(e){return e.parentElement}})})})]}),Object(q.jsx)(Z.a,{gutter:16,children:Object(q.jsx)(K.a,{span:24,children:Object(q.jsx)(V.a.Item,{name:"description",label:"\u8be6\u7ec6",rules:[{required:!0,message:"please enter url description"}],children:Object(q.jsx)(Q.a.TextArea,{rows:4,placeholder:"please enter url description"})})})}),Object(q.jsx)(Z.a,{gutter:16,children:Object(q.jsx)(K.a,{span:24,children:Object(q.jsx)(V.a.Item,{label:"\u5b50\u5973",children:Object(q.jsxs)(D.b,{children:[Object(q.jsxs)(D.b,{children:[Object(q.jsx)(ee.a,{size:60,style:{backgroundColor:"#87d068",cursor:"pointer"},src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"\u5b9d\u5b9d",children:"\u5b9d\u5b9d"}),Object(q.jsx)("span",{children:"\u5b9d\u5b9d"})]}),Object(q.jsxs)(D.b,{children:[Object(q.jsx)(ee.a,{size:60,style:{backgroundColor:"#87d068",cursor:"pointer"},src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"\u5b9d\u5b9d",children:"\u5b9d\u5b9d"}),Object(q.jsx)("span",{children:"\u5b9d\u5b9d"})]}),Object(q.jsx)(ee.a,{size:60,icon:Object(q.jsx)(ne.a,{}),style:{cursor:"pointer"}})]})})})})]})})]})},ie=["digraph  {","    rankdir=LR",'    node [style="filled,rounded"]','    g [fillcolor="green" shape="parallelogram" label="\u521d\u59cb\u5316\u5b8c\u6210"]',"}"],se=function(){function e(t){Object(h.a)(this,e),this.member=void 0,this.member=t}return Object(b.a)(e,[{key:"graphId",get:function(){return"g_".concat(this.member.id)}},{key:"graph",get:function(){var e=this.member,t=e.id,n=e.gender,r=e.name;return"    g_".concat(t,' [fillcolor="').concat(1===n?"#017ec2":"#b42366",'" shape="hexagon" fontcolor="white" label="').concat(r.split("").join("\n"),'" penwidth="1"]')}},{key:"parent",get:function(){return this.member.parent?"g_".concat(this.member.parent,":s -> g_").concat(this.member.id,':n [color="#ffffff" penwidth="1" arrowhead="none"]'):""}}]),e}();var oe=function(e){var t=e.match.params.id,n=Object(a.useState)(t),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)([]),o=Object(j.a)(s,2),l=o[0],u=o[1],h=Object(a.useState)(ie),b=Object(j.a)(h,2),f=b[0],p=b[1],m=Object(a.useState)(""),O=Object(j.a)(m,2),g=O[0],x=O[1],v=Object(a.useState)(!1),y=Object(j.a)(v,2),k=y[0],C=y[1],I=Object(a.useState)(0),P=Object(j.a)(I,2),S=P[0],L=P[1];Object(a.useEffect)((function(){fetch("/api/member/byGenealogyUuid/".concat(c)).then((function(e){return e.json()})).then((function(e){u(e.map((function(e){return new se(e)})))}))}),[c]),Object(a.useEffect)((function(){p(["digraph  {","    rankdir=TB",'    node [style="filled,rounded"]'].concat(Object(d.a)(l.map((function(e){return e.graphId===g?["    subgraph cluster_sight_focus {",'        rankdir="LR"','        style = "dashed,rounded"','        color = "#fff045"',"    "+e.graph,"    }"].join("\n"):e.graph}))),Object(d.a)(l.map((function(e){return e.parent}))),["}"]))}),[l,g]),Object(a.useEffect)((function(){i(t)}),[t]),Object(a.useEffect)((function(){L(parseInt(g.substr(2)))}),[g]);var M=function(){return k&&g?Object(q.jsx)(ce,{member:S}):null};return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)("div",{className:"background"}),Object(q.jsxs)("header",{className:"App-header ".concat(l.length>0?"inited":""),children:[Object(q.jsx)(w,{className:"App-logo"}),Object(q.jsx)("h2",{children:"\u5927\u5bb6"})]}),Object(q.jsx)(T,{dots:f,onFocus:function(e){x(e===g?"":e)}}),Object(q.jsx)(G,{genealogy:c,setGenealogy:i,children:Object(q.jsx)(E.a,{checked:k,onChange:function(e){return C(e)}})}),Object(q.jsx)(M,{})]})},le=function(){return Object(q.jsx)(l.a,{children:Object(q.jsx)(u.c,{children:Object(q.jsx)(u.a,{path:"/g/:id",component:oe})})})},ue=fetch;Object.defineProperty(window,"fetch",{configurable:!0,enumerable:!0,get:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};return ue(e.replace(/^\/api\//,"https://api.riv.company/os/"),Object(r.a)(Object(r.a)({},t),Object(r.a)({headers:{}},t.headers)))}}}),s.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(le,{})}),document.getElementById("root")),o()}},[[323,1,2]]]);
//# sourceMappingURL=main.825730ad.chunk.js.map