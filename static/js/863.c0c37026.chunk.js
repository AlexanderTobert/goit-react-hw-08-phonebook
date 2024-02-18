"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[863],{9055:function(e,n,r){r.d(n,{z:function(){return k}});var i=r(4925),a=r(1413),t=r(9439),l=r(2791);var s=(0,r(9886).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,t.Z)(s,2),c=(o[0],o[1]),d=r(5113),u=r(6992),m=r(184),f=["children","className"];function v(e){var n=e.children,r=e.className,t=(0,i.Z)(e,f),s=(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,u.cx)("chakra-button__icon",r);return(0,m.jsx)(d.m.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},t),{},{className:o,children:s}))}v.displayName="ButtonIcon";var p=r(4942),h=r(2577),x=["label","placement","spacing","children","className","__css"];function Z(e){var n=e.label,r=e.placement,t=e.spacing,s=void 0===t?"0.5rem":t,o=e.children,c=void 0===o?(0,m.jsx)(h.$,{color:"currentColor",width:"1em",height:"1em"}):o,f=e.className,v=e.__css,Z=(0,i.Z)(e,x),g=(0,u.cx)("chakra-button__spinner",f),y="start"===r?"marginEnd":"marginStart",b=(0,l.useMemo)((function(){var e;return(0,a.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,p.Z)(e,y,n?s:0),(0,p.Z)(e,"fontSize","1em"),(0,p.Z)(e,"lineHeight","normal"),e),v)}),[v,n,y,s]);return(0,m.jsx)(d.m.div,(0,a.Z)((0,a.Z)({className:g},Z),{},{__css:b,children:c}))}Z.displayName="ButtonSpinner";var g=r(4591),y=r(5597),b=r(6516),_=r(2996),N=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,y.G)((function(e,n){var r=c(),s=(0,b.mq)("Button",(0,a.Z)((0,a.Z)({},r),e)),o=(0,_.Lr)(e),f=o.isDisabled,v=void 0===f?null==r?void 0:r.isDisabled:f,p=o.isLoading,h=o.isActive,x=o.children,y=o.leftIcon,k=o.rightIcon,j=o.loadingText,C=o.iconSpacing,q=void 0===C?"0.5rem":C,S=o.type,F=o.spinner,B=o.spinnerPlacement,R=void 0===B?"start":B,P=o.className,w=o.as,E=(0,i.Z)(o,N),G=(0,l.useMemo)((function(){var e=(0,a.Z)((0,a.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!r&&{_focus:e})}),[s,r]),T=function(e){var n=(0,l.useState)(!e),r=(0,t.Z)(n,2),i=r[0],a=r[1];return{ref:(0,l.useCallback)((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:i?"button":void 0}}(w),L=T.ref,O=T.type,D={rightIcon:k,leftIcon:y,iconSpacing:q,children:x};return(0,m.jsxs)(d.m.button,(0,a.Z)((0,a.Z)({ref:(0,g.qq)(n,L),as:w,type:null!=S?S:O,"data-active":(0,u.PB)(h),"data-loading":(0,u.PB)(p),__css:G,className:(0,u.cx)("chakra-button",P)},E),{},{disabled:v||p,children:[p&&"start"===R&&(0,m.jsx)(Z,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:q,children:F}),p?j||(0,m.jsx)(d.m.span,{opacity:0,children:(0,m.jsx)(I,(0,a.Z)({},D))}):(0,m.jsx)(I,(0,a.Z)({},D)),p&&"end"===R&&(0,m.jsx)(Z,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:q,children:F})]}))}));function I(e){var n=e.leftIcon,r=e.rightIcon,i=e.children,a=e.iconSpacing;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(v,{marginEnd:a,children:n}),i,r&&(0,m.jsx)(v,{marginStart:a,children:r})]})}k.displayName="Button"},5350:function(e,n,r){r.d(n,{NI:function(){return I},NJ:function(){return k},e:function(){return y}});var i=r(1413),a=r(4925),t=r(9439),l=r(9886),s=r(4591),o=r(5597),c=r(6516),d=r(2996),u=r(5113),m=r(6992),f=r(2791),v=r(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,t.Z)(x,2),g=Z[0],y=Z[1],b=(0,l.k)({strict:!1,name:"FormControlContext"}),_=(0,t.Z)(b,2),N=_[0],k=_[1];var I=(0,o.G)((function(e,n){var r=(0,c.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,c=e.isReadOnly,d=(0,a.Z)(e,p),u=(0,f.useId)(),v=n||"field-".concat(u),h="".concat(v,"-label"),x="".concat(v,"-feedback"),Z="".concat(v,"-helptext"),g=(0,f.useState)(!1),y=(0,t.Z)(g,2),b=y[0],_=y[1],N=(0,f.useState)(!1),k=(0,t.Z)(N,2),I=k[0],j=k[1],C=(0,f.useState)(!1),q=(0,t.Z)(C,2),S=q[0],F=q[1],B=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:Z},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)}))})}),[Z]),R=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(S),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(c),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,o,S,l,c,h]),P=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&_(!0)})),"aria-live":"polite"})}),[x]),w=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),d),{},{ref:n,role:"group","data-focus":(0,m.PB)(S),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(c)})}),[d,o,S,l,c]),E=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!c,isDisabled:!!o,isFocused:!!S,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:b,setHasFeedbackText:_,hasHelpText:I,setHasHelpText:j,id:v,labelId:h,feedbackId:x,helpTextId:Z,htmlProps:d,getHelpTextProps:B,getErrorMessageProps:P,getRootProps:w,getLabelProps:R,getRequiredIndicatorProps:E}}((0,d.Lr)(e)),o=l.getRootProps,x=(l.htmlProps,(0,a.Z)(l,h)),Z=(0,m.cx)("chakra-form-control",e.className);return(0,v.jsx)(N,{value:x,children:(0,v.jsx)(g,{value:r,children:(0,v.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:Z,__css:r.container}))})})}));I.displayName="FormControl",(0,o.G)((function(e,n){var r=k(),a=y(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:t}))})).displayName="FormHelperText"},7438:function(e,n,r){r.d(n,{l:function(){return f}});var i=r(1413),a=r(4925),t=r(5350),l=r(5597),s=r(6516),o=r(2996),c=r(5113),d=r(6992),u=r(184),m=["className","children","requiredIndicator","optionalIndicator"],f=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),f=(0,o.Lr)(e),p=(f.className,f.children),h=f.requiredIndicator,x=void 0===h?(0,u.jsx)(v,{}):h,Z=f.optionalIndicator,g=void 0===Z?null:Z,y=(0,a.Z)(f,m),b=(0,t.NJ)(),_=null!=(r=null==b?void 0:b.getLabelProps(y,n))?r:(0,i.Z)({ref:n},y);return(0,u.jsxs)(c.m.label,(0,i.Z)((0,i.Z)({},_),{},{className:(0,d.cx)("chakra-form__label",f.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[p,(null==b?void 0:b.isRequired)?x:g]}))}));f.displayName="FormLabel";var v=(0,l.G)((function(e,n){var r=(0,t.NJ)(),a=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,d.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(c.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:l}))}));v.displayName="RequiredIndicator"},3004:function(e,n,r){r.d(n,{J1:function(){return Z}});var i=r(1413),a=r(9439),t=r(5350),l=r(9640),s=r(9886),o=r(5597),c=r(6516),d=r(2996),u=r(5113),m=r(6992),f=r(184),v=(0,s.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),p=(0,a.Z)(v,2),h=p[0],x=p[1],Z=(0,o.G)((function(e,n){var r=(0,c.jC)("FormError",e),a=(0,d.Lr)(e),l=(0,t.NJ)();return(null==l?void 0:l.isInvalid)?(0,f.jsx)(h,{value:r,children:(0,f.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},null==l?void 0:l.getErrorMessageProps(a,n)),{},{className:(0,m.cx)("chakra-form__error-message",e.className),__css:(0,i.Z)({display:"flex",alignItems:"center"},r.text)}))}):null}));Z.displayName="FormErrorMessage",(0,o.G)((function(e,n){var r=x(),a=(0,t.NJ)();if(!(null==a?void 0:a.isInvalid))return null;var s=(0,m.cx)("chakra-form__error-icon",e.className);return(0,f.jsx)(l.J,(0,i.Z)((0,i.Z)({ref:n,"aria-hidden":!0},e),{},{__css:r.icon,className:s,children:(0,f.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"},7236:function(e,n,r){r.d(n,{I:function(){return h}});var i=r(1413),a=r(4925),t=r(5350),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(e){var n=function(e){var n,r,s,c=(0,t.NJ)(),d=e.id,u=e.disabled,m=e.readOnly,f=e.required,v=e.isRequired,p=e.isInvalid,h=e.isReadOnly,x=e.isDisabled,Z=e.onFocus,g=e.onBlur,y=(0,a.Z)(e,o),b=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&b.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&b.push(c.helpTextId);return(0,i.Z)((0,i.Z)({},y),{},{"aria-describedby":b.join(" ")||void 0,id:null!=d?d:null==c?void 0:c.id,isDisabled:null!=(n=null!=u?u:x)?n:null==c?void 0:c.isDisabled,isReadOnly:null!=(r=null!=m?m:h)?r:null==c?void 0:c.isReadOnly,isRequired:null!=(s=null!=f?f:v)?s:null==c?void 0:c.isRequired,isInvalid:null!=p?p:null==c?void 0:c.isInvalid,onFocus:(0,l.v0)(null==c?void 0:c.onFocus,Z),onBlur:(0,l.v0)(null==c?void 0:c.onBlur,g)})}(e),r=n.isDisabled,c=n.isInvalid,d=n.isReadOnly,u=n.isRequired,m=(0,a.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:d,required:u,"aria-invalid":(0,l.Qm)(c),"aria-required":(0,l.Qm)(u),"aria-readonly":(0,l.Qm)(d)})}var d=r(5597),u=r(6516),m=r(2996),f=r(5113),v=r(184),p=["htmlSize"],h=(0,d.G)((function(e,n){var r=e.htmlSize,t=(0,a.Z)(e,p),s=(0,u.jC)("Input",t),o=c((0,m.Lr)(t)),d=(0,l.cx)("chakra-input",e.className);return(0,v.jsx)(f.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:d}))}));h.displayName="Input",h.id="Input"},6582:function(e,n,r){r.d(n,{k:function(){return c}});var i=r(1413),a=r(4925),t=r(5597),l=r(5113),s=r(184),o=["direction","align","justify","wrap","basis","grow","shrink"],c=(0,t.G)((function(e,n){var r=e.direction,t=e.align,c=e.justify,d=e.wrap,u=e.basis,m=e.grow,f=e.shrink,v=(0,a.Z)(e,o),p={display:"flex",flexDirection:r,alignItems:t,justifyContent:c,flexWrap:d,flexBasis:u,flexGrow:m,flexShrink:f};return(0,s.jsx)(l.m.div,(0,i.Z)({ref:n,__css:p},v))}));c.displayName="Flex"},5550:function(e,n,r){r.d(n,{g:function(){return f}});var i=r(1413),a=r(4925),t=r(5113),l=r(184),s=function(e){return(0,l.jsx)(t.m.div,(0,i.Z)((0,i.Z)({className:"chakra-stack__item"},e),{},{__css:(0,i.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};s.displayName="StackItem";var o=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);var c=r(2791);var d=r(5597),u=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],m=(0,d.G)((function(e,n){var r=e.isInline,d=e.direction,m=e.align,f=e.justify,v=e.spacing,p=void 0===v?"0.5rem":v,h=e.wrap,x=e.children,Z=e.divider,g=e.className,y=e.shouldWrapChildren,b=(0,a.Z)(e,u),_=r?"row":null!=d?d:"column",N=(0,c.useMemo)((function(){return function(e){var n,r,i=e.spacing,a=e.direction,t={column:{my:i,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:i,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:i,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:i,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(n=a,r=function(e){return t[e]},Array.isArray(n)?n.map((function(e){return null===e?null:r(e)})):(0,o.Kn)(n)?Object.keys(n).reduce((function(e,i){return e[i]=r(n[i]),e}),{}):null!=n?r(n):null)}}({spacing:p,direction:_})}),[p,_]),k=!!Z,I=!y&&!k,j=(0,c.useMemo)((function(){var e=function(e){return c.Children.toArray(e).filter((function(e){return(0,c.isValidElement)(e)}))}(x);return I?e:e.map((function(n,r){var i="undefined"!==typeof n.key?n.key:r,a=r+1===e.length,t=y?(0,l.jsx)(s,{children:n},i):n;if(!k)return t;var o=(0,c.cloneElement)(Z,{__css:N}),d=a?null:o;return(0,l.jsxs)(c.Fragment,{children:[t,d]},i)}))}),[Z,N,k,I,y,x]),C=(0,o.cx)("chakra-stack",g);return(0,l.jsx)(t.m.div,(0,i.Z)((0,i.Z)({ref:n,display:"flex",alignItems:m,justifyContent:f,flexDirection:_,flexWrap:h,gap:k?void 0:p,className:C},b),{},{children:j}))}));m.displayName="Stack";var f=(0,d.G)((function(e,n){return(0,l.jsx)(m,(0,i.Z)((0,i.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));f.displayName="VStack"},824:function(e,n,r){r.d(n,{xu:function(){return d}});var i=r(1413),a=r(4925),t=r(5113),l=r(5597),s=r(184),o=["size","centerContent"],c=["size"],d=(0,t.m)("div");d.displayName="Box";var u=(0,l.G)((function(e,n){var r=e.size,t=e.centerContent,l=void 0===t||t,c=(0,a.Z)(e,o),u=l?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,s.jsx)(d,(0,i.Z)({ref:n,boxSize:r,__css:(0,i.Z)((0,i.Z)({},u),{},{flexShrink:0,flexGrow:0})},c))}));u.displayName="Square",(0,l.G)((function(e,n){var r=e.size,t=(0,a.Z)(e,c);return(0,s.jsx)(u,(0,i.Z)({size:r,ref:n,borderRadius:"9999px"},t))})).displayName="Circle"},4591:function(e,n,r){r.d(n,{lq:function(){return t},qq:function(){return l}});var i=r(2791);function a(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(r){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.forEach((function(n){a(n,e)}))}}function l(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,i.useMemo)((function(){return t.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=863.c0c37026.chunk.js.map