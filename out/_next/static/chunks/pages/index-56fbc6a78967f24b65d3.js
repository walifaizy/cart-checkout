_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("rePB"),a=n("8NEc"),l=n("LCU/"),c=n("vOnD"),s=n("nOHt"),p=n.n(s),u=n("OnLm"),d=i.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=c.b.div.withConfig({displayName:"login__Wrapper",componentId:"sc-1dyu2qv-0"})(["display:flex;flex-direction:column;width:70%;justify-content:center;align-items:center;height:80vh;"]),g=c.b.div.withConfig({displayName:"login__LoginBox",componentId:"sc-1dyu2qv-1"})(["background:#fff;padding:25px;box-sizing:border-box;width:50%;margin:10px 0;border:1px solid #e2e5f1;box-shadow:0 2px 35px 0 rgb(0 0 0 / 5%);border-radius:5px;"]),b=c.b.div.withConfig({displayName:"login__Title",componentId:"sc-1dyu2qv-2"})(["font-size:1.6rem;font-weight:600;margin-bottom:10px;"]),y=c.b.div.withConfig({displayName:"login__InputFormCtr",componentId:"sc-1dyu2qv-3"})(["display:flex;flex:1;flex-wrap:wrap;"]),v=c.b.div.withConfig({displayName:"login__InputCtr",componentId:"sc-1dyu2qv-4"})(["padding:10px 0;width:100%;.eachInput{width:100%;.flexBtn{display:flex;justify-content:center;align-items:center;flex:1;}}.spacer{height:8px;}.label{flex:1;font-weight:500;line-height:1.5;font-size:0.9rem;color:rgb(136,136,136);}&.desktopLocationCtr{display:none;}"]),x=c.b.div.withConfig({displayName:"login__InputFlexer",componentId:"sc-1dyu2qv-5"})(["width:100%;"]),w=c.b.div.withConfig({displayName:"login__BtnCtr",componentId:"sc-1dyu2qv-6"})(["padding:10px 0 0 0;display:flex;align-items:center;justify-content:flex-end;"]),_=c.b.div.withConfig({displayName:"login__BtnText",componentId:"sc-1dyu2qv-7"})([""]),O=function(){var e=Object(r.useContext)(u.a).userInfo,t=Object(r.useState)(e),n=t[0],i=t[1],c=Object(r.useState)({}),s=c[0],f=c[1],O=function(e){i(m(m({},n),{},Object(o.a)({},e.target.name,e.target.value))),f(m(m({},s),{},Object(o.a)({},e.target.name,null)))};return d(h,null,d(b,null,"Sign in to your account"),d(g,null," ",d(y,null,d(x,null,d(v,null,d("div",{className:"label"},"Email"),d("div",{className:"spacer"}),d("div",{className:"eachInput"},d(a.c,{placeholder:"Enter Email",name:"email",onChange:O,value:n.email,error:s.email}))),d(v,null,d("div",{className:"label"},"Password"),d("div",{className:"spacer"}),d("div",{className:"eachInput"},d(a.c,{placeholder:"Enter Password",name:"password",onChange:O,value:n.password,error:s.password,type:"password"}))))),d(w,null,d(a.b,{color:"#3866df",solid:!0,onClick:function(){(function(){var e=!0,t=m({},s);return l.a.isValidInput(n.email,"email")&&(e=!1,t.email="Email required"),n.password||(e=!1,t.password="Pasword required"),f(t),e})()&&p.a.push({pathname:"/cart"})}},d(_,null,"Submit")))))},j=i.a.createElement,C=c.b.div.withConfig({displayName:"pages__Flexer",componentId:"sc-1lsd1k5-0"})(["display:flex;flex-direction:column;flex:1;align-items:center;"]);t.default=function(e){return j(C,null,j(O,null))}},"8NEc":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?c(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return N})),n.d(t,"a",(function(){return S}));var m=n("rePB"),h=n("q1tI"),g=n.n(h),b=n("vOnD"),y=g.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}var x=b.b.div.withConfig({displayName:"input__Container",componentId:"jjssti-0"})(["position:relative;display:flex;align-items:stretch;input{padding:0px 8px;border:1px solid rgb(209,209,209);border-radius:4px;width:100%;font-size:1rem;height:36px;box-sizing:border-box;background:rgb(255,255,255);}&.inputError{input{border-color:rgb(171,19,10);}}"]),w=b.b.div.withConfig({displayName:"input__Wrapper",componentId:"jjssti-1"})([""]),_=b.b.div.withConfig({displayName:"input__Error",componentId:"jjssti-2"})(["font-size:0.8rem;line-height:1.5;margin-top:8px;color:rgb(171,19,10);"]),O=function(e){p(n,e);var t=v(n);function n(){var e;o(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),Object(m.a)(c(e),"state",{inFocus:!1}),Object(m.a)(c(e),"onChange",(function(t){e.props.onChange(t)})),e}return l(n,[{key:"render",value:function(){var e=this.props,t=e.error,n=e.value,o=e.type,a=void 0===o?"text":o,l=e.placeholder,c=i(e,["error","value","type","placeholder"]);this.state.inFocus;return y(w,null,y(x,{className:"".concat(t?"inputError":"")},y("input",r({type:a},c,{value:n,onChange:this.onChange,placeholder:l}))),t&&y(_,null,t))}}]),n}(g.a.PureComponent),j=g.a.createElement,C=b.b.div.withConfig({displayName:"button__Container",componentId:"gj1dmj-0"})(["padding:0;margin:0;border:none;background-color:","22;color:",";outline:none;padding:9px 20px;border-radius:4px;text-align:center;text-transform:capitalize;font-size:0.9rem;font-weight:500;line-height:1;cursor:pointer;position:relative;overflow:hidden;transform:translate3d(0,0,0);transition:all ease-in 0.2s;user-select:none;&.solid{background-color:",";color:#fff;}&.disabled{opacity:0.4;cursor:not-allowed;pointer-events:none;}&:after{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform 0.5s,opacity 1s;}&:active:after{transform:scale(0,0);opacity:0.2;transition:0s;}"],(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color})),N=function(e){var t=e.color,n=void 0===t?function(e){return e.theme.colors.positive}:t,o=e.children,a=void 0===o?"Button":o,l=e.solid,c=(e.transparent,e.light,e.className),s=void 0===c?"":c,p=e.disabled,u=(e.loading,e.noHover,i(e,["color","children","solid","transparent","light","className","disabled","loading","noHover"]));return j(C,r({},u,{className:"".concat(l?"solid":""," ").concat(p?"disabled":"","   ").concat(s," "),color:n}),a)},I=(n("Wf5n"),g.a.createElement);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}var P=Object(b.c)(["0%{opacity:0;transform:translateY(45px);}60%{opacity:0;}to{opacity:1;transform:translateY(0);}"]),k=b.b.div.withConfig({displayName:"alertBox__Container",componentId:"sc-9c79q7-0"})(["position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;z-index:25;width:0;height:0;overflow:hidden;&.showAlertCtr{width:100%;height:100%;animation:"," 0.3s ease-in both;z-index:25;}"],P),z=b.b.div.withConfig({displayName:"alertBox__Scrim",componentId:"sc-9c79q7-1"})(["position:fixed;top:0;width:100%;height:100%;display:block;background:rgba(136,136,136,0.133);z-index:25;"]),A=b.b.div.withConfig({displayName:"alertBox__Alert",componentId:"sc-9c79q7-2"})(["background-color:rgb(255,255,255);box-shadow:rgb(0 0 0 / 4%) 0px 1px 15px,rgb(0 0 0 / 4%) 0px 1px 6px;border-radius:4px;margin:10px 0;position:relative;overflow:hidden;height:0;width:0;&.showAlert{height:auto;width:260px;animation:"," 0.3s ease-in both;z-index:26;padding:20px;}.btnWrapper{display:flex;align-items:center;justify-content:space-around;}.children{margin-bottom:20px;display:flex;align-items:center;justify-content:center;flex-direction:column;line-height:1.5;text-align:center;color:rgb(136,136,136);}.title{text-align:center;margin:20px;font-weight:500;font-size:1.3rem;line-height:1.5;}"],P),S=function(e){p(n,e);var t=E(n);function n(){var e;o(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),Object(m.a)(c(e),"escFunction",(function(t){e.props.isOpen&&27===t.keyCode&&e.props.onCloseAlert()})),e}return l(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=e.isOpen,i=e.onCloseAlert,o=(e.onCancel,e.onConfirm),a=e.confirmBtnLabel,l=void 0===a?"Continue Shopping":a;return I(k,{className:r?"showAlertCtr":""},r?I(z,{onClick:i}):"",I(A,{className:r?"showAlert":""},I("h3",{className:"title"},n),I("div",{className:"children"},t),I("div",{className:"btnWrapper"},I(N,{color:"#3866df",solid:!0,onClick:o},l))))}}]),n}(g.a.PureComponent)},"LCU/":function(e,t,n){"use strict";t.a={isValidInput:function(e,t){switch(t){case"text":return!(e&&/^[A-Za-z]|[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(e));case"email":return!/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e);case"onlyNumber":return!/^\d+$/.test(e);case"alphaNum":return!(e&&/[a-zA-Z0-9]+/.test(e))}},validUAEPhoneNumber:function(e){return!(e&&/^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/.test(e))}}},Wf5n:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=i.a.createElement,l=o.b.div.withConfig({displayName:"items__ItemCtr",componentId:"sr1fhn-0"})([""]),c=o.b.div.withConfig({displayName:"items__Item",componentId:"sr1fhn-1"})(["background-color:rgb(255,255,255);margin-top:-1px;padding:14px 15px 15px;border-width:1px;border-style:solid;border-color:rgb(226,229,241);border-image:initial;display:flex;border-radius:5px;.imageCtr{width:25%;max-width:120px;}.imageCtr > img{display:block;max-width:100%;border-radius:5px;}"]),s=o.b.div.withConfig({displayName:"items__SummaryCtr",componentId:"sr1fhn-2"})(["flex:1 1 0%;margin:0px 15px 0px 15px;display:flex;justify-content:space-between;.brand{font-family:sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:15px;color:rgb(126,133,155);}.title{font-weight:600;font-size:14px;line-height:16px;margin-top:5px;}.deliver{font-size:0.85rem;margin-top:10px;}.date{color:rgb(55,174,2);}.priceWrapper{display:flex;justify-content:flex-start;font-size:0.85rem;.price{font-size:1.2rem;line-height:15px;margin:0px 2px;}}"]);t.a=function(e){var t=e.item;return a(i.a.Fragment,null,a(l,null,a(c,null,a("div",{className:"imagectr"},t&&t.imageURL&&a("img",{src:t&&t.imageURL})),a(s,null,a("div",null,a("div",{className:"brand"},t.brand),a("div",{className:"title"},t.title),a("div",{className:"deliver"},"Delivered by: ",a("span",{className:"date"},t.estimatedDeliveryDate)),a("div",{className:"deliver"},t.warranty)),a("div",{className:"priceWrapper"},a("span",null,"AED")," \xa0",a("div",{className:"price"}," ",t&&t.unitPrice))))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1,3]]]);