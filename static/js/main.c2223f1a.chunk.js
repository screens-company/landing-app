(this["webpackJsonpscreens-landing"]=this["webpackJsonpscreens-landing"]||[]).push([[0],{21:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t(3),c=t.n(r),a=t(8),o=t.n(a),d=(t(21),t(1)),s=t(2);function u(){var n=Object(d.a)(["\n  width: 100%;\n"]);return u=function(){return n},n}var p=s.a.div(u()),x=1e3;function l(){var n=Object(d.a)(["\n  width: 120px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: blue;\n  font-size: 12px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 6px;\n  border: 2px solid blue;\n"]);return l=function(){return n},n}function j(){var n=Object(d.a)(["\n  text-decoration: none;\n  color: blue;\n"]);return j=function(){return n},n}function f(){var n=Object(d.a)(["\n  width: 110px;\n  cursor: pointer;\n"]);return f=function(){return n},n}function b(){var n=Object(d.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0 20px;\n  background: white;\n  \n  @media screen and (min-width: ","px) {\n    padding: 0 100px;\n    height: 100px;\n  }\n"]);return b=function(){return n},n}var h=s.a.div(b(),x),g=s.a.img(f()),O=s.a.a(j()),v=s.a.div(l()),m={logo:t.p+"static/media/logo.a70edd9e.svg",about:t.p+"static/media/about.25e8737a.gif",conversationSearch:t.p+"static/media/conversationSearch.5548be96.svg",conversationApp:t.p+"static/media/conversationApp.e6992666.svg",conversationAccess:t.p+"static/media/conversationAccess.29c03525.svg",access:t.p+"static/media/access.a85a3749.svg",appsIcon:t.p+"static/media/appsIcon.2c11fc4d.png",securityBlock:t.p+"static/media/securityBlock.eeb19dc4.svg",securityData:t.p+"static/media/securityData.b0440522.svg",technologyIcon:t.p+"static/media/technologyIcon.92f233f1.png",aboutOne:t.p+"static/media/aboutOne.667194ba.svg",aboutTwo:t.p+"static/media/aboutTwo.3c3d7f71.svg",aboutThree:t.p+"static/media/aboutThree.e04cf1f5.svg"};function w(){return Object(i.jsxs)(h,{children:[Object(i.jsx)(O,{href:"/",children:Object(i.jsx)(g,{src:m.logo})}),Object(i.jsx)(O,{href:"mailto:myscreensapp@gmail.com",children:Object(i.jsx)(v,{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e"})})]})}var y=t(12),k=t(13),z=t(15),I=t(14);function S(){var n=Object(d.a)(["\n  width: 150px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: blue;\n"]);return S=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: none;\n  margin: 0;\n  \n  @media screen and (min-width: ","px) {\n    display: block;\n    margin-top: 50px;\n  }\n"]);return T=function(){return n},n}function A(){var n=Object(d.a)(["\n  display: flex;\n  margin-top: 120px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  \n  @media screen and (min-width: ","px) {\n    display: none;\n    margin: 0;\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(d.a)(["\n  width: 100%;\n  margin: 50px 0 0 0;\n  \n  @media screen and (min-width: ","px) {\n    width: 40%;\n    margin: 0 0 0 50px;\n  }\n"]);return B=function(){return n},n}function D(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return D=function(){return n},n}function C(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return C=function(){return n},n}function F(){var n=Object(d.a)([""]);return F=function(){return n},n}function P(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 150px 20px 100px 20px;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  \n  @media screen and (min-width: ","px) {\n    padding: 300px 100px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);return P=function(){return n},n}var J=s.a.div(P(),x),L=s.a.div(F()),M=s.a.div(C()),U=s.a.div(D()),E=s.a.img(B(),x),V=s.a.div(A(),x),q=s.a.div(T(),x),G=s.a.div(S()),H=function(n){Object(z.a)(t,n);var e=Object(I.a)(t);function t(){var n;Object(y.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={picture:0},n.getImageUrl=function(n){switch(n){case 1:return m.aboutTwo;case 2:return m.aboutThree;default:return m.aboutOne}},n}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var n=this;setInterval((function(){var e=n.state.picture,t=2===e?0:e+1;n.setState({picture:t})}),4e3)}},{key:"render",value:function(){var n=this.state.picture;return Object(i.jsxs)(J,{children:[Object(i.jsxs)(L,{children:[Object(i.jsx)(M,{children:"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0443\u0437\u043d\u0430\u0432\u0430\u0439\u0442\u0435 \u0447\u0442\u043e \u0432\u0438\u0434\u044f\u0442 \u0432\u0430\u0448\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(i.jsx)(U,{children:"\u0412\u0430\u0448\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0443\u0436\u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c, \u043d\u043e \u0432\u044b \u043d\u0435 \u0432\u0438\u0434\u0438\u0442\u0435 \u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435? Screens \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u044d\u043a\u0440\u0430\u043d\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a. \u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0441\u0432\u043e\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u043e\u0449\u0435, \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435."}),Object(i.jsx)(q,{children:Object(i.jsx)(G,{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e"})})]}),Object(i.jsx)(E,{src:this.getImageUrl(n)}),Object(i.jsx)(V,{children:Object(i.jsx)(G,{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e"})})]})}}]),t}(c.a.PureComponent);function K(){var n=Object(d.a)(["\n  font-size: 14px;\n  color: rgba(0,0,0,1);\n  line-height: 20px;\n  font-weight: bold;\n  padding-top: 10px;\n  \n  @media screen and (min-width: ","px) {\n    text-align: center;\n    padding-top: 20px;\n  }\n"]);return K=function(){return n},n}function N(){var n=Object(d.a)(["\n"]);return N=function(){return n},n}function Q(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 50px;\n  \n  @media screen and (min-width: ","px) {\n    width: 25%;\n    padding-bottom: 0;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return Q=function(){return n},n}function R(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px 0 0 0;\n  \n  @media screen and (min-width: ","px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 50px 20px 0 20px;\n  }\n"]);return R=function(){return n},n}function W(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return W=function(){return n},n}function X(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return X=function(){return n},n}function Y(){var n=Object(d.a)(["\n  width: 100%;\n  \n  @media screen and (min-width: ","px) {\n    text-align: center;\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 80px 20px;\n  width: 100%;\n  background-color: #fafafa;\n  \n  @media screen and (min-width: ","px) {\n    padding: 150px 100px;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);return Z=function(){return n},n}var $=s.a.div(Z(),x),_=s.a.div(Y(),x),nn=s.a.div(X()),en=s.a.div(W()),tn=s.a.div(R(),x),rn=s.a.div(Q(),x),cn=s.a.img(N()),an=s.a.div(K(),x);function on(){return Object(i.jsxs)($,{children:[Object(i.jsxs)(_,{children:[Object(i.jsx)(nn,{children:"\u0423\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438"}),Object(i.jsxs)(en,{children:["\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0447\u0442\u043e \u0432\u0430\u0448\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0432\u0438\u0434\u044f\u0442 \u043d\u0430 \u0441\u0432\u043e\u0438\u0445 \u044d\u043a\u0440\u0430\u043d\u0430\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438.",Object(i.jsx)("br",{}),"\u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f."]})]}),Object(i.jsxs)(tn,{children:[Object(i.jsxs)(rn,{children:[Object(i.jsx)(cn,{src:m.conversationSearch}),Object(i.jsx)(an,{children:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0435\u0441\u0441\u0438\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 Screens"})]}),Object(i.jsxs)(rn,{children:[Object(i.jsx)(cn,{src:m.conversationApp}),Object(i.jsx)(an,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"})]}),Object(i.jsxs)(rn,{children:[Object(i.jsx)(cn,{src:m.conversationAccess}),Object(i.jsx)(an,{children:"\u0412\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0435"})]})]})]})}function dn(){var n=Object(d.a)(["\n  width: 70%;\n  margin: 40px 0 0 0;\n  \n  @media screen and (min-width: ","px) {\n    width: 25%;\n    margin: 0 0 0 50px;\n  }\n"]);return dn=function(){return n},n}function sn(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return sn=function(){return n},n}function un(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return un=function(){return n},n}function pn(){var n=Object(d.a)(["\n  width: 100%;\n  \n  @media screen and (min-width: ","px) {\n    width: 60%;\n  }\n"]);return pn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 80px 20px;\n  \n  @media screen and (min-width: ","px) {\n    padding: 150px 100px;\n    flex-direction: row;\n    align-items: center;\n  }\n"]);return xn=function(){return n},n}var ln=s.a.div(xn(),x),jn=s.a.div(pn(),x),fn=s.a.div(un()),bn=s.a.div(sn()),hn=s.a.img(dn(),x);function gn(){return Object(i.jsxs)(ln,{children:[Object(i.jsxs)(jn,{children:[Object(i.jsx)(fn,{children:"\u0412\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c TeamViewer"}),Object(i.jsxs)(bn,{children:["\u0412\u0441\u0451 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u043a\u0440\u0430\u043d\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043e\u0434\u043d\u0443 \u043a\u043d\u043e\u043f\u043a\u0443.",Object(i.jsx)("br",{}),"\u0412\u044b \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u0435\u0442\u0435 \u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0435 \u0442\u0440\u0430\u0442\u044f \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041e."]})]}),Object(i.jsx)(hn,{src:m.access})]})}function On(){var n=Object(d.a)(["\n  width: 80%;\n  margin-top: 50px;\n  \n  @media screen and (min-width: ","px) {\n    width: 30%;\n  }\n"]);return On=function(){return n},n}function vn(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return vn=function(){return n},n}function mn(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return mn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  text-align: center;\n"]);return wn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  \n  @media screen and (min-width: ","px) {\n    padding: 150px 100px;\n  }\n"]);return yn=function(){return n},n}var kn=s.a.div(yn(),x),zn=s.a.div(wn()),In=s.a.div(mn()),Sn=s.a.div(vn()),Tn=s.a.img(On(),x);function An(){return Object(i.jsxs)(kn,{children:[Object(i.jsxs)(zn,{children:[Object(i.jsx)(In,{children:"Screens \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u0430\u0448\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044b"}),Object(i.jsxs)(Sn,{children:["\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u0441\u0435\u0441\u0441\u0438\u044f\u043c \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u0447\u0430\u0442\u0430 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0430",Object(i.jsx)("br",{})," \u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 54%"]})]}),Object(i.jsx)(Tn,{src:m.appsIcon})]})}function Bn(){var n=Object(d.a)(["\n  font-size: 14px;\n  color: rgba(0,0,0,1);\n  line-height: 20px;\n  font-weight: bold;\n  \n @media screen and (min-width: ","px) {\n    text-align: center;\n    padding-top: 20px;\n  }\n"]);return Bn=function(){return n},n}function Dn(){var n=Object(d.a)(["\n"]);return Dn=function(){return n},n}function Cn(){var n=Object(d.a)(["\n  width: 30px;\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 30px;\n  \n  @media screen and (min-width: ","px) {\n    width: 25%;\n    padding-bottom: 0;\n  }\n"]);return Fn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 50px 0 0 0;\n  \n  @media screen and (min-width: ","px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 50px 20px 0 20px;\n  }\n"]);return Pn=function(){return n},n}function Jn(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return Jn=function(){return n},n}function Ln(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return Ln=function(){return n},n}function Mn(){var n=Object(d.a)(["\n  width: 100%;\n  \n  @media screen and (min-width: ","px) {\n    text-align: center;\n  }\n"]);return Mn=function(){return n},n}function Un(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 80px 20px;\n  background-color: #fafafa;\n  \n  @media screen and (min-width: ","px) {\n    padding: 150px 100px;\n  }\n"]);return Un=function(){return n},n}var En=s.a.div(Un(),x),Vn=s.a.div(Mn(),x),qn=s.a.div(Ln()),Gn=s.a.div(Jn()),Hn=s.a.div(Pn(),x),Kn=s.a.div(Fn(),x),Nn=s.a.div(Cn()),Qn=s.a.img(Dn()),Rn=s.a.div(Bn(),x);function Wn(){return Object(i.jsxs)(En,{children:[Object(i.jsxs)(Vn,{children:[Object(i.jsx)(qn,{children:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"}),Object(i.jsx)(Gn,{children:"Screens \u0432\u0430\u0436\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0430\u0448\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"})]}),Object(i.jsxs)(Hn,{children:[Object(i.jsxs)(Kn,{children:[Object(i.jsx)(Qn,{src:m.securityBlock}),Object(i.jsx)(Rn,{children:"\u0421\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043e\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438"})]}),Object(i.jsx)(Nn,{}),Object(i.jsxs)(Kn,{children:[Object(i.jsx)(Qn,{src:m.securityData}),Object(i.jsx)(Rn,{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u0445 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u0435\u0441\u0441\u0438\u0439"})]})]})]})}function Xn(){var n=Object(d.a)(["\n  width: 80%;\n  padding-top: 30px;\n  \n  @media screen and (min-width: ","px) {\n    padding-top: 0;\n    width: 35%;\n  }\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(d.a)(["\n  font-size: 20px;\n  color: rgba(0,0,0,0.6);\n  line-height: 30px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  padding-bottom: 20px;\n  line-height: 40px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(d.a)([""]);return $n=function(){return n},n}function _n(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 80px 20px;\n  \n  @media screen and (min-width: ","px) {\n    padding: 150px 100px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);return _n=function(){return n},n}var ne=s.a.div(_n(),x),ee=s.a.div($n()),te=s.a.div(Zn()),ie=s.a.div(Yn()),re=s.a.img(Xn(),x);function ce(){return Object(i.jsxs)(ne,{children:[Object(i.jsxs)(ee,{children:[Object(i.jsx)(te,{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043e \u0432\u0441\u0435\u043c"}),Object(i.jsxs)(ie,{children:["Screens \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445.",Object(i.jsx)("br",{})," \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0440\u044b\u0435 \u0438 \u043d\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438."]})]}),Object(i.jsx)(re,{src:m.technologyIcon})]})}function ae(){var n=Object(d.a)(["\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 14px;\n  padding: 5px 0;\n  cursor: pointer;\n"]);return ae=function(){return n},n}function oe(){var n=Object(d.a)(["\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  user-select: none;\n"]);return oe=function(){return n},n}function de(){var n=Object(d.a)(["\n  padding: 30px 30px 0 0;\n  \n  @media screen and (min-width: ","px) {\n    padding: 30px 50px 0 0;\n  }\n"]);return de=function(){return n},n}function se(){var n=Object(d.a)(["\n  width: 100%;\n  height: 230px;\n  background-color: blue;\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px;\n  position: relative;\n  \n  @media screen and (min-width: ","px) {\n    padding: 0 100px;\n    height: 150px;\n    flex-direction: row;\n  }\n"]);return se=function(){return n},n}var ue=s.a.div(se(),x),pe=s.a.div(de(),x),xe=s.a.div(oe()),le=s.a.div(ae());function je(){return Object(i.jsxs)(ue,{children:[Object(i.jsxs)(pe,{children:[Object(i.jsx)(xe,{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}),Object(i.jsx)(le,{children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(i.jsx)(le,{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u043e\u043c"})]}),Object(i.jsxs)(pe,{children:[Object(i.jsx)(xe,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(i.jsx)(le,{children:"myscreensapp@gmail.com"})]})]})}var fe=function(){return Object(i.jsxs)(p,{children:[Object(i.jsx)(w,{}),Object(i.jsx)(H,{}),Object(i.jsx)(on,{}),Object(i.jsx)(An,{}),Object(i.jsx)(gn,{}),Object(i.jsx)(Wn,{}),Object(i.jsx)(ce,{}),Object(i.jsx)(je,{})]})},be=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(fe,{})}),document.getElementById("root")),be()}},[[26,1,2]]]);
//# sourceMappingURL=main.c2223f1a.chunk.js.map