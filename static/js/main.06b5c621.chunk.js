(this["webpackJsonpactivity-tracker"]=this["webpackJsonpactivity-tracker"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(19),l=a.n(c),i=a(37),o=a.n(i),m=a(54),s=a(17),u=a(10),d=a.n(u),f=a(55),E=a.n(f),p=a(38),h=a.n(p),v=["Date","Start Time","End Time","Activity Duration"],b=function(){return r.a.createElement("thead",{key:h()()},r.a.createElement("tr",null,v.map((function(e){return r.a.createElement("th",{key:h()(),className:"header-text"},e)}))))},Y=function(e){var t=e.bodies;return r.a.createElement("tbody",null,t.length>0?t.map((function(e,t){var a=d()(e.start_time,"MMM DD YYYY hh:mmA"),n=d()(e.end_time,"MMM DD YYYY hh:mmA"),c=a.format("MMM DD YYYY"),l=a.format("hh:mm A"),i=n.format("hh:mm A"),o=d.a.duration(n.diff(a)),m=o.hours(),s=o.minutes();return r.a.createElement("tr",{key:"activity-tracker".concat(t)},r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,i),r.a.createElement("td",null,m>0?"".concat(m," h ").concat(s," m"):"".concat(s," m")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5"},"No Record found")))},M=function(e){var t=e.bodies;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(Y,{bodies:t}))};a(67),a(68);var y=function(e){var t=e.selectedUser,a=e.toggle,c=t.activityPeriod,l=Object(n.useState)(""),i=Object(s.a)(l,2),o=i[0],m=i[1],u=o?c.filter((function(e){return function(e,t){var a=d()(t,"MMM DD YYYY"),n=d()(e,"MMM DD YYYY");return d()(a).isSame(d()(n))}(o,e.start_time)})):c;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal_content"},r.a.createElement("div",{className:"datepicker-container"},r.a.createElement(E.a,{selected:o,onChange:m,placeholderText:"MM/DD/YYYY",className:"date-picker",maxDate:d.a.now()}),r.a.createElement("span",{className:"close",onClick:function(){return a(!1)}},"\xd7")),r.a.createElement(M,{bodies:u})))};a(127);var k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],d=i[1],f=Object(n.useState)({}),E=Object(s.a)(f,2),p=E[0],h=E[1];function v(){return(v=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jsonbin.io/b/5f24f9bb6f8e4e3faf2823f2/3");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.members);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"userlist-container"},a&&a.map((function(e){var t=e.id,a=e.real_name,n=e.tz,c=e.activity_periods;return r.a.createElement("div",{key:t,className:"userlist",onClick:function(){h({id:t,activityPeriod:c}),d(!0)}},r.a.createElement("img",{alt:"alt ".concat(a),src:"https://robohash.org/galinda?set=set2"}),r.a.createElement("p",null,a),r.a.createElement("p",null,n))})),u&&r.a.createElement(y,{selectedUser:p,toggle:d}))};a(128);var D=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Activity Tracker"),r.a.createElement(k,null))};a(129);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))},58:function(e,t,a){e.exports=a(131)},68:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.06b5c621.chunk.js.map