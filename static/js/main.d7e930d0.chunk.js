(this.webpackJsonpremember_it=this.webpackJsonpremember_it||[]).push([[0],[,,,,,,function(e,t,a){e.exports={open:"Modal_open__Kk_En",closed:"Modal_closed__ubkAb",modal:"Modal_modal__2Igu4",inner:"Modal_inner__1NXfU",scrim:"Modal_scrim__1xLx1",close:"Modal_close__2ZStn"}},function(e,t,a){e.exports={card:"Card_card__1yQO7",card__icon:"Card_card__icon__1Wlq_",card__container:"Card_card__container__BoPvU"}},function(e,t,a){e.exports={header:"Header_header__ma4Rc",header__inner:"Header_header__inner__1L4H2",header__logo:"Header_header__logo__3DUHy",header__content:"Header_header__content__3GJ-f",container:"Header_container__1aRGp"}},function(e,t,a){e.exports={jumbotron:"Jumbotron_jumbotron__ICs_o",jumbotron__content:"Jumbotron_jumbotron__content__tURQe",visible:"Jumbotron_visible__398oX",hidden:"Jumbotron_hidden__114lK"}},function(e,t,a){e.exports={app:"App_app__319yx","sr-only":"App_sr-only__1tWxr"}},,,function(e,t,a){e.exports={container:"Container_container__3mw96"}},function(e,t,a){e.exports={button:"Button_button__2Y_yC"}},function(e,t,a){e.exports={counter:"Counter_counter__1kH3q"}},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(12),c=a.n(r),i=a(16),s=a(1),l=a(2),u=a(4),d=a(3),m=a(5),h=a(13),p=a.n(h),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:p.a.container},this.props.children)}}]),t}(o.Component),_=a(8),f=a.n(_),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:f.a.header},n.a.createElement(b,null,n.a.createElement("div",{className:f.a.header__inner},n.a.createElement("div",{className:f.a.header__logo},n.a.createElement("h1",{className:"heading--1"},"Remember It")),n.a.createElement("div",{className:f.a.header__content},this.props.children))))}}]),t}(o.Component),j=a(14),v=a.n(j),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{className:v.a.button,onClick:this.props.handler},this.props.children)}}]),t}(o.Component),O=a(9),S=a.n(O),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={isDismissed:!1},a.dismissHandler=function(){a.setState({isDismissed:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"text-center ".concat(S.a.jumbotron," ").concat(this.state.isDismissed?S.a.hidden:S.a.visible),"aria-hidden":this.state.isDismissed?"true":null},n.a.createElement("div",{className:S.a.jumbotron__content},n.a.createElement("h2",{className:"heading--4"},this.props.title),n.a.createElement("p",null,this.props.children),n.a.createElement("p",null,this.props.dismissable&&n.a.createElement(y,{handler:this.dismissHandler},"Dismiss"))))}}]),t}(o.Component),E=a(7),N=a.n(E),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:N.a.card__container},this.props.children)}}]),t}(o.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.color,t=e.id,a=e.color1,o=e.color2,r=e.icon,c=e.name,i={background:"linear-gradient(to right, ".concat(a,", ").concat(o,")")},s={textShadow:"2px 2px 10px ".concat(o)};return n.a.createElement("button",{id:t,className:N.a.card,style:i,onClick:this.props.checkChoice,"aria-label":c},n.a.createElement("i",{className:"material-icons ".concat(N.a.card__icon),style:s,"aria-hidden":"true"},r))}}]),t}(o.Component),x=a(15),R=a.n(x),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:R.a.counter},n.a.createElement("span",{className:"heading--5","aria-live":"polite"},this.props.title,": ",this.props.count))}}]),t}(o.Component),H=a(6),M=a.n(H),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).openDialog=function(e,t){a.setState({open:!0,score:e,topScore:t},(function(){a.closeRef.current.focus()})),a.body=document.getElementsByTagName("body")[0],a.body.style.height="100%",a.body.style.overflow="hidden"},a.closeDialog=function(){a.body.style="",a.setState({open:!1},(function(){}))},a.closeHandler=function(e){e.preventDefault(),"scrim"!==e.target.id&&"close"!==e.target.id&&"close-inner"!==e.target.id||a.closeDialog()},a.state={open:!1,score:0,topScore:0},a.closeRef=n.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"scrim",className:this.state.open?M.a.open+" "+M.a.scrim:M.a.closed+" "+M.a.scrim,onClick:function(t){return e.closeHandler(t)}},n.a.createElement("div",{id:"dialog",role:"dialog","aria-labelledby":"title","aria-describedby":"description",className:this.state.open?M.a.open+" "+M.a.modal:M.a.closed+" "+M.a.modal},n.a.createElement("h2",{id:"title",className:"heading--4"},12===this.state.score&&"You won!",this.state.score>this.state.topScore&&12!==this.state.score&&"Top score!",this.state.score<this.state.topScore&&this.state.score<12&&"Round over",this.state.score===this.state.topScore&&this.state.score<12&&"Round over"),n.a.createElement("p",{id:"description"},12===this.state.score&&"You scored the maximum of 12 points! ",this.state.score>this.state.topScore&&"Your score of ".concat(this.state.score," beat your top score of ").concat(this.state.topScore,"."),this.state.score<this.state.topScore&&this.state.score<12&&"Your score was ".concat(this.state.score),this.state.score===this.state.topScore&&this.state.score<12&&"Your score was ".concat(this.state.score)),n.a.createElement("button",{id:"close",className:M.a.close,"aria-label":"close dialog",ref:this.closeRef,onClick:function(t){return e.closeHandler(t)}},n.a.createElement("span",{id:"close-inner",onClick:function(t){return e.closeHandler(t)}},"\xd7"))))}}]),t}(o.Component),J=[{id:"1",name:"aqua",color1:"rgba(166,255,203,1.0)",color2:"rgba(18,216,250,1.0)",icon:"ac_unit",iconSrName:"snowflake"},{id:"2",name:"purple",color1:"rgba(225,0,255,1.0)",color2:"rgba(127,0,255,1.0)",icon:"color_lens",iconSrName:"palette"},{id:"3",name:"lime",color1:"rgba(220,227,91,1.0)",color2:"rgba(69,182,73,1.0)",icon:"eco",iconSrName:"leaf"},{id:"4",name:"citrus",color1:"rgba(253,200,48,1.0)",color2:"rgba(243,115,53,1.0)",icon:"grade",iconSrName:"star"},{id:"5",name:"bubblegum",color1:"rgba(255,142,208,1.0)",color2:"rgba(228,90,203,1.0)",icon:"favorite",iconSrName:"heart"},{id:"6",name:"rose",color1:"rgba(255,173,221,1.0)",color2:"rgba(255,110,139,1.0)",icon:"filter_vintage",iconSrName:"flower"},{id:"7",name:"avocado",color1:"rgba(217,228,90,1.0)",color2:"rgba(157,178,48,1.0)",icon:"public",iconSrName:"earth"},{id:"8",name:"turquoise",color1:"rgba(99,236,211,1.0)",color2:"rgba(21,161,162,1.0)",icon:"beach_access",iconSrName:"umbrella"},{id:"9",name:"gold",color1:"rgba(255,223,122,1.0)",color2:"rgba(255,162,27,1.0)",icon:"emoji_emotions",iconSrName:"emoticon"},{id:"10",name:"sky",color1:"rgba(19,238,255,1.0)",color2:"rgba(122,167,255,1.0)",icon:"cloud",iconSrName:"cloud"},{id:"11",name:"melon",color1:"rgba(186,255,216,1.0)",color2:"rgba(12,207,138,1.0)",icon:"toys",iconSrName:"pinwheel"},{id:"12",name:"ultramarine",color1:"rgba(46,134,255,1.0)",color2:"rgba(31,18,218,1.0)",icon:"brightness_2",iconSrName:"moon"}],T=(a(22),a(23),a(24),a(10)),Y=a.n(T),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).shuffleArray=function(){for(var e=Object(i.a)(a.state.colors).slice(0),t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*t),n=e[t];e[t]=e[o],e[o]=n}a.setState({colors:e})},a.incrementScore=function(){var e=a.state.score+1;a.setState({score:e})},a.setPicked=function(e){var t=a.state.picked.concat([e]);a.setState({picked:t})},a.setTopScore=function(e){var t=e>a.state.topScore?e:a.state.topScore;a.setState({topScore:t})},a.resetGame=function(){a.setState({picked:[],score:0})},a.checkChoice=function(e){var t=e.currentTarget.id;-1===a.state.picked.indexOf(t)?(a.setPicked(t),a.shuffleArray(),a.incrementScore(),11===a.state.score&&a.modalRef.current.openDialog(12,a.state.topScore)):(a.setTopScore(a.state.score),a.shuffleArray(),a.modalRef.current.openDialog(a.state.score,a.state.topScore),a.resetGame())},a.state={colors:J,score:0,picked:[],topScore:0},a.modalRef=n.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.modalRef.current.closeDialog()}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:Y.a.app},n.a.createElement(g,null,n.a.createElement(D,{count:this.state.score,title:"Score"}),n.a.createElement(D,{count:this.state.topScore,title:"Top Score"})),n.a.createElement("main",{className:Y.a.main},n.a.createElement(k,{dismissable:!0,title:"Click a button to begin!"},"Click on a button to earn points, but don't click the same button more than once!",n.a.createElement("span",{className:Y.a["sr-only"]},"Please note: buttons will shuffle after each round. A round is lost by clicking the same button twice within a round. There are twelve possible points in a round.")),n.a.createElement(b,null,n.a.createElement(C,null,this.state.colors.map((function(t,a){return n.a.createElement(w,{key:a,color:t,checkChoice:e.checkChoice})})))),n.a.createElement(A,{ref:this.modalRef})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d7e930d0.chunk.js.map