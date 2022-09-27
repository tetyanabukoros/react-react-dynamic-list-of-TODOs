(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),l=c(4),n=c(2),d=c(1);c(13),c(14),c(15);function i(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o,r=c(7),j=c.n(r),b=c(0),u=function(e){var t=e.preparedTodos,c=e.setSelectedTodoId,s=e.selectedTodoId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[t&&Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(b.jsx)("td",{className:"is-vcentered",children:Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}):Object(b.jsx)("td",{className:"is-vcentered"}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:j()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(b.jsxs)("span",{className:"icon",children:[Object(b.jsx)("i",{className:j()({"far fa-eye":s!==e.id,"far fa-eye-slash":s===e.id})})," "]})})})]},e.id)}))})]})},h=function(e){var t=e.completeTodoFilter,c=e.setCompleteTodoFilter,s=e.query,a=e.setQuery;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{name:"filterGoods",value:t,"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:""!==s&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},m=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.setSelectedTodosId,c=e.selectedTodo,s=Object(d.useState)(null),a=Object(n.a)(s,2),l=a[0],o=a[1];return Object(d.useEffect)((function(){var e;(e=Number(null===c||void 0===c?void 0:c.userId),i("/users/".concat(e))).then(o)}),[c]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),l?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #"," ",null===c||void 0===c?void 0:c.id]}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(null)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[(null===c||void 0===c?void 0:c.completed)&&Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}),!(null===c||void 0===c?void 0:c.completed)&&Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(l.email),children:l.name})]})]})]}):Object(b.jsx)(m,{})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(o||(o={}));var x=function(){var e=Object(d.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)("all"),r=Object(n.a)(a,2),j=r[0],x=r[1],p=Object(d.useState)(""),f=Object(n.a)(p,2),v=f[0],N=f[1],y=Object(d.useState)(null),g=Object(n.a)(y,2),T=g[0],k=g[1],S=v.toLowerCase().trim();Object(d.useEffect)((function(){i("/todos").then(s)}),[]);var C=Object(l.a)(c);switch(j){case o.active:C=Object(l.a)(c).filter((function(e){return!1===e.completed}));break;case o.completed:C=Object(l.a)(c).filter((function(e){return!0===e.completed}));break;default:C=Object(l.a)(c)}var w=C.filter((function(e){return e.title.toLowerCase().includes(S)})),I=c.find((function(e){return e.id===T}))||null;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(h,{completeTodoFilter:j,setCompleteTodoFilter:x,query:v,setQuery:N})}),Object(b.jsx)("div",{className:"block",children:c.length?Object(b.jsx)(u,{preparedTodos:w,setSelectedTodoId:k,selectedTodoId:T}):Object(b.jsx)(m,{})})]})})}),T&&Object(b.jsx)(O,{setSelectedTodosId:k,selectedTodo:I})]})};a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fff31e98.chunk.js.map