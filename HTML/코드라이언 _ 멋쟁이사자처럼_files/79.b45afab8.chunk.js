(this["webpackJsonpcodelion-front"]=this["webpackJsonpcodelion-front"]||[]).push([[79],{1946:function(e,t,r){e.exports=r.p+"static/media/img-lock-icon.be4ca38d.svg"},2175:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r.n(a),c=r(21),o=r(3),i=r(246),d=r(0),s=r.n(d),u=r(61),l=r(594),p=r(12),m=r(247),f=r(1945),w=r.n(f),S=r(598),E=r.n(S),O=r(1946),T=r.n(O),h=r(32);t.default=Object(u.b)((function(e){var t=e.common.apollo.client,r=e.cert;return{client:t,certData:r.certData,isCertCompleted:r.isCertCompleted,authBasic:e.auth.authBasic}}),(function(e){var t=e.cert;return{updateCertStepLog:t.updateCertStepLog,completedCert:t.completedCert,toggleModalCert:t.toggleModalCert}}))((function(e){var t=e.show,r=e.onHide,a=e.certData,u=e.updateCertStepLog,f=e.completedCert,S=e.onIntervalStart,O=e.isCertCompleted,b=e.authBasic,C=e.toggleModalCert,v=Object(d.useRef)(""),y=Object(d.useRef)(""),P=Object(d.useRef)(""),g=Object(d.useRef)(""),j=Object(d.useRef)(0),x=Object(d.useRef)(p.a),R=Object(d.useRef)(Object(p.l)().substring(0,10)),A=Object(d.useRef)(0),_=Object(d.useRef)(""),N=Object(d.useRef)(""),D=Object(d.useRef)(),I=Object(d.useState)({focus:{email:!1,title:!1,content:!1,ticketType:""},otpVal:"",AGTID:p.a,USRID:"",SESSIONID:Object(p.l)().substring(0,10),OTPTYPE:"102",isLoading:!0,CLASS_AGENT_PK:"",CLASS_STEP_GID:"",COURSE_AGENT_PK:"",CLASS_TME:1}),L=Object(i.a)(I,2),K=L[0],k=L[1],G=function(){try{w.a.ajax({type:"POST",url:"https://fds.hrdkorea.or.kr/fdsService/hrdOTP/JSP/clientService/chkOtpDeviceStatus.jsp",crossDomain:!0,timeout:5e3,data:{AGTID:x.current,USRID:v.current},dataType:"xml",success:function(e){var t=w()(e).find("ConnStatus").text(),r=w()(e).find("OtpStatus").text();w()(e).find("ErrCnt").text(),w()(e).find("Remark").text();"101"==t&&("101"!=r&&"103"!=r||window.ExecuteOTP())},error:function(e,t,r){}})}catch(e){}};Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.v4();case 2:_.current=e.sent;case 3:case"end":return e.stop()}}),e)})))(),Object(d.useEffect)((function(){var e=a.USRID,r=a.CLASS_AGENT_PK,n=a.CLASS_TME;if(e&&t&&b){var c=b.organization,i=c.courseAgentPk,d=c.classAgentPk;k(Object(o.a)(Object(o.a)({},K),{},{USRID:e,CLASS_AGENT_PK:i,CLASS_STEP_GID:r,COURSE_AGENT_PK:d,CLASS_TME:n})),P.current=r,y.current=i,g.current=d,j.current=n,v.current=e,setTimeout((function(){k(Object(o.a)(Object(o.a)({},K),{},{isLoading:!1,otpVal:""})),D.current="",window.hrdFrame.loadHrdFrame(!0)}),1500)}}),[a,b,t]);return window.OtpDoneListener=function(e){"101"!==e&&alert("HRD System Load Error !! "+e)},window.loadAPIReceiver=function(e,t){"101"===e&&window.hrdFrame.loadOTP(x.current,v.current,R.current,"102".current)},window.loadOtpReceiver=function(e,t){"102"===e&&"OTP \uc0ac\uc6a9\uc790 \uc815\ubcf4\uc870\ud68c \uc624\ub958"===t&&G()},window.ExecuteOTP=function(){try{window.hrdFrame.loadOTP(x.current,v.current,R.current,"102".current)}catch(e){}},window.showKeypad=function(e){window.hrdFrame.loadKeyPad(e,"Frame","400px")},window.loadKeypadReceiver=function(e,t){},window.hideKeypad=function(){window.hrdFrame.hideKeyPad()},s.a.createElement(l.a,{dialogClassName:"certification-modal",show:t,size:"xl",backdrop:"static",onHide:r,centered:!0,onExited:function(){b.stats.isCertified||O||C(!0)}},s.a.createElement(l.a.Header,null,s.a.createElement("h1",{className:"text-center m-0 w-100"},s.a.createElement("div",null,s.a.createElement("img",{src:T.a,alt:"",width:"70",height:"70"})),s.a.createElement("div",null,"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \ubd80\uc815\ubc29\uc9c0\ub97c \uc704\ud574\uc11c \ubcf4\uc548\uc808\ucc28\ub97c \uac70\uce58\uace0 \uc788\uc2b5\ub2c8\ub2e4."),s.a.createElement("div",null,"\ud074\ub77c\uc6b0\ub4dc OTP \ub4f1\ub85d\ud6c4 \ud558\ub2e8\uc5d0 \ub098\ud0c0\ub098\ub294 \uc22b\uc790\ub97c \ud0a4\ud328\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc785\ub825\ud6c4 [\uc778\uc99d\ud558\uae30] \ubc84\ud2bc\uc744\ub20c\ub7ec\uc8fc\uc138\uc694."),s.a.createElement("div",null,"OTP \ube44\ubc00\ubc88\ud638\uac00 \ubcf4\uc77c\ub54c\uae4c\uc9c0 \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."))),s.a.createElement(l.a.Body,{className:"p-0 text-center"},s.a.createElement("div",{className:"cert-body-sub w-100 text-center"},s.a.createElement("input",{type:"password",placeholder:"Enter Key",ref:D,id:"otpVal",className:"textbox",value:K.otpVal,onClick:function(){window.showKeypad(D.current)},onChange:function(e){k(Object(o.a)(Object(o.a)({},K),{},{otpVal:e.target.value}))}})," ",s.a.createElement("input",{type:"button",value:"\uc778\uc99d\ud558\uae30",size:"sm",className:"button",onClick:function(){!function(e){var t=e.certType,a=void 0===t?0:t,n=e.order,c=e.stepGid,o=e.userIp;e.timestamp;try{window.hrdFrame.hideKeyPad()}catch(s){}try{var i=K.otpVal||D.current.value;if(null==i||""==i)return alert("otp \ubc88\ud638\ub97c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624."),!1;var d=window.hrdFrame.getUT();w.a.ajax({type:"POST",url:"https://fds.hrdkorea.or.kr/fdsService/hrdOTP/JSP/validateOtp/chkOtpResult.jsp",crossDomain:!0,data:{AGTID:x.current,USRID:v.current,SESSIONID:R.current,OTPNO:i,COURSE_AGENT_PK:g.current,CLASS_AGENT_PK:y.current,EVAL_CD:"01",EVAL_TYPE:"\uc9c4\ub3c4",CLASS_TME:j.current,UT:d},dataType:"xml",success:function(e){if("101"==w()(e).find("RetVal").text()){window.hideKeypad(),u({certType:a,order:n,stepGid:c,userIp:o,timestamp:new Date(d).getTime()/1e3,certNumber:i,isCert:!0,sortation:n%8===0?n:1})&&(h.d.includes(j.current)&&localStorage.setItem("CERT_LAST_TME",j.current),f(!0),r(!0),S(),alert("OTP \uc778\uc99d\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub8e8\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."))}else{window.hideKeypad();u({certType:a,order:n,stepGid:c,userIp:o,timestamp:new Date(d).getTime()/1e3,certNumber:i,isCert:!1,sortation:n%8===0?n:1});window.ExecuteOTP()}},error:function(e,t,r){try{window.hideKeypad()}catch(s){}}})}catch(s){try{window.hideKeypad()}catch(s){}}}({certType:parseInt(A.current),order:parseInt(j.current),stepGid:P.current,userIp:_.current})}})," ",s.a.createElement("input",{type:"button",value:"RESET",size:"sm",className:"button",onClick:function(){G()}}))),s.a.createElement(l.a.Footer,{className:"p-0 text-center"},K.isLoading&&s.a.createElement("div",null,s.a.createElement(m.a,{isNotFixed:!0})),s.a.createElement("div",{className:"cert-body w-100 text-center"},s.a.createElement("div",{id:"hrdOtpFrame",ref:N,className:"cert-body-top w-100 text-center"},"\xa0"),s.a.createElement("div",{className:"cert-body-footer text-left"},"\u203b \uc778\uc99d\uc11c \uc120\ud0dd\uc2dc \ud074\ub77c\uc6b0\ub4dc OTP\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694"))))}))}}]);