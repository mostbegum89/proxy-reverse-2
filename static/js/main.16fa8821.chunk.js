(this.webpackJsonpreverserfront=this.webpackJsonpreverserfront||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(17),c=a.n(m),s=(a(24),a(25),a(2)),l=a(3),o=a(6),i=a(5),u=a(4),h=a.n(u),d=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=t.call.apply(t,[this].concat(r))).state={num:"",reverseNum:""},e.handleChange=function(t){e.setState({num:t.target.value})},e.handleSubmit=function(){h.a.post("/reverser",e.state).then((function(t){e.setState({reverseNum:t.data.num})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container p-5"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{htmlFor:"number",className:"sr-only"},"Number"),r.a.createElement("input",{type:"number",value:this.state.num,className:"form-control",id:"number",onChange:this.handleChange,placeholder:"1234"})),r.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:this.handleSubmit},"submit")),r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Reverse Number"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Click kore dekhe nao magic"),r.a.createElement("p",{className:"card-text"},this.state.reverseNum?this.state.reverseNum:""))))}}]),a}(n.Component),b=a(18),v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=t.call.apply(t,[this].concat(r))).state={num:"",sumNum:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){h.a.post("/summation",e.state).then((function(t){e.setState({sumNum:t.data.sum})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container p-5"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{htmlFor:"number",className:"sr-only"},"Number"),r.a.createElement("input",{type:"number",value:this.state.num,className:"form-control",name:"num",onChange:this.handleChange,placeholder:"1234"})),r.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:this.handleSubmit},"submit")),r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Summation"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Click kore dekhe nao magic"),r.a.createElement("p",{className:"card-text"},this.state.sumNum?this.state.sumNum:""))))}}]),a}(n.Component);var N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(v,null))};a(43),a(16),a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.16fa8821.chunk.js.map