(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),c=t(3),n=t.n(c),s=t(4),u=Object(r.createContext)(null),i=function(){var e=Object(r.useContext)(u).state,a=e.display,t=e.isFirstNumReady,c=e.firstNum,n=t?c:a;return l.a.createElement("div",null,l.a.createElement("div",{className:"result__screen"},l.a.createElement("h2",null,n)))},m=(t(10),"addDigit"),d="C",o="%",p="del",y="+",N="-",b="X",v="/",f="=",E=function(e){var a=e.value,t=Object(r.useContext)(u).dispatch,c="del"===a?l.a.createElement("i",{className:"fas fa-backspace"}):a;return l.a.createElement("div",null,l.a.createElement("button",{className:"keypad__key keyFun",onClick:function(){t({type:a,payload:a})}},c))},j=function(e){var a=e.value,t=Object(r.useContext)(u).dispatch;return l.a.createElement("div",null,l.a.createElement("button",{className:"keypad__key keyNum",onClick:function(){t({type:m,payload:a})}},a))},O=function(){return l.a.createElement("div",{className:"keypad__container"},l.a.createElement("div",{className:"keypad__row"},l.a.createElement(E,{value:"C"}),l.a.createElement(E,{value:"del"}),l.a.createElement(E,{value:"%"}),l.a.createElement(E,{value:"/"})),l.a.createElement("div",{className:"keypad__row"},l.a.createElement(j,{value:7}),l.a.createElement(j,{value:8}),l.a.createElement(j,{value:9}),l.a.createElement(E,{value:"X"})),l.a.createElement("div",{className:"keypad__row"},l.a.createElement(j,{value:4}),l.a.createElement(j,{value:5}),l.a.createElement(j,{value:6}),l.a.createElement(E,{value:"-"})),l.a.createElement("div",{className:"keypad__row"},l.a.createElement(j,{value:1}),l.a.createElement(j,{value:2}),l.a.createElement(j,{value:3}),l.a.createElement(E,{value:"+"})),l.a.createElement("div",{className:"keypad__row"},l.a.createElement(j,{value:0}),l.a.createElement(E,{value:"."}),l.a.createElement(E,{value:"="})))},_=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(i,null),l.a.createElement(O,null))},k=t(1),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;switch(t){case y:return R(e,a);case N:return console.log("sub"),h(e,a);case b:return w(e,a);case v:return C(e,a);default:return a}},R=function(e,a){return e+a},h=function(e,a){return e-a},w=function(e,a){return e*a},C=function(e,a){return e/a},g=(Number.concatenate,function(e,a){switch(a.type){case m:return 0===e.display||e.isFirstNumReady?Object(k.a)(Object(k.a)({},e),{},{display:a.payload,isFirstNumReady:!1}):Object(k.a)(Object(k.a)({},e),{},{display:Number(e.display+""+a.payload),isFirstNumReady:!1});case y:return e.firstNum?Object(k.a)(Object(k.a)({},e),{},{firstNum:F(e.firstNum,e.display,y),display:0,isFirstNumReady:!0,operator:y}):Object(k.a)(Object(k.a)({},e),{},{firstNum:e.display,display:0,isFirstNumReady:!0,operator:y});case N:return e.firstNum?Object(k.a)(Object(k.a)({},e),{},{firstNum:F(e.firstNum,e.display,N),display:0,isFirstNumReady:!0,operator:N}):Object(k.a)(Object(k.a)({},e),{},{firstNum:e.display,display:0,isFirstNumReady:!0,operator:N});case b:return e.firstNum?Object(k.a)(Object(k.a)({},e),{},{firstNum:F(e.firstNum,e.display,b),display:0,isFirstNumReady:!0,operator:b}):Object(k.a)(Object(k.a)({},e),{},{firstNum:e.display,display:0,isFirstNumReady:!0,operator:b});case v:return e.firstNum?Object(k.a)(Object(k.a)({},e),{},{firstNum:F(e.firstNum,e.display,v),display:0,isFirstNumReady:!0,operator:v}):Object(k.a)(Object(k.a)({},e),{},{firstNum:e.display,display:0,isFirstNumReady:!0,operator:v});case f:return Object(k.a)(Object(k.a)({},e),{},{firstNum:null,display:F(e.firstNum,e.display,e.operator),operator:"="});case d:return Object(k.a)(Object(k.a)({},e),{},{firstNum:null,display:0,isFirstNumReady:!1,operator:""});case p:return Object(k.a)(Object(k.a)({},e),{},{display:Number(e.display.toString().slice(0,-1))});case o:return Object(k.a)(Object(k.a)({},e),{},{display:.01*e.display})}}),x=function(){return{display:0,firstNum:null,operator:"",isFirstNumReady:!1}},J=function(){var e=Object(r.useReducer)(g,{},x),a=Object(s.a)(e,2),t=a[0],c=a[1];return(l.a.createElement(u.Provider,{value:{state:t,dispatch:c}},l.a.createElement(_,null)))};n.a.render(l.a.createElement(J,null),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.14cb1eb7.chunk.js.map