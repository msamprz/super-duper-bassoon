(window.webpackJsonp=window.webpackJsonp||[]).push([["ResetPasswordModal"],{1215:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(1),o=r.n(s),i=r(4),l=r.n(i),c=r(21),p=r(18),u=r.n(p),d=(r(55),r(1177)),f=r.n(d),m=(r(1178),r(255)),_=r.n(m),b=(r(476),r(312)),w=r.n(b),v=(r(477),r(11)),g=r(2),y=r(9),h=r(49),E=r(74),O=r(8);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t,r,a,n,s,o){try{var i=e[s](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(a,n)}function A(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N={password:""},C=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=P(this,(e=j(t)).call.apply(e,[this].concat(n)))).onResetComplete=function(e,t){if(t.setSubmitting(!1),t.resetForm({password:""}),e)return console.error(e),void t.setStatus({error_msg:e});t.setStatus({reset_complete:!0}),Object(O.c)().then((function(){Object(E.redirectToLogin)()}))},r.handleSubmit=function(e,t){var a=r.props.verification_code,n={reset_password:1,new_password:e.password,verification_code:a};O.b.resetPassword(n).then(function(){var e,a=(e=regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.error?r.onResetComplete(a.error.message,t):r.onResetComplete(null,t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function o(e){R(s,a,n,o,i,"next",e)}function i(e){R(s,a,n,o,i,"throw",e)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}())},r.validateReset=function(e){var t={};return e.password&&(e.password.length<6||!Object(h.f)(e.password))&&(t.password=!0),t},r}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.a.createElement("div",{className:"reset-password"},n.a.createElement(c.c,{initialValues:N,initialStatus:{reset_complete:!1,error_msg:""},validate:this.validateReset,onSubmit:this.handleSubmit},(function(e){var t=e.handleBlur,r=e.errors,a=e.values,s=e.touched,o=e.isSubmitting,i=e.handleChange,p=e.status;return n.a.createElement(c.b,null,n.a.createElement(n.a.Fragment,null,p.reset_complete?n.a.createElement("div",{className:"reset-password__password-selection"},n.a.createElement("p",{className:"reset-password__heading"},n.a.createElement(v.a,{i18n_default_text:"Your password has been changed"})),n.a.createElement("p",{className:"reset-password__subtext"},n.a.createElement(v.a,{i18n_default_text:"We will now redirect you to the login page."}))):n.a.createElement("div",{className:"reset-password__password-selection"},n.a.createElement("p",{className:"reset-password__heading"},n.a.createElement(v.a,{i18n_default_text:"Choose a new password"})),n.a.createElement("fieldset",{className:"reset-password__fieldset"},n.a.createElement(w.a,{input:a.password,error:s.password&&r.password},n.a.createElement(_.a,{className:"reset-password__password-field",name:"password",label:Object(g.localize)("Create a password"),onChange:i,onBlur:t,error:s.password&&r.password,value:a.password,"data-lpignore":"true",required:!0}))),n.a.createElement("p",{className:"reset-password__subtext"},p.error_msg?n.a.createElement(v.a,{i18n_default_text:"{{error_msg}}",values:{error_msg:p.error_msg}}):n.a.createElement(v.a,{i18n_default_text:"Strong passwords contain at least 6 characters, combine uppercase and lowercase letters, numbers, and symbols."})),n.a.createElement(u.a,{className:l()("reset-password__btn",{"reset-password__btn--disabled":!a.password||r.password||o}),type:"submit",is_disabled:!a.password||r.password||o,primary:!0},n.a.createElement(v.a,{i18n_default_text:"Reset my password"})))))})))}}])&&A(r.prototype,a),s&&A(r,s),t}(n.a.Component);C.propTypes={enableApp:o.a.func,isModalVisible:o.a.func,verification_code:o.a.string};var M=function(e){var t=e.enableApp,r=e.disableApp,a=e.is_loading,s=e.is_visible,o=e.verification_code,i=e.toggleResetPasswordModal;return n.a.createElement(f.a,{is_visible:s,disableApp:r,enableApp:t,is_loading:a},n.a.createElement(C,{verification_code:o,isModalVisible:i,enableApp:t}))};M.propTypes={disableApp:o.a.func,enableApp:o.a.func,is_loading:o.a.bool,is_visible:o.a.bool,toggleResetPasswordModal:o.a.func,verification_code:o.a.string};var k=Object(y.b)((function(e){var t=e.ui,r=e.client;return{is_visible:t.is_reset_password_modal_visible,enableApp:t.enableApp,disableApp:t.disableApp,is_loading:t.is_loading,toggleResetPasswordModal:t.toggleResetPasswordModal,verification_code:r.verification_code.reset_password}}))(M);r.d(t,"default",(function(){return k}))}}]);
//# sourceMappingURL=ResetPasswordModal.3303d3abe4fc61a21762.js.map