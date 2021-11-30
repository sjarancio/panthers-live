(this["webpackJsonppanthers-live"]=this["webpackJsonppanthers-live"]||[]).push([[0],{253:function(e,t){},255:function(e,t){},257:function(e,t){},261:function(e,t){},288:function(e,t){},290:function(e,t){},299:function(e,t){},301:function(e,t){},311:function(e,t){},313:function(e,t){},435:function(e,t){},437:function(e,t){},444:function(e,t){},445:function(e,t){},535:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,l,s,d,h,b,u,x,p,j,g,f,O,m,y,v,w,k,S=n(0),A=n(87),C=n.n(A),T=n(14),E=n(226),P=n(71),M=n(15),N=M.a.nav(a||(a=Object(T.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),_=Object(M.a)(P.b)(r||(r=Object(T.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #dd3db5;\n  }\n"]))),F=Object(M.a)(E.a)(c||(c=Object(T.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),L=M.a.div(o||(o=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),I=(M.a.nav(i||(i=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Object(M.a)(P.b)(l||(l=Object(T.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),n(2)),R=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(N,{children:[Object(I.jsx)(F,{}),Object(I.jsxs)(L,{children:[Object(I.jsx)(_,{to:"/",activeStyle:!0,children:"Home"}),Object(I.jsx)(_,{to:"/about",activeStyle:!0,children:"About"}),Object(I.jsx)(_,{to:"/road-map",activeStyle:!0,children:"Road Map"})]})]})})},D=n(10),z=n(17),B=n.n(z),K=n(46),U=n(26),W=n(60),H=(n(70),n(224),n(72)),Y=n(225),G=n(20),X={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(G.a)(Object(G.a)({},X),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(G.a)(Object(G.a)({},X),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(G.a)(Object(G.a)({},e),{},{account:t.payload.account});default:return e}},Q={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(G.a)(Object(G.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(G.a)(Object(G.a)({},Q),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},J=Object(H.b)({blockchain:$,data:q}),V=[Y.a],Z=Object(H.c)(H.a.apply(void 0,V)),ee=Object(H.d)(J,Z),te=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ne=function(){return function(){var e=Object(K.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ee.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(te("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},ae=M.a.div(s||(s=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),re=M.a.div(d||(d=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),ce=M.a.div(h||(h=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),oe=M.a.div(b||(b=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ie=M.a.div(u||(u=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),le=M.a.div(x||(x=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),se=M.a.p(p||(p=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),de=(M.a.p(j||(j=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),M.a.p(g||(g=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),he=(M.a.div(f||(f=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),M.a.button(O||(O=Object(T.a)(["\n    padding: 10px;\n    border-radius: 50px;\n    border: none;\n    background-color: var(--secondary);\n    padding: 10px;\n    font-weight: bold;\n    color: var(--secondary-text);\n    width: 100px;\n    cursor: pointer;\n    box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n    -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n    -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n    :active {\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        -moz-box-shadow: none;\n    }\n"])))),be=M.a.button(m||(m=Object(T.a)(["\n    padding: 10px;\n    border-radius: 100%;\n    border: none;\n    background-color: var(--primary);\n    padding: 10px;\n    font-weight: bold;\n    font-size: 15px;\n    color: var(--primary-text);\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n    -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n    -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n    :active {\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        -moz-box-shadow: none;\n    }\n"]))),ue=M.a.div(y||(y=Object(T.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: stretched;\n    align-items: stretched;\n    width: 100%;\n    @media (min-width: 767px) {\n        flex-direction: row;\n    }\n"]))),xe=M.a.img(v||(v=Object(T.a)(["\n    width: 200px;\n    @media (min-width: 767px) {\n        width: 300px;\n    }\n    transition: width 0.5s;\n    transition: height 0.5s;\n"]))),pe=M.a.img(w||(w=Object(T.a)(["\n    box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n    border: 4px dashed var(--secondary);\n    background-color: var(--accent);\n    border-radius: 100%;\n    width: 200px;\n    @media (min-width: 900px) {\n        width: 250px;\n    }\n    @media (min-width: 1000px) {\n        width: 300px;\n    }\n    transition: width 0.5s;\n"]))),je=M.a.a(k||(k=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var ge=function(){var e=Object(W.b)(),t=Object(W.c)((function(e){return e.blockchain})),n=Object(W.c)((function(e){return e.data})),a=Object(S.useState)(!1),r=Object(U.a)(a,2),c=r[0],o=r[1],i=Object(S.useState)("Click buy to mint your NFT."),l=Object(U.a)(i,2),s=l[0],d=l[1],h=Object(S.useState)(1),b=Object(U.a)(h,2),u=b[0],x=b[1],p=Object(S.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),j=Object(U.a)(p,2),g=j[0],f=j[1],O=function(){""!==t.account&&null!==t.smartContract&&e(ne(t.account))},m=function(){var e=Object(K.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.useEffect)((function(){m()}),[]),Object(S.useEffect)((function(){O()}),[t.account]),Object(I.jsx)(ae,{children:Object(I.jsxs)(le,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:g.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(I.jsx)(xe,{alt:"logo",src:"/config/images/logo.png"}),Object(I.jsx)(ce,{}),Object(I.jsxs)(ue,{flex:1,style:{padding:24},test:!0,children:[Object(I.jsx)(le,{flex:1,jc:"center",ai:"center",children:Object(I.jsx)(pe,{alt:"example",src:"/config/images/example.gif"})}),Object(I.jsx)(ie,{}),Object(I.jsxs)(le,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(I.jsxs)(se,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[n.totalSupply," / ",g.MAX_SUPPLY]}),Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(I.jsx)(ce,{}),Number(n.totalSupply)>=g.MAX_SUPPLY?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(se,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(I.jsxs)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(I.jsx)(ce,{}),Object(I.jsx)(je,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(se,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(I.jsx)(re,{}),Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(I.jsx)(ce,{}),""===t.account||null===t.smartContract?Object(I.jsxs)(le,{ai:"center",jc:"center",children:[Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The Official Release Date for the Peaky Panthers will be announced shortly! Check out our Road map for more info! Stay tuned!!!"}),Object(I.jsx)(ce,{}),""!==t.errorMsg?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ce,{}),Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:s}),Object(I.jsx)(oe,{}),Object(I.jsxs)(le,{ai:"center",jc:"center",fd:"row",children:[Object(I.jsx)(be,{style:{lineHeight:.4},disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=u-1;e<1&&(e=1),x(e)}()},children:"-"}),Object(I.jsx)(oe,{}),Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(I.jsx)(oe,{}),Object(I.jsx)(be,{disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=u+1;e>10&&(e=10),x(e)}()},children:"+"})]}),Object(I.jsx)(ce,{}),Object(I.jsx)(le,{ai:"center",jc:"center",fd:"row",children:Object(I.jsx)(he,{disabled:c?1:0,onClick:function(n){n.preventDefault(),function(){var n=g.WEI_COST,a=g.GAS_LIMIT,r=String(n*u),c=String(a*u);console.log("Cost: ",r),console.log("Gas limit: ",c),d("Minting your ".concat(g.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint(u).send({gasLimit:String(c),to:g.CONTRACT_ADDRESS,from:t.account,value:r}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),d("WOW, the ".concat(g.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),e(ne(t.account))}))}(),O()},children:c?"BUSY":"BUY"})})]})]}),Object(I.jsx)(oe,{})]}),Object(I.jsx)(ie,{}),Object(I.jsx)(le,{flex:1,jc:"center",ai:"center",children:Object(I.jsx)(pe,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(I.jsx)(oe,{}),Object(I.jsxs)(le,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(I.jsxs)(de,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",g.NETWORK.NAME," ) and the correct address. Please note: Once you make the purchase, you cannot undo this action. Welcome to the Peaky Panthers community!"]}),Object(I.jsx)(ce,{}),Object(I.jsx)(de,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})})},fe=n.p+"static/media/webBanner1.6a37ecf7.jpg",Oe=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("hr",{style:{color:"#dd3db5"}}),Object(I.jsx)("h1",{style:{fontSize:80,color:"#dd3db5",textAlign:"center",paddingTop:"100px",paddingRight:"100px",paddingLeft:"100px",paddingBottom:"100px"},children:"About "}),Object(I.jsx)("h6",{style:{fontSize:25,color:"#dd3db5",textAlign:"center",paddingTop:"100px",paddingRight:"100px",paddingLeft:"100px",paddingBottom:"100px"},children:"The Peaky Panthers are a collection of 8,888 unique and hand crafted NFT's living on the Avalanche C-Chain. The Panthers team and community strives to be leaders and set the standard for NFT projects built on Avalanche. Peaky Panther's hodlers will have access to an insane amount of community driven value including things such as cash giveaways, games, competitions, and events. Check out our Road Map to see some of the thing we have in store! Get involved today and cement yourself as an OG in the Peaky Panthers community! Mint Date to be announced soon! "}),Object(I.jsx)("img",{class:"center-image",src:fe,alt:"pp-banner"})]})};n(535);function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ve=S.createElement("style",{type:"text/css"},"\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#E84142;}\n\t.st1{fill:#FFFFFF;}\n"),we=S.createElement("g",null,S.createElement("circle",{className:"st0",cx:127,cy:127,r:127}),S.createElement("path",{className:"st1",d:"M171.8,130.3c4.4-7.6,11.5-7.6,15.9,0l27.4,48.1c4.4,7.6,0.8,13.8-8,13.8h-55.2c-8.7,0-12.3-6.2-8-13.8 L171.8,130.3z M118.8,37.7c4.4-7.6,11.4-7.6,15.8,0l6.1,11L155.1,74c3.5,7.2,3.5,15.7,0,22.9l-48.3,83.7 c-4.4,6.8-11.7,11.1-19.8,11.6H46.9c-8.8,0-12.4-6.1-8-13.8L118.8,37.7z"}));function ke(e,t){var n=e.title,a=e.titleId,r=ye(e,["title","titleId"]);return S.createElement("svg",me({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 254 254",style:{enableBackground:"new 0 0 254 254"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?S.createElement("title",{id:a},n):null,ve,we)}var Se=S.forwardRef(ke);n.p;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=S.createElement("style",{type:"text/css"},"\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#E84142;}\n\t.st1{fill:#FFFFFF;}\n"),Ee=S.createElement("g",null,S.createElement("circle",{className:"st0",cx:127,cy:127,r:127}),S.createElement("path",{className:"st1",d:"M171.8,130.3c4.4-7.6,11.5-7.6,15.9,0l27.4,48.1c4.4,7.6,0.8,13.8-8,13.8h-55.2c-8.7,0-12.3-6.2-8-13.8 L171.8,130.3z M118.8,37.7c4.4-7.6,11.4-7.6,15.8,0l6.1,11L155.1,74c3.5,7.2,3.5,15.7,0,22.9l-48.3,83.7 c-4.4,6.8-11.7,11.1-19.8,11.6H46.9c-8.8,0-12.4-6.1-8-13.8L118.8,37.7z"}));function Pe(e,t){var n=e.title,a=e.titleId,r=Ce(e,["title","titleId"]);return S.createElement("svg",Ae({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 254 254",style:{enableBackground:"new 0 0 254 254"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?S.createElement("title",{id:a},n):null,Te,Ee)}var Me=S.forwardRef(Pe),Ne=(n.p,[{id:1,title:"10% Mint Milestone",location:"",description:"When the Peaky Panthers hit the 10% mint milestone there will be a $5,000 giveaway conducted via live stream on twitter by one of your favorite NFT influencers! ",date:"Peaky Panthers",icon:"work"},{id:2,title:"25% Mint Milestone",description:"Once the 25% Mint milestone has been reached the rarity chart for Peaky Panthers will be released so hodlers can see just how rare and exclusive the Panthers they mint are! 5 lucky Peaky Panther hodlers will also be chosen to win $1,000 each! ",date:"Peaky Panthers",icon:"work"},{id:3,title:"50% Mint Milestone",description:"Once the 50% Mint Milestone is reached we will have a huge announcement to unveil the game for which your Peaky Panther gives you access to. This game will be available exclusively to the Peaky Panther's community and will include the chance to win another significant cash prize for the lucky winners. But the 50% milestone is a big deal so we wont stop there! In further celebration we will also be giving away $10,000 to another valued member of the community.",date:"Peaky Panthers",icon:"work"},{id:4,title:"75% Mint Milestone",description:"At the 75% mint milestone we will be conducting a custom NFT contest. More details about the guidelines will be announced at the time we reach this milestone. What we can announce for now is that the winners will be voted on via polls conducted on twitter and discord so that the community can have their voice heard, as well as judged by the Peaky Panthers core development team! The 5 lucky winners chosen will receive $1,000 each!",date:"Peaky Panthers",icon:"school"},{id:5,title:"100% Mint Milestone",description:"Woohoo! 100% mint milestone means that all 8,888 unique Peaky Panthers have been minted and our community is growing stronger by the day! This massive milestone will kick off the _________. (TBA at 50% milestone) This is when the fun begins. The winner of this contest will be awarded a whopping $50,000 grand prize. May the best Panther win!",date:"Peaky Panthers",icon:"school"}]),_e=n(122);n(539);var Fe=function(){var e={background:"#FF0000"},t={background:"#FF0000"};return Object(I.jsxs)("div",{children:[Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("hr",{style:{color:"#dd3db5"}}),Object(I.jsx)("h1",{style:{fontSize:80,color:"#dd3db5",textAlign:"center",paddingTop:"100px"},children:"Road map "}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)(_e.VerticalTimeline,{children:Ne.map((function(n){var a="work"===n.icon,r=void 0!==n.buttonText&&null!==n.buttonText&&""!==n.buttonText;return Object(I.jsxs)(_e.VerticalTimelineElement,{date:n.date,dateClassName:"date",iconStyle:a?e:t,icon:a?Object(I.jsx)(Se,{}):Object(I.jsx)(Me,{}),children:[Object(I.jsx)("h3",{className:"vertical-timeline-element-title",style:{color:"#dd3db5"},children:n.title}),Object(I.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:n.location}),Object(I.jsx)("p",{id:"description",children:n.description}),r&&Object(I.jsx)("a",{className:"button ".concat(a?"workButton":"schoolButton"),href:"/",children:n.buttonText})]},n.key)}))})]})};var Le=function(){return Object(I.jsxs)(P.a,{children:[Object(I.jsx)(R,{}),Object(I.jsxs)(D.c,{children:[Object(I.jsx)(D.a,{path:"/",exact:!0,element:Object(I.jsx)(ge,{})}),Object(I.jsx)(D.a,{path:"/about",element:Object(I.jsx)(Oe,{})}),Object(I.jsx)(D.a,{path:"/road-map",element:Object(I.jsx)(Fe,{})})]})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,545)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(540);C.a.render(Object(I.jsx)(W.a,{store:ee,children:Object(I.jsx)(Le,{})}),document.getElementById("root")),Ie()}},[[541,1,2]]]);
//# sourceMappingURL=main.e44b9c02.chunk.js.map