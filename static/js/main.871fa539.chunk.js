(this["webpackJsonpreact-text-annotate-blend-docs"]=this["webpackJsonpreact-text-annotate-blend-docs"]||[]).push([[0],{305:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n(0),c=n.n(r),o=n(9),i=n.n(o),s=n(347),l=n(351),u=n(353),d=n(342),f=n(348),h=n(349),g=n(352),j=n(356),b=n(350),O=n(13),v=n(51),p=n(11),x=n(58),m=n(42),y=n(27),C=n.n(y),S=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e-t+1;return Array.from({length:n},(function(e,n){return t+n}))},w=function(t){return"#"===t.charAt(0)?function(t){var e="0",n="0",a="0";return 4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],a="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],a="0x"+t[5]+t[6]),{r:+e,g:+n,b:+a,a:.75}}(t):"rgb"===t.toLowerCase().substr(0,3)?function(t){var e=t.indexOf(",")>-1?",":" ",n=t.substr(4).split(")")[0].split(e);return{r:+n[0],g:+n[1],b:+n[2],a:.75}}(t):void 0},B=function(t,e){var n=function(t,e){var n,a=["r","g","b"].map((function(n){return Math.sqrt((Math.pow(t[n],2)+Math.pow(e[n],2))/2)}));return n=t.r===a[0]&&t.g===a[1]&&t.b===a[2]?(t.a+e.a)/2:1,{r:a[0],g:a[1],b:a[2],a:n}}(w(t),w(e));return"rgb("+ +n.r+","+ +n.g+","+ +n.b+","+ +n.a+")"},N=function(t){return 0===t.anchorNode.compareDocumentPosition(t.focusNode)&&t.focusOffset===t.anchorOffset},A=function(t,e){if(t.forEach((function(t){return delete t.index})),t.length){var n=Object(p.a)(t),a=n.pop(),r=S(a.start,a.end),c=0;n.forEach((function(t){delete t.index,S(t.start,t.end).map((function(t){return r.indexOf(t)>=0})).filter(Boolean).length>=2&&(c+=1)})),c<2&&e(t)}else e(t)},I=function(t){return!!t},M=function(t){return!!t},k=function(t,e){var n=t;return e.map((function(t){return n.color?n.end>=t.start&&n.end<=t.end&&n.end-t.start>0&&t.color?{start:t.start,end:n.end,color:B(n.color,t.color)}:n.end>=t.start&&n.end>=t.end&&t.end-t.start>0&&t.color?{start:t.start,end:t.end,color:B(n.color,t.color)}:void 0:void 0})).filter((function(t){return!!t}))},T=function(t){var e=t.length-1,n=t.map((function(n,a){return n+1!==t[a+1]&&a!==e?a+1:a===e?a:void 0})).filter(I),a=0;return n.map((function(e,r){if(r===n.length-1)return t.slice(a);var c=t.slice(a,e);return a=e,c})).filter((function(t){return t.length>1}))},D=function(t){return t.outRanges.flatMap((function(e,n){var a,r=t.metaData[n];if(e.every((function(t,n){return t===e[0]+n})))a=[e];else if(e.includes(-1)){a=function(t){var e=t.map((function(e,n){return-1===e||n===t.length-1?n:void 0})).filter(I),n=0;return e.map((function(a,r){var c;return r===e.length-1?c=t.slice(n):(c=t.slice(n,a),n=a+1),c.length>1?c:void 0})).filter(M)}(e).flatMap((function(t){return T(t)}))}else a=T(e);return a.map((function(t){return Object(O.a)(Object(O.a)({},r),{},{start:Math.min.apply(Math,Object(p.a)(t)),end:Math.max.apply(Math,Object(p.a)(t))})}))})).filter((function(t){return isFinite(t.start)||isFinite(t.end)}))},E=function(t){var e=C()(t,["start"]),n=function(t){for(var e=Object(p.a)(t),n=t.length-1,a=[],r=0;r<n;){var c=e.shift();c&&a.push.apply(a,Object(p.a)(k(c,e))),r++}return a}(e);if(n.length){var a=function(t,e){var n=[],a=[],r=e.flatMap((function(t){return S(t.start,t.end)})),c=[],o=[],i=t.map((function(e,i){var s=S(e.start,e.end),l=r.includes(e.start)||r.includes(e.end),u=s.every((function(t){return r.includes(t)})),d=r.every((function(t){return s.includes(t)}));if((l||u||d)&&c.push(i),e.index=i,l&&!u||d&&!u)return a.push(e.index),n.push({color:e.color}),s;if(l&&u){var f=e;o.push(t.findIndex((function(t,e){return t.start<=f.start&&t.end>=f.end})))}})).filter(M),s=[],l=[];o=Object(p.a)(new Set(o));var u,d=Object(m.a)(o);try{var f=function(){var n=u.value;if(a.every((function(t){return t!==n}))&&n>=0){var r=S(t[n].start,t[n].end);e.forEach((function(t){var e=0,n=0;if(t.end-t.start===1&&r.includes(t.end)&&r.includes(t.start)){var a=r.indexOf(t.start)+1;r.splice(a,0,-1)}else{if(r.includes(t.start)){var c=r.indexOf(t.start);e=0===c?t.start:t.start+1}if(r.includes(t.end)){var o=r.indexOf(t.end);n=o===r.length-1?t.end:t.end-1}var i=r.filter((function(t){return!S(e,n).includes(t)})),s=Object(x.a)(i);r=s.slice(0)}})),s.push(r),l.push({color:t[n].color})}};for(d.s();!(u=d.n()).done;)f()}catch(g){d.e(g)}finally{d.f()}var h=i.map((function(t){var n=t;return e.forEach((function(t,e){var a,r;if(t.end-t.start===1&&n.includes(t.start)){var c=n.indexOf(t.start)+1;n.splice(c,0,-1)}else{if(n.includes(t.start)){var o=n.indexOf(t.start);a=0===o?t.start:t.start+1}if(n.includes(t.end)){var i=n.indexOf(t.end);r=i===n.length-1?t.end:t.end-1}n=n.filter((function(t){return!S(a,r).includes(t)}))}})),n}));return{outRanges:[].concat(Object(p.a)(h),s),metaData:[].concat(n,l),tagIndices:[].concat(c,Object(p.a)(o))}}(e,n),r=a.outRanges,c=a.metaData,o=a.tagIndices,i=D({outRanges:r,metaData:c}),s=e.filter((function(t,e){return!o.includes(e)}));return{tags:[].concat(Object(p.a)(n),Object(p.a)(i),Object(p.a)(s)),blendIndices:o}}return{tags:e,blendIndices:[]}},R=function(t){var e=!!t.color&&function(t){var e=w(t);return!((.299*e.r+.587*e.g+.114*e.b)/255>.5)}(t.color);return Object(a.jsxs)("mark",{style:Object(O.a)({backgroundColor:t.color||"#84d2ff",padding:"0 4px"},e&&{color:"white"}),"data-start":t.start,"data-end":t.end,onMouseUp:function(){return t.onClick({start:t.start,end:t.end})},children:[t.content,t.tag&&Object(a.jsx)("span",{style:{fontSize:"0.7em",fontWeight:500,marginLeft:6},children:t.tag})]})},F=function(t){return t.mark?Object(a.jsx)(R,Object(O.a)({},t)):Object(a.jsx)("span",{"data-start":t.start,"data-end":t.end,onClick:function(){return t.onClick({start:t.start,end:t.end})},children:t.content})},L=function(t){var e=function(e){var n=e.start,a=e.end,c=window.getSelection(),o=0,i=0;if(c&&(o=c.focusOffset,i=c.anchorOffset),o-i===0){var s=E(r).blendIndices,l=C()(t.value,["start"]),u=l.findIndex((function(t,e){return t.start===n&&s.includes(e)})),d=l.findIndex((function(t,e){return t.end===a&&s.includes(e)})),f=l.findIndex((function(t){return t.start===n&&t.end===a}));f>=0?A([].concat(Object(p.a)(l.slice(0,f)),Object(p.a)(l.slice(f+1))),t.onChange):u>=0?A([].concat(Object(p.a)(l.slice(0,u)),Object(p.a)(l.slice(u+1))),t.onChange):d>=0&&A([].concat(Object(p.a)(l.slice(0,d)),Object(p.a)(l.slice(d+1))),t.onChange)}},n=t.content,r=t.value,c=t.style,o=E(r).tags,i=function(t,e){var n,a=0,r=[],c=Object(m.a)(C()(e,(function(t){return t.start})));try{for(c.s();!(n=c.n()).done;){var o=n.value,i=o.start,s=o.end;a<i&&r.push({start:a,end:i,content:t.slice(a,i)}),r.push(Object(O.a)(Object(O.a)({},o),{},{mark:!0,content:t.slice(i,s)})),a=s}}catch(l){c.e(l)}finally{c.f()}return a<t.length&&r.push({start:a,end:t.length,content:t.slice(a,t.length)}),r}(n,o);return Object(a.jsx)("div",{style:c,onMouseUp:function(){if(t.onChange){var e,a=window.getSelection();if(a&&a.anchorNode&&(null===a||void 0===a?void 0:a.focusNode)){var r,c,o;if(N(a))return;var i=null===(r=a.anchorNode.parentElement)||void 0===r?void 0:r.getAttribute("data-start"),s=null===(c=a.focusNode.parentElement)||void 0===c?void 0:c.getAttribute("data-start");if(null==i||null==s)return;var l=parseInt(String(i),10)+a.anchorOffset,u=parseInt(String(s),10)+a.focusOffset;if(function(t){if(N(t))return!1;var e=t.anchorNode.compareDocumentPosition(t.focusNode),n=!1;return(!e&&t.anchorOffset>t.focusOffset||e===Node.DOCUMENT_POSITION_PRECEDING)&&(n=!0),n}(a)){var d=[u,l];l=d[0],u=d[1]}A([].concat(Object(p.a)(t.value),[(e={start:l,end:u,text:n.slice(l,u)},t.getSpan?t.getSpan(e):{start:e.start,end:e.end})]),t.onChange),null===(o=window.getSelection())||void 0===o||o.empty()}}},children:i.map((function(t){return Object(a.jsx)(F,Object(O.a)(Object(O.a)({},t),{},{onClick:e}),"".concat(t.start,"-").concat(t.end))}))})},P=n(308),G=n(355),J=n(358),W=n(345),z=n(357),U=n(346),V=Object(d.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},main:{paddingLeft:"10%",paddingRight:"10%"},pre:{overflowX:"auto"}}})),_=[{start:6,end:14,text:"are many",tag:"tagA",color:"rgb(179, 245, 66)"},{start:10,end:23,text:"many stories ",tag:"tagC",color:"#4B46CD"},{start:78,end:82,text:"road",tag:"tagB",color:"#42f5f5"}];function q(){var t=V(),e=Object(r.useState)(_),n=Object(v.a)(e,2),c=n[0],o=n[1],i=Object(r.useState)("tagA"),s=Object(v.a)(i,2),l=s[0],u=s[1],d={tagA:"rgb(179, 245, 66)",tagB:"#42f5f5",tagC:"#4B46CD"};return Object(a.jsxs)(P.a,{className:t.main,children:[Object(a.jsx)(j.a,{p:2,children:Object(a.jsx)("h3",{children:"TextAnnotateBlend"})}),Object(a.jsx)(j.a,{pl:2,mb:2,children:Object(a.jsx)("strong",{children:"Simply highlight to tag & Click to untag"})}),Object(a.jsx)(P.a,{elevation:2,children:Object(a.jsx)(j.a,{p:2,children:Object(a.jsx)(L,{style:{maxWidth:500,fontSize:"1.2rem"},content:"There are many stories about the origins of cyclo-cross. One is that European road racers in the early 1900s would race each other to the next town over from them and that they were allowed to cut through farmers' fields or over fences, or take any other shortcuts, in order to make it to the next town first. This was sometimes called steeple chase as the only visible landmark in the next town was often the steeple.",onChange:function(t){o(t)},value:c,getSpan:function(t){return Object(O.a)(Object(O.a)({},t),{},{tag:l,color:d[l]})}})})}),Object(a.jsx)(j.a,{p:2,children:Object(a.jsx)(W.a,{variant:"outlined",children:Object(a.jsxs)(G.a,{id:"demo-simple-select-disabled",value:l,onChange:function(t){return u(t.target.value)},children:[Object(a.jsx)(J.a,{value:"tagA",children:"tagA"}),Object(a.jsx)(J.a,{value:"tagB",children:"tagB"}),Object(a.jsx)(J.a,{value:"tagC",children:"tagC"})]})})}),Object(a.jsx)(j.a,{pt:2,children:Object(a.jsx)("h3",{children:"Current Stored Value"})}),Object(a.jsx)(P.a,{elevation:2,className:t.pre,children:Object(a.jsx)("pre",{children:JSON.stringify(c,null,2)})}),Object(a.jsx)(j.a,{pt:3,children:Object(a.jsx)("h3",{children:"Sample Code"})}),Object(a.jsx)(j.a,{pb:3,children:Object(a.jsx)(z.a,{language:"javascript",style:U.a,children:'\nimport { TextAnnotateBlend } from "react-text-annotate-blend";\n\nApp = () => {\n    const [value, setValue] = useState(init);\n    const [tag, setTag] = useState("tagA");\n\n    const handleChange = (value) => {\n        setValue(value);\n    };\n\n    const COLORS = {\n        tagA: "rgb(179, 245, 66)",\n        tagB: "#42f5f5",\n    };\n\n    return (\n        <>\n        <TextAnnotateBlend\n            style={{\n            maxWidth: 500,\n            fontSize: "1.2rem",\n            }}\n            content="This component lets you blend annotations!"\n            onChange={handleChange}\n            value={value}\n            getSpan={(span) => ({\n                ...span,\n                tag: tag,\n                color: COLORS[tag],\n            })}\n        />\n        <select value={tag} onChange={(e) => setTag(e.target.value)}>\n            <option value="tagA">tagA</option>\n            <option value="tagB">tagB</option>\n        </select>\n\n        <pre>{JSON.stringify(value, null, 2)}</pre>\n    </>\n);\n    }'})}),Object(a.jsx)(j.a,{pt:3,children:Object(a.jsx)("h3",{children:"Props (Coming Soon)"})})]})}var X=Object(d.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function H(){var t=X();return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(s.a,{}),Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(f.a,{position:"static",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"}),Object(a.jsx)(l.a,{variant:"h6",className:t.title,children:"react-text-annotate-blend"}),Object(a.jsx)(g.a,{color:"inherit",href:"https://github.com/smhaley/react-text-annotate-blend",children:"source"})]})})}),Object(a.jsx)(u.a,{maxWidth:"md",style:{height:"100%"},children:Object(a.jsx)(j.a,{m:3,children:Object(a.jsx)(q,{})})})]})}var K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))},Q=n(66),Y=n(354),Z=Object(Q.a)({props:{MuiButtonBase:{disableRipple:!0}}});i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Y.a,{theme:Z,children:Object(a.jsx)(H,{})})}),document.getElementById("root")),K()}},[[305,1,2]]]);
//# sourceMappingURL=main.871fa539.chunk.js.map