(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),a=(n(12),n(5)),u=n(7),d=n(17),s=(n(13),n(0));function l(t){var e=t.todo,n=t.toggleTodo,c=e.id,o=e.task,r=e.completed;return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",checked:r,onChange:function(){n(c)}}),o]})}function j(t){var e=t.todos,n=t.toggleTodo;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(l,{todo:t,toggleTodo:n},t.id)}))})}var f="todoApp.todos";function b(){var t=Object(c.useState)([{id:1,task:"Task 1",completed:!1},{id:2,task:"Task 2",completed:!1},{id:3,task:"Task 3",completed:!1}]),e=Object(u.a)(t,2),n=e[0],o=e[1],r=Object(c.useRef)();Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(f));t&&o(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(f,JSON.stringify(n))}),[n]);return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(j,{todos:n,toggleTodo:function(t){var e=Object(a.a)(n),c=e.find((function(e){return e.id===t}));c.completed=!c.completed,o(e)}}),Object(s.jsx)("input",{ref:r,type:"text",placeholder:"New task"}),Object(s.jsx)("button",{onClick:function(){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(a.a)(e),[{id:d.a.v4(),task:t,completed:!1}])})),r.current.value=null)},children:"\u2795"}),Object(s.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));o(t)},children:"\ud83d\uddd1\ufe0f"}),Object(s.jsxs)("div",{children:["Te quedan ",n.filter((function(t){return!t.completed})).length," tareas por terminar"]})]})}var p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.dff8ea85.chunk.js.map